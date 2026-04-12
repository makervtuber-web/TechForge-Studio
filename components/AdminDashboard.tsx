import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoItem, IndustryDemos, DEFAULT_DEMOS } from '../types/demos.ts';

interface AdminDashboardProps {
  lang: 'en' | 'zh';
  isOpen: boolean;
  onClose: () => void;
}

// Custom demos storage key
const CUSTOM_DEMOS_KEY = 'velocode_custom_demos';

interface CustomDemoData {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  url: string;
  industryId: string;
  createdAt: number;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ lang, isOpen, onClose }) => {
  const [activeIndustry, setActiveIndustry] = useState<string>('personal');
  const [customDemos, setCustomDemos] = useState<CustomDemoData[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Form states
  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formUrl, setFormUrl] = useState('');
  const [formThumbnail, setFormThumbnail] = useState('🌐');
  
  // Load custom demos from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(CUSTOM_DEMOS_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCustomDemos(parsed);
      } catch (e) {
        console.error('Failed to parse custom demos:', e);
      }
    }
  }, []);
  
  // Save to localStorage
  const saveCustomDemos = (demos: CustomDemoData[]) => {
    localStorage.setItem(CUSTOM_DEMOS_KEY, JSON.stringify(demos));
    setCustomDemos(demos);
  };
  
  // Get industries list
  const industries = DEFAULT_DEMOS.industries;
  
  // Get demos for active industry
  const defaultDemosForIndustry = industries.find(ind => ind.industryId === activeIndustry)?.demos || [];
  const customDemosForIndustry = customDemos.filter(d => d.industryId === activeIndustry);
  
  // Handle add new demo
  const handleAddDemo = () => {
    if (!formName || !formUrl) return;
    
    const newDemo: CustomDemoData = {
      id: `custom-${Date.now()}`,
      name: formName,
      description: formDescription || (lang === 'zh' ? '自定義展示案例' : 'Custom showcase demo'),
      thumbnail: formThumbnail,
      url: formUrl,
      industryId: activeIndustry,
      createdAt: Date.now()
    };
    
    const updated = [...customDemos, newDemo];
    saveCustomDemos(updated);
    
    // Reset form
    setFormName('');
    setFormDescription('');
    setFormUrl('');
    setFormThumbnail('🌐');
    setShowAddForm(false);
  };
  
  // Handle delete demo
  const handleDeleteDemo = (id: string) => {
    if (!confirm(lang === 'zh' ? '確定要刪除此案例嗎？' : 'Are you sure you want to delete this demo?')) return;
    const updated = customDemos.filter(d => d.id !== id);
    saveCustomDemos(updated);
  };
  
  // Translation helper
  const t = {
    title: lang === 'zh' ? 'Demo 管理後台' : 'Demo Admin Dashboard',
    selectIndustry: lang === 'zh' ? '選擇行業領域' : 'Select Industry',
    defaultDemos: lang === 'zh' ? '預設案例' : 'Default Demos',
    customDemos: lang === 'zh' ? '自定義案例' : 'Custom Demos',
    addDemo: lang === 'zh' ? '新增案例' : 'Add Demo',
    demoName: lang === 'zh' ? '案例名稱' : 'Demo Name',
    description: lang === 'zh' ? '描述' : 'Description',
    websiteUrl: lang === 'zh' ? '網站連結' : 'Website URL',
    icon: lang === 'zh' ? '圖示' : 'Icon',
    save: lang === 'zh' ? '儲存' : 'Save',
    cancel: lang === 'zh' ? '取消' : 'Cancel',
    delete: lang === 'zh' ? '刪除' : 'Delete',
    openLink: lang === 'zh' ? '開啟連結' : 'Open Link',
    noCustomDemos: lang === 'zh' ? '尚未新增自定義案例' : 'No custom demos yet',
    close: lang === 'zh' ? '關閉' : 'Close',
    preview: lang === 'zh' ? '前台會顯示如下' : 'Frontend Preview',
    copy: lang === 'zh' ? '複製' : 'Copy',
    copied: lang === 'zh' ? '已複製' : 'Copied',
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
              ⚙️
            </div>
            <div>
              <h2 className="text-xl font-bold">{t.title}</h2>
              <p className="text-indigo-100 text-sm">
                {lang === 'zh' ? '管理各領域展示案例' : 'Manage showcase demos for all industries'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex h-[calc(90vh-100px)]">
          {/* Sidebar - Industries */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {t.selectIndustry}
              </h3>
              <div className="space-y-1">
                {industries.map((industry) => (
                  <button
                    key={industry.industryId}
                    onClick={() => setActiveIndustry(industry.industryId)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeIndustry === industry.industryId
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>{industry.industryName}</span>
                      <span className="text-xs text-gray-400">
                        {industry.demos.length + customDemos.filter(d => d.industryId === industry.industryId).length}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Industry Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {industries.find(ind => ind.industryId === activeIndustry)?.industryName}
                </h3>
                <p className="text-sm text-gray-500">
                  {lang === 'zh' 
                    ? `管理此領域的展示案例` 
                    : `Manage showcase demos for this industry`}
                </p>
              </div>
              <button
                onClick={() => setShowAddForm(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                {t.addDemo}
              </button>
            </div>
            
            {/* Add Form */}
            <AnimatePresence>
              {showAddForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-indigo-50 rounded-xl p-4 mb-6 border border-indigo-200"
                >
                  <h4 className="font-semibold text-indigo-900 mb-4">{t.addDemo}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.demoName} *
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder={lang === 'zh' ? '例如：品牌設計師個人網站' : 'e.g., Brand Designer Portfolio'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.icon}
                      </label>
                      <select
                        value={formThumbnail}
                        onChange={(e) => setFormThumbnail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="🌐">🌐 網站</option>
                        <option value="🎨">🎨 設計</option>
                        <option value="💼">💼 商業</option>
                        <option value="🏥">🏥 醫療</option>
                        <option value="🛍️">🛍️ 零售</option>
                        <option value="📱">📱 科技</option>
                        <option value="✨">✨ 創意</option>
                        <option value="🎯">🎯 專業</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.websiteUrl} *
                      </label>
                      <input
                        type="url"
                        value={formUrl}
                        onChange={(e) => setFormUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.description}
                      </label>
                      <textarea
                        value={formDescription}
                        onChange={(e) => setFormDescription(e.target.value)}
                        placeholder={lang === 'zh' ? '簡短描述這個案例的特色...' : 'Briefly describe this showcase...'}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {t.cancel}
                    </button>
                    <button
                      onClick={handleAddDemo}
                      disabled={!formName || !formUrl}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t.save}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Default Demos Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {t.defaultDemos}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {defaultDemosForIndustry.map((demo) => (
                  <div
                    key={demo.id}
                    className="bg-gray-50 rounded-lg p-3 border border-gray-200 opacity-75"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{demo.thumbnail}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{demo.name}</span>
                          {demo.isDefault && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                              {lang === 'zh' ? '預設' : 'Default'}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{demo.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Custom Demos Section */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {t.customDemos}
              </h4>
              {customDemosForIndustry.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <p className="text-gray-400">{t.noCustomDemos}</p>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="mt-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                  >
                    {t.addDemo} →
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {customDemosForIndustry.map((demo) => (
                    <div
                      key={demo.id}
                      className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{demo.thumbnail}</span>
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-gray-900">{demo.name}</span>
                          <p className="text-xs text-gray-500 mt-1">{demo.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <a
                              href={demo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              {t.openLink}
                            </a>
                            <button
                              onClick={() => handleDeleteDemo(demo.id)}
                              className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              {t.delete}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Preview Note */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700">
                <strong>{t.preview}:</strong>{' '}
                {lang === 'zh' 
                  ? '新增的案例會立即出現在前台的「選擇案例」面板中，供訪客查看。'
                  : 'Added demos will immediately appear in the frontend "Select Demo" panel for visitors to view.'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;

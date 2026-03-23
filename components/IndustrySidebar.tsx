import React from 'react';
import { motion } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface IndustrySidebarProps {
  lang: 'en' | 'zh';
  activeSection: string;
  onSectionChange: (section: string) => void;
  isVisible: boolean;
}

const IndustrySidebar: React.FC<IndustrySidebarProps> = ({
  lang,
  activeSection,
  onSectionChange,
  isVisible
}) => {
  const t = UI_TEXT[lang];

  const industries = [
    {
      id: 'tech',
      title: lang === 'zh' ? '科技與軟體' : 'Tech & Software',
      description: lang === 'zh' ? '賽博設計展示' : 'Cyber Design Showcase',
      icon: '💻',
      color: '#3b82f6'
    },
    {
      id: 'healthcare',
      title: lang === 'zh' ? '醫療健康' : 'Healthcare',
      description: lang === 'zh' ? '智慧診所系統' : 'Smart Clinic System',
      icon: '🏥',
      color: '#10b981'
    },
    {
      id: 'creative',
      title: lang === 'zh' ? '創意設計' : 'Creative & Design',
      description: lang === 'zh' ? '創意工作室' : 'Creative Studio',
      icon: '🎨',
      color: '#f59e0b'
    },
    {
      id: 'professional',
      title: lang === 'zh' ? '專業服務' : 'Professional Services',
      description: lang === 'zh' ? '專業服務機構' : 'Professional Services Group',
      icon: '🏢',
      color: '#6366f1'
    },
    {
      id: 'retail',
      title: lang === 'zh' ? '零售餐飲' : 'Retail & F&B',
      description: lang === 'zh' ? '智能零售系統' : 'Smart Retail System',
      icon: '🛍️',
      color: '#ef4444'
    },
    {
      id: 'personal',
      title: lang === 'zh' ? '個人專業' : 'Personal Professional',
      description: lang === 'zh' ? '個人品牌展示' : 'Personal Brand Showcase',
      icon: '🌟',
      color: '#8b5cf6'
    }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={() => onSectionChange('')}
      />
      
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: 'spring', damping: 25 }}
        className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              {lang === 'zh' ? '行業展示' : 'Industry Showcase'}
            </h2>
            <button
              onClick={() => onSectionChange('')}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm opacity-90">
            {lang === 'zh' 
              ? '選擇您感興趣的行業，查看專業的網站設計方案'
              : 'Choose your industry of interest to see professional website design solutions'
            }
          </p>
        </div>

        {/* Industry List */}
        <div className="p-4">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSectionChange(industry.id)}
              className={`w-full text-left p-4 rounded-xl mb-3 transition-all ${
                activeSection === industry.id
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-500 shadow-lg'
                  : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${industry.color}20` }}
                >
                  {industry.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
                </div>
                {activeSection === industry.id && (
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              {lang === 'zh' ? '需要定制方案？' : 'Need custom solution?'}
            </p>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
              {lang === 'zh' ? '聯絡我們' : 'Contact Us'}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default IndustrySidebar;

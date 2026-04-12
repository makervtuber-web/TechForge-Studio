import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DemoItem, DEFAULT_DEMOS } from '../types/demos.ts';

interface CustomDemoData {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  url: string;
  industryId: string;
  createdAt: number;
}

interface DemoGalleryProps {
  industryId: string;
  industryName: string;
  lang: 'en' | 'zh';
  onDemoSelect: (demoId: string) => void;
  currentDemoId: string;
  isOpen: boolean;
  onClose: () => void;
}

const CUSTOM_DEMOS_KEY = 'velocode_custom_demos';

const DemoGallery: React.FC<DemoGalleryProps> = ({
  industryId,
  industryName,
  lang,
  onDemoSelect,
  currentDemoId,
  isOpen,
  onClose
}) => {
  const [demos, setDemos] = useState<DemoItem[]>([]);
  const [customDemos, setCustomDemos] = useState<CustomDemoData[]>([]);

  // Load default demos for this industry
  useEffect(() => {
    const industryData = DEFAULT_DEMOS.industries.find(
      ind => ind.industryId === industryId
    );
    if (industryData) {
      setDemos(industryData.demos);
    }
  }, [industryId]);

  // Load custom demos from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(CUSTOM_DEMOS_KEY);
    if (stored) {
      try {
        const parsed: CustomDemoData[] = JSON.parse(stored);
        setCustomDemos(parsed.filter(d => d.industryId === industryId));
      } catch (e) {
        console.error('Failed to parse custom demos:', e);
      }
    }
  }, [industryId, isOpen]); // Refresh when opened

  const handleDemoClick = (demo: DemoItem) => {
    onDemoSelect(demo.id);
    onClose();
  };

  const handleCustomDemoClick = (demo: CustomDemoData) => {
    // Open external link in new tab
    window.open(demo.url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  // Translation helper
  const t = {
    selectDemo: lang === 'zh' ? '選擇展示案例' : 'Select Showcase Demo',
    clickToPreview: lang === 'zh' ? '點擊預覽 →' : 'Click to Preview →',
    clickToVisit: lang === 'zh' ? '點擊訪問 →' : 'Click to Visit →',
    current: lang === 'zh' ? '當前展示' : 'Current',
    default: lang === 'zh' ? '預設' : 'Default',
    custom: lang === 'zh' ? '自定義' : 'Custom',
  };

  const defaultDemos = demos.filter(d => d.isDefault || !d.id.includes('custom'));
  const totalDemos = defaultDemos.length + customDemos.length;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-6"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl">
            🎯
          </div>
          <div>
            <h3 className="font-bold text-lg">{t.selectDemo}</h3>
            <p className="text-blue-100 text-sm">{industryName}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Subtitle */}
      <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
        <p className="text-sm text-blue-700">
          {lang === 'zh'
            ? `請選擇以下 ${totalDemos} 個展示案例之一`
            : `Please select one of the ${totalDemos} showcase demos below`}
        </p>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Default Demos */}
            {defaultDemos.map((demo) => (
              <motion.div
                key={demo.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleDemoClick(demo)}
                className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                  demo.id === currentDemoId
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-sm bg-white'
                }`}
              >
                {/* Thumbnail & Status */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{demo.thumbnail}</span>
                  <div className="flex flex-col gap-1 items-end">
                    {demo.isDefault && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {t.default}
                      </span>
                    )}
                    {demo.id === currentDemoId && (
                      <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full font-medium">
                        {t.current}
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{demo.name}</h4>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {demo.description}
                </p>

                {/* Preview CTA */}
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <span className="text-xs text-blue-600 font-medium flex items-center gap-1">
                    {t.clickToPreview}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Custom Demos */}
            {customDemos.map((demo) => (
              <motion.div
                key={demo.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCustomDemoClick(demo)}
                className="cursor-pointer rounded-xl border-2 border-dashed border-indigo-300 p-4 transition-all hover:border-indigo-500 hover:shadow-sm bg-indigo-50/50"
              >
                {/* Thumbnail & Status */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{demo.thumbnail}</span>
                  <div className="flex flex-col gap-1 items-end">
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                      {t.custom}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{demo.name}</h4>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {demo.description}
                </p>

                {/* Visit CTA */}
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <span className="text-xs text-indigo-600 font-medium flex items-center gap-1">
                    {t.clickToVisit}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}

          </div>
      </div>
    </motion.div>
  );
};

export default DemoGallery;

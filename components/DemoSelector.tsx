import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoItem, IndustryDemos, DEFAULT_DEMOS } from '../types/demos.ts';

interface DemoSelectorProps {
  industryId: string;
  industryName: string;
  lang: 'en' | 'zh';
  onDemoSelect: (demoId: string) => void;
  currentDemoId: string;
}

const DemoSelector: React.FC<DemoSelectorProps> = ({
  industryId,
  industryName,
  lang,
  onDemoSelect,
  currentDemoId
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [demos, setDemos] = useState<DemoItem[]>([]);
  const [activeDemo, setActiveDemo] = useState<DemoItem | null>(null);

  // Load demos for this industry
  useEffect(() => {
    const industryData = DEFAULT_DEMOS.industries.find(
      ind => ind.industryId === industryId
    );
    if (industryData) {
      setDemos(industryData.demos);
      const current = industryData.demos.find(d => d.id === currentDemoId);
      setActiveDemo(current || industryData.demos.find(d => d.isDefault) || null);
    }
  }, [industryId, currentDemoId]);

  const handleDemoClick = (demo: DemoItem) => {
    setActiveDemo(demo);
    onDemoSelect(demo.id);
    setIsOpen(false);
  };

  // Translation helper
  const t = {
    selectDemo: lang === 'zh' ? '選擇 Demo' : 'Select Demo',
    switchDemo: lang === 'zh' ? '切換展示' : 'Switch Demo',
    defaultDemo: lang === 'zh' ? '預設 Demo' : 'Default Demo',
    availableDemos: lang === 'zh' ? '可用展示' : 'Available Demos',
    addYourOwn: lang === 'zh' ? '添加您的網站' : 'Add Your Website',
    close: lang === 'zh' ? '關閉' : 'Close',
  };

  return (
    <>
      {/* Selector Button */}
      <div className="absolute top-2 left-2 z-[100]">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg shadow-md hover:bg-white transition-all text-sm"
        >
          <span className="text-lg">{activeDemo?.thumbnail || '🎯'}</span>
          <span className="font-medium text-gray-700 hidden sm:inline">
            {activeDemo?.name || t.selectDemo}
          </span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Demo Selection Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[200]"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 sm:inset-10 md:inset-20 bg-white rounded-2xl z-[201] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">{t.availableDemos}</h2>
                  <p className="text-blue-100 text-sm">{industryName}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Demo Grid */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {demos.map((demo) => (
                    <motion.div
                      key={demo.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDemoClick(demo)}
                      className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                        demo.id === currentDemoId
                          ? 'border-blue-500 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-4xl">{demo.thumbnail}</span>
                        {demo.isDefault && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            {t.defaultDemo}
                          </span>
                        )}
                        {demo.id === currentDemoId && (
                          <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                            {lang === 'zh' ? '當前' : 'Active'}
                          </span>
                        )}
                      </div>

                      {/* Info */}
                      <h3 className="font-bold text-gray-900 mb-1">{demo.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{demo.description}</p>

                      {/* Preview Hint */}
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <span className="text-xs text-blue-600 font-medium">
                          {lang === 'zh' ? '點擊預覽 →' : 'Click to Preview →'}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Add Custom Website Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center text-center min-h-[200px] cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-700 mb-1">{t.addYourOwn}</h3>
                    <p className="text-sm text-gray-500">
                      {lang === 'zh' 
                        ? '添加您為客戶打造的網站到展示列表' 
                        : 'Add your client website to the showcase'}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  {lang === 'zh' 
                    ? `${demos.length} 個可用展示`
                    : `${demos.length} demos available`
                  }
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DemoSelector;

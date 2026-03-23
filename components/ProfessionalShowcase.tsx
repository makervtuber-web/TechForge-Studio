import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface ProfessionalShowcaseProps {
  lang: 'en' | 'zh';
}

const ProfessionalShowcase: React.FC<ProfessionalShowcaseProps> = ({ lang }) => {
  const [showDemo, setShowDemo] = useState(false);

  const painPoints = [
    {
      id: 1,
      problem: lang === 'zh' ? '客戶信任度低' : 'Low Client Trust',
      solution: lang === 'zh' ? '權威形象建立' : 'Authority Building',
      impact: lang === 'zh' ? '信任度提升85%' : 'Trust Increase 85%',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      problem: lang === 'zh' ? '流程效率低下' : 'Inefficient Processes',
      solution: lang === 'zh' ? '智能流程優化' : 'Smart Process Optimization',
      impact: lang === 'zh' ? '效率提升70%' : 'Efficiency Increase 70%',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      problem: lang === 'zh' ? '專業展示不足' : 'Poor Professional Display',
      solution: lang === 'zh' ? '專業形象塑造' : 'Professional Image Shaping',
      impact: lang === 'zh' ? '轉化率提升90%' : 'Conversion Increase 90%',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              {lang === 'zh' ? '專業' : 'Professional'}
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-400 via-slate-200 to-white bg-clip-text text-transparent">
              {lang === 'zh' ? '重新定義' : 'Redefined'}
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            {lang === 'zh' 
              ? '不僅是網站設計，更是專業形象的數字化升級。讓您的專業精神在數字世界中熠熠生輝。'
              : 'Not just website design, but digital upgrade of professional image. Let your professionalism shine in the digital world.'
            }
          </motion.p>
        </motion.div>

        {/* Pain Points & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            {lang === 'zh' ? '痛點解決，效果可見' : 'Pain Points Solved, Results Visible'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                {/* Problem */}
                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-2">
                    {lang === 'zh' ? '挑戰' : 'Challenge'}
                  </div>
                  <div className="text-xl font-semibold text-slate-200">
                    {point.problem}
                  </div>
                </div>
                
                {/* Solution */}
                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-2">
                    {lang === 'zh' ? '解決方案' : 'Solution'}
                  </div>
                  <div className={`text-lg font-medium bg-gradient-to-r ${point.color} bg-clip-text text-transparent`}>
                    {point.solution}
                  </div>
                </div>
                
                {/* Impact */}
                <div className="pt-6 border-t border-slate-700">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${point.color} bg-clip-text text-transparent`}>
                    {point.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Preview Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            {/* Browser Header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-slate-400 text-sm font-mono">professional-services.com</span>
            </div>
            
            <div className="p-12 bg-gradient-to-br from-slate-900 via-black to-slate-900 min-h-[500px] flex items-center justify-center">
              <div className="text-center max-w-md">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-slate-600"
                >
                  <span className="text-white text-2xl font-bold">PS</span>
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {lang === 'zh' ? '專業服務' : 'Professional Services'}
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  {lang === 'zh' ? '體驗未來的專業服務網站，感受權威與便利的完美結合' : 'Experience the future of professional service websites, feel the perfect combination of authority and convenience'}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDemo(!showDemo)}
                  className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-500 transition-all duration-300 font-medium"
                >
                  {showDemo ? (lang === 'zh' ? '關閉演示' : 'Close Demo') : (lang === 'zh' ? '體驗演示' : 'Try Demo')}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            {lang === 'zh' ? '技術卓越，品質保證' : 'Technical Excellence, Quality Assured'}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'React', desc: lang === 'zh' ? '現代化框架' : 'Modern Framework' },
              { name: 'TypeScript', desc: lang === 'zh' ? '類型安全' : 'Type Safety' },
              { name: 'Next.js', desc: lang === 'zh' ? '性能優化' : 'Performance' },
              { name: 'AWS', desc: lang === 'zh' ? '雲端部署' : 'Cloud Deploy' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4"
              >
                <div className="text-lg font-bold text-white mb-1">{tech.name}</div>
                <div className="text-xs text-slate-400">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-300 leading-relaxed">
              {lang === 'zh' 
                ? '我們不僅設計網站，更打造數字化專業形象。每一行代碼都體現對專業精神的深刻理解，每一個像素都傳達權威與信賴。'
                : 'We don\'t just design websites, we craft digital professional images. Every line of code reflects deep understanding of professionalism, every pixel conveys authority and trust.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalShowcase;

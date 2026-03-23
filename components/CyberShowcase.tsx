import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';
import CyberDemo from './CyberDemo.tsx';

interface CyberShowcaseProps {
  lang: 'en' | 'zh';
}

const CyberShowcase: React.FC<CyberShowcaseProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      title: lang === 'zh' ? '賽博龐克美學' : 'Cyberpunk Aesthetics',
      description: lang === 'zh' ? '充滿未來感的視覺設計，霓虹色彩與動態效果' : 'Futuristic visual design with neon colors and dynamic effects',
      icon: '🌆'
    },
    {
      title: lang === 'zh' ? '互動式體驗' : 'Interactive Experience',
      description: lang === 'zh' ? '豐富的動畫與用戶互動，打造沉浸式體驗' : 'Rich animations and user interactions for immersive experience',
      icon: '🎮'
    },
    {
      title: lang === 'zh' ? '科技感界面' : 'Tech-Inspired UI',
      description: lang === 'zh' ? '專案流程視覺化，數據展示與實時預覽' : 'Project process visualization, data display and real-time preview',
      icon: '📊'
    },
    {
      title: lang === 'zh' ? '多語言支援' : 'Multi-language Support',
      description: lang === 'zh' ? '中英雙語界面，國際化設計理念' : 'Chinese-English interface, international design concept',
      icon: '🌍'
    }
  ];

  const techStack = [
    'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {lang === 'zh' ? '賽博設計展示' : 'Cyber Design Showcase'}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? '這是我們原創的賽博龐克風格網站設計，展現了我們在前端技術與創意設計方面的實力'
              : 'This is our original cyberpunk-style website design, showcasing our expertise in frontend technology and creative design'
            }
          </p>
        </motion.div>

        {/* Demo Preview Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-gray-400 text-sm font-mono">cyber-forge-2077.demo</span>
            </div>
            
            {!showDemo ? (
              <div className="p-8 bg-gradient-to-br from-gray-900 to-black min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-pulse">🌐</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">CYBER-FORGE 2077</h3>
                  <p className="text-gray-400 mb-6">{lang === 'zh' ? '賽博藍圖鑄造廠' : 'Cyber Blueprint Forge'}</p>
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="px-6 py-2 border border-blue-500 text-blue-400 rounded hover:bg-blue-500 hover:text-black transition-colors"
                  >
                    {lang === 'zh' ? '體驗演示' : 'Try Demo'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative" style={{ height: '1000px' }}>
                <div className="absolute top-2 right-2 z-50">
                  <button 
                    onClick={() => setShowDemo(false)}
                    className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                  >
                    {lang === 'zh' ? '關閉演示' : 'Close Demo'}
                  </button>
                </div>
                <div className="w-full h-full overflow-hidden rounded-b-xl">
                  <div className="w-full h-full overflow-y-auto">
                    <CyberDemo lang={lang} onDemoComplete={() => setShowDemo(false)} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            {lang === 'zh' ? '核心技術' : 'Core Technologies'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* 簡潔技術說明 */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              {lang === 'zh' 
                ? '使用 React + TypeScript 構建組件化架構，Framer Motion 實現流暢動畫，Tailwind CSS 快速樣式開發。自定義 GlitchText 組件創造文字閃爍效果，CSS3 動畫打造霓虹光暈和掃描線。整體採用 Vite 構建工具，確保開發效率和性能優化。'
                : 'Built with React + TypeScript for component architecture, Framer Motion for smooth animations, and Tailwind CSS for rapid styling. Custom GlitchText component creates text glitch effects, CSS3 animations build neon glow and scanlines. Powered by Vite for optimal development experience and performance.'
              }
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            {lang === 'zh' 
              ? '喜歡這種設計風格？我們也可以為您打造獨特的視覺體驗！'
              : 'Like this design style? We can create unique visual experiences for you too!'
            }
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-semibold">
            {lang === 'zh' ? '討論您的設計需求' : 'Discuss Your Design Needs'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberShowcase;

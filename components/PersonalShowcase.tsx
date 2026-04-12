import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';
import DemoGallery from './DemoGallery.tsx';

interface PersonalShowcaseProps {
  lang: 'en' | 'zh';
}

const PersonalShowcase: React.FC<PersonalShowcaseProps> = ({ lang }) => {
  // 預設顯示 Demo 框架，且預設載入 Default Demo
  const [showDemoGallery, setShowDemoGallery] = useState(false);
  const [currentDemoId, setCurrentDemoId] = useState('personal-default');
  const [currentDemoName, setCurrentDemoName] = useState(lang === 'zh' ? '品牌設計師' : 'Brand Designer');
  const t = UI_TEXT[lang];

  // Handle demo selection
  const handleDemoSelect = (demoId: string) => {
    setCurrentDemoId(demoId);
    setShowDemoGallery(false);
    // 更新當前 Demo 名稱
    const demoNames: { [key: string]: string } = {
      'personal-default': lang === 'zh' ? '品牌設計師' : 'Brand Designer',
      'personal-freelancer': lang === 'zh' ? '全端工程師' : 'Full Stack Developer',
      'personal-coach': lang === 'zh' ? '職涯教練' : 'Career Coach'
    };
    setCurrentDemoName(demoNames[demoId] || '');
  };

  const personalBrandingFeatures = [
    {
      title: lang === 'zh' ? '服務項目展示' : 'Service Showcase',
      description: lang === 'zh' ? '清晰呈現服務內容與價格，讓客戶秒懂價值' : 'Clearly display services and pricing, let clients instantly understand value',
      icon: '💼'
    },
    {
      title: lang === 'zh' ? '作品集展示' : 'Portfolio Display',
      description: lang === 'zh' ? '展示成功案例，用實力說服潛在客戶' : 'Showcase success cases, convince potential clients with real results',
      icon: '🎨'
    },
    {
      title: lang === 'zh' ? '技能專長可視化' : 'Skills Visualization',
      description: lang === 'zh' ? '專業能力進度條展示，建立專業信任感' : 'Progress bars showing expertise, building professional trust',
      icon: '�'
    },
    {
      title: lang === 'zh' ? '一鍵聯絡接單' : 'One-click Contact',
      description: lang === 'zh' ? '表單諮詢+直接聯絡，降低客戶咨詢門檻' : 'Form inquiry + direct contact, lower the barrier for client consultation',
      icon: '📞'
    }
  ];

  const impactMetrics = [
    {
      metric: lang === 'zh' ? '第一印象' : 'First Impression',
      value: '3秒',
      description: lang === 'zh' ? '決定訪客是否繼續瀏覽' : 'Decides if visitor continues browsing'
    },
    {
      metric: lang === 'zh' ? '記憶度' : 'Memorability',
      value: '85%',
      description: lang === 'zh' ? '訪客能記住個人品牌' : 'Visitors remember personal brand'
    },
    {
      metric: lang === 'zh' ? '轉化率' : 'Conversion Rate',
      value: '300%',
      description: lang === 'zh' ? '聯絡請求增加' : 'Increase in contact requests'
    },
    {
      metric: lang === 'zh' ? '品牌價值' : 'Brand Value',
      value: '5倍',
      description: lang === 'zh' ? '個人品牌價值提升' : 'Personal brand value increase'
    }
  ];

  const personalTypes = [
    {
      type: lang === 'zh' ? '接案顧問' : 'Freelance Consultant',
      description: lang === 'zh' ? '展示專業技能和服務項目，吸引高端客戶主動委託' : 'Showcase professional skills and services to attract high-end clients',
      color: 'from-blue-600 to-purple-600'
    },
    {
      type: lang === 'zh' ? '一人創業者' : 'Solo Entrepreneur',
      description: lang === 'zh' ? '建立個人公司形象，從零開始打造可持續的個人事業' : 'Build personal company image, create sustainable solo business from scratch',
      color: 'from-orange-600 to-red-600'
    },
    {
      type: lang === 'zh' ? '自由工作者' : 'Freelancer',
      description: lang === 'zh' ? '作品集展示+報價系統，讓客戶一眼看到價值並下單' : 'Portfolio + pricing system, let clients see value and place orders instantly',
      color: 'from-green-600 to-teal-600'
    },
    {
      type: lang === 'zh' ? '專業服務者' : 'Service Professional',
      description: lang === 'zh' ? '律師、會計、設計師等專業人士的信賴感品牌形象' : 'Trustworthy brand image for lawyers, accountants, designers and other professionals',
      color: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {lang === 'zh' ? '個人品牌專家' : 'Personal Brand Expert'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? '專為想接案、開公司的自由工作者打造。展示專業技能、服務項目、成功案例，讓客戶主動找上門。'
              : 'Designed for freelancers who want to win clients and start businesses. Showcase professional skills, services, and success cases to attract clients.'
            }
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {lang === 'zh' ? '影響力數據' : 'Impact Metrics'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</h4>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Branding Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {personalBrandingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-white/50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {lang === 'zh' ? '適用人群' : 'Target Audience'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className={`h-32 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <div className="text-white text-4xl">
                    {index === 0 && '👔'}
                    {index === 1 && '🚀'}
                    {index === 2 && '💼'}
                    {index === 3 && '📱'}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{type.type}</h4>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Demo Preview Window - 直接顯示框架，預設載入 Default Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Demo Gallery - 選擇面板 (點擊右上角按鈕時顯示) */}
          <AnimatePresence>
            {showDemoGallery && (
              <DemoGallery
                industryId="personal"
                industryName={lang === 'zh' ? '個人專業' : 'Personal Professional'}
                lang={lang}
                onDemoSelect={handleDemoSelect}
                currentDemoId={currentDemoId}
                isOpen={showDemoGallery}
                onClose={() => setShowDemoGallery(false)}
              />
            )}
          </AnimatePresence>

          {/* Demo Frame - 預設顯示 */}
          <div className="relative bg-white rounded-2xl overflow-hidden border border-purple-200 shadow-2xl">
            {/* Demo Header Bar - 右上角選擇案例按鈕 */}
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-3 flex items-center justify-between border-b border-purple-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600 text-sm font-mono">personal-brand.demo</span>
                <span className="text-xs text-purple-400">|</span>
                <span className="text-xs text-purple-600 font-medium">{currentDemoName}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* 選擇案例按鈕 */}
                <button
                  onClick={() => setShowDemoGallery(true)}
                  className="px-3 py-1.5 bg-white text-purple-600 text-xs rounded-lg border border-purple-300 hover:bg-purple-50 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {lang === 'zh' ? '選擇案例' : 'Select Demo'}
                </button>
              </div>
            </div>

            {/* Demo Content Area - 預設直接顯示 Default Demo */}
            <div style={{ height: '600px' }} className="relative">
              <div className="w-full h-full overflow-hidden">
                <PersonalDemo
                  lang={lang}
                  onDemoComplete={() => {}}
                  demoId={currentDemoId}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? '個人品牌技術棧' : 'Personal Brand Tech Stack'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'GSAP', 'Three.js', 'WebGL', 'Framer Motion', 'Tailwind CSS'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-full text-gray-700 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-sm leading-relaxed">
              {lang === 'zh' 
                ? '使用 GSAP 和 Framer Motion 創建令人驚艷的動畫效果，Three.js 和 WebGL 實現3D視覺衝擊。精心設計的用戶體驗，確保第一秒鐘就抓住訪客注意力。'
                : 'Use GSAP and Framer Motion to create stunning animation effects, Three.js and WebGL for 3D visual impact. Carefully designed user experience ensures capturing visitor attention in the first second.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Personal Demo Component
interface PersonalDemoProps {
  lang: 'en' | 'zh';
  onDemoComplete: () => void;
  demoId: string;
}

// Default Brand Designer Demo Content
const BrandDesignerDemo: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => (
  <>
    {/* Large Avatar */}
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className="relative inline-block mb-6"
    >
      <div className="w-36 h-36 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1.5 shadow-2xl shadow-indigo-500/20">
        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-7xl">
          👨‍💼
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg border-4 border-slate-900">
        ✓
      </div>
    </motion.div>

    {/* Name & Title */}
    <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
    >
      {lang === 'zh' ? '陳建明 Alex Chen' : 'Alex Chen'}
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-lg text-indigo-300 mb-3"
    >
      {lang === 'zh' ? '品牌設計師 × 創業顧問' : 'Brand Designer × Startup Consultant'}
    </motion.p>

    {/* Tagline */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-slate-400 max-w-md mx-auto mb-6 text-sm"
    >
      {lang === 'zh' 
        ? '幫助自由工作者打造專業形象，讓客戶主動找上門。專注於個人品牌設計與一頁式網站。'
        : 'Helping freelancers build professional image that attracts clients. Focus on personal branding & one-page websites.'
      }
    </motion.p>

    {/* Key Stats */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8"
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-indigo-400">100+</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '成功案例' : 'Cases'}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-400">4.9</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '客戶評分' : 'Rating'}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-pink-400">8年</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '業界經驗' : 'Experience'}</div>
      </div>
    </motion.div>

    {/* Primary CTA */}
    <motion.button 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="w-full max-w-xs mx-auto mb-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30"
    >
      {lang === 'zh' ? '💬 免費諮詢 15 分鐘' : '💬 Free 15-min Consultation'}
    </motion.button>

    {/* Services Preview */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mb-8"
    >
      <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider">{lang === 'zh' ? '服務項目' : 'Services'}</p>
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-center">
          <div className="text-2xl mb-1">🎨</div>
          <div className="text-sm font-medium">{lang === 'zh' ? '品牌設計' : 'Branding'}</div>
          <div className="text-xs text-slate-500">HK$8,000起</div>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-center">
          <div className="text-2xl mb-1">💻</div>
          <div className="text-sm font-medium">{lang === 'zh' ? '個人網站' : 'Website'}</div>
          <div className="text-xs text-slate-500">HK$15,000起</div>
        </div>
      </div>
    </motion.div>

    {/* Trust Indicators */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="flex justify-center items-center gap-6 text-slate-500 text-sm"
    >
      <span className="flex items-center gap-1">
        <span className="text-green-400">✓</span> {lang === 'zh' ? 'Google認證' : 'Google Certified'}
      </span>
      <span className="flex items-center gap-1">
        <span className="text-green-400">✓</span> {lang === 'zh' ? '滿意保證' : 'Satisfaction Guarantee'}
      </span>
    </motion.div>

    {/* Simple Testimonial */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-8 bg-slate-800/30 p-4 rounded-xl border border-slate-700/30 max-w-md mx-auto"
    >
      <p className="text-slate-300 text-sm italic mb-2">
        "{lang === 'zh' ? 'Alex幫我打造的品牌形象，讓我在3個月內客戶量翻倍！' : 'Alex helped me double my client base in just 3 months!' }"
      </p>
      <div className="flex items-center justify-center gap-2 text-xs">
        <span>👨‍💼</span>
        <span className="text-slate-400">{lang === 'zh' ? '王小明 - 自由設計師' : 'Alex Wang - Freelance Designer'}</span>
        <span className="text-yellow-400">★★★★★</span>
      </div>
    </motion.div>
  </>
);

// Freelancer Portfolio Demo Content
const FreelancerDemo: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => (
  <>
    {/* Avatar */}
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className="relative inline-block mb-6"
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-1.5 shadow-2xl shadow-emerald-500/20">
        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl">
          💻
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg border-4 border-slate-900">
        🌟
      </div>
    </motion.div>

    {/* Name & Title */}
    <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
    >
      {lang === 'zh' ? '林小美 Mei Lin' : 'Mei Lin'}
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-lg text-emerald-300 mb-3"
    >
      {lang === 'zh' ? '全端工程師 × UI 設計師' : 'Full Stack Developer × UI Designer'}
    </motion.p>

    {/* Tagline */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-slate-400 max-w-md mx-auto mb-6 text-sm"
    >
      {lang === 'zh' 
        ? '用程式碼實現創意，用設計打動人心。專注於 React、Node.js 與現代化網頁開發。'
        : 'Turning ideas into code, designs into experiences. Specializing in React, Node.js & modern web development.'
      }
    </motion.p>

    {/* Skills Tags */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap justify-center gap-2 max-w-md mx-auto mb-6"
    >
      {['React', 'TypeScript', 'Node.js', 'Figma', 'Tailwind'].map((skill) => (
        <span key={skill} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30">
          {skill}
        </span>
      ))}
    </motion.div>

    {/* Key Stats */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8"
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-emerald-400">50+</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '完成專案' : 'Projects'}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-teal-400">5年</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '開發經驗' : 'Experience'}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-cyan-400">98%</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '客戶滿意' : 'Satisfaction'}</div>
      </div>
    </motion.div>

    {/* Primary CTA */}
    <motion.button 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="w-full max-w-xs mx-auto mb-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30"
    >
      {lang === 'zh' ? '📋 查看作品集' : '📋 View Portfolio'}
    </motion.button>

    {/* Portfolio Preview */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="mb-6"
    >
      <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider">{lang === 'zh' ? '近期作品' : 'Recent Work'}</p>
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
          <div className="text-2xl mb-1">🛒</div>
          <div className="text-sm font-medium text-emerald-300">{lang === 'zh' ? '電商平台' : 'E-commerce'}</div>
          <div className="text-xs text-slate-500">React + Node.js</div>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
          <div className="text-2xl mb-1">📱</div>
          <div className="text-sm font-medium text-emerald-300">{lang === 'zh' ? '健身 APP' : 'Fitness App'}</div>
          <div className="text-xs text-slate-500">React Native</div>
        </div>
      </div>
    </motion.div>

    {/* Pricing */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/30 max-w-md mx-auto mb-6"
    >
      <p className="text-slate-400 text-sm mb-2">{lang === 'zh' ? '接案報價' : 'Freelance Rate'}</p>
      <p className="text-2xl font-bold text-white">HK$400 <span className="text-sm font-normal text-slate-400">/ {lang === 'zh' ? '小時起' : 'hour'}</span></p>
      <p className="text-xs text-slate-500 mt-1">{lang === 'zh' ? '長期合作另有優惠' : 'Discounts for long-term projects'}</p>
    </motion.div>
  </>
);

// Career Coach Demo Content
const CoachDemo: React.FC<{ lang: 'en' | 'zh' }> = ({ lang }) => (
  <>
    {/* Avatar */}
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className="relative inline-block mb-6"
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-1.5 shadow-2xl shadow-amber-500/20">
        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl">
          🎯
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg border-4 border-slate-900">
        💡
      </div>
    </motion.div>

    {/* Name & Title */}
    <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
    >
      {lang === 'zh' ? '張大衛 David Chang' : 'David Chang'}
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-lg text-amber-300 mb-3"
    >
      {lang === 'zh' ? '職涯教練 × 創業導師' : 'Career Coach × Startup Mentor'}
    </motion.p>

    {/* Tagline */}
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-slate-400 max-w-md mx-auto mb-6 text-sm"
    >
      {lang === 'zh' 
        ? '幫助 500+ 專業人士找到理想工作，協助 100+ 創業者成功起步。你的職涯，值得更好的規劃。'
        : 'Helped 500+ professionals land dream jobs, guided 100+ entrepreneurs to successful launches. Your career deserves better planning.'
      }
    </motion.p>

    {/* Achievements */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8"
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-amber-400">500+</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '輔導個案' : 'Coached'}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-400">92%</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '成功轉職' : 'Success Rate'}</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-red-400">12年</div>
        <div className="text-xs text-slate-500">{lang === 'zh' ? '業界經驗' : 'Experience'}</div>
      </div>
    </motion.div>

    {/* Services */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mb-8"
    >
      <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider">{lang === 'zh' ? '諮詢服務' : 'Services'}</p>
      <div className="space-y-2 max-w-md mx-auto">
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">💼</span>
            <div className="text-left">
              <div className="text-sm font-medium">{lang === 'zh' ? '一對一職涯諮詢' : '1-on-1 Career Coaching'}</div>
              <div className="text-xs text-slate-500">60 {lang === 'zh' ? '分鐘深度對談' : 'min session'}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-amber-400">HK$800</div>
          </div>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">🚀</span>
            <div className="text-left">
              <div className="text-sm font-medium">{lang === 'zh' ? '創業規劃輔導' : 'Startup Mentoring'}</div>
              <div className="text-xs text-slate-500">{lang === 'zh' ? '為期 4 週' : '4-week program'}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-orange-400">HK$5,000</div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Primary CTA */}
    <motion.button 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="w-full max-w-xs mx-auto mb-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
    >
      {lang === 'zh' ? '📅 預約免費 30 分鐘諮詢' : '📅 Book Free 30-min Session'}
    </motion.button>

    {/* Success Story */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/30 max-w-md mx-auto"
    >
      <p className="text-slate-300 text-sm italic mb-2">
        "{lang === 'zh' ? 'David幫我釐清職涯方向，3個月後成功轉職到理想公司，薪水漲了40%！' : 'David helped me clarify my career path, landed my dream job in 3 months with a 40% salary increase!' }"
      </p>
      <div className="flex items-center justify-center gap-2 text-xs">
        <span>👩‍💼</span>
        <span className="text-slate-400">{lang === 'zh' ? '李小姐 - 產品經理' : 'Lisa Lee - Product Manager'}</span>
        <span className="text-yellow-400">★★★★★</span>
      </div>
    </motion.div>
  </>
);

// Main Personal Demo Component
const PersonalDemo: React.FC<PersonalDemoProps> = ({
  lang,
  onDemoComplete,
  demoId
}) => {
  // Render different demo content based on demoId
  const renderDemoContent = () => {
    switch (demoId) {
      case 'personal-freelancer':
        return <FreelancerDemo lang={lang} />;
      case 'personal-coach':
        return <CoachDemo lang={lang} />;
      case 'personal-default':
      default:
        return <BrandDesignerDemo lang={lang} />;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col overflow-hidden">
      {/* One-Page Landing */}
      <div className="flex-1 overflow-y-auto relative">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/15 rounded-full filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-600/10 rounded-full filter blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 px-8 py-10">
          {/* Demo Content */}
          <div className="text-center">
            {renderDemoContent()}
          </div>

          {/* Bottom Contact Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex justify-center gap-6 text-2xl"
          >
            <span className="cursor-pointer hover:scale-110 transition-transform">📧</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">💬</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">📱</span>
            <span className="cursor-pointer hover:scale-110 transition-transform">🔗</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PersonalShowcase;

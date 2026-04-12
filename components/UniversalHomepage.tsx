import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';
import CyberShowcase from './CyberShowcase.tsx';
import MedicalShowcase from './MedicalShowcase.tsx';
import CreativeShowcase from './CreativeShowcase.tsx';
import ProfessionalShowcase from './ProfessionalShowcase';
import RetailShowcase from './RetailShowcase.tsx';
import PersonalShowcase from './PersonalShowcase.tsx';
import IndustrySidebar from './IndustrySidebar.tsx';
import VeloCodeLogo, { VeloCodeLogoAnimated } from './VeloCodeLogo.tsx';
import AdminButton from './AdminButton.tsx';
import AdminDashboard from './AdminDashboard.tsx';

interface UniversalHomepageProps {
  onInitiate: () => void;
  lang: 'en' | 'zh';
}

const UniversalHomepage: React.FC<UniversalHomepageProps> = ({ onInitiate, lang }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [activeShowcase, setActiveShowcase] = useState<string>('');
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const cyberShowcaseRef = React.useRef<HTMLDivElement>(null);
  const medicalShowcaseRef = React.useRef<HTMLDivElement>(null);
  const creativeShowcaseRef = React.useRef<HTMLDivElement>(null);
  const professionalShowcaseRef = React.useRef<HTMLDivElement>(null);
  const retailShowcaseRef = React.useRef<HTMLDivElement>(null);
  const personalShowcaseRef = React.useRef<HTMLDivElement>(null);
  
  const scrollToCyberShowcase = () => {
    cyberShowcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMedicalShowcase = () => {
    medicalShowcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCreativeShowcase = () => {
    creativeShowcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProfessionalShowcase = () => {
    professionalShowcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRetailShowcase = () => {
    retailShowcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPersonalShowcase = () => {
    personalShowcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleIndustryLearnMore = (industryId: string) => {
    if (industryId === 'tech') {
      scrollToCyberShowcase();
      setActiveShowcase('tech');
    } else if (industryId === 'healthcare') {
      scrollToMedicalShowcase();
      setActiveShowcase('healthcare');
    } else if (industryId === 'creative') {
      scrollToCreativeShowcase();
      setActiveShowcase('creative');
    } else if (industryId === 'professional') {
      scrollToProfessionalShowcase();
      setActiveShowcase('professional');
    } else if (industryId === 'retail') {
      scrollToRetailShowcase();
      setActiveShowcase('retail');
    } else if (industryId === 'personal') {
      scrollToPersonalShowcase();
      setActiveShowcase('personal');
    }
  };

  const handleSidebarSelect = (showcaseId: string) => {
    if (showcaseId === '') {
      setSidebarVisible(false);
      return;
    }
    
    setActiveShowcase(showcaseId);
    setSidebarVisible(false);
    
    // Scroll to the selected showcase
    if (showcaseId === 'tech') {
      scrollToCyberShowcase();
    } else if (showcaseId === 'healthcare') {
      scrollToMedicalShowcase();
    } else if (showcaseId === 'creative') {
      scrollToCreativeShowcase();
    } else if (showcaseId === 'professional') {
      scrollToProfessionalShowcase();
    } else if (showcaseId === 'retail') {
      scrollToRetailShowcase();
    } else if (showcaseId === 'personal') {
      scrollToPersonalShowcase();
    }
  };

  const industries = [
    {
      id: 'tech',
      title: lang === 'zh' ? '科技與軟體' : '科技與軟體',
      description: lang === 'zh' ? 'SaaS 平台、移動應用、API 開發' : 'SaaS 平台、移動應用、API 開發',
      icon: '💻',
      color: '#3b82f6'
    },
    {
      id: 'healthcare',
      title: lang === 'zh' ? '醫療健康' : '醫療健康',
      description: lang === 'zh' ? '診所網站、預約系統、健康管理' : '診所網站、預約系統、健康管理',
      icon: '🏥',
      color: '#10b981'
    },
    {
      id: 'creative',
      title: lang === 'zh' ? '創意設計' : '創意設計',
      description: lang === 'zh' ? '作品集、電商、品牌展示' : '作品集、電商、品牌展示',
      icon: '🎨',
      color: '#f59e0b'
    },
    {
      id: 'professional',
      title: lang === 'zh' ? '專業服務' : '專業服務',
      description: lang === 'zh' ? '顧問、律師、教育機構網站' : '顧問、律師、教育機構網站',
      icon: '🏢',
      color: '#6366f1'
    },
    {
      id: 'retail',
      title: lang === 'zh' ? '零售餐飲' : '零售餐飲',
      description: lang === 'zh' ? '線上商店、餐飲訂位、會員系統' : '線上商店、餐飲訂位、會員系統',
      icon: '🛍️',
      color: '#ef4444'
    },
    {
      id: 'personal',
      title: lang === 'zh' ? '個人專業' : '個人專業',
      description: lang === 'zh' ? '個人專案、非營利組織、創新想法' : '個人專案、非營利組織、創新想法',
      icon: '🌟',
      color: '#8b5cf6'
    }
  ];

  const services = [
    {
      title: lang === 'zh' ? '客製化網站開發' : '客製化網站開發',
      description: lang === 'zh' ? '根據您的需求打造獨一無二的網站' : '根據您的需求打造獨一無二的網站',
      features: lang === 'zh' 
        ? ['響應式設計', 'SEO 優化', '快速載入', '安全防護']
        : ['響應式設計', 'SEO 優化', '快速載入', '安全防護']
    },
    {
      title: lang === 'zh' ? '全端技術解決方案' : '全端技術解決方案',
      description: lang === 'zh' ? '從前端到後端的完整技術支援' : '從前端到後端的完整技術支援',
      features: lang === 'zh'
        ? ['React/Vue', 'Node.js', '資料庫設計', 'API 開發']
        : ['React/Vue', 'Node.js', '資料庫設計', 'API 開發']
    },
    {
      title: lang === 'zh' ? '維護與更新服務' : '維護與更新服務',
      description: lang === 'zh' ? '確保您的網站持續穩定運行' : '確保您的網站持續穩定運行',
      features: lang === 'zh'
        ? ['定期備份', '安全更新', '性能優化', '技術支援']
        : ['定期備份', '安全更新', '性能優化', '技術支援']
    }
  ];

  const testimonials = [
    {
      name: lang === 'zh' ? '陳醫師' : '陳醫師',
      role: lang === 'zh' ? '心理治療師' : '心理治療師',
      content: lang === 'zh' 
        ? '專業的團隊，完全理解醫療行業的需求，網站既專業又親和。'
        : '專業的團隊，完全理解醫療行業的需求，網站既專業又親和。',
      industry: 'healthcare'
    },
    {
      name: lang === 'zh' ? '設計師 Alice' : '設計師 Alice',
      role: lang === 'zh' ? '創意工作室負責人' : '創意工作室負責人',
      content: lang === 'zh'
        ? '完美呈現了我的設計風格，客戶都說網站很有藝術感！'
        : '完美呈現了我的設計風格，客戶都說網站很有藝術感！',
      industry: 'creative'
    },
    {
      name: lang === 'zh' ? '張總經理' : '張總經理',
      role: lang === 'zh' ? '科技公司創辦人' : '科技公司創辦人',
      content: lang === 'zh'
        ? '技術實力強，交付速度快，是我合作過最專業的團隊。'
        : '技術實力強，交付速度快，是我合作過最專業的團隊。',
      industry: 'tech'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <VeloCodeLogo size="small" showTagline={true} />
            <button
              onClick={() => setSidebarVisible(true)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>行業展示</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Add top padding to account for fixed header */}
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Animated Brand Logo */}
            <VeloCodeLogoAnimated className="mb-12" />

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              {lang === 'zh' 
                ? '我們打造極速網站，助您的事業騰飛。無論是醫療診所、創意工作室、科技新創，還是餐飲零售——每一個數位解決方案，我們都追求極致速度。'
                : '我們打造極速網站，助您的事業騰飛。無論是醫療診所、創意工作室、科技新創，還是餐飲零售——每一個數位解決方案，我們都追求極致速度。'
              }
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={onInitiate}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-xl transform hover:scale-105"
              >
                {lang === 'zh' ? '立即啟動專案' : '立即啟動專案'}
              </button>
              <button 
                onClick={() => setSidebarVisible(true)}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg"
              >
                {lang === 'zh' ? '見證極速體驗' : '見證極速體驗'}
              </button>
            </div>

            {/* Speed Indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3x</div>
                <div className="text-sm text-gray-400">{lang === 'zh' ? '更快交付' : '更快交付'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-gray-400">{lang === 'zh' ? '客戶滿意度' : '客戶滿意度'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24h</div>
                <div className="text-sm text-gray-400">{lang === 'zh' ? '初稿完成' : '初稿完成'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Selection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {lang === 'zh' ? '極速跨領域，服務無界限' : '極速跨領域，服務無界限'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {lang === 'zh' 
                ? '無論您是科技、醫療、創意、專業服務、餐飲零售，還是個人品牌——我們都能以極速為您打造專屬解決方案。'
                : '無論您是科技、醫療、創意、專業服務、餐飲零售，還是個人品牌——我們都能以極速為您打造專屬解決方案。'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-xl ${
                  selectedIndustry === industry.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setSelectedIndustry(industry.id)}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div 
                  className="flex items-center text-blue-600 font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIndustryLearnMore(industry.id);
                  }}
                >
                  <span>{lang === 'zh' ? '探索更多' : '探索更多'}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {lang === 'zh' ? '我們的服務' : 'Our Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {lang === 'zh' 
                ? '從設計到開發，從維護到優化，我們提供全方位的技術服務'
                : 'From design to development, maintenance to optimization, we provide comprehensive technical services'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-blue-600 rounded" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {lang === 'zh' ? '客戶見證' : 'Client Testimonials'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {lang === 'zh' 
                ? '來自不同行業客戶的真實回饋'
                : 'Real feedback from clients across different industries'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {lang === 'zh' ? '準備開始您的專案了嗎？' : 'Ready to Start Your Project?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {lang === 'zh' 
                ? '讓我們一起打造一個為您事業量身打造的專業網站'
                : 'Let\'s build a professional website tailored specifically for your business'
              }
            </p>
            <button 
              onClick={onInitiate}
              className="px-10 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl"
            >
              {lang === 'zh' ? '立即開始' : 'Get Started Now'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Cyber Design Showcase */}
      <div ref={cyberShowcaseRef}>
        <CyberShowcase lang={lang} />
      </div>

      {/* Medical Showcase */}
      <div ref={medicalShowcaseRef}>
        <MedicalShowcase lang={lang} />
      </div>

      {/* Creative Showcase */}
      <div ref={creativeShowcaseRef}>
        <CreativeShowcase lang={lang} />
      </div>

      {/* Professional Showcase */}
      <div ref={professionalShowcaseRef}>
        <ProfessionalShowcase lang={lang} />
      </div>

      {/* Retail Showcase */}
      <div ref={retailShowcaseRef}>
        <RetailShowcase lang={lang} />
      </div>

      {/* Personal Showcase */}
      <div ref={personalShowcaseRef}>
        <PersonalShowcase lang={lang} />
      </div>
      </div>

      {/* Industry Sidebar */}
      <IndustrySidebar
        lang={lang}
        activeSection={activeShowcase}
        onSectionChange={handleSidebarSelect}
        isVisible={sidebarVisible}
      />

      {/* Admin Button */}
      <AdminButton onClick={() => setAdminOpen(true)} lang={lang} />

      {/* Admin Dashboard Modal */}
      <AnimatePresence>
        {adminOpen && (
          <AdminDashboard
            lang={lang}
            isOpen={adminOpen}
            onClose={() => setAdminOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default UniversalHomepage;

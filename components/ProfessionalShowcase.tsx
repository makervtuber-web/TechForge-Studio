import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface ProfessionalShowcaseProps {
  lang: 'en' | 'zh';
}

const ProfessionalShowcase: React.FC<ProfessionalShowcaseProps> = ({ lang }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [activeSection, setActiveSection] = useState('impact');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const t = UI_TEXT[lang];

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

  const services = [
    {
      id: 1,
      title: lang === 'zh' ? '法律諮詢服務' : 'Legal Advisory Services',
      description: lang === 'zh' ? '頂尖法律團隊提供精準法律解決方案與風險評估' : 'Premier legal team providing precise solutions and risk assessment',
      icon: 'scale',
      metrics: [
        { label: lang === 'zh' ? '成功案例' : 'Successful Cases', value: '500+' },
        { label: lang === 'zh' ? '客戶滿意度' : 'Client Satisfaction', value: '98%' },
        { label: lang === 'zh' ? '平均處理時間' : 'Avg. Resolution Time', value: '48h' }
      ]
    },
    {
      id: 2,
      title: lang === 'zh' ? '財務策略規劃' : 'Financial Strategy Planning',
      description: lang === 'zh' ? '專業財務分析與資產管理，實現長期價值增長' : 'Professional financial analysis and asset management for long-term value growth',
      icon: 'trending_up',
      metrics: [
        { label: lang === 'zh' ? '管理資產' : 'Assets Under Management', value: '$10M+' },
        { label: lang === 'zh' ? '年化回報率' : 'Annual Returns', value: '15%' },
        { label: lang === 'zh' ? '客戶數量' : 'Client Portfolio', value: '1000+' }
      ]
    },
    {
      id: 3,
      title: lang === 'zh' ? '技術戰略顧問' : 'Technology Strategy Consulting',
      description: lang === 'zh' ? '前沿技術解決方案與數位化轉型策略規劃' : 'Cutting-edge technology solutions and digital transformation strategy',
      icon: 'lightbulb',
      metrics: [
        { label: lang === 'zh' ? '專案交付' : 'Projects Delivered', value: '200+' },
        { label: lang === 'zh' ? '技術專家' : 'Technical Experts', value: '50+' },
        { label: lang === 'zh' ? '客戶留存率' : 'Client Retention Rate', value: '95%' }
      ]
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
            
            {!showDemo ? (
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
                    onClick={() => setShowDemo(true)}
                    className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-500 transition-all duration-300 font-medium"
                  >
                    {lang === 'zh' ? '體驗演示' : 'Try Demo'}
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="relative" style={{ height: '800px' }}>
                <div className="absolute top-4 right-4 z-50">
                  <button 
                    onClick={() => setShowDemo(false)}
                    className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                  >
                    {lang === 'zh' ? '關閉演示' : 'Close Demo'}
                  </button>
                </div>
                <div className="w-full h-full overflow-y-auto">
                  <ProfessionalDemo 
                    lang={lang} 
                    onDemoComplete={() => setShowDemo(false)} 
                    services={services}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    hoveredService={hoveredService}
                    setHoveredService={setHoveredService}
                  />
                </div>
              </div>
            )}
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

// Professional Demo Component
interface ProfessionalDemoProps {
  lang: 'en' | 'zh';
  onDemoComplete: () => void;
  services: any[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  hoveredService: number | null;
  setHoveredService: (id: number | null) => void;
}

const ProfessionalDemo: React.FC<ProfessionalDemoProps> = ({
  lang,
  onDemoComplete,
  services,
  activeSection,
  setActiveSection,
  hoveredService,
  setHoveredService
}) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [bookingStep, setBookingStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white">
      {/* Navigation */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center border border-slate-600"
              >
                <span className="text-white font-bold">PS</span>
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  {lang === 'zh' ? '專業服務集團' : 'Professional Services Group'}
                </h1>
                <p className="text-xs text-slate-400">
                  {lang === 'zh' ? '卓越 · 專業 · 信賴' : 'Excellence · Professional · Trust'}
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['impact', 'services', 'team', 'booking'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    activeSection === section
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {section === 'impact' && (lang === 'zh' ? '價值主張' : 'Value Proposition')}
                  {section === 'services' && (lang === 'zh' ? '核心服務' : 'Core Services')}
                  {section === 'team' && (lang === 'zh' ? '專業團隊' : 'Professional Team')}
                  {section === 'booking' && (lang === 'zh' ? '預約諮詢' : 'Schedule Consultation')}
                  
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Impact First */}
      {activeSection === 'impact' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  {lang === 'zh' ? '解決痛點' : 'Solve Pain Points'}
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-400 via-slate-200 to-white bg-clip-text text-transparent">
                  {lang === 'zh' ? '創造價值' : 'Create Value'}
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {lang === 'zh' 
                  ? '我們不僅理解您的挑戰，更提供可衡量的解決方案。讓數據說話，讓成果證明專業。'
                  : 'We don\'t just understand your challenges, we provide measurable solutions. Let data speak, let results prove professionalism.'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { metric: '85%', label: lang === 'zh' ? '信任度提升' : 'Trust Increase' },
                { metric: '70%', label: lang === 'zh' ? '效率提升' : 'Efficiency Increase' },
                { metric: '90%', label: lang === 'zh' ? '轉化率提升' : 'Conversion Increase' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {item.metric}
                  </div>
                  <div className="text-slate-400">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-500 transition-all duration-300 font-medium"
            >
              {lang === 'zh' ? '探索服務' : 'Explore Services'}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen px-6 py-20"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-white mb-16">
              {lang === 'zh' ? '核心服務' : 'Core Services'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  onClick={() => setSelectedService(service.id)}
                  className="relative group cursor-pointer"
                >
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full">
                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-600">
                      {service.icon === 'scale' && (
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      )}
                      {service.icon === 'trending_up' && (
                        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                      {service.icon === 'lightbulb' && (
                        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Service Title */}
                    <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                    
                    {/* Service Description */}
                    <p className="text-slate-300 mb-6">{service.description}</p>
                    
                    {/* Metrics */}
                    <div className="space-y-3">
                      {service.metrics.map((metric: any, i: number) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-sm text-slate-400">{metric.label}</span>
                          <span className="text-sm font-bold text-white">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Team Section */}
      {activeSection === 'team' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen px-6 py-20"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-white mb-16">
              {lang === 'zh' ? '專業團隊' : 'Professional Team'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: lang === 'zh' ? '陳資深顧問' : 'Dr. Chen, Senior Advisor',
                  title: lang === 'zh' ? '首席執行官兼管理合夥人' : 'CEO & Managing Partner',
                  education: lang === 'zh' ? '哈佛大學商學院 工商管理博士' : 'Harvard Business School, DBA',
                  experience: lang === 'zh' ? '25年企業戰略與管理經驗' : '25 years in corporate strategy & management',
                  expertise: [lang === 'zh' ? '企業戰略' : 'Corporate Strategy', lang === 'zh' ? '併購重組' : 'M&A Advisory']
                },
                {
                  name: lang === 'zh' ? '李資深律師' : 'Ms. Li, Senior Counsel',
                  title: lang === 'zh' ? '合夥人律師' : 'Partner Attorney',
                  education: lang === 'zh' ? '史丹佛法學院 法律博士' : 'Stanford Law School, J.D.',
                  experience: lang === 'zh' ? '18年商業法律實務經驗' : '18 years in commercial law practice',
                  expertise: [lang === 'zh' ? '公司法務' : 'Corporate Law', lang === 'zh' ? '合規監管' : 'Regulatory Compliance']
                },
                {
                  name: lang === 'zh' ? '王資深分析師' : 'Mr. Wang, Chief Analyst',
                  title: lang === 'zh' ? '首席投資分析師' : 'Chief Investment Analyst',
                  education: lang === 'zh' ? '麻省理工學院 金融工程碩士' : 'MIT, M.S. Financial Engineering',
                  experience: lang === 'zh' ? '15年投資分析與風險管理' : '15 years in investment analysis & risk management',
                  expertise: [lang === 'zh' ? '投資策略' : 'Investment Strategy', lang === 'zh' ? '量化分析' : 'Quantitative Analysis']
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
                >
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mx-auto mb-6 border-2 border-slate-600" />
                  
                  <h4 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h4>
                  <p className="text-slate-400 mb-4 text-center">{member.title}</p>
                  
                  <div className="space-y-2 text-sm text-slate-300 mb-6">
                    <p>{member.education}</p>
                    <p>{member.experience}</p>
                  </div>
                  
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-sm font-medium text-slate-400 mb-3">
                      {lang === 'zh' ? '專業領域' : 'Expertise'}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-600">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Booking Section */}
      {activeSection === 'booking' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen px-6 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-white mb-8">
              {lang === 'zh' ? '預約專業諮詢' : 'Schedule Professional Consultation'}
            </h3>
            
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      bookingStep >= step ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' : 'bg-slate-700 text-slate-400'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-16 h-0.5 ml-2 ${
                        bookingStep >= step ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-slate-700'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {bookingStep === 0 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {lang === 'zh' ? '姓名' : 'Name'}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                        placeholder={lang === 'zh' ? '請輸入您的姓名' : 'Enter your name'}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {lang === 'zh' ? '電子郵件' : 'Email'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                        placeholder={lang === 'zh' ? '請輸入您的郵箱' : 'Enter your email'}
                      />
                    </div>
                    
                    <button
                      onClick={() => setBookingStep(1)}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 font-medium"
                    >
                      {lang === 'zh' ? '下一步' : 'Next Step'}
                    </button>
                  </motion.div>
                )}

                {bookingStep === 1 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {lang === 'zh' ? '選擇服務類型' : 'Select Service Type'}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">{lang === 'zh' ? '請選擇服務' : 'Please select service'}</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {lang === 'zh' ? '諮詢內容' : 'Consultation Details'}
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                        placeholder={lang === 'zh' ? '請描述您的需求' : 'Describe your requirements'}
                      />
                    </div>
                    
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setBookingStep(0)}
                        className="flex-1 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                      >
                        {lang === 'zh' ? '上一步' : 'Previous'}
                      </button>
                      <button
                        onClick={() => setBookingStep(2)}
                        className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 font-medium"
                      >
                        {lang === 'zh' ? '確認預約' : 'Confirm Booking'}
                      </button>
                    </div>
                  </motion.div>
                )}

                {bookingStep === 2 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                    
                    <h4 className="text-2xl font-bold text-white">
                      {lang === 'zh' ? '諮詢預約確認' : 'Consultation Booking Confirmed'}
                    </h4>
                    
                    <p className="text-slate-300">
                      {lang === 'zh' 
                        ? '我們已收到您的諮詢預約申請，專業顧問將在24小時內與您聯繫確認詳情。'
                        : 'We have received your consultation request, our professional advisor will contact you within 24 hours to confirm details.'
                      }
                    </p>
                    
                    <button
                      onClick={() => {
                        setBookingStep(0);
                        setFormData({ name: '', email: '', service: '', message: '' });
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-500 transition-all duration-300 font-medium"
                    >
                      {lang === 'zh' ? '新建預約' : 'New Consultation'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProfessionalShowcase;

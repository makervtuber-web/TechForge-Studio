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
      title: lang === 'zh' ? '法律諮詢' : 'Legal Consulting',
      description: lang === 'zh' ? '頂尖法律團隊，提供精準法律解決方案' : 'Top legal team providing precise legal solutions',
      icon: '⚖️',
      metrics: [
        { label: lang === 'zh' ? '成功案例' : 'Success Cases', value: '500+' },
        { label: lang === 'zh' ? '客戶滿意度' : 'Client Satisfaction', value: '98%' },
        { label: lang === 'zh' ? '平均處理時間' : 'Avg. Processing Time', value: '48h' }
      ]
    },
    {
      id: 2,
      title: lang === 'zh' ? '商業顧問' : 'Business Consulting',
      description: lang === 'zh' ? '戰略專家團隊，驅動企業持續增長' : 'Strategic expert team driving sustainable growth',
      icon: '📊',
      metrics: [
        { label: lang === 'zh' ? '增長率提升' : 'Growth Rate Increase', value: '45%' },
        { label: lang === 'zh' ? '行業覆蓋' : 'Industry Coverage', value: '25+' },
        { label: lang === 'zh' ? 'ROI提升' : 'ROI Increase', value: '3.2x' }
      ]
    },
    {
      id: 3,
      title: lang === 'zh' ? '財務顧問' : 'Financial Advisory',
      description: lang === 'zh' ? '財務專家，保障資產安全增值' : 'Financial experts ensuring asset security and growth',
      icon: '💰',
      metrics: [
        { label: lang === 'zh' ? '管理資產' : 'Assets Under Management', value: '$10B+' },
        { label: lang === 'zh' ? '年化收益' : 'Annual Return', value: '15%' },
        { label: lang === 'zh' ? '風險控制' : 'Risk Control', value: 'A+' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white relative overflow-hidden">
      {/* Professional Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Authority Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full border border-slate-600">
              <span className="text-sm font-medium text-slate-200">
                {lang === 'zh' ? '企業級專業服務解決方案' : 'Enterprise Professional Service Solutions'}
              </span>
            </div>
          </motion.div>
          
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
                className="relative group"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full">
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
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl pointer-events-none"
                    style={{ backgroundImage: `linear-gradient(135deg, ${point.color.split(' ')[0].replace('from-', '')} 0%, ${point.color.split(' ')[2].replace('to-', '')} 100%)` }}
                  />
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
                  {lang === 'zh' ? '權威 · 專業 · 信賴' : 'Authority · Professional · Trust'}
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
                  {section === 'impact' && (lang === 'zh' ? '價值展示' : 'Impact')}
                  {section === 'services' && (lang === 'zh' ? '核心服務' : 'Services')}
                  {section === 'team' && (lang === 'zh' ? '專家團隊' : 'Expert Team')}
                  {section === 'booking' && (lang === 'zh' ? '立即預約' : 'Book Now')}
                  
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
                    <motion.div
                      animate={{ 
                        rotate: hoveredService === service.id ? 360 : 0,
                        scale: hoveredService === service.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl mb-6"
                    >
                      {service.icon}
                    </motion.div>
                    
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
              {lang === 'zh' ? '專家團隊' : 'Expert Team'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: lang === 'zh' ? '張資深顧問' : 'Senior Consultant Zhang',
                  title: lang === 'zh' ? '首席執行官' : 'CEO',
                  education: lang === 'zh' ? '哈佛大學 MBA' : 'Harvard MBA',
                  experience: lang === 'zh' ? '20年行業經驗' : '20 years experience',
                  expertise: [lang === 'zh' ? '戰略管理' : 'Strategy', lang === 'zh' ? '企業重組' : 'Restructuring']
                },
                {
                  name: lang === 'zh' ? '李資深律師' : 'Senior Attorney Li',
                  title: lang === 'zh' ? '合夥人律師' : 'Partner Attorney',
                  education: lang === 'zh' ? '史丹佛法學院 J.D.' : 'Stanford Law J.D.',
                  experience: lang === 'zh' ? '15年法律實務' : '15 years practice',
                  expertise: [lang === 'zh' ? '公司法' : 'Corporate Law', lang === 'zh' ? '併購重組' : 'M&A']
                },
                {
                  name: lang === 'zh' ? '王資深分析師' : 'Senior Analyst Wang',
                  title: lang === 'zh' ? '首席分析師' : 'Chief Analyst',
                  education: lang === 'zh' ? '麻省理工學院 碩士' : 'MIT Master\'s',
                  experience: lang === 'zh' ? '12年分析經驗' : '12 years analysis',
                  expertise: [lang === 'zh' ? '財務分析' : 'Financial Analysis', lang === 'zh' ? '風險評估' : 'Risk Assessment']
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
              {lang === 'zh' ? '立即預約' : 'Book Consultation'}
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
                    <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl">✓</span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white">
                      {lang === 'zh' ? '預約成功！' : 'Booking Successful!'}
                    </h4>
                    
                    <p className="text-slate-300">
                      {lang === 'zh' 
                        ? '我們已收到您的預約申請，專業顧問將在24小時內與您聯繫。'
                        : 'We have received your booking request, our professional consultant will contact you within 24 hours.'
                      }
                    </p>
                    
                    <button
                      onClick={() => {
                        setBookingStep(0);
                        setFormData({ name: '', email: '', service: '', message: '' });
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-500 transition-all duration-300 font-medium"
                    >
                      {lang === 'zh' ? '新的預約' : 'New Booking'}
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

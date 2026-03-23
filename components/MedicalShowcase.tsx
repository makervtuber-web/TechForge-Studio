import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface MedicalShowcaseProps {
  lang: 'en' | 'zh';
}

const MedicalShowcase: React.FC<MedicalShowcaseProps> = ({ lang }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const t = UI_TEXT[lang];

  const features = [
    {
      title: lang === 'zh' ? '智能預約管理' : 'Smart Appointment Management',
      description: lang === 'zh' ? '一鍵預約，自動排程，減輕行政負擔' : 'One-click booking, auto-scheduling, reduce administrative burden',
      icon: '📅'
    },
    {
      title: lang === 'zh' ? '醫生資歷展示' : 'Doctor Credentials',
      description: lang === 'zh' ? '專業資質展示，建立患者信任' : 'Professional qualifications display, build patient trust',
      icon: '👨‍⚕️'
    },
    {
      title: lang === 'zh' ? '病症分類預約' : 'Symptom-based Booking',
      description: lang === 'zh' ? '按病症分類，快速匹配專科醫生' : 'Categorized by symptoms, quick specialist matching',
      icon: '🏥'
    },
    {
      title: lang === 'zh' ? '實時排程更新' : 'Real-time Schedule Updates',
      description: lang === 'zh' ? '即時同步排程，避免重複預約' : 'Real-time schedule sync, avoid double bookings',
      icon: '🔄'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 text-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {lang === 'zh' ? '智慧醫療管理系統' : 'Smart Medical Management System'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? '為小型診所量身打造的智能管理系統。簡化預約流程，提升診所效率，讓醫生專注於患者照護。'
              : 'Intelligent management system tailored for small clinics. Simplify booking process, improve clinic efficiency, let doctors focus on patient care.'
            }
          </p>
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
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Demo Preview Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-2xl">
            <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-gray-600 text-sm font-mono">smart-medical.demo</span>
            </div>
            
            {!showDemo ? (
              <div className="p-8 bg-gradient-to-br from-blue-50 to-teal-50 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white text-2xl font-bold">🏥</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {lang === 'zh' ? '智慧醫療系統' : 'Smart Medical System'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {lang === 'zh' ? '專業醫療管理系統' : 'Professional Medical Management System'}
                  </p>
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors"
                  >
                    {lang === 'zh' ? '體驗演示' : 'Try Demo'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative" style={{ height: '800px' }}>
                <div className="absolute top-2 right-2 z-50">
                  <button 
                    onClick={() => setShowDemo(false)}
                    className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                  >
                    {lang === 'zh' ? '關閉演示' : 'Close Demo'}
                  </button>
                </div>
                <div className="w-full h-full overflow-y-auto">
                  <MedicalDemo 
                    lang={lang} 
                    onDemoComplete={() => setShowDemo(false)} 
                  />
                </div>
              </div>
            )}
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
            {lang === 'zh' ? '核心技術' : 'Core Technologies'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-700 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-sm leading-relaxed">
              {lang === 'zh' 
                ? '使用 React + TypeScript 構建響應式界面，確保跨設備兼容性。採用大字體設計和高對比度配色，方便長者使用。簡化操作流程，一鍵預約功能，讓兒童也能輕鬆操作。'
                : 'Built with React + TypeScript for responsive design, ensuring cross-device compatibility. Large fonts and high contrast colors for elderly users. Simplified workflow with one-click booking for easy operation by all ages.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Medical Demo Component
interface MedicalDemoProps {
  lang: 'en' | 'zh';
  onDemoComplete: () => void;
}

const MedicalDemo: React.FC<MedicalDemoProps> = ({
  lang,
  onDemoComplete
}) => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <ClinicSystem lang={lang} currentPage={currentPage} setCurrentPage={setCurrentPage} onLogout={() => {}} />
    </div>
  );
};

// Login Page Component
const LoginPage: React.FC<{ lang: 'en' | 'zh'; onLogin: () => void }> = ({ lang, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl font-bold">仁愛</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {lang === 'zh' ? '仁愛醫療中心' : 'Renai Medical Center'}
            </h1>
            <p className="text-gray-600">
              {lang === 'zh' ? '管理系統登入' : 'Management System Login'}
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {lang === 'zh' ? '管理員帳號' : 'Admin Account'}
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                placeholder={lang === 'zh' ? '請輸入帳號' : 'Enter username'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {lang === 'zh' ? '密碼' : 'Password'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                placeholder={lang === 'zh' ? '請輸入密碼' : 'Enter password'}
              />
            </div>

            <button
              onClick={onLogin}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all"
            >
              {lang === 'zh' ? '登入系統' : 'Login to System'}
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            {lang === 'zh' ? '演示帳號：admin / admin123' : 'Demo account: admin / admin123'}
          </div>
        </div>
      </div>
    </div>
  );
};

// Clinic System Component
const ClinicSystem: React.FC<{
  lang: 'en' | 'zh';
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onLogout: () => void;
}> = ({ lang, currentPage, setCurrentPage, onLogout }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const doctors = [
    { id: 'dr-chen', name: lang === 'zh' ? '陳醫生' : 'Dr. Chen', specialty: lang === 'zh' ? '家庭醫學' : 'General Practice', available: true },
    { id: 'dr-wang', name: lang === 'zh' ? '王醫生' : 'Dr. Wang', specialty: lang === 'zh' ? '內科' : 'Internal Medicine', available: true },
    { id: 'dr-li', name: lang === 'zh' ? '李醫生' : 'Dr. Li', specialty: lang === 'zh' ? '小兒科' : 'Pediatrics', available: false }
  ];

  const symptoms = [
    { id: 'cold', name: lang === 'zh' ? '感冒發燒' : 'Cold & Fever', category: lang === 'zh' ? '一般' : 'General' },
    { id: 'stomach', name: lang === 'zh' ? '腸胃問題' : 'Stomach Issues', category: lang === 'zh' ? '內科' : 'Internal' },
    { id: 'skin', name: lang === 'zh' ? '皮膚問題' : 'Skin Issues', category: lang === 'zh' ? '皮膚科' : 'Dermatology' },
    { id: 'child', name: lang === 'zh' ? '兒童疾病' : 'Child Illness', category: lang === 'zh' ? '小兒科' : 'Pediatrics' },
    { id: 'chronic', name: lang === 'zh' ? '慢性病' : 'Chronic Disease', category: lang === 'zh' ? '家庭醫學' : 'General' },
    { id: 'emergency', name: lang === 'zh' ? '急症' : 'Emergency', category: lang === 'zh' ? '急診' : 'Emergency' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  if (currentPage === 'statistics') {
    return <DataStatisticsPage lang={lang} setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === 'home') {
    return <ClinicHomepage lang={lang} setCurrentPage={setCurrentPage} onLogout={onLogout} />;
  }

  if (currentPage === 'appointment') {
    return (
      <AppointmentManagementPage
        lang={lang}
        doctors={doctors}
        symptoms={symptoms}
        timeSlots={timeSlots}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
        selectedSymptom={selectedSymptom}
        setSelectedSymptom={setSelectedSymptom}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        setCurrentPage={setCurrentPage}
        onLogout={onLogout}
      />
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🏥</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {lang === 'zh' ? '智慧醫療系統' : 'Smart Medical System'}
                </h1>
                <p className="text-sm text-gray-600">
                  {lang === 'zh' ? '管理系統' : 'Management System'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('appointment')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {lang === 'zh' ? '新增預約' : 'New Appointment'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🏥</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === 'zh' ? '管理系統首頁' : 'Management System Home'}
          </h2>
          <p className="text-gray-600 mb-8">
            {lang === 'zh' ? '選擇功能開始管理診所' : 'Select a function to start managing the clinic'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => setCurrentPage('home')}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-600 transition-colors"
            >
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold text-gray-900">
                {lang === 'zh' ? '診所首頁' : 'Clinic Homepage'}
              </h3>
            </button>
            <button
              onClick={() => setCurrentPage('appointment')}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-600 transition-colors"
            >
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-semibold text-gray-900">
                {lang === 'zh' ? '預約管理' : 'Appointment Management'}
              </h3>
            </button>
            <button 
              onClick={() => setCurrentPage('statistics')}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-600 transition-colors"
            >
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-900">
                {lang === 'zh' ? '數據統計' : 'Data Statistics'}
              </h3>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// Clinic Homepage Component
const ClinicHomepage: React.FC<{
  lang: 'en' | 'zh';
  setCurrentPage: (page: string) => void;
  onLogout: () => void;
}> = ({ lang, setCurrentPage, onLogout }) => {
  const doctors = [
    {
      name: lang === 'zh' ? '陳文醫生' : 'Dr. Chen Wen',
      title: lang === 'zh' ? '院長 / 家庭醫學專科' : 'Director / General Practice',
      education: lang === 'zh' ? '國立台灣大學醫學博士' : 'NTU Medical PhD',
      experience: lang === 'zh' ? '25年臨床經驗' : '25 years clinical experience',
      specialties: [lang === 'zh' ? '家庭醫學' : 'Family Medicine', lang === 'zh' ? '預防醫學' : 'Preventive Medicine']
    },
    {
      name: lang === 'zh' ? '王美玲醫生' : 'Dr. Wang Meiling',
      title: lang === 'zh' ? '內科主任' : 'Internal Medicine Director',
      education: lang === 'zh' ? '國立陽明大學醫學碩士' : 'Yangming University MD',
      experience: lang === 'zh' ? '18年臨床經驗' : '18 years clinical experience',
      specialties: [lang === 'zh' ? '內科學' : 'Internal Medicine', lang === 'zh' ? '消化內科' : 'Gastroenterology']
    },
    {
      name: lang === 'zh' ? '李小明醫生' : 'Dr. Li Xiaoming',
      title: lang === 'zh' ? '小兒科主任' : 'Pediatrics Director',
      education: lang === 'zh' ? '國立成功大學醫學博士' : 'NCKU Medical PhD',
      experience: lang === 'zh' ? '12年臨床經驗' : '12 years clinical experience',
      specialties: [lang === 'zh' ? '小兒科' : 'Pediatrics', lang === 'zh' ? '兒童發展' : 'Child Development']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🏥</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {lang === 'zh' ? '智慧醫療系統' : 'Smart Medical System'}
                </h1>
                <p className="text-sm text-gray-600">
                  {lang === 'zh' ? '專業醫療，用心服務' : 'Professional Medical, Heartfelt Service'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('appointment')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {lang === 'zh' ? '線上預約' : 'Online Booking'}
              </button>
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {lang === 'zh' ? '返回管理' : 'Back to Admin'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {lang === 'zh' ? '智慧醫療系統' : 'Smart Medical System'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {lang === 'zh' 
              ? '提供全方位的醫療服務，以專業技術和關懷之心，守護您和家人的健康'
              : 'Providing comprehensive medical services with professional expertise and compassionate care to protect you and your family\'s health'
            }
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCurrentPage('appointment')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {lang === 'zh' ? '立即預約' : 'Book Now'}
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {lang === 'zh' ? '了解更多' : 'Learn More'}
            </button>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {lang === 'zh' ? '專業醫療團隊' : 'Professional Medical Team'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {doctor.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h4>
                <p className="text-blue-600 font-medium mb-4">{doctor.title}</p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p><strong>{lang === 'zh' ? '學歷' : 'Education'}:</strong> {doctor.education}</p>
                  <p><strong>{lang === 'zh' ? '經驗' : 'Experience'}:</strong> {doctor.experience}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {doctor.specialties.map((specialty, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {lang === 'zh' ? '醫療服務' : 'Medical Services'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏥', name: lang === 'zh' ? '家庭醫學' : 'Family Medicine' },
              { icon: '🩺', name: lang === 'zh' ? '內科診療' : 'Internal Medicine' },
              { icon: '👶', name: lang === 'zh' ? '小兒科' : 'Pediatrics' },
              { icon: '💉', name: lang === 'zh' ? '預防注射' : 'Vaccination' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="font-semibold text-gray-900">{service.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            {lang === 'zh' ? '聯絡我們' : 'Contact Us'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {lang === 'zh' ? '地址' : 'Address'}
              </h4>
              <p className="text-gray-600">
                {lang === 'zh' ? '台北市信義區信義路五段7號' : '7, Xinyi Road Sec. 5, Xinyi District, Taipei'}
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {lang === 'zh' ? '電話' : 'Phone'}
              </h4>
              <p className="text-gray-600">(02) 2345-6789</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🕐</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {lang === 'zh' ? '門診時間' : 'Office Hours'}
              </h4>
              <p className="text-gray-600">
                {lang === 'zh' ? '週一至週六 09:00-18:00' : 'Mon-Sat 09:00-18:00'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Appointment Management Page Component
const AppointmentManagementPage: React.FC<{
  lang: 'en' | 'zh';
  doctors: any[];
  symptoms: any[];
  timeSlots: string[];
  selectedDoctor: string;
  setSelectedDoctor: (doctor: string) => void;
  selectedSymptom: string;
  setSelectedSymptom: (symptom: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  setCurrentPage: (page: string) => void;
  onLogout: () => void;
}> = ({
  lang,
  doctors,
  symptoms,
  timeSlots,
  selectedDoctor,
  setSelectedDoctor,
  selectedSymptom,
  setSelectedSymptom,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  setCurrentPage,
  onLogout
}) => {
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [expandedDoctor, setExpandedDoctor] = useState<string | null>(null);

  // Mock appointment data
  const todayAppointments = [
    {
      id: 1,
      patientName: lang === 'zh' ? '張小明' : 'Zhang Xiaoming',
      symptom: lang === 'zh' ? '感冒發燒' : 'Cold & Fever',
      doctor: lang === 'zh' ? '陳醫生' : 'Dr. Chen',
      time: '09:00',
      status: lang === 'zh' ? '已確認' : 'Confirmed'
    },
    {
      id: 2,
      patientName: lang === 'zh' ? '李美華' : 'Li Meihua',
      symptom: lang === 'zh' ? '腸胃問題' : 'Stomach Issues',
      doctor: lang === 'zh' ? '王醫生' : 'Dr. Wang',
      time: '10:30',
      status: lang === 'zh' ? '已確認' : 'Confirmed'
    },
    {
      id: 3,
      patientName: lang === 'zh' ? '王大偉' : 'Wang Dawei',
      symptom: lang === 'zh' ? '皮膚問題' : 'Skin Issues',
      doctor: lang === 'zh' ? '陳醫生' : 'Dr. Chen',
      time: '14:00',
      status: lang === 'zh' ? '待確認' : 'Pending'
    },
    {
      id: 4,
      patientName: lang === 'zh' ? '陳小芳' : 'Chen Xiaofang',
      symptom: lang === 'zh' ? '兒童疾病' : 'Child Illness',
      doctor: lang === 'zh' ? '李醫生' : 'Dr. Li',
      time: '15:30',
      status: lang === 'zh' ? '已確認' : 'Confirmed'
    },
    {
      id: 5,
      patientName: lang === 'zh' ? '林先生' : 'Mr. Lin',
      symptom: lang === 'zh' ? '感冒發燒' : 'Cold & Fever',
      doctor: lang === 'zh' ? '陳醫生' : 'Dr. Chen',
      time: '16:00',
      status: lang === 'zh' ? '已確認' : 'Confirmed'
    },
    {
      id: 6,
      patientName: lang === 'zh' ? '黃女士' : 'Ms. Huang',
      symptom: lang === 'zh' ? '腸胃問題' : 'Stomach Issues',
      doctor: lang === 'zh' ? '王醫生' : 'Dr. Wang',
      time: '11:00',
      status: lang === 'zh' ? '已確認' : 'Confirmed'
    }
  ];

  const handleBooking = () => {
    if (selectedDoctor && selectedSymptom && selectedDate && selectedTime) {
      alert(lang === 'zh' ? '預約成功！' : 'Booking successful!');
      // Reset selections
      setSelectedDoctor('');
      setSelectedSymptom('');
      setSelectedDate('');
      setSelectedTime('');
      setShowNewAppointment(false);
    }
  };

  const toggleDoctorExpansion = (doctorId: string) => {
    setExpandedDoctor(expandedDoctor === doctorId ? null : doctorId);
  };

  if (showNewAppointment) {
    return (
      <div className="min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowNewAppointment(false)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  ← {lang === 'zh' ? '返回' : 'Back'}
                </button>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🏥</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {lang === 'zh' ? '智慧醫療系統' : 'Smart Medical System'}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {lang === 'zh' ? '新增預約' : 'New Appointment'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* New Appointment Form */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {lang === 'zh' ? '新增預約' : 'New Appointment'}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Doctor and Symptom Selection */}
              <div className="space-y-8">
                {/* Step 1: Select Symptom */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                    {lang === 'zh' ? '選擇症狀' : 'Select Symptom'}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {symptoms.map((symptom) => (
                      <button
                        key={symptom.id}
                        onClick={() => setSelectedSymptom(symptom.id)}
                        className={`p-3 border-2 rounded-xl text-sm transition-all ${
                          selectedSymptom === symptom.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-gray-900">{symptom.name}</div>
                        <div className="text-xs text-gray-500">{symptom.category}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Doctor */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                    {lang === 'zh' ? '選擇醫生' : 'Select Doctor'}
                  </h3>
                  <div className="space-y-3">
                    {doctors.map((doctor) => (
                      <div
                        key={doctor.id}
                        onClick={() => doctor.available && setSelectedDoctor(doctor.id)}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          selectedDoctor === doctor.id
                            ? 'border-blue-600 bg-blue-50'
                            : doctor.available
                            ? 'border-gray-200 hover:border-gray-300'
                            : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600 text-lg">👨‍⚕️</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
                              <p className="text-sm text-gray-600">{doctor.specialty}</p>
                            </div>
                          </div>
                          <div className={`text-sm font-medium ${
                            doctor.available ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {doctor.available 
                              ? (lang === 'zh' ? '可預約' : 'Available')
                              : (lang === 'zh' ? '已滿' : 'Fully Booked')
                            }
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Date and Time Selection */}
              <div className="space-y-8">
                {/* Step 3: Select Date */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                    {lang === 'zh' ? '選擇日期' : 'Select Date'}
                  </h3>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Step 4: Select Time */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
                    {lang === 'zh' ? '選擇時間' : 'Select Time'}
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 border-2 rounded-xl text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {lang === 'zh' ? '預約摘要' : 'Booking Summary'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{lang === 'zh' ? '症狀' : 'Symptom'}:</span>
                      <span className="font-medium">
                        {symptoms.find(s => s.id === selectedSymptom)?.name || '-'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{lang === 'zh' ? '醫生' : 'Doctor'}:</span>
                      <span className="font-medium">
                        {doctors.find(d => d.id === selectedDoctor)?.name || '-'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{lang === 'zh' ? '日期' : 'Date'}:</span>
                      <span className="font-medium">{selectedDate || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{lang === 'zh' ? '時間' : 'Time'}:</span>
                      <span className="font-medium">{selectedTime || '-'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <div className="mt-8">
              <button
                onClick={handleBooking}
                disabled={!selectedSymptom || !selectedDoctor || !selectedDate || !selectedTime}
                className={`w-full py-4 text-xl font-bold rounded-xl transition-all ${
                  selectedSymptom && selectedDoctor && selectedDate && selectedTime
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {lang === 'zh' ? '確認預約' : 'Confirm Booking'}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🏥</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {lang === 'zh' ? '智慧醫療系統' : 'Smart Medical System'}
                </h1>
                <p className="text-sm text-gray-600">
                  {lang === 'zh' ? '預約管理' : 'Appointment Management'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {lang === 'zh' ? '返回' : 'Back'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {lang === 'zh' ? '今日預約' : 'Today\'s Appointments'}
            </h2>
            <p className="text-gray-600">
              {lang === 'zh' ? '點擊醫生查看詳細預約安排' : 'Click on doctors to view detailed appointment schedules'}
            </p>
          </div>
          <button
            onClick={() => setShowNewAppointment(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <span>+</span>
            <span>{lang === 'zh' ? '新增預約' : 'New Appointment'}</span>
          </button>
        </div>

        {/* Doctor-wise Appointments - Collapsible Design */}
        <div className="space-y-4">
          {doctors.map((doctor) => {
            const doctorAppointments = todayAppointments.filter(apt => apt.doctor === doctor.name);
            const isExpanded = expandedDoctor === doctor.id;
            
            return (
              <div key={doctor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
                {/* Doctor Header - Clickable */}
                <div 
                  onClick={() => toggleDoctorExpansion(doctor.id)}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 cursor-pointer hover:from-blue-700 hover:to-teal-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👨‍⚕️</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{doctor.name}</h3>
                        <p className="text-blue-100">{doctor.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold">{doctorAppointments.length}</div>
                        <div className="text-blue-100 text-sm">
                          {lang === 'zh' ? '今日預約' : 'Today\'s Appointments'}
                        </div>
                      </div>
                      <div className={`transform transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}>
                        <span className="text-2xl">▼</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expandable Appointment Details */}
                <div className={`transition-all duration-300 ${
                  isExpanded ? 'max-h-96 overflow-y-auto' : 'max-h-0 overflow-hidden'
                }`}>
                  <div className="p-6">
                    {doctorAppointments.length > 0 ? (
                      <div className="space-y-4">
                        {/* Time Schedule Overview */}
                        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            {lang === 'zh' ? '今日時間安排' : 'Today\'s Schedule'}
                          </h4>
                          <div className="grid grid-cols-6 gap-2">
                            {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time) => {
                              const hasAppointment = doctorAppointments.some(apt => apt.time.startsWith(time.split(':')[0]));
                              return (
                                <div
                                  key={time}
                                  className={`text-center p-2 rounded text-sm font-medium ${
                                    hasAppointment 
                                      ? 'bg-blue-600 text-white' 
                                      : 'bg-gray-200 text-gray-600'
                                  }`}
                                >
                                  {time}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Detailed Appointments */}
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {lang === 'zh' ? '詳細預約' : 'Detailed Appointments'}
                        </h4>
                        {doctorAppointments.map((appointment) => (
                          <div key={appointment.id} className="border-l-4 border-blue-600 pl-4 py-3 bg-gray-50 rounded-r-lg mb-3">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-4 mb-2">
                                  <span className="text-lg font-semibold text-gray-900">
                                    {appointment.patientName}
                                  </span>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    appointment.status === (lang === 'zh' ? '已確認' : 'Confirmed')
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {appointment.status}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-6 text-sm text-gray-600">
                                  <span className="flex items-center">
                                    <span className="mr-1">🕐</span>
                                    {appointment.time}
                                  </span>
                                  <span className="flex items-center">
                                    <span className="mr-1">🏥</span>
                                    {appointment.symptom}
                                  </span>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                                  {lang === 'zh' ? '詳情' : 'Details'}
                                </button>
                                <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                                  {lang === 'zh' ? '編輯' : 'Edit'}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <div className="text-4xl mb-2">📅</div>
                        <p>{lang === 'zh' ? '今日無預約' : 'No appointments today'}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{todayAppointments.length}</div>
            <div className="text-gray-600">{lang === 'zh' ? '總預約數' : 'Total Appointments'}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {todayAppointments.filter(apt => apt.status === (lang === 'zh' ? '已確認' : 'Confirmed')).length}
            </div>
            <div className="text-gray-600">{lang === 'zh' ? '已確認' : 'Confirmed'}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {todayAppointments.filter(apt => apt.status === (lang === 'zh' ? '待確認' : 'Pending')).length}
            </div>
            <div className="text-gray-600">{lang === 'zh' ? '待確認' : 'Pending'}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">{doctors.length}</div>
            <div className="text-gray-600">{lang === 'zh' ? '值班醫生' : 'Doctors on Duty'}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Data Statistics Page Component
const DataStatisticsPage: React.FC<{
  lang: 'en' | 'zh';
  setCurrentPage: (page: string) => void;
}> = ({ lang, setCurrentPage }) => {
  // Mock statistics data
  const monthlyStats = [
    { month: lang === 'zh' ? '一月' : 'Jan', patients: 245, revenue: 122500, growth: 12 },
    { month: lang === 'zh' ? '二月' : 'Feb', patients: 267, revenue: 133500, growth: 8 },
    { month: lang === 'zh' ? '三月' : 'Mar', patients: 289, revenue: 144500, growth: 15 },
    { month: lang === 'zh' ? '四月' : 'Apr', patients: 312, revenue: 156000, growth: 18 },
    { month: lang === 'zh' ? '五月' : 'May', patients: 298, revenue: 149000, growth: -5 },
    { month: lang === 'zh' ? '六月' : 'Jun', patients: 324, revenue: 162000, growth: 9 }
  ];

  const doctorStats = [
    {
      doctor: lang === 'zh' ? '陳醫生' : 'Dr. Chen',
      patients: 156,
      revenue: 78000,
      avgRating: 4.8,
      topSymptom: lang === 'zh' ? '感冒發燒' : 'Cold & Fever',
      satisfaction: 95
    },
    {
      doctor: lang === 'zh' ? '王醫生' : 'Dr. Wang',
      patients: 142,
      revenue: 71000,
      avgRating: 4.9,
      topSymptom: lang === 'zh' ? '腸胃問題' : 'Stomach Issues',
      satisfaction: 97
    },
    {
      doctor: lang === 'zh' ? '李醫生' : 'Dr. Li',
      patients: 98,
      revenue: 49000,
      avgRating: 4.7,
      topSymptom: lang === 'zh' ? '兒童疾病' : 'Child Illness',
      satisfaction: 93
    }
  ];

  const symptomStats = [
    { symptom: lang === 'zh' ? '感冒發燒' : 'Cold & Fever', count: 145, percentage: 35, growth: 12 },
    { symptom: lang === 'zh' ? '腸胃問題' : 'Stomach Issues', count: 89, percentage: 21, growth: -5 },
    { symptom: lang === 'zh' ? '皮膚問題' : 'Skin Issues', count: 67, percentage: 16, growth: 8 },
    { symptom: lang === 'zh' ? '兒童疾病' : 'Child Illness', count: 56, percentage: 13, growth: 15 },
    { symptom: lang === 'zh' ? '慢性病' : 'Chronic Disease', count: 38, percentage: 9, growth: 3 },
    { symptom: lang === 'zh' ? '其他' : 'Others', count: 24, percentage: 6, growth: -2 }
  ];

  const repeatPatients = [
    {
      patientName: lang === 'zh' ? '張小明' : 'Zhang Xiaoming',
      visits: 8,
      lastVisit: lang === 'zh' ? '2024-06-15' : '2024-06-15',
      totalSpent: 3200,
      doctor: lang === 'zh' ? '陳醫生' : 'Dr. Chen',
      status: lang === 'zh' ? '活躍' : 'Active'
    },
    {
      patientName: lang === 'zh' ? '李美華' : 'Li Meihua',
      visits: 6,
      lastVisit: lang === 'zh' ? '2024-06-12' : '2024-06-12',
      totalSpent: 2800,
      doctor: lang === 'zh' ? '王醫生' : 'Dr. Wang',
      status: lang === 'zh' ? '活躍' : 'Active'
    },
    {
      patientName: lang === 'zh' ? '王大偉' : 'Wang Dawei',
      visits: 5,
      lastVisit: lang === 'zh' ? '2024-06-08' : '2024-06-08',
      totalSpent: 2100,
      doctor: lang === 'zh' ? '陳醫生' : 'Dr. Chen',
      status: lang === 'zh' ? '活躍' : 'Active'
    },
    {
      patientName: lang === 'zh' ? '陳小芳' : 'Chen Xiaofang',
      visits: 4,
      lastVisit: lang === 'zh' ? '2024-06-10' : '2024-06-10',
      totalSpent: 1800,
      doctor: lang === 'zh' ? '李醫生' : 'Dr. Li',
      status: lang === 'zh' ? '活躍' : 'Active'
    }
  ];

  const timeSlotStats = [
    { time: '09:00-10:00', patients: 45, utilization: 75 },
    { time: '10:00-11:00', patients: 52, utilization: 87 },
    { time: '11:00-12:00', patients: 38, utilization: 63 },
    { time: '14:00-15:00', patients: 48, utilization: 80 },
    { time: '15:00-16:00', patients: 41, utilization: 68 },
    { time: '16:00-17:00', patients: 35, utilization: 58 }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🏥</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {lang === 'zh' ? '智慧醫療系統' : 'Smart Medical System'}
                </h1>
                <p className="text-sm text-gray-600">
                  {lang === 'zh' ? '數據統計' : 'Data Statistics'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {lang === 'zh' ? '返回' : 'Back'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {lang === 'zh' ? '數據統計分析' : 'Data Analytics'}
          </h2>
          <p className="text-gray-600">
            {lang === 'zh' 
              ? '深入了解診所運營狀況，優化服務品質和效率'
              : 'Gain deep insights into clinic operations, optimize service quality and efficiency'
            }
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <span className="text-green-600 text-sm font-medium">+12%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">1,735</div>
            <div className="text-gray-600 text-sm">{lang === 'zh' ? '今年總患者' : 'Total Patients This Year'}</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <span className="text-green-600 text-sm font-medium">+15%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">¥867K</div>
            <div className="text-gray-600 text-sm">{lang === 'zh' ? '今年總收入' : 'Total Revenue This Year'}</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <span className="text-green-600 text-sm font-medium">+0.2</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
            <div className="text-gray-600 text-sm">{lang === 'zh' ? '平均評分' : 'Average Rating'}</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <span className="text-green-600 text-sm font-medium">+8%</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">68%</div>
            <div className="text-gray-600 text-sm">{lang === 'zh' ? '回診率' : 'Return Visit Rate'}</div>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? '月度趨勢分析' : 'Monthly Trend Analysis'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-gray-700">{lang === 'zh' ? '月份' : 'Month'}</th>
                  <th className="text-right py-3 px-4 text-gray-700">{lang === 'zh' ? '患者數' : 'Patients'}</th>
                  <th className="text-right py-3 px-4 text-gray-700">{lang === 'zh' ? '收入' : 'Revenue'}</th>
                  <th className="text-right py-3 px-4 text-gray-700">{lang === 'zh' ? '增長率' : 'Growth'}</th>
                </tr>
              </thead>
              <tbody>
                {monthlyStats.map((stat, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{stat.month}</td>
                    <td className="text-right py-3 px-4">{stat.patients}</td>
                    <td className="text-right py-3 px-4">¥{stat.revenue.toLocaleString()}</td>
                    <td className="text-right py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        stat.growth > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {stat.growth > 0 ? '+' : ''}{stat.growth}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Doctor Performance */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? '醫生表現分析' : 'Doctor Performance Analysis'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctorStats.map((doctor, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">{doctor.doctor}</h4>
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="ml-1 text-sm font-medium">{doctor.avgRating}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{lang === 'zh' ? '患者數' : 'Patients'}:</span>
                    <span className="font-medium">{doctor.patients}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{lang === 'zh' ? '收入' : 'Revenue'}:</span>
                    <span className="font-medium">¥{doctor.revenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{lang === 'zh' ? '滿意度' : 'Satisfaction'}:</span>
                    <span className="font-medium">{doctor.satisfaction}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{lang === 'zh' ? '主要症狀' : 'Top Symptom'}:</span>
                    <span className="font-medium">{doctor.topSymptom}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Symptom Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {lang === 'zh' ? '症狀分佈分析' : 'Symptom Distribution'}
            </h3>
            <div className="space-y-4">
              {symptomStats.map((symptom, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{symptom.symptom}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{symptom.count} ({symptom.percentage}%)</span>
                      <span className={`text-xs font-medium ${
                        symptom.growth > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {symptom.growth > 0 ? '+' : ''}{symptom.growth}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full"
                      style={{ width: `${symptom.percentage * 3}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Slot Utilization */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {lang === 'zh' ? '時段利用率分析' : 'Time Slot Utilization'}
            </h3>
            <div className="space-y-4">
              {timeSlotStats.map((slot, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{slot.time}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{slot.patients} 患者</span>
                      <span className="text-sm font-medium text-blue-600">{slot.utilization}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        slot.utilization >= 80 ? 'bg-green-500' : 
                        slot.utilization >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${slot.utilization}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Repeat Patients */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? '回診患者分析' : 'Repeat Patients Analysis'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-gray-700">{lang === 'zh' ? '患者姓名' : 'Patient Name'}</th>
                  <th className="text-center py-3 px-4 text-gray-700">{lang === 'zh' ? '到訪次數' : 'Visits'}</th>
                  <th className="text-center py-3 px-4 text-gray-700">{lang === 'zh' ? '最後到訪' : 'Last Visit'}</th>
                  <th className="text-center py-3 px-4 text-gray-700">{lang === 'zh' ? '總消費' : 'Total Spent'}</th>
                  <th className="text-center py-3 px-4 text-gray-700">{lang === 'zh' ? '主要醫生' : 'Primary Doctor'}</th>
                  <th className="text-center py-3 px-4 text-gray-700">{lang === 'zh' ? '狀態' : 'Status'}</th>
                </tr>
              </thead>
              <tbody>
                {repeatPatients.map((patient, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{patient.patientName}</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {patient.visits}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4 text-gray-600">{patient.lastVisit}</td>
                    <td className="text-center py-3 px-4">¥{patient.totalSpent.toLocaleString()}</td>
                    <td className="text-center py-3 px-4">{patient.doctor}</td>
                    <td className="text-center py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {patient.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Export Options */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            📊 {lang === 'zh' ? '導出報表' : 'Export Report'}
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            📧 {lang === 'zh' ? '發送郵件' : 'Send Email'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default MedicalShowcase;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';
import DemoGallery from './DemoGallery.tsx';

interface ProfessionalShowcaseProps {
  lang: 'en' | 'zh';
}

const ProfessionalShowcase: React.FC<ProfessionalShowcaseProps> = ({ lang }) => {
  // Demo gallery state - 預設顯示 Demo，支援未來多個 Demo 切換
  const [showDemoGallery, setShowDemoGallery] = useState(false);
  const [currentDemoId, setCurrentDemoId] = useState('professional-default');
  const [currentDemoName, setCurrentDemoName] = useState(lang === 'zh' ? '專業服務' : 'Professional Services');
  
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'team' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle demo selection
  const handleDemoSelect = (demoId: string) => {
    setCurrentDemoId(demoId);
    setShowDemoGallery(false);
    // Demo name mapping for future multi-demo support
    const demoNames: { [key: string]: string } = {
      'professional-default': lang === 'zh' ? '專業服務' : 'Professional Services',
      'professional-consulting': lang === 'zh' ? '企業諮詢' : 'Business Consulting',
      'professional-law': lang === 'zh' ? '法律事務' : 'Law Firm'
    };
    setCurrentDemoName(demoNames[demoId] || demoNames['professional-default']);
  };

  const CorporateWebsite = () => (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-blue-900">
                  {lang === 'zh' ? 'professional services group' : 'professional services group'}
                </h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {[
                  { id: 'home', label: lang === 'zh' ? 'home' : 'home' },
                  { id: 'about', label: lang === 'zh' ? 'about us' : 'about us' },
                  { id: 'services', label: lang === 'zh' ? 'services' : 'services' },
                  { id: 'team', label: lang === 'zh' ? 'team' : 'team' },
                  { id: 'contact', label: lang === 'zh' ? 'contact' : 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id as any)}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-xs font-medium ${
                      currentPage === item.id
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="sm:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: lang === 'zh' ? 'home' : 'home' },
                { id: 'about', label: lang === 'zh' ? 'about us' : 'about us' },
                { id: 'services', label: lang === 'zh' ? 'services' : 'services' },
                { id: 'team', label: lang === 'zh' ? 'team' : 'team' },
                { id: 'contact', label: lang === 'zh' ? 'contact' : 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id as any);
                    setMobileMenuOpen(false);
                  }}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-xs font-medium w-full text-left ${
                    currentPage === item.id
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="h-[600px] overflow-y-auto">
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center">
                  <h1 className="text-3xl font-bold mb-4">
                    {lang === 'zh' ? 'welcome to professional services group' : 'welcome to professional services group'}
                  </h1>
                  <p className="text-lg mb-6 max-w-2xl mx-auto">
                    {lang === 'zh'
                      ? 'your trusted partner for business excellence and strategic growth'
                      : 'your trusted partner for business excellence and strategic growth'
                    }
                  </p>
                  <div className="space-x-3">
                    <button
                      onClick={() => setCurrentPage('services')}
                      className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
                    >
                      {lang === 'zh' ? 'our services' : 'our services'}
                    </button>
                    <button
                      onClick={() => setCurrentPage('contact')}
                      className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm"
                    >
                      {lang === 'zh' ? 'contact us' : 'contact us'}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-12 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {lang === 'zh' ? 'why choose us' : 'why choose us'}
                  </h2>
                  <p className="text-gray-600">
                    {lang === 'zh'
                      ? 'we deliver exceptional results through expertise, innovation, and dedication'
                      : 'we deliver exceptional results through expertise, innovation, and dedication'
                    }
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: lang === 'zh' ? 'expertise' : 'expertise',
                      description: lang === 'zh'
                        ? 'over 25 years of combined experience'
                        : 'over 25 years of combined experience',
                      icon: 'brain'
                    },
                    {
                      title: lang === 'zh' ? 'innovation' : 'innovation',
                      description: lang === 'zh'
                        ? 'cutting-edge solutions for your business'
                        : 'cutting-edge solutions for your business',
                      icon: 'lightbulb'
                    },
                    {
                      title: lang === 'zh' ? 'results' : 'results',
                      description: lang === 'zh'
                        ? 'proven track record of success'
                        : 'proven track record of success',
                      icon: 'chart-bar'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg text-blue-600">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-blue-600 text-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  {[
                    { number: '500+', label: lang === 'zh' ? 'clients served' : 'clients served' },
                    { number: '25+', label: lang === 'zh' ? 'years experience' : 'years experience' },
                    { number: '50+', label: lang === 'zh' ? 'expert consultants' : 'expert consultants' },
                    { number: '98%', label: lang === 'zh' ? 'client satisfaction' : 'client satisfaction' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {lang === 'zh' ? 'about our company' : 'about our company'}
              </h1>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <p className="text-gray-600 mb-4">
                    {lang === 'zh'
                      ? 'founded in 1998, professional services group has been a trusted advisor to businesses across various industries. we combine deep industry knowledge with strategic insight to help our clients achieve their goals.'
                      : 'founded in 1998, professional services group has been a trusted advisor to businesses across various industries. we combine deep industry knowledge with strategic insight to help our clients achieve their goals.'
                  }
                  </p>
                  <p className="text-gray-600 mb-6">
                    {lang === 'zh'
                      ? 'our team of experienced consultants is committed to delivering exceptional value through innovative solutions and personalized service.'
                      : 'our team of experienced consultants is committed to delivering exceptional value through innovative solutions and personalized service.'
                  }
                  </p>
                  <div className="space-y-3">
                    {[
                      lang === 'zh' ? 'integrity and transparency' : 'integrity and transparency',
                      lang === 'zh' ? 'client-centric approach' : 'client-centric approach',
                      lang === 'zh' ? 'continuous innovation' : 'continuous innovation',
                      lang === 'zh' ? 'excellence in execution' : 'excellence in execution'
                    ].map((value, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg"></div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {lang === 'zh' ? 'our mission & vision' : 'our mission & vision'}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {lang === 'zh' ? 'our mission' : 'our mission'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {lang === 'zh'
                        ? 'to empower businesses with strategic insights and innovative solutions that drive sustainable growth and long-term success.'
                        : 'to empower businesses with strategic insights and innovative solutions that drive sustainable growth and long-term success.'
                      }
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {lang === 'zh' ? 'our vision' : 'our vision'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {lang === 'zh'
                        ? 'to be the most trusted consulting partner, recognized for our expertise, integrity, and commitment to client success.'
                        : 'to be the most trusted consulting partner, recognized for our expertise, integrity, and commitment to client success.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'services' && (
          <div className="py-12">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {lang === 'zh' ? 'our services' : 'our services'}
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {lang === 'zh'
                    ? 'comprehensive consulting solutions tailored to your business needs'
                    : 'comprehensive consulting solutions tailored to your business needs'
                  }
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: lang === 'zh' ? 'strategic consulting' : 'strategic consulting',
                    description: lang === 'zh'
                      ? 'provide comprehensive strategic planning and business transformation consulting services'
                      : 'provide comprehensive strategic planning and business transformation consulting services'
                  },
                  {
                    title: lang === 'zh' ? 'financial advisory' : 'financial advisory',
                    description: lang === 'zh'
                      ? 'professional financial consulting and investment advisory services'
                      : 'professional financial consulting and investment advisory services'
                  },
                  {
                    title: lang === 'zh' ? 'legal services' : 'legal services',
                    description: lang === 'zh'
                      ? 'comprehensive legal support and compliance consulting'
                      : 'comprehensive legal support and compliance consulting'
                  },
                  {
                    title: lang === 'zh' ? 'digital transformation' : 'digital transformation',
                    description: lang === 'zh'
                      ? 'help enterprises achieve digital transformation'
                      : 'help enterprises achieve digital transformation'
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
                      {lang === 'zh' ? 'learn more' : 'learn more'} {'>'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 p-6 rounded-lg text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {lang === 'zh' ? 'need a custom solution?' : 'need a custom solution?'}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  {lang === 'zh'
                    ? 'we tailor our services to meet your specific requirements and business objectives.'
                    : 'we tailor our services to meet your specific requirements and business objectives.'
                  }
                </p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  {lang === 'zh' ? 'get in touch' : 'get in touch'}
                </button>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'team' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {lang === 'zh' ? 'our team' : 'our team'}
                </h1>
                <p className="text-gray-600">
                  {lang === 'zh'
                    ? 'meet the experts behind our success'
                    : 'meet the experts behind our success'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: lang === 'zh' ? 'zhang minghao' : 'david zhang',
                    position: lang === 'zh' ? 'chief executive officer' : 'chief executive officer',
                    bio: lang === 'zh'
                      ? 'with over 20 years of experience in strategic management and business consulting'
                      : 'with over 20 years of experience in strategic management and business consulting'
                  },
                  {
                    name: lang === 'zh' ? 'li weijia' : 'william li',
                    position: lang === 'zh' ? 'chief financial officer' : 'chief financial officer',
                    bio: lang === 'zh'
                      ? 'expert in financial management and investment strategy with 15 years of experience'
                      : 'expert in financial management and investment strategy with 15 years of experience'
                  },
                  {
                    name: lang === 'zh' ? 'chen yuxin' : 'emily chen',
                    position: lang === 'zh' ? 'chief operating officer' : 'chief operating officer',
                    bio: lang === 'zh'
                      ? 'specialized in operational excellence and process optimization'
                      : 'specialized in operational excellence and process optimization'
                  },
                  {
                    name: lang === 'zh' ? 'wang zhihong' : 'james wang',
                    position: lang === 'zh' ? 'chief technology officer' : 'chief technology officer',
                    bio: lang === 'zh'
                      ? 'technology leader with expertise in digital transformation'
                      : 'technology leader with expertise in digital transformation'
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-gray-300 h-32"></div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-2 text-sm">{member.position}</p>
                      <p className="text-gray-600 text-xs">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {lang === 'zh' ? 'contact us' : 'contact us'}
                </h1>
                <p className="text-gray-600">
                  {lang === 'zh'
                    ? 'we would love to hear from you. get in touch with us today.'
                    : 'we would love to hear from you. get in touch with us today.'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    {lang === 'zh' ? 'get in touch' : 'get in touch'}
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {lang === 'zh' ? 'name' : 'name'}
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder={lang === 'zh' ? 'your name' : 'your name'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {lang === 'zh' ? 'email' : 'email'}
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder={lang === 'zh' ? 'your email' : 'your email'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {lang === 'zh' ? 'message' : 'message'}
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder={lang === 'zh' ? 'your message' : 'your message'}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                    >
                      {lang === 'zh' ? 'send message' : 'send message'}
                    </button>
                  </form>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    {lang === 'zh' ? 'contact information' : 'contact information'}
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {lang === 'zh' ? 'address' : 'address'}
                      </h3>
                      <p className="text-gray-600">
                        {lang === 'zh'
                          ? '123 business avenue, suite 100, central, hong kong'
                          : '123 business avenue, suite 100, central, hong kong'
                        }
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {lang === 'zh' ? 'phone' : 'phone'}
                      </h3>
                      <p className="text-gray-600">+852 2345 6789</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {lang === 'zh' ? 'email' : 'email'}
                      </h3>
                      <p className="text-gray-600">info@professionalservices.com</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {lang === 'zh' ? 'business hours' : 'business hours'}
                      </h3>
                      <p className="text-gray-600">
                        {lang === 'zh'
                          ? 'monday - friday: 9:00 am - 6:00 pm'
                          : 'monday - friday: 9:00 am - 6:00 pm'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-sm font-semibold mb-3">
                  {lang === 'zh' ? 'professional services group' : 'professional services group'}
                </h3>
                <p className="text-gray-400 text-xs">
                  {lang === 'zh'
                    ? 'your trusted partner for business excellence'
                    : 'your trusted partner for business excellence'
                  }
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">
                  {lang === 'zh' ? 'quick links' : 'quick links'}
                </h4>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">{lang === 'zh' ? 'about us' : 'about us'}</button></li>
                  <li><button onClick={() => setCurrentPage('services')} className="hover:text-white">{lang === 'zh' ? 'services' : 'services'}</button></li>
                  <li><button onClick={() => setCurrentPage('team')} className="hover:text-white">{lang === 'zh' ? 'team' : 'team'}</button></li>
                  <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">{lang === 'zh' ? 'contact' : 'contact'}</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">
                  {lang === 'zh' ? 'services' : 'services'}
                </h4>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>{lang === 'zh' ? 'strategic consulting' : 'strategic consulting'}</li>
                  <li>{lang === 'zh' ? 'financial advisory' : 'financial advisory'}</li>
                  <li>{lang === 'zh' ? 'legal services' : 'legal services'}</li>
                  <li>{lang === 'zh' ? 'digital transformation' : 'digital transformation'}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3">
                  {lang === 'zh' ? 'contact info' : 'contact info'}
                </h4>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>+852 2345 6789</li>
                  <li>info@professionalservices.com</li>
                  <li>123 business avenue, central, hong kong</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
              <p className="text-xs">&copy; 2024 professional services group. {lang === 'zh' ? 'all rights reserved.' : 'all rights reserved.'}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-blue-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-2000" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            {lang === 'zh' ? 'professional services group' : 'professional services group'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? 'transform your business with our comprehensive consulting services and strategic solutions'
              : 'transform your business with our comprehensive consulting services and strategic solutions'
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
          {/* Demo Gallery - 選擇面板 */}
          <AnimatePresence>
            {showDemoGallery && (
              <DemoGallery
                industryId="professional"
                industryName={lang === 'zh' ? '專業服務' : 'Professional Services'}
                lang={lang}
                onDemoSelect={handleDemoSelect}
                currentDemoId={currentDemoId}
                isOpen={showDemoGallery}
                onClose={() => setShowDemoGallery(false)}
              />
            )}
          </AnimatePresence>

          <div className="relative bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl">
            {/* Demo Header Bar */}
            <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 px-4 py-3 flex items-center justify-between backdrop-blur-sm border-b border-blue-500/30">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-300 text-sm font-mono">professional-services.demo</span>
                <span className="text-xs text-blue-400">|</span>
                <span className="text-xs text-blue-200 font-medium">{currentDemoName}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* 選擇案例按鈕 */}
                <button
                  onClick={() => setShowDemoGallery(true)}
                  className="px-3 py-1.5 bg-blue-900/50 text-blue-200 text-xs rounded-lg border border-blue-500/50 hover:bg-blue-800/50 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {lang === 'zh' ? '選擇案例' : 'Select Demo'}
                </button>
              </div>
            </div>

            {/* Demo Content - 預設直接顯示 */}
            <div className="relative" style={{ height: '600px' }}>
              <div className="w-full h-full overflow-hidden">
                <CorporateWebsite />
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
          <h3 className="text-2xl font-bold text-white mb-6">
            {lang === 'zh' ? '專業技術架構' : 'Professional Tech Stack'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'Modern UI/UX'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              {lang === 'zh' 
                ? 'built with React and TypeScript for robust performance, styled with Tailwind CSS for professional appearance, enhanced with Framer Motion for smooth interactions, and designed with responsive principles for optimal viewing across all devices.'
                : 'built with React and TypeScript for robust performance, styled with Tailwind CSS for professional appearance, enhanced with Framer Motion for smooth interactions, and designed with responsive principles for optimal viewing across all devices.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalShowcase;

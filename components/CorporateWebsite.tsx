import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CorporateWebsiteProps {
  lang: 'en' | 'zh';
  onBack?: () => void;
}

const CorporateWebsite: React.FC<CorporateWebsiteProps> = ({ lang, onBack }) => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'team' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">
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
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
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
            {onBack && (
              <button
                onClick={onBack}
                className="mr-4 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {lang === 'zh' ? 'back' : 'back'}
              </button>
            )}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden"
          >
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
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left ${
                    currentPage === item.id
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {lang === 'zh' ? 'welcome to professional services group' : 'welcome to professional services group'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {lang === 'zh'
                ? 'your trusted partner for business excellence and strategic growth'
                : 'your trusted partner for business excellence and strategic growth'
              }
            </p>
            <div className="space-x-4">
              <button
                onClick={() => setCurrentPage('services')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {lang === 'zh' ? 'our services' : 'our services'}
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {lang === 'zh' ? 'contact us' : 'contact us'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'zh' ? 'why choose us' : 'why choose us'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'zh'
                ? 'we deliver exceptional results through expertise, innovation, and dedication'
                : 'we deliver exceptional results through expertise, innovation, and dedication'
              }
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: lang === 'zh' ? 'expertise' : 'expertise',
                description: lang === 'zh'
                  ? 'over 25 years of combined experience in consulting and advisory services'
                  : 'over 25 years of combined experience in consulting and advisory services',
                icon: 'brain'
              },
              {
                title: lang === 'zh' ? 'innovation' : 'innovation',
                description: lang === 'zh'
                  ? 'cutting-edge solutions tailored to your specific business needs'
                  : 'cutting-edge solutions tailored to your specific business needs',
                icon: 'lightbulb'
              },
              {
                title: lang === 'zh' ? 'results' : 'results',
                description: lang === 'zh'
                  ? 'proven track record of delivering measurable business outcomes'
                  : 'proven track record of delivering measurable business outcomes',
                icon: 'chart-bar'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-blue-600">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: lang === 'zh' ? 'clients served' : 'clients served' },
              { number: '25+', label: lang === 'zh' ? 'years experience' : 'years experience' },
              { number: '50+', label: lang === 'zh' ? 'expert consultants' : 'expert consultants' },
              { number: '98%', label: lang === 'zh' ? 'client satisfaction' : 'client satisfaction' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {lang === 'zh' ? 'about our company' : 'about our company'}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {lang === 'zh'
                ? 'founded in 1998, professional services group has been a trusted advisor to businesses across various industries. we combine deep industry knowledge with strategic insight to help our clients achieve their goals.'
                : 'founded in 1998, professional services group has been a trusted advisor to businesses across various industries. we combine deep industry knowledge with strategic insight to help our clients achieve their goals.'
              }
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {lang === 'zh'
                ? 'our team of experienced consultants is committed to delivering exceptional value through innovative solutions and personalized service.'
                : 'our team of experienced consultants is committed to delivering exceptional value through innovative solutions and personalized service.'
              }
            </p>
            <div className="space-y-4">
              {[
                lang === 'zh' ? 'integrity and transparency' : 'integrity and transparency',
                lang === 'zh' ? 'client-centric approach' : 'client-centric approach',
                lang === 'zh' ? 'continuous innovation' : 'continuous innovation',
                lang === 'zh' ? 'excellence in execution' : 'excellence in execution'
              ].map((value, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg"></div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {lang === 'zh' ? 'our mission & vision' : 'our mission & vision'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {lang === 'zh' ? 'our mission' : 'our mission'}
              </h3>
              <p className="text-gray-600">
                {lang === 'zh'
                  ? 'to empower businesses with strategic insights and innovative solutions that drive sustainable growth and long-term success.'
                  : 'to empower businesses with strategic insights and innovative solutions that drive sustainable growth and long-term success.'
                }
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {lang === 'zh' ? 'our vision' : 'our vision'}
              </h3>
              <p className="text-gray-600">
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
  );

  const ServicesPage = () => (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? 'our services' : 'our services'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'zh'
              ? 'comprehensive consulting solutions tailored to your business needs'
              : 'comprehensive consulting solutions tailored to your business needs'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: lang === 'zh' ? 'strategic consulting' : 'strategic consulting',
              description: lang === 'zh'
                ? 'provide comprehensive strategic planning and business transformation consulting services'
                : 'provide comprehensive strategic planning and business transformation consulting services',
              icon: 'briefcase'
            },
            {
              title: lang === 'zh' ? 'financial advisory' : 'financial advisory',
              description: lang === 'zh'
                ? 'professional financial consulting and investment advisory services'
                : 'professional financial consulting and investment advisory services',
              icon: 'chart-line'
            },
            {
              title: lang === 'zh' ? 'legal services' : 'legal services',
              description: lang === 'zh'
                ? 'comprehensive legal support and compliance consulting'
                : 'comprehensive legal support and compliance consulting',
              icon: 'balance-scale'
            },
            {
              title: lang === 'zh' ? 'digital transformation' : 'digital transformation',
              description: lang === 'zh'
                ? 'help enterprises achieve digital transformation'
                : 'help enterprises achieve digital transformation',
              icon: 'laptop-code'
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl text-blue-600">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                {lang === 'zh' ? 'learn more' : 'learn more'} {'>'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {lang === 'zh' ? 'need a custom solution?' : 'need a custom solution?'}
          </h2>
          <p className="text-gray-600 mb-6">
            {lang === 'zh'
              ? 'we tailor our services to meet your specific requirements and business objectives.'
              : 'we tailor our services to meet your specific requirements and business objectives.'
            }
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {lang === 'zh' ? 'get in touch' : 'get in touch'}
          </button>
        </div>
      </div>
    </div>
  );

  const TeamPage = () => (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? 'our team' : 'our team'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'zh'
              ? 'meet the experts behind our success'
              : 'meet the experts behind our success'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-300 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? 'contact us' : 'contact us'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'zh'
              ? 'we would love to hear from you. get in touch with us today.'
              : 'we would love to hear from you. get in touch with us today.'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {lang === 'zh' ? 'get in touch' : 'get in touch'}
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'zh' ? 'name' : 'name'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={lang === 'zh' ? 'your name' : 'your name'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'zh' ? 'email' : 'email'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={lang === 'zh' ? 'your email' : 'your email'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'zh' ? 'subject' : 'subject'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={lang === 'zh' ? 'subject' : 'subject'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'zh' ? 'message' : 'message'}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={lang === 'zh' ? 'your message' : 'your message'}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {lang === 'zh' ? 'send message' : 'send message'}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {lang === 'zh' ? 'contact information' : 'contact information'}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600">location</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {lang === 'zh' ? 'address' : 'address'}
                  </h3>
                  <p className="text-gray-600">
                    {lang === 'zh'
                      ? '123 business avenue, suite 100, taipei city, taiwan'
                      : '123 business avenue, suite 100, taipei city, taiwan'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600">phone</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {lang === 'zh' ? 'phone' : 'phone'}
                  </h3>
                  <p className="text-gray-600">+886-2-2345-6789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600">email</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {lang === 'zh' ? 'email' : 'email'}
                  </h3>
                  <p className="text-gray-600">info@professionalservices.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600">clock</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
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
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'services' && <ServicesPage />}
          {currentPage === 'team' && <TeamPage />}
          {currentPage === 'contact' && <ContactPage />}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {lang === 'zh' ? 'professional services group' : 'professional services group'}
              </h3>
              <p className="text-gray-400">
                {lang === 'zh'
                  ? 'your trusted partner for business excellence'
                  : 'your trusted partner for business excellence'
                }
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {lang === 'zh' ? 'quick links' : 'quick links'}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">{lang === 'zh' ? 'about us' : 'about us'}</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white">{lang === 'zh' ? 'services' : 'services'}</button></li>
                <li><button onClick={() => setCurrentPage('team')} className="hover:text-white">{lang === 'zh' ? 'team' : 'team'}</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">{lang === 'zh' ? 'contact' : 'contact'}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {lang === 'zh' ? 'services' : 'services'}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>{lang === 'zh' ? 'strategic consulting' : 'strategic consulting'}</li>
                <li>{lang === 'zh' ? 'financial advisory' : 'financial advisory'}</li>
                <li>{lang === 'zh' ? 'legal services' : 'legal services'}</li>
                <li>{lang === 'zh' ? 'digital transformation' : 'digital transformation'}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {lang === 'zh' ? 'contact info' : 'contact info'}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>+886-2-2345-6789</li>
                <li>info@professionalservices.com</li>
                <li>123 business avenue, taipei</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 professional services group. {lang === 'zh' ? 'all rights reserved.' : 'all rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateWebsite;

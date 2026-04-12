import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProfessionalServicesProps {
  lang: 'en' | 'zh';
  onBack?: () => void;
}

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
}

const ProfessionalServices: React.FC<ProfessionalServicesProps> = ({ lang, onBack }) => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'about' | 'services' | 'team' | 'contact'>('about');

  // services data
  const services: ServiceItem[] = [
    {
      id: 1,
      title: lang === 'zh' ? 'strategic consulting' : 'strategic consulting',
      description: lang === 'zh' 
        ? 'provide enterprises with strategic planning and business transformation consulting services to help companies achieve sustainable development' 
        : 'provide enterprises with strategic planning and business transformation consulting services to help companies achieve sustainable development',
      icon: 'briefcase',
      features: lang === 'zh' 
        ? ['market analysis', 'competitive strategy', 'business model optimization', 'risk management']
        : ['market analysis', 'competitive strategy', 'business model optimization', 'risk management']
    },
    {
      id: 2,
      title: lang === 'zh' ? 'financial advisory' : 'financial advisory',
      description: lang === 'zh'
        ? 'professional financial consulting and investment advisory services to help clients optimize asset allocation'
        : 'professional financial consulting and investment advisory services to help clients optimize asset allocation',
      icon: 'chart-line',
      features: lang === 'zh'
        ? ['investment portfolio management', 'tax planning', 'merger and acquisition consulting', 'risk assessment']
        : ['investment portfolio management', 'tax planning', 'merger and acquisition consulting', 'risk assessment']
    },
    {
      id: 3,
      title: lang === 'zh' ? 'legal services' : 'legal services',
      description: lang === 'zh'
        ? 'provide comprehensive legal support and compliance consulting to protect the legal rights and interests of enterprises'
        : 'provide comprehensive legal support and compliance consulting to protect the legal rights and interests of enterprises',
      icon: 'balance-scale',
      features: lang === 'zh'
        ? ['contract drafting and review', 'compliance consulting', 'intellectual property protection', 'dispute resolution']
        : ['contract drafting and review', 'compliance consulting', 'intellectual property protection', 'dispute resolution']
    },
    {
      id: 4,
      title: lang === 'zh' ? 'human resources consulting' : 'human resources consulting',
      description: lang === 'zh'
        ? 'provide hr strategy and talent management solutions to help enterprises build high-performance teams'
        : 'provide hr strategy and talent management solutions to help enterprises build high-performance teams',
      icon: 'users',
      features: lang === 'zh'
        ? ['talent recruitment', 'performance management', 'training and development', 'organizational restructuring']
        : ['talent recruitment', 'performance management', 'training and development', 'organizational restructuring']
    },
    {
      id: 5,
      title: lang === 'zh' ? 'digital transformation' : 'digital transformation',
      description: lang === 'zh'
        ? 'help enterprises achieve digital transformation and improve operational efficiency and competitiveness'
        : 'help enterprises achieve digital transformation and improve operational efficiency and competitiveness',
      icon: 'laptop-code',
      features: lang === 'zh'
        ? ['digital strategy planning', 'system integration', 'data analysis', 'automation solutions']
        : ['digital strategy planning', 'system integration', 'data analysis', 'automation solutions']
    },
    {
      id: 6,
      title: lang === 'zh' ? 'marketing consulting' : 'marketing consulting',
      description: lang === 'zh'
        ? 'provide market research and brand strategy consulting to enhance brand influence and market share'
        : 'provide market research and brand strategy consulting to enhance brand influence and market share',
      icon: 'bullhorn',
      features: lang === 'zh'
        ? ['market research', 'brand strategy', 'digital marketing', 'customer relationship management']
        : ['market research', 'brand strategy', 'digital marketing', 'customer relationship management']
    }
  ];

  // team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: lang === 'zh' ? 'zhang minghao' : 'david zhang',
      position: lang === 'zh' ? 'chief executive officer' : 'chief executive officer',
      department: lang === 'zh' ? 'executive office' : 'executive office',
      email: 'david.zhang@company.com',
      phone: '+886-2-2345-6789'
    },
    {
      id: 2,
      name: lang === 'zh' ? 'li weijia' : 'william li',
      position: lang === 'zh' ? 'chief financial officer' : 'chief financial officer',
      department: lang === 'zh' ? 'finance department' : 'finance department',
      email: 'william.li@company.com',
      phone: '+886-2-2345-6790'
    },
    {
      id: 3,
      name: lang === 'zh' ? 'chen yuxin' : 'emily chen',
      position: lang === 'zh' ? 'chief operating officer' : 'chief operating officer',
      department: lang === 'zh' ? 'operations department' : 'operations department',
      email: 'emily.chen@company.com',
      phone: '+886-2-2345-6791'
    },
    {
      id: 4,
      name: lang === 'zh' ? 'wang zhihong' : 'james wang',
      position: lang === 'zh' ? 'chief technology officer' : 'chief technology officer',
      department: lang === 'zh' ? 'technology department' : 'technology department',
      email: 'james.wang@company.com',
      phone: '+886-2-2345-6792'
    },
    {
      id: 5,
      name: lang === 'zh' ? 'lin meihua' : 'linda lin',
      position: lang === 'zh' ? 'human resources director' : 'human resources director',
      department: lang === 'zh' ? 'human resources department' : 'human resources department',
      email: 'linda.lin@company.com',
      phone: '+886-2-2345-6793'
    },
    {
      id: 6,
      name: lang === 'zh' ? 'huang jiancheng' : 'michael huang',
      position: lang === 'zh' ? 'marketing director' : 'marketing director',
      department: lang === 'zh' ? 'marketing department' : 'marketing department',
      email: 'michael.huang@company.com',
      phone: '+886-2-2345-6794'
    }
  ];

  const renderIcon = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'briefcase': 'case',
      'chart-line': 'trending-up',
      'balance-scale': 'scale-balance',
      'users': 'user-group',
      'laptop-code': 'computer',
      'bullhorn': 'megaphone'
    };
    return iconMap[iconName] || 'briefcase';
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* back button */}
        {onBack && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="mr-2">{'<'}</span>
            {lang === 'zh' ? 'back to homepage' : 'back to homepage'}
          </motion.button>
        )}
        
        {/* company introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? 'professional services group' : 'professional services group'}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {lang === 'zh'
              ? 'we are a leading professional service provider, committed to providing high-quality consulting and solutions for global enterprises to help clients achieve business success and sustainable development.'
              : 'we are a leading professional service provider, committed to providing high-quality consulting and solutions for global enterprises to help clients achieve business success and sustainable development.'
            }
          </p>
        </motion.div>

        {/* navigation tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {[
            { id: 'about', label: lang === 'zh' ? 'about us' : 'about us' },
            { id: 'services', label: lang === 'zh' ? 'services' : 'services' },
            { id: 'team', label: lang === 'zh' ? 'team' : 'team' },
            { id: 'contact', label: lang === 'zh' ? 'contact us' : 'contact us' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* about us section */}
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {lang === 'zh' ? 'our history and mission' : 'our history and mission'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {lang === 'zh'
                    ? 'founded in 1995, we have been focusing on providing professional consulting services for 28 years. our mission is to become the most trusted partner for our clients, helping them navigate the complex business environment and achieve long-term success.'
                    : 'founded in 1995, we have been focusing on providing professional consulting services for 28 years. our mission is to become the most trusted partner for our clients, helping them navigate the complex business environment and achieve long-term success.'
                  }
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {lang === 'zh'
                    ? 'we have a professional team with rich industry experience and are committed to providing customized solutions for each client. whether it is strategic planning, financial consulting, or digital transformation, we can provide professional support.'
                    : 'we have a professional team with rich industry experience and are committed to providing customized solutions for each client. whether it is strategic planning, financial consulting, or digital transformation, we can provide professional support.'
                  }
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {lang === 'zh' ? 'core values' : 'core values'}
                </h3>
                <ul className="space-y-3">
                  {[
                    lang === 'zh' ? 'integrity and transparency' : 'integrity and transparency',
                    lang === 'zh' ? 'professional excellence' : 'professional excellence',
                    lang === 'zh' ? 'customer first' : 'customer first',
                    lang === 'zh' ? 'innovation-driven' : 'innovation-driven'
                  ].map((value, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '500+', label: lang === 'zh' ? 'served enterprises' : 'served enterprises' },
                { number: '28', label: lang === 'zh' ? 'years of experience' : 'years of experience' },
                { number: '50+', label: lang === 'zh' ? 'professional consultants' : 'professional consultants' },
                { number: '95%', label: lang === 'zh' ? 'customer satisfaction' : 'customer satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* services section */}
        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {lang === 'zh' ? 'our services' : 'our services'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 cursor-pointer"
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 text-xl">
                        {renderIcon(service.icon)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t pt-4 mt-4"
                    >
                      <h4 className="font-medium mb-2">
                        {lang === 'zh' ? 'service features' : 'service features'}
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* team section */}
        {activeTab === 'team' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {lang === 'zh' ? 'our team' : 'our team'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">{lang === 'zh' ? 'department' : 'department'}:</span>
                      <span>{member.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">{lang === 'zh' ? 'email' : 'email'}:</span>
                      <span className="text-blue-600">{member.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">{lang === 'zh' ? 'phone' : 'phone'}:</span>
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* contact section */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {lang === 'zh' ? 'contact us' : 'contact us'}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  {lang === 'zh' ? 'contact information' : 'contact information'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600">location</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{lang === 'zh' ? 'address' : 'address'}</h4>
                      <p className="text-gray-600">
                        {lang === 'zh'
                          ? 'no. 123, section 4, xinyi road, xinyi district, taipei city, taiwan'
                          : 'no. 123, section 4, xinyi road, xinyi district, taipei city, taiwan'
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600">phone</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{lang === 'zh' ? 'phone' : 'phone'}</h4>
                      <p className="text-gray-600">+886-2-2345-6789</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600">email</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{lang === 'zh' ? 'email' : 'email'}</h4>
                      <p className="text-gray-600">info@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600">clock</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{lang === 'zh' ? 'business hours' : 'business hours'}</h4>
                      <p className="text-gray-600">
                        {lang === 'zh'
                          ? 'monday to friday: 9:00 am - 6:00 pm'
                          : 'monday to friday: 9:00 am - 6:00 pm'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  {lang === 'zh' ? 'send us a message' : 'send us a message'}
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === 'zh' ? 'name' : 'name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={lang === 'zh' ? 'please enter your name' : 'please enter your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === 'zh' ? 'email' : 'email'}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={lang === 'zh' ? 'please enter your email' : 'please enter your email'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {lang === 'zh' ? 'message' : 'message'}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={lang === 'zh' ? 'please enter your message' : 'please enter your message'}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {lang === 'zh' ? 'send message' : 'send message'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProfessionalServices;

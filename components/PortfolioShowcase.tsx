import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants.tsx';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  image?: string;
}

interface PortfolioShowcaseProps {
  lang: 'en' | 'zh';
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ lang }) => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: lang === 'zh' ? '電商平台重構' : 'E-Commerce Platform Redesign',
      description: lang === 'zh' ? '為大型零售商打造現代化購物體驗，提升轉化率40%' : 'Modern shopping experience for major retailer, 40% conversion increase',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: lang === 'zh' ? '電商' : 'E-Commerce'
    },
    {
      id: '2', 
      title: lang === 'zh' ? 'SaaS 管理系統' : 'SaaS Management System',
      description: lang === 'zh' ? '企業級資源管理平台，服務超過10,000+用戶' : 'Enterprise resource management platform serving 10,000+ users',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      category: lang === 'zh' ? 'SaaS' : 'SaaS'
    },
    {
      id: '3',
      title: lang === 'zh' ? '金融科技應用' : 'FinTech Application',
      description: lang === 'zh' ? '創新投資管理工具，實時數據分析與風險評估' : 'Innovative investment management tool with real-time analytics',
      tech: ['React', 'TypeScript', 'GraphQL', 'Docker'],
      category: lang === 'zh' ? '金融科技' : 'FinTech'
    },
    {
      id: '4',
      title: lang === 'zh' ? '教育平台' : 'Education Platform',
      description: lang === 'zh' ? '互動式學習管理系統，支援多媒體內容與即時協作' : 'Interactive learning management system with multimedia content',
      tech: ['Next.js', 'Prisma', 'WebRTC', 'Redis'],
      category: lang === 'zh' ? '教育' : 'Education'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case '電商':
      case 'E-Commerce':
        return COLORS.PRIMARY_BLUE;
      case 'SaaS':
        return COLORS.ACCENT_TEAL;
      case '金融科技':
      case 'FinTech':
        return COLORS.SUCCESS_GREEN;
      default:
        return COLORS.NEUTRAL_GRAY;
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {lang === 'zh' ? '精選作品展示' : 'Featured Projects'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? '我們為各行各業的客戶打造了卓越的數位解決方案，每個專案都體現了我們對品質與創新的堅持。'
              : 'We deliver exceptional digital solutions for clients across industries, each project reflecting our commitment to quality and innovation.'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: getCategoryColor(item.category) }}
                  >
                    {item.category}
                  </span>
                  <div className="flex gap-2">
                    {item.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    {lang === 'zh' ? '查看詳情' : 'View Details'}
                  </button>
                  <div className="flex gap-4 text-gray-500 text-sm">
                    <span>{lang === 'zh' ? '2024' : '2024'}</span>
                    <span>•</span>
                    <span>{lang === 'zh' ? '已完成' : 'Completed'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all font-semibold text-lg">
            {lang === 'zh' ? '查看更多作品' : 'View More Projects'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;

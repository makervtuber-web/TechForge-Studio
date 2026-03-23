import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface PersonalShowcaseProps {
  lang: 'en' | 'zh';
}

const PersonalShowcase: React.FC<PersonalShowcaseProps> = ({ lang }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const t = UI_TEXT[lang];

  const personalBrandingFeatures = [
    {
      title: lang === 'zh' ? '視覺衝擊力' : 'Visual Impact',
      description: lang === 'zh' ? '第一秒鐘就抓住眼球，留下深刻印象' : 'Capture attention in the first second, leave lasting impression',
      icon: '🎯'
    },
    {
      title: lang === 'zh' ? '故事敘述' : 'Storytelling',
      description: lang === 'zh' ? '個人歷程與成就的完美呈現' : 'Perfect presentation of personal journey and achievements',
      icon: '📖'
    },
    {
      title: lang === 'zh' ? '專業權威' : 'Professional Authority',
      description: lang === 'zh' ? '建立專業形象，展現行業地位' : 'Build professional image, showcase industry status',
      icon: '👑'
    },
    {
      title: lang === 'zh' ? '社交證明' : 'Social Proof',
      description: lang === 'zh' ? '客戶見證、合作夥伴、媒體報導' : 'Client testimonials, partners, media coverage',
      icon: '⭐'
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
      type: lang === 'zh' ? '專業顧問' : 'Professional Consultant',
      description: lang === 'zh' ? '展示專業知識和行業經驗' : 'Showcase expertise and industry experience',
      color: 'from-blue-600 to-purple-600'
    },
    {
      type: lang === 'zh' ? '創業者' : 'Entrepreneur',
      description: lang === 'zh' ? '創業故事和商業成就' : 'Entrepreneurial story and business achievements',
      color: 'from-orange-600 to-red-600'
    },
    {
      type: lang === 'zh' ? '自由工作者' : 'Freelancer',
      description: lang === 'zh' ? '作品集和客戶見證' : 'Portfolio and client testimonials',
      color: 'from-green-600 to-teal-600'
    },
    {
      type: lang === 'zh' ? '意見領袖' : 'Influencer',
      description: lang === 'zh' ? '影響力和社群參與' : 'Influence and community engagement',
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {lang === 'zh' ? '個人品牌專家' : 'Personal Brand Expert'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? '讓你的個人品牌在3秒內深入人心。我們不只是設計網站，我們打造令人難忘的個人形象，讓你成為行業焦點。'
              : 'Make your personal brand unforgettable in 3 seconds. We don\'t just design websites, we create memorable personal images that make you the industry focus.'
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

        {/* Demo Preview Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative bg-white rounded-2xl overflow-hidden border border-purple-200 shadow-2xl">
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-purple-600 text-sm font-mono">personal-brand.demo</span>
            </div>
            
            {!showDemo ? (
              <div className="p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-pulse">✨</div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {lang === 'zh' ? '個人品牌展示' : 'Personal Brand Showcase'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {lang === 'zh' ? '令人難忘的第一印象' : 'Unforgettable First Impression'}
                  </p>
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
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
                  <PersonalDemo 
                    lang={lang} 
                    onDemoComplete={() => setShowDemo(false)} 
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
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
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const PersonalDemo: React.FC<PersonalDemoProps> = ({
  lang,
  onDemoComplete,
  activeSection,
  setActiveSection
}) => {
  const t = UI_TEXT[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      {activeSection === 'hero' && (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="text-center z-10 px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {lang === 'zh' ? '張明軒' : 'Michael Zhang'}
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-indigo-200">
                {lang === 'zh' ? '數位轉型專家 | 創業顧問 | 演講家' : 'Digital Transformation Expert | Entrepreneurial Advisor | Speaker'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105">
                  {lang === 'zh' ? '聯絡合作' : 'Contact for Collaboration'}
                </button>
                <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 rounded-full font-semibold hover:bg-indigo-400 hover:text-white transition-all">
                  {lang === 'zh' ? '了解更多' : 'Learn More'}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">15+</div>
                <p className="text-indigo-200">{lang === 'zh' ? '年經驗' : 'Years Experience'}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                <p className="text-purple-200">{lang === 'zh' ? '成功案例' : 'Success Cases'}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">50K+</div>
                <p className="text-pink-200">{lang === 'zh' ? '影響力' : 'Influence'}</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
            {['hero', 'story', 'expertise', 'testimonials'].map((section, index) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSection === section ? 'bg-white scale-150' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Story Section */}
      {activeSection === 'story' && (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              {lang === 'zh' ? '我的故事' : 'My Story'}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg md:text-xl text-indigo-100 leading-relaxed"
            >
              <p>
                {lang === 'zh' 
                  ? '從一個普通的軟體工程師到數位轉型專家，我的旅程充滿了挑戰與機遇。15年前，我意識到技術不僅是工具，更是改變世界的力量。'
                  : 'From an ordinary software engineer to a digital transformation expert, my journey has been filled with challenges and opportunities. 15 years ago, I realized that technology is not just a tool, but a force to change the world.'
                }
              </p>
              <p>
                {lang === 'zh' 
                  ? '我幫助超過200家企業完成數位化轉型，從傳統製造到新零售，從金融科技到醫療健康。每一個案例都是一次成長，每一次成功都是新的起點。'
                  : 'I have helped over 200 companies complete digital transformation, from traditional manufacturing to new retail, from fintech to healthcare. Every case is a growth, every success is a new starting point.'
                }
              </p>
              <p>
                {lang === 'zh' 
                  ? '現在我致力於分享我的經驗，幫助更多創業者實現他們的夢想。我相信，每個人都有改變世界的潛力，關鍵是找到正確的方向。'
                  : 'Now I am dedicated to sharing my experience, helping more entrepreneurs realize their dreams. I believe that everyone has the potential to change the world, the key is to find the right direction.'
                }
              </p>
            </motion.div>
          </div>
        </div>
      )}

      {/* Expertise Section */}
      {activeSection === 'expertise' && (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              {lang === 'zh' ? '專業領域' : 'Expertise Areas'}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: lang === 'zh' ? '數位轉型' : 'Digital Transformation',
                  description: lang === 'zh' ? '幫助企業制定數位化戰略，實現業務升級' : 'Help companies develop digital strategies and achieve business upgrades',
                  icon: '🚀'
                },
                {
                  title: lang === 'zh' ? '創業顧問' : 'Startup Advisory',
                  description: lang === 'zh' ? '為創業者提供全方位指導，降低創業風險' : 'Provide comprehensive guidance for entrepreneurs, reduce startup risks',
                  icon: '💡'
                },
                {
                  title: lang === 'zh' ? '商業演講' : 'Business Speaking',
                  description: lang === 'zh' ? '分享前沿洞察，激發創新思維' : 'Share cutting-edge insights, inspire innovative thinking',
                  icon: '🎤'
                }
              ].map((expertise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center"
                >
                  <div className="text-4xl mb-4">{expertise.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{expertise.title}</h3>
                  <p className="text-indigo-200">{expertise.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      {activeSection === 'testimonials' && (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              {lang === 'zh' ? '客戶見證' : 'Client Testimonials'}
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  name: lang === 'zh' ? '李總裁' : 'CEO Li',
                  company: lang === 'zh' ? '科技公司' : 'Tech Company',
                  content: lang === 'zh' 
                    ? '張專家的指導讓我們的數位化轉型事半功倍，不僅節省了時間，更重要的是避免了許多坑。'
                    : 'Expert Zhang\'s guidance made our digital transformation twice as effective, not only saving time but more importantly avoiding many pitfalls.',
                  rating: 5
                },
                {
                  name: lang === 'zh' ? '王創辦人' : 'Founder Wang',
                  company: lang === 'zh' ? '新創企業' : 'Startup',
                  content: lang === 'zh' 
                    ? '他的商業洞察力令人驚嘆，每次會談都能給我們帶來新的思考角度和實用建議。'
                    : 'His business insight is amazing, every meeting brings us new perspectives and practical advice.',
                  rating: 5
                },
                {
                  name: lang === 'zh' ? '陳經理' : 'Manager Chen',
                  company: lang === 'zh' ? '金融機構' : 'Financial Institution',
                  content: lang === 'zh' 
                    ? '演講內容豐富實用，現場氣氛熱烈，員工們都說這是最有價值的培訓。'
                    : 'Rich and practical speech content, enthusiastic atmosphere, employees all said this was the most valuable training.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-indigo-100 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-indigo-200 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalShowcase;

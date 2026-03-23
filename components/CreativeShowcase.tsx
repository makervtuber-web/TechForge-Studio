import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface CreativeShowcaseProps {
  lang: 'en' | 'zh';
}

interface FashionItem {
  id: number;
  name: string;
  price: string;
  description: string;
  mood: string;
  color: string;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  direction: number;
}

const CreativeShowcase: React.FC<CreativeShowcaseProps> = ({ lang }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [currentScene, setCurrentScene] = useState<'intro' | 'collection' | 'item'>('intro');
  const [selectedItem, setSelectedItem] = useState<FashionItem | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Dream Fashion Collection
  const fashionItems: FashionItem[] = [
    {
      id: 1,
      name: lang === 'zh' ? '星雲紗裙' : 'Nebula Silk Gown',
      price: lang === 'zh' ? 'NT$12,800' : '$428',
      description: lang === 'zh' ? '如星雲般飄逸的夢幻紗裙，採用未來感光纖維' : 'Dreamy silk gown as ethereal as nebulae, made with futuristic light-sensitive fibers',
      mood: 'mystical',
      color: '#9333ea'
    },
    {
      id: 2,
      name: lang === 'zh' ? '月光外套' : 'Moonlight Coat',
      price: lang === 'zh' ? 'NT$18,600' : '$620',
      description: lang === 'zh' ? '在月光下會發光的智能外套，內置恆溫系統' : 'Smart coat that glows under moonlight, with built-in temperature control',
      mood: 'serene',
      color: '#6366f1'
    },
    {
      id: 3,
      name: lang === 'zh' ? '夢境連衣裙' : 'Dreamscape Dress',
      price: lang === 'zh' ? 'NT$15,200' : '$507',
      description: lang === 'zh' ? '會隨情緒變色的連衣裙，融入生物感應技術' : 'Dress that changes color with emotions, integrated with bio-sensing technology',
      mood: 'ethereal',
      color: '#ec4899'
    },
    {
      id: 4,
      name: lang === 'zh' ? '量子羽衣' : 'Quantum Feather',
      price: lang === 'zh' ? 'NT$22,400' : '$747',
      description: lang === 'zh' ? '輕如羽毛的量子材料，可隨意變換形態' : 'Quantum material as light as feathers, can transform shape at will',
      mood: 'futuristic',
      color: '#06b6d4'
    }
  ];

  const transitionToScene = (scene: 'intro' | 'collection' | 'item', item?: FashionItem) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScene(scene);
      if (item) setSelectedItem(item);
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {currentScene === 'intro' && (
            <motion.div
              key="intro-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"
            >
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-2000" />
              </div>
            </motion.div>
          )}
          
          {currentScene === 'collection' && (
            <motion.div
              key="collection-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
            >
              <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
          
          {currentScene === 'item' && selectedItem && (
            <motion.div
              key="item-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${selectedItem.color}40 0%, transparent 70%), 
                           linear-gradient(135deg, #000000 0%, ${selectedItem.color}20 100%)`
              }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    `radial-gradient(circle at 30% 30%, ${selectedItem.color}30 0%, transparent 50%)`,
                    `radial-gradient(circle at 70% 70%, ${selectedItem.color}30 0%, transparent 50%)`,
                    `radial-gradient(circle at 30% 30%, ${selectedItem.color}30 0%, transparent 50%)`,
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            {lang === 'zh' ? '創意設計工作室' : 'Creative Design Studio'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? '將你的想像和設計理念轉化為令人驚嘆的數字體驗，讓每個獨特想法都有專屬的網站呈現'
              : 'Transform your imagination and design concepts into stunning digital experiences, giving every unique idea its own website presentation'
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
          <div className="relative bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 px-4 py-3 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-purple-300 text-sm font-mono">client-dream-fashion.demo</span>
            </div>
            
            {!showDemo ? (
              <div className="p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="text-6xl mb-4"
                  >
                    ✨
                  </motion.div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {lang === 'zh' ? '客戶案例：夢境時尚' : 'Client Case: Dream Fashion'}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {lang === 'zh' ? '為時尚品牌打造的沉浸式購物體驗網站' : 'Immersive shopping experience website for fashion brand'}
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    {lang === 'zh' ? '← 這只是其中一個案例，我們可以為任何行業定制獨特設計' : '← Just one example, we can customize unique designs for any industry'}
                  </p>
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                  >
                    {lang === 'zh' ? '查看案例演示' : 'View Case Demo'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative" style={{ height: '800px' }}>
                <div className="absolute top-2 right-2 z-50">
                  <button 
                    onClick={() => {
                      setShowDemo(false);
                      setCurrentScene('intro');
                      setSelectedItem(null);
                    }}
                    className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                  >
                    {lang === 'zh' ? '退出案例' : 'Exit Case'}
                  </button>
                </div>
                <div className="w-full h-full overflow-hidden">
                  {/* Case Study Header */}
                  <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 px-6 py-4 backdrop-blur-sm border-b border-purple-500/30">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-purple-200 mb-1">
                        {lang === 'zh' ? '客戶案例展示' : 'Client Case Study'}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {lang === 'zh' ? '夢境時尚品牌 - 沉浸式購物體驗設計' : 'Dream Fashion Brand - Immersive Shopping Experience Design'}
                      </p>
                    </div>
                  </div>
                  
                  <DreamFashionDemo 
                    lang={lang} 
                    fashionItems={fashionItems}
                    currentScene={currentScene}
                    setCurrentScene={setCurrentScene}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    transitionToScene={transitionToScene}
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
          <h3 className="text-2xl font-bold text-white mb-6">
            {lang === 'zh' ? '夢境技術棧' : 'Dream Tech Stack'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'Three.js', 'WebGL', 'GSAP', 'Shader', 'WebXR'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              {lang === 'zh' 
                ? '使用 Three.js 創建3D夢境場景，WebGL 實現實時渲染，GSAP 打造流暢過渡動畫。結合 Shader 編程和 WebXR 技術，創造前所未有的沉浸式時尚體驗。'
                : 'Create 3D dream scenes with Three.js, real-time rendering with WebGL, smooth transition animations with GSAP. Combined with Shader programming and WebXR technology for unprecedented immersive fashion experiences.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Dream Fashion Demo Component
interface DreamFashionDemoProps {
  lang: 'en' | 'zh';
  fashionItems: FashionItem[];
  currentScene: 'intro' | 'collection' | 'item';
  setCurrentScene: (scene: 'intro' | 'collection' | 'item') => void;
  selectedItem: FashionItem | null;
  setSelectedItem: (item: FashionItem | null) => void;
  transitionToScene: (scene: 'intro' | 'collection' | 'item', item?: FashionItem) => void;
}

const DreamFashionDemo: React.FC<DreamFashionDemoProps> = ({
  lang,
  fashionItems,
  currentScene,
  setCurrentScene,
  selectedItem,
  setSelectedItem,
  transitionToScene
}) => {
  const [hoveredItem, setHoveredItem] = useState<FashionItem | null>(null);
  const [showTryOn, setShowTryOn] = useState(false);
  const [tryOnStep, setTryOnStep] = useState<'camera' | 'scanning' | 'fitting' | 'result'>('camera');

  // 流星效果
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // 生成流星
    const generateShootingStar = () => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 30;
      const direction = Math.random() > 0.5 ? 1 : -1; // 隨機選擇向左或向右
      const newStar = {
        id: Date.now() + Math.random(),
        startX: startX,
        startY: startY,
        endX: startX + (direction * (20 + Math.random() * 30)), // 向左或向右移動
        endY: startY + (20 + Math.random() * 30), // 只向下移動
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
        direction: direction
      };
      setShootingStars(prev => [...prev, newStar]);
      
      // 清理舊的流星 - 保存timeout ID以便清理
      const cleanupTimeout = setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newStar.id));
      }, (newStar.duration + newStar.delay) * 1000);
      
      return cleanupTimeout;
    };

    // 定期生成流星
    const interval = setInterval(generateShootingStar, 3000);
    generateShootingStar(); // 立即生成第一顆

    return () => {
      clearInterval(interval);
      // 清理所有可能的timeout
      const timeouts = (window as any).__shootingStarTimeouts || [];
      timeouts.forEach((timeoutId: number) => clearTimeout(timeoutId));
      (window as any).__shootingStarTimeouts = [];
    };
  }, []);

  useEffect(() => {
    if (currentScene === 'intro') {
      const timer = setTimeout(() => {
        transitionToScene('collection');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScene, transitionToScene]);

  if (currentScene === 'intro') {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        {/* 流星效果 */}
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)'
            }}
            animate={{
              left: [`${star.startX}%`, `${star.endX}%`],
              top: [`${star.startY}%`, `${star.endY}%`],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: "easeOut"
            }}
          >
            {/* 流星尾巴 - 對角線方向與運動相反 */}
            <motion.div
              className="absolute h-0.5 bg-gradient-to-r from-white/80 via-white/40 to-transparent"
              style={{
                [star.direction > 0 ? 'right' : 'left']: 0,
                top: '50%',
                transform: `translateY(-50%) rotate(${star.direction > 0 ? 45 : -45}deg)`,
                transformOrigin: star.direction > 0 ? 'right center' : 'left center',
                width: 60
              }}
              animate={{
                opacity: [0, 0.8, 0.8, 0],
                width: [0, 60, 60, 0]
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                ease: "easeOut"
              }}
            />
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          className="text-center"
        >
          <motion.h1
            animate={{
              opacity: [0, 1, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut"
            }}
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {lang === 'zh' ? '夢境時尚' : 'Dream Fashion'}
          </motion.h1>
          <motion.p
            animate={{
              opacity: [0, 1, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="text-xl text-gray-300"
          >
            {lang === 'zh' ? '時尚與現實的邊界即將消融' : 'The boundary between fashion and reality is about to dissolve'}
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (currentScene === 'collection') {
    return (
      <div data-demo-container className="w-full h-full overflow-y-auto relative">
        {/* 流星效果 */}
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full pointer-events-none z-10"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.6)'
            }}
            animate={{
              left: [`${star.startX}%`, `${star.endX}%`],
              top: [`${star.startY}%`, `${star.endY}%`],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: "easeOut"
            }}
          >
            {/* 流星尾巴 - 對角線方向與運動相反 */}
            <motion.div
              className="absolute h-0.5 bg-gradient-to-r from-white/60 via-white/30 to-transparent"
              style={{
                [star.direction > 0 ? 'right' : 'left']: 0,
                top: '50%',
                transform: `translateY(-50%) rotate(${star.direction > 0 ? 45 : -45}deg)`,
                transformOrigin: star.direction > 0 ? 'right center' : 'left center',
                width: 40
              }}
              animate={{
                opacity: [0, 0.6, 0.6, 0],
                width: [0, 40, 40, 0]
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                ease: "easeOut"
              }}
            />
          </motion.div>
        ))}
        {/* Brand Introduction */}
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            >
              {lang === 'zh' ? '夢境時尚' : 'Dream Fashion'}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {lang === 'zh' 
                  ? '我們不僅是時尚品牌，更是夢境的建造者。每一件作品都是對未來的想像，對美的重新定義。'
                  : 'We are not just a fashion brand, but builders of dreams. Every piece is an imagination of the future, a redefinition of beauty.'
                }
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {lang === 'zh' 
                  ? '融合尖端科技與詩意設計，讓時尚超越時空的限制，成為你獨特的自我表達。'
                  : 'Fusing cutting-edge technology with poetic design, letting fashion transcend the limits of time and space, becoming your unique self-expression.'
                }
              </p>
            </motion.div>
            
            {/* Dream Cloud Brand Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative min-h-[500px] mb-12"
            >
              {/* Founding Vision - Dream Cloud */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  filter: 'brightness(1.2)'
                }}
                className="absolute top-10 left-10 w-64 h-40 cursor-pointer group"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  filter: 'blur(8px)',
                  boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3)'
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-3xl mb-2"
                    >
                      ✨
                    </motion.div>
                    <h3 className="text-white font-bold text-sm mb-1 drop-shadow-lg">
                      {lang === 'zh' ? '創始理念' : 'Founding Vision'}
                    </h3>
                    <p className="text-gray-200 text-xs leading-relaxed px-4 drop-shadow">
                      {lang === 'zh' ? '夢境起點' : 'Dream Origin'}
                    </p>
                  </motion.div>
                </div>
                
                {/* Floating particles around cloud */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-300 rounded-full"
                    style={{
                      left: `${20 + (i * 20)}%`,
                      top: `${30 + (i * 15)}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      y: [0, -15, 0],
                      x: [0, (i - 1) * 5, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Design Philosophy - Ethereal Cloud */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ 
                  scale: 1.02,
                  filter: 'brightness(1.3)'
                }}
                className="absolute top-24 left-1/2 w-80 h-48 cursor-pointer group"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 60%, transparent 80%)',
                  borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
                  filter: 'blur(10px)',
                  boxShadow: '0 12px 40px rgba(59, 130, 246, 0.4)'
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, -3, 3, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-4xl mb-2"
                    >
                      🎨
                    </motion.div>
                    <h3 className="text-white font-bold text-sm mb-1 drop-shadow-lg">
                      {lang === 'zh' ? '設計哲學' : 'Design Philosophy'}
                    </h3>
                    <p className="text-gray-200 text-xs leading-relaxed px-4 drop-shadow">
                      {lang === 'zh' ? '詩意創造' : 'Poetic Creation'}
                    </p>
                  </motion.div>
                </div>
                
                {/* Dream particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-300 rounded-full"
                    style={{
                      left: `${15 + (i * 18)}%`,
                      top: `${20 + (i * 12)}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Future Vision - Mystic Cloud */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ 
                  scale: 1.02,
                  filter: 'brightness(1.3)'
                }}
                className="absolute top-56 right-1/4 w-72 h-44 cursor-pointer group"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.3) 0%, rgba(34, 197, 94, 0.2) 50%, transparent 70%)',
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  filter: 'blur(9px)',
                  boxShadow: '0 10px 36px rgba(16, 185, 129, 0.3)'
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 8, -8, 0],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-3xl mb-2"
                    >
                      ♾️
                    </motion.div>
                    <h3 className="text-white font-bold text-sm mb-1 drop-shadow-lg">
                      {lang === 'zh' ? '未來展望' : 'Future Vision'}
                    </h3>
                    <p className="text-gray-200 text-xs leading-relaxed px-4 drop-shadow">
                      {lang === 'zh' ? '無限可能' : 'Infinite Possibility'}
                    </p>
                  </motion.div>
                </div>
                
                {/* Mystic particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-green-300 rounded-full"
                    style={{
                      left: `${25 + (i * 15)}%`,
                      top: `${25 + (i * 18)}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      y: [0, -18, 0],
                      x: [0, (i - 1) * 3, 0],
                    }}
                    transition={{
                      duration: 3.5 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Ambient Dream Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  style={{
                    left: `${10 + (i * 11)}%`,
                    top: `${15 + (i * 10)}%`,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 10, 0],
                  }}
                  transition={{
                    duration: 6 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // 只在Demo框架內滾動到系列展示區
                const demoContainer = document.querySelector('[data-demo-container]');
                if (demoContainer) {
                  const collectionElement = demoContainer.querySelector('#collection-showcase');
                  if (collectionElement) {
                    // 計算相對於Demo容器的位置
                    const containerRect = demoContainer.getBoundingClientRect();
                    const elementRect = collectionElement.getBoundingClientRect();
                    const scrollTop = elementRect.top - containerRect.top + demoContainer.scrollTop;
                    
                    demoContainer.scrollTo({
                      top: scrollTop,
                      behavior: 'smooth'
                    });
                  }
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              {lang === 'zh' ? '探索系列作品' : 'Explore Collection'}
            </motion.button>
          </div>
        </div>

        {/* Collection Showcase */}
        <div id="collection-showcase" className="px-8 py-16 relative overflow-hidden">
          {/* Background Dream Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full"
                style={{
                  left: `${15 + (i * 15)}%`,
                  top: `${20 + (i * 12)}%`,
                  background: `radial-gradient(circle, ${['rgba(147, 51, 234, 0.1)', 'rgba(236, 72, 153, 0.1)', 'rgba(59, 130, 246, 0.1)', 'rgba(16, 185, 129, 0.1)', 'rgba(6, 182, 212, 0.1)', 'rgba(251, 146, 60, 0.1)'][i]} 0%, transparent 70%)`,
                  filter: 'blur(20px)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                {lang === 'zh' ? '2024 夢境系列' : '2024 Dreamscape Collection'}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {lang === 'zh' 
                  ? '探索未來時尚的無限可能，每件作品都是夢境與現實的完美融合'
                  : 'Explore the infinite possibilities of future fashion, where each piece is a perfect fusion of dreams and reality'
                }
              </p>
            </motion.div>

            {/* Creative Fashion Grid Layout */}
            <div className="relative min-h-[800px]">
              {fashionItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.3,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="absolute cursor-pointer group"
                  style={{
                    width: index === 0 || index === 3 ? '320px' : '280px',
                    height: index === 0 || index === 3 ? '420px' : '380px',
                    left: index === 0 ? '5%' : index === 1 ? '35%' : index === 2 ? '65%' : '20%',
                    top: index === 0 ? '10%' : index === 1 ? '5%' : index === 2 ? '15%' : '45%',
                    transform: `rotate(${index === 0 ? -3 : index === 1 ? 2 : index === 2 ? -2 : 4}deg)`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => transitionToScene('item', item)}
                >
                  {/* Fashion Card with Dream Effect */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 50%, transparent 100%)`,
                    }}
                  >
                    {/* Product Image - CSS Gradient Art */}
                    <div className="relative w-full h-[70%] overflow-hidden">
                      {/* 星雲紗裙 - 紫色星雲效果 */}
                      {item.id === 1 && (
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-900">
                          <div className="absolute inset-0 opacity-60">
                            <motion.div
                              className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full filter blur-2xl"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 1, 0.6],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <motion.div
                              className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400 rounded-full filter blur-2xl"
                              animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.8, 0.6, 0.8],
                              }}
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            />
                            <motion.div
                              className="absolute top-1/2 left-1/2 w-36 h-36 bg-cyan-400 rounded-full filter blur-2xl"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.7, 0.9, 0.7],
                              }}
                              transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              className="w-24 h-24 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full backdrop-blur-sm border border-white/20"
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* 月光外套 - 藍色月光效果 */}
                      {item.id === 2 && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-900">
                          <div className="absolute inset-0 opacity-70">
                            <motion.div
                              className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent"
                              animate={{
                                opacity: [0.3, 0.8, 0.3],
                                x: [0, 10, 0],
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <motion.div
                              className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent"
                              animate={{
                                opacity: [0.5, 0.9, 0.5],
                                x: [0, -8, 0],
                              }}
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            />
                            <motion.div
                              className="absolute top-10 left-1/2 w-48 h-48 bg-blue-400 rounded-full filter blur-3xl opacity-50"
                              animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              className="w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full backdrop-blur-sm border border-white/10"
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360],
                              }}
                              transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* 夢境連衣裙 - 粉色夢幻效果 */}
                      {item.id === 3 && (
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900">
                          <div className="absolute inset-0 opacity-60">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute rounded-full filter blur-2xl"
                                style={{
                                  width: i === 0 ? '112px' : i === 1 ? '144px' : '96px',
                                  height: i === 0 ? '112px' : i === 1 ? '144px' : '96px',
                                  background: i === 0 ? 'bg-pink-400' : i === 1 ? 'bg-rose-400' : 'bg-purple-400',
                                  top: i === 0 ? '20%' : i === 1 ? '50%' : '33%',
                                  left: i === 0 ? '80%' : i === 1 ? '20%' : '33%',
                                }}
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                  duration: 4 + i * 0.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.7
                                }}
                              />
                            ))}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              className="relative"
                              animate={{
                                rotate: [0, 45, -45, 0],
                              }}
                              transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <div className="w-28 h-28 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full backdrop-blur-sm border border-white/20" />
                              <motion.div
                                className="absolute inset-2 bg-gradient-to-tr from-purple-300/20 to-pink-300/20 rounded-full"
                                animate={{
                                  rotate: [0, -360],
                                }}
                                transition={{
                                  duration: 15,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      )}
                      
                      {/* 量子羽衣 - 青色科技效果 */}
                      {item.id === 4 && (
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900">
                          <div className="absolute inset-0 opacity-70">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute rounded-full filter blur-xl"
                                style={{
                                  width: i === 0 ? '64px' : i === 1 ? '80px' : '96px',
                                  height: i === 0 ? '64px' : i === 1 ? '80px' : '96px',
                                  background: i === 0 ? 'bg-cyan-400' : i === 1 ? 'bg-teal-400' : 'bg-blue-400',
                                  top: i === 0 ? '25%' : i === 1 ? '75%' : '50%',
                                  left: i === 0 ? '25%' : i === 1 ? '75%' : '50%',
                                }}
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                  duration: 3 + i * 0.3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.5
                                }}
                              />
                            ))}
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                                style={{
                                  left: `${20 + (i * 10)}%`,
                                  top: `${15 + (i * 10)}%`,
                                }}
                                animate={{
                                  opacity: [0, 1, 0],
                                  scale: [0, 1.5, 0],
                                }}
                                transition={{
                                  duration: 2 + (i * 0.3),
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              className="relative"
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              <div className="w-32 h-32 bg-gradient-to-br from-cyan-300/25 to-teal-300/25 rounded-full backdrop-blur-sm border border-white/15" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                  className="w-16 h-16 bg-gradient-to-tr from-blue-300/30 to-cyan-300/30 rounded-full"
                                  animate={{
                                    rotate: [0, -180, 360],
                                  }}
                                  transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Product Info - Creative Layout */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center"
                      >
                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{item.name}</h3>
                        <p className="text-lg text-purple-300 font-semibold mb-3 drop-shadow">{item.price}</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all"
                        >
                          {lang === 'zh' ? '探索詳情' : 'Explore Details'}
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Floating Particles */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${item.color} 0%, transparent 70%)`,
                          left: `${20 + (i * 20)}%`,
                          top: `${10 + (i * 15)}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          y: [0, -20, 0],
                          x: [0, (i - 1.5) * 8, 0],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Collection Footer */}
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-8"
            >
              {lang === 'zh' ? '定制你的夢境' : 'Customize Your Dream'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-12"
            >
              {lang === 'zh' 
                ? '每件夢境時尚作品都可以根據你的喜好進行个性化定制，從顏色到材質，從形態到功能'
                : 'Every Dream Fashion piece can be personalized according to your preferences, from color to material, from form to function'
              }
            </motion.p>
            
            {/* Spotlight Theater Customization Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative min-h-[600px] mb-12 flex items-center justify-center"
            >
              {/* Dark Theater Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black rounded-3xl">
                {/* Single Central Spotlight */}
                <motion.div
                  animate={{
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-8 left-1/2 transform -translate-x-1/2"
                >
                  {/* Spotlight Source */}
                  <div className="w-6 h-6 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/60">
                    <motion.div
                      className="w-full h-full bg-yellow-200 rounded-full"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  {/* Spotlight Beam - Triangle Shape */}
                  <div 
                    className="absolute top-2 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderTop: '80px solid rgba(255, 255, 255, 0.15)',
                      filter: 'blur(2px)'
                    }}
                  >
                    {/* Inner brighter beam */}
                    <div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '4px solid transparent',
                        borderRight: '4px solid transparent',
                        borderTop: '80px solid rgba(255, 255, 255, 0.25)',
                        filter: 'blur(1px)',
                        marginTop: '-80px'
                      }}
                    />
                    {/* Core bright beam */}
                    <div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '2px solid transparent',
                        borderRight: '2px solid transparent',
                        borderTop: '80px solid rgba(255, 255, 255, 0.35)',
                        marginTop: '-80px'
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Stage Floor */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800/50 to-transparent" />
              </div>

              {/* Central Performance Area */}
              <div className="relative z-10">
                {/* Main Spotlight Circle */}
                <motion.div
                  animate={{
                    opacity: [0.6, 0.9, 0.6],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-96 h-96 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)',
                    boxShadow: '0 0 100px rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {/* Three Customization Options in Spotlight */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    
                    {/* Color Customization - Top */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ 
                        scale: 1.1,
                        filter: 'brightness(1.3)'
                      }}
                      className="absolute top-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
                    >
                      <motion.div
                        animate={{
                          backgroundColor: ['#9333ea', '#ec4899', '#06b6d4', '#8b5cf6', '#9333ea'],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-20 h-20 rounded-full shadow-2xl border-4 border-white/30"
                        style={{
                          boxShadow: '0 0 60px rgba(147, 51, 234, 0.8)'
                        }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, -360],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-transparent"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full whitespace-nowrap"
                      >
                        <h4 className="text-white font-bold text-xs drop-shadow-lg">
                          {lang === 'zh' ? '顏色定制' : 'Color Customization'}
                        </h4>
                      </motion.div>
                    </motion.div>

                    {/* Size Adjustment - Bottom Left */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ 
                        scale: 1.1,
                        filter: 'brightness(1.3)'
                      }}
                      className="absolute bottom-12 left-12 cursor-pointer group"
                    >
                      <motion.div
                        animate={{
                          width: ['60px', '100px', '60px'],
                          height: ['60px', '100px', '60px'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="bg-gradient-to-br from-blue-400/60 to-cyan-400/60 rounded-2xl border-4 border-white/30 shadow-2xl"
                        style={{
                          boxShadow: '0 0 50px rgba(59, 130, 246, 0.7)'
                        }}
                      >
                        <div className="absolute inset-2 bg-gradient-to-tr from-white/30 to-transparent rounded-xl" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full whitespace-nowrap"
                      >
                        <h4 className="text-white font-bold text-xs drop-shadow-lg">
                          {lang === 'zh' ? '尺寸調整' : 'Size Adjustment'}
                        </h4>
                      </motion.div>
                    </motion.div>

                    {/* Feature Upgrade - Bottom Right */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ 
                        scale: 1.1,
                        filter: 'brightness(1.3)'
                      }}
                      className="absolute bottom-12 right-12 cursor-pointer group"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-20 h-20 bg-gradient-to-br from-green-400/60 to-emerald-400/60 rounded-3xl border-4 border-white/30 shadow-2xl"
                        style={{
                          boxShadow: '0 0 50px rgba(16, 185, 129, 0.7)'
                        }}
                      >
                        <div className="absolute inset-2 bg-gradient-to-tr from-white/30 to-transparent rounded-2xl" />
                        
                        {/* Magic Star */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-300"
                          style={{
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                          }}
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full whitespace-nowrap"
                      >
                        <h4 className="text-white font-bold text-xs drop-shadow-lg">
                          {lang === 'zh' ? '功能升級' : 'Feature Upgrade'}
                        </h4>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Minimal Ambient Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                    left: `${20 + (i * 8)}%`,
                    top: `${15 + (i * 8)}%`,
                  }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              {lang === 'zh' ? '開始定制' : 'Start Customization'}
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  if (currentScene === 'item' && selectedItem) {
    return (
      <div className="w-full h-full overflow-y-auto relative">
        {/* 流星效果 */}
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full pointer-events-none z-10"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.6)'
            }}
            animate={{
              left: [`${star.startX}%`, `${star.endX}%`],
              top: [`${star.startY}%`, `${star.endY}%`],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: "easeOut"
            }}
          >
            {/* 流星尾巴 - 對角線方向與運動相反 */}
            <motion.div
              className="absolute h-0.5 bg-gradient-to-r from-white/60 via-white/30 to-transparent"
              style={{
                [star.direction > 0 ? 'right' : 'left']: 0,
                top: '50%',
                transform: `translateY(-50%) rotate(${star.direction > 0 ? 45 : -45}deg)`,
                transformOrigin: star.direction > 0 ? 'right center' : 'left center',
                width: 40
              }}
              animate={{
                opacity: [0, 0.6, 0.6, 0],
                width: [0, 40, 40, 0]
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                ease: "easeOut"
              }}
            />
          </motion.div>
        ))}
        <div className="min-h-screen flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Product Image - CSS Gradient Art */}
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl border border-purple-500/30">
                {/* 星雲紗裙 - 紫色星雲效果 */}
                {selectedItem.id === 1 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-900">
                    <div className="absolute inset-0 opacity-60">
                      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full filter blur-2xl animate-pulse" />
                      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400 rounded-full filter blur-2xl animate-pulse delay-1000" />
                      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-cyan-400 rounded-full filter blur-2xl animate-pulse delay-2000" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-32 h-32 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full backdrop-blur-sm border border-white/20"
                      />
                    </div>
                  </div>
                )}
                
                {/* 月光外套 - 藍色月光效果 */}
                {selectedItem.id === 2 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-900">
                    <div className="absolute inset-0 opacity-70">
                      <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent" />
                      <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent" />
                      <div className="absolute top-10 left-1/2 w-48 h-48 bg-blue-400 rounded-full filter blur-3xl opacity-50" />
                      <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl opacity-30" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-40 h-40 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full backdrop-blur-sm border border-white/10"
                      />
                    </div>
                  </div>
                )}
                
                {/* 夢境連衣裙 - 粉色夢幻效果 */}
                {selectedItem.id === 3 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900">
                    <div className="absolute inset-0 opacity-60">
                      <div className="absolute top-20 right-20 w-28 h-28 bg-pink-400 rounded-full filter blur-2xl animate-pulse" />
                      <div className="absolute bottom-20 left-20 w-36 h-36 bg-rose-400 rounded-full filter blur-2xl animate-pulse delay-1500" />
                      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-purple-400 rounded-full filter blur-2xl animate-pulse delay-750" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative"
                      >
                        <div className="w-36 h-36 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full backdrop-blur-sm border border-white/20" />
                        <div className="absolute inset-2 bg-gradient-to-tr from-purple-300/20 to-pink-300/20 rounded-full transform rotate-45" />
                      </motion.div>
                    </div>
                  </div>
                )}
                
                {/* 量子羽衣 - 青色科技效果 */}
                {selectedItem.id === 4 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900">
                    <div className="absolute inset-0 opacity-70">
                      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-cyan-400 rounded-full filter blur-xl animate-pulse" />
                      <div className="absolute top-3/4 left-3/4 w-20 h-20 bg-teal-400 rounded-full filter blur-xl animate-pulse delay-500" />
                      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400 rounded-full filter blur-xl animate-pulse delay-1000" />
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                            style={{
                              left: `${20 + (i * 10)}%`,
                              top: `${15 + (i * 10)}%`,
                              animation: `pulse ${2 + (i * 0.3)}s infinite`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative"
                      >
                        <div className="w-40 h-40 bg-gradient-to-br from-cyan-300/25 to-teal-300/25 rounded-full backdrop-blur-sm border border-white/15" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-gradient-to-tr from-blue-300/30 to-cyan-300/30 rounded-full transform rotate-12" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {selectedItem.name}
                </h2>
                
                <p className="text-2xl text-purple-300 font-semibold mb-6">{selectedItem.price}</p>
                
                <p className="text-gray-300 mb-8 leading-relaxed">{selectedItem.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                    <span className="text-gray-300">
                      {lang === 'zh' ? '未來感光纖維材質' : 'Future light-sensitive fiber material'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                    <span className="text-gray-300">
                      {lang === 'zh' ? '智能溫控系統' : 'Smart temperature control system'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full" />
                    <span className="text-gray-300">
                      {lang === 'zh' ? '情緒感應技術' : 'Emotional sensing technology'}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowTryOn(true);
                      setTryOnStep('camera');
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    {lang === 'zh' ? 'AR試穿體驗' : 'AR Try On Experience'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => transitionToScene('collection')}
                    className="px-8 py-4 border-2 border-purple-400 text-white rounded-full text-lg font-semibold hover:bg-purple-400/20 transition-all"
                  >
                    {lang === 'zh' ? '返回系列' : 'Back to Collection'}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* AR Try On Experience Modal */}
        {showTryOn && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-8">
            <div className="max-w-4xl w-full bg-black/80 rounded-3xl border border-purple-500/30 overflow-hidden">
              {/* Try On Header */}
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">
                  {lang === 'zh' ? 'AR試穿體驗' : 'AR Try On Experience'}
                </h3>
                <button
                  onClick={() => setShowTryOn(false)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* Try On Content */}
              <div className="p-8">
                {tryOnStep === 'camera' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-8">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-4xl">📷</span>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        {lang === 'zh' ? '啟動攝影頭' : 'Activate Camera'}
                      </h4>
                      <p className="text-gray-300 mb-6">
                        {lang === 'zh' 
                          ? '請允許使用攝影頭以開始AR試穿體驗' 
                          : 'Please allow camera access to start AR try-on experience'
                        }
                      </p>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => setTryOnStep('scanning')}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                      >
                        {lang === 'zh' ? '允許攝影頭' : 'Allow Camera'}
                      </button>
                      <button
                        onClick={() => setShowTryOn(false)}
                        className="px-6 py-3 border border-gray-600 text-gray-400 rounded-full font-semibold hover:text-white transition-all"
                      >
                        {lang === 'zh' ? '取消' : 'Cancel'}
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {tryOnStep === 'scanning' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-8">
                      <div className="w-32 h-32 mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full animate-pulse" />
                        <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                          <span className="text-4xl">🔍</span>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        {lang === 'zh' ? '身體掃描' : 'Body Scanning'}
                      </h4>
                      <p className="text-gray-300 mb-6">
                        {lang === 'zh' 
                          ? '正在分析您的身型數據，請保持站立姿勢' 
                          : 'Analyzing your body measurements, please stand still'
                        }
                      </p>
                      
                      {/* Scanning Progress */}
                      <div className="w-full max-w-md mx-auto mb-6">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 3 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          {lang === 'zh' ? '掃描進度：65%' : 'Scanning: 65%'}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setTryOnStep('fitting')}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all"
                    >
                      {lang === 'zh' ? '下一步' : 'Next'}
                    </button>
                  </motion.div>
                )}
                
                {tryOnStep === 'fitting' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-8">
                      <div className="w-64 h-80 mx-auto mb-6 relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl border border-purple-500/30 overflow-hidden">
                        {/* AR Fitting Simulation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            {/* Body Silhouette */}
                            <div className="w-16 h-32 bg-white/10 rounded-full" />
                            
                            {/* Product Overlay */}
                            <motion.div
                              animate={{
                                opacity: [0.3, 0.8, 0.3],
                                scale: [0.9, 1.1, 0.9],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              {/* Product visualization based on selected item */}
                              {selectedItem?.id === 1 && (
                                <div className="w-20 h-36 bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-full" />
                              )}
                              {selectedItem?.id === 2 && (
                                <div className="w-24 h-32 bg-gradient-to-br from-blue-600/50 to-cyan-600/50 rounded-full" />
                              )}
                              {selectedItem?.id === 3 && (
                                <div className="w-18 h-40 bg-gradient-to-br from-pink-600/50 to-rose-600/50 rounded-full" />
                              )}
                              {selectedItem?.id === 4 && (
                                <div className="w-22 h-36 bg-gradient-to-br from-cyan-600/50 to-teal-600/50 rounded-full" />
                              )}
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* AR Overlay Effects */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                          <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500" />
                          <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000" />
                          <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1500" />
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-white mb-4">
                        {lang === 'zh' ? 'AR試穿中' : 'AR Fitting in Progress'}
                      </h4>
                      <p className="text-gray-300 mb-6">
                        {lang === 'zh' 
                          ? `${selectedItem?.name || ''} 正在適配您的身型` 
                          : `${selectedItem?.name || ''} is adapting to your body shape`
                        }
                      </p>
                      
                      {/* Fitting Status */}
                      <div className="flex justify-center space-x-4 mb-6">
                        <div className="text-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mb-1" />
                          <p className="text-xs text-gray-400">
                            {lang === 'zh' ? '尺寸匹配' : 'Size Match'}
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse mb-1" />
                          <p className="text-xs text-gray-400">
                            {lang === 'zh' ? '色彩渲染' : 'Color Rendering'}
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse mb-1" />
                          <p className="text-xs text-gray-400">
                            {lang === 'zh' ? '材質模擬' : 'Material Simulation'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setTryOnStep('result')}
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
                    >
                      {lang === 'zh' ? '查看效果' : 'View Result'}
                    </button>
                  </motion.div>
                )}
                
                {tryOnStep === 'result' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-8">
                      <div className="w-32 h-32 mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full animate-pulse" />
                        <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                          <span className="text-4xl">✅</span>
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        {lang === 'zh' ? '試穿完成！' : 'Fitting Complete!'}
                      </h4>
                      <p className="text-gray-300 mb-6">
                        {lang === 'zh' 
                          ? `${selectedItem?.name || ''} 完美適配您的身型` 
                          : `${selectedItem?.name || ''} fits your body shape perfectly`
                        }
                      </p>
                      
                      {/* Fitting Results */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                        <h5 className="text-lg font-semibold text-white mb-4">
                          {lang === 'zh' ? '試穿報告' : 'Fitting Report'}
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                          <div>
                            <p className="text-sm text-gray-400 mb-1">
                              {lang === 'zh' ? '合身度' : 'Fit Score'}
                            </p>
                            <p className="text-xl font-bold text-green-400">98%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">
                              {lang === 'zh' ? '推薦尺碼' : 'Recommended Size'}
                            </p>
                            <p className="text-xl font-bold text-blue-400">M</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">
                              {lang === 'zh' ? '風格匹配' : 'Style Match'}
                            </p>
                            <p className="text-xl font-bold text-purple-400">95%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => {
                          setShowTryOn(false);
                          setTryOnStep('camera');
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
                      >
                        {lang === 'zh' ? '加入購物車' : 'Add to Cart'}
                      </button>
                      <button
                        onClick={() => {
                          setShowTryOn(false);
                          setTryOnStep('camera');
                        }}
                        className="px-6 py-3 border border-gray-600 text-gray-400 rounded-full font-semibold hover:text-white transition-all"
                      >
                        {lang === 'zh' ? '重新試穿' : 'Try Again'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default CreativeShowcase;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';
import DemoGallery from './DemoGallery.tsx';

interface RetailShowcaseProps {
  lang: 'en' | 'zh';
}

const RetailShowcase: React.FC<RetailShowcaseProps> = ({ lang }) => {
  // Demo gallery state - 預設顯示 Demo，支援未來多個 Demo 切換
  const [showDemoGallery, setShowDemoGallery] = useState(false);
  const [currentDemoId, setCurrentDemoId] = useState('retail-default');
  const [currentDemoName, setCurrentDemoName] = useState(lang === 'zh' ? '智能零售' : 'Smart Retail');
  
  const [activeSection, setActiveSection] = useState('dashboard');
  const [cartItems, setCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const t = UI_TEXT[lang];

  // Handle demo selection
  const handleDemoSelect = (demoId: string) => {
    setCurrentDemoId(demoId);
    setShowDemoGallery(false);
    // Demo name mapping for future multi-demo support
    const demoNames: { [key: string]: string } = {
      'retail-default': lang === 'zh' ? '智能零售' : 'Smart Retail',
      'retail-fashion': lang === 'zh' ? '時尚精品' : 'Fashion Boutique',
      'retail-electronics': lang === 'zh' ? '3C電子' : 'Electronics Store'
    };
    setCurrentDemoName(demoNames[demoId] || demoNames['retail-default']);
  };

  const uniqueFeatures = [
    {
      title: lang === 'zh' ? '品牌個性化' : 'Brand Personalization',
      description: lang === 'zh' ? '獨特品牌形象，脫離平台同質化' : 'Unique brand identity, break away from platform homogeneity',
      icon: '🎨'
    },
    {
      title: lang === 'zh' ? '數據主導' : 'Data-Driven',
      description: lang === 'zh' ? '客戶數據完全掌控，精準營銷' : 'Complete control of customer data, precise marketing',
      icon: '📊'
    },
    {
      title: lang === 'zh' ? '會員系統' : 'Membership System',
      description: lang === 'zh' ? '建立忠誠度，提高客單價' : 'Build loyalty, increase customer value',
      icon: '👑'
    },
    {
      title: lang === 'zh' ? '多元收益' : 'Multiple Revenue Streams',
      description: lang === 'zh' ? '不只銷售，還有廣告、合作等' : 'Not just sales, but also advertising, partnerships',
      icon: '💰'
    }
  ];

  const competitiveAdvantages = [
    {
      title: lang === 'zh' ? '平台費用' : 'Platform Fees',
      platform: lang === 'zh' ? '大平台' : 'Large Platforms',
      platformCost: lang === 'zh' ? '15-30% 佣金' : '15-30% commission',
      ownCost: lang === 'zh' ? '0% 佣金' : '0% commission',
      savings: lang === 'zh' ? '節省15-30%' : 'Save 15-30%'
    },
    {
      title: lang === 'zh' ? '客戶數據' : 'Customer Data',
      platform: lang === 'zh' ? '大平台' : 'Large Platforms',
      platformCost: lang === 'zh' ? '平台擁有數據' : 'Platform owns data',
      ownCost: lang === 'zh' ? '完全擁有數據' : 'Complete data ownership',
      savings: lang === 'zh' ? '無價資產' : 'Priceless asset'
    },
    {
      title: lang === 'zh' ? '品牌控制' : 'Brand Control',
      platform: lang === 'zh' ? '大平台' : 'Large Platforms',
      platformCost: lang === 'zh' ? '受平台限制' : 'Limited by platform',
      ownCost: lang === 'zh' ? '完全控制' : 'Complete control',
      savings: lang === 'zh' ? '品牌自由' : 'Brand freedom'
    }
  ];

  const products = [
    {
      id: 1,
      name: lang === 'zh' ? '招牌拉麵' : 'Signature Ramen',
      price: 38,
      originalPrice: 48,
      category: 'food',
      rating: 4.8,
      reviews: 326,
      badge: lang === 'zh' ? '熱賣' : 'Bestseller',
      description: lang === 'zh' ? '秘製湯底，手工拉麵' : 'Secret broth, handmade noodles'
    },
    {
      id: 2,
      name: lang === 'zh' ? '精選咖啡豆' : 'Premium Coffee Beans',
      price: 68,
      originalPrice: 88,
      category: 'beverage',
      rating: 4.9,
      reviews: 189,
      badge: lang === 'zh' ? '新品' : 'New',
      description: lang === 'zh' ? '進口阿拉比卡豆' : 'Imported Arabica beans'
    },
    {
      id: 3,
      name: lang === 'zh' ? '手工甜點' : 'Handmade Desserts',
      price: 18,
      originalPrice: 28,
      category: 'dessert',
      rating: 4.7,
      reviews: 278,
      description: lang === 'zh' ? '每日新鮮製作' : 'Freshly made daily'
    },
    {
      id: 4,
      name: lang === 'zh' ? '健康沙拉' : 'Healthy Salad',
      price: 28,
      originalPrice: null,
      category: 'food',
      rating: 4.6,
      reviews: 145,
      description: lang === 'zh' ? '有機蔬菜，低卡路里' : 'Organic vegetables, low calorie'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 text-gray-800 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-300 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-300 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-300 rounded-full filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            {lang === 'zh' ? '零售餐飲電商' : 'Retail & F&B E-commerce'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'zh' 
              ? '超越大平台的限制，打造獨一無二的購物體驗。不僅節省佣金費用，更能建立品牌忠誠度，創造持續收益。'
              : 'Go beyond platform limitations, create unique shopping experiences. Not only save commission fees, but also build brand loyalty and create sustainable revenue.'
            }
          </p>
        </motion.div>

        {/* Unique Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {uniqueFeatures.map((feature, index) => (
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

        {/* Competitive Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {lang === 'zh' ? '為什麼選擇自建網站？' : 'Why Choose Your Own Website?'}
          </h3>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">{lang === 'zh' ? '比較項目' : 'Comparison'}</th>
                    <th className="px-6 py-4 text-center">{lang === 'zh' ? '大平台' : 'Large Platforms'}</th>
                    <th className="px-6 py-4 text-center">{lang === 'zh' ? '自建網站' : 'Own Website'}</th>
                    <th className="px-6 py-4 text-center">{lang === 'zh' ? '優勢' : 'Advantage'}</th>
                  </tr>
                </thead>
                <tbody>
                  {competitiveAdvantages.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.title}</td>
                      <td className="px-6 py-4 text-center text-red-600">{item.platformCost}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">{item.ownCost}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {item.savings}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
                industryId="retail"
                industryName={lang === 'zh' ? '智能零售' : 'Smart Retail'}
                lang={lang}
                onDemoSelect={handleDemoSelect}
                currentDemoId={currentDemoId}
                isOpen={showDemoGallery}
                onClose={() => setShowDemoGallery(false)}
              />
            )}
          </AnimatePresence>

          <div className="relative bg-white rounded-2xl overflow-hidden border border-orange-200 shadow-2xl">
            {/* Demo Header Bar */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 px-4 py-3 flex items-center justify-between border-b border-orange-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 text-sm font-mono">my-store.demo</span>
                <span className="text-xs text-orange-400">|</span>
                <span className="text-xs text-orange-600 font-medium">{currentDemoName}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* 選擇案例按鈕 */}
                <button
                  onClick={() => setShowDemoGallery(true)}
                  className="px-3 py-1.5 bg-white text-orange-600 text-xs rounded-lg border border-orange-300 hover:bg-orange-50 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {lang === 'zh' ? '選擇案例' : 'Select Demo'}
                </button>
              </div>
            </div>

            {/* Demo Content - 預設直接顯示 */}
            <div className="relative" style={{ height: '800px' }}>
              <div className="w-full h-full overflow-y-auto">
                <RetailDemo
                  lang={lang}
                  onDemoComplete={() => {}}
                  products={products}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {lang === 'zh' ? '投資回報計算' : 'ROI Calculator'}
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {lang === 'zh' ? '月銷售額' : 'Monthly Sales'}
                </h4>
                <p className="text-3xl font-bold text-orange-600">
                  {lang === 'zh' ? 'HK$25,000' : '$3,200'}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {lang === 'zh' ? '平均月銷售' : 'Average monthly sales'}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {lang === 'zh' ? '平台費用節省' : 'Platform Fee Savings'}
                </h4>
                <p className="text-3xl font-bold text-green-600">
                  {lang === 'zh' ? 'HK$5,000' : '$640'}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {lang === 'zh' ? '20% 佣金節省' : '20% commission savings'}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {lang === 'zh' ? '年回報' : 'Annual Return'}
                </h4>
                <p className="text-3xl font-bold text-blue-600">
                  {lang === 'zh' ? 'HK$60,000' : '$7,680'}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {lang === 'zh' ? '淨額外收益' : 'Net additional revenue'}
                </p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {lang === 'zh' ? '電商技術棧' : 'E-commerce Tech Stack'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'Node.js', 'MongoDB', 'Stripe', 'Firebase', 'Cloudinary'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-full text-gray-700 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-sm leading-relaxed">
              {lang === 'zh' 
                ? '整合 Stripe 支付系統，支援多種支付方式。使用 Firebase 實時數據同步，確保訂單準確。Cloudinary 處理商品圖片，提供CDN加速。'
                : 'Integrated Stripe payment system supporting multiple payment methods. Firebase for real-time data sync ensuring order accuracy. Cloudinary for product image processing with CDN acceleration.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Retail Demo Component
interface RetailDemoProps {
  lang: 'en' | 'zh';
  onDemoComplete: () => void;
  products: any[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  cartItems: number;
  setCartItems: (count: number) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const RetailDemo: React.FC<RetailDemoProps> = ({
  lang,
  onDemoComplete,
  products,
  activeSection,
  setActiveSection,
  cartItems,
  setCartItems,
  selectedCategory,
  setSelectedCategory
}) => {
  const t = UI_TEXT[lang];
  
  // Shopping cart state
  const [cart, setCart] = useState<{product: any, quantity: number}[]>([]);
  
  // User profile state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Product detail state
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  // Sample reviews data
  const reviewsData: {[key: number]: any[]} = {
    1: [
      { user: '陳先生', rating: 5, date: '2024-01-10', comment: lang === 'zh' ? '湯底非常濃郁，手工拉麵口感Q彈，絕對會再回購！' : 'Rich broth, handmade noodles are chewy, will definitely buy again!' },
      { user: '林小姐', rating: 5, date: '2024-01-08', comment: lang === 'zh' ? '秘製湯底真的不一樣，很香很好喝，推薦！' : 'The secret broth is really different, fragrant and delicious, recommended!' },
      { user: '黃先生', rating: 4, date: '2024-01-05', comment: lang === 'zh' ? '味道不錯，份量也很足，就是價格稍貴了一點。' : 'Good taste, generous portion, but price is a bit high.' }
    ],
    2: [
      { user: '李小姐', rating: 5, date: '2024-01-12', comment: lang === 'zh' ? '咖啡豆很香，烘焙得剛剛好，每天早上必喝！' : 'Coffee beans are fragrant, perfectly roasted, must drink every morning!' },
      { user: '王先生', rating: 5, date: '2024-01-09', comment: lang === 'zh' ? '阿拉比卡豆品質很好，酸度適中，非常喜歡。' : 'Great quality Arabica beans, moderate acidity, really like it.' }
    ],
    3: [
      { user: '張小姐', rating: 5, date: '2024-01-11', comment: lang === 'zh' ? '甜點每天新鮮製作，吃得出來用料很好，不會太甜。' : 'Freshly made daily, can tell good ingredients used, not too sweet.' },
      { user: '陳先生', rating: 4, date: '2024-01-07', comment: lang === 'zh' ? '蛋糕口感綿密，水果也很新鮔，下午茶首選。' : 'Cake texture is fluffy, fruits are fresh, perfect for afternoon tea.' }
    ],
    4: [
      { user: '王小姐', rating: 5, date: '2024-01-13', comment: lang === 'zh' ? '有機蔬菜很新鮮，沙拉醬也很好吃，健康又美味！' : 'Organic vegetables are fresh, dressing is delicious too, healthy and tasty!' },
      { user: '李先生', rating: 4, date: '2024-01-06', comment: lang === 'zh' ? '低卡路里很適合減肥期間吃，飽足感也夠。' : 'Low calorie perfect for dieting, filling enough.' }
    ]
  };

  const categories = [
    { id: 'all', name: lang === 'zh' ? '全部商品' : 'All Products' },
    { id: 'food', name: lang === 'zh' ? '餐飲' : 'Food & Beverage' },
    { id: 'beverage', name: lang === 'zh' ? '飲品' : 'Beverages' },
    { id: 'dessert', name: lang === 'zh' ? '甜點' : 'Desserts' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  
  // Add to cart function
  const addToCart = (product: any) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    setCartItems(cartItems + 1);
  };
  
  // Remove from cart function
  const removeFromCart = (productId: number) => {
    const item = cart.find(c => c.product.id === productId);
    if (item) {
      setCartItems(cartItems - item.quantity);
      setCart(cart.filter(c => c.product.id !== productId));
    }
  };
  
  // Calculate total
  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">🛍️</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {lang === 'zh' ? '精選美食' : 'Premium Food Store'}
                </h1>
                <p className="text-sm text-gray-600">
                  {lang === 'zh' ? '優質美食，盡在這裡' : 'Quality food starts here'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {/* Shopping Cart Button */}
              <button 
                onClick={() => setActiveSection('cart')}
                className={`relative p-2 transition-colors ${activeSection === 'cart' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 text-white rounded-full text-xs flex items-center justify-center animate-bounce">
                    {cartItems}
                  </span>
                )}
              </button>
              
              {/* User Profile Button */}
              <button 
                onClick={() => setActiveSection('profile')}
                className={`p-2 transition-colors ${activeSection === 'profile' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto max-w-6xl mx-auto px-6 py-8 w-full">
        {activeSection === 'dashboard' && (
          <div>
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-8 mb-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                {lang === 'zh' ? '今日特惠' : 'Today\'s Special'}
              </h2>
              <p className="text-xl mb-6">
                {lang === 'zh' ? '全場8折，滿額免運' : '20% off everything, free shipping on orders over $500'}
              </p>
              <button className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {lang === 'zh' ? '立即購買' : 'Shop Now'}
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center space-x-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedProduct(product);
                    setActiveSection('product-detail');
                  }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02]"
                >
                  {product.badge && (
                    <div className="bg-orange-600 text-white text-xs px-2 py-1 absolute top-2 left-2 rounded-full z-10">
                      {product.badge}
                    </div>
                  )}
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                    <div className="text-5xl">
                      {product.category === 'food' && '🍜'}
                      {product.category === 'beverage' && '☕'}
                      {product.category === 'dessert' && '🍰'}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-xl font-bold text-orange-600">HK${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">HK${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="flex-1 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors active:scale-95 transform"
                      >
                        {lang === 'zh' ? '加入購物車' : 'Add to Cart'}
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                          setActiveSection('product-detail');
                        }}
                        className="px-3 py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                      >
                        {lang === 'zh' ? '詳情' : 'Details'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'analytics' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {lang === 'zh' ? '銷售分析' : 'Sales Analytics'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: lang === 'zh' ? '今日銷售' : 'Today Sales', value: 'HK$3,200', change: '+12%' },
                { label: lang === 'zh' ? '訂單數量' : 'Orders', value: '156', change: '+8%' },
                { label: lang === 'zh' ? '客單價' : 'Avg Order', value: 'HK$85', change: '+5%' },
                { label: lang === 'zh' ? '轉換率' : 'Conversion', value: '3.2%', change: '+15%' }
              ].map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'customers' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {lang === 'zh' ? '客戶管理' : 'Customer Management'}
            </h3>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      {lang === 'zh' ? '客戶' : 'Customer'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      {lang === 'zh' ? '等級' : 'Level'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      {lang === 'zh' ? '消費額' : 'Spending'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      {lang === 'zh' ? '最後購買' : 'Last Purchase'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { name: '陳先生', level: 'VIP', spending: 'HK$2,150', last: '2小時前' },
                    { name: '林小姐', level: '金卡', spending: 'HK$1,320', last: '1天前' },
                    { name: '黃先生', level: '銀卡', spending: 'HK$540', last: '3天前' }
                  ].map((customer, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {customer.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          customer.level === 'VIP' ? 'bg-yellow-100 text-yellow-800' :
                          customer.level === '金卡' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {customer.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.spending}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.last}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSection === 'cart' && (
          <div className="max-w-4xl mx-auto h-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full max-h-[calc(100vh-200px)]">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
                <h3 className="text-2xl font-bold text-gray-900">
                  🛒 {lang === 'zh' ? '購物車' : 'Shopping Cart'} 
                  {cartItems > 0 && <span className="text-orange-600 ml-2">({cartItems})</span>}
                </h3>
                <button 
                  onClick={() => setActiveSection('dashboard')}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ← {lang === 'zh' ? '繼續購物' : 'Continue Shopping'}
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-lg mb-4">{lang === 'zh' ? '購物車是空的' : 'Your cart is empty'}</p>
                    <button 
                      onClick={() => setActiveSection('dashboard')}
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      {lang === 'zh' ? '去逛逛' : 'Start Shopping'}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl bg-white p-3 rounded-lg">
                            {item.product.category === 'food' && '🍜'}
                            {item.product.category === 'beverage' && '☕'}
                            {item.product.category === 'dessert' && '🍰'}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-lg">{item.product.name}</p>
                            <p className="text-gray-500">HK${item.product.price} x {item.quantity}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-xl font-bold text-orange-600">HK${item.product.price * item.quantity}</span>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">{lang === 'zh' ? '總計' : 'Total'}</span>
                    <span className="text-2xl font-bold text-orange-600">HK${cartTotal}</span>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setActiveSection('dashboard')}
                      className="flex-1 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm"
                    >
                      {lang === 'zh' ? '繼續購物' : 'Continue Shopping'}
                    </button>
                    <button className="flex-1 py-2.5 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm">
                      {lang === 'zh' ? '前往結賬' : 'Proceed to Checkout'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === 'profile' && (
          <div className="max-w-2xl mx-auto h-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full max-h-[calc(100vh-200px)]">
              {!isLoggedIn ? (
                <div className="p-12 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{lang === 'zh' ? '會員登入' : 'Member Login'}</h3>
                  <p className="text-gray-600 mb-8">{lang === 'zh' ? '請登入以查看個人資訊和訂單記錄' : 'Please login to view your profile and order history'}</p>
                  <div className="space-y-4 max-w-sm mx-auto">
                    <input 
                      type="email" 
                      placeholder={lang === 'zh' ? '電子郵件' : 'Email'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input 
                      type="password" 
                      placeholder={lang === 'zh' ? '密碼' : 'Password'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button 
                      onClick={() => setIsLoggedIn(true)}
                      className="w-full py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      {lang === 'zh' ? '登入' : 'Login'}
                    </button>
                  </div>
                  <button 
                    onClick={() => setActiveSection('dashboard')}
                    className="mt-6 text-gray-500 hover:text-gray-700"
                  >
                    ← {lang === 'zh' ? '返回商店' : 'Back to Store'}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white flex-shrink-0">
                    <div className="flex items-center justify-between mb-4">
                      <button 
                        onClick={() => setActiveSection('dashboard')}
                        className="text-white/80 hover:text-white"
                      >
                        ← {lang === 'zh' ? '返回' : 'Back'}
                      </button>
                      <button 
                        onClick={() => setIsLoggedIn(false)}
                        className="text-white/80 hover:text-white text-sm"
                      >
                        {lang === 'zh' ? '登出' : 'Logout'}
                      </button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                        👨‍💼
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{lang === 'zh' ? '陳先生' : 'Mr. Chan'}</h3>
                        <p className="text-white/80 text-sm">{lang === 'zh' ? 'VIP 會員' : 'VIP Member'} ⭐</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">{lang === 'zh' ? '會員統計' : 'Member Statistics'}</h4>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <p className="text-2xl font-bold text-orange-600">HK$12,580</p>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '累積消費' : 'Total Spent'}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <p className="text-2xl font-bold text-gray-900">24</p>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '訂單數量' : 'Orders'}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <p className="text-2xl font-bold text-gray-900">1,250</p>
                        <p className="text-sm text-gray-600">{lang === 'zh' ? '積分' : 'Points'}</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">{lang === 'zh' ? '最近訂單' : 'Recent Orders'}</h4>
                    <div className="space-y-3">
                      {[
                        { id: '#2024001', date: '2024-01-15', total: 'HK$156', status: lang === 'zh' ? '已完成' : 'Completed' },
                        { id: '#2024002', date: '2024-01-10', total: 'HK$234', status: lang === 'zh' ? '配送中' : 'Delivering' },
                        { id: '#2024003', date: '2024-01-05', total: 'HK$89', status: lang === 'zh' ? '已完成' : 'Completed' }
                      ].map((order, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-500">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-orange-600">{order.total}</p>
                            <p className="text-sm text-green-600">{order.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === 'product-detail' && selectedProduct && (
          <div className="max-w-4xl mx-auto h-full flex flex-col">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full max-h-[calc(100vh-200px)]">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <button 
                  onClick={() => setActiveSection('dashboard')}
                  className="flex items-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {lang === 'zh' ? '返回商店' : 'Back to Store'}
                </button>
                {selectedProduct.badge && (
                  <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Product Image */}
                  <div className="md:w-1/2">
                    <div className="h-80 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
                      <div className="text-8xl">
                        {selectedProduct.category === 'food' && '🍜'}
                        {selectedProduct.category === 'beverage' && '☕'}
                        {selectedProduct.category === 'dessert' && '🍰'}
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 text-xl">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{selectedProduct.rating} ({selectedProduct.reviews} {lang === 'zh' ? '則評價' : 'reviews'})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-orange-600">HK${selectedProduct.price}</span>
                      {selectedProduct.originalPrice && (
                        <span className="text-xl text-gray-400 line-through ml-3">HK${selectedProduct.originalPrice}</span>
                      )}
                      {selectedProduct.originalPrice && (
                        <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                          {Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-lg">{selectedProduct.description}</p>

                    {/* Extended Description */}
                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{lang === 'zh' ? '產品特色' : 'Product Features'}</h4>
                      <ul className="space-y-2 text-gray-600">
                        {selectedProduct.category === 'food' && (
                          <>
                            <li>✓ {lang === 'zh' ? '秘製湯底，獨特風味' : 'Secret broth, unique flavor'}</li>
                            <li>✓ {lang === 'zh' ? '手工拉麵，Q彈有勁' : 'Handmade noodles, chewy texture'}</li>
                            <li>✓ {lang === 'zh' ? '新鮮食材，每日配送' : 'Fresh ingredients, daily delivery'}</li>
                          </>
                        )}
                        {selectedProduct.category === 'beverage' && (
                          <>
                            <li>✓ {lang === 'zh' ? '進口阿拉比卡咖啡豆' : 'Imported Arabica coffee beans'}</li>
                            <li>✓ {lang === 'zh' ? '專業烘焙，香醇濃郁' : 'Professional roasting, rich aroma'}</li>
                            <li>✓ {lang === 'zh' ? '公平貿易，永續經營' : 'Fair trade, sustainable sourcing'}</li>
                          </>
                        )}
                        {selectedProduct.category === 'dessert' && (
                          <>
                            <li>✓ {lang === 'zh' ? '每日新鮮手工製作' : 'Freshly handmade daily'}</li>
                            <li>✓ {lang === 'zh' ? '嚴選優質原料' : 'Carefully selected quality ingredients'}</li>
                            <li>✓ {lang === 'zh' ? '不添加人工色素' : 'No artificial colors'}</li>
                          </>
                        )}
                      </ul>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                      onClick={() => addToCart(selectedProduct)}
                      className="w-full py-4 bg-orange-600 text-white text-lg font-semibold rounded-xl hover:bg-orange-700 transition-colors active:scale-95 transform flex items-center justify-center space-x-2"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>{lang === 'zh' ? '加入購物車' : 'Add to Cart'}</span>
                    </button>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    📝 {lang === 'zh' ? '顧客評價' : 'Customer Reviews'} ({reviewsData[selectedProduct.id]?.length || 0})
                  </h3>
                  
                  {reviewsData[selectedProduct.id] ? (
                    <div className="space-y-4">
                      {reviewsData[selectedProduct.id].map((review, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-lg">
                                👤
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{review.user}</p>
                                <p className="text-sm text-gray-500">{review.date}</p>
                              </div>
                            </div>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>{lang === 'zh' ? '暫無評價' : 'No reviews yet'}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="max-w-6xl mx-auto flex justify-around">
          {[
            { id: 'dashboard', icon: '🏠', label: lang === 'zh' ? '商店' : 'Store' },
            { id: 'analytics', icon: '📊', label: lang === 'zh' ? '分析' : 'Analytics' },
            { id: 'customers', icon: '👥', label: lang === 'zh' ? '客戶' : 'Customers' },
            { id: 'cart', icon: '🛒', label: lang === 'zh' ? '購物車' : 'Cart', badge: cartItems },
            { id: 'profile', icon: '👤', label: lang === 'zh' ? '我的' : 'Profile' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors relative ${
                activeSection === item.id ? 'text-orange-600' : 'text-gray-600'
              }`}
            >
              <span className="text-xl relative">
                {item.icon}
                {item.badge > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 text-white rounded-full text-[10px] flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </span>
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetailShowcase;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface RetailShowcaseProps {
  lang: 'en' | 'zh';
}

const RetailShowcase: React.FC<RetailShowcaseProps> = ({ lang }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [cartItems, setCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const t = UI_TEXT[lang];

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
      price: 88,
      originalPrice: 108,
      category: 'food',
      rating: 4.8,
      reviews: 326,
      badge: lang === 'zh' ? '熱賣' : 'Bestseller',
      description: lang === 'zh' ? '秘製湯底，手工拉麵' : 'Secret broth, handmade noodles'
    },
    {
      id: 2,
      name: lang === 'zh' ? '精選咖啡豆' : 'Premium Coffee Beans',
      price: 168,
      originalPrice: 198,
      category: 'beverage',
      rating: 4.9,
      reviews: 189,
      badge: lang === 'zh' ? '新品' : 'New',
      description: lang === 'zh' ? '進口阿拉比卡豆' : 'Imported Arabica beans'
    },
    {
      id: 3,
      name: lang === 'zh' ? '手工甜點' : 'Handmade Desserts',
      price: 48,
      originalPrice: 68,
      category: 'dessert',
      rating: 4.7,
      reviews: 278,
      description: lang === 'zh' ? '每日新鮮製作' : 'Freshly made daily'
    },
    {
      id: 4,
      name: lang === 'zh' ? '健康沙拉' : 'Healthy Salad',
      price: 68,
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
          <div className="relative bg-white rounded-2xl overflow-hidden border border-orange-200 shadow-2xl">
            <div className="bg-gradient-to-r from-orange-100 to-red-100 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-orange-600 text-sm font-mono">my-store.demo</span>
            </div>
            
            {!showDemo ? (
              <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce">🛍️</div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    {lang === 'zh' ? '智能零售系統' : 'Smart Retail System'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {lang === 'zh' ? '獨特體驗，更多收益' : 'Unique Experience, More Revenue'}
                  </p>
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105"
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
                  <RetailDemo 
                    lang={lang} 
                    onDemoComplete={() => setShowDemo(false)} 
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
            )}
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
                  {lang === 'zh' ? 'NT$100,000' : '$3,200'}
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
                  {lang === 'zh' ? 'NT$20,000' : '$640'}
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
                  {lang === 'zh' ? 'NT$240,000' : '$7,680'}
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

  const categories = [
    { id: 'all', name: lang === 'zh' ? '全部商品' : 'All Products' },
    { id: 'food', name: lang === 'zh' ? '餐飲' : 'Food & Beverage' },
    { id: 'beverage', name: lang === 'zh' ? '飲品' : 'Beverages' },
    { id: 'dessert', name: lang === 'zh' ? '甜點' : 'Desserts' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">🛍️</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {lang === 'zh' ? '精選商店' : 'Premium Store'}
                </h1>
                <p className="text-sm text-gray-600">
                  {lang === 'zh' ? '品質生活，從這裡開始' : 'Quality life starts here'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="relative p-2 text-gray-600 hover:text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 text-white rounded-full text-xs flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
              <button className="p-2 text-gray-600 hover:text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
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
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
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
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
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
                        <span className="text-xl font-bold text-orange-600">NT${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">NT${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={() => setCartItems(cartItems + 1)}
                      className="w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      {lang === 'zh' ? '加入購物車' : 'Add to Cart'}
                    </button>
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
                { label: lang === 'zh' ? '今日銷售' : 'Today Sales', value: 'NT$12,580', change: '+12%' },
                { label: lang === 'zh' ? '訂單數量' : 'Orders', value: '156', change: '+8%' },
                { label: lang === 'zh' ? '客單價' : 'Avg Order', value: 'NT$81', change: '+5%' },
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
                    { name: '張先生', level: 'VIP', spending: 'NT$8,520', last: '2小時前' },
                    { name: '李小姐', level: '金卡', spending: 'NT$5,280', last: '1天前' },
                    { name: '王先生', level: '銀卡', spending: 'NT$2,150', last: '3天前' }
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
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="max-w-6xl mx-auto flex justify-around">
          {[
            { id: 'dashboard', icon: '🏠', label: lang === 'zh' ? '商店' : 'Store' },
            { id: 'analytics', icon: '📊', label: lang === 'zh' ? '分析' : 'Analytics' },
            { id: 'customers', icon: '👥', label: lang === 'zh' ? '客戶' : 'Customers' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                activeSection === item.id ? 'text-orange-600' : 'text-gray-600'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetailShowcase;


import { Option } from './types';

export const COLORS = {
  PRIMARY_BLUE: '#2563eb',    // 專業藍色
  ACCENT_TEAL: '#0891b2',     // 科技青色
  SUCCESS_GREEN: '#059669',   // 成功綠色
  NEUTRAL_GRAY: '#6b7280',    // 中性灰色
  DEEP_BLACK: '#000000',      // 深色背景
  WHITE: '#ffffff',           // 純白
};

export const getArchitectureOptions = (lang: 'en' | 'zh'): Option[] => [
  { 
    id: 'business-website', 
    label: lang === 'zh' ? '企業官網' : 'Business Website', 
    description: lang === 'zh' ? '專業的企業形象展示與資訊平台。' : 'Professional corporate image and information platform.' 
  },
  { 
    id: 'ecommerce', 
    label: lang === 'zh' ? '電商平台' : 'E-Commerce Platform', 
    description: lang === 'zh' ? '完整的線上購物與支付解決方案。' : 'Complete online shopping and payment solutions.' 
  },
  { 
    id: 'saas', 
    label: lang === 'zh' ? 'SaaS 產品' : 'SaaS Application', 
    description: lang === 'zh' ? '雲端軟體服務與訂閱制平台。' : 'Cloud software services and subscription platform.' 
  },
  { 
    id: 'portfolio', 
    label: lang === 'zh' ? '個人作品集' : 'Portfolio', 
    description: lang === 'zh' ? '個人品牌與作品展示平台。' : 'Personal brand and portfolio showcase.' 
  },
  { 
    id: 'web-app', 
    label: lang === 'zh' ? 'Web 應用程式' : 'Web Application', 
    description: lang === 'zh' ? '功能豐富的互動式網頁應用。' : 'Feature-rich interactive web applications.' 
  }
];

export const getThemeOptions = (lang: 'en' | 'zh'): Option[] => [
  { id: 'Neon', label: lang === 'zh' ? '高對比霓虹' : 'High Contrast Neon', description: '' },
  { id: 'Chrome', label: lang === 'zh' ? '極簡鍍鉻' : 'Sleek Chrome', description: '' },
  { id: 'Shadow', label: lang === 'zh' ? '虛空暗影' : 'Void Shadow', description: '' }
];

export const getStyleOptions = (lang: 'en' | 'zh'): Option[] => [
  { id: 'minimalist', label: lang === 'zh' ? '極簡主義 (Minimalist)' : 'Minimalist', description: lang === 'zh' ? '乾淨俐落，專注核心內容。' : 'Clean, focused, essential.' },
  { id: 'cyber', label: lang === 'zh' ? '賽博工業 (Cyber-Industrial)' : 'Cyber-Industrial', description: lang === 'zh' ? '充滿未來感與技術細節。' : 'Futuristic and detailed.' },
  { id: 'brutalist', label: lang === 'zh' ? '野獸派 (Brutalist)' : 'Brutalist', description: lang === 'zh' ? '粗獷、大膽且極具衝擊力。' : 'Raw, bold, and high-impact.' },
  { id: 'luxury', label: lang === 'zh' ? '奢華優雅 (Luxury)' : 'Luxury & Elegant', description: lang === 'zh' ? '精緻的細節與高級感。' : 'Refined details and high-end feel.' }
];

export const getAugmentationPool = (lang: 'en' | 'zh'): Record<string, Option[]> => ({
  'business-website': [
    { id: 'responsive', label: lang === 'zh' ? '響應式設計' : 'Responsive Design', description: lang === 'zh' ? '適配所有設備的專業體驗。' : 'Professional experience across all devices.' },
    { id: 'seo', label: lang === 'zh' ? 'SEO 優化' : 'SEO Optimization', description: lang === 'zh' ? '搜尋引擎最佳化與排名提升。' : 'Search engine optimization and ranking improvement.' },
    { id: 'cms', label: lang === 'zh' ? '內容管理系統' : 'Content Management System', description: lang === 'zh' ? '易於更新的內容管理平台。' : 'Easy-to-update content management platform.' },
    { id: 'contact-form', label: lang === 'zh' ? '聯絡表單' : 'Contact Forms', description: lang === 'zh' ? '客戶聯絡與資訊收集。' : 'Customer contact and information collection.' }
  ],
  ecommerce: [
    { id: 'payments', label: lang === 'zh' ? '支付系統整合' : 'Payment Integration', description: lang === 'zh' ? '信用卡、電子錢包等支付方式。' : 'Credit cards, e-wallets and payment methods.' },
    { id: 'inventory', label: lang === 'zh' ? '庫存管理' : 'Inventory Management', description: lang === 'zh' ? '實時庫存追蹤與管理。' : 'Real-time stock tracking and management.' },
    { id: 'analytics', label: lang === 'zh' ? '數據分析' : 'Analytics Dashboard', description: lang === 'zh' ? '銷售數據與用戶行為分析。' : 'Sales data and user behavior analysis.' }
  ],
  saas: [
    { id: 'auth', label: lang === 'zh' ? '用戶認證系統' : 'User Authentication', description: lang === 'zh' ? '安全的用戶登入與權限管理。' : 'Secure user login and permission management.' },
    { id: 'billing', label: lang === 'zh' ? '訂閱計費' : 'Subscription Billing', description: lang === 'zh' ? '自動化訂閱與付款處理。' : 'Automated subscription and payment processing.' },
    { id: 'dashboard', label: lang === 'zh' ? '數據儀表板' : 'Analytics Dashboard', description: lang === 'zh' ? '統一的數據視覺化與分析。' : 'Unified data visualization and analysis.' }
  ],
  portfolio: [
    { id: 'gallery', label: lang === 'zh' ? '作品展示' : 'Project Gallery', description: lang === 'zh' ? '精美的作品展示與分類。' : 'Beautiful project showcase and categorization.' },
    { id: 'animations', label: lang === 'zh' ? '動態效果' : 'Interactive Animations', description: lang === 'zh' ? '豐富的視覺動態與互動效果。' : 'Rich visual dynamics and interactive effects.' },
    { id: 'blog', label: lang === 'zh' ? '部落格功能' : 'Blog System', description: lang === 'zh' ? '內容發布與分享平台。' : 'Content publishing and sharing platform.' }
  ],
  'web-app': [
    { id: 'real-time', label: lang === 'zh' ? '即時通訊' : 'Real-time Communication', description: lang === 'zh' ? 'WebSocket 即時數據傳輸。' : 'WebSocket real-time data transmission.' },
    { id: 'api', label: lang === 'zh' ? 'API 服務' : 'API Services', description: lang === 'zh' ? 'RESTful API 設計與整合。' : 'RESTful API design and integration.' },
    { id: 'database', label: lang === 'zh' ? '資料庫設計' : 'Database Design', description: lang === 'zh' ? '高效的資料儲存與查詢。' : 'Efficient data storage and querying.' }
  ]
});

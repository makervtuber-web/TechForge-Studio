// Demo Selection System Types

export interface DemoItem {
  id: string;
  name: string;
  description: string;
  thumbnail: string; // emoji or image URL
  isDefault: boolean;
  component: string; // Component name to render
  data?: any; // Optional custom data for the demo
}

export interface IndustryDemos {
  industryId: string;
  industryName: string;
  demos: DemoItem[];
}

export interface DemoConfig {
  industries: IndustryDemos[];
  activeDemoIds: { [industryId: string]: string }; // Map industryId -> active demoId
}

// Default Demo configurations
export const DEFAULT_DEMOS: DemoConfig = {
  industries: [
    {
      industryId: 'tech',
      industryName: '科技與軟體',
      demos: [
        {
          id: 'tech-default',
          name: 'SaaS 平台展示',
          description: '現代化科技企業網站，展示產品功能與團隊',
          thumbnail: '💻',
          isDefault: true,
          component: 'CyberDemo'
        },
        {
          id: 'tech-app',
          name: 'APP 產品頁',
          description: '移動應用程式推廣頁面，下載導向設計',
          thumbnail: '📱',
          isDefault: false,
          component: 'TechAppDemo'
        },
        {
          id: 'tech-api',
          name: 'API 文檔站',
          description: '開發者文檔與 API 參考網站',
          thumbnail: '🔧',
          isDefault: false,
          component: 'TechApiDemo'
        }
      ]
    },
    {
      industryId: 'healthcare',
      industryName: '醫療健康',
      demos: [
        {
          id: 'healthcare-default',
          name: '診所預約系統',
          description: '醫療診所網站與線上預約功能',
          thumbnail: '🏥',
          isDefault: true,
          component: 'MedicalDemo'
        },
        {
          id: 'healthcare-wellness',
          name: '健康管理中心',
          description: '綜合健康檢查與諮詢服務平台',
          thumbnail: '💊',
          isDefault: false,
          component: 'MedicalWellnessDemo'
        }
      ]
    },
    {
      industryId: 'creative',
      industryName: '創意設計',
      demos: [
        {
          id: 'creative-default',
          name: '設計工作室',
          description: '創意作品集與服務展示',
          thumbnail: '🎨',
          isDefault: true,
          component: 'CreativeDemo'
        },
        {
          id: 'creative-photo',
          name: '攝影師作品集',
          description: '專業攝影作品展示網站',
          thumbnail: '📷',
          isDefault: false,
          component: 'CreativePhotoDemo'
        },
        {
          id: 'creative-brand',
          name: '品牌設計公司',
          description: '品牌識別與視覺設計服務',
          thumbnail: '✨',
          isDefault: false,
          component: 'CreativeBrandDemo'
        }
      ]
    },
    {
      industryId: 'professional',
      industryName: '專業服務',
      demos: [
        {
          id: 'professional-default',
          name: '企業諮詢服務',
          description: '專業顧問與商業服務展示',
          thumbnail: '👔',
          isDefault: true,
          component: 'ProfessionalDemo'
        },
        {
          id: 'professional-law',
          name: '律師事務所',
          description: '法律服務與專業團隊介紹',
          thumbnail: '⚖️',
          isDefault: false,
          component: 'ProfessionalLawDemo'
        },
        {
          id: 'professional-accounting',
          name: '會計師事務所',
          description: '財務會計專業服務網站',
          thumbnail: '📊',
          isDefault: false,
          component: 'ProfessionalAccountingDemo'
        }
      ]
    },
    {
      industryId: 'retail',
      industryName: '零售餐飲',
      demos: [
        {
          id: 'retail-default',
          name: '智能零售系統',
          description: '線上商店與購物車功能展示',
          thumbnail: '🛍️',
          isDefault: true,
          component: 'RetailDemo'
        },
        {
          id: 'retail-restaurant',
          name: '餐廳訂位系統',
          description: '餐廳菜單與線上訂位功能',
          thumbnail: '🍽️',
          isDefault: false,
          component: 'RetailRestaurantDemo'
        },
        {
          id: 'retail-cafe',
          name: '咖啡廳網站',
          description: '咖啡廳品牌形象與產品展示',
          thumbnail: '☕',
          isDefault: false,
          component: 'RetailCafeDemo'
        }
      ]
    },
    {
      industryId: 'personal',
      industryName: '個人專業',
      demos: [
        {
          id: 'personal-default',
          name: '個人品牌專家',
          description: '自由工作者與創業者形象網站',
          thumbnail: '👨‍💼',
          isDefault: true,
          component: 'PersonalDemo'
        },
        {
          id: 'personal-freelancer',
          name: '自由接案者',
          description: '接案作品集與報價展示',
          thumbnail: '💼',
          isDefault: false,
          component: 'PersonalFreelancerDemo'
        },
        {
          id: 'personal-coach',
          name: '職涯教練',
          description: '個人教練與諮詢服務頁面',
          thumbnail: '🎯',
          isDefault: false,
          component: 'PersonalCoachDemo'
        }
      ]
    }
  ],
  activeDemoIds: {
    tech: 'tech-default',
    healthcare: 'healthcare-default',
    creative: 'creative-default',
    professional: 'professional-default',
    retail: 'retail-default',
    personal: 'personal-default'
  }
};

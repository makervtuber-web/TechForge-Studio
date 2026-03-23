
export enum Stage {
  INITIALIZATION = 'initialization',
  HOME = 'home',
  ARCHITECTURE = 'architecture',
  AUGMENTATION = 'augmentation',
  NEURAL_INPUT = 'neural_input',
  TRANSMISSION = 'transmission'
}

export interface MasterBlueprint {
  identity: {
    projectName: string;
    purpose: string;
    targetAudience: string;
    contact: string; // 新增聯絡資訊欄位
  };
  visual: {
    theme: 'Neon' | 'Chrome' | 'Shadow' | 'Solar';
    primaryColor: string;
    style: string;
    complexity: number;
  };
  features: string[];
  technical_spec: {
    stack: string[];
    infrastructure: string;
    priority: string;
  };
  creative_dna: string;
}

export interface Option {
  id: string;
  label: string;
  description: string;
  icon?: string;
}

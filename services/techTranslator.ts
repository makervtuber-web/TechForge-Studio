
import { MasterBlueprint } from '../types';

export const translateBlueprint = (blueprint: MasterBlueprint): string[] => {
  const specs: string[] = [];
  
  // Logic to generate tech stack
  if (blueprint.identity.purpose === 'ecommerce') {
    specs.push('Next.js 14 (App Router)', 'Tailwind CSS', 'Stripe API Integration', 'Prisma ORM', 'PostgreSQL');
  } else if (blueprint.identity.purpose === 'saas') {
    specs.push('TypeScript Core', 'React 18', 'Redux Toolkit / Zustand', 'Node.js Backend', 'Redis Caching');
  } else {
    specs.push('Vite + React', 'Framer Motion', 'Three.js / React Three Fiber', 'Supabase Auth');
  }

  if (blueprint.visual.theme === 'Neon') {
    specs.push('CSS Custom Properties (Neon System)', 'Backdrop Blur Filters');
  }

  return Array.from(new Set(specs)); // Unique specs
};

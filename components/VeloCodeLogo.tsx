import React from 'react';

interface VeloCodeLogoProps {
  size?: 'small' | 'medium' | 'large';
  showTagline?: boolean;
  className?: string;
}

const VeloCodeLogo: React.FC<VeloCodeLogoProps> = ({ 
  size = 'medium', 
  showTagline = false,
  className = ''
}) => {
  const sizeClasses = {
    small: { icon: 'w-8 h-8', text: 'text-xl', tagline: 'text-xs' },
    medium: { icon: 'w-12 h-12', text: 'text-3xl', tagline: 'text-sm' },
    large: { icon: 'w-16 h-16', text: 'text-5xl', tagline: 'text-base' }
  };

  const { icon, text, tagline } = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Speed/Velocity themed */}
      <div className={`${icon} relative`}>
        <svg viewBox="0 0 64 64" className="w-full h-full">
          {/* Outer circle */}
          <circle 
            cx="32" cy="32" r="30" 
            fill="none" 
            stroke="url(#gradient)" 
            strokeWidth="3"
            className="animate-pulse"
          />
          
          {/* Inner speed lines */}
          <path 
            d="M20 32 L35 32 L30 26 M35 32 L30 38" 
            stroke="url(#gradient)" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Speed indicator */}
          <path 
            d="M38 28 L44 32 L38 36" 
            stroke="#3b82f6" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`${text} font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent`}>
          Velo Code
        </span>
        {showTagline && (
          <span className={`${tagline} text-gray-500 font-medium`}>
            速碼 · 極速網站開發
          </span>
        )}
      </div>
    </div>
  );
};

export default VeloCodeLogo;

// Animated version for hero section
export const VeloCodeLogoAnimated: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Animated Logo Icon */}
      <div className="w-24 h-24 mb-4 relative">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          {/* Outer rotating circle */}
          <circle 
            cx="32" cy="32" r="30" 
            fill="none" 
            stroke="url(#gradient1)" 
            strokeWidth="2"
            strokeDasharray="4 4"
            className="origin-center"
            style={{ animation: 'spin 20s linear infinite' }}
          />
          
          {/* Inner static circle */}
          <circle 
            cx="32" cy="32" r="24" 
            fill="none" 
            stroke="url(#gradient1)" 
            strokeWidth="3"
          />
          
          {/* Speed arrow */}
          <path 
            d="M18 32 L36 32 L30 24 M36 32 L30 40" 
            stroke="url(#gradient1)" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Speed lines */}
          <path 
            d="M40 28 L48 32 L40 36" 
            stroke="#60a5fa" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
            className="animate-pulse"
          />
          
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl -z-10 animate-pulse"></div>
      </div>

      {/* Brand Name */}
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
        Velo Code
      </h1>
      
      {/* Chinese Tagline */}
      <p className="text-2xl text-gray-400 font-light mb-1">速碼</p>
      
      {/* English Tagline */}
      <p className="text-lg text-blue-400 font-medium">
        極速網站開發 · 為您搶佔先機
      </p>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

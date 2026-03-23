
import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  color?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', color = '#00f3ff' }) => {
  return (
    <div className={`relative inline-block font-tech ${className}`} style={{ color }}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 w-full h-full opacity-50 z-0"
        animate={{
          x: [-2, 2, -1, 3, 0],
          opacity: [0.5, 0.8, 0.3, 0.6, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 0.1, ease: 'linear' }}
        style={{ color: '#ff003c', clipPath: 'inset(10% 0 30% 0)' }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 w-full h-full opacity-50 z-0"
        animate={{
          x: [2, -2, 3, -1, 0],
          opacity: [0.5, 0.3, 0.8, 0.4, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 0.15, ease: 'linear' }}
        style={{ color: '#39ff14', clipPath: 'inset(40% 0 10% 0)' }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default GlitchText;


import React from 'react';
import { motion } from 'framer-motion';

interface CyberWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  color?: string;
}

const CyberWindow: React.FC<CyberWindowProps> = ({ title, onClose, children, color = '#00f3ff' }) => {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
    >
      <div className="w-full max-w-lg bg-black/80 backdrop-blur-2xl border border-white/10 p-1 pointer-events-auto relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* 頂部裝飾條 */}
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
            <span className="text-[10px] font-tech uppercase tracking-[0.2em]" style={{ color }}>{title}</span>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors text-xs font-tech">
            [ CLOSE ]
          </button>
        </div>
        
        {/* 視窗內容 */}
        <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>

        {/* 邊角裝飾 */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r" style={{ borderColor: color }} />
      </div>
      
      {/* 背景點擊關閉 */}
      <div className="absolute inset-0 z-[-1] pointer-events-auto bg-black/20" onClick={onClose} />
    </motion.div>
  );
};

export default CyberWindow;

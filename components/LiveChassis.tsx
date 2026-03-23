import React from 'react';
import { motion } from 'framer-motion';
import { MasterBlueprint } from '../types.ts';
import { UI_TEXT } from '../translations.ts';

interface LiveChassisProps {
  blueprint: MasterBlueprint;
  lang: 'en' | 'zh';
}

const LiveChassis: React.FC<LiveChassisProps> = ({ blueprint, lang }) => {
  const t = UI_TEXT[lang];
  const getThemeColor = () => {
    switch(blueprint.visual.theme) {
      case 'Neon': return '#00f3ff';
      case 'Chrome': return '#ffffff';
      case 'Shadow': return '#ff003c';
      default: return '#39ff14';
    }
  };

  const themeColor = getThemeColor();

  return (
    <div className="relative flex items-center justify-center h-full perspective-1000">
      <motion.div
        className="relative w-64 h-80 rounded-lg border-2 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
        style={{
          borderColor: themeColor,
          boxShadow: `0 0 30px ${themeColor}66`,
        }}
        animate={{
          rotateY: [0, 5, -5, 0],
          rotateX: [0, -5, 5, 0],
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full grid grid-cols-4 grid-rows-6 gap-1 p-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="bg-[#00f3ff] rounded-sm" style={{ opacity: Math.random() }} />
            ))}
          </div>
        </div>

        <div className="z-10 text-center px-4">
          <div className="text-[10px] uppercase tracking-tighter text-white/50 mb-2 font-tech">{t.preview_node}</div>
          <div className="h-1 w-12 mx-auto mb-4" style={{ backgroundColor: themeColor }} />
          <div className="text-lg font-tech mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {blueprint.identity.projectName || "CORE_UNNAMED"}
          </div>
          <div className="text-[8px] opacity-60">{t.system_label}: {blueprint.identity.purpose || "NULL"}</div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-1">
            {blueprint.features.slice(0, 3).map((f, i) => (
              <span key={i} className="text-[6px] border border-white/20 px-1 py-0.5 rounded uppercase">
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </motion.div>
      <motion.div className="absolute w-2 h-2 rounded-full blur-sm" style={{ backgroundColor: '#ff003c' }} animate={{ x: [150, -150, 150], y: [-50, 50, -50], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 4 }} />
      <motion.div className="absolute w-1.5 h-1.5 rounded-full blur-sm" style={{ backgroundColor: '#39ff14' }} animate={{ x: [-120, 120, -120], y: [80, -80, 80], opacity: [0, 0.8, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
    </div>
  );
};

export default LiveChassis;
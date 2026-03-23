
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';
import GlitchText from './GlitchText.tsx';
import CyberWindow from './CyberWindow.tsx';
import NeuralAdvisor from './NeuralAdvisor.tsx';
import LogoForge from './LogoForge.tsx';
import ResourceSim from './ResourceSim.tsx';
import TechBrainMap from './TechBrainMap.tsx';

interface HomePageProps {
  onInitiate: () => void;
  lang: 'en' | 'zh';
}

const HomePage: React.FC<HomePageProps> = ({ onInitiate, lang }) => {
  const [soulCount, setSoulCount] = useState(2077);
  const [isSyncing, setIsSyncing] = useState(true);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [showBriefing, setShowBriefing] = useState(false);
  const t = UI_TEXT[lang];

  useEffect(() => {
    const timer = setTimeout(() => setIsSyncing(false), 3200);

    const stored = localStorage.getItem('soul_sync_count');
    const initial = stored ? parseInt(stored) : 2077 + Math.floor(Math.random() * 500);
    const newCount = initial + 1;
    setSoulCount(newCount);
    localStorage.setItem('soul_sync_count', newCount.toString());

    const interval = setInterval(() => {
      setSoulCount(prev => prev + (Math.random() > 0.92 ? 1 : 0));
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const subNodes = [
    { id: 'diag', label: 'SYST_DIAG', color: '#39ff14', icon: '⚡' },
    { id: 'log', label: 'WORLD_LOG', color: '#ff003c', icon: '📄' },
    { id: 'ai', label: 'AI_ADVISOR', color: '#00f3ff', icon: '🧠' },
    { id: 'logo', label: 'LOGO_FORGE', color: '#f3ff00', icon: '🎨', badge: 'NEW' },
    { id: 'oracle', label: 'VC_ORACLE', color: '#ff00ff', icon: '👁️', badge: 'PRO' },
    { id: 'res', label: 'RESOURCE', color: '#00ffcc', icon: '📊' },
    { id: 'tech', label: 'TECH_BRAIN', color: '#ffffff', icon: '🕸️', badge: 'DEEP' }
  ];

  // 計算圓形軌跡座標的輔助函數
  const getOrbitPosition = (index: number, total: number, progress: number, radius: number) => {
    const angle = (index * (360 / total) + progress) * (Math.PI / 180);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative p-6 overflow-hidden">
      {/* 賽博風格掃描線 - 只在賽博模式顯示 */}
      <div className="scanlines" />
      {/* 背景動態格網 */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="latticeGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#00f3ff" />
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00f3ff" strokeWidth="0.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#latticeGrid)" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center max-w-4xl w-full"
      >
        {/* 系統狀態標註 */}
        <div className="mb-6 flex flex-col items-center">
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center gap-3 mb-2"
          >
             <span className="text-[#00f3ff] font-tech text-[10px] tracking-[0.8em] uppercase">
               {isSyncing ? "SCANNING_NEURAL_WAVES" : "GLOBEL_NETWORK_ESTABLISHED"}
             </span>
          </motion.div>
          <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-[#00f3ff]/50 to-transparent" />
        </div>
        
        {/* 靈魂計數器 */}
        <div className="mb-8">
          <motion.div 
            key={soulCount}
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-white font-tech tracking-tighter drop-shadow-[0_0_35px_rgba(0,243,255,0.5)]"
          >
            {soulCount.toLocaleString()}
          </motion.div>
          <div className="text-[#39ff14] text-[10px] md:text-xs font-tech tracking-[0.6em] uppercase mt-2 opacity-70">
            {t.home_sync_count}
          </div>
        </div>

        {/* 核心視覺：賽博神經網絡球體與持續公轉的功能節點 */}
        <div className="relative mb-10 h-72 md:h-[450px] flex items-center justify-center">
          
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-[#00f3ff]/10 rounded-full blur-[100px]" />

          <motion.div 
            animate={{ rotateY: 360, rotateX: 45 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 md:w-[580px] md:h-[580px] border border-[#00f3ff]/10 rounded-full"
            style={{ transformStyle: 'preserve-3d' }}
          />

          {/* 圓環形軌跡持續移動的功能節點 */}
          {subNodes.map((node, i) => {
            const radius = window.innerWidth > 768 ? 320 : 180;
            const baseAngle = i * (360 / subNodes.length);
            
            return (
              <motion.button
                key={node.id}
                onClick={() => setActiveWindow(node.id)}
                animate={{ 
                  x: [
                    Math.cos((baseAngle + 0) * (Math.PI / 180)) * radius,
                    Math.cos((baseAngle + 90) * (Math.PI / 180)) * radius,
                    Math.cos((baseAngle + 180) * (Math.PI / 180)) * radius,
                    Math.cos((baseAngle + 270) * (Math.PI / 180)) * radius,
                    Math.cos((baseAngle + 360) * (Math.PI / 180)) * radius
                  ],
                  y: [
                    Math.sin((baseAngle + 0) * (Math.PI / 180)) * radius,
                    Math.sin((baseAngle + 90) * (Math.PI / 180)) * radius,
                    Math.sin((baseAngle + 180) * (Math.PI / 180)) * radius,
                    Math.sin((baseAngle + 270) * (Math.PI / 180)) * radius,
                    Math.sin((baseAngle + 360) * (Math.PI / 180)) * radius
                  ],
                  opacity: [0, 1, 1, 1, 0] // 加入淡入淡出效果
                }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear",
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
                whileHover={{ scale: 1.2, color: node.color, transition: { duration: 0.2 } }}
                className="absolute z-40 flex flex-col items-center gap-1 group"
              >
                {node.badge && (
                  <div className="absolute -top-4 font-tech text-[6px] px-1 py-0.5 border border-[currentColor] animate-pulse bg-black shadow-[0_0_5px_currentColor]" style={{ color: node.color }}>
                    {node.badge}
                  </div>
                )}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-lg transition-all group-hover:border-[currentColor] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" style={{ color: node.color }}>
                  {node.icon}
                </div>
                <div className="text-[7px] md:text-[9px] font-tech tracking-widest opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/40 px-1">
                  [{node.label}]
                </div>
              </motion.button>
            );
          })}

          {/* 核心球體 SVG */}
          <div className="relative z-10 w-48 h-48 md:w-80 md:h-80 opacity-60">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="coreGlow">
                  <stop offset="0%" stopColor="#00f3ff" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#00f3ff" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00f3ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <motion.circle 
                cx="100" cy="100" r="15" 
                fill="url(#coreGlow)"
                animate={{ r: [12, 18, 12], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <g opacity="0.4" stroke="#00f3ff" strokeWidth="0.5" fill="none">
                <circle cx="100" cy="100" r="80" />
                <ellipse cx="100" cy="100" rx="80" ry="30" />
                <ellipse cx="100" cy="100" rx="30" ry="80" />
              </g>
            </svg>
          </div>
        </div>

        <p className="text-white/40 text-[10px] md:text-xs font-tech max-w-md mx-auto mb-10 uppercase leading-relaxed tracking-[0.3em] px-6">
          {t.home_desc}
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="text-[10px] font-tech text-[#00f3ff]/60 uppercase tracking-[0.3em] animate-pulse">
            [ {lang === 'zh' ? '準備啟動實體化協議' : 'READY TO MATERIALIZE'}... ]
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <button 
              onClick={() => setShowBriefing(true)}
              className="group relative px-10 md:px-16 py-7 bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] font-tech text-base md:text-xl uppercase tracking-[0.2em] overflow-hidden transition-all hover:glow-blue active:scale-95 shadow-[0_0_30px_rgba(0,243,255,0.3)]"
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 bg-[#00f3ff]" />
              <span className="relative z-10 group-hover:text-black transition-colors font-bold whitespace-normal md:whitespace-nowrap px-4 block">
                {t.home_init_btn}
              </span>
            </button>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[9px] md:text-[11px] font-tech text-[#39ff14] tracking-[0.2em] uppercase opacity-70"
            >
              {t.home_init_sub}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 虛擬視窗系統 */}
      <AnimatePresence>
        {showBriefing && (
          <CyberWindow key="brief" title={t.brief_title} onClose={() => setShowBriefing(false)} color="#f3ff00">
            <div className="space-y-6">
              <div className="p-4 border border-[#f3ff00]/20 bg-[#f3ff00]/5 text-sm md:text-base leading-relaxed text-white/90">
                <div className="flex items-center gap-3 mb-4 text-[#f3ff00]">
                  <span className="w-2 h-2 rounded-full bg-[#f3ff00] animate-ping" />
                  <span className="font-tech tracking-widest uppercase">High Priority Briefing</span>
                </div>
                {t.brief_content}
              </div>
              <button 
                onClick={onInitiate}
                className="w-full py-5 bg-[#f3ff00] text-black font-tech uppercase tracking-[0.3em] font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(243,255,0,0.3)]"
              >
                {t.brief_accept}
              </button>
            </div>
          </CyberWindow>
        )}

        {activeWindow === 'diag' && (
          <CyberWindow key="diag" title={t.win_diag} onClose={() => setActiveWindow(null)} color="#39ff14">
            <div className="space-y-6">
              {[
                { label: 'NEURAL_LINK_STABILITY', val: 98, color: '#39ff14' },
                { label: 'GRID_LATENCY', val: 12, color: '#00f3ff' },
                { label: 'CORE_TEMPERATURE', val: 42, color: '#ff003c' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="flex justify-between text-[10px] font-tech mb-2">
                    <span className="opacity-50">{stat.label}</span>
                    <span style={{ color: stat.color }}>{stat.val}%</span>
                  </div>
                  <div className="h-1 bg-white/5 relative">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${stat.val}%` }} className="h-full" style={{ backgroundColor: stat.color, boxShadow: `0 0 10px ${stat.color}` }} />
                  </div>
                </div>
              ))}
            </div>
          </CyberWindow>
        )}

        {activeWindow === 'log' && (
          <CyberWindow key="log" title={t.win_log} onClose={() => setActiveWindow(null)} color="#ff003c">
            <div className="font-mono text-[10px] space-y-4 opacity-70 leading-relaxed">
              <p className="border-l-2 border-[#ff003c] pl-3">
                <span className="text-[#ff003c]">[2077.10.24]</span> 格網偵測到大規模靈魂同步現象。
              </p>
              <p className="border-l-2 border-white/20 pl-3">
                <span className="text-white/40">[2077.11.02]</span> 核心協議 V2.07 更新完畢。
              </p>
            </div>
          </CyberWindow>
        )}

        {activeWindow === 'ai' && (
          <CyberWindow key="ai" title={t.win_ai} onClose={() => setActiveWindow(null)} color="#00f3ff">
            <NeuralAdvisor lang={lang} />
          </CyberWindow>
        )}

        {activeWindow === 'logo' && (
          <CyberWindow key="logo" title={t.win_logo} onClose={() => setActiveWindow(null)} color="#f3ff00">
            <LogoForge lang={lang} />
          </CyberWindow>
        )}

        {activeWindow === 'res' && (
          <CyberWindow key="res" title={t.win_resource} onClose={() => setActiveWindow(null)} color="#00ffcc">
            <ResourceSim lang={lang} />
          </CyberWindow>
        )}

        {activeWindow === 'oracle' && (
          <CyberWindow key="oracle" title={t.win_oracle} onClose={() => setActiveWindow(null)} color="#ff00ff">
            <NeuralAdvisor lang={lang} isOracle />
          </CyberWindow>
        )}

        {activeWindow === 'tech' && (
          <CyberWindow key="tech" title={t.win_tech} onClose={() => setActiveWindow(null)} color="#ffffff">
            <TechBrainMap lang={lang} />
          </CyberWindow>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;

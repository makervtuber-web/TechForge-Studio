import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from './GlitchText.tsx';
import { UI_TEXT } from '../translations.ts';

interface BootScreenProps {
  onComplete: (lang: 'en' | 'zh') => void;
  currentLang: 'en' | 'zh';
  setLang: (l: 'en' | 'zh') => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete, currentLang, setLang }) => {
  const [logIndex, setLogIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const t = UI_TEXT[currentLang];

  useEffect(() => {
    setLogIndex(0);
    const logInterval = setInterval(() => {
      setLogIndex(prev => {
        if (prev < t.boot_logs.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 400);

    return () => clearInterval(logInterval);
  }, [currentLang, t.boot_logs.length]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsReady(true);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-6 font-tech overflow-hidden">
      {/* Language Switcher */}
      <div className="absolute top-8 right-8 z-50 flex gap-4">
        <button 
          onClick={() => setLang('en')}
          className={`text-xs p-2 border ${currentLang === 'en' ? 'border-[#00f3ff] text-[#00f3ff] glow-blue' : 'border-white/10 text-white/30'}`}
        >
          [ EN ]
        </button>
        <button 
          onClick={() => setLang('zh')}
          className={`text-xs p-2 border ${currentLang === 'zh' ? 'border-[#00f3ff] text-[#00f3ff] glow-blue' : 'border-white/10 text-white/30'}`}
        >
          [ 繁 ]
        </button>
      </div>

      <div className="w-full max-w-lg space-y-8 relative z-10">
        <header className="text-center">
          <GlitchText text={t.boot_title} className="text-4xl font-black mb-2" color="#00f3ff" />
          <p className="text-[#00f3ff]/40 text-[10px] uppercase tracking-[0.5em]">{t.boot_subtitle}</p>
        </header>

        <div className="bg-black/80 border border-[#00f3ff]/20 p-6 rounded-sm h-48 flex flex-col font-mono text-xs overflow-hidden">
          {t.boot_logs.slice(0, logIndex + 1).map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-1 flex gap-2"
            >
              <span className="text-[#00f3ff]/40">[{Math.random().toString(16).substring(2, 6)}]</span>
              <span className={i === logIndex ? "text-[#00f3ff] animate-pulse" : "text-white/60"}>
                {log}
              </span>
            </motion.div>
          ))}
          {logIndex === t.boot_logs.length - 1 && (
            <motion.div 
              animate={{ opacity: [0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="w-2 h-4 bg-[#00f3ff] inline-block ml-1"
            />
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-[#00f3ff]">
            <span className="uppercase tracking-widest">{currentLang === 'zh' ? '初始化進度' : 'Initialization Progress'}</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-[#00f3ff]/10 relative">
            <motion.div 
              className="h-full bg-[#00f3ff] glow-blue"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <AnimatePresence>
          {isReady && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center pt-4"
            >
              <button
                onClick={() => onComplete(currentLang)}
                className="group relative px-8 py-4 bg-transparent border-2 border-[#ff003c] text-[#ff003c] font-tech text-sm uppercase tracking-[0.3em] overflow-hidden transition-all glow-pink"
              >
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 bg-[#ff003c]" />
                <span className="relative z-10 group-hover:text-black transition-colors">{t.boot_btn}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00f3ff]/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00f3ff]/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00f3ff]/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00f3ff]/30" />
    </div>
  );
};

export default BootScreen;
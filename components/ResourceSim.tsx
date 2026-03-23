
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface ResourceSimProps {
  lang: 'en' | 'zh';
}

const ResourceSim: React.FC<ResourceSimProps> = ({ lang }) => {
  const [speed, setSpeed] = useState(50);
  const [quality, setQuality] = useState(50);
  const [ux, setUx] = useState(50);
  const t = UI_TEXT[lang];

  const calculateBudget = () => ((speed * 120) + (quality * 250) + (ux * 180)).toLocaleString();
  const calculateTimeline = () => Math.max(2, Math.ceil((quality * 0.1) + (ux * 0.08) - (speed * 0.05)));

  return (
    <div className="space-y-8 py-4">
      {[
        { label: t.res_speed, val: speed, set: setSpeed, color: '#ff003c' },
        { label: t.res_quality, val: quality, set: setQuality, color: '#39ff14' },
        { label: t.res_ux, val: ux, set: setUx, color: '#00f3ff' }
      ].map(row => (
        <div key={row.label} className="space-y-3">
          <div className="flex justify-between text-[10px] font-tech uppercase tracking-widest opacity-60">
            <span>{row.label}</span>
            <span style={{ color: row.color }}>{row.val} / 100</span>
          </div>
          <input 
            type="range" min="1" max="100" value={row.val} 
            onChange={(e) => row.set(parseInt(e.target.value))}
            className="w-full h-1 bg-white/10 appearance-none outline-none cursor-pointer accent-[#00f3ff]"
            style={{ accentColor: row.color }}
          />
        </div>
      ))}

      <div className="mt-10 p-4 border border-white/10 bg-white/5 space-y-4">
        <div className="flex justify-between items-end border-b border-white/10 pb-3">
          <span className="text-[10px] font-tech opacity-40">{t.res_budget}</span>
          <span className="text-xl font-tech text-[#39ff14]">{calculateBudget()} CR</span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-tech opacity-40">{t.res_time}</span>
          <span className="text-xl font-tech text-[#00f3ff]">{calculateTimeline()} {lang === 'zh' ? '週' : 'WKS'}</span>
        </div>
      </div>

      <div className="text-[8px] font-mono text-white/20 leading-tight uppercase">
        * 數據基於 2077 年數位工會標準計算。<br/>
        * 最終報價將由人工義體工程師審核後決定。
      </div>
    </div>
  );
};

export default ResourceSim;

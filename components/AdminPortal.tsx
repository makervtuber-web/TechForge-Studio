
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MasterBlueprint } from '../types.ts';
import { UI_TEXT } from '../translations.ts';

interface AdminPortalProps {
  onClose: () => void;
  lang: 'en' | 'zh';
}

const AdminPortal: React.FC<AdminPortalProps> = ({ onClose, lang }) => {
  const [blueprints, setBlueprints] = useState<(MasterBlueprint & { timestamp: string })[]>([]);
  const [selected, setSelected] = useState<(MasterBlueprint & { timestamp: string }) | null>(null);
  const t = UI_TEXT[lang];

  useEffect(() => {
    const saved = localStorage.getItem('forge_submissions');
    if (saved) {
      setBlueprints(JSON.parse(saved).reverse());
    }
  }, []);

  const clearLogs = () => {
    if (confirm("Confirm wiping all neural records?")) {
      localStorage.removeItem('forge_submissions');
      setBlueprints([]);
      setSelected(null);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-10 font-tech">
      <div className="w-full max-w-5xl h-[85vh] bg-[#050505] border border-white/10 flex flex-col relative">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-[#ff003c] rounded-full animate-pulse" />
            <h2 className="text-xl text-white tracking-[0.4em]">{t.admin_title}</h2>
          </div>
          <div className="flex gap-4">
             <button onClick={clearLogs} className="text-[10px] text-white/20 hover:text-[#ff003c] transition-colors border border-white/10 px-3 py-1">[ WIPE_ALL ]</button>
             <button onClick={onClose} className="text-[10px] text-white/40 hover:text-white transition-colors border border-white/20 px-3 py-1">[ TERMINATE_SESSION ]</button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* List */}
          <div className="w-1/3 border-r border-white/10 overflow-y-auto custom-scrollbar">
            {blueprints.length === 0 ? (
              <div className="p-10 text-center text-white/20 text-xs">{t.admin_empty}</div>
            ) : (
              blueprints.map((b, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelected(b)}
                  className={`p-6 border-b border-white/5 cursor-pointer transition-all hover:bg-white/5 ${selected === b ? 'bg-[#00f3ff]/10 border-l-4 border-l-[#00f3ff]' : ''}`}
                >
                  <div className="text-[#00f3ff] text-sm mb-1">{b.identity.projectName || 'UNNAMED_PROTO'}</div>
                  <div className="text-[9px] text-white/30 uppercase">{b.timestamp}</div>
                </div>
              ))
            )}
          </div>

          {/* Details */}
          <div className="w-2/3 p-10 overflow-y-auto custom-scrollbar bg-black/40">
            {selected ? (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <div>
                  <label className="text-[9px] text-[#39ff14] block mb-2 tracking-widest">[ PROJECT_IDENTIFIER ]</label>
                  <h3 className="text-3xl text-white font-black">{selected.identity.projectName}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[9px] text-[#00f3ff] block mb-2 tracking-widest">[ NEURAL_LINK_ID / CONTACT ]</label>
                    <div className="text-lg text-[#00f3ff] font-bold border border-[#00f3ff]/20 p-3 bg-[#00f3ff]/5">
                      {selected.identity.contact || "NOT_PROVIDED"}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-[9px] text-white/40 block mb-1 tracking-widest">[ CORE_ARCH ]</label>
                      <div className="text-xs text-white uppercase">{selected.identity.purpose}</div>
                    </div>
                    <div>
                      <label className="text-[9px] text-white/40 block mb-1 tracking-widest">[ VISUAL_STYLE ]</label>
                      <div className="text-xs text-white uppercase">{selected.visual.style}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-white/10 bg-white/5">
                  <label className="text-[9px] text-[#ff003c] block mb-3 tracking-widest">[ CREATIVE_DNA_DUMP ]</label>
                  <p className="text-sm text-white/80 font-mono leading-relaxed whitespace-pre-wrap">{selected.creative_dna}</p>
                </div>

                <div>
                  <label className="text-[9px] text-white/40 block mb-3 tracking-widest">[ TECH_MANIFEST ]</label>
                  <div className="flex flex-wrap gap-2">
                    {selected.technical_spec.stack.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-white/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-white/10 text-xs font-tech tracking-[1em]">AWAITING_SELECTION</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;

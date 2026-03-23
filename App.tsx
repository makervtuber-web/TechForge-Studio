
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stage, MasterBlueprint } from './types.ts';
import { getArchitectureOptions, getThemeOptions, getStyleOptions, getAugmentationPool, COLORS } from './constants.tsx';
import { translateBlueprint } from './services/techTranslator.ts';
import { UI_TEXT } from './translations.ts';

import SyncMeter from './components/SyncMeter.tsx';
import LiveChassis from './components/LiveChassis.tsx';
import GlitchText from './components/GlitchText.tsx';
import FinalModal from './components/FinalModal.tsx';
import BootScreen from './components/BootScreen.tsx';
import HomePage from './components/HomePage.tsx';
import UniversalHomepage from './components/UniversalHomepage.tsx';
import AdminPortal from './components/AdminPortal.tsx';

const ADMIN_CODE = "2077";

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const [stage, setStage] = useState<Stage>(Stage.HOME);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [useUniversalHome, setUseUniversalHome] = useState(true); // 新增狀態
  
  // 管理員相關狀態
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [adminInput, setAdminInput] = useState("");
  const [authError, setAuthError] = useState(false);

  const [blueprint, setBlueprint] = useState<MasterBlueprint>({
    identity: { projectName: '', purpose: '', targetAudience: '', contact: '' },
    visual: { theme: 'Professional', primaryColor: COLORS.PRIMARY_BLUE, style: 'minimalist', complexity: 50 },
    features: [],
    technical_spec: { stack: [], infrastructure: 'Serverless', priority: 'Performance' },
    creative_dna: ''
  });

  const [progress, setProgress] = useState(0);
  const t = UI_TEXT[lang];

  useEffect(() => {
    if (stage === Stage.INITIALIZATION || stage === Stage.HOME) {
      setProgress(0);
      return;
    }
    let p = 0;
    if (blueprint.identity.purpose) p += 20;
    if (blueprint.visual.style) p += 20;
    if (blueprint.features.length > 0) p += 20;
    if (blueprint.identity.projectName) p += 20;
    if (blueprint.creative_dna.length > 5) p += 20;
    setProgress(p);
  }, [blueprint, stage]);

  const handleIdentitySelect = (id: string) => {
    setBlueprint(prev => ({ 
      ...prev, 
      identity: { ...prev.identity, purpose: id },
      features: [] 
    }));
    setStage(Stage.AUGMENTATION);
  };

  const toggleFeature = (id: string) => {
    setBlueprint(prev => {
      const exists = prev.features.includes(id);
      return {
        ...prev,
        features: exists ? prev.features.filter(f => f !== id) : [...prev.features, id]
      };
    });
  };

  const handleTransmit = async () => {
    setIsTransmitting(true);
    const tech = translateBlueprint(blueprint);
    const finalBlueprint = {
      ...blueprint,
      technical_spec: { ...blueprint.technical_spec, stack: tech }
    };
    
    setBlueprint(finalBlueprint);
    
    const existing = JSON.parse(localStorage.getItem('forge_submissions') || '[]');
    existing.push({ ...finalBlueprint, timestamp: new Date().toLocaleString() });
    localStorage.setItem('forge_submissions', JSON.stringify(existing));
    
    await new Promise(r => setTimeout(r, 2500));
    setIsTransmitting(false);
    setShowFinalModal(true);
  };

  const resetForge = () => {
    setShowFinalModal(false);
    setBlueprint({
      identity: { projectName: '', purpose: '', targetAudience: '', contact: '' },
      visual: { theme: 'Professional', primaryColor: COLORS.PRIMARY_BLUE, style: 'minimalist', complexity: 50 },
      features: [],
      technical_spec: { stack: [], infrastructure: 'Serverless', priority: 'Performance' },
      creative_dna: ''
    });
    setStage(Stage.HOME);
  };

  const verifyAdmin = () => {
    if (adminInput === ADMIN_CODE) {
      setAuthError(false);
      setIsAuthenticating(false);
      setAdminInput("");
      setShowAdmin(true);
    } else {
      setAuthError(true);
      setTimeout(() => setAuthError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col pt-16">

      <AnimatePresence mode="wait">
        {stage === Stage.INITIALIZATION ? (
          <UniversalHomepage key="universal-home" lang={lang} onInitiate={() => setStage(Stage.ARCHITECTURE)} />
        ) : stage === Stage.HOME ? (
          useUniversalHome ? (
            <UniversalHomepage key="universal-home" lang={lang} onInitiate={() => setStage(Stage.ARCHITECTURE)} />
          ) : (
            <HomePage key="home" lang={lang} onInitiate={() => setStage(Stage.ARCHITECTURE)} />
          )
        ) : (
          <motion.div key="main-app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
            <SyncMeter progress={progress} />

            <main className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-4 md:p-10 gap-10 relative z-10">
              <div className="w-full lg:w-3/5 space-y-8">
                <header className="mb-10 flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <GlitchText text={t.app_title} className="text-3xl md:text-5xl font-black mb-3" />
                    <p className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase">{t.app_subtitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setStage(Stage.HOME)} className="text-[10px] px-3 py-1 border border-white/10 text-white/40 hover:border-[#ff003c] hover:text-[#ff003c] transition-all uppercase font-tech">{t.terminate_btn}</button>
                    <div className="h-6 w-[1px] bg-white/10 hidden sm:block mx-1" />
                    <button onClick={() => setLang('zh')} className={`text-[10px] px-3 py-1 border transition-all ${lang === 'zh' ? 'border-[#00f3ff] text-[#00f3ff] glow-blue' : 'border-white/10 text-white/20'}`}>[ 繁 ]</button>
                    <button onClick={() => setLang('en')} className={`text-[10px] px-3 py-1 border transition-all ${lang === 'en' ? 'border-[#00f3ff] text-[#00f3ff] glow-blue' : 'border-white/10 text-white/20'}`}>[ EN ]</button>
                  </div>
                </header>

                <AnimatePresence mode="wait">
                  {stage === Stage.ARCHITECTURE && (
                    <motion.section key="arch" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 20, opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="col-span-full border-l-4 border-[#00f3ff] pl-6 mb-4">
                        <h2 className="text-2xl font-tech text-[#00f3ff] mb-1">{t.phase1_title}</h2>
                        <p className="text-sm text-white/50">{t.phase1_desc}</p>
                      </div>
                      {getArchitectureOptions(lang).map(opt => (
                        <button key={opt.id} onClick={() => handleIdentitySelect(opt.id)} className={`text-left p-8 border bg-white/2 backdrop-blur-md transition-all hover:bg-[#00f3ff]/5 ${blueprint.identity.purpose === opt.id ? 'border-[#00f3ff] glow-blue' : 'border-white/10'}`}>
                          <div className="text-[#00f3ff] font-tech text-lg mb-2">{opt.label}</div>
                          <div className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">{opt.description}</div>
                        </button>
                      ))}
                    </motion.section>
                  )}

                  {stage === Stage.AUGMENTATION && (
                    <motion.section key="aug" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-8 pb-24">
                      <div className="flex justify-between items-center border-l-4 border-[#ff003c] pl-6">
                        <div><h2 className="text-2xl font-tech text-[#ff003c] mb-1">{t.phase2_title}</h2><p className="text-sm text-white/50">{t.phase2_desc}</p></div>
                        <button onClick={() => setStage(Stage.ARCHITECTURE)} className="text-[10px] uppercase text-white/30 border border-white/10 px-4 py-2 hover:border-white/40 transition-all">{t.back_btn}</button>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {(getAugmentationPool(lang)[blueprint.identity.purpose] || []).map(opt => (
                          <div key={opt.id} onClick={() => toggleFeature(opt.id)} className={`cursor-pointer flex items-center justify-between p-6 border bg-white/2 transition-all ${blueprint.features.includes(opt.id) ? 'border-[#ff003c] bg-[#ff003c]/5 glow-pink' : 'border-white/10 hover:border-white/30'}`}>
                            <div><div className="text-white font-tech text-base mb-1">{opt.label}</div><div className="text-[10px] text-white/40 uppercase">{opt.description}</div></div>
                            <div className={`w-5 h-5 border-2 ${blueprint.features.includes(opt.id) ? 'bg-[#ff003c] border-[#ff003c]' : 'border-white/20'}`} />
                          </div>
                        ))}
                      </div>
                      <button onClick={() => setStage(Stage.NEURAL_INPUT)} className="w-full p-6 border-2 border-[#39ff14] text-[#39ff14] font-tech uppercase tracking-[0.5em] glow-green hover:bg-[#39ff14]/10 transition-all text-base">{t.confirm_config}</button>
                    </motion.section>
                  )}

                  {stage === Stage.NEURAL_INPUT && (
                    <motion.section key="neural" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-8">
                      <div className="flex justify-between items-center border-l-4 border-[#39ff14] pl-6">
                        <div><h2 className="text-2xl font-tech text-[#39ff14] mb-1">{t.phase3_title}</h2><p className="text-sm text-white/50">{t.phase3_desc}</p></div>
                        <button onClick={() => setStage(Stage.AUGMENTATION)} className="text-[10px] uppercase text-white/30 border border-white/10 px-4 py-2 hover:border-white/40 transition-all">{t.back_btn}</button>
                      </div>
                      <textarea value={blueprint.creative_dna} onChange={(e) => setBlueprint(prev => ({ ...prev, creative_dna: e.target.value }))} placeholder={t.dna_placeholder} className="w-full h-56 bg-black/90 border border-white/20 p-6 text-sm font-mono focus:outline-none focus:border-[#39ff14] text-[#39ff14] leading-relaxed" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-white/10 p-6 bg-white/2">
                          <label className="text-[10px] uppercase text-white/50 mb-3 block">{t.proj_name_label}</label>
                          <input type="text" value={blueprint.identity.projectName} onChange={(e) => setBlueprint(prev => ({ ...prev, identity: { ...prev.identity, projectName: e.target.value }}))} className="bg-transparent border-b-2 border-white/10 w-full p-2 text-base focus:border-[#00f3ff] outline-none font-tech" placeholder="專案代號_PROTO" />
                        </div>
                        <div className="border border-white/10 p-6 bg-white/2">
                          <label className="text-[10px] uppercase text-white/50 mb-3 block">{t.contact_label}</label>
                          <input 
                            type="text" 
                            value={blueprint.identity.contact}
                            onChange={(e) => setBlueprint(prev => ({ ...prev, identity: { ...prev.identity, contact: e.target.value }}))}
                            className="bg-transparent border-b-2 border-white/10 w-full p-2 text-base focus:border-[#ff003c] outline-none font-tech" 
                            placeholder={t.contact_placeholder} 
                          />
                        </div>
                      </div>
                      <button onClick={handleTransmit} disabled={!blueprint.creative_dna || !blueprint.identity.projectName || !blueprint.identity.contact} className={`w-full p-8 border-2 font-tech uppercase tracking-[0.6em] transition-all ${!blueprint.creative_dna || !blueprint.identity.projectName || !blueprint.identity.contact ? 'border-white/10 text-white/20' : 'border-[#00f3ff] text-[#00f3ff] glow-blue hover:bg-[#00f3ff] hover:text-black'}`}>
                        {t.init_protocol}
                      </button>
                    </motion.section>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col justify-center min-h-[500px] bg-white/2 rounded-3xl border border-white/10 backdrop-blur-3xl relative p-6">
                <LiveChassis blueprint={blueprint} lang={lang} />
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{isTransmitting && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] bg-black/95 flex flex-col items-center justify-center backdrop-blur-md">
          <GlitchText text={t.uploading} className="text-4xl mb-4" />
          <div className="text-xs text-[#39ff14] animate-pulse">{t.uploading_desc}</div>
        </motion.div>
      )}</AnimatePresence>

      {/* 管理員驗證 Overlay */}
      <AnimatePresence>
        {isAuthenticating && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <div className="w-full max-w-sm p-8 border border-[#00f3ff]/30 bg-black relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f3ff]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f3ff]" />
              
              <h3 className="text-[#00f3ff] font-tech text-sm tracking-[0.3em] mb-6 uppercase">{t.admin_auth_prompt}</h3>
              
              <input 
                type="password"
                value={adminInput}
                onChange={(e) => setAdminInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && verifyAdmin()}
                autoFocus
                className={`w-full bg-white/5 border ${authError ? 'border-[#ff003c]' : 'border-white/10'} px-4 py-3 text-lg font-tech outline-none focus:border-[#00f3ff] text-[#00f3ff] mb-4`}
              />
              
              {authError && (
                <div className="text-[#ff003c] text-[10px] font-tech uppercase mb-4 animate-bounce">{t.admin_auth_error}</div>
              )}

              <div className="flex gap-4">
                <button 
                  onClick={verifyAdmin}
                  className="flex-1 py-3 bg-[#00f3ff] text-black font-tech text-xs uppercase hover:glow-blue transition-all font-bold"
                >
                  {t.admin_auth_btn}
                </button>
                <button 
                  onClick={() => { setIsAuthenticating(false); setAdminInput(""); }}
                  className="flex-1 py-3 border border-white/10 text-white/40 font-tech text-xs uppercase hover:text-white transition-all"
                >
                  [ CANCEL ]
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{showFinalModal && <FinalModal blueprint={blueprint} onClose={resetForge} lang={lang} />}</AnimatePresence>
      <AnimatePresence>{showAdmin && <AdminPortal onClose={() => setShowAdmin(false)} lang={lang} />}</AnimatePresence>

      <footer className="p-10 text-center text-[8px] md:text-[10px] text-white/10 uppercase tracking-[0.8em] relative z-10 border-t border-white/5 bg-black/40">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <span>TechForge Studio // <span onClick={() => setIsAuthenticating(true)} className="cursor-pointer hover:text-[#ff003c] transition-colors">V2.0.7</span> // All Rights Reserved</span>
          {stage === Stage.HOME && (
            <button 
              onClick={() => setUseUniversalHome(!useUniversalHome)}
              className="text-[10px] px-3 py-1 border border-white/20 text-white/40 hover:border-white/60 hover:text-white transition-all"
            >
              [{useUniversalHome ? '賽博模式' : '專業模式'}]
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default App;

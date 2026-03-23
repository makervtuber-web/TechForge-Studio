
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { UI_TEXT } from '../translations.ts';
import { motion } from 'framer-motion';

interface LogoForgeProps {
  lang: 'en' | 'zh';
}

type LogoStyle = 
  | 'Cyberpunk' | 'Minimalist' | 'Luxury' | 'Pixel Art' | 'Futuristic' 
  | 'Japanese' | 'Bio-Organic' | 'Gothic' | 'Pop Art' | 'Steampunk' 
  | 'Sketch' | 'Isometric' | 'Geometric' | 'Retrowave' | 'Low-Poly';

const LogoForge: React.FC<LogoForgeProps> = ({ lang }) => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<LogoStyle>('Cyberpunk');
  const t = UI_TEXT[lang];

  const styles: { id: LogoStyle; label: string; icon: string }[] = [
    { id: 'Cyberpunk', label: t.style_cyber, icon: '⚡' },
    { id: 'Minimalist', label: t.style_min, icon: '▫️' },
    { id: 'Luxury', label: t.style_lux, icon: '💎' },
    { id: 'Pixel Art', label: t.style_pixel, icon: '👾' },
    { id: 'Futuristic', label: t.style_future, icon: '🚀' },
    { id: 'Japanese', label: t.style_jp, icon: '⛩️' },
    { id: 'Bio-Organic', label: t.style_bio, icon: '👁️' },
    { id: 'Gothic', label: t.style_gothic, icon: '🏰' },
    { id: 'Pop Art', label: t.style_pop, icon: '💥' },
    { id: 'Steampunk', label: t.style_steam, icon: '⚙️' },
    { id: 'Sketch', label: t.style_sketch, icon: '✏️' },
    { id: 'Isometric', label: t.style_iso, icon: '🧊' },
    { id: 'Geometric', label: t.style_geo, icon: '📐' },
    { id: 'Retrowave', label: t.style_retro, icon: '🌴' },
    { id: 'Low-Poly', label: t.style_lowpoly, icon: '🔺' },
  ];

  const forgeLogo = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let styleModifiers = "";
      switch(selectedStyle) {
        case 'Cyberpunk': 
          styleModifiers = "High-tech, neon glowing blue and pink, dark background, glitch effects, robotic, synthwave aesthetic.";
          break;
        case 'Minimalist':
          styleModifiers = "Clean, Swiss design style, black and white, simple shapes, flat vector, plenty of white space, corporate chic.";
          break;
        case 'Luxury':
          styleModifiers = "Gold and silver metallic textures, elegant serif typography, premium branding, dark emerald background, high contrast.";
          break;
        case 'Pixel Art':
          styleModifiers = "8-bit retro gaming style, sharp pixels, limited color palette, nostalgic, low-res aesthetic.";
          break;
        case 'Futuristic':
          styleModifiers = "Curved glass textures, holographic elements, white and light blue, sleek aerospace design, clean sans-serif.";
          break;
        case 'Japanese':
          styleModifiers = "Professional logo design in Japanese aesthetic. Blend of traditional Ukiyo-e elements and modern Tokyo minimalism. Clean lines, Zen-inspired balanced composition, stylized kanji motifs, abstract rising sun or wave patterns. Traditional Japanese color palettes (Indigo, Crimson, Off-white). High-end professional branding, flat vector art, solid background, NO characters or faces.";
          break;
        case 'Bio-Organic':
          styleModifiers = "Giger-inspired, alien textures, organic curves, biological machinery, dark teal and grey.";
          break;
        case 'Gothic':
          styleModifiers = "Dark gothic architecture, ornate filigree, macabre elements, red and black, dramatic lighting.";
          break;
        case 'Pop Art':
          styleModifiers = "Andy Warhol style, bold halftone dots, primary colors, comic book style, high energy.";
          break;
        case 'Steampunk':
          styleModifiers = "Victorian industrial, brass and copper gears, steam pipes, sepia tones, vintage machinery.";
          break;
        case 'Sketch':
          styleModifiers = "Artist pencil sketch, charcoal textures, rough hand-drawn lines, artistic hatching, white paper background.";
          break;
        case 'Isometric':
          styleModifiers = "3D isometric perspective, blocky structural elements, soft studio lighting, pastel colors, architectural tech style.";
          break;
        case 'Geometric':
          styleModifiers = "Golden ratio geometry, abstract shapes, mathematical precision, clean overlapping lines, professional modern logo.";
          break;
        case 'Retrowave':
          styleModifiers = "1980s retro-futurism, scanlines, sunset grid, purple and magenta gradients, VHS aesthetic.";
          break;
        case 'Low-Poly':
          styleModifiers = "Triangular mesh structures, faceted 3D surfaces, vibrant color fields, sharp edges, modern digital art style.";
          break;
      }

      const fullPrompt = `A professional ${selectedStyle} logo for a project named "${prompt}". ${styleModifiers} High-quality professional graphic branding, vector style, centered composition, solid clean background, 8k resolution.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ parts: [{ text: fullPrompt }] }],
        config: { imageConfig: { aspectRatio: "1:1" } }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* 品牌名稱輸入 */}
      <div className="w-full relative">
        <label className="text-[10px] text-white/40 uppercase tracking-[0.3em] mb-2 block font-tech">
          [ BRAND_PROTOCOL_INIT ]
        </label>
        <input 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={lang === 'zh' ? "在此輸入品牌代號..." : "Input brand designation..."}
          className="w-full bg-white/5 border border-white/20 px-4 py-3 text-sm font-tech outline-none focus:border-[#00f3ff] transition-all text-white placeholder:text-white/20"
        />
      </div>

      {/* 風格選擇器 */}
      <div className="w-full">
        <label className="text-[10px] text-[#00f3ff] uppercase tracking-[0.3em] mb-3 block font-tech">
          {t.logo_style_label}
        </label>
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar border border-white/5 p-2 bg-black/20">
          {styles.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStyle(s.id)}
              className={`flex items-center gap-3 px-3 py-3 border text-[9px] font-tech transition-all group ${
                selectedStyle === s.id 
                ? 'border-[#00f3ff] bg-[#00f3ff]/10 text-[#00f3ff] glow-blue shadow-[inset_0_0_10px_rgba(0,243,255,0.2)]' 
                : 'border-white/10 text-white/40 hover:border-white/30 hover:bg-white/5'
              }`}
            >
              <span className={`text-sm transition-transform group-hover:scale-125 ${selectedStyle === s.id ? 'scale-110' : ''}`}>{s.icon}</span>
              <span className="truncate">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* 個人化設計聯絡提示 */}
        <motion.div 
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-[9px] font-tech text-[#00f3ff] uppercase tracking-[0.2em] text-center"
        >
          {t.logo_custom_contact}
        </motion.div>

        {/* 鑄造按鈕 */}
        <button 
          onClick={forgeLogo}
          disabled={loading || !prompt.trim()}
          className={`w-full py-5 border-2 border-[#00f3ff] text-[#00f3ff] font-tech uppercase tracking-[0.4em] font-bold hover:bg-[#00f3ff] hover:text-black transition-all ${
            loading || !prompt.trim() ? 'opacity-30 cursor-not-allowed grayscale' : 'glow-blue active:scale-[0.98]'
          }`}
        >
          {loading ? (lang === 'zh' ? '正在同步視覺神經...' : 'SYNCING_VISUALS...') : (t.logo_btn || "MATERIALIZE_LOGO")}
        </button>
      </div>

      {/* 預覽區域 */}
      <div className="w-full aspect-square border border-white/10 bg-[#020202] relative flex items-center justify-center overflow-hidden shadow-inner">
        {imageUrl ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full p-2">
             <img src={imageUrl} alt="Forged Logo" className="w-full h-full object-contain rounded-sm" />
             <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 text-[7px] font-tech text-[#00f3ff] border border-[#00f3ff]/30">
               PROTO_V{Math.floor(Math.random()*90 + 10)}_RENDER_STABLE
             </div>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-4 px-12 text-center">
            <div className="w-12 h-12 border border-[#00f3ff]/20 rounded-full flex items-center justify-center animate-pulse">
               <div className="w-6 h-6 border-t-2 border-[#00f3ff] rounded-full animate-spin" />
            </div>
            <div className="text-[10px] font-tech opacity-20 uppercase tracking-[0.4em] leading-relaxed">
              {loading ? 'VISUAL_LATENCY_DETECTION' : 'AWAITING_DNA_INPUT_FOR_FORGING'}
            </div>
          </div>
        )}
        
        {/* 四角裝飾 */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/20" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/20" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/20" />
      </div>
    </div>
  );
};

export default LogoForge;

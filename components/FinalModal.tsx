
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MasterBlueprint } from '../types.ts';
import GlitchText from './GlitchText.tsx';
import { UI_TEXT } from '../translations.ts';

interface FinalModalProps {
  blueprint: MasterBlueprint;
  onClose: () => void;
  lang: 'en' | 'zh';
}

const FinalModal: React.FC<FinalModalProps> = ({ blueprint, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const [isForging, setIsForging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const t = UI_TEXT[lang];

  const getThemeColor = () => {
    switch(blueprint.visual.theme) {
      case 'Neon': return '#00f3ff';
      case 'Chrome': return '#ffffff';
      case 'Shadow': return '#ff003c';
      default: return '#39ff14';
    }
  };

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
    const words = lang === 'zh' ? text.split('') : text.split(' ');
    let lines = [];
    let currentLine = '';

    for (let n = 0; n < words.length; n++) {
      let testLine = currentLine + words[n] + (lang === 'zh' ? '' : ' ');
      let metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        lines.push(currentLine);
        currentLine = words[n] + (lang === 'zh' ? '' : ' ');
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const drawBrackets = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) => {
    const size = 30;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(x, y + size); ctx.lineTo(x, y); ctx.lineTo(x + size, y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + w - size, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w, y + size); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, y + h - size); ctx.lineTo(x, y + h); ctx.lineTo(x + size, y + h); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + w - size, y + h); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w, y + h - size); ctx.stroke();
    ctx.fillStyle = color;
    ctx.font = 'bold 11px Orbitron';
    ctx.fillText(`LOC: ${Math.floor(x)},${Math.floor(y)}`, x + 5, y - 8);
  };

  const generateImage = async () => {
    setIsForging(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const color = getThemeColor();
    const width = 1200;
    const sidebarWidth = 70;
    const padding = 100;
    const contentX = sidebarWidth + padding;
    const contentWidth = width - contentX - padding;
    
    // --- 預計算高度 ---
    ctx.font = '28px "JetBrains Mono", monospace';
    const dnaLines = wrapText(ctx, blueprint.creative_dna || "N/A", contentWidth - 80);
    let techLinesTotal = 0;
    const techData = blueprint.technical_spec.stack.map(tech => {
      const wrapped = wrapText(ctx, tech, contentWidth - 140);
      techLinesTotal += wrapped.length;
      return wrapped;
    });

    const dnaBlockH = (dnaLines.length * 48) + 120;
    const techBlockH = (techLinesTotal * 48) + (techData.length * 28) + 100;
    const totalHeight = 650 + dnaBlockH + techBlockH + 450;
    canvas.width = width;
    canvas.height = totalHeight;

    // --- 背景與格網 ---
    ctx.fillStyle = '#030303';
    ctx.fillRect(0, 0, width, totalHeight);
    ctx.strokeStyle = `${color}08`;
    for (let i = 0; i < width; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, totalHeight); ctx.stroke(); }
    for (let i = 0; i < totalHeight; i += 40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke(); }

    // --- 側邊代碼欄 ---
    ctx.fillStyle = `${color}10`;
    ctx.fillRect(0, 0, sidebarWidth, totalHeight);
    ctx.strokeStyle = `${color}30`;
    ctx.beginPath(); ctx.moveTo(sidebarWidth, 0); ctx.lineTo(sidebarWidth, totalHeight); ctx.stroke();
    ctx.save();
    ctx.translate(35, 100);
    ctx.rotate(Math.PI/2);
    ctx.font = '12px "JetBrains Mono"';
    ctx.fillStyle = color;
    for(let i=0; i<30; i++) {
        const hex = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0').toUpperCase();
        ctx.fillText(`0x${hex}..`, i*150, 0);
    }
    ctx.restore();

    let currentY = 180;

    // 1. 標題
    ctx.shadowBlur = 40; ctx.shadowColor = color;
    ctx.fillStyle = color;
    ctx.font = '900 110px Orbitron';
    ctx.fillText((blueprint.identity.projectName || 'CORE_X').toUpperCase(), contentX, currentY);
    ctx.shadowBlur = 0;

    currentY += 60;
    ctx.font = '20px "JetBrains Mono"';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillText(`ID: FORGE_${Math.random().toString(36).substring(7).toUpperCase()} // ${new Date().toLocaleString()}`, contentX, currentY);

    // 2. 核心參數
    currentY += 90;
    const specW = (contentWidth - 40) / 2;
    [
      { label: 'ARCHITECTURE', val: blueprint.identity.purpose },
      { label: 'VISUAL_ENGINE', val: blueprint.visual.style }
    ].forEach((spec, i) => {
      const sx = contentX + (i * (specW + 40));
      ctx.fillStyle = 'rgba(255,255,255,0.02)';
      ctx.fillRect(sx, currentY, specW, 110);
      drawBrackets(ctx, sx, currentY, specW, 110, `${color}40`);
      ctx.fillStyle = color;
      ctx.font = '13px Orbitron';
      ctx.fillText(spec.label, sx + 25, currentY + 40);
      ctx.font = 'bold 26px Orbitron';
      ctx.fillText(spec.val.toUpperCase(), sx + 25, currentY + 80);
    });

    // 3. 創意 DNA
    currentY += 240;
    ctx.fillStyle = color;
    ctx.font = 'bold 36px Orbitron';
    ctx.fillText('> NEURAL_GENETIC_DNA', contentX, currentY);
    
    currentY += 40;
    ctx.fillStyle = 'rgba(255,255,255,0.01)';
    ctx.fillRect(contentX, currentY, contentWidth, dnaBlockH - 60);
    drawBrackets(ctx, contentX, currentY, contentWidth, dnaBlockH - 60, `${color}70`);

    currentY += 70;
    ctx.font = 'italic 30px "JetBrains Mono"';
    ctx.fillStyle = 'white';
    dnaLines.forEach((line, i) => {
      ctx.fillText(line.trim(), contentX + 45, currentY + (i * 48));
    });

    // 4. 技術清單
    currentY += (dnaLines.length * 48) + 130;
    ctx.fillStyle = color;
    ctx.font = 'bold 36px Orbitron';
    ctx.fillText('> MATERIAL_MANIFEST', contentX, currentY);

    currentY += 60;
    techData.forEach((lines, i) => {
      const blockH = (lines.length * 48) + 15;
      ctx.fillStyle = 'rgba(255,255,255,0.03)';
      ctx.fillRect(contentX, currentY - 35, contentWidth, blockH);
      ctx.fillStyle = color;
      ctx.fillRect(contentX, currentY - 35, 8, blockH);
      
      lines.forEach((line, idx) => {
        ctx.fillStyle = 'white';
        ctx.font = '26px "JetBrains Mono"';
        const prefix = idx === 0 ? `[#${(i+1).toString().padStart(2, '0')}] ` : '      ';
        ctx.fillText(prefix + line, contentX + 35, currentY + (idx * 48));
      });
      currentY += blockH + 30;
    });

    // 5. 底部認證
    currentY += 140;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(contentX, currentY); ctx.lineTo(contentX + contentWidth, currentY); ctx.stroke();

    currentY += 60;
    ctx.fillStyle = '#39ff14';
    ctx.font = 'bold 30px Orbitron';
    ctx.fillText('CERTIFIED BY CORE_ENGINE_V2.0.7', contentX, currentY);

    // 印章
    ctx.save();
    ctx.translate(width - 340, currentY - 60);
    ctx.rotate(-0.05);
    ctx.strokeStyle = '#39ff14';
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, 260, 140);
    ctx.fillStyle = 'rgba(57, 255, 20, 0.05)';
    ctx.fillRect(0, 0, 260, 140);
    ctx.fillStyle = '#39ff14';
    ctx.font = '900 60px Orbitron';
    ctx.fillText('99.9%', 50, 80);
    ctx.font = 'bold 16px Orbitron';
    ctx.fillText('VERIFIED_SUCCESS', 50, 115);
    ctx.restore();

    setTimeout(() => {
      try {
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.download = `PROTO_BLUEPRINT_${blueprint.identity.projectName.toUpperCase()}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error(e);
      } finally {
        setIsForging(false);
      }
    }, 1500);
  };

  const sendEmail = () => {
    const email = "makervtuber@gmail.com";
    const subject = encodeURIComponent(`${t.email_subject} ${blueprint.identity.projectName}`);
    const body = encodeURIComponent(
      `--- CYBER-FORGE 2077 TRANSMISSION ---\n\n` +
      `PROJECT: ${blueprint.identity.projectName}\n` +
      `CONTACT: ${blueprint.identity.contact}\n` + // 包含聯絡資訊
      `ARCH: ${blueprint.identity.purpose}\n` +
      `STYLE: ${blueprint.visual.style}\n\n` +
      `[ CREATIVE DNA ]\n${blueprint.creative_dna}\n\n` +
      `[ TECH STACK ]\n${blueprint.technical_spec.stack.join(', ')}\n\n` +
      `--- END OF TRANSMISSION ---`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-10 overflow-y-auto bg-black/95 backdrop-blur-3xl">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }} 
        className="relative w-full max-w-2xl bg-[#080808] border-2 border-[#39ff14] rounded-none p-6 md:p-12 z-10 shadow-[0_0_120px_rgba(57,255,20,0.15)]"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-[#39ff14] glow-green" />
        <canvas ref={canvasRef} className="hidden" />

        <div className="relative z-10 text-center">
          <GlitchText text={t.mission_complete} className="text-4xl md:text-5xl mb-4" color="#39ff14" />
          <p className="text-[#39ff14]/70 text-xs md:text-sm mb-10 font-tech uppercase tracking-[0.5em]">{t.mission_desc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button 
              onClick={generateImage} disabled={isForging}
              className={`flex items-center justify-center gap-4 p-6 bg-white/5 border border-[#00f3ff] text-[#00f3ff] font-tech uppercase text-xs hover:bg-[#00f3ff] hover:text-black transition-all glow-blue ${isForging ? 'opacity-50' : ''}`}
            >
              <span className={isForging ? 'animate-spin' : ''}>{isForging ? '⚙' : '⏍'}</span>
              {isForging ? t.forging : t.download_btn}
            </button>
            <button onClick={sendEmail} className="flex items-center justify-center gap-4 p-6 bg-[#ff003c]/10 border border-[#ff003c] text-[#ff003c] font-tech uppercase text-xs hover:bg-[#ff003c] hover:text-white transition-all glow-pink">
              <span>✉ 發送協議至工程師</span>
            </button>
          </div>

          <div className="p-8 border border-white/10 bg-[#39ff14]/5 text-xs text-white/70 border-l-4 border-l-[#39ff14] mb-10 text-left leading-relaxed">
            <div className="flex items-center gap-3 mb-3">
               <div className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
               <span className="font-tech text-[#39ff14] tracking-widest">{t.connection_est}</span>
            </div>
            <p className="font-tech opacity-80 italic">{t.engineer_note}</p>
          </div>
          
          <button 
            onClick={onClose} 
            className="w-full py-4 text-[10px] text-white/20 hover:text-[#ff003c] border border-white/5 hover:border-[#ff003c]/30 font-tech uppercase tracking-[0.8em] transition-all"
          >
            {t.close_conn}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalModal;

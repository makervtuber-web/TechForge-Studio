
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { UI_TEXT } from '../translations.ts';

interface NeuralAdvisorProps {
  lang: 'en' | 'zh';
  isOracle?: boolean;
}

const NeuralAdvisor: React.FC<NeuralAdvisorProps> = ({ lang, isOracle }) => {
  const t = UI_TEXT[lang];
  const initialMsg = isOracle 
    ? (lang === 'zh' ? '我是創投先知。輸入你的創業點子，我會告訴你為什麼它會失敗... 或者如何活下來。' : 'I am the Venture Oracle. Input your idea, and I will tell you why it will fail... or how to survive.')
    : (lang === 'zh' ? '我是鑄造廠 AI 顧問。有什麼我能幫你的嗎？' : 'I am the Forge AI Advisor. How can I assist your project?');

  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: initialMsg }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemPrompt = isOracle 
        ? `You are a ruthless Venture Capitalist from 2077. Analyze the user's startup idea. Be brutal, cynical, but strategically brilliant. Focus on market saturation, technical debt, and profitability. Use cyberpunk slang. Respond in ${lang === 'zh' ? 'Traditional Chinese' : 'English'}. Keep responses concise.`
        : `You are a brilliant Cyber-Forge Engineer from 2077. Your tone is cold, tech-heavy, and professional. Use cyberpunk slang. Respond in ${lang === 'zh' ? 'Traditional Chinese' : 'English'}. Keep responses concise.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.9,
        }
      });

      const aiText = response.text || (lang === 'zh' ? '通訊失敗... 請重試。' : 'Transmission failed... Retry.');
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Error: Connection lost.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[400px]">
      <div ref={scrollRef} className="flex-1 space-y-4 mb-4 overflow-y-auto pr-2 custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`px-4 py-2 rounded-sm text-xs leading-relaxed max-w-[85%] ${m.role === 'user' ? 'bg-[#00f3ff]/10 text-[#00f3ff] border border-[#00f3ff]/20' : 'bg-white/5 text-white/80 border border-white/10'}`}>
              <div className="text-[8px] font-tech uppercase opacity-40 mb-1">{m.role === 'user' ? 'SUBJECT' : (isOracle ? 'ORACLE' : 'SYSTEM')}</div>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-[10px] font-tech text-[#00f3ff] animate-pulse">UPLOADING_QUERY...</div>}
      </div>
      
      <div className="flex gap-2 border-t border-white/10 pt-4">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={isOracle ? t.oracle_hint : t.ai_placeholder}
          className="flex-1 bg-white/5 border border-white/10 px-4 py-2 text-xs outline-none focus:border-[#00f3ff] transition-colors"
        />
        <button onClick={handleSend} className="px-4 py-2 bg-[#00f3ff] text-black font-tech text-xs uppercase hover:bg-[#39ff14] transition-colors whitespace-nowrap">
          {t.ai_send}
        </button>
      </div>
    </div>
  );
};

export default NeuralAdvisor;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Star, Infinity, RefreshCw, Sparkles, User, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export default function KenosChatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'kenos', text: "Iniciado, soy Kenos. He bajado de las estrellas para enseñarte a organizar tu territorio. ¿Qué duda aflige tu espíritu sobre el ciclo del barro?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/kenos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'kenos', text: data.text }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'kenos', text: "Las nubes de Temáukel cubren mi visión estelar... intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "flex flex-col h-full w-full max-w-5xl shadow-2xl transition-all duration-700",
          "bg-white/80 backdrop-blur-3xl border border-white/60", // DÍA: Glass Tierra sin negros
          "dark:bg-[#050A0F]/80 dark:backdrop-blur-3xl dark:border-emerald-500/20", // NOCHE: Obsidiana
          "rounded-[3rem] md:rounded-[4rem] overflow-hidden"
        )}
      >
        {/* CABECERA CON PULSO */}
        <header className="p-8 md:p-12 border-b border-emerald-500/10 dark:border-white/5 flex items-center justify-between relative overflow-hidden">
          <div className="flex items-center gap-6 relative z-10">
            <div className="relative">
              <div className="w-20 h-20 bg-emerald-600 dark:bg-emerald-500 rounded-[2rem] flex items-center justify-center text-white dark:text-stone-900 shadow-2xl">
                <Star size={40} fill="currentColor" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <div>
              <h3 className="font-black text-emerald-900 dark:text-white text-3xl tracking-tighter leading-none">KENOS</h3>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-400 mt-3 flex items-center gap-2">
                <ShieldCheck size={14} /> Legislador del Suelo Vivo
              </p>
            </div>
          </div>
          <Infinity className="text-emerald-600/5 absolute -right-10 opacity-50" size={200} />
        </header>

        {/* CHAT */}
        <div ref={scrollRef} className="flex-grow p-8 md:p-14 overflow-y-auto space-y-12 scrollbar-hide">
          {messages.map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={cn("flex gap-6", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}
            >
              <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg",
                  msg.role === 'user' ? "bg-emerald-600 text-white" : "bg-white dark:bg-emerald-500 text-emerald-600 dark:text-stone-900"
              )}>
                  {msg.role === 'user' ? <User size={20} /> : <Star size={20} fill="currentColor" />}
              </div>
              <div className={cn(
                "p-8 rounded-[2.5rem] text-base md:text-xl font-medium leading-relaxed shadow-xl max-w-[80%]",
                msg.role === 'user' 
                  ? "bg-emerald-600 text-white rounded-tr-none" 
                  : "bg-white/90 dark:bg-emerald-950/30 text-stone-800 dark:text-emerald-50 rounded-tl-none border border-emerald-50 dark:border-emerald-500/10"
              )}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-4 p-6 bg-emerald-500/10 rounded-full w-32 justify-center">
              <RefreshCw size={24} className="animate-spin text-emerald-500" />
            </div>
          )}
        </div>

        {/* FOOTER MASIVO */}
        <footer className="p-10 md:p-16 bg-emerald-50/20 dark:bg-black/40 border-t border-emerald-500/10 dark:border-white/5">
          <div className="relative max-w-4xl mx-auto">
            <input 
              type="text"
              placeholder="Habla con el Arquitecto..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="w-full bg-white dark:bg-slate-800/80 border-2 border-emerald-100 dark:border-transparent focus:border-emerald-500/40 rounded-full py-8 md:py-10 px-12 md:px-16 text-xl md:text-2xl focus:outline-none transition-all shadow-2xl dark:text-white"
            />
            <button 
              onClick={handleSend}
              className="absolute right-4 top-4 w-16 h-16 md:w-24 md:h-24 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              <Send size={32} />
            </button>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
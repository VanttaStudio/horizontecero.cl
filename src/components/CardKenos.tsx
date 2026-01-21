import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, Bot, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from './Button'; // Usamos tu botón PRO recién creado

export default function CardKenos() {
  const [isHovered, setIsHovered] = useState(false);
  const [typingStep, setTypingStep] = useState(0);

  // Simulación simple de chat al pasar el mouse
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHovered) {
      setTypingStep(1); // Empieza usuario
      interval = setInterval(() => {
        setTypingStep(prev => (prev < 3 ? prev + 1 : prev));
      }, 1500);
    } else {
      setTypingStep(0); // Reset
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col lg:flex-row items-center justify-between overflow-hidden rounded-[2.5rem] p-8 md:p-12",
        // Fondo Glass Tierra (Día) / Oscuro (Noche)
        "bg-[#F0EEE5]/80 backdrop-blur-xl border border-white/40 shadow-2xl",
        "dark:bg-slate-900/60 dark:border-white/10"
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      
      {/* --- Lado Izquierdo: Info --- */}
      <div className="relative z-10 flex-1 pr-0 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0">
        
        {/* Badge Animado */}
        <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/50 px-3 py-1 text-xs font-bold tracking-wider text-stone-600 dark:bg-slate-800 dark:text-blue-300 dark:border-slate-600 mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-secondary-dark)]"></span>
          </span>
          IA ACTIVA 24/7
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white mb-4 leading-tight">
          ¿Dudas con tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary-dark)] to-emerald-600 dark:from-[var(--color-secondary)] dark:to-emerald-400">lombrices?</span>
        </h2>
        
        <p className="text-lg text-stone-600 dark:text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
          No esperes a un experto. Pregúntale a <strong className="text-stone-900 dark:text-white">KenosChat</strong> sobre humedad, pH, plagas o cómo cosechar tu humus.
        </p>

        <Button href="/kenos" variant="primary">
           <MessageCircle className="w-5 h-5" />
           Chatear con Kenos
        </Button>
      </div>

      {/* --- Lado Derecho: Interfaz Visual (Mockup) --- */}
      <div className="relative w-full max-w-sm lg:w-auto flex justify-center perspective-1000">
        
        {/* Efecto de fondo brillante detrás del teléfono */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)]/20 to-blue-500/20 blur-3xl rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-700" />

        <motion.div 
          className="relative w-72 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-[6px] border-stone-200 dark:border-slate-700"
          animate={{ 
            rotateY: isHovered ? 0 : -5,
            rotateX: isHovered ? 0 : 5,
            scale: isHovered ? 1.02 : 1
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Header del Chat */}
          <div className="bg-stone-900 dark:bg-slate-950 p-4 flex items-center gap-3 text-white">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-emerald-600 flex items-center justify-center shadow-lg">
                    <Bot size={20} className="text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-stone-900 rounded-full"></div>
            </div>
            <div>
                <div className="font-bold text-sm">Kenos AI</div>
                <div className="text-[10px] text-stone-400">Siempre disponible</div>
            </div>
          </div>

          {/* Cuerpo del Chat */}
          <div className="h-64 bg-stone-50 dark:bg-slate-900/50 p-4 flex flex-col gap-3 overflow-hidden relative">
             <div className="absolute inset-0 bg-[url('/images/chat-pattern.png')] opacity-5 pointer-events-none"></div>

             {/* Mensaje Bienvenida (Siempre visible) */}
             <div className="self-start bg-white dark:bg-slate-700 rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[85%] text-xs text-stone-600 dark:text-slate-200 border border-stone-100 dark:border-slate-600">
                <p>Hola 👋 Soy tu asistente de cultivo. ¿En qué te ayudo?</p>
                <span className="text-[9px] text-stone-400 mt-1 block text-right">10:00 AM</span>
             </div>

             {/* Mensaje Usuario (Aparece al hover) */}
             <AnimatePresence>
                {typingStep >= 1 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="self-end bg-[var(--color-secondary)] text-white rounded-2xl rounded-tr-none p-3 shadow-md max-w-[85%] text-xs"
                    >
                        <p>¿Qué comen las lombrices? 🍎</p>
                        <span className="text-[9px] text-green-100 mt-1 flex justify-end gap-1 items-center">
                            10:01 AM <CheckCircle2 size={8} />
                        </span>
                    </motion.div>
                )}
             </AnimatePresence>

             {/* Indicador Escribiendo... */}
             <AnimatePresence>
                {typingStep === 2 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="self-start bg-stone-200 dark:bg-slate-700 rounded-full px-3 py-2 flex gap-1 items-center w-fit"
                    >
                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-75"></span>
                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-150"></span>
                    </motion.div>
                )}
             </AnimatePresence>

             {/* Respuesta IA */}
             <AnimatePresence>
                {typingStep >= 3 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="self-start bg-white dark:bg-slate-700 rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[90%] text-xs text-stone-600 dark:text-slate-200 border border-stone-100 dark:border-slate-600"
                    >
                        <div className="flex items-center gap-1 mb-1 text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] font-bold text-[10px]">
                            <Sparkles size={10} />
                            Respuesta Inteligente
                        </div>
                        <p>Les encantan los restos de frutas y verduras no cítricas, borra de café y cáscaras de huevo molidas. ¡Evita lácteos y carnes! 🚫🥩</p>
                    </motion.div>
                )}
             </AnimatePresence>

          </div>
        </motion.div>
      </div>

    </motion.div>
  );
}
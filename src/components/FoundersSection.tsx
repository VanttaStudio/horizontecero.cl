import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, BadgeCheck, Quote, Info } from 'lucide-react';
import { cn } from '../lib/utils';

// 1. SUB-COMPONENTE: Nuestra Raíz (El recuadro de Horizonte O)
const AboutRoot = () => (
  <div className="max-w-5xl mx-auto mb-20 px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-[3rem] overflow-hidden border transition-all duration-500",
        // MODO DÍA: Vidrio claro con texto oscuro
        "bg-[#F0EEE5]/95 backdrop-blur-xl border-stone-200 shadow-xl shadow-stone-200/50",
        // MODO NOCHE: Vidrio oscuro con texto claro
        "dark:bg-slate-900/60 dark:border-white/10 dark:shadow-none"
      )}
    >
      <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--color-secondary)]/10 blur-[60px] pointer-events-none" />

      <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-6">
          Nuestra <span className="text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)]">Raíz</span>
        </h2>
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[var(--color-secondary)] text-stone-900 font-black text-xs uppercase tracking-widest shadow-lg">
           Horizonte O
        </div>
      </div>

      <div className="md:col-span-7 bg-white/40 dark:bg-slate-800/40 p-8 rounded-[2rem] border border-stone-200 dark:border-white/5 relative">
        <div className="absolute -top-3 -left-3 bg-[var(--color-secondary)] p-2 rounded-lg text-stone-900 shadow-lg">
          <Info size={18} />
        </div>
        <p className="text-lg text-stone-800 dark:text-stone-100 leading-relaxed font-medium">
          El nombre <strong className="text-stone-950 dark:text-white">Horizonte Cero</strong> nace de la clasificación del suelo, donde el 
          <span className="text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] font-bold"> 'Horizonte O'</span> es la primera capa, rica en materia orgánica y cuna de la vida. 
        </p>
        <p className="mt-4 text-stone-600 dark:text-stone-400 leading-relaxed">
          Representa nuestro punto de partida para regenerar, reconectar y construir un futuro sostenible desde la base.
        </p>
      </div>
    </motion.div>
  </div>
);

const founders = [
  {
    name: "César Rosales",
    role: "Agrónomo & Director",
    emoji: "👨🏻‍🌾", 
    bio: "Con más de 18 años gestionando la tierra y una herencia apícola familiar. Lidera la visión regenerativa de Horizonte Cero en la Patagonia.",
    quote: "El respeto por la tierra es la base de mi trabajo."
  },
  {
    name: "Jorge González",
    role: "Agrónomo & Operaciones",
    emoji: "🌿", 
    bio: "Experto en industria vitivinícola y gestión de calidad. Aporta la estructura estratégica para escalar la eco-sostenibilidad.",
    quote: "Pequeñas acciones construyen un futuro sostenible."
  }
];

export default function FoundersSection() {
  return (
    <section className="mb-32 w-full pt-10">
      
      {/* 2. EXPLICACIÓN DEL NOMBRE */}
      <AboutRoot />

      {/* 3. ENCABEZADO ENCUADRADO (Corregido para legibilidad) */}
      <div className="flex justify-center mb-16 px-4">
        <div className={cn(
            "inline-block text-center p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500",
            "bg-[#F0EEE5]/95 border-stone-200 shadow-xl shadow-stone-200/40",
            "dark:bg-slate-900/60 dark:border-white/10 dark:shadow-none"
        )}>
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] text-xs font-bold uppercase tracking-widest mb-4 border border-[var(--color-secondary)]/20">
                <Sprout size={12} />
                Mentes detrás del proyecto
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white leading-none">
                Liderazgo <span className="text-stone-500 dark:text-stone-400">Patagónico</span>
            </h2>
        </div>
      </div>

      {/* 4. TARJETAS DE FUNDADORES */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              "group relative flex flex-col p-8 md:p-10 rounded-[3rem] border transition-all duration-500",
              "bg-[#F0EEE5]/80 border-stone-200 backdrop-blur-xl shadow-lg shadow-stone-200/50",
              "dark:bg-slate-900/60 dark:border-white/10 dark:shadow-none",
              "hover:-translate-y-2 hover:border-[var(--color-secondary)]/30"
            )}
          >
            <div className="flex items-start gap-5 mb-8 relative z-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white dark:bg-slate-700 text-4xl shadow-inner border border-stone-200 dark:border-white/10 transition-transform group-hover:scale-110">
                <span>{founder.emoji}</span>
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-1">
                  {founder.name}
                </h3>
                <span className="text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400">
                   {founder.role}
                </span>
              </div>
            </div>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-8 flex-grow font-medium">
              {founder.bio}
            </p>
            <div className="relative mt-auto pt-6 border-t border-stone-300 dark:border-white/10">
              <p className="text-sm italic text-stone-500 dark:text-stone-400 pl-4 border-l-2 border-[var(--color-secondary)]">
                "{founder.quote}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
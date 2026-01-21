import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export default function AboutRoot() {
  return (
    <div className="max-w-5xl mx-auto mb-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] overflow-hidden shadow-2xl"
      >
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--color-secondary)]/10 blur-[60px] pointer-events-none" />

        {/* Lado Izquierdo: Título y Badge */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nuestra <span className="text-[var(--color-secondary)]">Raíz</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[var(--color-secondary)] text-stone-900 font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(61,255,22,0.3)]">
             Horizonte O
          </div>
        </div>

        {/* Lado Derecho: Explicación Técnica */}
        <div className="md:col-span-7 bg-slate-800/50 p-8 rounded-[2rem] border border-white/5 relative group">
          <div className="absolute -top-3 -left-3 bg-[var(--color-secondary)] p-2 rounded-lg text-stone-900 shadow-lg">
            <Info size={18} />
          </div>
          <p className="text-lg text-stone-200 leading-relaxed font-medium">
            El nombre <strong className="text-white">Horizonte Cero</strong> nace de la clasificación del suelo, donde el 
            <span className="text-[var(--color-secondary)] font-bold"> 'Horizonte O'</span> es la primera capa, rica en materia orgánica y cuna de la vida. 
          </p>
          <p className="mt-4 text-stone-400 leading-relaxed">
            Representa nuestro punto de partida para regenerar, reconectar y construir un futuro sostenible desde la base.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';

// Sub-componente para animar el número
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2 // Duración del conteo en segundos
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    // Suscribirse a los cambios para actualizar el texto sin re-renderizar todo React (Rendimiento puro)
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Redondeamos el número y le agregamos el sufijo (+, k, etc.)
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums" />; // tabular-nums evita que el ancho cambie mientras cuenta
};

export default function StatsSection() {
  return (
    <motion.div 
      className={cn(
        "flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0",
        "rounded-3xl p-10 mb-20",
        // Estilos Glassmorphism adaptativos (Día/Noche)
        "backdrop-blur-md shadow-2xl",
        "bg-white/70 border border-white/50", // Día: Blanco translúcido
        "dark:bg-slate-900/80 dark:border-white/10" // Noche: Oscuro translúcido
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      
      {/* BLOQUE 1 */}
      <div className="flex flex-col items-center text-center">
        <span className="text-5xl md:text-6xl font-black text-[var(--color-secondary)] drop-shadow-sm">
          <Counter value={18} suffix="+" />
        </span>
        <span className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
          Años Experiencia
        </span>
      </div>

      {/* DIVIDER (Vertical en Desktop, Horizontal en Móvil) */}
      <div className="w-24 h-px bg-slate-300 dark:bg-slate-700 md:w-px md:h-24"></div>

      {/* BLOQUE 2 */}
      <div className="flex flex-col items-center text-center">
        <span className="text-5xl md:text-6xl font-black text-[var(--color-secondary)] drop-shadow-sm">
          <Counter value={10} suffix="+" />
        </span>
        <span className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
          Ton. Transformadas
        </span>
      </div>

      {/* DIVIDER */}
      <div className="w-24 h-px bg-slate-300 dark:bg-slate-700 md:w-px md:h-24"></div>

      {/* BLOQUE 3 */}
      <div className="flex flex-col items-center text-center">
        <span className="text-5xl md:text-6xl font-black text-[var(--color-secondary)] drop-shadow-sm">
          <Counter value={200} suffix="+" />
        </span>
        <span className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
          Capacitados
        </span>
      </div>

    </motion.div>
  );
}
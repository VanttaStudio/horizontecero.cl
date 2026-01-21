import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, RefreshCw, Users } from 'lucide-react';
import { cn } from '../lib/utils';

const pillars = [
  {
    id: "01",
    title: "Combate Climático",
    description: "Al desviar residuos orgánicos del vertedero, evitamos la generación de gas metano, un potente gas de efecto invernadero.",
    icon: Leaf,
    color: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: "02",
    title: "Economía Circular",
    description: "Transformamos un problema (basura) en oportunidad. El residuo se convierte en Humus vivo, un producto de alto valor comercial local.",
    icon: RefreshCw,
    color: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "03",
    title: "Autonomía Local",
    description: "Reducimos la dependencia de fertilizantes importados. Magallanes fortalece su capacidad para cultivar sus propios alimentos sanos.",
    icon: Users,
    color: "text-amber-700 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    border: "group-hover:border-amber-500/50"
  }
];

export default function DnaSection() {
  return (
    <section className="w-full relative z-10">
      
      {/* EL TÍTULO SE ELIMINÓ DE AQUÍ PORQUE YA ESTÁ EN INDEX.ASTRO CON EL RECUADRO */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-[3rem] p-8 md:p-10 transition-all duration-500 border",
              // MODO DÍA: Vidrio beige contrastado
              "bg-[#F0EEE5]/90 border-stone-200 backdrop-blur-xl shadow-xl shadow-stone-200/40",
              // MODO NOCHE: Vidrio oscuro
              "dark:bg-slate-900/60 dark:border-white/10 dark:shadow-none",
              // HOVER
              "hover:-translate-y-2 hover:shadow-2xl",
              card.border
            )}
          >
            
            {/* NÚMERO DECORATIVO GIGANTE (Ajustado para ambos modos) */}
            <span className="absolute -right-4 -top-4 text-[8rem] font-black text-stone-900/5 dark:text-slate-700/20 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                {card.id}
            </span>

            {/* ICONO */}
            <div className={cn(
              "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner transition-transform duration-300 group-hover:scale-110 relative z-10",
              card.bg,
              card.color
            )}>
              <card.icon size={32} strokeWidth={1.5} />
            </div>

            {/* CONTENIDO */}
            <div className="relative z-10">
                {/* Título: stone-900 para Modo Claro */}
                <h3 className="mb-4 text-2xl font-black text-stone-900 dark:text-white">
                    {card.title}
                </h3>

                {/* Descripción: stone-700 para Modo Claro */}
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed font-medium">
                    {card.description}
                </p>
            </div>

            {/* Decoración Inferior */}
            <div className={cn(
                "absolute bottom-0 left-0 h-1.5 w-0 transition-all duration-700 group-hover:w-full opacity-70",
                "bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent"
            )} />

          </motion.div>
        ))}
      </div>
    </section>
  );
}
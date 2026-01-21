import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ArrowRight, type LucideIcon } from 'lucide-react';

// Definimos los tipos para que TypeScript no bloquee el componente
interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon; // Importante: Definimos que esto es un icono de Lucide
  isCore?: boolean;
  href?: string;
}

export default function ServiceCard({ title, description, icon: Icon, isCore, href }: ServiceCardProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        // BASE
        "group relative flex flex-col rounded-3xl p-8 transition-all duration-300 border backdrop-blur-md overflow-hidden",
        
        // MODO DÍA
        "bg-white/80 border-white/60 shadow-lg hover:shadow-xl hover:border-blue-300",

        // MODO NOCHE
        "dark:bg-slate-900/80 dark:border-white/10 dark:shadow-none dark:hover:bg-slate-800/90 dark:hover:border-[var(--color-secondary)]/50",

        // ESTILO CORE
        isCore 
          ? "border-[var(--color-secondary)] dark:border-[var(--color-secondary)] ring-1 ring-[var(--color-secondary)]/50" 
          : "hover:-translate-y-1"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {isCore && (
        <div className="absolute top-0 right-0 rounded-bl-xl rounded-tr-3xl bg-[var(--color-secondary)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm z-20">
          Core
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-white/5" />

      <div className={cn(
        "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-inner",
        isCore 
          ? "bg-[#dcfce7] text-[var(--color-secondary-dark)] dark:bg-green-900/40 dark:text-[var(--color-secondary)]" 
          : "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
      )}>
        {/* Renderizado seguro del icono */}
        {Icon && <Icon size={28} strokeWidth={1.5} />}
      </div>

      <h3 className="relative z-10 mb-3 text-xl font-bold text-slate-800 dark:text-white">
        {title}
      </h3>

      <div 
        className="relative z-10 mb-6 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-300" 
        dangerouslySetInnerHTML={{ __html: description }} 
      />

      <div className="relative z-10 mt-auto flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:text-[var(--color-secondary)] transition-colors">
        {isCore ? 'Descubrir Modelo' : 'Saber más'}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react'; // Cambié a flecha abajo para indicar scroll

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 60, damping: 20 }
  }
};

export default function HeroContent({ title, subtitle, buttonText, buttonHref }) {
  return (
    <motion.div 
      className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-center md:items-end text-center md:text-right mt-16 md:mt-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* 1. BADGE (Innovación) */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-widest shadow-lg">
           <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse"></span>
           Innovación en Chile
        </div>
      </motion.div>

      {/* 2. TÍTULO PRINCIPAL */}
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white drop-shadow-2xl text-balance max-w-4xl"
        variants={itemVariants}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* 3. SUBTÍTULO */}
      {subtitle && (
        <motion.p 
          className="mt-6 text-lg md:text-2xl text-stone-100 max-w-2xl font-medium leading-relaxed drop-shadow-lg text-balance"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}

      {/* 4. BOTÓN DE ACCIÓN */}
      <motion.div variants={itemVariants} className="mt-10">
        <a 
          href={buttonHref}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--color-secondary)] px-10 py-4 font-bold text-white transition-all duration-300 hover:bg-[var(--color-secondary-dark)] hover:shadow-[0_0_40px_rgba(61,255,22,0.4)]"
        >
          <span className="relative z-10 flex items-center gap-2 text-lg">
             {buttonText}
             <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
          </span>
          
          {/* Brillo interno (Shine) */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </motion.div>

    </motion.div>
  );
}
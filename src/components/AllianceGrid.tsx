import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, ArrowUpRight, ShieldCheck } from 'lucide-react';

const partners = [
  "EcoSistemas Sur",
  "Fundación Regenera",
  "TerraViva Corp.",
  "Semillas del Fin del Mundo",
  "Aqua Pura",
  "Corfo",
  "Municipalidad"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Efecto cascada rápido
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function AllianceGrid() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      
      {/* 1. ENCABEZADO MEJORADO */}
      <div className="text-center mb-16">
        <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] text-xs font-bold tracking-widest uppercase mb-4"
        >
            <Handshake size={14} />
            Colaboración Estratégica
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white mb-4">
            Tejiendo Redes <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-500 to-stone-800 dark:from-stone-200 dark:to-stone-500">Regenerativas</span>
        </h2>
        <p className="text-stone-600 dark:text-slate-400 max-w-2xl mx-auto">
            Trabajamos con las organizaciones líderes que impulsan la sostenibilidad en la Patagonia.
        </p>
      </div>

      {/* 2. GRID INTERACTIVO */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
          >
            {/* Tarjeta Glass */}
            <div className="
                relative overflow-hidden h-32 flex flex-col items-center justify-center p-6 text-center
                bg-[#F5F2EB]/80 dark:bg-white/5 
                backdrop-blur-md rounded-2xl
                border border-stone-200 dark:border-white/10
                shadow-sm
                transition-all duration-300 ease-out
                group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-[var(--color-secondary)]/50
                group-hover:bg-white dark:group-hover:bg-white/10
            ">
                
                {/* Icono decorativo flotante (Marca de agua) */}
                <ShieldCheck className="absolute top-3 right-3 text-stone-300 dark:text-white/5 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-12" />

                {/* Texto del Partner */}
                <span className="relative z-10 font-bold text-stone-700 dark:text-stone-200 text-sm md:text-base leading-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                  {partner}
                </span>
                
                {/* Subtexto decorativo */}
                <span className="relative z-10 text-[10px] text-stone-400 mt-2 font-mono opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    PARTNER VERIFICADO
                </span>

                {/* EFECTO DE BRILLO (SHINE) al pasar el mouse */}
                <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shine_1s_ease-in-out] bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent z-0 pointer-events-none" />
            
            </div>
            
            {/* Decoración inferior (Borde activo) */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[var(--color-secondary)] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-100 blur-[2px]" />
          
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animación del Shine en CSS puro para no complicar Tailwind config */}
      <style>{`
        @keyframes shine {
            100% { transform: translateX(100%); }
        }
      `}</style>

    </section>
  );
}
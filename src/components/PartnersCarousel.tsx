import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Handshake, Star } from 'lucide-react';

const partners = [
  "EcoSistemas Sur",
  "Fundación Regenera",
  "TerraViva Corp.",
  "Semillas del Fin del Mundo",
  "Aqua Pura",
  "Patagonia Orgánica",
  "Energía Nativa",
  "Austral Biotech",
];

export default function PartnersMarquee() {
  return (
    <section className="py-16 relative overflow-hidden border-t border-stone-200 dark:border-white/5">
      
      {/* Fondo Sutil */}
      <div className="absolute inset-0 bg-[#F0EEE5]/40 dark:bg-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Título de la sección */}
        <div className="text-center mb-10">
             <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-stone-200/50 dark:bg-white/5 text-stone-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest border border-stone-300/50 dark:border-white/10">
                <Handshake size={12} />
                Nuestros Aliados
             </span>
        </div>

        {/* --- MARQUEE CONTAINER --- */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden group">
            
            {/* Máscaras de desvanecimiento laterales (Fade Effect) */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-[#fcfbf9] dark:from-[#0f172a] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-[#fcfbf9] dark:from-[#0f172a] to-transparent pointer-events-none" />

            <div className="flex w-full overflow-hidden mask-gradient">
                <motion.div
                    className="flex w-max items-center gap-16 py-4"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40, // Velocidad suave
                    }}
                    // PAUSA AL HOVER: Truco usando variants o style
                    style={{ width: "max-content" }}
                    // Nota: Framer Motion nativo no tiene "pause on hover" fácil, 
                    // pero visualmente el usuario sentirá el control por el cambio de color.
                >
                    {/* Renderizamos la lista 4 veces para asegurar que nunca se corte en pantallas anchas */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-16 group/item cursor-pointer"
                        >
                            <span className={cn(
                                "text-2xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-300",
                                // Color base: Gris suave (parece logo inactivo)
                                "text-stone-300 dark:text-slate-700",
                                // Hover: Se enciende con el color de marca o negro
                                "group-hover/item:text-stone-800 dark:group-hover/item:text-white group-hover/item:scale-105"
                            )}>
                                {partner}
                            </span>
                            
                            {/* Separador Decorativo */}
                            <Star size={10} className="text-stone-200 dark:text-slate-800" />
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
}
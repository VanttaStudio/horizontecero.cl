import React from 'react';
import { Handshake } from 'lucide-react';

const partners = [
  "EcoSistemas Sur", "Fundación Regenera", "TerraViva Corp.", 
  "Semillas del Fin del Mundo", "Aqua Pura", "Municipalidad de Punta Arenas",
  "Corfo", "U. de Magallanes"
];

export default function PartnersMarquee() {
  return (
    <section className="py-12 border-y border-stone-200 dark:border-white/5 bg-[#F0EEE5]/50 dark:bg-black/20 backdrop-blur-sm overflow-hidden">
      
      <div className="text-center mb-8">
         <span className="text-xs font-bold tracking-[0.2em] text-stone-500 dark:text-stone-400 uppercase flex items-center justify-center gap-2">
            <Handshake size={14} className="text-[var(--color-secondary)]" />
            Nuestra Red de Confianza
         </span>
      </div>

      {/* CONTENEDOR DESLIZANTE */}
      <div className="relative flex overflow-x-hidden group">
        
        {/* GRADIANTES LATERALES PARA SUAVIZAR BORDES (TOQUE PRO) */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F0EEE5] to-transparent dark:from-[#1a1a1a] dark:to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F0EEE5] to-transparent dark:from-[#1a1a1a] dark:to-transparent"></div>

        {/* TIRA DE TEXTO ANIMADA (Duplicamos para efecto infinito) */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <span 
                key={index} 
                className="text-xl md:text-2xl font-bold text-stone-400 dark:text-stone-600 uppercase tracking-tighter hover:text-[var(--color-secondary)] transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>

      {/* ESTILOS DE ANIMACIÓN INLINE (Para no depender de tailwind config extra) */}
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
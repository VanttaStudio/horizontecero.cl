import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CalendarDays, Star, CheckCircle2, Gift } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from './Button'; 

export default function CoursePromo() {
  return (
    <section id="vermicompostaje" className="py-20 relative z-10 px-4 md:px-6">
      
      <motion.div 
        className={cn(
          "max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-[2.5rem] shadow-2xl relative",
          // Estilos Glass Tierra
          "bg-[#F0EEE5]/80 border border-white/40 backdrop-blur-xl", 
          "dark:bg-slate-900/60 dark:border-white/10"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        
        {/* --- LADO IZQUIERDO: VIDEO (Manos a la izquierda) --- */}
        {/* IMPORTANTE: min-h-[400px] asegura que el video tenga altura en móvil */}
        <div className="md:w-1/2 relative min-h-[400px] md:min-h-auto group overflow-hidden bg-stone-900">
          
          {/* VIDEO DE FONDO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-left" 
          >
            {/* Asegúrate de que el video esté en public/videos/compost.mp4 */}
            <source src="/videos/compost.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay Gradiente (Para que el texto se lea si cae encima) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#F0EEE5]/90 dark:to-slate-900/90 md:bg-gradient-to-r md:via-[#F0EEE5]/20" />
          
          {/* Badge Flotante "Próximamente / Agendado" */}
          <motion.div 
            className="absolute bottom-6 left-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-stone-100 dark:border-slate-600 flex items-center gap-3 z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-600 dark:text-green-400">
                <CalendarDays size={16} fill="currentColor" className="text-green-600 dark:text-green-400" />
            </div>
            <div>
                <p className="text-[10px] text-stone-500 dark:text-slate-400 font-bold uppercase tracking-wider">Modalidad</p>
                <p className="text-xs font-bold text-stone-800 dark:text-white">Talleres online</p>
            </div>
          </motion.div>
        </div>

        {/* --- LADO DERECHO: CONTENIDO --- */}
        <div className="md:w-1/2 relative p-8 md:p-14 flex flex-col justify-center items-start text-left">
          
          {/* Línea decorativa */}
          <div className="absolute top-12 bottom-12 left-0 w-1 bg-gradient-to-b from-transparent via-[var(--color-secondary)] to-transparent opacity-50 hidden md:block"></div>
          
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] text-xs font-black tracking-widest mb-5 border border-[var(--color-secondary)]/20 uppercase shadow-sm">
            <Sparkles size={12} />
            Aporte a la Comunidad
          </span>

          {/* ETIQUETA "GRATIS" INTEGRADA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5"
          >
             <div className="inline-flex bg-[var(--color-secondary)] text-white px-4 py-2 rounded-full font-black text-sm shadow-lg border-2 border-white dark:border-slate-800 items-center gap-2 transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                <Gift size={16} />
                100% GRATUITO
             </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 dark:text-white mb-6 leading-[1.1]">
            Curso de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary-dark)] to-emerald-600 dark:from-[var(--color-secondary)] dark:to-emerald-400">
              Vermicompostaje
            </span>
          </h2>
          
          <p className="text-stone-600 dark:text-slate-300 text-lg mb-8 leading-relaxed font-medium">
            Aprende a transformar tus residuos orgánicos en abono vivo. Talleres prácticos para devolverle la mano a la tierra. ¡Reserva tu cupo para la próxima fecha!
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-1">
                 {[1,2,3,4,5].map((_,i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                 ))}
            </div>
            <span className="text-sm font-bold text-stone-500 dark:text-slate-400">
                Cupos limitados
            </span>
          </div>

          <Button href="/curso-vermicompostaje" variant="primary" size="lg">
            INSCRIBIRSE AHORA
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

        </div>
      </motion.div>
    </section>
  );
}
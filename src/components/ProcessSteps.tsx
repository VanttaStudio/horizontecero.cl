import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Truck, ThermometerSun, Sprout, HandCoins, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 1,
    title: "Segregación",
    desc: "Separación en origen de residuos vegetales.",
    note: "🚫 Sin plásticos ni aceites. Solo orgánico crudo.",
    icon: Utensils,
    color: "bg-orange-500",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    title: "Logística",
    desc: "Recolección diferenciada y transporte.",
    note: "🚛 Huella de carbono reducida por rutas eficientes.",
    icon: Truck,
    color: "bg-stone-500",
    gradient: "from-stone-400 to-stone-600"
  },
  {
    id: 3,
    title: "Estabilización", // EL PASO QUE FALTABA
    desc: "Pre-compostaje térmico para sanidad.",
    note: "🌡️ Fase termófila para eliminar patógenos y regular pH.",
    icon: ThermometerSun,
    color: "bg-amber-500",
    gradient: "from-amber-400 to-yellow-600"
  },
  {
    id: 4,
    title: "Vermicompostaje",
    desc: "Inoculación de lombrices californianas.",
    note: "🪱 Transformación biológica de alta eficiencia.",
    icon: Sprout,
    color: "bg-green-500",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    id: 5,
    title: "Valorización",
    desc: "Cosecha, tamizado y retorno al mercado.",
    note: "💰 Economía Circular: Compramos tu producción.",
    icon: HandCoins,
    color: "bg-blue-500",
    gradient: "from-blue-400 to-indigo-600"
  }
];

export default function ProcessSteps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative max-w-[90rem] mx-auto px-4 py-10">
      
      {/* GRID DE 5 COLUMNAS PARA PANTALLAS GRANDES */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
        
        {/* --- LÍNEA CONECTORA (SOLO DESKTOP) --- */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 z-0">
             <svg className="w-full h-full" preserveAspectRatio="none">
                <line 
                    x1="0" y1="50%" x2="100%" y2="50%" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="8 8"
                    className="text-stone-300 dark:text-slate-700" 
                />
             </svg>
             {/* Animación de flujo */}
             <motion.div 
                className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent opacity-50 blur-sm"
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             />
        </div>

        {steps.map((step, index) => {
          const isHovered = hoveredStep === step.id;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 50, 
                delay: index * 0.15 
              }}
              className="relative flex flex-col items-center group z-10"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              
              {/* 1. ICONO FLOTANTE */}
              <div className="relative mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                 <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#F0EEE5] dark:bg-[#0f172a] flex items-center justify-center p-2 shadow-xl ring-1 ring-stone-200 dark:ring-slate-700">
                    <div className={cn(
                        "w-full h-full rounded-full flex items-center justify-center text-white shadow-inner bg-gradient-to-br transition-all duration-500",
                        step.gradient,
                        isHovered ? "scale-100 rotate-0" : "scale-95"
                    )}>
                        <step.icon size={28} className="lg:w-8 lg:h-8" strokeWidth={2} />
                    </div>
                 </div>

                 {/* Badge de Número */}
                 <div className="absolute -top-1 -right-1 bg-white dark:bg-slate-800 w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shadow-md border border-stone-100 dark:border-slate-600 z-20 text-stone-900 dark:text-white">
                    {step.id}
                 </div>
              </div>

              {/* 2. TARJETA DE CONTENIDO */}
              <div className={cn(
                  "w-full p-5 rounded-3xl border transition-all duration-300 relative overflow-hidden min-h-[160px] flex flex-col justify-between",
                  "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-white/40 dark:border-white/5",
                  "group-hover:shadow-lg group-hover:bg-white/80 dark:group-hover:bg-slate-800/80"
              )}>
                  
                  <div>
                      <h3 className="text-base lg:text-lg font-extrabold text-stone-800 dark:text-white mb-2 group-hover:text-[var(--color-secondary-dark)] dark:group-hover:text-[var(--color-secondary)] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs lg:text-sm font-medium text-stone-600 dark:text-slate-400 leading-relaxed text-balance">
                        {step.desc}
                      </p>
                  </div>

                  {/* 3. NOTA TÉCNICA (Post-it) */}
                  <motion.div 
                    className="mt-4 pt-3 border-t border-dashed border-stone-300 dark:border-slate-600"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                     <div className="flex items-start gap-2 text-[10px] lg:text-xs text-stone-500 dark:text-slate-400 bg-stone-100 dark:bg-slate-950/50 p-2 rounded-xl">
                        <Info size={12} className={cn("mt-0.5 flex-shrink-0", step.color.replace('bg-', 'text-'))} />
                        <span className="font-semibold italic leading-tight">
                            {step.note}
                        </span>
                     </div>
                  </motion.div>

                  {/* Decoración inferior */}
                  <div className={cn("absolute bottom-0 left-0 h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300", step.color)} />
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
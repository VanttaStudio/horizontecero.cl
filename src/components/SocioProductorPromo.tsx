import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const benefits = [
  {
    icon: TrendingUp,
    title: "Capacitación Experta",
    desc: "Te enseñamos el protocolo de Biotransformación paso a paso para asegurar el éxito de tu criadero."
  },
  {
    icon: Wallet,
    title: "Compra Garantizada",
    desc: "Horizonte Cero adquiere tu excedente de humus para comercializarlo, transformando tus residuos en ingresos reales."
  },
  {
    icon: ShieldCheck,
    title: "Seguimiento Continuo",
    desc: "A través de nuestra App, mantenemos conexión directa para coordinar procesos y calidad de manera unipersonal."
  }
];

export default function SocioProductorPromo() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Resplandor de fondo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-secondary)]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "max-w-6xl mx-auto rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden border transition-all duration-500",
          // MODO DÍA: Vidrio claro, texto oscuro, sombra definida
          "bg-[#F0EEE5]/95 backdrop-blur-2xl border-stone-200 shadow-2xl shadow-stone-200/60",
          // MODO NOCHE: Vidrio oscuro, borde sutil
          "dark:bg-slate-900/80 dark:border-white/10 dark:shadow-none"
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: TEXTO ESTRATÉGICO */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/30 text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] text-xs font-black tracking-widest uppercase mb-8">
                <Handshake size={14} />
                Oportunidad de Negocio Circular
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white mb-8 leading-[1.1]">
              Sé un <span className="text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)]">Socio Productor</span>
            </h2>

            <p className="text-xl text-stone-700 dark:text-stone-300 mb-10 leading-relaxed font-medium text-balance">
              Transformamos hogares en unidades productivas. Tú generas el fertilizante orgánico siguiendo nuestro método y nosotros <strong className="text-stone-950 dark:text-white italic">compramos tu producción excedente</strong> para el mercado regional.
            </p>

            <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/56994523333" 
                  target="_blank"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--color-secondary)] px-8 py-4 font-black text-stone-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(61,255,22,0.4)]"
                >
                    Quiero ser Productor
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-stone-300 dark:border-slate-700 text-stone-600 dark:text-stone-400 font-bold text-xs bg-white/40 dark:bg-black/20">
                    Soporte Unipersonal vía App
                </div>
            </div>
          </div>

          {/* LADO DERECHO: TARJETAS DE BENEFICIOS */}
          <div className="grid grid-cols-1 gap-4 relative z-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-6 p-6 rounded-[2.5rem] bg-white/30 dark:bg-white/5 border border-white/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--color-secondary)]/20 text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-stone-900 dark:text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
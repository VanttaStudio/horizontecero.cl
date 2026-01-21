import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "¿Necesito mucho espacio para la vermicompostera?",
    answer: "No. Nuestros sistemas están diseñados para entornos urbanos y departamentos. Ocupan el espacio equivalente a una caja de herramientas mediana."
  },
  {
    question: "¿Produce malos olores en mi cocina?",
    answer: "Cero olores. Al ser un proceso aeróbico gestionado por lombrices, el resultado es un aroma a tierra húmeda de bosque. Si hay olor, es que algo en el proceso técnico debe ajustarse y Kenos te ayudará a resolverlo."
  },
  {
    question: "¿Cómo funciona el pago como Socio Productor?",
    answer: "Horizonte Cero realiza pesajes periódicos de tu producción de humus. Una vez validada la calidad técnica, el monto se abona directamente a tu cuenta según el valor de mercado regional."
  },
  {
    question: "¿Qué residuos NO puedo procesar?",
    answer: "Debes evitar restos de carne, lácteos, cítricos en exceso y aceites. El sistema está optimizado para restos vegetales crudos de cocina."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className={cn(
            "rounded-[2rem] border transition-all duration-300 overflow-hidden",
            "bg-[#F0EEE5]/90 border-stone-200 shadow-lg shadow-stone-200/40",
            "dark:bg-slate-900/60 dark:border-white/10 dark:shadow-none"
          )}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left"
          >
            <span className="text-lg md:text-xl font-bold text-stone-900 dark:text-white pr-4">
              {faq.question}
            </span>
            <div className="flex-shrink-0 bg-[var(--color-secondary)]/20 p-2 rounded-full">
              {activeIndex === index ? (
                <Minus className="text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)]" size={20} />
              ) : (
                <Plus className="text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)]" size={20} />
              )}
            </div>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-8 pb-8 text-stone-700 dark:text-stone-300 font-medium leading-relaxed border-t border-stone-200 dark:border-white/5 pt-6">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
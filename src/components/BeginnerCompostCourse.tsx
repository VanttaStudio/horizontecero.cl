import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Apple, 
  Droplets, 
  Box, 
  Lightbulb, 
  Info, 
  Leaf,
  TrendingUp // <--- IMPORTACIÓN CORREGIDA
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- DATOS DEL CURSO PARA PRINCIPIANTES ---
const beginnerModules = [
  {
    id: 1,
    title: "Tus Nuevas Mascotas",
    icon: Leaf,
    content: `
      <p class="mb-4">El vermicompostaje no es magia, es una colaboración entre tú y la lombriz <strong>Eisenia fetida</strong>.</p>
      <div class="bg-white/40 dark:bg-slate-800/40 p-6 rounded-2xl border border-stone-200 dark:border-white/5 my-6">
        <h4 class="font-bold mb-2 flex items-center gap-2"><Info size={18}/> ¿Por qué esta lombriz?</h4>
        <p class="text-sm">Es una especie "epigea", lo que significa que vive feliz en la superficie de los residuos y no necesita tierra profunda.</p>
      </div>
      <p><strong>Dato clave:</strong> Respiran por la piel. Por eso, su casa siempre debe estar húmeda como una esponja escurrida.</p>
    `,
    quiz: {
      question: "¿Cómo respiran las lombrices?",
      options: [
        "Por pulmones diminutos.",
        "A través de su piel húmeda.",
        "No necesitan respirar."
      ],
      correct: 1
    }
  },
  {
    id: 2,
    title: "Construye su Hogar (DIY)",
    icon: Box,
    content: `
      <p>No necesitas gastar una fortuna. Puedes usar dos cajas plásticas opacas apiladas.</p>
      <ul class="space-y-4 my-6">
        <li class="flex gap-3"><span class="font-bold text-[var(--color-secondary-dark)]">Caja Superior:</span> Hazle agujeros en el fondo para drenar y a los lados para que respiren.</li>
        <li class="flex gap-3"><span class="font-bold text-[var(--color-secondary-dark)]">Caja Inferior:</span> Sin agujeros, servirá para recolectar el líquido sobrante.</li>
      </ul>
      <p><strong>La Cama:</strong> Antes de las lombrices, pon 10 cm de cartón picado mojado. Es su "colchón" y fuente de carbono.</p>
    `,
    quiz: {
      question: "¿Para qué sirve la caja inferior que no tiene agujeros?",
      options: [
        "Para guardar la comida nueva.",
        "Para recolectar el líquido que gotea (lixiviado).",
        "Es solo para dar altura."
      ],
      correct: 1
    }
  },
  {
    id: 3,
    title: "El Menú del Día",
    icon: Apple,
    content: `
      <p>Para que no haya olor, aplica la regla <strong>50/50</strong>.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
          <p class="font-bold text-green-700">Verdes (Nitrógeno)</p>
          <p class="text-xs">Cáscaras de fruta, verduras, restos de té y café.</p>
        </div>
        <div class="p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
          <p class="font-bold text-orange-700">Marrones (Carbono)</p>
          <p class="text-xs">Cartón de huevo, papel sin tinta, hojas secas.</p>
        </div>
      </div>
      <p><strong>Importante:</strong> Moler cáscara de huevo aporta calcio ($CaCO_3$) y ayuda a que no se ponga ácido el sistema.</p>
    `,
    quiz: {
      question: "¿Qué debes evitar echar en tu compostera?",
      options: [
        "Cáscaras de manzana y café.",
        "Cartón de cajas de envío.",
        "Restos de carne, lácteos y aceites."
      ],
      correct: 2
    }
  },
  {
    id: 4,
    title: "Cuidado y Mantención",
    icon: Droplets,
    content: `
      <p>¿Cómo saber si van bien? Usa el <strong>Squeeze Test</strong> (Prueba del puño).</p>
      <p class="my-4 italic">Toma un puñado de material y aprieta: deben caer solo un par de gotas. Si chorrea, hay mucha agua. Si se desarma, falta agua.</p>
      <div class="bg-amber-100 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 my-4">
        <p class="text-sm font-bold">¡Evita las moscas!</p>
        <p class="text-xs">Cubre siempre la comida con una capa de cartón o papel seco. Es una barrera física infalible.</p>
      </div>
    `,
    quiz: {
      question: "Si al apretar el material chorrea mucha agua, ¿qué debes hacer?",
      options: [
        "Echar más agua.",
        "Añadir cartón seco para absorber el exceso.",
        "Dejar la tapa abierta al sol."
      ],
      correct: 1
    }
  },
  {
    id: 5,
    title: "Cosecha tu Abono",
    icon: TrendingUp,
    content: `
      <p>Después de unos meses, verás una tierra negra y con olor a bosque: el <strong>Humus</strong>.</p>
      <p class="my-4"><strong>Método de la Luz:</strong> Pon el contenido bajo una lámpara. Las lombrices bajarán huyendo de la luz, permitiéndote sacar la tierra de arriba poco a poco.</p>
      <p><strong>Uso:</strong> Pon un puñado en tus plantas regalonas. Verás cómo crecen gracias a las hormonas naturales del humus.</p>
    `,
    quiz: {
      question: "¿Cómo se comporta la lombriz ante la luz?",
      options: [
        "Le gusta salir a tomar sol.",
        "Es fotofóbica: se esconde de la luz inmediatamente.",
        "No le afecta en nada."
      ],
      correct: 1
    }
  }
];

export default function BeginnerCompostCourse() {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [showFeedback, setShowFeedback] = useState<number | null>(null);

  const currentModule = beginnerModules[currentModuleIndex];
  const progress = ((currentModuleIndex + 1) / beginnerModules.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentModule.id]: optionIndex });
    setShowFeedback(optionIndex);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      
      {/* NAVEGACIÓN LATERAL */}
      <aside className="lg:w-80 flex-shrink-0">
        <div className="sticky top-24 bg-[#F0EEE5]/90 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] border border-stone-200 dark:border-white/10 p-6">
          <div className="mb-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-secondary-dark)] mb-2">Curso Básico</h3>
            <h2 className="text-2xl font-black text-stone-900 dark:text-white leading-tight">Compost en Casa</h2>
          </div>
          
          <nav className="space-y-2">
            {beginnerModules.map((mod, idx) => (
              <button
                key={mod.id}
                onClick={() => {
                  setCurrentModuleIndex(idx);
                  setShowFeedback(null);
                }}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-2xl text-left text-sm font-bold transition-all duration-300",
                  currentModuleIndex === idx 
                    ? "bg-[var(--color-secondary)] text-stone-900 shadow-lg shadow-[var(--color-secondary)]/20"
                    : "text-stone-500 hover:bg-white/40 dark:hover:bg-white/5"
                )}
              >
                <mod.icon size={18} />
                <span className="truncate">{mod.title}</span>
                {answers[mod.id] === mod.quiz.correct && <CheckCircle2 size={14} className="ml-auto text-green-600" />}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-grow min-w-0">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-2 flex-grow bg-stone-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-[var(--color-secondary)] shadow-[0_0_10px_var(--color-secondary)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-black text-stone-500">{Math.round(progress)}%</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentModule.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#F0EEE5]/95 dark:bg-slate-900/60 backdrop-blur-xl rounded-[3rem] border border-stone-200 dark:border-white/10 p-8 md:p-12 shadow-2xl"
          >
            <header className="mb-10 flex items-center justify-between border-b border-stone-200 pb-8">
              <div>
                <span className="text-[var(--color-secondary-dark)] font-black text-xs uppercase tracking-widest block mb-1">Paso 0{currentModule.id}</span>
                <h1 className="text-3xl md:text-4xl font-black text-stone-900 dark:text-white leading-tight">{currentModule.title}</h1>
              </div>
              <div className="p-4 bg-[var(--color-secondary)]/10 rounded-2xl text-[var(--color-secondary-dark)]">
                <currentModule.icon size={40} />
              </div>
            </header>

            <article 
              className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 font-medium leading-relaxed mb-12"
              dangerouslySetInnerHTML={{ __html: currentModule.content }}
            />

            {/* EVALUACIÓN */}
            <div className="bg-white/40 dark:bg-white/5 rounded-[2.5rem] p-8 border border-stone-200 dark:border-white/10">
              <p className="text-xl font-bold text-stone-900 dark:text-white mb-8">{currentModule.quiz.question}</p>
              <div className="space-y-3">
                {currentModule.quiz.options.map((opt, i) => (
                  <button
                    key={i}
                    disabled={answers[currentModule.id] !== undefined && answers[currentModule.id] !== null}
                    onClick={() => handleAnswer(i)}
                    className={cn(
                      "w-full p-5 rounded-2xl border text-left font-bold transition-all duration-300",
                      answers[currentModule.id] === i 
                        ? i === currentModule.quiz.correct 
                          ? "bg-green-500/20 border-green-500 text-green-700" 
                          : "bg-red-500/20 border-red-500 text-red-700"
                        : "bg-white/30 dark:bg-white/5 border-stone-200 dark:text-white"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {showFeedback !== null && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 rounded-xl text-sm font-bold bg-white/50 text-center">
                   {showFeedback === currentModule.quiz.correct 
                    ? "✅ ¡Excelente! Ya sabes cómo empezar." 
                    : "❌ Revisa el texto arriba e intenta de nuevo."}
                </motion.div>
              )}
            </div>

            <footer className="mt-12 flex justify-between">
              <button
                onClick={() => setCurrentModuleIndex(Math.max(0, currentModuleIndex - 1))}
                disabled={currentModuleIndex === 0}
                className="px-6 py-3 rounded-full border border-stone-300 font-bold disabled:opacity-30"
              >
                Atrás
              </button>
              <button
                onClick={() => {
                  if (currentModuleIndex < beginnerModules.length - 1) {
                    setCurrentModuleIndex(currentModuleIndex + 1);
                    setShowFeedback(null);
                  }
                }}
                className="px-8 py-3 rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 font-black"
              >
                {currentModuleIndex === beginnerModules.length - 1 ? '¡Finalizar!' : 'Siguiente'}
              </button>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
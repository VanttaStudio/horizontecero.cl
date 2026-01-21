import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Beaker, 
  Bug, 
  TrendingUp, 
  Zap,
  Info,
  Dna
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- DATOS DEL CURSO ---
const courseModules = [
  {
    id: 1,
    title: "Fundamentos y Edafología",
    icon: Dna,
    content: `
      <p class="mb-4">El vermicompostaje es una <strong>colaboración simbiótica</strong> entre la lombriz y una vasta comunidad de microorganismos. Las lombrices epigeas, como la <em>Eisenia fetida</em>, no se alimentan solo de materia fresca; su nutrición depende de hongos y bacterias que colonizan dicha materia.</p>
      <div class="bg-white/40 dark:bg-slate-800/40 p-6 rounded-2xl border border-stone-200 dark:border-white/5 my-6">
        <h4 class="font-bold mb-2 flex items-center gap-2"><Info size={18}/> Eisenia fetida: Adaptación</h4>
        <p class="text-sm">Evolucionaron para vivir en la capa superficial de la hojarasca forestal. No necesitan excavar túneles profundos, lo que permite criarlas en contenedores poco profundos.</p>
      </div>
      <p><strong>Parámetro Crítico:</strong> Su sistema respiratorio es cutáneo. El intercambio de gases ocurre a través de la epidermis, que debe estar constantemente húmeda. Si la piel se seca, la lombriz muere por asfixia.</p>
    `,
    quiz: {
      question: "¿Cuál es la implicación práctica de que la Eisenia fetida sea una lombriz 'epigea'?",
      options: [
        "Requiere contenedores de 2 metros de profundidad.",
        "Se adapta a bandejas poco profundas ya que vive en la superficie.",
        "Solo sobrevive en bosques abiertos."
      ],
      correct: 1
    }
  },
  {
    id: 2,
    title: "Ingeniería del Sistema",
    icon: Zap,
    content: `
      <p>Un sistema de vermicompostaje es un <strong>biorreactor</strong> que debe gestionar tres funciones: Retención Hídrica (70-80%), Intercambio Gaseoso y Aislamiento Térmico.</p>
      <ul class="space-y-4 my-6">
        <li class="flex gap-3"><span class="font-bold text-[var(--color-secondary-dark)]">Bandejas:</span> Estándar doméstico basado en migración vertical.</li>
        <li class="flex gap-3"><span class="font-bold text-[var(--color-secondary-dark)]">Flujo Continuo (CFT):</span> El "Rolls Royce" de la eficiencia. Se alimenta por arriba y se cosecha por abajo mediante una rejilla.</li>
      </ul>
      <p class="text-sm italic">La cama (bedding) inicial imita la hojarasca del bosque usando cartón (C/N 380:1) o fibra de coco.</p>
    `,
    quiz: {
      question: "¿Por qué se prefiere el cartón corrugado sobre el papel de oficina?",
      options: [
        "Es más nutritivo.",
        "El papel se compacta y bloquea el aire; el cartón mantiene bolsas de aire.",
        "El cartón es más caro."
      ],
      correct: 1
    }
  },
  {
    id: 3,
    title: "Bioquímica Nutricional",
    icon: Beaker,
    content: `
      <p>La gestión de residuos es una reacción bioquímica. Se basa en la relación <strong>Carbono/Nitrógeno (C/N)</strong>.</p>
      <p class="my-4"><strong>Regla Inquebrantable:</strong> Proporción 50/50 en volumen. Por cada parte de Nitrógeno (verdes), añadir una parte de Carbono (marrones).</p>
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
          <p class="font-bold text-green-700">Verdes (N)</p>
          <p class="text-xs">Frutas, verduras, café.</p>
        </div>
        <div class="p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
          <p class="font-bold text-orange-700">Marrones (C)</p>
          <p class="text-xs">Cartón, hojas secas, paja.</p>
        </div>
      </div>
      <p><strong>Molleja:</strong> Trituración mecánica con ayuda de "grit" (cáscara de huevo molida). Aporta $CaCO_3$ para regular el pH.</p>
    `,
    quiz: {
      question: "¿Qué volumen de material seco añadir por cada litro de residuos de cocina?",
      options: [
        "100 ml (un puñado).",
        "1 litro (volumen equivalente).",
        "Nada, solo se añade al principio."
      ],
      correct: 1
    }
  },
  {
    id: 4,
    title: "Gestión y Patología",
    icon: Bug,
    content: `
      <p>Un sistema profesional se mide. El <strong>Squeeze Test</strong> determina la humedad ideal (70-80%): al apretar el sustrato deben salir pocas gotas.</p>
      <p class="mt-4"><strong>Patología Crítica:</strong> La Intoxicación Proteica (Sour Crop). Aparecen abultamientos en el cuerpo ("rosario") debido a la acidificación extrema.</p>
      <div class="my-6 space-y-2">
        <div class="flex justify-between p-3 bg-white/30 rounded-lg text-sm"><span>Ácaros/Enquitreidos</span> <span class="font-bold">Indican Acidez</span></div>
        <div class="flex justify-between p-3 bg-white/30 rounded-lg text-sm"><span>Colémbolos</span> <span class="font-bold">Indican Salud</span></div>
      </div>
    `,
    quiz: {
      question: "Si las lombrices tienen nudos en el cuerpo (rosario), ¿cuál es el diagnóstico?",
      options: [
        "Están embarazadas.",
        "Intoxicación proteica por acidificación.",
        "Es una mutación genética."
      ],
      correct: 1
    }
  },
  {
    id: 5,
    title: "Cosecha y Valor Agregado",
    icon: TrendingUp,
    content: `
      <p>La cosecha separa el Humus fino, el material no procesado y las lombrices (capital biológico).</p>
      <div class="p-6 bg-slate-900 text-white rounded-[2rem] my-6">
        <h4 class="text-[var(--color-secondary)] font-bold mb-4 italic">Diferencia Vital:</h4>
        <ul class="text-sm space-y-2">
          <li><strong>Lixiviado:</strong> Residuo líquido de drenaje pasivo. A menudo anaeróbico.</li>
          <li><strong>Té de Humus:</strong> Cultivo aeróbico oxigenado activamente con melaza.</li>
        </ul>
      </div>
      <p class="text-sm italic">Maduración: El humus debe reposar 1-2 semanas en sacos respirables para estabilizar el Carbono.</p>
    `,
    quiz: {
      question: "¿Por qué es un error envasar el humus húmedo en bolsas herméticas?",
      options: [
        "Las lombrices se escapan.",
        "Sin oxígeno la microbiota muere y genera toxinas.",
        "El plástico daña los nutrientes."
      ],
      correct: 1
    }
  },
  {
    id: 6,
    title: "Agronomía Avanzada",
    icon: Sprout,
    content: `
      <p>El humus no es un fertilizante NPK tradicional; es un <strong>bioestimulante</strong> rico en nitratos ($NO_3^-$), amonio ($NH_4^+$) y fitohormonas.</p>
      <ul class="my-6 space-y-4">
        <li class="bg-white/50 p-4 rounded-xl border border-white/40">
           <strong>Semilleros:</strong> Mezcla al 10-20%. Aumenta la masa radicular.
        </li>
        <li class="bg-white/50 p-4 rounded-xl border border-white/40">
           <strong>Trasplante:</strong> 200g en contacto directo con la raíz para evitar el shock.
        </li>
      </ul>
      <p><strong>Mito:</strong> "Más es mejor". El beneficio máximo se alcanza con sustituciones del 10% al 20%. Superar el 40% puede estancar el crecimiento.</p>
    `,
    quiz: {
      question: "¿Qué efecto tienen las auxinas presentes en el humus?",
      options: [
        "Cambian el color de las hojas.",
        "Estimulan la formación de nuevas raíces.",
        "Hacen que florezca de inmediato."
      ],
      correct: 1
    }
  },
  {
    id: 7,
    title: "Modelo de Negocio",
    icon: TrendingUp,
    content: `
      <p>El vermicompostaje es rentable porque la materia prima suele tener costo cero y el ganado se reproduce exponencialmente.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-4 rounded-2xl border border-stone-300 dark:border-white/10 bg-white/20">
          <h5 class="font-bold text-xs uppercase tracking-widest text-stone-500 mb-2">Ingresos</h5>
          <p class="text-sm">Venta de Humus, Núcleos de Cría y Consultoría.</p>
        </div>
        <div class="p-4 rounded-2xl border border-stone-300 dark:border-white/10 bg-white/20">
          <h5 class="font-bold text-xs uppercase tracking-widest text-stone-500 mb-2">Calidad</h5>
          <p class="text-sm">Certificación de ausencia de patógenos (Salmonella/E. coli).</p>
        </div>
      </div>
      <p class="text-sm">Recuerda: El cliente no compra "caca de gusano"; compra <strong>vida para su suelo</strong>.</p>
    `,
    quiz: {
      question: "¿Cuál es la ventaja competitiva principal de este modelo?",
      options: [
        "Es más rápido de producir.",
        "Materia prima gratis y capital biológico autoreplicable.",
        "No requiere mano de obra."
      ],
      correct: 1
    }
  }
];

export default function VermicompostingCourse() {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [showFeedback, setShowFeedback] = useState<number | null>(null);

  const currentModule = courseModules[currentModuleIndex];
  const progress = ((currentModuleIndex + 1) / courseModules.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentModule.id]: optionIndex });
    setShowFeedback(optionIndex);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      
      {/* 1. SIDEBAR DE NAVEGACIÓN */}
      <aside className="lg:w-80 flex-shrink-0">
        <div className="sticky top-24 bg-[#F0EEE5]/90 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] border border-stone-200 dark:border-white/10 p-6">
          <div className="mb-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] mb-2">Diplomado</h3>
            <h2 className="text-2xl font-black text-stone-900 dark:text-white leading-tight">Vermicompostaje Pro</h2>
          </div>
          
          <nav className="space-y-2">
            {courseModules.map((mod, idx) => (
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

      {/* 2. ÁREA DE CONTENIDO PRINCIPAL */}
      <main className="flex-grow min-w-0">
        {/* Barra de Progreso */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-2 flex-grow bg-stone-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-[var(--color-secondary)] shadow-[0_0_10px_var(--color-secondary)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-black text-stone-500">{Math.round(progress)}% completado</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentModule.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-[#F0EEE5]/95 dark:bg-slate-900/60 backdrop-blur-xl rounded-[3rem] border border-stone-200 dark:border-white/10 p-8 md:p-14 shadow-2xl"
          >
            {/* Cabecera del Módulo */}
            <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-white/5 pb-8">
              <div>
                <span className="text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] font-black text-xs uppercase tracking-widest block mb-1">Módulo 0{currentModule.id}</span>
                <h1 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white leading-tight">{currentModule.title}</h1>
              </div>
              <div className="p-4 bg-[var(--color-secondary)]/10 rounded-3xl text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)]">
                <currentModule.icon size={48} />
              </div>
            </header>

            {/* Cuerpo del Texto */}
            <article 
              className="prose prose-stone dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 font-medium leading-relaxed"
              dangerouslySetInnerHTML={{ __html: currentModule.content }}
            />

            {/* --- SECCIÓN EVALUACIÓN --- */}
            <div className="mt-16 pt-12 border-t border-stone-200 dark:border-white/5">
               <div className="bg-white/40 dark:bg-white/5 rounded-[2.5rem] p-8 md:p-10 border border-stone-200 dark:border-white/10">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 mb-6">Actividad de Consolidación</h4>
                  <p className="text-xl font-bold text-stone-900 dark:text-white mb-8">{currentModule.quiz.question}</p>
                  
                  <div className="space-y-3">
                    {currentModule.quiz.options.map((opt, i) => (
                      <button
                        key={i}
                        disabled={answers[currentModule.id] !== undefined && answers[currentModule.id] !== null}
                        onClick={() => handleAnswer(i)}
                        className={cn(
                          "w-full p-5 rounded-2xl border text-left font-bold transition-all duration-300 flex items-center gap-4",
                          answers[currentModule.id] === i 
                            ? i === currentModule.quiz.correct 
                              ? "bg-green-500/20 border-green-500 text-green-700 dark:text-green-400" 
                              : "bg-red-500/20 border-red-500 text-red-700 dark:text-red-400"
                            : "bg-white/30 dark:bg-white/5 border-stone-200 dark:border-white/5 hover:border-[var(--color-secondary)] dark:text-white"
                        )}
                      >
                        <div className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px]",
                          answers[currentModule.id] === i ? "border-current" : "border-stone-400"
                        )}>
                          {String.fromCharCode(65 + i)}
                        </div>
                        {opt}
                      </button>
                    ))}
                  </div>

                  {showFeedback !== null && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 rounded-xl text-sm font-bold bg-white/50 text-center">
                       {showFeedback === currentModule.quiz.correct 
                        ? "✅ ¡Excelente! Concepto técnico asimilado." 
                        : "❌ Repasa la sección anterior antes de avanzar."}
                    </motion.div>
                  )}
               </div>
            </div>

            {/* Navegación Inferior */}
            <footer className="mt-12 flex justify-between gap-4">
              <button
                onClick={() => setCurrentModuleIndex(Math.max(0, currentModuleIndex - 1))}
                disabled={currentModuleIndex === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 dark:border-white/10 font-bold text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors disabled:opacity-30"
              >
                <ChevronLeft size={18} /> Anterior
              </button>
              
              <button
                onClick={() => {
                  if (currentModuleIndex < courseModules.length - 1) {
                    setCurrentModuleIndex(currentModuleIndex + 1);
                    setShowFeedback(null);
                  }
                }}
                disabled={currentModuleIndex === courseModules.length - 1}
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 font-black hover:scale-105 transition-all disabled:opacity-30"
              >
                Siguiente <ChevronRight size={18} />
              </button>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
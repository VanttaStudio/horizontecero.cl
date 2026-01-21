import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Package, Droplets, Handshake, GraduationCap, MapPin } from 'lucide-react';
import ServiceCard from './ServiceCard';

const solutions = [
  {
    title: "Modelo Socio Productor",
    description: "Cada usuario es un productor. Te capacitamos para que transformes tus residuos en humus que nosotros <strong>te compramos directamente</strong>.",
    icon: Handshake,
    isCore: true,
    href: "#ciclo-vital"
  },
  {
    title: "Núcleos de Lombrices",
    description: "Unidades biológicas auto-replicantes (Eisenia foetida) optimizadas para la biotransformación rápida en climas patagónicos.",
    icon: Sprout,
    href: "/productos"
  },
  {
    title: "Vermicomposteras Urbanas",
    description: "Sistemas diseñados para el hogar que permiten procesar residuos orgánicos vegetales sin olores y en espacios reducidos.",
    icon: Package,
    href: "/productos"
  },
  {
    title: "Retiro en 'Flores'",
    description: "Puntos estratégicos de logística local para el retiro de productos, optimizando la distribución en Punta Arenas.",
    icon: MapPin,
    href: "/flores"
  },
  {
    title: "Humus & Oro Negro",
    description: "Biofertilizante de alto rendimiento con un valor nutricional hasta 7 veces superior al compost tradicional.",
    icon: Droplets,
    href: "/productos"
  },
  {
    title: "Manuales de Gestión",
    description: "Documentación técnica detallada para formar lombricultores y apicultores exitosos de manera autónoma.",
    icon: GraduationCap,
    href: "/curso"
  }
];

export default function SolutionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {solutions.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isCore={item.isCore}
            href={item.href}
          />
        ))}
      </motion.div>
    </section>
  );
}
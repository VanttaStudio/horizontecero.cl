import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react'; // Icono de carga opcional

// Definimos las variantes de estilo (Sistema de Diseño)
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

// Interfaz completa para TypeScript
interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

// Usamos forwardRef para permitir control externo (Estándar PRO)
const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, href, children, ...props }, ref) => {

    // 1. DICCIONARIO DE ESTILOS
    const variants = {
      primary: "bg-[var(--color-secondary)] text-white border border-transparent hover:bg-[var(--color-secondary-dark)] hover:shadow-[0_0_20px_rgba(61,255,22,0.4)]",
      secondary: "bg-stone-800 text-white border border-stone-700 hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200",
      outline: "bg-transparent border-2 border-[var(--color-secondary)] text-[var(--color-secondary-dark)] dark:text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white",
      ghost: "bg-transparent text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/10 hover:text-stone-900 dark:hover:text-white"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3.5 text-base",
      lg: "px-10 py-4 text-lg"
    };

    // 2. CLASES BASE COMBINADAS
    const baseStyles = cn(
      "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold tracking-wide transition-all duration-300",
      "focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2 dark:focus:ring-offset-slate-900",
      "disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className
    );

    // 3. ANIMACIONES FRAMER MOTION
    const animations = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 17 }
    };

    // 4. CONTENIDO INTERNO (Manejo de Carga y Brillo)
    const content = (
      <>
        {/* Efecto de Brillo (Solo para variantes con fondo sólido) */}
        {(variant === 'primary' || variant === 'secondary') && (
          <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shine_0.8s_ease-in-out] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0 pointer-events-none" />
        )}

        <span className="relative z-10 flex items-center gap-2">
          {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
          {children}
        </span>
      </>
    );

    // 5. RENDERIZADO CONDICIONAL
    
    // A) Si es un enlace (<a>)
    if (href) {
      return (
        <motion.a
          ref={ref as any}
          href={href}
          className={baseStyles}
          {...animations}
        >
          {content}
        </motion.a>
      );
    }

    // B) Si es un botón normal (<button>)
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseStyles}
        disabled={isLoading || props.disabled}
        {...animations}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
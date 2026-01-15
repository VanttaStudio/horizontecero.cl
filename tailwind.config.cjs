/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Usamos 'var' para que Tailwind use tus colores de colors.css
                'secondary': 'var(--color-secondary)',
                'secondary-dark': 'var(--color-secondary-dark)',
            }
        },
    },
    plugins: [],
}
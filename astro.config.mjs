// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react'; // <--- IMPORTANTE

export default defineConfig({
  integrations: [react()], // <--- IMPORTANTE: Debe estar aquí
  vite: {
    plugins: [tailwindcss()],
  },
});
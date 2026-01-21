import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // <--- CAMBIO AQUÍ

export default defineConfig({
  output: 'server', // Mantenemos server para que Kenos sea dinámico
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// ponytail: cambiar `site` cuando haya dominio propio (afecta sitemap, canonical y OG)
export default defineConfig({
  site: 'https://agencianovai.com',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      lastmod: new Date(),
      // Páginas con noindex (utilidad u ocultas): fuera del sitemap para no contradecir la meta robots.
      filter: (page) => !/\/(agendar|demo-agente|proyectos\/digital-education)\/?$/.test(page),
    }),
  ],
});

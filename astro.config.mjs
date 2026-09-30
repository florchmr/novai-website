import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// ponytail: cambiar `site` cuando haya dominio propio (afecta sitemap, canonical y OG)
export default defineConfig({
  site: 'https://agencianovai.com',
  integrations: [react(), sitemap()],
});

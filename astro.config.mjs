// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domínio final do site. Manter igual a SITE.url em src/consts.ts.
// TROCAR antes do deploy (sugerido: https://sdm-advprev.com.br).
const SITE_URL = 'https://exemplo.com.br';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  // format 'directory' (padrão) + cleanUrls no vercel.json => URLs sem .html
  // e sem barra final, iguais às do sitemap e do canonical.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

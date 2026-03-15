import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://josstei.github.io',
  base: '/demo-site/',
  integrations: [tailwind()],
});

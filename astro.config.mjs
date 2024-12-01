import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [tailwind()],
  site: isProduction ? 'https://dattaone.github.io' : 'http://localhost:3000',
  base: isProduction ? '/portafolio' : '/',
});

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dattaone.github.io/portafolio',
  base: '/portafolio',
});

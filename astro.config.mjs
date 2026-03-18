import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://andresoble.github.io',
  base: '/cv-site',
  integrations: [tailwind({ applyBaseStyles: false }), react()],
});

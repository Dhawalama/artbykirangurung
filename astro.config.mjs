import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repo = 'artbykirangurung';

export default defineConfig({
  site: 'https://dhawalama.github.io',
  output: 'static',
  base: `/${repo}/`,
  integrations: [tailwind({ applyBaseStyles: false })],
});
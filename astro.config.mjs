import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://djsiddz.github.io",
  base: "/space-ahead",
  integrations: [preact()]
});
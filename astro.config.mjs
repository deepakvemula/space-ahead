import { defineConfig } from 'astro/config';
import swup from "@swup/astro";
import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://djsiddz.github.io",
  base: "/space-ahead",
  integrations: [swup({ theme: ["overlay", { direction: "to-top"}], cache: true, progress: true }), preact()],

  image: {
    responsiveStyles: true
  },

  vite: {
    plugins: [tailwindcss()]
  }
});

//swup theme variations:
// theme: "fade"
// theme: ["overlay", { direction: "to-top"}]
//
// for overlay and fade, further customization can be done in animate.css file
// To know about swup, visit https://swup.js.org/
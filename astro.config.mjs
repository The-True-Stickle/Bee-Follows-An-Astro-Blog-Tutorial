// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://the-bee-plot.bowen-bothello.workers.dev/",
  integrations: [preact()]
});
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  // npm_run_build
  // base: "/astro"
  base: "/skillsfuture",
  // site: "https://staging.fishermen-analytics.com/skillsfuture/",
});

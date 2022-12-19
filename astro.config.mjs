import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
// import purgecss from "astro-purgecss";

console.log(process.env.NODE_ENV);

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  // npm_run_build
  // base: "/astro"

  base: process.env.NODE_ENV === "production" ? "/upskill" : "",

  // production with relative link?
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/component-mixin";`,
        },
      },
    },
  },
});

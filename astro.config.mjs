import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import purgecss from "astro-purgecss";


// https://astro.build/config
export default defineConfig({
  integrations: [vue(), purgecss()],
  // npm_run_build
  // base: "/astro"
  base: "/upskill",
  // base: "/",
  // production with relative link?
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/component-mixin";`
        }
      }
    }
  }
});
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
// import purgecss from "astro-purgecss";

console.log(process.env.NODE_ENV);

const outDir = function () {
  if (process.env.NODE_ENV === "production") {
    return "./dist";
  } else if (process.env.NODE_ENV === "staging") {
    return "./staging";
  }
};

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  // npm_run_build
  // base: "/astro"

  base: process.env.NODE_ENV === "production" ? "/upskill" : "",
  outDir: outDir(),
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

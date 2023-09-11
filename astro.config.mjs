import { defineConfig } from "astro/config";
// import vue from "@astrojs/vue";

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
const outDir = function () {
  if (process.env.NODE_ENV === "production") {
    return "./dist";
  } else if (process.env.NODE_ENV === "staging") {
    return "./staging";
  }
};

const base = function () {
  if (process.env.NODE_ENV === "staging") {
    return "/upskill"; // staging-fishermen // 
    // return "" //staging-upskill is for tracking script
  } else {
    return "";
  }
  // if (process.env.NODE_ENV === "production") {
  //   return "";
  // } else
};

// https://astro.build/config
export default defineConfig({
  // integrations: [vue()],
  // npm_run_build
  // base: "/astro"

  // base: process.env.NODE_ENV === "production" ? "/upskill" : "",
  base: base(),
  base: "upskill",
  outDir: outDir(),
  // production with relative link?

});

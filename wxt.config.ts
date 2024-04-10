import path from "path";
import { defineConfig } from "wxt";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  manifest: {
    name: "Better Steam",
    description:
      "Improve how you use Steam — Better Steam removes the bloat, adds insights, and helps you find the best deal for your next purchase.",
    host_permissions: ["*://*.steambase.io/*", "*://*.steampowered.com/*", "*://steamcommunity.com/*"],
    permissions: ["storage"],
  },
  vite: () => ({
    plugins: [
      svelte({
        // Using a svelte.config.js file causes a segmentation fault when importing the file
        configFile: false,
        preprocess: [vitePreprocess()],
      }),
    ],
  }),
});

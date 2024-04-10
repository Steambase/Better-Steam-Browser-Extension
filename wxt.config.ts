import path from "path";
import { defineConfig } from "wxt";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  manifest: {
    name: "Better Steam",
    description: "Makes Steam better by removing the bloat, adding game insights, and surfacing the best deals for you to explore.",
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

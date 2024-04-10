import path from "path";
import { defineConfig } from "wxt";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  manifest: {
    name: "Better Steam",
    description:
      "Improve your experience using Steam — Better Steam removes the bloat, adds game insights, and helps you hunt down a deal for your next game purchase.",
    developer: {
      name: "Steambase",
      url: "https://steambase.io",
    },
    host_permissions: ["*://*.steambase.io/*", "*://*.steampowered.com/*", "*://*steamcommunity.com/*"],
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

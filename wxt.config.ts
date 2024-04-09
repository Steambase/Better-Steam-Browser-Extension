import path from "path";
import { defineConfig } from "wxt";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  manifest: {
    name: "Better Steam",
    description: "Improve your experience on Steam. Better Steam removes the bloat, adds more data, and is blazingly fast.",
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
    resolve: {
      alias: {
        $lib: path.resolve("./src/lib"),
      },
    },
  }),
});

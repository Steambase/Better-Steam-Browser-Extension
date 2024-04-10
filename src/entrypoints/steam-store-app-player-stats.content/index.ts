import PlayerStats from "./PlayerStats.svelte";
import { shouldShowAppStats } from "@/lib/common/storage/options";

export default defineContentScript({
  matches: ["*://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      anchor: "div.rightcol.game_meta_data",
      append: "first",
      onMount: async (container) => {
        // Ensure Enabled
        const enabled = await shouldShowAppStats.getValue();
        if (!enabled) {
          console.log(`[steam-store-app-player-stats] - Disabled via user options`);
          return;
        }

        const app = new PlayerStats({
          target: container,
        });
        return app;
      },
      onRemove: async (app) => {
        (await app)?.$destroy();
      },
    });

    ui.mount();
  },
});

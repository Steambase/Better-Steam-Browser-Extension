import PlayerStats from "./PlayerStats.svelte";

export default defineContentScript({
  matches: ["*://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      anchor: "div.rightcol.game_meta_data",
      append: "first",
      onMount: (container) => {
        const app = new PlayerStats({
          target: container,
        });
        return app;
      },
      onRemove: (app) => {
        app?.$destroy();
      },
    });

    ui.mount();
  },
});

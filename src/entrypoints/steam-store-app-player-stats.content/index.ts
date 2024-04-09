import PlayerStats from "./PlayerStats.svelte";

export default defineContentScript({
  matches: ["*://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      anchor: "div.rightcol.game_meta_data",
      append: "first",
      onMount: (container) => {
        console.log("mounting svelte app inline");

        // Create the Svelte app inside the UI container
        const app = new PlayerStats({
          target: container,
        });
        return app;
      },
      onRemove: (app) => {
        // Destroy the app when the UI is removed
        app?.$destroy();
      },
    });

    // Call mount to add the UI to the DOM
    ui.mount();
  },
});

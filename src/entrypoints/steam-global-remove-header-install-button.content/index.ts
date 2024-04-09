export default defineContentScript({
  matches: ["*://store.steampowered.com/*", "*://steamcommunity.com/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: (_) => {
        // Try Get Install Button
        const installBtn = document.querySelector("#global_action_menu > a.header_installsteam_btn");
        if (!installBtn) {
          console.warn(`[steam-global-remove-header-install-button] - Unable to find install button`);
          return;
        }

        // Remove From DOM
        installBtn.remove();
      },
    });

    ui.mount();
  },
});

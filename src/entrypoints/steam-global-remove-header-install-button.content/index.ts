import { shouldHideInstallSteamButton } from "@/lib/common/storage/options";

export default defineContentScript({
  matches: ["*://store.steampowered.com/*", "*://steamcommunity.com/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: async (_) => {
        // Ensure Enabled
        const enabled = await shouldHideInstallSteamButton.getValue();
        if (!enabled) {
          console.log(`[steam-global-remove-header-install-button] - Disabled via user options`);
          return;
        }

        // Try Get Install Button
        const installBtn = document.querySelector("#global_action_menu > a.header_installsteam_btn") as HTMLAnchorElement;
        if (!installBtn) {
          console.warn(`[steam-global-remove-header-install-button] - Unable to find install button`);
          return;
        }

        // Hide & Remove From DOM
        installBtn.setAttribute("hidden", "true");
        installBtn.style.display = "none";
        installBtn.remove();
      },
    });

    ui.mount();
  },
});

import { shouldShowExternalButtonsAndLinks } from "@/lib/common/storage/options";
import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";
import { tryExractAppId } from "@/lib/common/helpers/steam-url-helpers";
import { fetchGame } from "@/lib/game/queries/fetchGame";

export default defineContentScript({
  matches: ["*://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: async (_) => {
        // Ensure Enabled
        const enabled = await shouldShowExternalButtonsAndLinks.getValue();
        if (!enabled) {
          console.log(`[steam-store-app-linkbar-links] - Disabled via user options`);
          return;
        }

        // Try Get Linkbar Container
        const linkbarDiv = document.querySelector(
          "#appDetailsUnderlinedLinks > div.block_content > div.block_content_inner > div.details_block:last-child"
        );

        if (!linkbarDiv) {
          console.warn(`[steam-store-app-linkbar-link] - Unable to find linkbar container`);
          return;
        }

        // Try Get App Id
        const appId = tryExractAppId(document.URL.toString());
        if (!appId) {
          console.warn(`[steam-store-app-linkbar-link] - Unable extract app id from url`);
          return;
        }

        // Try Fetch Game
        const game = await fetchGame(appId);

        // Conditionally Add Price Tracker Link
        const freeGameBtn = document.querySelector(
          "div.game_area_purchase_game > div.game_purchase_action > div.game_purchase_action_bg > #freeGameBtn"
        );

        if (game && !freeGameBtn) {
          // Build Price Tracker Link
          const link = document.createElement("a");
          link.innerText = "View Price History & Deals";
          link.className = "linkbar responsive_chevron_right";
          link.target = "_blank";
          link.href = buildExternalUrl(`https://steambase.io/apps/${appId}/price`);

          // Add Price Tracker Link To DOM
          linkbarDiv.append(link);
        }

        // Build Steambase Link
        const link = document.createElement("a");
        link.innerText = "View on Steambase (Steam Charts)";
        link.className = "linkbar responsive_chevron_right";
        link.target = "_blank";
        link.href = buildExternalUrl(`https://steambase.io/apps/${appId}`);

        // Add Link To DOM
        linkbarDiv.append(link);
      },
    });

    ui.mount();
  },
});

import steambaseIcon from "~/assets/steambase_icon.svg";

import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";
import { tryExractAppId } from "@/lib/common/helpers/steam-url-helpers";
import { PositiveReviewsFilter } from "@/lib/common/constants/steam-colors";

export default defineContentScript({
  matches: ["*://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: async (_) => {
        // Try Get Link Container
        const linkDiv = document.querySelector("div.apphub_OtherSiteInfo");
        if (!linkDiv) {
          console.warn(`[steam-store-app-header-links] - Unable to find header link container`);
          return;
        }

        // Try Get App Id
        const appId = tryExractAppId(document.URL.toString());
        if (!appId) {
          console.warn(`[steam-store-app-header-links] - Unable extract app id from url`);
          return;
        }

        // Conditionally Add Price Tracker Link
        const freeGameBtn = document.querySelector(
          "div.game_area_purchase_game > div.game_purchase_action > div.game_purchase_action_bg > #freeGameBtn"
        );

        if (!freeGameBtn) {
          // Build Price Tracker Link
          const link = document.createElement("a");
          link.className = "btnv6_blue_hoverfade btn_medium";
          link.style.marginLeft = "3px";
          link.target = "_blank";
          link.href = buildExternalUrl(`https://steambase.io/apps/${appId}/price`);

          const span = document.createElement("span");
          span.dataset.tooltipText = "Price Tracker (Lowest Price & Deals)";
          span.innerText = "Price Tracker";

          // Add Price Tracker Link To DOM
          link.appendChild(span);
          linkDiv.insertBefore(link, linkDiv.firstChild);
        }

        // Build Steambase Image Link
        const link = document.createElement("a");
        link.className = "btnv6_blue_hoverfade btn_medium";
        link.target = "_blank";
        link.href = buildExternalUrl(`https://steambase.io/apps/${appId}`);

        const span = document.createElement("span");
        span.innerText = "Steam Charts";
        span.dataset.tooltipText = "View on Steambase (Steam Charts)";
        link.appendChild(span);

        const image = document.createElement("img");
        image.style.filter = PositiveReviewsFilter;
        image.style.margin = "7px 0 0 4px";
        image.style.verticalAlign = "top";
        image.style.display = "inline-block";
        image.style.width = "16px";
        image.style.height = "16px";
        image.src = steambaseIcon;

        // Add Image To DOM
        span.appendChild(image);
        linkDiv.insertBefore(link, linkDiv.firstChild);
      },
    });

    ui.mount();
  },
});

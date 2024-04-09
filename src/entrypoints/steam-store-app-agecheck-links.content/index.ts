import steambaseIcon from "~/assets/steambase_icon.svg";

import { buildExternalUrl } from "@/lib/helpers/external-url-helper";
import { tryExractAppId } from "@/lib/helpers/steam-store-url-helpers";
import { PositiveReviewsFilter } from "@/lib/constants/steam-colors";

export default defineContentScript({
  matches: ["*://store.steampowered.com/agecheck/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: async (_) => {
        // Try Get Age Gate Container
        const ageGateDiv = document.querySelector("div.age_gate > #app_agegate");
        if (!ageGateDiv) {
          console.warn(`[steam-store-app-agecheck-links] - Unable to find age gate container`);
          return;
        }

        // Try Get App Id
        const appId = tryExractAppId(document.URL.toString());
        if (!appId) {
          console.warn(`[steam-store-app-agecheck-links] - Unable extract app id from url`);
          return;
        }

        // Build Link Container
        const container = document.createElement("div");
        container.className = "steambase_link_container";
        container.style.width = "100%";
        container.style.display = "flex";
        container.style.flexDirection = "row";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.gap = "4px";
        ageGateDiv.appendChild(container);

        // Build Steambase Image Link
        const steamChartsLinks = document.createElement("a");
        steamChartsLinks.className = "btnv6_blue_hoverfade btn_medium";
        steamChartsLinks.target = "_blank";
        steamChartsLinks.href = buildExternalUrl(`https://steambase.io/apps/${appId}`);

        const steamChartsSpan = document.createElement("span");
        steamChartsSpan.dataset.tooltipText = "View on Steambase (Steam Charts)";
        steamChartsSpan.innerText = "View Steam Charts";
        steamChartsLinks.appendChild(steamChartsSpan);

        const image = document.createElement("img");
        image.style.filter = PositiveReviewsFilter;
        image.style.margin = "7px 0 0 4px";
        image.style.verticalAlign = "top";
        image.style.display = "inline-block";
        image.style.width = "16px";
        image.style.height = "16px";
        image.src = steambaseIcon;

        steamChartsSpan.appendChild(image);
        container.appendChild(steamChartsLinks);

        // Build Price Tracker Link
        const priceTrackerLink = document.createElement("a");
        priceTrackerLink.className = "btnv6_blue_hoverfade btn_medium";
        priceTrackerLink.target = "_blank";
        priceTrackerLink.href = buildExternalUrl(`https://steambase.io/apps/${appId}/price`);

        const priceTrackerSpan = document.createElement("span");
        priceTrackerSpan.dataset.tooltipText = "View on Steambase (Price & Deal Tracker)";
        priceTrackerSpan.innerText = "Price Tracker";
        priceTrackerLink.appendChild(priceTrackerSpan);

        container.appendChild(priceTrackerLink);
      },
    });

    ui.mount();
  },
});

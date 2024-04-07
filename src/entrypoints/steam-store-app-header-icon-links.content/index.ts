import steambaseIcon from "~/assets/steambase_icon.svg";

import { buildExternalUrl } from "@/lib/helpers/external-url-helper";
import { tryExractAppId } from "@/lib/helpers/steam-store-url-helpers";
import { PositiveReviewsFilter } from "@/lib/constants/steam-colors";

export default defineContentScript({
  matches: ["https://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: async (_) => {
        // Try Get Link Container
        const linkDiv = document.querySelector("div.apphub_OtherSiteInfo");
        if (!linkDiv) {
          console.warn(`[steam-store-app-header-icon-links] - Unable to find header link container`);
          return;
        }

        // Try Get App Id
        const appId = tryExractAppId(document.URL.toString());
        if (!appId) {
          console.warn(`[steam-store-app-header-icon-links] - Unable extract app id from url`);
          return;
        }

        // Build Steambase Image Link
        const link = document.createElement("a");
        link.className = "btnv6_blue_hoverfade btn_medium";
        link.target = "_blank";
        link.href = buildExternalUrl(`https://steambase.io/apps/${appId}`);

        const span = document.createElement("span");
        span.dataset.tooltipText = "View on Steambase (Steam Charts)";
        link.appendChild(span);

        const image = document.createElement("img");
        image.style.filter = PositiveReviewsFilter;
        image.style.margin = "7px 0";
        image.style.verticalAlign = "top";
        image.style.display = "inline-block";
        image.style.width = "16px";
        image.style.height = "16px";
        image.src = steambaseIcon;

        // Add Elements To DOM
        span.appendChild(image);
        linkDiv.insertBefore(link, linkDiv.firstChild);
      },
    });

    ui.mount();
  },
});

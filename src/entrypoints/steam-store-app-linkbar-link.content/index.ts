import { buildExternalUrl } from "@/lib/helpers/external-url-helper";
import { tryExractAppId } from "@/lib/helpers/steam-store-url-helpers";

export default defineContentScript({
  matches: ["https://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: (_) => {
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

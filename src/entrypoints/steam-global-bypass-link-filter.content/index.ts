import { shouldBypassLinksFilters } from "@/lib/common/storage/options";

export default defineContentScript({
  matches: ["*://store.steampowered.com/*", "*://steamcommunity.com/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: async (_) => {
        // Ensure Enabled
        const enabled = await shouldBypassLinksFilters.getValue();
        if (!enabled) {
          console.log(`[steam-global-bypass-link-filter] - Disabled via user options`);
          return;
        }

        const linkFilterAnchors = document.querySelectorAll('a[href^="https://steamcommunity.com/linkfilter/"]') as NodeListOf<HTMLAnchorElement>;

        for (const link of linkFilterAnchors) {
          if (!link.search) {
            continue;
          }

          // Replace Each Link Target With Destination
          const params = new URLSearchParams(link.search);
          if (params.has("u")) {
            link.href = params.get("u")!;
          } else if (params.has("url")) {
            link.href = params.get("url")!;
          }
        }
      },
    });

    ui.mount();
  },
});

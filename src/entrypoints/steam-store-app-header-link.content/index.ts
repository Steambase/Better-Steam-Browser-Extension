import steambaseIcon from "~/assets/steambase_icon.svg";

export default defineContentScript({
  matches: ["https://store.steampowered.com/app/1244090/Sea_of_Stars/"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: (container) => {
        // Query for link container
        const linkDiv = document.querySelector("div.apphub_OtherSiteInfo");
        if (!linkDiv) {
          console.warn(
            `Unable to find link container for 'steam-store-app-header-link' content script`
          );
          return;
        }

        // Build Steambase Image Link
        const link = document.createElement("a");
        link.className = "btnv6_blue_hoverfade btn_medium";
        link.href = `https://steambase.io/games`;

        const span = document.createElement("span");
        span.dataset.tooltipText = "View on Steambase (Charts & Stats)";
        link.appendChild(span);

        const image = document.createElement("img");
        image.style.filter =
          "invert(80%) sepia(25%) saturate(6318%) hue-rotate(177deg) brightness(106%) contrast(91%)";
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

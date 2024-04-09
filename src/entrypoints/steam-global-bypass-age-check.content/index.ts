export default defineContentScript({
  matches: ["*://store.steampowered.com/*", "*://steamcommunity.com/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: (_) => {
        // Create Future Date (1 Year)
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const dateStr = date.toUTCString();

        // Set Cookies
        document.cookie = "lastagecheckage=1-January-1900; expires=" + dateStr + "; path=/; Secure; SameSite=Lax;";
        document.cookie = "birthtime=-" + Math.pow(30, 6) + "; expires=" + dateStr + "; path=/; Secure; SameSite=Lax;";
        document.cookie = "wants_mature_content=1; expires=" + dateStr + "; path=/; Secure; SameSite=Lax;";
        document.cookie = "mature_content=1; expires=" + dateStr + "; path=/; Secure; SameSite=Lax;";
      },
    });

    ui.mount();
  },
});

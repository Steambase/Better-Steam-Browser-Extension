import { buildExternalUrl } from "@/lib/helpers/external-url-helper";
import { tryExractAppId } from "@/lib/helpers/steam-url-helpers";

export default defineContentScript({
  matches: ["*://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: (_) => {
        // Find User Reviews Element
        const userReviewsDiv = document.querySelector("div.glance_ctn_responsive_left > #userReviews");
        if (!userReviewsDiv) {
          console.warn(`[steam-store-app-player-score-label] - User reviews container`);
          return;
        }

        // Try Get App Id
        const appId = tryExractAppId(document.URL.toString());
        if (!appId) {
          console.warn(`[steam-store-app-player-score-label] - Unable extract app id from url`);
          return;
        }

        // Build Player Score Row Element
        const playerScoreRow = document.createElement("div");
        playerScoreRow.className = "user_reviews_summary_row";

        // Build SubTitle Element
        const subTitle = document.createElement("div");
        subTitle.className = "subtitle column all";
        subTitle.innerText = "Player Score:";

        playerScoreRow.appendChild(subTitle);

        // Build Summary Element
        const summary = document.createElement("div");
        summary.className = "summary column";

        const primarySpan = document.createElement("span");
        primarySpan.style.fontWeight = "600";
        primarySpan.innerText = "58 / 100";

        summary.appendChild(primarySpan);
        playerScoreRow.appendChild(summary);

        // Add Player Score Row To DOM
        if (userReviewsDiv.firstChild) {
          userReviewsDiv.insertBefore(playerScoreRow, userReviewsDiv.firstChild);
        } else {
          userReviewsDiv.appendChild(playerScoreRow);
        }
      },
    });

    ui.mount();
  },
});

function getReviewTextColor(score) {
  switch (score) {
    case score >= 80 && score <= 100:
      return "rgb(14, 159, 110)";
  }
}

import { NegativeReviewScore, NeutralReviewScore, PositiveReviewScore } from "@/lib/common/constants/steambase-colors";
import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";
import { tryExractAppId } from "@/lib/common/helpers/steam-url-helpers";
import { fetchGame } from "@/lib/game/queries/fetchGame";

export default defineContentScript({
  matches: ["*://store.steampowered.com/app/*"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      onMount: async (_) => {
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

        // Try Fetch Game (Using App Id)
        const game = await fetchGame(appId);
        if (!game) {
          console.log(`[steam-store-app-player-score-label] - App Id: '${appId}' is not a game or game was not found`);
          return;
        }

        if (!game.reviews?.steam?.calculated_score) {
          console.warn(`[steam-store-app-player-score-label] - Steam reviews not found for App Id: '${appId}'`);
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
        primarySpan.style.color = getReviewTextColor(game.reviews.steam.calculated_score);
        primarySpan.innerText = `${game.reviews.steam.calculated_score.toFixed(0)} / 100`;

        const toolTipLink = document.createElement("a");
        toolTipLink.dataset.tooltipText = `Steambase's Player Score is calculated as the weighted average of all positive and negative reviews fetched from the Steam Store for ${game.name}. Click here to reiview more review charts, stats, and trends.`;
        toolTipLink.href = buildExternalUrl(`https://steambase.io/games/${appId}/reviews#reviews`);
        toolTipLink.target = "_blank";
        toolTipLink.className = "responsive_hidden";
        toolTipLink.innerText = "(?)";
        toolTipLink.style.marginLeft = "4px";
        toolTipLink.style.fontWeight = "400";
        toolTipLink.style.color = "#556772";

        primarySpan.appendChild(toolTipLink);
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

function getReviewTextColor(score: number): string {
  if (score >= 75) {
    return PositiveReviewScore;
  }

  if (score >= 50) {
    return NeutralReviewScore;
  }

  return NegativeReviewScore;
}

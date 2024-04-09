<script lang="ts">
  import steambaseIcon from "~/assets/steambase_icon.svg";
  import { PositiveReviewsFilter } from "@/lib/common/constants/steam-colors";
  import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";
  import { fetchGame } from "@/lib/game/queries/fetchGame";
  import { tryExractAppId } from "@/lib/common/helpers/steam-url-helpers";

  // Try Build Steambase Url
  let appId = tryExractAppId(document.URL);
  const url = appId
    ? buildExternalUrl(`https://steambase.io/games/${appId}/steam-charts#player-count-steam-chart`)
    : buildExternalUrl(`https://steambase.io/games`);

  // Try Fetch Game
  const fetchGameTask = fetchGame(appId);
</script>

{#if appId}
  {#await fetchGameTask then game}
    {#if game}
      <div class="block responsive_apppage_details_right heading responsive_hidden">
        Steam Charts & Stats
        <a href={url} target="_blank" style="margin-left: 1px;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-external-link"
            ><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg
          ></a
        >
      </div>
      <div class="block responsive_apppage_details_right recommendation_noinfo responsive_hidden">
        <div class="sb_player_stats_container">
          <ul class="sb_player_stats_list">
            {#if game.stats.current_players}
              <li>Players Online: <span>{game.stats.current_players.toLocaleString()}</span></li>
            {/if}
            {#if game.stats.peak_players}
              <li>All-Time Peak: <span>{game.stats.peak_players.toLocaleString()}</span></li>
            {/if}
            {#if game.stats.community_hub_members}
              <li>Community Members: <span>{game.stats.community_hub_members.toLocaleString()}</span></li>
            {/if}
          </ul>
          <a href={url} target="_blank" title="View Steam Charts & Stats on Steambase">
            <img src={steambaseIcon} style={`filter: ${PositiveReviewsFilter};`} width="48" height="48" alt="Steambase Icon" />
          </a>
        </div>
      </div>
    {/if}
  {/await}
{/if}

<style>
  .sb_player_stats_container {
    display: flex;
    flex-direction: flex-row;
    justify-content: space-between;
    width: 100%;
  }

  .sb_player_stats_list {
    list-style-type: none;
  }

  .sb_player_stats_list > li {
    font-size: 13px;
    font-weight: 400;
  }

  .sb_player_stats_list > li > span {
    font-weight: 600;
    color: rgb(132, 225, 188);
  }
</style>

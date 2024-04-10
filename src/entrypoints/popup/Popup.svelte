<script lang="ts">
  import PopupLink from "./PopupLink.svelte";

  import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";
</script>

<main class="w-[200px] px-2 py-3 flex flex-col bg-slate-950">
  <PopupLink url={buildExternalUrl("https://store.steampowered.com")}>Steam Store</PopupLink>
  <PopupLink url={buildExternalUrl("https://steambase.io/sales")}>Steam Sale Tracker</PopupLink>
  <PopupLink url={buildExternalUrl("https://steambase.io/games/new-steam-game-releases")}>New Games</PopupLink>
  <PopupLink url={buildExternalUrl("https://steambase.io/games/upcoming-steam-game-releases")}>Upcoming Games</PopupLink>
  <PopupLink url={buildExternalUrl("https://steambase.io")}>Steambase</PopupLink>
  <PopupLink url="options.html">Options</PopupLink>
</main>

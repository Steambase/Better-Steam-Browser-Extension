<script lang="ts">
  import steambaseLogo from "~/assets/steambase_logo_dark.png";
  import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";

  import Separator from "@/lib/components/ui/separator/separator.svelte";
  import BooleanOption from "./BooleanOption.svelte";

  import {
    BYPASS_AGE_CHECK_KEY,
    BYPASS_LINK_FILTERS,
    HIDE_INSTALL_STEAM_BUTTON,
    SHOW_APP_BUTTONS_AND_LINKS,
    SHOW_APP_STATS,
    shouldBypassAgeCheck,
    shouldBypassLinksFilters,
    shouldHideInstallSteamButton,
    shouldShowAppButtonsAndLinks,
    shouldShowAppStats,
  } from "@/lib/common/storage/options";
</script>

<main class="flex justify-center items-center w-full min-h-screen pt-4 pb-8 bg-slate-50">
  <div class="flex flex-col items-center w-[450px]">
    <a href={buildExternalUrl("https://steambase.io")} target="_blank" class="px-5 py-4 border-2 rounded-lg border-transparent hover:border-blue-300">
      <img src={steambaseLogo} alt="Steambase Logo" width="250" />
    </a>

    <Separator class="w-96 mt-4 mb-0" />

    <!-- Global Options -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold mt-6">Global Options</h2>
      <BooleanOption
        key={BYPASS_AGE_CHECK_KEY}
        store={shouldBypassAgeCheck}
        label="Bypass age checks"
        description="Bypass all age checks for Steam Store and Steam Community pages."
      />
      <BooleanOption
        key={HIDE_INSTALL_STEAM_BUTTON}
        store={shouldHideInstallSteamButton}
        label="Hide 'Install Steam' buttons"
        description="Removes the 'Install Steam' button from all Steam pages."
      />
      <BooleanOption
        key={BYPASS_LINK_FILTERS}
        store={shouldBypassLinksFilters}
        label="Bypass link filters"
        description="Bypass 'link filter' pages when visting external links (like a game developer's website) on Steam."
      />
    </div>

    <!-- App Options -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold mt-6">Steam Game Options</h2>
      <BooleanOption
        key={SHOW_APP_STATS}
        store={shouldShowAppStats}
        label="Show additional game stats"
        description="Show additional stats like concurrent players, review scores, and the best price for each game."
      />
      <BooleanOption
        key={SHOW_APP_BUTTONS_AND_LINKS}
        store={shouldShowAppButtonsAndLinks}
        label="Show extra buttons"
        description="Show extra buttons on game pages which let you track Steam charts, player counts, and more."
      />
    </div>
  </div>
</main>

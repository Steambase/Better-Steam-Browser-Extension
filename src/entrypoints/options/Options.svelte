<script lang="ts">
  import steambaseLogo from "~/assets/steambase_logo_dark.png";
  import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";

  import Separator from "@/lib/components/ui/separator/separator.svelte";
  import BooleanOption from "./BooleanOption.svelte";

  import { BYPASS_AGE_CHECK_KEY, shouldBypassAgeCheck } from "@/lib/common/storage/options";
</script>

<main class="flex justify-center items-center w-full h-screen bg-slate-50">
  <div class="flex flex-col items-center w-[450px]">
    <a href={buildExternalUrl("https://steambase.io")} target="_blank" class="px-5 py-4 border-2 rounded-lg border-transparent hover:border-blue-300">
      <img src={steambaseLogo} alt="Steambase Logo" width="250" />
    </a>

    <Separator class="mt-4 mb-0" />

    <div class="space-y-4">
      <h2 class="text-xl font-semibold mt-6">Global Options</h2>
      <BooleanOption
        key={BYPASS_AGE_CHECK_KEY}
        store={shouldBypassAgeCheck}
        label="Bypass age checks"
        description="Bypass all age checks for Steam Store and Steam Community pages."
      />
    </div>
  </div>
</main>

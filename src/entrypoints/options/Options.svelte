<script lang="ts">
  import steambaseLogo from "~/assets/steambase_logo_dark.png";
  import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";

  import Separator from "@/lib/components/ui/separator/separator.svelte";
</script>

<main class="flex justify-center items-center w-full h-screen bg-slate-50">
  <div class="flex flex-col items-start">
    <a href={buildExternalUrl("https://steambase.io")} target="_blank" class="px-5 py-4 border-2 rounded-lg border-transparent hover:border-blue-300">
      <img src={steambaseLogo} alt="Steambase Logo" width="250" />
    </a>

    <Separator class="mt-4 mb-0" />

    <div class="space-y-4">
      <h2 class="text-xl font-semibold mt-6">Global Options</h2>
      <div class="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
        <div class="space-y-0.5">
          <label
            data-melt-label=""
            data-label-root=""
            class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 data-[fs-error]:text-destructive text-base"
            for="VwyNx"
            data-fs-label="">Communication emails</label
          >
          <div id="iGnw2" data-fs-description="" class="text-[0.8rem] text-muted-foreground">Receive emails about your account activity.</div>
        </div>
        <!-- Switch-->
      </div>
    </div>

    <!-- <h2 class="text-xl font-semibold mt-6">Option Section 2</h2>
    <p class="mt-2">Description or content for option section 2.</p>

    <h2 class="text-xl font-semibold mt-6">Option Section 3</h2>
    <p class="mt-2">Description or content for option section 3.</p> -->
  </div>
</main>

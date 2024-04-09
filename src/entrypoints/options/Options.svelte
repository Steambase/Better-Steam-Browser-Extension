<script lang="ts">
  import steambaseLogo from "~/assets/steambase_logo_dark.png";
  import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";
</script>

<main class="flex justify-center items-center w-full h-screen bg-slate-50">
  <div class="flex flex-col items-start">
    <a href={buildExternalUrl("https://steambase.io")} target="_blank" class="px-5 py-4 border-2 rounded-lg border-transparent hover:border-blue-300">
      <img src={steambaseLogo} alt="Steambase Logo" width="300" />
    </a>

    <h2 class="text-xl font-semibold mt-6">Global Options</h2>
    <p class="mt-2">Description or content for option section 1.</p>

    <!-- <h2 class="text-xl font-semibold mt-6">Option Section 2</h2>
    <p class="mt-2">Description or content for option section 2.</p>

    <h2 class="text-xl font-semibold mt-6">Option Section 3</h2>
    <p class="mt-2">Description or content for option section 3.</p> -->
  </div>
</main>

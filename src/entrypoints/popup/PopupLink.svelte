<script lang="ts">
  import { buildExternalUrl } from "@/lib/common/helpers/external-url-helper";

  export let targetUrl;
</script>

<a
  href={buildExternalUrl(targetUrl)}
  target="_blank"
  class="p-4 h-12 flex items-center justify-center rounded hover:bg-slate-700 text-lg text-slate-50"
>
  <slot />
</a>

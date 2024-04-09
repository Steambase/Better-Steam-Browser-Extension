<script lang="ts">
  export let url: string;
</script>

<a
  href={url}
  target="_blank"
  class="p-4 h-12 flex items-center justify-center text-base font-normal text-slate-50 border-[1.5px] border-transparent rounded-lg hover:bg-slate-700 hover:border-blue-400"
>
  <slot />
</a>

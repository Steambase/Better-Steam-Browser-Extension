<script lang="ts">
  import { onMount } from "svelte";
  import { Label } from "@/lib/components/ui/label/index.js";
  import { Switch } from "@/lib/components/ui/switch/index.js";

  import type { WxtStorageItem } from "wxt/storage";

  // Props
  export let key: string;
  export let store: WxtStorageItem<boolean, {}>;
  export let label: string;
  export let description: string;

  // Switch Value Storage & Reactivity
  let switchValue = false;
  let isInitialized = false;

  onMount(async () => {
    const loadedValue = await store.getValue();
    switchValue = loadedValue;
    isInitialized = true;
  });

  // Update Local Storage (After Initialization)
  $: if (isInitialized) {
    store.setValue(switchValue).catch((err) => {
      console.error(`Failed to update local storage: ${err}`);
    });
  }
</script>

<div class="space-x-2 space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
  <div class="space-y-0.5">
    <Label for={key}>{label}</Label>
    <div class="text-[0.8rem] text-muted-foreground">{description}</div>
  </div>
  <Switch id={key} bind:checked={switchValue} />
</div>

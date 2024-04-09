<script lang="ts">
  import { Label } from "@/lib/components/ui/label/index.js";
  import { Switch } from "@/lib/components/ui/switch/index.js";

  // Props
  export let key: string;
  export let label: string;
  export let description: string;
</script>

<div class="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
  <div class="space-y-0.5">
    <Label for={key}>{label}</Label>
    <div class="text-[0.8rem] text-muted-foreground">{description}</div>
  </div>
  <Switch id={key} />
</div>

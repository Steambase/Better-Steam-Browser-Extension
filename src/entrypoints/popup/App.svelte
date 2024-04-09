<script lang="ts">
  import svelteLogo from "../../assets/svelte.svg";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<main>
  <h1 class="text-3xl font-bold underline">WXT + Svelte</h1>
  <p class="read-the-docs">Click on the WXT and Svelte logos to learn more</p>

  <Button on:click={() => console.log("clicked")}>Click me</Button>
</main>

import "@/lib/styles/app.pcss";
import Options from "./Options.svelte";

const app = new Options({
  target: document.getElementById("app")!,
});

export default app;

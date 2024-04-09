import "@/lib/styles/app.pcss";
import Popup from "./Popup.svelte";

const app = new Popup({
  target: document.getElementById("app")!,
});

export default app;

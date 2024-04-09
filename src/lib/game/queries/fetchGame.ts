import type { Game } from "../types/Game.js";

export async function fetchGame(id: string | undefined): Promise<Game | undefined> {
  if (id === undefined) {
    return undefined;
  }

  // Build Request Url
  const gameUrl = new URL(`https://api.steambase.io/games/${id}`);
  const gameResponse = await fetch(gameUrl);
  const game = (await gameResponse.json()) as Game;

  return game;
}

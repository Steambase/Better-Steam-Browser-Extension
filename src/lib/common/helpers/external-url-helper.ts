export function buildExternalUrl(target: string) {
  const url = new URL(target);
  url.searchParams.append("utm_source", "steambase");
  url.searchParams.append("utm_medium", "browser_extension");
  url.searchParams.append("utm_campaign", "better_steam_extension");

  const result = url.toString();
  return result;
}

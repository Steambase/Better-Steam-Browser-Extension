/**
 * Attempts to extract an app's Steam Id from the given url.
 * @param url
 * @returns
 */
export function tryExractAppId(url: string) {
  const urlPattern = /https:\/\/store\.steampowered\.com\/app\/(\d+)/;
  const match = url.match(urlPattern);

  return match && match.length > 1 ? match[1] : undefined;
}

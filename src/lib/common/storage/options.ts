/**
 * Global Options
 */

// Bypass Global Steam Age Check
export const BYPASS_AGE_CHECK_KEY = "local:steam:global:bypass-age-check";
export const shouldBypassAgeCheck = storage.defineItem<boolean>(BYPASS_AGE_CHECK_KEY, {
  defaultValue: true,
});

// Hide 'Install Steam' Button
export const HIDE_INSTALL_STEAM_BUTTON = "local:steam:global:hide-install-steam-button";
export const shouldHideInstallSteamButton = storage.defineItem<boolean>(HIDE_INSTALL_STEAM_BUTTON, {
  defaultValue: true,
});

// Bypass Link Filter Pages
export const BYPASS_LINK_FILTERS = "local:steam:global:bypass-link-filter-pages";
export const shouldBypassLinksFilters = storage.defineItem<boolean>(BYPASS_LINK_FILTERS, {
  defaultValue: false,
});

/**
 * Steam App Options
 */
export const SHOW_APP_STATS = "local:steam:app:show-app-stats";
export const shouldShowAppStats = storage.defineItem<boolean>(SHOW_APP_STATS, {
  defaultValue: true,
});

export const SHOW_APP_BUTTONS_AND_LINKS = "local:steam:app:show-app-buttons-and-links";
export const shouldShowAppButtonsAndLinks = storage.defineItem<boolean>(SHOW_APP_BUTTONS_AND_LINKS, {
  defaultValue: true,
});

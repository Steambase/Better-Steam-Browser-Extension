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

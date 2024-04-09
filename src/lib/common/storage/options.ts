// Bypass Global Steam Age Check
export const BYPASS_AGE_CHECK_KEY = "local:steam:global:bypass-age-check";
export const shouldBypassAgeCheck = storage.defineItem<boolean>(BYPASS_AGE_CHECK_KEY, {
  defaultValue: true,
});

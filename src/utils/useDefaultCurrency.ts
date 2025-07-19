// useDefaultCurrency.ts
// Reusable composable to auto-detect default currency (code & symbol) from browser timezone.
// - Ghana-optimized: works offline, no network needed.
// - Only runs on first visit (let user override after).


import { timeZoneToCountry } from './useCountryConfig'
import type { CountryData } from './useCountryConfig'

// ===== Types & Interfaces =====
interface DefaultCurrencyResult {
  code: string
  symbol: string
  country: string
}

// ===== Helper Functions =====

/**
 * Gets the browser's IANA timezone string.
 * @returns {string} e.g. "Africa/Accra"
 */
function getBrowserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || ''
  } catch {
    return ''
  }
}

/**
 * Looks up the default currency for the user's timezone.
 * Falls back to GHS if not found.
 * @returns {DefaultCurrencyResult}
 */
export function useDefaultCurrency(): DefaultCurrencyResult {
  // 1. Get timezone
  const timezone = getBrowserTimezone()

  // 2. Lookup in config
  const countryData: CountryData | undefined = timeZoneToCountry[timezone]

  // 3. Fallback to GHS (Ghana) if not found
  if (!countryData) {
    return { code: 'GHS', symbol: 'GH₵', country: 'Ghana' }
  }

  return {
    code: countryData.currency,
    symbol: countryData.currencySymbol,
    country: countryData.country
  }
}
// countryConfig.ts
// Maps timezones to country, currency code, and symbol for auto-detection.

export interface CountryData {
    country: string;
    currency: string;
    currencySymbol: string;
}

// ===== [Expanded Map] =====
export const timeZoneToCountry: Record<string, CountryData> = {
    'Africa/Accra': { country: 'Ghana', currency: 'GHS', currencySymbol: 'GHS' },
    'Africa/Lagos': { country: 'Nigeria', currency: 'NGN', currencySymbol: '₦' },
    'Africa/Nairobi': { country: 'Kenya', currency: 'KES', currencySymbol: 'KSh' },
    'Africa/Johannesburg': { country: 'South Africa', currency: 'ZAR', currencySymbol: 'R' },
    'Africa/Abidjan': { country: 'Côte d\'Ivoire', currency: 'XOF', currencySymbol: 'CFA ' },
    'Asia/Kolkata': { country: 'India', currency: 'INR', currencySymbol: '₹' },
    'America/New_York': { country: 'United States', currency: 'USD', currencySymbol: '$' },
    'Europe/Paris': { country: 'France', currency: 'EUR', currencySymbol: '€' },
    'Europe/London': { country: 'United Kingdom', currency: 'GBP', currencySymbol: '£' },
    'America/Toronto': { country: 'Canada', currency: 'CAD', currencySymbol: 'CA$' },
    'Australia/Sydney': { country: 'Australia', currency: 'AUD', currencySymbol: 'A$' },
    // Add more as needed for your selector
};
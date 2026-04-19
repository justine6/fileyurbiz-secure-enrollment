export type StatePricing = {
  code: string;
  name: string;
  price: number | null;
  filingFeeNote?: string;
  isActive: boolean;
  isConfigured: boolean;
};

export const statePricing: StatePricing[] = [
  { code: "AL", name: "Alabama", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "AK", name: "Alaska", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "AZ", name: "Arizona", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "AR", name: "Arkansas", price: 249, filingFeeNote: "State filing fee may apply separately.", isActive: true, isConfigured: true },
  { code: "CA", name: "California", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "CO", name: "Colorado", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "CT", name: "Connecticut", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "DE", name: "Delaware", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "FL", name: "Florida", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "GA", name: "Georgia", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "HI", name: "Hawaii", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "ID", name: "Idaho", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "IL", name: "Illinois", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "IN", name: "Indiana", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "IA", name: "Iowa", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "KS", name: "Kansas", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "KY", name: "Kentucky", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "LA", name: "Louisiana", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "ME", name: "Maine", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "MD", name: "Maryland", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "MA", name: "Massachusetts", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "MI", name: "Michigan", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "MN", name: "Minnesota", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "MS", name: "Mississippi", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "MO", name: "Missouri", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "MT", name: "Montana", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "NE", name: "Nebraska", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "NV", name: "Nevada", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "NH", name: "New Hampshire", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "NJ", name: "New Jersey", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "NM", name: "New Mexico", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "NY", name: "New York", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "NC", name: "North Carolina", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "ND", name: "North Dakota", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "OH", name: "Ohio", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "OK", name: "Oklahoma", price: 299, filingFeeNote: "State filing fee may apply separately.", isActive: true, isConfigured: true },
  { code: "OR", name: "Oregon", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "PA", name: "Pennsylvania", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "RI", name: "Rhode Island", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "SC", name: "South Carolina", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "SD", name: "South Dakota", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "TN", name: "Tennessee", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "TX", name: "Texas", price: 499, filingFeeNote: "State filing fee may apply separately.", isActive: true, isConfigured: true },
  { code: "UT", name: "Utah", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "VT", name: "Vermont", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "VA", name: "Virginia", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "WA", name: "Washington", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "WV", name: "West Virginia", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "WI", name: "Wisconsin", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
  { code: "WY", name: "Wyoming", price: null, filingFeeNote: "Pricing to be provided.", isActive: true, isConfigured: false },
];

export function isStateEnrollmentAvailable(state: StatePricing): boolean {
  return state.isActive && state.isConfigured && state.price !== null;
}

export function getActiveStatePricing(): StatePricing[] {
  return statePricing.filter((state) => state.isActive);
}

export function getAvailableStatePricing(): StatePricing[] {
  return statePricing.filter((state) => isStateEnrollmentAvailable(state));
}

export function getStatePricingByCode(code: string): StatePricing | undefined {
  return statePricing.find(
    (state) => state.code.toLowerCase() === code.toLowerCase()
  );
}
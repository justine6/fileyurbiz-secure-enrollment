export type StatePricing = {
  code: string;
  name: string;
  price: number;
  filingFeeNote?: string;
  isActive: boolean;
};

export const statePricing: StatePricing[] = [
  {
    code: "OK",
    name: "Oklahoma",
    price: 299,
    filingFeeNote: "State filing fee may apply separately.",
    isActive: true,
  },
  {
    code: "TX",
    name: "Texas",
    price: 499,
    filingFeeNote: "State filing fee may apply separately.",
    isActive: true,
  },
  {
    code: "AR",
    name: "Arkansas",
    price: 249,
    filingFeeNote: "State filing fee may apply separately.",
    isActive: true,
  },
];

export function getActiveStatePricing(): StatePricing[] {
  return statePricing.filter((state) => state.isActive);
}

export function getStatePricingByCode(code: string): StatePricing | undefined {
  return statePricing.find(
    (state) => state.code.toLowerCase() === code.toLowerCase()
  );
}

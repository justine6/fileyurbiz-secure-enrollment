import Link from "next/link";
import { getStatePricingByCode } from "@/lib/pricing/statePricing";

type SearchParams = Promise<{
  state?: string;
}>;

type CheckoutPageProps = {
  searchParams: SearchParams;
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedStateCode = resolvedSearchParams?.state ?? "";
  const selectedState = selectedStateCode
    ? getStatePricingByCode(selectedStateCode)
    : undefined;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Checkout</h1>

      {selectedState ? (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1.5rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>Selected State:</strong> {selectedState.name} ({selectedState.code})
          </p>
          <p style={{ margin: "0.5rem 0 0 0" }}>
            <strong>Enrollment Price:</strong>{" "}
            {selectedState.price !== null ? `$${selectedState.price}` : "TBD"}
          </p>
        </div>
      ) : (
        <div style={{ marginBottom: "1.5rem" }}>
          <p>No state selected yet.</p>
          <Link href="/pricing">Go back to Pricing</Link>
        </div>
      )}

      <p>Payment integration will go here.</p>

      <Link href="/confirmation">Complete Order</Link>
    </main>
  );
}

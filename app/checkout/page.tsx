import Link from "next/link";
import CheckoutSummary from "@/components/forms/CheckoutSummary";
import {
  getStatePricingByCode,
  isStateEnrollmentAvailable,
} from "@/lib/pricing/statePricing";

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

  if (!selectedState) {
    return (
      <main style={{ padding: "2.5rem", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1>Checkout</h1>
          <p>No state selected yet.</p>
          <Link href="/pricing">Go back to Pricing</Link>
        </div>
      </main>
    );
  }

  if (!isStateEnrollmentAvailable(selectedState)) {
    return (
      <main style={{ padding: "2.5rem", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1>Checkout Not Available</h1>
          <p>
            {selectedState.name} is not yet available for checkout because pricing
            has not been configured.
          </p>
          <Link href="/pricing">Return to Pricing</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: "2.5rem", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#0b69b7",
            marginBottom: "2rem",
            fontSize: "2.25rem",
            fontWeight: 700,
          }}
        >
          CHECKOUT
        </h1>

        <CheckoutSummary
          stateName={selectedState.name}
          stateCode={selectedState.code}
          price={selectedState.price!}
        />

      <div style={{ marginTop: "1.5rem" }}>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          Payment integration will go here.
        </p>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <Link
            href={`/intake?state=${selectedState.code}`}
            style={{
              color: "#0b69b7",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Edit Information
          </Link>

          <Link
            href={`/confirmation?state=${selectedState.code}`}
            style={{
              display: "inline-block",
              backgroundColor: "#000",
              color: "#fff",
              textDecoration: "none",
              padding: "0.9rem 1.5rem",
              borderRadius: "6px",
              fontWeight: 600,
            }}
          >
            Complete Order
          </Link>
        </div>
      </div>
    </div>
    </main>
  );
}
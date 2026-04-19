import Link from "next/link";
import { getStatePricingByCode } from "@/lib/pricing/statePricing";

type IntakePageProps = {
  searchParams?: {
    state?: string;
  };
};

export default function IntakePage({ searchParams }: IntakePageProps) {
  const selectedStateCode = searchParams?.state ?? "";
  const selectedState = selectedStateCode
    ? getStatePricingByCode(selectedStateCode)
    : undefined;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Business Information</h1>

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
            <strong>Enrollment Price:</strong> ${selectedState.price}
          </p>
        </div>
      ) : (
        <div style={{ marginBottom: "1.5rem" }}>
          <p>No state selected yet.</p>
          <Link href="/pricing">Go back to Pricing</Link>
        </div>
      )}

      <input placeholder="Business Name" />
      <br /><br />

      <input placeholder="Business Address" />
      <br /><br />

      <input placeholder="Owner Name" />
      <br /><br />

      <Link href={selectedState ? `/checkout?state=${selectedState.code}` : "/pricing"}>
        Continue to Checkout
      </Link>
    </main>
  );
}

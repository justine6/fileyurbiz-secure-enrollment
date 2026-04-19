import Link from "next/link";
import {
  getStatePricingByCode,
  isStateEnrollmentAvailable,
} from "@/lib/pricing/statePricing";

type SearchParams = Promise<{
  state?: string;
}>;

type IntakePageProps = {
  searchParams: SearchParams;
};

export default async function IntakePage({ searchParams }: IntakePageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedStateCode = resolvedSearchParams?.state ?? "";
  const selectedState = selectedStateCode
    ? getStatePricingByCode(selectedStateCode)
    : undefined;

  if (!selectedState) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Business Information</h1>
        <p>No state selected yet.</p>
        <Link href="/pricing">Go back to Pricing</Link>
      </main>
    );
  }

  if (!isStateEnrollmentAvailable(selectedState)) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Enrollment Not Available</h1>
        <p>
          {selectedState.name} is not yet available for enrollment because pricing
          has not been configured.
        </p>
        <Link href="/pricing">Return to Pricing</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Business Information</h1>

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

      <input placeholder="Business Name" />
      <br /><br />

      <input placeholder="Business Address" />
      <br /><br />

      <input placeholder="Owner Name" />
      <br /><br />

      <Link href={`/checkout?state=${selectedState.code}`}>
        Continue to Checkout
      </Link>
    </main>
  );
}
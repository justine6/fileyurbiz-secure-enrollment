import Link from "next/link";
import IntakeForm from "@/components/forms/IntakeForm";
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
      <main style={{ padding: "2.5rem", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1>Get Started</h1>
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
          <h1>Enrollment Not Available</h1>
          <p>
            {selectedState.name} is not yet available for enrollment because pricing
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
          GET STARTED
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          <section
            style={{
              borderRight: "1px solid #e8e8e8",
              paddingRight: "1.5rem",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "#0b69b7", marginBottom: "0.5rem" }}>
                Step 1 — Fill out the form
              </h2>
              <p style={{ color: "#444", lineHeight: 1.6 }}>
                Enter your business details carefully so the enrollment request can
                begin with the correct information.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "#0b69b7", marginBottom: "0.5rem" }}>
                Step 2 — Review your state and pricing
              </h2>
              <p style={{ color: "#444", lineHeight: 1.6 }}>
                Confirm the selected state and current pricing before moving to the
                next step.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "#0b69b7", marginBottom: "0.5rem" }}>
                Step 3 — Continue to checkout
              </h2>
              <p style={{ color: "#444", lineHeight: 1.6 }}>
                Once your information is complete, continue to checkout to submit
                the request for processing.
              </p>
            </div>

            <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.6 }}>
              Note: Some states may remain unavailable until pricing is configured.
              Active states can move through the enrollment workflow immediately.
            </p>
          </section>

          <section>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "1rem",
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

            <IntakeForm stateCode={selectedState.code} />
          </section>
        </div>
      </div>
    </main>
  );
}
import Link from "next/link";
import ConfirmationSummary from "@/components/forms/ConfirmationSummary";
import { getStatePricingByCode } from "@/lib/pricing/statePricing";

type SearchParams = Promise<{
  state?: string;
}>;

type ConfirmationPageProps = {
  searchParams: SearchParams;
};

export default async function ConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedStateCode = resolvedSearchParams?.state ?? "";
  const selectedState = selectedStateCode
    ? getStatePricingByCode(selectedStateCode)
    : undefined;

  return (
    <main style={{ padding: "2.5rem", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#0b69b7",
            marginBottom: "2rem",
            fontSize: "2.25rem",
            fontWeight: 700,
          }}
        >
          CONFIRMATION
        </h1>

          <div
            style={{
              border: "1px solid #d4edda",
              backgroundColor: "#f6fff8",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            <h2 style={{ marginTop: 0, color: "#1e7e34" }}>
              Your submission has been received.
            </h2>

            <p style={{ marginBottom: "0.75rem", color: "#444", lineHeight: 1.6 }}>
              Your enrollment request has been captured in the workflow prototype.
              The next step would typically be payment confirmation and internal processing.
            </p>

            {/* ✅ ADD HERE */}
            <p style={{ fontSize: "0.9rem", color: "#666" }}>
              A confirmation email will typically be sent in a production system.
            </p>
          </div>

        {selectedState && (
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
        )}

        <ConfirmationSummary />

        <div style={{ marginTop: "1.5rem" }}>
          <Link
            href="/start"
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
            Start Another Enrollment
          </Link>
        </div>
      </div>
    </main>
  );
}
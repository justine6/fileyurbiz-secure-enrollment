import Link from "next/link";
import { getActiveStatePricing } from "@/lib/pricing/statePricing";

export default function PricingPage() {
  const states = getActiveStatePricing();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Pricing</h1>
      <p>Select your state to begin enrollment.</p>

      <div style={{ marginTop: "1.5rem" }}>
        {states.map((state) => (
          <div
            key={state.code}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h2 style={{ margin: 0 }}>{state.name}</h2>
            <p style={{ margin: "0.5rem 0" }}>
              Enrollment Price:{" "}
              <strong>
                {state.price !== null ? `$${state.price}` : "TBD"}
              </strong>
            </p>
            {state.filingFeeNote && (
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#555" }}>
                {state.filingFeeNote}
              </p>
            )}

            <div style={{ marginTop: "1rem" }}>
              <Link href={`/intake?state=${state.code}`}>
                Start Enrollment for {state.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

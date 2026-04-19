import Link from "next/link";
import {
  getActiveStatePricing,
  isStateEnrollmentAvailable,
} from "@/lib/pricing/statePricing";

export default function PricingPage() {
  const states = getActiveStatePricing();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Pricing</h1>
      <p style={{ marginBottom: "2rem", color: "#555" }}>
        Select your state to begin enrollment.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        {states.map((state) => {
          const isAvailable = isStateEnrollmentAvailable(state);

          return (
            <div
              key={state.code}
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "10px",
                padding: "1.25rem",
                backgroundColor: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 style={{ margin: 0 }}>{state.name}</h2>

                <span
                  style={{
                    padding: "0.25rem 0.6rem",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    backgroundColor: isAvailable ? "#e6f4ea" : "#fff8e1",
                    color: isAvailable ? "#1e7e34" : "#b7791f",
                  }}
                >
                  {isAvailable ? "Available Now" : "Pricing Pending"}
                </span>
              </div>

              <p style={{ margin: "0.75rem 0", fontSize: "1rem" }}>
                Enrollment Price:{" "}
                <strong style={{ fontSize: "1.2rem" }}>
                  {state.price !== null ? `$${state.price}` : "TBD"}
                </strong>
              </p>

              {state.filingFeeNote && (
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                  {state.filingFeeNote}
                </p>
              )}

              <div style={{ marginTop: "1rem" }}>
                {isAvailable ? (
                  <Link
                    href={`/intake?state=${state.code}`}
                    style={{
                      textDecoration: "none",
                      color: "#2563eb",
                      fontWeight: 500,
                    }}
                  >
                    Start Enrollment →
                  </Link>
                ) : (
                  <span style={{ color: "#999", fontWeight: 500 }}>
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
import Link from "next/link";

export default function StartPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        Start Your Business
      </h1>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Begin your enrollment by selecting your state and reviewing pricing.
      </p>

      <Link
        href="/pricing"
        style={{
          display: "inline-block",
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          backgroundColor: "#2563eb",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Continue to Pricing →
      </Link>
    </main>
  );
}

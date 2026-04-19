import Link from "next/link";

export default function StartPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Start Your Business</h1>
      <p>
        Begin your enrollment by selecting your state and reviewing pricing.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <Link href="/pricing">Continue to Pricing</Link>
      </div>
    </main>
  );
}

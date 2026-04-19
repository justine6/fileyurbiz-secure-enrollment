import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>FileYourBiz Secure Enrollment</h1>
      <p>Welcome to the secure enrollment workflow prototype.</p>

      <div style={{ marginTop: "1.5rem" }}>
        <Link href="/start">Go to Start</Link>
      </div>
    </main>
  );
}

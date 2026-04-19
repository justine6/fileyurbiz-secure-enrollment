import Link from "next/link";

export default function StartPage() {
  return (
    <div>
      <h1>Start Your Business</h1>
      <p>Select your state to begin the enrollment process.</p>
      <Link href="/pricing">Continue to Pricing</Link>
    </div>
  );
}

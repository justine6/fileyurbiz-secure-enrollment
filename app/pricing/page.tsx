import Link from "next/link";

export default function PricingPage() {
  return (
    <div>
      <h1>Pricing</h1>
      <select>
        <option>Oklahoma - $299</option>
        <option>Texas - $499</option>
        <option>Arkansas - $249</option>
      </select>

      <br /><br />

      <Link href="/intake">Continue to Intake</Link>
    </div>
  );
}

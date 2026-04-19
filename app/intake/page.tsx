import Link from "next/link";

export default function IntakePage() {
  return (
    <div>
      <h1>Business Information</h1>

      <input placeholder="Business Name" />
      <br /><br />

      <input placeholder="Business Address" />
      <br /><br />

      <input placeholder="Owner Name" />
      <br /><br />

      <Link href="/checkout">Continue to Checkout</Link>
    </div>
  );
}

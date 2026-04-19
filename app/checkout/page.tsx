import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <p>Payment integration will go here.</p>

      <Link href="/confirmation">Complete Order</Link>
    </div>
  );
}

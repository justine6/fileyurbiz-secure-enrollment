"use client";

import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

type CheckoutSummaryProps = {
  stateName: string;
  stateCode: string;
  price: number;
};

type IntakeFormData = {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  ownerNames: string;
  ownershipPercentages: string;
  employeeCount: string;
};

export default function CheckoutSummary({
  stateName,
  stateCode,
  price,
}: CheckoutSummaryProps) {
  const [formData, setFormData] = useState<IntakeFormData | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("intakeFormData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Selected State:</strong> {stateName} ({stateCode})
        </p>
        <p style={{ margin: "0.5rem 0 0 0" }}>
          <strong>Enrollment Price:</strong> ${price}
        </p>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Business Summary</h2>

        {formData ? (
          <div style={{ display: "grid", gap: "0.6rem" }}>
            <p><strong>Business Name:</strong> {formData.businessName || "—"}</p>
            <p><strong>Business Address:</strong> {formData.businessAddress || "—"}</p>
            <p><strong>Business Phone:</strong> {formData.businessPhone || "—"}</p>
            <p><strong>Business Email:</strong> {formData.businessEmail || "—"}</p>
            <p><strong>Owner Name(s):</strong> {formData.ownerNames || "—"}</p>
            <p><strong>Ownership Percentages:</strong> {formData.ownershipPercentages || "—"}</p>
            <p><strong>Employee Count:</strong> {formData.employeeCount || "—"}</p>
          </div>
        ) : (
        <div>
        <p style={{ marginBottom: "0.75rem" }}>
            No intake data found. Start a new enrollment to continue.
        </p>

        <Link
            href="/start"
            style={{
            color: "#0b69b7",
            textDecoration: "none",
            fontWeight: 600,
            }}
        >
            Start New Enrollment →
        </Link>
        </div>
        )}
      </div>
    </div>
  );
}
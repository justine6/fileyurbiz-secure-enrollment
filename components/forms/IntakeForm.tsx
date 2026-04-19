"use client";

import { useState } from "react";
import Link from "next/link";

type IntakeFormProps = {
  stateCode: string;
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

export default function IntakeForm({ stateCode }: IntakeFormProps) {
  const [formData, setFormData] = useState<IntakeFormData>({
    businessName: "",
    businessAddress: "",
    businessPhone: "",
    businessEmail: "",
    ownerNames: "",
    ownershipPercentages: "",
    employeeCount: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        Please ensure all information is accurate before continuing.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        <input name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" style={{ padding: "0.9rem", border: "1px solid #ccc" }} />
        <textarea name="businessAddress" value={formData.businessAddress} onChange={handleChange} placeholder="Business Address" rows={4} style={{ padding: "0.9rem", border: "1px solid #ccc" }} />
        <input name="businessPhone" value={formData.businessPhone} onChange={handleChange} placeholder="Business Phone" style={{ padding: "0.9rem", border: "1px solid #ccc" }} />
        <input name="businessEmail" value={formData.businessEmail} onChange={handleChange} placeholder="Business Email" style={{ padding: "0.9rem", border: "1px solid #ccc" }} />
        <textarea name="ownerNames" value={formData.ownerNames} onChange={handleChange} placeholder="Owner Name(s)" rows={3} style={{ padding: "0.9rem", border: "1px solid #ccc" }} />
        <input name="ownershipPercentages" value={formData.ownershipPercentages} onChange={handleChange} placeholder="Example: 20, 30, 50" style={{ padding: "0.9rem", border: "1px solid #ccc" }} />
        <input name="employeeCount" value={formData.employeeCount} onChange={handleChange} placeholder="Number of Employees" style={{ padding: "0.9rem", border: "1px solid #ccc" }} />
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Link
          href={`/checkout?state=${stateCode}`}
          style={{
            display: "inline-block",
            backgroundColor: "#000",
            color: "#fff",
            textDecoration: "none",
            padding: "0.9rem 1.5rem",
            borderRadius: "6px",
            fontWeight: 600,
          }}
        >
          Continue to Checkout
        </Link>
      </div>
    </div>
  );
}

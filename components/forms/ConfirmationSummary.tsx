"use client";

import { useEffect, useState } from "react";

type IntakeFormData = {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  ownerNames: string;
  ownershipPercentages: string;
  employeeCount: string;
};

const STORAGE_KEY = "intakeFormData";

export default function ConfirmationSummary() {
  const [formData, setFormData] = useState<IntakeFormData | null>(null);

useEffect(() => {
  try {
    const saved = localStorage.getItem("intakeFormData");

    if (saved) {
      setFormData(JSON.parse(saved));

      // 🔥 clear AFTER reading (one-time display)
      localStorage.removeItem("intakeFormData");
    }
  } catch (error) {
    console.error("Failed to load confirmation data", error);
  }
}, []);

  if (!formData) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          backgroundColor: "#fff",
        }}
      >
        <p style={{ margin: 0 }}>No submitted business summary found.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1.25rem",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Submitted Business Summary</h2>

      <div style={{ display: "grid", gap: "0.75rem" }}>
        <p><strong>Business Name:</strong> {formData.businessName || "—"}</p>
        <p><strong>Business Address:</strong> {formData.businessAddress || "—"}</p>
        <p><strong>Business Phone:</strong> {formData.businessPhone || "—"}</p>
        <p><strong>Business Email:</strong> {formData.businessEmail || "—"}</p>
        <p><strong>Owner Name(s):</strong> {formData.ownerNames || "—"}</p>
        <p><strong>Ownership Percentages:</strong> {formData.ownershipPercentages || "—"}</p>
        <p><strong>Employee Count:</strong> {formData.employeeCount || "—"}</p>
      </div>
    </div>
  );
}
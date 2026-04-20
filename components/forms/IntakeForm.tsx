"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const [formData, setFormData] = useState<IntakeFormData>({
    businessName: "",
    businessAddress: "",
    businessPhone: "",
    businessEmail: "",
    ownerNames: "",
    ownershipPercentages: "",
    employeeCount: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("intakeFormData");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
      } catch (error) {
        console.error("Failed to load intake form data", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("intakeFormData", JSON.stringify(formData));
  }, [formData]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleContinue() {
    router.push(`/checkout?state=${stateCode}`);
  }

  return (
    <div>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        Please ensure all information is accurate before continuing.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>
            Business Name
          </label>
          <input
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            style={{ width: "100%", padding: "0.9rem", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>
            Business Address
          </label>
          <textarea
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            placeholder="Business Address"
            rows={4}
            style={{ width: "100%", padding: "0.9rem", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>
            Business Phone
          </label>
          <input
            name="businessPhone"
            value={formData.businessPhone}
            onChange={handleChange}
            placeholder="Business Phone"
            style={{ width: "100%", padding: "0.9rem", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>
            Business Email
          </label>
          <input
            name="businessEmail"
            type="email"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="Business Email"
            style={{ width: "100%", padding: "0.9rem", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>
            Business Owner / Partner Name(s)
          </label>
          <textarea
            name="ownerNames"
            value={formData.ownerNames}
            onChange={handleChange}
            placeholder="Owner Name(s)"
            rows={3}
            style={{ width: "100%", padding: "0.9rem", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>
            Ownership Percentages
          </label>
          <input
            name="ownershipPercentages"
            value={formData.ownershipPercentages}
            onChange={handleChange}
            placeholder="Example: 20, 30, 50"
            style={{ width: "100%", padding: "0.9rem", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>
            Number of Employees
          </label>
          <input
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            placeholder="How many employees are there?"
            style={{ width: "100%", padding: "0.9rem", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <button
          type="button"
          onClick={handleContinue}
          style={{
            display: "inline-block",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            padding: "0.9rem 1.5rem",
            borderRadius: "6px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Continue to Checkout
        </button>
      </div>
    </div>
  );
}
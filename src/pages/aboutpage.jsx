/* src/pages/aboutpage.jsx */
import React from "react";
import { Container } from "../components/styles";

export function AboutPage() {
  return (
    <main style={{ padding: "3rem 0" }}>
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#1E331A" }}>
          About Al Noor Agro Services
        </h2>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>
            We are a trusted provider of hybrid and normal vegetable and grain seeds,
            pesticides, and sprayer machines based in Basirpur, Okara, Pakistan.
            Our mission is to support farmers and retailers with high-quality agricultural
            inputs and professional wholesale service.
          </p>
          <h3 style={{ color: "#1E331A", margin: "1.5rem 0", fontWeight: "600" }}>Our Trust Indicators</h3>
          <div style={{ display: "inline-flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{
              background: "#F0F8E5", border: "1px solid #D2E5C4", padding: "0.75rem 1.25rem",
              borderRadius: "6px", minWidth: "180px"
            }}>
              <strong style={{ color: "#1E331A" }}>Business Registration No:</strong>
              <span style={{ color: "#6B8F4F", marginLeft: "0.5rem" }}>[Pending]</span>
            </div>
            <div style={{ background: "#F0F8E5", border: "1px solid #D2E5C4", padding: "0.75rem 1.25rem", borderRadius: "6px", minWidth: "180px" }}>
              <strong style={{ color: "#1E331A" }}>NTN No:</strong>
              <span style={{ color: "#6B8F4F", marginLeft: "0.5rem" }}>[Pending]</span>
            </div>
            <div style={{ background: "#F0F8E5", border: "1px solid #D2E5C4", padding: "0.75rem 1.25rem", borderRadius: "6px", minWidth: "180px" }}>
              <strong style={{ color: "#1E331A" }}>Certifications:</strong>
              <span style={{ color: "#6B8F4F" }}>Quality Certified Placeholder Icon</span>
            </div>
          </div>
        </Container>
      </main>
    </main>
  );
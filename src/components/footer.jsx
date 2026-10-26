/* src/components/footer.jsx */
import React from "react";

export function Footer() {
  return (
    <footer style={{
      background: "#1E331A",
      color: "#D2E5C4",
      padding: "2rem",
      marginTop: "auto",
      fontSize: "0.875rem",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <strong style={{ color: "#B4F54C" }}>Al Noor Agro Services</strong>
          <br />
          Business Registration No: <span style={{ color: "#D2E5C4", marginLeft: "0.5rem" }}>[Pending]</span>
          <br />
          NTN No: <span style={{ color: "#D2E5C4", marginLeft: "0.5rem" }}>[Pending]</span>
        </div>
        <div>
          <span style={{ color: "#B4F54C", fontWeight: "700" }}>Certifications:</span>
          <span style={{ color: "#D2E5C4", marginLeft: "0.5rem" }}>Quality Certified Placeholder Icon</span>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="https://wa.me/923324964370" target="_blank" rel="noopener" style={{ color: "#B4F54C", textDecoration: "none", fontWeight: "600" }}>
            WhatsApp
          </a>
          <a href="/about" style={{ color: "#D2E5C4", textDecoration: "none" }}>About</a>
        </div>
      </div>
    </footer>
  );
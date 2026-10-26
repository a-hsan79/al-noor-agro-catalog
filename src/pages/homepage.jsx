/* src/pages/homepage.jsx */
import React from "react";
import { Container } from "../components/styles";
import { Grid } from "../components/grid";
import { WhatsAppFloating } from "../components/whatsapp";

export function HomePage() {
  return (
    <main style={{ padding: "2rem 0" }}>
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#1E331A" }}>
          Welcome to Al Noor Agro Services
        </h2>
        <Grid cols={3} gap="1.5rem">
          <div style={{ background: "#FFF", border: "1px solid #D2E5C4", borderRadius: "8px", padding: "1.5rem", textAlign: "center" }}>
            <h3 style={{ marginBottom: "0.5rem", color: "#1E331A" }}>Vegetable Seeds</h3>
            <p style={{ color: "#6B8F4F", fontSize: "0.9rem" }}>Tomato, Carrot, Brinjal, Chili</p>
            <a href="/products" style={{ color: "#B4F54C", fontWeight: "600", textDecoration: "none" }}>View All</a>
          </div>
          <div style={{ background: "#FFF", border: "1px solid #D2E5C4", borderRadius: "8px", padding: "1.5rem", textAlign: "center" }}>
            <h3 style={{ marginBottom: "0.5rem", color: "#1E331A" }}>Grain Seeds</h3>
            <p style={{ color: "#6B8F4F", fontSize: "0.9rem" }}>Wheat, Rice, Maize</p>
            <a href="/products" style={{ color: "#B4F54C", fontWeight: "600", textDecoration: "none" }}>View All</a>
          </div>
          <div style={{ background: "#FFF", border: "1px solid #D2E5C4", borderRadius: "8px", padding: "1.5rem", textAlign: "center" }}>
            <h3 style={{ marginBottom: "0.5rem", color: "#1E331A" }}>Pesticides &amp; Machinery</h3>
            <p style={{ color: "#6B8F4F", fontSize: "0.9rem" }}>Sprayers, Fungicides, Insecticides</p>
            <a href="/products" style={{ color: "#B4F54C", fontWeight: "600", textDecoration: "none" }}>View All</a>
          </div>
        </Grid>
        <WhatsAppFloating defaultQuantity={1} isWholesale={false} />
      </Container>
    </main>
  );
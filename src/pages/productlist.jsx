/* src/pages/productlist.jsx */
import React from "react";
import { Container } from "../components/styles";
import { Grid } from "../components/grid";
import { WhatsAppFloating } from "../components/whatsapp";

export function ProductList() {
  const products = [
    { id: 1, name: "Tomato Seeds Hybrid", category: "Vegetable Seeds", basePrice: 120, unit: "kg", wholesale: false },
    { id: 2, name: "Carrot Seeds", category: "Vegetable Seeds", basePrice: 95, unit: "kg", wholesale: false },
    { id: 3, name: "Wheat Seeds", category: "Grain Seeds", basePrice: 800, unit: "quintal", wholesale: true },
    { id: 4, name: "Rice Seeds Basmati", category: "Grain Seeds", basePrice: 1500, unit: "quintal", wholesale: true },
  ];

  return (
    <main style={{ padding: "2rem 0" }}>
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#1E331A" }}>
          Our Product Catalog
        </h2>
        <Grid cols={3} gap="1.5rem">
          {products.map((p) => (
            <div key={p.id} style={{
              background: "#FFF",
              border: "1px solid #D2E5C4",
              borderRadius: "8px",
              padding: "1.5rem",
              textAlign: "center",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.transform = "translateY(-4px)"}"
            onMouseOut={(e) => (e.target.style.transform = "translateY(0px)"}
            >
              <h3 style={{ marginBottom: "0.5rem", color: "#1E331A" }}>{p.name}</h3>
              <p style={{ color: "#6B8F4F", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{p.category}</p>
              <p style={{ fontWeight: "600", color: "#B4F54C", marginBottom: "0.5rem" }}>{p.basePrice} / {p.unit}</p>
              {p.wholesale ? (
                <button style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  background: "#fff",
                  border: "2px solid #B4F54C",
                  color: "#1E331A",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  fontWeight: "600",
                  cursor: "pointer",
                }} onClick={() => window.location.href=`/product/${p.id}?wt=wholesale`}>
                  Request Wholesale Price
                </button>
              ) : (
                <button style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  background: "#B4F54C",
                  color: "#1E331A",
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}>
                  Inquire Now
                </button>
              )}
            </div>
          ))}
        </Grid>
        <WhatsAppFloating defaultQuantity={1} isWholesale={false} />
        <p style={{ marginTop: "2rem", textAlign: "center", color: "#6B8F4F", fontSize: "0.85rem" }}>
          Prices shown are retail. Wholesale pricing available on request.
        </p>
      </Container>
    </main>
  );
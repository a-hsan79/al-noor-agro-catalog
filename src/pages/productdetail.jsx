/* src/pages/productdetail.jsx */
import React from "react";
import { Container } from "../components/styles";
import { WhatsAppFloating } from "../components/whatsapp";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const wholesale = location.search.includes("wt=wholesale");

  const products = [
    { id: 1, name: "Tomato Seeds Hybrid", category: "Vegetable Seeds", basePrice: 120, unit: "kg", wholesale: false, description: "High-yield hybrid tomato seeds, 98% germination." },
    { id: 2, name: "Carrot Seeds", category: "Vegetable Seeds", basePrice: 95, unit: "kg", wholesale: false, description: "Premium carrot seeds for kitchen gardens." },
    { id: 3, name: "Wheat Seeds", category: "Grain Seeds", basePrice: 800, unit: "quintal", wholesale: true, description: "Certified wheat seeds, premium quality." },
    { id: 4, name: "Rice Seeds Basmati", category: "Grain Seeds", basePrice: 1500, unit: "quintal", wholesale: true, description: "Long-grain basmati rice seeds, aromatic." },
  ];

  const product = products.find((p) => String(p.id) === id);
  if (!product) return <p>Product not found</p>;

  const urlParams = new URLSearchParams(location.search);
  const quantity = Math.max(1, parseInt(urlParams.get("q") || "1", 10));

  return (
    <main style={{ padding: "2rem 0" }}>
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#1E331A" }}>
          {product.name}
        </h2>
        <div style={{ background: "#FFF", border: "1px solid #D2E5C4", borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
          <p style={{ color: "#6B8F4F", fontSize: "0.9rem", marginBottom: "1rem" }}>{product.description}</p>
          <p style={{ fontWeight: "600", color: "#B4F54C", marginBottom: "0.5rem" }}>{product.basePrice} / {product.unit}</p>
          {product.wholesale ? (
            <p style={{ color: "#6B8F4F", fontSize: "0.85rem", marginBottom: "1rem" }}>
              Wholesale pricing available on request. Please contact us for a customized quote.
            </p>
          ) : (
            <p style={{ color: "#6B8F4F", fontSize: "0.85rem", marginBottom: "1rem" }}>
              Displayed price is for retail. Bulk discounts available for large orders.
            </p>
          )}
          <label style={{ display: "block", margin: "1rem 0", color: "#1E331A" }}>
            Quantity:
            <input
              type="number"
              min="1"
              value={quantity}
              minWidth="60px"
              style={{
                padding: "0.5rem",
                border: "1px solid #D2E5C4",
                borderRadius: "4px",
                width: "80px",
                textAlign: "center",
              }}
              onChange={(e) => navigate(`/${product.id}?q=${e.target.value}&wt=${wholesale ? "wholesale" : "retail"}`)}
            />
          </label>
        </div>

        <WhatsAppFloating defaultQuantity={quantity} isWholesale={wholesale} productName={product.name} />

        <p style={{ marginTop: "2rem", textAlign: "center", color: "#6B8F4F" }}>
          <a href="/products" style={{ color: "#B4F54C", fontWeight: "500", textDecoration: "none" }}← Back to Products</a>
        </p>
      </Container>
    </main>
  );
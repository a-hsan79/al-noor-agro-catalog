/* src/components/header.jsx */
import React from "react";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product");
  return (
    <header style={{
      background: "#1E331A",
      color: "#FFFDF0",
      padding: "1rem 2rem",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "700" }}>
          <a href="/" style={{ color: "#FFFDF0", textDecoration: "none" }}>
            Al Noor Agro Services
          </a>
        </h1>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <a href="/" style={{ color: "#FFFDF0", textDecoration: "none", fontWeight: "500" }}>Home</a>
          <a href="/products" style={{ color: "#FFFDF0", textDecoration: "none", fontWeight: "500" }}>Products</a>
          <a href="/about" style={{ color: "#FFFDF0", textDecoration: "none", fontWeight: "500" }}>About</a>
          {isProductPage && (
            <a href="/products" style={{ color: "#FFFDF0", textDecoration: "none", fontWeight: "500" }}>
              ← Back
            </a>
          )}
        </nav>
      </div>
    </header>
  );
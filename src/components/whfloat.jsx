/* src/components/whatsapp.jsx */
import React from "react";

export function WhatsAppFloating({ defaultQuantity = 1, isWholesale = false, productName = "Product" }) {
  const message = isWholesale
    ? `Hi, I want a wholesale quote for ${defaultQuantity} ${productName}.`
    : `Hi, I want to buy ${defaultQuantity} ${productName}.`;

  return (
    <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 1000 }}>
      <a
        href={`https://wa.me/923324964370?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener"
        style={{
          background: "#B4F54C",
          color: "#1E331A",
          padding: "1rem",
          borderRadius: "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          textDecoration: "none",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.71 3.33h2.32c.18.09.3.23.37.39l2.88 5.37c.12.22.18.48.18.75 0 .56-.44.96-.99.84l-4.96 1.07c-.34.07-.5.13-.67.13-.39 0-.58-.27-.58-.71V3.16l-4.46 2.06c.32.64.66 1.24 1.09 1.78l3.52-2.66c.11-.17.17-.35.17-.55 0-.55-.45-.95-.96-.83L3.04 8.12c-.17.3-.37.58-.51.82-.07.1-.12.21.12.34l4.45 2.66c.52.45 1.17.76 1.88.88l3.37-1.75c.18-.1.3-.23.37-.35l2.81-5.09c.07-.26.03-.49-.07-.68l2.51-1.25c-.06-.28-.23-.5-.46-.59m2.17.65c-.34.08-.5.25-.56.47l-2.23 4.51c-.13.26-.3.5-.5.72-.15.17-.45.23-.62.15l-4.49 2.15c-.33.15-.59.34-.71.54-.1.07-.16.15-.2.22-.05.08-.1.15-.16.25l.71 4.2c.05.38.3 7.32 3.54 8.68 1.98 1.02 4.25.98 5.41-1.17l2.1-4.39c.12.06.24.07.35.06.35.02.59-.17.63-.47.05-.37.08-.58.07-.82-.04-.03-.09-.06-.12-.09L14.06 16.07a.56.56 0 0 0 .41.17.5.5 0 0 0 .1-.28 1.2.1 0 0 0-.11-.31l-3.09-1.03c-.2-.07-.37-.17-.48-.27m-.88-.08c.02-.38.05-.75.05-1.14 0-1.04-.74-1.8-1.7-1.95l-1.68-.07c.54.8 1.03 1.65 1.35 2.48.32.82.48 1.7.48 2.53 0 .39-.15.78-.47 1.08-.37.36-.81.56-1.31.62m-.42-5.96h-2.33l-.33 1.86h-2.26l-.33-1.86h-2.33l-.33 1.86h-2.26l-.34-1.86H5.08l-.33 1.86H2.77l-.33-1.86H.08l.33-1.86H2.23l.33-1.86H.08l.33 1.86H2.23l.33 1.86h2.33l.33-1.86h2.26l.33-1.86h2.33l.33 1.86h2.26l.33-1.86h2.33"/>
        </svg>
      </a>
    </div>
  );
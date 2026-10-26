/* src/components/grid.jsx */
import React from "react";

export function Grid({ cols = 2, gap = "1.5rem", children }) {
  return (
    <div style={{
      display: "grid",
      gap: gap,
      gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, calc((100% - ${gap} * (cols - 1)) / cols)), 1fr))`,
    }}>
      {children}
    </div>
  );
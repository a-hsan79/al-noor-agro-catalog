/* Tailwind Configuration */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B4F54C",       // Fresh Lime Green (CTA buttons)
        background: "#FFFDF0",    // Soft Cream / Warm Ivory
        text: "#1E331A",          // Deep Forest Green (headings & text)
        border: "#D2E5C4",        // Muted Sage Green (section borders/accents)
        muted: "#6B8F4F",         // Muted Sage for secondary text
      },
      fontFamily: {
        sans: ["'Nunito'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
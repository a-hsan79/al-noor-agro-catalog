/* src/components/styles.jsx */
import { createGlobalStyle } from "react";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #B4F54C;
    --background: #FFFDF0;
    --text: #1E331A;
    --border: #D2E5C4;
    --muted: #6B8F4F;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Nunito', sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
  }
  a { text-decoration: none; color: inherit; }
  img { max-width: 100%; height: auto; display: block; }

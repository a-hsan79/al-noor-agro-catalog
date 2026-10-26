---
name: vite-react-tailwind-catalog
description: Build Vite+React+Tailwind catalog websites for agricultural/wholesale businesses like Al Noor Agro Services. Full-stack workflow from scaffolding to product admin with WhatsApp conversion.
category: web-dev
tags: [vite, react, tailwind, catalog, wholesale, retail, whatsapp, admin]
priority: always-on
---

# Vite + React + Tailwind Catalog Website Skill

## Triggers
Use when building a complete catalog website for a retail/wholesale business that requires:
- Product listing and detail pages
- WhatsApp inquiry conversion (primary goal)
- Admin product management
- Responsive design with Tailwind CSS
- Vite + React routing (no Next.js)
- Vercel deployment

## Always-On Rules (in SKILL.md body)

### 1. Technology Stack
Always use: Vite + React + Tailwind CSS (NEVER Next.js unless explicitly requested)
- Hosting: Vercel (always include `vercel.json` with fallback rewrites for SPA routes)
- Admin: Supabase (email+password auth, structured product database)
- WhatsApp: Always use `https://wa.me/{phone}` with encoded messages, never claim automatic sending

### 2. Project Structure
- `package.json` with React, Vite, Tailwind dev dependencies
- `tailwind.config.cjs` with exact color palette from business requirements
- `src/main.jsx` — React DOM root renderer
- `src/App.jsx` — Router with Header + main content + Footer
- `src/components/` — Header, Footer, Grid, WhAppFloating
- `src/pages/` — Homepage, ProductList, ProductDetail, About
- `index.html` — entry point
- `vercel.json` — always in root for fallback routing


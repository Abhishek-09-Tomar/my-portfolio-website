# Abhishek Tomar - Google-Inspired Portfolio

A clean, modern, Google-inspired portfolio website for **Abhishek Tomar**, built as a Software Engineering Intern candidate profile. This project does **not** copy Google's logo, official branding, or exact UI. It follows a clean product-page design philosophy: white space, rounded cards, Material-style buttons, subtle shadows, smooth interactions, responsive layout, and tasteful use of blue, red, yellow, and green.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React icons

## Features

- Responsive mobile-first design
- Optional dark mode
- Reusable component structure
- SEO meta tags
- Semantic HTML sections
- Accessible links, buttons, labels, and form fields
- Material Design-inspired cards and buttons
- Lightweight animations with reduced-motion support
- Recruiter-friendly internship portfolio content

## Project Structure

```txt
abhishek-google-inspired-portfolio/
├── public/
│   ├── Abhishek_Tomar_Resume.pdf
│   ├── favicon.svg
│   └── profile-card.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   ├── Container.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually:

```bash
http://localhost:5173
```

## Production Build

```bash
npm run build
npm run preview
```

## Personalization Notes

1. Replace `public/Abhishek_Tomar_Resume.pdf` with your final ATS resume PDF.
2. Replace `public/profile-card.svg` with your real professional photo if you want.
3. Update live demo links in `src/data/portfolio.js` when projects are deployed.
4. Connect the contact form to Formspree, EmailJS, or your own backend API.

## Design Note

This portfolio is inspired by Google's clean design philosophy, not by Google's protected logo, brand identity, or official website UI.

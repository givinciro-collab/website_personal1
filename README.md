# Giovanna Vinci Roberto — Portfolio

A single-page personal portfolio built with Vite, React, and Tailwind CSS. Supports system light/dark theme and smooth scrolling.

## Run locally (Mac or Windows)

1. Install [Node.js](https://nodejs.org/) (LTS recommended).
2. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

3. Open **http://localhost:5173** in your browser.

## Edit content

All text and links live in **`src/data/siteData.js`**. Edit that file to update your name, experience, projects, skills, education, contact, and nav/footer links.

## Add your resume PDF

Place your resume file as **`public/resume.pdf`**. The “Download Resume” button in the navbar will then link to it.

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs the site to the `dist/` folder. `npm run preview` serves that folder locally so you can test before deploying.

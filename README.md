# Data Engineer Portfolio (React + Vite + Tailwind CSS)

Modern, responsive portfolio website for showcasing:

- Individual data engineering projects
- Specializations and strengths
- Education
- Tool stack and contact information
- Resume download
- Light and dark mode switch

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

Use the mode toggle button in the hero section to switch between light and dark themes. Your preference is saved in browser local storage.

## Build for production

```bash
npm run build
npm run preview
```

## Customize content

Edit these arrays in `src/App.jsx`:

- `specializations`
- `projects`
- `education`
- `toolbelt`

Update your contact email in the `#contact` section in `src/App.jsx`.

Replace `public/resume.pdf` with your real resume PDF.

## Styling

This project uses Tailwind CSS utility classes for component styling.

# Daraz Bangladesh — System Analysis and Design

This project is a multi-page Next.js website that presents the complete System Analysis and Design report for Daraz Bangladesh, organized across the four major chapters of the project: Recognition of Need, Feasibility Study, Analysis, and Design. The website preserves the report’s detailed content, visual figures, diagrams, tables, and interview transcripts in a structured, readable digital format.

## Features

- Responsive, project-style homepage with clear chapter navigation
- Full report presentation across all four academic chapters
- Dedicated pages for the report sections and group details
- Shared navigation, branding, and footer across the site
- Reusable styling and structured content rendering for report elements
- Preserved report tables, charts, DFDs, and interview excerpts

## Project structure

```bash
daraz-nextjs-source/
├── app/
│   ├── globals.css            # Global styles and shared design system
│   ├── layout.js              # Shared layout, navigation, and footer
│   ├── page.js                # Homepage and overview
│   ├── chapter-1/
│   ├── chapter-2/
│   ├── chapter-3-gathering/
│   ├── chapter-3-analysis/
│   ├── chapter-4-design/
│   ├── chapter-4-database/
│   └── team/
├── components/
│   ├── charts/                # Chart, DFD, and report visual components
│   ├── doc/                   # Content rendering for report nodes
│   ├── ChapterNav.jsx
│   ├── Nav.jsx
│   ├── PageHeader.jsx
│   └── Tabs.jsx
├── data/
│   ├── charts.js              # Chart data used in the report
│   ├── dfd.js                 # DFD-related report data
│   └── content/               # Chapter content in structured JSON format
├── public/                    # Static assets
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── next.config.mjs
├── jsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── .gitignore
├── README.md
└── src/
```

## Getting started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Available commands

```bash
npm run dev    # Start the local development server
npm run build  # Create a production build
npm run start  # Serve the production build
npm run lint   # Run linting
```

## Academic context

This project is a public-facing version of the group report for:

- Course: Information System Design and Software Engineering Lab
- Course Code: CSE 346
- Section: 20
- Semester: Summer 2026
- Group: 05

## Notes

- Student IDs have been omitted from the public version to protect privacy.
- The report content, chapter structure, tables, figures, diagrams, and interview transcripts are preserved.
- The site is intended to represent the complete group project digitally without altering its academic substance.

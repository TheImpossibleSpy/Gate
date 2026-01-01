# GATE Mechanical Engineering Preparation

A static website for GATE Mechanical Engineering preparation, built with Astro.

## Features

*   **Content-First:** Markdown-based content management.
*   **Fast:** Static site generation using Astro.
*   **Math Support:** Uses KaTeX for rendering equations.
*   **Components:** Reusable components for PYQs (Previous Year Questions) and Formulas.
*   **Responsive:** Mobile-friendly design.
*   **Zero Cost:** Deploys to Cloudflare Pages for free.

## Project Structure

```
├── public/             # Static assets (images, diagrams)
├── src/
│   ├── components/     # Reusable UI components (Sidebar, PYQ, Formula)
│   ├── content/        # Markdown content (Subjects -> Topics)
│   ├── layouts/        # Page layouts
│   └── pages/          # Routing logic
└── astro.config.mjs    # Astro configuration
```

## How to Add Content

1.  Navigate to `src/content/gate/`.
2.  Create a folder for the Subject (if it doesn't exist), e.g., `thermodynamics`.
3.  Create a Markdown file for the Topic, e.g., `first-law.md`.
4.  Add frontmatter to the top of the file:

```markdown
---
title: First Law of Thermodynamics
description: Explanation of the First Law
order: 1
tags: ["thermodynamics", "energy"]
layout: ../../../layouts/TopicLayout.astro
---
```

5.  Write content using Markdown. You can use standard Markdown, LaTeX for math, and import components.

### Adding Formulas

Use the `<Formula>` component to highlight equations.

```jsx
import Formula from '../../../components/Formula.astro';

<Formula title="Energy Balance">
$$ \Delta U = Q - W $$
</Formula>
```

### Adding PYQs

Use the `<PYQ>` component.

```jsx
import PYQ from '../../../components/PYQ.astro';

<PYQ year="2020" marks="2">
Question text here...
**Solution:**
Solution steps...
</PYQ>
```

## How to Add Diagrams

1.  Place your image or SVG file in `public/diagrams/`.
2.  Reference it in your Markdown file:

```markdown
![Diagram Description](/diagrams/my_diagram.svg)
```

## Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```

## Deployment to Cloudflare Pages

1.  Push this repository to GitHub/GitLab.
2.  Log in to Cloudflare Dashboard > Pages.
3.  Create a new project > Connect to Git.
4.  Select this repository.
5.  **Build Settings:**
    *   **Framework Preset:** Astro
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
6.  Deploy.

## Redesigning UI

*   **Styles:** Tailwind CSS is used. Global styles are in `src/layouts/Layout.astro` (referencing standard Tailwind classes) or `src/styles/global.css` (if created).
*   **Layouts:** Modify `src/layouts/Layout.astro` to change the main structure (sidebar, header, main area).
*   **Typography:** The content uses `@tailwindcss/typography` (prose class). Modify `tailwind.config.mjs` (or `astro.config.mjs` plugin options) to customize fonts and colors.

## License

MIT

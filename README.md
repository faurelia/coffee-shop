# Copper Kettle Coffee

A responsive multi-page coffee shop website built with Vite, Tailwind CSS, and Lucide icons.

## Pages

- Home: `/index.html`
- About: `/about.html`
- Menu: `/menu.html`
- Gift Cards: `/gift-cards.html`
- Rewards: `/rewards.html`
- Contact: `/contact.html`

## Requirements

- Node.js 18 or newer
- npm

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Project Structure

```text
.
├── about.html
├── contact.html
├── gift-cards.html
├── index.html
├── menu.html
├── rewards.html
├── public/          # Public static files
├── src/
│   ├── assets/      # Page images and local assets
│   ├── main.js      # Shared icons and mobile navigation
│   └── style.css    # Tailwind and shared design tokens
├── package.json
└── vite.config.js
```

The Vite configuration defines each HTML page as a production entry point, so all pages are emitted when `npm run build` runs.

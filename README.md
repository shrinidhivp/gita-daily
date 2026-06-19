# ಶ್ರೀ ಭಗವದ್ಗೀತಾ ದೈನಂದಿನ

A beautiful web app that gives you **one Bhagavad Gita shloka every day in Kannada**, with its meaning and life guidance. Also includes Bhagavata stories in Kannada.

## Features

- **Daily Shloka** — Automatically shows a different shloka every day (cycles through all 18 chapters)
- **Kannada Text** — Full Kannada shloka with Sanskrit transliteration (expandable)
- **Meaning** — Clear Kannada meaning of each shloka
- **Life Guidance** — Practical guidance on how to use the teaching in daily life
- **Navigate All 18 Chapters** — Browse any shloka from Adhyaya 1 to 18
- **Bhagavata Stories** — Daily Bhagavata story in Kannada with life lessons
- **Responsive Design** — Works beautifully on mobile and desktop

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (fast build tool)
- **Plain CSS** (no UI framework, fully custom)
- **Google Fonts** — Noto Sans/Serif Kannada

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/gita-daily.git
cd gita-daily

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder — ready to deploy anywhere.

### Preview Production Build

```bash
npm run preview
```

## Deploy

You can deploy this app for free on:

- **[Vercel](https://vercel.com)** — `vercel deploy`
- **[Netlify](https://netlify.com)** — drag & drop the `dist/` folder
- **GitHub Pages** — use the `gh-pages` npm package

## Project Structure

```
gita-daily/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # Root component with tabs
│   ├── App.css           # All styles
│   ├── index.css         # CSS variables and reset
│   ├── data/
│   │   ├── shlokas.ts    # All shlokas (18 chapters)
│   │   └── stories.ts    # Bhagavata stories
│   └── components/
│       ├── ShlokaTab.tsx # Shloka browser
│       └── StoryTab.tsx  # Story browser
└── README.md
```

## Adding More Shlokas

Edit `src/data/shlokas.ts` and add entries to the `shlokas` array:

```ts
{
  chapter: 2,         // Adhyaya number (1–18)
  verse: 55,          // Shloka number
  sanskrit: '...',    // Transliteration
  kannada: '...',     // Kannada text of the shloka
  meaning: '...',     // Kannada meaning
  application: '...', // Life guidance in Kannada
  keyword: '...',     // Short keyword (shown as badge)
}
```

## Adding More Stories

Edit `src/data/stories.ts` and add to the `stories` array:

```ts
{
  id: 11,
  titleKannada: '...',   // Story title in Kannada
  source: '...',          // Source (e.g., ಭಾಗವತ — ೫ನೇ ಸ್ಕಂಧ)
  content: '...',         // Story in Kannada
  lesson: '...',          // Life lesson in Kannada
}
```

---

ಶ್ರೀಕೃಷ್ಣ ಅರ್ಪಣಮಸ್ತು 🪷

# Devoria

Devoria is a web platform that connects clients with developers and development communities.  
The app includes developer discovery, project browsing, profile details, reviews/comments, service request flow, multilingual UI (EN/FR/AR), and community pages.

## Tech Stack

- Frontend: React 19, TypeScript, Vite, React Router
- Styling: CSS, TailwindCSS, Sass
- Internationalization: i18next, react-i18next
- Backend (local API): Express + CORS (stores comments in `comments.json`)
- Testing: Vitest + Testing Library
- Deployment: Firebase Hosting (SPA rewrite enabled)

## Project Structure

- `src/` main frontend app
- `public/` static assets and community data
- `server.js` local Express API for comments
- `comments.json` local file-based comments storage
- `firebase.json` + `.firebaserc` Firebase hosting configuration

## Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm (comes with Node.js)
- Git
- Firebase CLI (only if you want deployment)

```bash
npm install -g firebase-tools
```

## How To Get The Project

```bash
git clone https://github.com/Marindo-12/Devoria.git
cd Devoria
```

## Install Packages

Install all dependencies:

```bash
npm install
```

### Main Runtime Packages

- `react`, `react-dom`, `react-router-dom`
- `i18next`, `react-i18next`, `i18next-browser-languagedetector`
- `express`, `cors`
- `firebase`
- `dayjs`, `lucide-react`, `react-responsive`, `uuid`

### Main Development Packages

- `typescript`, `vite`, `@vitejs/plugin-react`
- `eslint`, `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- `tailwindcss`, `postcss`, `autoprefixer`, `sass-embedded`
- `concurrently`

## Available Scripts

- `npm run dev`: start frontend (Vite) and local API (`server.js`) together
- `npm run start`: same as `dev`
- `npm run build`: type-check and build production files to `dist/`
- `npm run preview`: preview production build locally
- `npm run lint`: run ESLint
- `npm run test`: run Vitest once
- `npm run test:watch`: run tests in watch mode
- `npm run test:ui`: run Vitest UI

## Run Locally

```bash
npm run dev
```

By default:

- Frontend: `http://localhost:5173`
- Local comments API: `http://localhost:5000`

## Build For Production

```bash
npm run build
npm run preview
```

## Firebase Deployment

This project is configured to deploy `dist/` as a single-page app.

```bash
npm run build
firebase login
firebase deploy
```

Current Firebase default project in `.firebaserc`: `devoria-2ce34`.

## Contributors

- Yassine Chouyoukh
- Mohamed Ait Hammadi

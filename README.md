# Flashcard Generator

A React + TypeScript + Vite app that generates study flashcards and note summaries from raw text using an AI backend.

## Production Deployment
  - `https://flashcard-generator-roan.vercel.app/`

## Overview

This project includes:

- A frontend built with React, TypeScript, Vite, and Tailwind CSS
- A simple AI-powered backend using Express and the Groq SDK
- Flashcard generation from user notes
- Note summarization into bullet points
- Infinite scroll-style flashcard loading

## Features

- Enter lecture notes, textbook text, or study material
- Generate flashcards with question/answer pairs
- Generate summaries as bullet points
- Navigate between flashcards and summary views
- Supports future AI-backed enhancements through `/api/flashcards` and `/api/summarize`

## Project Structure

- `src/` — React application source
  - `pages/flashcard-page.tsx` — main flashcard generator page
  - `pages/summary-page.tsx` — note summarization page
  - `components/` — reusable UI components
  - `services/` — client-side API helpers
- `server/` — Express backend for AI requests
- `api/` — alternate API implementation/export
- `public/` — static assets

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with your Groq API key:

   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

3. Run the frontend development server:
    - `npm run dev`

4. Start the backend server separately if needed:
    - `npm run server` 

   - The Express app source is in `server/index.ts` and exposes:
     - `GET /api/flashcards?notes=<text>`
     - `GET /api/summarize?notes=<text>`

## Usage

- Open the app in the browser from Vite's local dev server
- Enter notes into the text area on the Flashcards page
- Click `Submit` to generate flashcards
- Scroll to load additional flashcards automatically
- Visit the Summary page to generate a condensed note summary

## Scripts

- `npm run dev` — start Vite development server
- `npm run server` - start express server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Notes

- The backend uses `@google/generative-ai` powered through Groq and the `openai/gpt-oss-20b` model.
- The request logger stores entries in the configured database via `server/services/logging.ts`.
- If you add a backend start script, ensure TypeScript files are compiled or run with a compatible runtime.

## License

This repo does not specify a license. Add one if you plan to share it publicly.

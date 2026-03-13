# Portfolio Site

React portfolio site for presenting featured projects, technical skills, and contact details.

## Features

- Single-page portfolio layout with responsive sections
- Project cards for Aung Market, Pandan Kitchen, and the portfolio itself
- Centralized content data in `src/data/portfolioData.js`
- Mobile navigation and polished section styling
- Contact section with GitHub and email details

## Tech Stack

- React 18
- JavaScript
- CSS
- Create React App

## Project Structure

- `src/App.js` - main page composition
- `src/components/` - reusable portfolio sections
- `src/data/portfolioData.js` - editable content and project metadata
- `src/assets/` - project images and illustrations

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open `http://localhost:3000`

## Build

Create a production build with:

```bash
npm run build
```

## Notes

- Portfolio content is driven from one file so project details can be updated quickly.
- The current portfolio reflects the upgraded Aung Market and Pandan Kitchen projects.

## Deployment

- `vercel.json` is included for SPA routing on Vercel
- The site can also be deployed from the production build output on other static hosts

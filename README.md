# Task 11 — Complete Full Stack Internship Management Platform

**InternBridge** — One workspace. Every internship journey.

An internship operations platform connecting candidates, opportunities, applications, learning tasks and mentor reviews.

## Run locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. No npm install, database, API server or build command is required.

## Included functionality
- Responsive professional interface for desktop, tablet and mobile
- Working task-specific workflows and interactive controls
- Search, filtering, forms and local demo data
- Browser `localStorage` persistence for changes made in this browser
- Dark/light theme toggle
- Reference-only Express backend source in `backend-sample/`

## Architecture note
The runnable application is a **static frontend**. No database is connected. The `backend-sample/` folder is included as illustrative backend source code only; it is not called by the frontend and does not run on GitHub Pages. GitHub Pages hosts the static frontend only. Local browser data is not shared across devices or browsers.

## GitHub Pages deployment
1. Create a GitHub repository using the suggested name below.
2. Upload all project files and folders to the repository root.
3. Open **Settings → Pages** and select **GitHub Actions** as the source if prompted.
4. The included `.github/workflows/deploy.yml` deploys the static frontend on pushes to `main`.
5. Wait for the Actions workflow to finish, then open the Pages URL.

If the workflow is not enabled automatically, check **Settings → Actions → General** and allow GitHub Actions to run.

## Suggested repository
`Task-11-Full-Stack-Internship-Management-Platform`

## Suggested description
An internship operations platform connecting candidates, opportunities, applications, learning tasks and mentor reviews. Includes responsive UI, interactive local demo workflows, localStorage persistence, reference Express backend sample and GitHub Pages deployment workflow.

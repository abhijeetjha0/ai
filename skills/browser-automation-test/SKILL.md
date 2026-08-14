---
name: browser-automation-test
description: >-
  Automates comprehensive end-to-end browser testing, responsiveness verification,
  WCAG accessibility checks, keyboard navigation validation, and HTML report generation.
author: "Abhijit Kumar Jha"
author_url: "https://github.com/abhijeetjha0"
version: "1.0.0"
---

# Browser Automation & Quality Assurance Test

This skill guides AI coding agents in executing automated end-to-end browser testing, visual responsiveness checks, accessibility audits, and generating a structured HTML test report.

---

## 🛠️ Prerequisites & Tools

- **Browser Automation Capability**: Browser subagent, Chrome DevTools MCP, or Playwright/Puppeteer automation tools.
- **Local Application Server**: Node.js (`npm`/`pnpm`/`yarn`/`bun`), Python (Django/FastAPI/Flask), Go, Rust, or any local web server.

---

## 📋 Recommended Workflow

### 1. Server Launch & Readiness
1. Detect the project's package manager and start the local development server (e.g., `npm run dev`, `pnpm dev`, `vite`, or backend dev command).
2. Monitor terminal output for the local URL (e.g., `http://localhost:3000`, `http://localhost:5173`, or `http://localhost:8000`).
3. **Fallback**: If the server fails to launch due to sandbox environment restrictions or permission boundaries, ask the user to start the server manually in their terminal and confirm when ready.

### 2. Autonomous Browser Testing Suite
Once the server is accessible, launch the browser automation session to execute the following test matrix:

- **Route Discovery & Link Traversal**: Discover navigation links and visit all primary and secondary routes to ensure 200 OK responses with zero unhandled client-side exceptions or 404/500 errors.
- **Responsive Layout & Viewport Checks**:
  - Test viewports: Mobile (375px), Tablet (768px), and Desktop (1280px+).
  - Verify that horizontal scrollbars / layout overflows do NOT occur on mobile.
  - Verify navigation menus (hamburger menus, side drawers) open, display correctly, and close.
- **WCAG Accessibility & Usability**:
  - Verify color contrast for primary text, buttons, and badges.
  - Verify form inputs possess associated `<label>` elements or `aria-label` attributes.
  - Verify heading hierarchy (`<h1>` through `<h3>`).
- **Keyboard Navigation & Focus Trapping**:
  - Use `Tab` key traversal through interactive elements.
  - Ensure focus rings / active outlines are clearly visible and focus does not get trapped unexpectedly.
- **Interactive State & Edge-Case Stress Testing**:
  - Click interactive elements (modals, dropdowns, tabs, accordion panels).
  - Scroll through long pages to trigger lazy-loaded assets and intersection observers.
  - Ensure the application recovers gracefully from invalid inputs.

### 3. Dependency & Code Coverage Trace
- Perform a static dependency trace mapping the routes and UI components exercised during the test run against the project's source directory (`src/`, `app/`, `components/`, etc.).
- Calculate the estimated component/file coverage percentage (e.g., "18 of 20 component files exercised = 90% coverage").

### 4. HTML Report Generation
1. Format test observations and metrics into an HTML report.
2. If available, use the template located at `resources/report-template.html` (or generate a standalone clean dark-mode HTML report).
3. Save the report to `browser-reports/report.html` (create the directory if needed).
4. Provide the user with an executive summary and a clickable link to `browser-reports/report.html`.

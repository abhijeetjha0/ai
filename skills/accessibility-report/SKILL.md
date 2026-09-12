---
name: accessibility-report
description: Generates an accessibility report of a web application based on WCAG 2.2 guidelines and applies fixes upon user approval.
author: "Abhijit Kumar Jha"
author_url: "https://github.com/abhijeetjha0"
version: "1.0.0"
---

# Accessibility Report Skill

This skill allows the agent to evaluate the user's web application against the Web Content Accessibility Guidelines (WCAG) 2.2 and generate a comprehensive accessibility report. It can also automatically apply recommended fixes if the user approves.

## Workflow

When the user invokes this skill, follow these steps:

1. **Retrieve Reference Guidelines**
   - Use the `view_file` tool to read the contents of the bundled reference file: `references/Web Content Accessibility Guidelines (WCAG) 2.2.html` (relative to this skill's directory) as your primary reference for WCAG 2.2 criteria.
   - If the local file is not found, use the `read_url_content` tool to fetch the backup URL: `https://www.w3.org/TR/WCAG22/`.

2. **Analyze the Application**
   - Identify the primary HTML, CSS, and JavaScript files of the user's web application.
   - You can ask the user for the entry point or search for common patterns (e.g., `index.html`, `App.js`).

3. **Evaluate against WCAG 2.2**
   - Review the application's source code specifically looking for WCAG 2.2 compliance issues. 
   - Pay special attention to:
     - **Perceivable**: Text alternatives (alt tags for images), captions, audio descriptions, contrast ratios, and responsive design.
     - **Operable**: Keyboard accessibility, focus states, sufficient time to read, and clear navigation.
     - **Understandable**: Readable text, predictable behavior, and input assistance (form labels, error messages).
     - **Robust**: Valid HTML, ARIA roles, and states for custom components.

4. **Generate the Report**
   - Create a markdown artifact named `accessibility_report.md`.
   - Document any violations found, categorized by severity and WCAG principle.
   - For each issue, provide:
     - The file and line number(s) where the issue occurs.
     - The specific WCAG 2.2 success criterion violated.
     - A clear explanation of the problem.
     - A proposed code fix.

5. **Request Approval**
   - Present the report to the user and explicitly ask if they would like you to automatically apply the proposed fixes.
   - Wait for the user's explicit approval before modifying any application files.

6. **Apply Fixes**
   - Once approved, use the appropriate file editing tools (`replace_file_content` or `multi_replace_file_content`) to inject the accessibility fixes into the user's codebase.
   - Inform the user once all changes are successfully applied and recommend a manual review or test.

---
name: generate-ui-manual
description: >-
  Scans application UI routes and components to generate, structure, and maintain
  user guides, help pages, or interactive in-app manuals with searchable step-by-step instructions.
author: "Abhijit Kumar Jha"
author_url: "https://github.com/abhijeetjha0"
version: "1.0.0"
---

# UI Manual & User Documentation Generator

A skill for systematically scanning an application's user interface, discovering interactive capabilities, and authoring clean, beginner-friendly, and searchable user manuals or `/help` documentation.

---

## 🧭 Step 1: UI Feature Discovery & Route Mapping

1. **Active Route Traversal**:
   - Inspect the routing configuration and all primary/secondary views in the application.
   - Use browser tools or local testing to navigate each view and identify interactive capabilities (forms, filters, modals, tables, action buttons, export tools).
2. **Feature Inventory**:
   - Catalog core features, their user-facing intent, and prerequisite actions.
   - Note key interactive elements (buttons, pills, dropdowns, keyboard shortcuts).

---

## ✍️ Step 2: Manual Content Structuring

1. **Content Separation**:
   - Store manual content in structured format (e.g. JSON, YAML, or Markdown files) separate from presentation logic.
2. **Clear & Actionable Structure**:
   - **Feature Overview**: Concise explanation of the feature's purpose and value.
   - **Step-by-Step Instructions**: Numbered, sequential steps with specific UI element names (e.g. "Click the 'Export CSV' button in the top right header").
   - **Troubleshooting & Edge Cases**: What to do if an expected state or permission is missing.
3. **Deep Linking & Searchability**:
   - Assign semantic IDs to each section (`<section id="export-reports">`) to enable URL deep linking.
   - Include client-side search/filtering across section titles and step content.

---

## 🔄 Step 3: Navigation Integration & Synchronization

1. **Access Points**:
   - Ensure the manual or help page is linked from the global navigation header/footer or a floating contextual help trigger.
2. **Keep in Sync**:
   - Whenever adding, removing, or refactoring a UI feature, update the corresponding section in the manual as part of the feature definition of done.

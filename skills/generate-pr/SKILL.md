---
name: generate-pr
description: >-
  Analyzes active Git changesets (diff against base branch or HEAD) and generates
  a comprehensive, human-readable Pull Request (PR) or Merge Request (MR) description.
author: "Abhijit Kumar Jha"
author_url: "https://github.com/abhijeetjha0"
version: "1.0.0"
---

# Pull Request (PR) Generator

A standardized skill for analyzing Git diffs and generating high-signal, developer-friendly Pull Request and Merge Request descriptions.

---

## 🔍 Step 1: Target Branch & Changeset Analysis

1. **Identify Target Branch**:
   - Ask the user which target base branch this PR is intended for (e.g., `main`, `master`, `develop`).
   - If the user does not specify a target branch, default to `main` (or `master` if `main` does not exist).
2. **Inspect Current Branch & Changes**:
   ```bash
   git status
   git diff --stat origin/<target-branch>...HEAD  # e.g., origin/main...HEAD
   git diff origin/<target-branch>...HEAD
   ```
3. **Perform File-by-File Analysis**:
   - Inspect the diff to capture:
   - **Architectural & Core Logic Updates**: Major refactorings, new service layers, API changes, state management adjustments.
   - **Configuration & Dependencies**: Additions or version bumps in manifest files (`package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, CI/CD workflows).
   - **Bug Fixes**: Root causes identified and resolution mechanics.
   - **UI / UX Updates**: Visual layouts, components, responsive adaptations, style changes.
   - **Testing & Tooling**: New test suites, fixture additions, lint configuration updates.

---

## 📝 Step 2: PR Description Formatting Standards

Follow these formatting principles for the generated PR description:

1. **Title**: Clear, imperative summary of the change (e.g. `feat: Centralize API client and add resilient error boundaries` or `fix: Prevent race condition during user session renewal`).
2. **Backticks for Code Symbols**: Always wrap file paths, commands, package names, and symbols in backticks (`lib/api.ts`, `npm test`, `UserSession`).
3. **Bold Modules & Layers**: Prefix bullet points with **bold tags** for quick scannability.
4. **Conditional Grouping**: Include subsections only when relevant to the diff:
   - `### 🛠️ Technical Updates`: Backend, database, architecture, tests, configs, build scripts.
   - `### 🎨 UI & UX Updates`: Frontend components, responsiveness, themes, animations.
   - `### 🐛 Bug Fixes`: Root cause and fix description.
   - `### ⚠️ Breaking Changes & Migrations`: Any breaking API/schema changes.
5. **Roadmap Placeholder**: Append an empty `### 🔮 Future Roadmap (Optional)` section reserved for human maintainers.

---

## 📋 Standard PR Output Template

```markdown
# [PR Title]

## 📝 Overview
Brief 2-3 sentence executive summary explaining the purpose and business/technical context of this Pull Request.

### 🛠️ Technical Updates
1. **[Module/Area]**: Detailed explanation of the architectural change, files updated (`path/to/file`), and rationale.
2. **[Dependencies/Config]**: Updated dependencies, build configurations, or CI/CD pipelines.
3. **[Testing & Quality]**: Added unit and integration tests covering new code paths.

### 🎨 UI & UX Updates
1. **[Component/View]**: New layouts, responsive behavior, or accessibility improvements.

### 🐛 Bug Fixes
1. **[Issue/Bug]**: Root cause analysis and the fix applied.

### 🔮 Future Roadmap (Optional)
```

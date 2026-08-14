---
name: feature-implementation-planner
description: >-
  Framework for planning complex features and architectural changes. Outlines component
  decompositions, reusable abstractions, verification strategies, and iterative developer alignment.
author: "Abhijit Kumar Jha"
author_url: "https://github.com/abhijeetjha0"
version: "1.0.0"
---

# Feature Implementation Planner

A structured workflow for decomposing complex feature requests, identifying shared abstractions, and aligning on design decisions with developers before implementing code changes.

---

## 🎯 When to Use
- Implementing multi-file features or non-trivial enhancements.
- Introducing new architectural abstractions, schema migrations, or third-party integrations.
- Addressing tasks with significant design ambiguity or multiple valid implementation approaches.

---

## 📋 Recommended Workflow

### 1. Discovery & Codebase Inspection
- **Read-Only Exploration**: Understand existing idioms, data models, and architectural boundaries before proposing edits.
- **Rule Alignment**: Check project rule files (`AGENTS.md`, `.cursorrules`, `CLAUDE.md`, etc.) for conventions.

### 2. Implementation Plan Formulation
Create an `implementation_plan.md` artifact with the following structure:
- **Goal Description**: Objective, context, and user requirements.
- **Proposed Architecture & File Decomposition**:
  - **[NEW] Files**: New modules, UI components, data structures, or endpoints.
  - **[MODIFY] Files**: Existing files requiring updates, signature changes, or routing extensions.
  - **Common / Shared Components**: Opportunities to extract or reuse shared logic.
- **User Review Required**: Critical trade-offs, breaking changes, or library additions requiring developer sign-off.
- **Open Questions**: Ambiguities or design alternatives.
- **Verification Plan**: Automated tests, manual test steps, and edge cases to validate.

### 3. Developer Review & Iterative Alignment
- Solicit explicit developer feedback on the proposed architecture.
- If changes or alternative approaches are requested, update the plan and re-verify before writing production code.

### 4. Execution & Tracking
- Upon explicit developer approval, begin implementation following the phased plan.
- Track progress systematically across milestones and verify with tests at each phase.

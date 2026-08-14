---
name: duplicate-code-resolver
description: >-
  Systematic workflow to analyze code duplication (via jscpd or static analysis),
  formulate an extraction/refactoring plan, obtain user review, and verify with tests and linters.
author: "Abhijit Kumar Jha"
author_url: "https://github.com/abhijeetjha0"
version: "1.0.0"
---

# Duplicate Code Resolver

A disciplined framework for identifying, planning, and safely refactoring duplicated code (DRY - Don't Repeat Yourself) while preserving backwards compatibility and test coverage.

---

## 🔍 Step 1: Duplication Analysis & Discovery

1. Run the project's duplication scanner or static analysis tool (e.g. `npx jscpd`, `npm run check-duplicate`, `pmd cpd`, or language-specific duplicate analyzers).
2. Examine the detected clone blocks:
   - Identify exact token matches, cloned methods, and repetitive boilerplate.
   - Note all participating files and line ranges.

---

## 📝 Step 2: Formulate Refactoring Strategy & Plan

Before modifying code, construct an implementation plan:

1. **Extraction Strategy**:
   - **Shared Utilities / Helper Modules**: For pure algorithmic or data-transformation logic.
   - **Reusable Components / UI Primitives**: For repetitive frontend templates or markup.
   - **Custom Hooks / Middleware / Decorators**: For stateful, lifecycle, or request-handling logic.
   - **Base Classes / Generics / Mixins**: For object-oriented hierarchies.
2. **Affected Files Matrix**:
   - New abstraction files to create.
   - Existing files to refactor and import the new abstraction from.
3. **Approval Gate**:
   - Present the refactoring proposal to the developer for review and confirmation before applying edits.

---

## ⚙️ Step 3: Execution

1. Create the new shared abstraction with clear signatures, strong types, and documentation.
2. Refactor existing call sites incrementally to consume the shared logic.
3. Remove redundant lines and obsolete helper imports.

---

## ✅ Step 4: Verification & Quality Assurance

1. **Linting**: Run the project linter (`npm run lint`, `ruff check`, `golangci-lint`, etc.) and ensure 0 errors.
2. **Automated Testing**: Run unit and integration tests (`npm test`, `pytest`, `go test ./...`) to ensure zero regressions.
3. **Coverage Check**: Add new unit tests specifically covering the newly created shared abstractions.
4. **Re-Scan**: Re-run the duplication tool to confirm the duplication percentage dropped and the clone blocks are resolved.

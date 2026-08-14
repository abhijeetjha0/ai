---
name: test-case-and-coverage-enhancer
description: >-
  Analyzes test coverage matrices, identifies uncovered lines and branch gaps in active changesets,
  and authors high-fidelity unit/integration test cases to maintain high code coverage.
author: "Abhijit Kumar Jha"
author_url: "https://github.com/abhijeetjha0"
version: "1.0.0"
---

# Test Case & Coverage Enhancer

A systematic framework for identifying test coverage gaps, analyzing untested branches, and authoring reliable unit and integration tests to maintain high project code coverage standards.

---

## 🎯 Core Principles

1. **High Baseline Coverage**: Target maintaining high code coverage (e.g. $\ge 85\text{--}90\%$) across statements, branches, functions, and lines.
2. **Net-Positive Diff Coverage**: Every new feature or refactoring changeset must maintain or increase overall coverage—never decrease it.
3. **High-Signal Deterministic Tests**: Target specific uncovered lines and error paths rather than inflating coverage with superficial assertions.

---

## 📋 Recommended Workflow

### 1. Run Baseline Test & Coverage Suite
Execute the project's test suite with coverage reporting enabled:
- **JavaScript / TypeScript**: `npm test -- --coverage` or `npx vitest run --coverage`
- **Python**: `pytest --cov=. --cov-report=term-missing`
- **Go**: `go test -coverprofile=coverage.out ./... && go tool cover -func=coverage.out`
- **Rust**: `cargo tarpaulin` or `cargo llvm-cov`

### 2. Identify Coverage Gaps
1. Identify all files modified in the active changeset (`git diff --name-only origin/main...HEAD`).
2. Map the modified files against the coverage report to extract exact **uncovered line numbers** and **untested conditional branches**.
3. Inspect the source code at those specific line numbers:
   - Error handling blocks (`try / catch`, `if err != nil`, `!response.ok`).
   - Conditional fallbacks (nullish coalescing `??`, optional chaining `?.`, ternary branches).
   - Async loading, retry, or timeout states.

### 3. Author Targeted Test Cases
1. Create or extend test files following project conventions (e.g., `tests/unit/`, `__tests__/`, or co-located `*.test.ts`/`*_test.go`).
2. Mock external boundaries cleanly (HTTP clients, database connections, environment variables).
3. Ensure console errors and expected warnings triggered intentionally during failure-testing are cleanly suppressed or asserted.

### 4. Verify & Measure Impact
1. Re-run the full test suite.
2. Ensure **100% test pass rate** with 0 test failures or flakiness.
3. Compare before-and-after coverage metrics and summarize the delta (e.g. "Coverage increased from 82.4% to 91.8% (+9.4%)").

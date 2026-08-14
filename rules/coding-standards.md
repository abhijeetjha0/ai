# Coding Standards & Guidelines

Universal guidelines for writing resilient, maintainable, and idiomatic code across languages.

---

## 1. Clean Code & Architecture
- **Single Responsibility Principle (SRP)**: Keep functions and modules small and focused on a single task.
- **Explicit over Implicit**: Avoid "magic numbers", implicit type coercions, and hidden side effects.
- **Strict Typing**: Use strong typing (TypeScript strict mode, Python type hints `mypy`, Go types, Rust static types) across all codebases.

---

## 2. Error Handling & Logging
- Never silently swallow exceptions or leave empty `catch` / `except` blocks.
- Provide contextual, actionable error messages.
- Avoid logging sensitive user data (PII, tokens, authorization headers).

---

## 3. Testability & Hygiene
- Every non-trivial feature or bug fix must be accompanied by unit or integration tests.
- Ensure all tests are deterministic and runnable in isolated environments.
- Remove dead code, commented-out debugging blocks, and temporary print/console logs before commits.

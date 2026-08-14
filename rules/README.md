# Reusable AI Rules

Rules define non-negotiable coding standards, architectural constraints, and safety guidelines that AI agents enforce during paired programming and autonomous execution.

---

## 📋 Available Rule Sets

- [`coding-standards.md`](./coding-standards.md): Core clean-code principles, typing guidelines, and error-handling paradigms.
- [`security-rules.md`](./security-rules.md): Secret management, command safety, and input sanitization protocols.

---

## 🔗 Consuming Rules in Projects

When linked to a target project via `./scripts/link-project.sh`, these files become accessible inside the project's `.agents/rules/` or can be directly incorporated into your tool's rule file (e.g. `AGENTS.md`, `.cursorrules`, `CLAUDE.md`, `.windsurfrules`, `.copilot-instructions.md`, or custom system prompts).

# AI Agent Security & Safety Rules

Critical security constraints for AI coding agents and human developers.

---

## 🛑 Non-Negotiable Safety Directives

### 1. Secret Protection
- **NEVER** write or commit API keys, database credentials, passwords, or certificates in plaintext.
- Always use environment variables (`.env` with `.gitignore`) or secure secret managers (GCP Secret Manager, AWS Secrets Manager, HashiCorp Vault).

### 2. Destructive Operations Guardrail
- Before running commands that delete files (`rm -rf`, `git clean -fdx`, `DROP DATABASE`), ask for explicit confirmation unless in a dedicated sandbox environment.
- Never force push (`git push -f`) to default branches (`main`, `master`).

### 3. Injection Prevention
- Always parameterize database queries (prevent SQL injection).
- Sanitize and escape all user-controlled inputs before rendering in HTML/DOM (prevent XSS) or passing to shell executors.

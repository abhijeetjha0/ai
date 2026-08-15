# AI Skills Directory

Skills are on-demand workflows, runbooks, and cheatsheets that AI agents load via **progressive disclosure**. 

Instead of injecting massive context into every prompt, skills expose their `name` and `description` to the agent. The agent activates and views the full `SKILL.md` only when the user's task matches the skill's domain.

---

## 📁 Skill Structure

Each skill must be a standalone folder with a `SKILL.md` file:

```tree
skills/my-skill-name/
├── SKILL.md                  # Main entry point (YAML frontmatter + markdown)
├── scripts/                  # (Optional) Helper scripts, linters, or CLI tools
├── templates/                # (Optional) Starter files or templates
└── references/               # (Optional) Deep documentation or API references
```

---

## 📝 Writing a `SKILL.md`

Every `SKILL.md` must start with valid YAML frontmatter:

```markdown
---
name: my-skill-name
description: >-
  A clear and concise summary of what this skill does, when the agent should
  activate it, and what tasks it supports.
---

# Skill Title

## Overview
Brief explanation of the workflow or system.

## Workflow / Step-by-Step Instructions
1. Step 1...
2. Step 2...

## Best Practices & Gotchas
- Key rules to follow
- Common pitfalls to avoid
```

---

## 📚 Available Skills Catalog

| Skill Name | Description | Author |
| :--- | :--- | :--- |
| [`agentic-code-review`](./agentic-code-review/SKILL.md) | High-signal code review, security analysis, and PR hygiene checklist | Abhijit Kumar Jha |
| [`browser-automation-test`](./browser-automation-test/SKILL.md) | End-to-end browser testing, responsiveness, a11y, and HTML report generator | Abhijit Kumar Jha |
| [`duplicate-code-resolver`](./duplicate-code-resolver/SKILL.md) | Identifies duplicate code blocks and plans DRY extractions with zero regressions | Abhijit Kumar Jha |
| [`feature-implementation-planner`](./feature-implementation-planner/SKILL.md) | Phased architecture design, component decomposition, and developer alignment | Abhijit Kumar Jha |
| [`frontend-project-builder`](./frontend-project-builder/SKILL.md) | Scaffolding prompt generator for modern frontend boilerplates (React, Vue, Next.js, Angular, Svelte, etc.) | Abhijit Kumar Jha |
| [`generate-pr`](./generate-pr/SKILL.md) | Deep changeset analysis and developer-friendly Pull Request description generator | Abhijit Kumar Jha |
| [`generate-ui-manual`](./generate-ui-manual/SKILL.md) | Scans UI features and creates searchable in-app user manuals and help guides | Abhijit Kumar Jha |
| [`test-case-and-coverage-enhancer`](./test-case-and-coverage-enhancer/SKILL.md) | Coverage gap analysis and targeted unit/integration test authoring | Abhijit Kumar Jha |

---

## ⚡ Scaffolding a New Skill

Use the starter template in `skills/_template/`:

```bash
cp -r skills/_template skills/<your-skill-name>
```

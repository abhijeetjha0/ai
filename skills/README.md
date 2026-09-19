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

## 🚀 Quick Install

Install skills from this catalog directly into your project using [`vercel-labs/skills`](https://github.com/vercel-labs/skills):

```bash
# Install all skills into your project
npx skills add abhijeetjha0/ai

# Install a specific skill (e.g., agentic-code-review)
npx skills add abhijeetjha0/ai --skill agentic-code-review
```

---

## 📚 Available Skills Catalog

| Skill Name | Description | Author |
| :--- | :--- | :--- |
| [`accessibility-report`](./accessibility-report/SKILL.md) | Evaluates web apps against WCAG 2.2 guidelines, generates reports, and automatically applies accessibility fixes. | Abhijit Kumar Jha |
| [`agentic-code-review`](./agentic-code-review/SKILL.md) | High-signal code review, security analysis, and PR hygiene checklist | Abhijit Kumar Jha |
| [`browser-automation-test`](./browser-automation-test/SKILL.md) | End-to-end browser testing, responsiveness, a11y, and HTML report generator | Abhijit Kumar Jha |
| [`duplicate-code-resolver`](./duplicate-code-resolver/SKILL.md) | Identifies duplicate code blocks and plans DRY extractions with zero regressions | Abhijit Kumar Jha |
| [`feature-implementation-planner`](./feature-implementation-planner/SKILL.md) | Phased architecture design, component decomposition, and developer alignment | Abhijit Kumar Jha |
| [`frontend-project-builder`](./frontend-project-builder/SKILL.md) | Scaffolding prompt generator for modern frontend boilerplates (React, Vue, Next.js, Angular, Svelte, etc.) | Abhijit Kumar Jha |
| [`generate-pr`](./generate-pr/SKILL.md) | Deep changeset analysis and developer-friendly Pull Request description generator | Abhijit Kumar Jha |
| [`generate-ui-manual`](./generate-ui-manual/SKILL.md) | Scans UI features and creates searchable in-app user manuals and help guides | Abhijit Kumar Jha |
| [`git-pre-commit-hooks`](./git-pre-commit-hooks/SKILL.md) | Automates setup, configuration, and cleanup of git pre-commit hooks for various project types | Abhijit Kumar Jha |
| [`github-skill-scanner`](./github-skill-scanner/SKILL.md) | Scans public GitHub repositories for a given user, discovers available agent skills, and automatically updates the local skills directory and catalog, ensuring no duplicates. | Abhijit Kumar Jha |
| [`multi-agent-skill`](./multi-agent-skill/SKILL.md) | Facilitates a multi-agent, multi-perspective execution of any selected skill in the project | Abhijit Kumar Jha |
| [`project-config-copier`](./project-config-copier/SKILL.md) | Exports and imports project boilerplate configuration to/from JSON | Abhijit Kumar Jha |
| [`project-explainer`](./project-explainer/SKILL.md) | Explains how a project works based on a deep scan and analysis of its files, directory structure, and configuration files. | Abhijit Kumar Jha |
| [`test-case-and-coverage-enhancer`](./test-case-and-coverage-enhancer/SKILL.md) | Coverage gap analysis and targeted unit/integration test authoring | Abhijit Kumar Jha |
| [`web-tech-scanner`](./web-tech-scanner/SKILL.md) | Scans any webpage URL, active Chrome tab, or curl pipeline to detect frontend frameworks, NPM packages, libraries, and UI systems. | Abhijit Kumar Jha |

---

## ⚡ Scaffolding a New Skill

Use the starter template in `skills/_template/`:

```bash
cp -r skills/_template skills/<your-skill-name>
```

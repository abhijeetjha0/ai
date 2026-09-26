# AI Agent Skills Repository

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A generic, tool-agnostic repository for organizing, maintaining, and sharing AI agent skills across any software project or AI development tool (e.g., Claude Code, Cursor, Windsurf, GitHub Copilot, Gemini CLI, Cline, Roo Code, Aider, or custom agent frameworks).

---

## 📂 Repository Structure

```tree
ai/
├── skills/                             # Modular Agent Skills (progressive-disclosure SKILL.md format)
│   ├── _template/                      # Scaffold template for creating new skills
│   ├── accessibility-report/           # WCAG 2.2 accessibility evaluation, automated reporting, and fixes
│   ├── agentic-code-review/            # AI-assisted code review and PR quality auditing
│   ├── browser-automation-test/        # End-to-end browser automation, a11y, and HTML report generator
│   ├── cross-browser-extension-builder/# Cross-browser extension builder enforcing Manifest V3 and best practices
│   ├── duplicate-code-resolver/        # Duplication detection, refactoring plan, and DRY validation
│   ├── feature-implementation-planner/ # Architectural decomposition and phased planning
│   ├── frontend-project-builder/       # Scaffolding generator for modern frontend boilerplates
│   ├── generate-pr/                    # Git diff inspection and human-readable PR generation
│   ├── generate-ui-manual/             # UI feature scanning and searchable user manual authoring
│   ├── git-pre-commit-hooks/           # Git pre-commit hook setup, configuration, and cleanup
│   ├── github-skill-scanner/           # Public GitHub skill scanner, discovery, and catalog importer
│   ├── modular-agents-generator/       # Generates/updates modular, folder-scoped AGENTS.md files based on code layout
│   ├── multi-agent-skill/              # Multi-agent, multi-perspective execution of skills
│   ├── project-config-copier/          # Exports and imports project boilerplate configuration to/from JSON
│   ├── project-explainer/              # Deep code scan and architectural project structure explainer
│   ├── test-case-and-coverage-enhancer/# Coverage gap analysis and unit/integration test authoring
│   ├── vscode-extension-builder/       # VS Code extension builder enforcing Yeoman scaffolding, TS, and UX guidelines
│   ├── web-tech-scanner/               # Dynamic frontend framework, library, and UI tech stack scanner
│   └── README.md                       # Comprehensive skills catalog and usage guide
└── under-evaluation/                   # Staging area for skills under test
```

---

## 🚀 Quickstart & Using in Any Project

This repository is designed to be universally compatible with any AI coding assistant or agent ecosystem.

### Option 1: Install via `npx skills` (Recommended)

> [!TIP]
> Powered by [`vercel-labs/skills`](https://github.com/vercel-labs/skills). Works across **75+ AI coding agents** (OpenCode, Claude Code, Codex, Cursor, Gemini CLI, etc.).

Install all skills from this repository directly into your project in one command:

```bash
# Install skills into the current project
npx skills add abhijeetjha0/ai

# List available skills before installing
npx skills add abhijeetjha0/ai --list

# Install specific skills
npx skills add abhijeetjha0/ai --skill agentic-code-review --skill generate-pr

# Install globally (available across all projects)
npx skills add abhijeetjha0/ai -g

# Target specific agents
npx skills add abhijeetjha0/ai -a claude-code -a cursor
```

The CLI handles agent discovery, symlinking/copying into proper agent directories, and updates cleanly.

### Option 2: Copy & Paste for Global AI Configurations

> [!WARNING]
> Do **not** symlink the entire repository into your global assistant config folders (e.g. `~/.gemini/config/`, `~/.cursor/`, `~/.claude/`), as global bulk symlinks can cause naming collisions, override default tools, or break tool updates.

Instead, selectively copy and paste the specific skill you need into your preferred assistant's global configuration directory:

- **AI Skills & Playbooks**:
  ```bash
  # Copy a skill to your global assistant skills folder
  cp -r skills/agentic-code-review /path/to/your/global/skills/
  ```

---

## 🛠️ Adding New Assets

### Creating a New Skill
1. Copy the scaffold: `cp -r skills/_template skills/my-new-skill`
2. Update `skills/my-new-skill/SKILL.md` with:
   - YAML frontmatter (`name`, `description`)
   - Step-by-step instructions, runbooks, or reference cheatsheets
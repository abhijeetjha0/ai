# AI Hub: Universal Central Repository for AI Skills, Guides, Models & Plugins

A generic, tool-agnostic, and shareable repository for organizing, maintaining, and sharing AI agent skills, design guides, model configuration profiles, plugins, rules, and Model Context Protocol (MCP) integrations across any software project or AI development tool (e.g., Claude Code, Cursor, Windsurf, GitHub Copilot, Gemini CLI, Cline, Roo Code, Aider, or custom agent frameworks).

---

## 📂 Repository Structure

```tree
ai/
├── skills/                             # Modular Agent Skills (progressive-disclosure SKILL.md format)
│   ├── _template/                      # Scaffold template for creating new skills
│   ├── agentic-code-review/            # AI-assisted code review and PR quality auditing
│   ├── browser-automation-test/        # End-to-end browser automation, a11y, and HTML report generator
│   ├── duplicate-code-resolver/        # Duplication detection, refactoring plan, and DRY validation
│   ├── feature-implementation-planner/ # Architectural decomposition and phased planning
│   ├── frontend-project-builder/       # Scaffolding generator for modern frontend boilerplates
│   ├── generate-pr/                    # Git diff inspection and human-readable PR generation
│   ├── generate-ui-manual/             # UI feature scanning and searchable user manual authoring
│   ├── test-case-and-coverage-enhancer/# Coverage gap analysis and unit/integration test authoring
│   └── README.md
├── guides/                             # AI guides, prompting techniques, agent design patterns
│   ├── prompt-engineering/             # Best practices for prompt construction & zero/few-shot prompts
│   ├── agent-patterns/                 # ReAct, Plan-and-Solve, Multi-agent orchestration
│   └── README.md
├── models/                             # Model configuration profiles & provider presets
│   ├── gemini/                         # Google Gemini configurations & system prompts
│   ├── anthropic/                      # Anthropic Claude configurations
│   ├── openai/                         # OpenAI GPT configurations
│   ├── ollama/                         # Local LLM configs (Ollama / GGUF profiles)
│   └── README.md
├── plugins/                            # Bundled plugins (packaged skills, agents, MCP tools)
│   ├── _template/                      # Starter template for plugin creation
│   ├── ollama/                         # Ollama API & local model runtime plugin
│   └── README.md
├── rules/                      # Reusable coding, security, and workflow rule sets
│   ├── coding-standards.md     # Code style & testing rules
│   ├── security-rules.md       # API keys, data sanitization, safe command execution
│   └── README.md
├── mcp/                        # Model Context Protocol (MCP) server configs & guides
│   ├── mcp_config.example.json # Pre-configured templates for common MCP servers
│   └── README.md
└── scripts/                    # Automation utilities for distribution & validation
    ├── link-project.sh         # Link AI assets into any project's `.agents/` directory
    └── validate.sh             # Lint and validate SKILL.md YAML frontmatter & configs
```

---

## 🚀 Quickstart & Using in Any Project

This repository is designed to be universally compatible with any AI coding assistant or agent ecosystem.

### Option 1: Link into a Specific Project (Recommended)

Link reusable skills and rules directly into any target project:

```bash
# Link all skills and rules into a target project
./scripts/link-project.sh /path/to/my-target-project

# Or link specific components
./scripts/link-project.sh /path/to/my-target-project --skills --rules
```

This creates symbolic links inside `/path/to/my-target-project/.agents/`, making agent skills and rules immediately active in that workspace.

### Option 2: Copy & Paste for Global AI Configurations

> [!WARNING]
> Do **not** symlink the entire repository into your global assistant config folders (e.g. `~/.gemini/config/`, `~/.cursor/`, `~/.claude/`), as global bulk symlinks can cause naming collisions, override default tools, or break tool updates.

Instead, selectively copy and paste the specific skill, prompt, rule, or configuration you need into your preferred assistant's global configuration directory:

- **AI Skills & Playbooks**:
  ```bash
  # Copy a skill to your global assistant skills folder
  cp -r skills/agentic-code-review /path/to/your/global/skills/
  ```
- **Project & Global Rules**:
  ```bash
  # Copy rules to your assistant rules folder or root directory
  # (e.g. .cursorrules, CLAUDE.md, AGENTS.md, or .agents/rules/)
  cp rules/coding-standards.md /path/to/target/rules/
  ```
- **MCP Server Configurations**:
  - Copy JSON blocks from [`mcp/mcp_config.example.json`](./mcp/mcp_config.example.json) into your client's MCP configuration (e.g., Claude Desktop, Cursor MCP, Windsurf, or Gemini MCP configs).

---

## 🛠️ Adding New Assets

### Creating a New Skill
1. Copy the scaffold: `cp -r skills/_template skills/my-new-skill`
2. Update `skills/my-new-skill/SKILL.md` with:
   - YAML frontmatter (`name`, `description`)
   - Step-by-step instructions, runbooks, or reference cheatsheets
3. Validate: `./scripts/validate.sh`

### Creating a New Plugin
1. Copy the scaffold: `cp -r plugins/_template plugins/my-plugin`
2. Update `plugin.json` and add any packaged skills, agents, or MCP configurations.

### Creating a Rule
1. Add a `.md` file to `rules/` (e.g. `rules/typescript-rules.md`).
2. Add triggers or always-on declarations in frontmatter if needed.

---

## 🔍 Validation

Ensure all skills, plugins, and configurations adhere to valid formatting and schemas:

```bash
./scripts/validate.sh
```
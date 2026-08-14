# AI Plugins Directory

Plugins are namespaced, self-contained bundles that package multiple skills, subagents, rules, and MCP configurations together into a single distributable unit.

---

## 📦 Plugin Structure

Each plugin is placed in its own subdirectory inside `plugins/`:

```tree
plugins/<plugin_name>/
├── plugin.json                 # Manifest defining name, version, and metadata
├── skills/                     # Bundled skills (each with a SKILL.md)
│   └── <skill_name>/
│       └── SKILL.md
├── agents/                     # (Optional) Subagent definitions
│   └── <agent_name>.json
└── mcp_config.json             # (Optional) Plugin-specific MCP servers
```

---

## 📄 Manifest Specification (`plugin.json`)

```json
{
  "name": "my-plugin-name",
  "version": "1.0.0",
  "description": "Comprehensive bundle for database management and schema migrations",
  "author": "Your Name",
  "skills": ["db-migrations", "schema-analyzer"],
  "rules": ["sql-safety.md"]
}
```

---

## 📚 Available Plugins Catalog

| Plugin Name | Description | Author | Repository |
| :--- | :--- | :--- | :--- |
| [`ollama`](./ollama/plugin.json) | Comprehensive Ollama API, runtime configuration, and offline reference docs | Tim Green | [rawveg/claude-skills-marketplace](https://github.com/rawveg/claude-skills-marketplace) |

---

## ⚡ Creating a New Plugin

```bash
cp -r plugins/_template plugins/<your-plugin-name>
```

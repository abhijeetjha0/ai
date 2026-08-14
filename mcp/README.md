# Model Context Protocol (MCP) Hub

Model Context Protocol (MCP) allows AI agents to securely connect to external tools, databases, APIs, and browsers.

---

## 📄 Example Configuration

Refer to [`mcp_config.example.json`](./mcp_config.example.json) for ready-to-use configurations for popular MCP servers:

- **Filesystem**: Local directory inspection and file manipulation.
- **Git / GitHub**: Branch, issue, and PR management.
- **Postgres / SQLite**: Querying and inspecting database schemas.
- **Brave Search / Fetch**: Real-time web access and search.
- **Chrome DevTools**: Browser automation and DOM inspection.
- **Ollama**: Local LLM integrations.

---

## 🚀 How to Use

Copy the server definitions from `mcp_config.example.json` into your preferred client's configuration:

- **Claude Desktop**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Cursor**: `~/.cursor/mcp.json` or Workspace Settings
- **Antigravity / Gemini CLI**: `~/.gemini/antigravity-ide/mcp_config.json`
- **Cline / Roo Code**: VS Code Extension Settings (`cline_mcp_settings.json`)

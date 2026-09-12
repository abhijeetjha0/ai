# AI Agent Guidelines

Welcome to the AI Skills repository! When operating within this workspace, please adhere to the following rules and guidelines.

## 1. Project Purpose
This repository acts as a catalog of specialized skills for AI agents. These skills (`skills/` directory) provide on-demand workflows, runbooks, and cheatsheets to improve agent capabilities.

## 2. Skill Creation Guidelines
When asked to create or scaffold a new skill:
- **Under Evaluation Phase**: All new skills, files, and examples MUST be created in the `under-evaluation/` directory first (e.g., `under-evaluation/my-new-skill/`). Do not create them directly in `skills/` unless explicitly commanded by the developer.
- **Always use the template**: Base new skills on the structure found in `skills/_template/SKILL.md`.
- **Passing / Approval**: Once the developer reviews and approves the skill (commands you to "pass" it), move the entire skill folder, including any bundled references and related files, to its final location in the `skills/` directory.
- **YAML Frontmatter**: Ensure the `SKILL.md` file contains valid YAML frontmatter with the following keys:
  - `name`: The machine-readable name of the skill.
  - `description`: A brief summary of what the skill does.
  - `author`: Default to `"Abhijit Kumar Jha"` (unless instructed otherwise).
  - `author_url`: Default to `"https://github.com/abhijeetjha0"`.
  - `version`: Follow semantic versioning, starting with `"1.0.0"` for initial commits.
- **Progressive Disclosure**: Keep descriptions concise but informative, as skills are loaded on-demand based on their descriptions.

## 3. Skill Catalog Maintenance
- **Update the README**: Whenever a new skill is added or an existing skill is moved, you must update the catalog table in `skills/README.md`.
- **Alphabetical Order**: Always insert new entries into the `skills/README.md` catalog in strict alphabetical order based on the skill name.

## 4. Version Bumping
- The `version` field in a skill's frontmatter (e.g., `1.x.y`) should reflect the number of updates made to it. The initial commit is `1.0.0`. Subsequent major functional updates should bump the minor version (e.g., `1.1.0`).
- If you run bulk scripts to update versions, ensure they correctly map against the Git commit history of the `SKILL.md` file.

## 5. Artifacts and Bundling
- When a skill requires external references (like specific guidelines or documentation), bundle them within the skill's folder (e.g., `skills/<skill-name>/references/`) to make the skill fully portable and self-contained. 
- Use the `read_url_content` tool as a fallback if local bundled files are not found.

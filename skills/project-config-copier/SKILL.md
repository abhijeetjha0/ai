---
name: project-config-copier
description: >-
  Use this skill to export project configuration and boilerplate files to a JSON file, or to import an exported JSON file into a directory to create a boilerplate project.
author: Abhijit Kumar Jha
---

# Project Configuration Copier Skill

This skill allows you (the agent) to export all the standard configuration files of a project into a single JSON file, and then import it to reconstruct the project's boilerplate elsewhere.

## Initialization: Prompt the User
If the user invokes this skill without explicitly stating whether they want to export or import, **your first task is to ask them:**
> "Would you like to **export** the current project's configuration to a JSON file, or **import** an existing configuration from a JSON file?"
Wait for their response before proceeding.

---

## Exporting a Project Configuration

When the user confirms they want to export a project's configuration, follow these steps:

1. **Identify Target Files**: Search the specified project directory for the following configuration and boilerplate files:
   - Lint and formatting files (`.eslintrc*`, `eslint.config.*`, `.stylelintrc*`, `stylelint.config.*`, `.prettierrc*`, `prettier.config.*`)
   - TS/JS configs (`tsconfig.json`, `jsconfig.json`)
   - Framework & Platform configs (`next.config.*`, `vite.config.*`, `vercel.json`, etc.)
   - Test configs (`jest.config.*`, `vitest.config.*`, `cypress.config.*`, etc.)
   - YAML/YML files (`*.yml`, `*.yaml`)
   - `package.json`
   - Other dot-rc files (`.nvmrc`, `.npmrc`, `.babelrc`, etc.)
   - VS Code settings (`.vscode/**`)
   - Git ignores (`.gitignore`)
   - Example environment files (`.env.example` or `.env.sample`).
   
   **CRITICAL**: Strictly exclude actual environment files like `.env`, `.env.local`, `.env.development`, etc. to avoid leaking secrets. Exclude dependencies like `node_modules` or `.git`.

2. **Read File Contents**: Use your file reading tools (e.g., `view_file` or bash commands) to get the contents of the matching files.

3. **Generate JSON**: Construct a JSON object where the keys are the relative file paths (e.g., `"package.json"`, `".vscode/settings.json"`) and the values are the string contents of the files.

4. **Save Export**: Use the `write_to_file` tool to save this JSON object to the output file specified by the user (default to `project-config.json` if unspecified).

---

## Importing a Project Configuration

When the user confirms they want to import an exported JSON configuration, follow these steps:

1. **Ask for File**: If the user hasn't provided the path to the JSON file, ask them for it.
2. **Read the JSON**: Read the contents of the exported JSON file.
3. **Parse and Recreate**: Parse the JSON object. For each key-value pair, recreate the file in the target directory using the `write_to_file` tool.
   - The key represents the relative path.
   - The value is the content of the file.
   - Be sure to place the files in the correct subdirectories if the key contains paths (e.g., `.vscode/settings.json`).

#!/usr/bin/env bash
#
# link-project.sh - Link shared AI skills, rules, and configs into a target project.
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

usage() {
  cat <<EOF
Usage: $(basename "$0") <target-project-directory> [options]

Options:
  --skills       Link skills directory (default: yes)
  --rules        Link rules directory (default: yes)
  --plugins      Link plugins directory (default: yes)
  --all          Link all components into <target>/.agents/ (default)
  -h, --help     Display this help message

Example:
  $(basename "$0") /path/to/my-web-app
EOF
  exit 1
}

if [ $# -lt 1 ]; then
  usage
fi

TARGET_DIR="$1"
shift || true

if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Error: Target directory '$TARGET_DIR' does not exist."
  exit 1
fi

TARGET_AGENTS="$TARGET_DIR/.agents"
mkdir -p "$TARGET_AGENTS"

echo "🔗 Linking AI assets from $SCRIPT_DIR to $TARGET_AGENTS..."

# Link skills
mkdir -p "$TARGET_AGENTS/skills"
for skill_dir in "$SCRIPT_DIR/skills"/*; do
  if [ -d "$skill_dir" ] && [ "$(basename "$skill_dir")" != "_template" ]; then
    skill_name="$(basename "$skill_dir")"
    ln -sfn "$skill_dir" "$TARGET_AGENTS/skills/$skill_name"
    echo "  ✔ Linked skill: $skill_name"
  fi
done

# Link rules
mkdir -p "$TARGET_AGENTS/rules"
for rule_file in "$SCRIPT_DIR/rules"/*.md; do
  if [ -f "$rule_file" ] && [ "$(basename "$rule_file")" != "README.md" ]; then
    rule_name="$(basename "$rule_file")"
    ln -sfn "$rule_file" "$TARGET_AGENTS/rules/$rule_name"
    echo "  ✔ Linked rule: $rule_name"
  fi
done

# Link plugins
mkdir -p "$TARGET_AGENTS/plugins"
for plugin_dir in "$SCRIPT_DIR/plugins"/*; do
  if [ -d "$plugin_dir" ] && [ "$(basename "$plugin_dir")" != "_template" ]; then
    plugin_name="$(basename "$plugin_dir")"
    ln -sfn "$plugin_dir" "$TARGET_AGENTS/plugins/$plugin_name"
    echo "  ✔ Linked plugin: $plugin_name"
  fi
done

echo "✅ AI assets successfully linked to '$TARGET_AGENTS'!"

#!/usr/bin/env bash
#
# validate.sh - Validates JSON schemas and SKILL.md YAML frontmatter across the repo
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ERRORS=0

echo "🔍 Validating AI Repository Assets..."

# 1. Validate all JSON files
echo "👉 Checking JSON syntax..."
while IFS= read -r -d '' json_file; do
  if ! python3 -m json.tool "$json_file" > /dev/null 2>&1; then
    echo "  ❌ Invalid JSON: $json_file"
    ERRORS=$((ERRORS + 1))
  else
    echo "  ✔ Valid JSON: $(basename "$json_file")"
  fi
done < <(find "$SCRIPT_DIR" -type f -name "*.json" -not -path "*/.git/*" -not -path "*/under-evaluation/*" -print0)

# 2. Validate SKILL.md files
echo "👉 Checking SKILL.md frontmatter..."
while IFS= read -r -d '' skill_file; do
  # Check if file begins with ---
  first_line=$(head -n 1 "$skill_file")
  if [ "$first_line" != "---" ]; then
    echo "  ❌ Missing YAML frontmatter start (---): $skill_file"
    ERRORS=$((ERRORS + 1))
    continue
  fi

  # Check for name and description fields in the frontmatter
  if ! grep -q "^name:" "$skill_file"; then
    echo "  ❌ Missing 'name:' in frontmatter: $skill_file"
    ERRORS=$((ERRORS + 1))
  fi
  if ! grep -q "^description:" "$skill_file"; then
    echo "  ❌ Missing 'description:' in frontmatter: $skill_file"
    ERRORS=$((ERRORS + 1))
  fi

  echo "  ✔ Valid Skill: $(basename "$(dirname "$skill_file")")/$(basename "$skill_file")"
done < <(find "$SCRIPT_DIR/skills" "$SCRIPT_DIR/plugins" -type f -name "SKILL.md" 2>/dev/null -print0 || true)

if [ $ERRORS -eq 0 ]; then
  echo "🎉 All AI assets validated successfully!"
  exit 0
else
  echo "⚠️ Validation finished with $ERRORS error(s)."
  exit 1
fi

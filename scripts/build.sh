#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

python3 "$ROOT/scripts/build-llms-txt.py" "$ROOT/index.html" "$ROOT/llms.txt"
"$ROOT/scripts/build-resume-pdf.sh" "$@"

#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="${1:-$ROOT/vishnu-Roshan-Resume.pdf}"
PORT="${PORT:-8787}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME" >&2
  exit 1
fi

cleanup() {
  [ -n "${SERVER:-}" ] && kill "$SERVER" 2>/dev/null
  return 0
}
trap cleanup EXIT

python3 -m http.server "$PORT" --directory "$ROOT" --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER=$!

for _ in $(seq 1 50); do
  if curl -fsS "http://127.0.0.1:$PORT/index.html" -o /dev/null 2>/dev/null; then break; fi
  sleep 0.1
done

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "http://127.0.0.1:$PORT/index.html" >/dev/null 2>&1

echo "wrote $OUT"

if command -v pdftotext >/dev/null 2>&1; then
  TEXT="$(pdftotext "$OUT" - | tr '\n' ' ' | tr -s ' ')"
  MISSING=0
  for term in "e-commerce" "full-stack" "Web performance" "AI-assisted development" \
              "Reciprocal Rank Fusion" "React Native" "Vector search" \
              "linkedin.com/in/vishnu-roshan" "github.com/vishnuroshan" \
              "logistics (WMS)" "E2E test automation" \
              "https://github.com/vishnuroshan/sudoku" \
              "https://github.com/vishnuroshan/steamlib" \
              "https://github.com/vishnuroshan/tuitactoe" \
              "https://github.com/vishnuroshan/zed-react-ts-snippets" \
              "https://zed.dev/extensions/react-typescript-snippets" \
              "https://sedstart.com/" \
              "SUMMARY" "EXPERIENCE" "SIDE PROJECTS" "SKILLS" "EDUCATION"; do
    case "$TEXT" in
      *"$term"*) ;;
      *) echo "missing or split in extracted text: $term" >&2; MISSING=1 ;;
    esac
  done
  case "$TEXT" in
    *[0-9][0-9][0-9][0-9][0-9]\ [0-9][0-9][0-9][0-9][0-9]*)
      echo "a phone-shaped number appears in the PDF" >&2; MISSING=1 ;;
  esac
  [ "$MISSING" -eq 0 ] && echo "extraction checks passed"
fi

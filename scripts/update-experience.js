#!/usr/bin/env node
// Recomputes years of professional experience and patches index.html in place.
// Keeps the page fully static (no runtime JS) while the figure stays current.
//
// Run manually:            node scripts/update-experience.js
// Runs automatically via:  .github/workflows/update-experience.yml (yearly)

const fs = require("fs");
const path = require("path");

const CAREER_START = "2017-11-01";
const INDEX = path.join(__dirname, "..", "index.html");
const PATTERN = /over \d+ years of experience/;

function yearsOfExperience() {
  const start = new Date(CAREER_START);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (beforeAnniversary) years -= 1;
  return years;
}

const html = fs.readFileSync(INDEX, "utf8");

if (!PATTERN.test(html)) {
  console.error(
    'Could not find the "over N years of experience" phrase in index.html. ' +
      "Update PATTERN in this script if the wording changed."
  );
  process.exit(1);
}

const years = yearsOfExperience();
const updated = html.replace(PATTERN, `over ${years} years of experience`);

if (updated === html) {
  console.log(`No change — already "over ${years} years of experience".`);
} else {
  fs.writeFileSync(INDEX, updated);
  console.log(`Updated to "over ${years} years of experience".`);
}

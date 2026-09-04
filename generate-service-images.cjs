// Generates service SVG placeholders + OG cover into public/images
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "public", "images");
fs.mkdirSync(dir, { recursive: true });

function svg({ w, h, from, to, caption, body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${caption}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <g opacity="0.12" fill="none" stroke="#ffffff" stroke-width="2">
    <circle cx="${w * 0.85}" cy="${h * 0.15}" r="90"/>
    <circle cx="${w * 0.1}" cy="${h * 0.85}" r="130"/>
  </g>
  ${body}
  <g font-family="Segoe UI, Arial, sans-serif" text-anchor="middle">
    <text x="${w / 2}" y="${h - 46}" font-size="26" font-weight="700" fill="#0f2438" opacity="0.85">${caption}</text>
    <text x="${w / 2}" y="${h - 20}" font-size="16" fill="#0f2438" opacity="0.5">Placeholder photo — replace with real clinic imagery</text>
  </g>
</svg>`;
}

const colors = {
  "spinal-adjustments": ["#e2edf5", "#5791c0", "#225c8d"],
  "sports-injury-rehab": ["#d9fbea", "#3bd69e", "#09986a"],
  "headache-migraine-relief": ["#f2f7fb", "#8fb8d6", "#3274a8"],
  "prenatal-pediatric-care": ["#d9fbea", "#7eeabe", "#0a7a58"],
  "posture-corrective-care": ["#e2edf5", "#3274a8", "#1d4a72"],
  "wellness-maintenance": ["#effdf7", "#b5f5d8", "#14bd83"],
};

const captions = {
  "spinal-adjustments": "Spinal Adjustments",
  "sports-injury-rehab": "Sports Injury Rehab",
  "headache-migraine-relief": "Headache & Migraine Relief",
  "prenatal-pediatric-care": "Prenatal & Pediatric Care",
  "posture-corrective-care": "Posture Corrective Care",
  "wellness-maintenance": "Wellness & Maintenance Care",
};

for (const slug of Object.keys(colors)) {
  const [from, to, c] = colors[slug];
  const body = `
  <rect x="180" y="200" width="360" height="220" rx="32" fill="#ffffff" opacity="0.6"/>
  <path d="M300 420 v-100 h30 v-40 h30 v-30 h30 v-50 h30 v50 h30 v30 h30 v40 h30 v100" fill="none" stroke="${c}" stroke-width="18" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="580" cy="230" r="40" fill="${c}" opacity="0.45"/>
  <path d="M564 230 l11 11 22 -22" stroke="#ffffff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="560" cy="300" r="30" fill="#e8b088"/>
  <path d="M536 340 q24 -30 48 0 v60 h-48 z" fill="${c}"/>`;
  fs.writeFileSync(
    path.join(dir, `service-${slug}.svg`),
    svg({ w: 800, h: 560, from, to, caption: captions[slug], body }).trim() + "\n"
  );
  console.log("Wrote", `service-${slug}.svg`);
}

const og = svg({
  w: 1200, h: 630, from: "#0f2438", to: "#09986a",
  caption: "",
  body: `
  <g font-family="Segoe UI, Arial, sans-serif" text-anchor="middle">
    <text x="600" y="270" font-size="76" font-weight="800" fill="#ffffff">Vital Chiropractic</text>
    <text x="600" y="340" font-size="34" fill="#7eeabe">Expert care for back pain, neck pain &amp; injuries</text>
    <text x="600" y="400" font-size="26" fill="#ffffff" opacity="0.7">Same-week appointments · Austin, TX · (555) 123-4567</text>
  </g>`,
}).replace(/\n\s*<text x="600"[^>]*>Placeholder[^<]*<\/text>\n/, "").replace(/\n\s*<text x="600"[^>]*y="584"[^>]*><\/text>/, "");

fs.writeFileSync(path.join(dir, "og-cover.svg"), og.trim() + "\n");
console.log("Wrote og-cover.svg");

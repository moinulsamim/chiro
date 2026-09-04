// Generates main SVG placeholder images into public/images
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
    <circle cx="${w * 0.5}" cy="${h * 0.5}" r="200"/>
  </g>
  ${body}
  <g font-family="Segoe UI, Arial, sans-serif" text-anchor="middle">
    <text x="${w / 2}" y="${h - 46}" font-size="26" font-weight="700" fill="#0f2438" opacity="0.85">${caption}</text>
    <text x="${w / 2}" y="${h - 20}" font-size="16" fill="#0f2438" opacity="0.5">Placeholder photo — replace with real clinic imagery</text>
  </g>
</svg>`;
}

const heroBody = `
  <rect x="120" y="330" width="640" height="60" rx="30" fill="#0f2438" opacity="0.85"/>
  <rect x="160" y="390" width="26" height="240" rx="12" fill="#0f2438" opacity="0.7"/>
  <rect x="694" y="390" width="26" height="240" rx="12" fill="#0f2438" opacity="0.7"/>
  <g>
    <ellipse cx="330" cy="330" rx="120" ry="34" fill="#ffffff" opacity="0.85"/>
    <circle cx="250" cy="250" r="28" fill="#e8b088"/>
    <path d="M270 300 Q380 320 470 300" stroke="#225c8d" stroke-width="52" fill="none" stroke-linecap="round"/>
  </g>
  <circle cx="620" cy="180" r="42" fill="#f0c8a0"/>
  <path d="M600 240 q30 40 -10 90" stroke="#0a7a58" stroke-width="46" fill="none" stroke-linecap="round"/>
`;

const clinicBody = `
  <rect x="100" y="140" width="600" height="360" rx="24" fill="#ffffff" opacity="0.55"/>
  <circle cx="270" cy="220" r="60" fill="#14bd83" opacity="0.35"/>
  <circle cx="270" cy="220" r="36" fill="#ffffff" opacity="0.9"/>
  <rect x="460" y="200" width="180" height="34" rx="17" fill="#0f2438" opacity="0.75"/>
  <rect x="500" y="234" width="20" height="170" rx="10" fill="#0f2438" opacity="0.6"/>
  <rect x="600" y="234" width="20" height="170" rx="10" fill="#0f2438" opacity="0.6"/>
  <rect x="160" y="330" width="280" height="90" rx="45" fill="#0f2438" opacity="0.8"/>
  <rect x="210" y="420" width="18" height="80" rx="9" fill="#0f2438" opacity="0.6"/>
  <rect x="372" y="420" width="18" height="80" rx="9" fill="#0f2438" opacity="0.6"/>
`;

const doctorBody = `
  <circle cx="400" cy="240" r="160" fill="#ffffff" opacity="0.5"/>
  <circle cx="400" cy="190" r="66" fill="#e8b088"/>
  <path d="M320 340 q80 -80 160 0 v110 h-160 z" fill="#225c8d"/>
  <path d="M340 270 q60 70 120 0" stroke="#0f2438" stroke-width="12" fill="none" opacity="0.55"/>
  <circle cx="452" cy="330" r="24" fill="#ffffff" opacity="0.9"/>
  <text x="400" y="520" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="800" fill="#0f2438" text-anchor="middle" opacity="0.8">Dr. Alex Carter, D.C.</text>
`;

const out = [
  ["hero.svg", 880, 760, "#d9fbea", "#7eeabe", "Personalized chiropractic care", heroBody],
  ["clinic.svg", 800, 640, "#e2edf5", "#8fb8d6", "Our modern clinic", clinicBody],
  ["doctor.svg", 800, 640, "#d9fbea", "#3bd69e", "Meet your chiropractor", doctorBody],
];

for (const [name, w, h, from, to, caption, body] of out) {
  fs.writeFileSync(path.join(dir, name), svg({ w, h, from, to, caption, body }).trim() + "\n");
  console.log("Wrote", name);
}

// Extract public copy only; never read environment files or user-submitted data.
const ts = require('typescript');
const fs = require('node:fs');
const path = require('node:path');
const strings = new Set();
const ignoredAttributes = new Set(['className', 'href', 'src', 'id', 'key', 'type', 'name', 'value', 'source', 'eventName', 'sizes', 'autoComplete', 'inputMode', 'target', 'rel', 'd', 'fill', 'stroke']);
const unchanged = new Set(['%s | Mancar Software', 'API', 'APIs', 'Alejandro Mantilla', 'Alma Vet', 'Answer', 'Backend', 'Casa Nativa', 'ContactPoint', 'Content-Type', 'EC', 'Edge', 'Edge Functions', 'Electron', 'Escape', 'FAQPage', 'GitHub', 'GitHub Pages', 'Guayaquil', 'Instagram', 'Jeremy Macias', 'LAN', 'Mancar Software', 'NestJS', 'Next.js', 'Node.js', 'Nova Store', 'OdontoCare', 'Offer', 'Organization', 'POST', 'PostalAddress', 'PostgreSQL', 'Prisma', 'ProfessionalService', 'Question', 'React', 'Service', 'Supabase', 'Tailwind CSS', 'TikTok', 'TypeScript', 'UI/UX', 'VetCare Pro LAN', 'Vite', 'Windows', 'Windows + LAN', 'afterInteractive', 'application/json', 'currentColor', 'mancar:analytics', 'mancar:cookie-consent', 'projectType', 'use client']);
function add(text) {
  text = text.replace(/\s+/g, ' ').trim();
  if (!text || !/[a-záéíóúñ]/i.test(text) || unchanged.has(text)) return;
  if (/^(https?:|\/|#|mailto:|tel:|\.|@)/.test(text) || /[_{}=]|\b(?:px-|text-|bg-|grid-|flex-|border-|rounded-|min-|max-|object-|items-|justify-|space-|font-|w-|h-|mt-|mb-|gap-|py-|mx-)/.test(text)) return;
  if (text.includes('@') || (!text.includes(' ') && /^[a-z\d-]+$/.test(text))) return;
  strings.add(text);
}
function visit(node) {
  if (ts.isImportDeclaration(node) || ts.isTypeNode(node)) return;
  if (ts.isPropertyAssignment(node) && ['className', 'href', 'src', 'path', 'slug', 'icon', 'image', 'imagePosition', 'initials', 'accent', 'background', 'foreground', 'liveUrl', 'eventName'].includes(node.name.getText().replace(/['"]/g,''))) return;
  if (ts.isJsxAttribute(node) && ignoredAttributes.has(node.name.getText())) return;
  if (ts.isJsxText(node) || ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) add(node.text);
  ts.forEachChild(node, visit);
}
function walk(dir) {
  for (const item of fs.readdirSync(dir, {withFileTypes:true})) {
    const file = path.join(dir,item.name);
    if (item.isDirectory()) { if (!['i18n','api'].includes(item.name)) walk(file); }
    else if (/\.tsx?$/.test(file) && !/\.test\./.test(file)) visit(ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true));
  }
}
walk('src/app');
let missing = false;
for (const locale of ['en', 'zh', 'hi', 'ar']) {
  const dictionary = JSON.parse(fs.readFileSync(`src/app/i18n/${locale}.json`, 'utf8'));
  const absent = [...strings].filter(text => !dictionary[text]);
  if (absent.length) { missing = true; console.error(locale, absent); }
}
if (missing) process.exitCode = 1;
else console.log(`${strings.size} public copy entries covered in all four languages.`);

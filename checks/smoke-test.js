const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const exists = (name) => fs.existsSync(path.join(root, name));
const failures = [];

const html = read('index.html');
const readme = read('README.md');

function expect(condition, message) {
  if (!condition) failures.push(message);
}

expect(readme.includes('https://qjpjp.github.io/training-record/'), 'README should include the GitHub Pages demo URL.');
expect(readme.includes('功能'), 'README should describe app features.');
expect(readme.includes('备份'), 'README should explain backup and restore.');
expect(!exists('fresh/index.html'), 'Remove duplicate fresh/index.html or document a separate purpose.');
expect(!html.includes('\uFFFD'), 'index.html should not contain replacement characters.');
expect(html.includes('function createRecordElement(record)'), 'History rows should be rendered through createRecordElement().');
expect(!html.includes('list.innerHTML = filtered.map'), 'History rows should not be built with innerHTML templates.');
expect(
  html.includes('details.textContent = `${record.sets} 组 × ${record.reps} 次 · 估算 1RM ${e1rm} kg`;'),
  'Record details should be assigned through textContent.'
);

if (failures.length) {
  console.error('Smoke checks failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Smoke checks passed.');


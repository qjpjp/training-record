const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);

if (!scripts.length) {
  console.error("No inline script found.");
  process.exit(1);
}

scripts.forEach((script, index) => {
  try {
    new Function(script);
  } catch (error) {
    console.error(`Inline script ${index + 1} does not parse.`);
    throw error;
  }
});

console.log(`Inline scripts parse: ${scripts.length}`);

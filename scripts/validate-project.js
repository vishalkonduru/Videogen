import fs from "node:fs";
import path from "node:path";
import { parseArgs, rootDir } from "./utils.js";
const args = parseArgs(process.argv.slice(2));
if (!args.project) throw new Error("Usage: npm run validate -- --project projects/NAME");
const root = rootDir();
const project = path.resolve(root, args.project);
if (!project.startsWith(path.join(root, "projects") + path.sep)) throw new Error("Project must be inside projects/.");
const manifestPath = path.join(project, "videogen.json");
if (!fs.existsSync(manifestPath)) throw new Error("videogen.json is missing.");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const errors = [];
if (!manifest.name) errors.push("name is required");
if (!Array.isArray(manifest.scenes) || manifest.scenes.length === 0) errors.push("at least one scene is required");
for (const [i, scene] of (manifest.scenes || []).entries()) {
  if (!scene.title || !scene.narration || !scene.visual) errors.push(`scene ${i + 1} needs title, narration, and visual`);
}
if (errors.length) { console.error("Validation failed:\\n- " + errors.join("\\n- ")); process.exit(1); }
console.log(`✓ ${manifest.name}: ${manifest.scenes.length} scene(s) validated`);

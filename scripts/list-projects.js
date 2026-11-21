import fs from "node:fs";
import path from "node:path";
import { rootDir } from "./utils.js";
const dir = path.join(rootDir(), "projects");
const projects = fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).filter(x => x.isDirectory()) : [];
if (!projects.length) console.log("No projects yet. Run: npm run create -- --name my-video");
for (const item of projects) {
  const file = path.join(dir, item.name, "videogen.json");
  const data = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {};
  console.log(`- ${item.name} | ${data.status || "draft"} | ${data.template || "unknown"}`);
}

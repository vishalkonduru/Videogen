import fs from "node:fs";
import path from "node:path";

export function parseArgs(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith("--")) result[token.slice(2)] = argv[i + 1]?.startsWith("--") || !argv[i + 1] ? true : argv[++i];
  }
  return result;
}
export function readJson(file) { return JSON.parse(fs.readFileSync(file, "utf8")); }
export function writeJson(file, value) { fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n"); }
export function safeName(value) {
  const name = String(value || "").toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "");
  if (!name) throw new Error("Provide a project name using --name.");
  return name;
}
export function rootDir() { return path.resolve(import.meta.dirname, ".."); }

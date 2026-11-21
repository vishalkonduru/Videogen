import { spawnSync } from "node:child_process";
import process from "node:process";

console.log("\\nVideogen environment check\\n");
console.log(`Node.js: ${process.version} ${Number(process.versions.node.split(".")[0]) >= 20 ? "✓" : "✗ (20+ required)"}`);
for (const command of ["npm", "ffmpeg"]) {
  const result = spawnSync(command, ["--version"], { encoding: "utf8", shell: process.platform === "win32" });
  console.log(`${command}: ${result.status === 0 ? "available ✓" : "not found (optional for setup, required for rendering)"}`);
}
console.log("\\nThe starter workflow is local-first. Configure optional AI providers in .env.");

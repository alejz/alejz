import Database from "better-sqlite3";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const db = new Database("data.db");

const migrationsFolder = "./src/db/migrations";
const files = readdirSync(migrationsFolder)
  .filter(f => f.endsWith(".sql"))
  .sort();

for (const file of files) {
  const sql = readFileSync(join(migrationsFolder, file), "utf-8");
  console.log(`Running migration: ${file}`);
  db.exec(sql);
}

console.log("Migrations completed!");
db.close();

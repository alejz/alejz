import { drizzle } from "drizzle-orm/sql.js";
import initSqlJs from "sql.js";
import * as schema from "./schema";

let db: any;

export async function getDb() {
  if (db) return db;
  
  const SQL = await initSqlJs();
  db = drizzle(SQL.Database, { schema });
  return db;
}

export { db as defaultDb };
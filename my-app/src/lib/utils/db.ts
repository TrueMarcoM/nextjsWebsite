import mysql from "mysql2/promise";

const dbUrl = process.env.DATABASE_URL;
const pass = process.env.SECRET_KEY;

export const db = mysql.createPool({
  host: dbUrl,
  user: "techm",
  password: pass,
  database: "techm_2025",
});

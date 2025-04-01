import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "mysql-techm.alwaysdata.net",
  user: "techm",
  password: "pkAA@1943tech",
  database: "techm_2025",
});

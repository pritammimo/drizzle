import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
 
const pool = mysql.createPool({
  uri:"mysql://root:password@localhost:3306/exampleDB"
});
 
export const db = drizzle(pool);
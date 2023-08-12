import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { envConfig } from "../config/config";
import * as mainSchema from "../db/schema/schema";
// const pool = mysql.createPool({
//   uri:envConfig.DATABASE_URL
// });
// export const db = drizzle(pool);
export async function connectToDb() {
  const pool = mysql.createPool({
    uri:envConfig.DATABASE_URL
  });
  return await drizzle(pool,{ schema: mainSchema });
}


import { migrate } from "drizzle-orm/mysql2/driver";
import { drizzle } from "drizzle-orm/mysql2";
// @ts-ignore
import mysql from "mysql2/promise";
import env from "../env.mjs"

import * as schema from "./schema/index.mjs";

const connection = await mysql.createConnection({
  uri: env.DB_URI,
});

export const db =  drizzle(connection, { mode: "default", schema });

migrate(db)
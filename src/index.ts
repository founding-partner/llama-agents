import * as dotenv from 'dotenv' 
dotenv.config()

import {db} from "./db/index";

const users = await db.query.ContentTable.findMany();

console.log(users);

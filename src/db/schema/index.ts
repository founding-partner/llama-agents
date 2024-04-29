/* THIS IS A BARREL FILE FOR ALL SCHEMA INSIDE THIS FOLDER */

/* Using barrel files is considered an anti-pattern,
 * It can interfere with tree shaking and might increase bundle size,
 * Import from this file only if you really need it !
 */

import { int, text, serial, mysqlTable, mysqlSchema, timestamp} from "drizzle-orm/mysql-core";

export const mySchema = mysqlSchema("llama_agents")

export const ExecutionTable = mysqlTable("executions", {
  id: serial("id"),
  status: text("status"), // Status can be 'yet to start', 'in progress', 'completed'.
  createdTime: timestamp("createdTime").defaultNow(),
  updateTime: timestamp("updatedTime").defaultNow(),
});

export const ActionsTable = mysqlTable("actions", {
  id: serial("id"),
  execution_id: int("execution_id").references(() => ExecutionTable.id),
  content_type: text("content_type").default("CHAT"),
  status: text("status"), // Status as 'yet to start', 'in progress', 'completed'.
  role: text("role"),
  action: text("action"),
  createdTime: timestamp("createdTime").defaultNow(),
  updateTime: timestamp("updatedTime").defaultNow(),
});

//@ts-ignore
export const ContentTable = mysqlTable("contents", {
  id: serial("id"),
  role: text("role"),
  execution_id: int("execution_id").references(() => ExecutionTable.id),
  // Assuming it references contents
  action_id: int("action_id").references(() => ActionsTable.id),
  parent_content_id: int("parent_content_id"), // Assuming it can be nullable
  content: text("content"),
  createdTime: timestamp("createdTime").defaultNow(),
  updateTime: timestamp("updatedTime").defaultNow(),
});

import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const jwt_users = pgTable("registration", {
  user_id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
  role: varchar("role", { length: 256 }).default("user"),
});

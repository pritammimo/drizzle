import { relations, sql } from "drizzle-orm";
import {
    int,
    mysqlTable,
    varchar,
    mysqlEnum,
    datetime,
    uniqueIndex,
  } from "drizzle-orm/mysql-core";
import { RoleSchema } from "./role.schema";
import { BlogSchema } from "./blog.schema";
export const UserSchema = mysqlTable(
    "users",
    {
      id: varchar("id", { length: 50 }).primaryKey(),
      fullName: varchar("full_name", { length: 100 }).notNull(),
      email: varchar("email", { length: 100 }).notNull(),
      password: varchar("password", { length: 255 }).notNull(),
      age: int("age"),
      phone: varchar("phone", { length: 256 }),
  address: varchar("address", { length: 256 }),
  score: int("score"),
      gender: mysqlEnum("gender", ["male", "female"]).notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
      roleSlug: varchar("role_slug", { length: 25 })
        .notNull()
        .references(() => {
          return RoleSchema.slug;
        }),
    },
    (userSchema) => {
      return {
        email_unique_idx: uniqueIndex("email_unique_idx").on(userSchema.email),
      };
    }
  );
  export const userRelations = relations(UserSchema, ({ one,many }) => ({
    profile: one(RoleSchema, {
      fields: [UserSchema.roleSlug],
      references: [RoleSchema.slug],
    }),
    blogs:many(BlogSchema)
  }));
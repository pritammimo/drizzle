import { InferModel, relations } from "drizzle-orm";
import { int, mysqlTable, primaryKey, varchar } from "drizzle-orm/mysql-core";
import { BlogSchema } from "./blog.schema";
import { CategorySchema } from "./category.schema";

export const BlogToCategorySchema = mysqlTable(
  "blog_to_category",
  {
    blogId: int("blog_id").notNull(),
    categorySlug: varchar("category_slug", { length: 50 }).notNull(),
  },
  (blogToCategorySchema) => {
    return {
      pk: primaryKey(blogToCategorySchema.blogId, blogToCategorySchema.categorySlug),
    };
  }
);
export const BlogToCategoryRelations = relations(BlogToCategorySchema, ({ one }) => ({
  blog: one(BlogSchema, {
    fields: [BlogToCategorySchema.blogId],
    references: [BlogSchema.id],
  }),
  category: one(CategorySchema, {
    fields: [BlogToCategorySchema.categorySlug],
    references: [CategorySchema.slug],
  }),
}));

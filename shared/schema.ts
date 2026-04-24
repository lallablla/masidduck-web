import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const riceCakes = pgTable("rice_cakes", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  description: text("description").notNull().default(""),
  imageUrl: text("image_url").notNull().default(""),
  available: boolean("available").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertRiceCakeSchema = createInsertSchema(riceCakes).pick({
  name: true,
  description: true,
  imageUrl: true,
  available: true,
  sortOrder: true,
});

export const updateRiceCakeSchema = insertRiceCakeSchema.partial();

export type RiceCake = typeof riceCakes.$inferSelect;
export type InsertRiceCake = z.infer<typeof insertRiceCakeSchema>;
export type UpdateRiceCake = z.infer<typeof updateRiceCakeSchema>;

export const catalogProducts = pgTable("catalog_products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  description: text("description").notNull().default(""),
  category: text("category").notNull(),
  subcategory: text("subcategory").notNull().default(""),
  price: text("price").notNull().default("가격 문의"),
  imageUrl: text("image_url").notNull().default(""),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertCatalogProductSchema = createInsertSchema(catalogProducts).omit({
  id: true,
  createdAt: true,
});

export type CatalogProduct = typeof catalogProducts.$inferSelect;
export type InsertCatalogProduct = z.infer<typeof insertCatalogProductSchema>;

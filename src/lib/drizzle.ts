import { sql } from "@vercel/postgres";
import { pgTable, varchar, serial, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartTable = pgTable("hackathon_cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id").notNull(),
  product_id: varchar("product_id").notNull(),
  product_title: varchar("product_title").notNull(),
  product_quantity: integer("product_quantity").notNull(),
  product_price: integer("product_price").notNull(),
  total_price: integer("total_price").notNull(),
  image_url: varchar("image_url").notNull(),
});

export const db = drizzle(sql);

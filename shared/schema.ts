import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const calculations = pgTable("calculations", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'add' or 'remove'
  baseAmount: integer("base_amount").notNull(),
  gstRate: integer("gst_rate").notNull(),
  finalAmount: integer("final_amount").notNull(),
  calculatedAt: timestamp("calculated_at").notNull().defaultNow(),
});

export const invoices = pgTable("invoices", {
  id: serial("id").primaryKey(),
  customerName: text("customer_name").notNull(),
  items: text("items").notNull(), // JSON string of line items
  totalAmount: integer("total_amount").notNull(),
  gstAmount: integer("gst_amount").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertCalculationSchema = createInsertSchema(calculations).omit({ 
  id: true,
  calculatedAt: true 
});

export const insertInvoiceSchema = createInsertSchema(invoices).omit({ 
  id: true,
  createdAt: true 
});

export type InsertCalculation = z.infer<typeof insertCalculationSchema>;
export type Calculation = typeof calculations.$inferSelect;
export type InsertInvoice = z.infer<typeof insertInvoiceSchema>;
export type Invoice = typeof invoices.$inferSelect;

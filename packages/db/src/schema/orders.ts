import { pgTable, uuid, varchar, text, numeric, integer, timestamp } from 'drizzle-orm/pg-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';
import { customers } from './customers';
import { products } from './products';
import { warehouses } from './inventory';
import { users } from './users';

/**
 * Sales Orders - Customer orders
 */
export const salesOrders = pgTable('sales_orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  orderNumber: varchar('order_number', { length: 50 }).notNull().unique(),
  customerId: uuid('customer_id').notNull().references(() => customers.id),
  warehouseId: uuid('warehouse_id').references(() => warehouses.id),
  status: varchar('status', { length: 50 }).notNull().default('draft'), // 'draft', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'
  
  // Amounts
  subtotal: numeric('subtotal', { precision: 12, scale: 2 }).notNull().default('0'),
  taxAmount: numeric('tax_amount', { precision: 12, scale: 2 }).notNull().default('0'),
  discountAmount: numeric('discount_amount', { precision: 12, scale: 2 }).notNull().default('0'),
  shippingAmount: numeric('shipping_amount', { precision: 12, scale: 2 }).notNull().default('0'),
  totalAmount: numeric('total_amount', { precision: 12, scale: 2 }).notNull().default('0'),
  
  // Dates
  orderDate: timestamp('order_date', { withTimezone: true }).notNull().defaultNow(),
  requiredDate: timestamp('required_date', { withTimezone: true }),
  shippedDate: timestamp('shipped_date', { withTimezone: true }),
  
  // Shipping Info
  shippingAddress: text('shipping_address'),
  shippingMethod: varchar('shipping_method', { length: 100 }),
  trackingNumber: varchar('tracking_number', { length: 100 }),
  
  notes: text('notes'),
  salesRepId: uuid('sales_rep_id').references(() => users.id),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

/**
 * Sales Order Items - Line items for orders
 */
export const salesOrderItems = pgTable('sales_order_items', {
  id: uuid('id').defaultRandom().primaryKey(),
  orderId: uuid('order_id').notNull().references(() => salesOrders.id),
  productId: uuid('product_id').notNull().references(() => products.id),
  quantity: integer('quantity').notNull(),
  unitPrice: numeric('unit_price', { precision: 12, scale: 2 }).notNull(),
  discount: numeric('discount', { precision: 5, scale: 2 }).default('0'),
  taxRate: numeric('tax_rate', { precision: 5, scale: 2 }).default('0'),
  lineTotal: numeric('line_total', { precision: 12, scale: 2 }).notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export type SalesOrder = InferSelectModel<typeof salesOrders>;
export type NewSalesOrder = InferInsertModel<typeof salesOrders>;
export type SalesOrderItem = InferSelectModel<typeof salesOrderItems>;
export type NewSalesOrderItem = InferInsertModel<typeof salesOrderItems>;

import { router } from './trpc';
import { dashboardRouter } from './procedures/dashboard/dashboard.router';
import { productsRouter } from './procedures/products/products.router';
import { inventoryRouter } from './procedures/inventory/inventory.router';
import { customersRouter } from './procedures/customers/customers.router';
import { ordersRouter } from './procedures/orders/orders.router';
import { employeesRouter } from './procedures/employees/employees.router';
import { db } from '@kyte/db';
import type { Context } from './trpc';

/**
 * Main tRPC App Router
 * 
 * Aggregates all sub-routers for the ERP API
 */
export const appRouter = router({
  dashboard: dashboardRouter,
  products: productsRouter,
  inventory: inventoryRouter,
  customers: customersRouter,
  orders: ordersRouter,
  employees: employeesRouter,
});

/**
 * Export type definition of API for client usage
 */
export type AppRouter = typeof appRouter;

/**
 * Create context for tRPC procedures
 */
export const createContext = (): Context => {
  return {
    db,
  };
};

export { type Context } from './trpc';

import { router, publicProcedure } from '../../trpc';
import { z } from 'zod';

/**
 * Inventory Router
 * Stock management and warehouse operations
 */
export const inventoryRouter = router({
  /**
   * Get inventory levels
   */
  getLevels: publicProcedure
    .input(z.object({
      warehouseId: z.string().uuid().optional(),
      lowStockOnly: z.boolean().optional(),
    }))
    .query(async ({ input }) => {
      // Demo data
      return [
        { productId: '1', sku: 'SKU-001', name: 'Premium Widget', quantity: 150, reserved: 10, minStock: 20, status: 'ok' },
        { productId: '2', sku: 'SKU-002', name: 'Standard Gadget', quantity: 300, reserved: 25, minStock: 50, status: 'ok' },
        { productId: '3', sku: 'SKU-003', name: 'Basic Component', quantity: 15, reserved: 0, minStock: 100, status: 'low' },
        { productId: '4', sku: 'SKU-004', name: 'Pro Tool Set', quantity: 0, reserved: 0, minStock: 10, status: 'out' },
        { productId: '5', sku: 'SKU-005', name: 'Office Supplies Kit', quantity: 200, reserved: 15, minStock: 30, status: 'ok' },
      ];
    }),

  /**
   * Get warehouses
   */
  getWarehouses: publicProcedure.query(async () => {
    return [
      { id: '1', name: 'Main Warehouse', code: 'WH-001', city: 'New York', products: 450 },
      { id: '2', name: 'West Coast Hub', code: 'WH-002', city: 'Los Angeles', products: 320 },
      { id: '3', name: 'Central Distribution', code: 'WH-003', city: 'Chicago', products: 280 },
    ];
  }),

  /**
   * Record stock adjustment
   */
  adjustStock: publicProcedure
    .input(z.object({
      productId: z.string().uuid(),
      warehouseId: z.string().uuid(),
      quantity: z.number().int(),
      type: z.enum(['in', 'out', 'adjustment']),
      reason: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      return {
        id: crypto.randomUUID(),
        ...input,
        createdAt: new Date().toISOString(),
      };
    }),

  /**
   * Get stock movement history
   */
  getTransactions: publicProcedure
    .input(z.object({
      productId: z.string().uuid().optional(),
      warehouseId: z.string().uuid().optional(),
      limit: z.number().min(1).max(100).optional().default(20),
    }))
    .query(async ({ input }) => {
      return [
        { id: '1', product: 'Premium Widget', type: 'in', quantity: 50, warehouse: 'Main Warehouse', date: '2024-01-15' },
        { id: '2', product: 'Standard Gadget', type: 'out', quantity: -25, warehouse: 'West Coast Hub', date: '2024-01-14' },
        { id: '3', product: 'Basic Component', type: 'adjustment', quantity: -5, warehouse: 'Main Warehouse', date: '2024-01-13' },
      ];
    }),
});

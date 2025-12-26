import { router, publicProcedure } from '../../trpc';
import { z } from 'zod';

/**
 * Products Router
 * CRUD operations for product catalog
 */
export const productsRouter = router({
  /**
   * List all products with pagination
   */
  list: publicProcedure
    .input(z.object({
      page: z.number().min(1).optional().default(1),
      limit: z.number().min(1).max(100).optional().default(20),
      search: z.string().optional(),
      categoryId: z.string().uuid().optional(),
    }))
    .query(async ({ input }) => {
      // Demo data
      const products = [
        { id: '1', sku: 'SKU-001', name: 'Premium Widget', category: 'Electronics', price: 99.99, stock: 150 },
        { id: '2', sku: 'SKU-002', name: 'Standard Gadget', category: 'Electronics', price: 49.99, stock: 300 },
        { id: '3', sku: 'SKU-003', name: 'Basic Component', category: 'Parts', price: 19.99, stock: 500 },
        { id: '4', sku: 'SKU-004', name: 'Pro Tool Set', category: 'Tools', price: 199.99, stock: 75 },
        { id: '5', sku: 'SKU-005', name: 'Office Supplies Kit', category: 'Office', price: 29.99, stock: 200 },
      ];

      return {
        items: products,
        total: products.length,
        page: input.page,
        limit: input.limit,
      };
    }),

  /**
   * Get product by ID
   */
  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      return {
        id: input.id,
        sku: 'SKU-001',
        name: 'Premium Widget',
        description: 'High-quality premium widget for all your needs',
        category: 'Electronics',
        price: 99.99,
        costPrice: 45.00,
        stock: 150,
        minStock: 20,
        unit: 'piece',
        isActive: true,
      };
    }),

  /**
   * Create new product
   */
  create: publicProcedure
    .input(z.object({
      sku: z.string().min(1).max(100),
      name: z.string().min(1).max(255),
      description: z.string().optional(),
      categoryId: z.string().uuid().optional(),
      price: z.number().positive(),
      costPrice: z.number().positive().optional(),
      minStock: z.number().int().min(0).optional(),
    }))
    .mutation(async ({ input }) => {
      // In production, this would insert into the database
      return {
        id: crypto.randomUUID(),
        ...input,
        createdAt: new Date().toISOString(),
      };
    }),

  /**
   * Update product
   */
  update: publicProcedure
    .input(z.object({
      id: z.string().uuid(),
      name: z.string().min(1).max(255).optional(),
      description: z.string().optional(),
      price: z.number().positive().optional(),
      costPrice: z.number().positive().optional(),
      isActive: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      return {
        ...input,
        updatedAt: new Date().toISOString(),
      };
    }),
});

import { router, publicProcedure } from '../../trpc';
import { z } from 'zod';

/**
 * Orders Router
 * Sales order management
 */
export const ordersRouter = router({
  /**
   * List orders
   */
  list: publicProcedure
    .input(z.object({
      page: z.number().min(1).optional().default(1),
      limit: z.number().min(1).max(100).optional().default(20),
      status: z.enum(['draft', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled']).optional(),
      customerId: z.string().uuid().optional(),
    }))
    .query(async ({ input }) => {
      const orders = [
        { id: '1', orderNumber: 'ORD-2024-001', customer: 'Acme Corporation', status: 'delivered', total: 5430.00, date: '2024-01-15' },
        { id: '2', orderNumber: 'ORD-2024-002', customer: 'Tech Solutions Inc', status: 'shipped', total: 2890.50, date: '2024-01-14' },
        { id: '3', orderNumber: 'ORD-2024-003', customer: 'Local Shop', status: 'processing', total: 450.00, date: '2024-01-13' },
        { id: '4', orderNumber: 'ORD-2024-004', customer: 'Global Traders', status: 'confirmed', total: 12500.00, date: '2024-01-12' },
        { id: '5', orderNumber: 'ORD-2024-005', customer: 'Startup Hub', status: 'draft', total: 890.00, date: '2024-01-11' },
      ];

      return {
        items: orders,
        total: orders.length,
        page: input.page,
        limit: input.limit,
      };
    }),

  /**
   * Get order by ID
   */
  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      return {
        id: input.id,
        orderNumber: 'ORD-2024-001',
        customer: {
          id: '1',
          name: 'Acme Corporation',
          email: 'contact@acme.com',
        },
        status: 'delivered',
        subtotal: 4900.00,
        tax: 490.00,
        shipping: 40.00,
        total: 5430.00,
        orderDate: '2024-01-15',
        items: [
          { productId: '1', name: 'Premium Widget', quantity: 25, unitPrice: 99.99, lineTotal: 2499.75 },
          { productId: '2', name: 'Standard Gadget', quantity: 48, unitPrice: 49.99, lineTotal: 2399.52 },
        ],
      };
    }),

  /**
   * Create order
   */
  create: publicProcedure
    .input(z.object({
      customerId: z.string().uuid(),
      items: z.array(z.object({
        productId: z.string().uuid(),
        quantity: z.number().int().positive(),
        unitPrice: z.number().positive(),
      })),
      shippingAddress: z.string().optional(),
      notes: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      const subtotal = input.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
      const tax = subtotal * 0.1;
      
      return {
        id: crypto.randomUUID(),
        orderNumber: `ORD-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`,
        customerId: input.customerId,
        status: 'draft',
        subtotal,
        tax,
        total: subtotal + tax,
        createdAt: new Date().toISOString(),
      };
    }),

  /**
   * Update order status
   */
  updateStatus: publicProcedure
    .input(z.object({
      id: z.string().uuid(),
      status: z.enum(['draft', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled']),
    }))
    .mutation(async ({ input }) => {
      return {
        id: input.id,
        status: input.status,
        updatedAt: new Date().toISOString(),
      };
    }),
});

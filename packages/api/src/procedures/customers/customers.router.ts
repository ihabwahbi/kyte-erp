import { router, publicProcedure } from '../../trpc';
import { z } from 'zod';

/**
 * Customers Router
 * CRM and customer management
 */
export const customersRouter = router({
  /**
   * List customers
   */
  list: publicProcedure
    .input(z.object({
      page: z.number().min(1).optional().default(1),
      limit: z.number().min(1).max(100).optional().default(20),
      search: z.string().optional(),
      type: z.enum(['retail', 'wholesale', 'enterprise']).optional(),
    }))
    .query(async ({ input }) => {
      const customers = [
        { id: '1', code: 'C-001', name: 'Acme Corporation', email: 'contact@acme.com', type: 'enterprise', orders: 45, revenue: 125000 },
        { id: '2', code: 'C-002', name: 'Tech Solutions Inc', email: 'sales@techsol.com', type: 'wholesale', orders: 32, revenue: 89000 },
        { id: '3', code: 'C-003', name: 'Local Shop', email: 'info@localshop.com', type: 'retail', orders: 12, revenue: 4500 },
        { id: '4', code: 'C-004', name: 'Global Traders', email: 'buy@globaltraders.com', type: 'enterprise', orders: 78, revenue: 245000 },
        { id: '5', code: 'C-005', name: 'Startup Hub', email: 'hello@startuphub.io', type: 'retail', orders: 8, revenue: 2100 },
      ];

      return {
        items: customers,
        total: customers.length,
        page: input.page,
        limit: input.limit,
      };
    }),

  /**
   * Get customer by ID
   */
  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      return {
        id: input.id,
        code: 'C-001',
        name: 'Acme Corporation',
        email: 'contact@acme.com',
        phone: '+1 (555) 123-4567',
        type: 'enterprise',
        billingAddress: '123 Business Ave, Suite 100',
        billingCity: 'New York',
        billingCountry: 'USA',
        creditLimit: 50000,
        paymentTerms: 'Net 30',
        totalOrders: 45,
        totalRevenue: 125000,
        isActive: true,
      };
    }),

  /**
   * Create customer
   */
  create: publicProcedure
    .input(z.object({
      name: z.string().min(1).max(255),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      type: z.enum(['retail', 'wholesale', 'enterprise']).optional().default('retail'),
      billingAddress: z.string().optional(),
      billingCity: z.string().optional(),
      billingCountry: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      return {
        id: crypto.randomUUID(),
        code: `C-${Date.now().toString().slice(-6)}`,
        ...input,
        createdAt: new Date().toISOString(),
      };
    }),

  /**
   * Update customer
   */
  update: publicProcedure
    .input(z.object({
      id: z.string().uuid(),
      name: z.string().min(1).max(255).optional(),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      isActive: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      return {
        ...input,
        updatedAt: new Date().toISOString(),
      };
    }),
});

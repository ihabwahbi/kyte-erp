import { router, publicProcedure } from '../../trpc';
import { z } from 'zod';

/**
 * Dashboard Router
 * Provides overview metrics and KPIs for the ERP system
 */
export const dashboardRouter = router({
  /**
   * Get dashboard summary metrics
   */
  getSummary: publicProcedure.query(async ({ ctx }) => {
    // Demo data - in production, this would query the database
    return {
      revenue: {
        total: 125430.50,
        change: 12.5,
        period: 'month',
      },
      orders: {
        total: 342,
        pending: 28,
        change: 8.2,
      },
      customers: {
        total: 1250,
        new: 45,
        change: 5.1,
      },
      inventory: {
        totalProducts: 856,
        lowStock: 23,
        outOfStock: 5,
      },
    };
  }),

  /**
   * Get recent activity
   */
  getRecentActivity: publicProcedure.query(async ({ ctx }) => {
    return [
      { id: '1', type: 'order', message: 'New order #1234 received', time: '5 minutes ago' },
      { id: '2', type: 'inventory', message: 'Low stock alert: Product SKU-001', time: '15 minutes ago' },
      { id: '3', type: 'customer', message: 'New customer registered: Acme Corp', time: '1 hour ago' },
      { id: '4', type: 'order', message: 'Order #1230 shipped', time: '2 hours ago' },
      { id: '5', type: 'payment', message: 'Payment received for Invoice #890', time: '3 hours ago' },
    ];
  }),

  /**
   * Get sales chart data
   */
  getSalesChart: publicProcedure
    .input(z.object({
      period: z.enum(['week', 'month', 'year']).optional().default('month'),
    }))
    .query(async ({ input }) => {
      // Demo data for chart
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const data = [12400, 15600, 14200, 18900, 21000, 19500];
      
      return {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data,
          },
        ],
      };
    }),
});

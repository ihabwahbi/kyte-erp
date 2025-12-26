import { router, publicProcedure } from '../../trpc';
import { z } from 'zod';

/**
 * Employees Router
 * HR and employee management
 */
export const employeesRouter = router({
  /**
   * List employees
   */
  list: publicProcedure
    .input(z.object({
      page: z.number().min(1).optional().default(1),
      limit: z.number().min(1).max(100).optional().default(20),
      departmentId: z.string().uuid().optional(),
      search: z.string().optional(),
    }))
    .query(async ({ input }) => {
      const employees = [
        { id: '1', employeeNumber: 'EMP-001', name: 'John Smith', department: 'Sales', position: 'Sales Manager', email: 'john.smith@company.com', status: 'active' },
        { id: '2', employeeNumber: 'EMP-002', name: 'Sarah Johnson', department: 'Engineering', position: 'Software Engineer', email: 'sarah.j@company.com', status: 'active' },
        { id: '3', employeeNumber: 'EMP-003', name: 'Michael Brown', department: 'Operations', position: 'Warehouse Supervisor', email: 'm.brown@company.com', status: 'active' },
        { id: '4', employeeNumber: 'EMP-004', name: 'Emily Davis', department: 'HR', position: 'HR Specialist', email: 'emily.d@company.com', status: 'active' },
        { id: '5', employeeNumber: 'EMP-005', name: 'David Wilson', department: 'Finance', position: 'Accountant', email: 'd.wilson@company.com', status: 'active' },
      ];

      return {
        items: employees,
        total: employees.length,
        page: input.page,
        limit: input.limit,
      };
    }),

  /**
   * Get departments
   */
  getDepartments: publicProcedure.query(async () => {
    return [
      { id: '1', name: 'Sales', code: 'SALES', employeeCount: 12 },
      { id: '2', name: 'Engineering', code: 'ENG', employeeCount: 25 },
      { id: '3', name: 'Operations', code: 'OPS', employeeCount: 18 },
      { id: '4', name: 'Human Resources', code: 'HR', employeeCount: 5 },
      { id: '5', name: 'Finance', code: 'FIN', employeeCount: 8 },
    ];
  }),

  /**
   * Get employee by ID
   */
  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      return {
        id: input.id,
        employeeNumber: 'EMP-001',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@company.com',
        phone: '+1 (555) 234-5678',
        department: 'Sales',
        position: 'Sales Manager',
        employmentType: 'full-time',
        hireDate: '2022-03-15',
        salary: 85000,
        status: 'active',
      };
    }),

  /**
   * Create employee
   */
  create: publicProcedure
    .input(z.object({
      firstName: z.string().min(1).max(100),
      lastName: z.string().min(1).max(100),
      email: z.string().email(),
      phone: z.string().optional(),
      departmentId: z.string().uuid(),
      position: z.string(),
      employmentType: z.enum(['full-time', 'part-time', 'contract']).optional().default('full-time'),
      hireDate: z.string(),
      salary: z.number().positive().optional(),
    }))
    .mutation(async ({ input }) => {
      return {
        id: crypto.randomUUID(),
        employeeNumber: `EMP-${Date.now().toString().slice(-6)}`,
        ...input,
        createdAt: new Date().toISOString(),
      };
    }),
});

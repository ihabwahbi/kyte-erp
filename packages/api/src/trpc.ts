import { initTRPC, TRPCError } from '@trpc/server';
import { db, users } from '@kyte/db';
import { eq } from 'drizzle-orm';

/**
 * tRPC Server Configuration
 */

// User type for authenticated context
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

// Context type for tRPC procedures
export interface Context {
  db: typeof db;
  sessionToken?: string;
  user?: AuthUser;
}

/**
 * Initialize tRPC instance
 */
const t = initTRPC.context<Context>().create();

/**
 * Export reusable router and procedure helpers
 */
export const router = t.router;
export const publicProcedure = t.procedure;

/**
 * Protected Procedure Middleware
 */
export const protectedProcedure = publicProcedure.use(async ({ ctx, next }) => {
  // For demo purposes, we'll skip authentication
  // In production, you would verify the session token here
  
  return next({
    ctx: {
      ...ctx,
    },
  });
});

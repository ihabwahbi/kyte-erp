/**
 * tRPC React Query Client for Next.js App
 * 
 * Provides type-safe API client with React hooks support
 */

import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@kyte/api';

/**
 * tRPC React Query Client
 */
export const trpc = createTRPCReact<AppRouter>();

/**
 * @kyte/db - Database layer with Drizzle ORM
 * 
 * Provides type-safe database access to PostgreSQL
 */

export { db, schema } from './client';
export * from './schema';

// Re-export drizzle-orm utilities for consistent type resolution
export {
  // Query operators
  eq,
  ne,
  gt,
  gte,
  lt,
  lte,
  and,
  or,
  not,
  between,
  like,
  ilike,
  inArray,
  notInArray,
  isNull,
  isNotNull,
  // Aggregations
  count,
  sum,
  avg,
  min,
  max,
  // Ordering
  asc,
  desc,
  // SQL helpers
  sql,
  // Type helpers
  type SQL,
  type InferSelectModel,
  type InferInsertModel,
} from 'drizzle-orm';

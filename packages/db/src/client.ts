import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

/**
 * Database client for PostgreSQL
 * Uses connection pooling for optimal performance
 */
const connectionString = process.env.DATABASE_URL;

// Allow build to proceed without DATABASE_URL
const isBuildTime = process.env.NODE_ENV === 'production' && !connectionString;

if (!connectionString && !isBuildTime) {
  throw new Error(
    'DATABASE_URL environment variable is not set. Please add it to your .env file.'
  );
}

// Create PostgreSQL client
const client = postgres(connectionString || 'postgresql://build:build@localhost:5432/build', {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
});

// Create Drizzle ORM instance with schema
export const db = drizzle(client, { schema });

export { schema };

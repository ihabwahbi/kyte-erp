import { NextResponse } from 'next/server';

/**
 * Health check endpoint for container orchestration
 * Used by Azure Web App and Docker health checks
 */
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '0.1.0',
    environment: process.env.NODE_ENV || 'development',
  });
}

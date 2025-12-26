# Kyte ERP

A modern, AI-powered Enterprise Resource Planning system built for Australian businesses. Light, fast, and intelligent.

> *"Business that soars"*

## Features

- **Dashboard** - Overview of key business metrics and KPIs
- **Inventory Management** - Track stock levels, manage warehouses, automate reordering
- **Sales & CRM** - Manage customers, orders, and analyze sales performance  
- **Human Resources** - Employee management, departments, and HR operations
- **Financial Management** - Accounting, invoicing, budgeting, and reporting
- **AI Agentic Capabilities** - Intelligent automation and insights

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS v4, Radix UI components
- **API**: tRPC for type-safe APIs
- **Database**: Drizzle ORM with PostgreSQL
- **Build System**: Turborepo monorepo
- **Deployment**: Azure Web App with Docker

## Project Structure

```
kyte/
├── apps/
│   └── web/                    # Next.js web application
│       ├── app/                # App Router pages
│       │   ├── (dashboard)/    # Dashboard layout group
│       │   │   ├── dashboard/  # Main dashboard
│       │   │   ├── inventory/  # Inventory management
│       │   │   ├── sales/      # Sales & orders
│       │   │   ├── hr/         # Human resources
│       │   │   ├── finance/    # Financial management
│       │   │   └── settings/   # Settings
│       │   └── api/            # API routes
│       ├── components/         # React components
│       └── lib/                # Utilities
├── packages/
│   ├── api/                    # tRPC API package
│   │   └── src/
│   │       └── procedures/     # API procedures by module
│   └── db/                     # Database package
│       └── src/
│           └── schema/         # Drizzle schema definitions
├── turbo.json                  # Turborepo configuration
└── package.json                # Root workspace config
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ihabwahbi/kyte-erp.git
   cd kyte-erp
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   # apps/web/.env.local
   DATABASE_URL=postgresql://user:password@localhost:5432/kyte
   ```

4. Push database schema:
   ```bash
   pnpm --filter @kyte/db db:push
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `pnpm dev` - Start development servers
- `pnpm build` - Build all packages
- `pnpm lint` - Run linting
- `pnpm test` - Run tests
- `pnpm type-check` - TypeScript type checking

## Database Management

- `pnpm --filter @kyte/db db:generate` - Generate migrations
- `pnpm --filter @kyte/db db:push` - Push schema to database
- `pnpm --filter @kyte/db db:studio` - Open Drizzle Studio

## Deployment

The application is deployed to Azure Web App using Docker containers.

Production URL: https://kyte-erp.azurewebsites.net

## License

Proprietary - All rights reserved.

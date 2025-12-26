# Comprehensive Codebase Research

**RESEARCH TOPIC**: $ARGUMENTS

---

## Instructions

You are conducting comprehensive codebase research on the topic specified above. Execute a multi-agent parallel research operation to produce a detailed implementation report.

**IMPORTANT**: The research topic is provided in `$ARGUMENTS` above. If no topic was provided, ask the user to specify what they want researched before proceeding.

---

## Architecture Context

This is an **ERP (Enterprise Resource Planning)** application built with:

- **Next.js Pages** (`apps/web/app/(dashboard)/`) - Module pages for inventory, sales, HR, finance
- **tRPC Procedures** (`packages/api/src/procedures/`) - Type-safe API endpoints organized by domain
- **Drizzle Schema** (`packages/db/src/schema/`) - Database tables with TypeScript types
- **UI Components** (`apps/web/components/ui/`) - Reusable shadcn-style components

### ERP Modules

| Module | Page Location | API Router | Schema Files |
|--------|---------------|------------|--------------|
| Dashboard | `(dashboard)/dashboard/` | `dashboard.router.ts` | - |
| Inventory | `(dashboard)/inventory/` | `inventory.router.ts` | `products.ts`, `inventory.ts` |
| Sales | `(dashboard)/sales/` | `orders.router.ts`, `customers.router.ts` | `orders.ts`, `customers.ts` |
| HR | `(dashboard)/hr/` | `employees.router.ts` | `employees.ts` |
| Finance | `(dashboard)/finance/` | - | - |
| Settings | `(dashboard)/settings/` | - | - |

---

## Your Mission

Orchestrate your subagents to achieve **100% coverage** of all areas relevant to: **$ARGUMENTS**

Each subagent has a specific lens - spawn them in parallel, collect their findings, and synthesize into a comprehensive report.

---

## Phase 1: Parallel Exploration

Spawn ALL subagents simultaneously. You have freedom to decide:
- **How many agents** to spawn (spawn as many as needed for full coverage)
- **What lens** each agent should focus on
- **How to divide** the research territory

### Subagent Strategy

Use the `explore` subagent type with different prompts:

**Location-focused prompts** - Find WHERE things live:
```
Task(subagent_type="explore", prompt="Find all files related to [TOPIC]: Focus on pages in apps/web/app/(dashboard)/. List files with their purposes.")

Task(subagent_type="explore", prompt="Find all files related to [TOPIC]: Focus on tRPC procedures in packages/api/src/procedures/. List files with purposes.")

Task(subagent_type="explore", prompt="Find all files related to [TOPIC]: Focus on database schema in packages/db/src/schema/. List files with purposes.")
```

**Analysis-focused prompts** - Understand HOW things work:
```
Task(subagent_type="explore", prompt="Analyze [TOPIC]: Trace data flow from page component through tRPC procedure to database and back. Document with file:line references.")

Task(subagent_type="explore", prompt="Analyze [TOPIC]: Read the relevant router files. Document the input/output types and query patterns.")
```

**Pattern-focused prompts** - Find WHAT patterns exist:
```
Task(subagent_type="explore", prompt="Find patterns for [TOPIC]: Search for similar pages. Show component structure and data fetching patterns.")

Task(subagent_type="explore", prompt="Find patterns for [TOPIC]: Search for similar tRPC procedures. Show input schemas, query patterns, and error handling.")
```

### Suggested Research Lenses

**By architectural layer:**
- Pages and UI components
- tRPC procedures and routers
- Database schema and types
- Tests and utilities

**By concern:**
- Data flow (UI → API → DB → UI)
- Type system (interfaces, zod schemas, drizzle types)
- Error handling and validation
- State management (React Query, hooks)

**By artifact type:**
- Page structure patterns
- Procedure patterns (queries, mutations)
- Schema patterns (tables, relations)
- Similar features as templates

**You decide the exact prompts and how many agents to spawn based on the research topic.**

---

## Phase 2: Collect and Evaluate

Wait for ALL subagents to complete. Evaluate coverage:

- [ ] All relevant pages identified
- [ ] All relevant procedures identified
- [ ] All relevant schema tables identified
- [ ] Data flow fully traced with file:line references
- [ ] Pattern examples extracted with actual code

### Identify Gaps

If any area lacks coverage:
1. Note the specific gap
2. Spawn a targeted agent to fill it
3. Wait for completion before proceeding

---

## Phase 3: Deep Investigation (Optional)

Resume sessions for follow-up questions:

```
Task(session_id="[agent-session-id]", prompt="Follow up: [specific clarification needed]")
```

Or spawn additional targeted agents:

```
Task(subagent_type="explore", prompt="Deep dive: [specific area needing more detail]")
```

---

## Phase 4: Synthesize Report

Combine all findings into the Implementation Report format. Save to:

```
docs/implementation-reports/YYYY-MM-DD-[feature-name].md
```

### Report Structure

```markdown
# Implementation Report: [Feature/Task Name]

## 1. Executive Summary
- Task description
- Complexity: Low/Medium/High
- Estimated files to modify
- Key risk

## 2. Current State Analysis
### How It Works Today
[Data flow narrative with file:line references]

### Key Components
| Component | Location | Purpose | Modify? |
|-----------|----------|---------|---------|

### Existing Utilities (MUST Reuse)
[Utilities that already exist - DO NOT duplicate]

## 3. Implementation Approach
### Phase N: [Name]
- Files to modify with line ranges
- Pattern to follow (actual code)
- Steps with success criteria

## 4. Anti-Patterns to Avoid
| DO NOT | WHY | INSTEAD |

## 5. Do Not Touch
| File | Reason |

## 6. Test Strategy
- Existing tests to update
- New tests to write
- Test patterns to follow

## 7. Validation Checklist
- Commands to run
- Manual verification steps
```

---

## Orchestration Principles

### Maximize Parallelism
- Spawn all independent agents in a **single message**
- Don't wait for one agent before spawning others with independent scopes
- Batch tool calls: multiple `Task()` calls in one response

### Session Management
- Note the `session_id` from each Task for potential follow-up
- Resume sessions only when specific clarification is needed
- You can resume conversations with any agent using their session_id

### Quality Standards
Before finalizing:
- [ ] Every file reference includes line numbers
- [ ] Every pattern includes actual code, not descriptions
- [ ] Anti-patterns section identifies potential mistakes
- [ ] Test strategy references existing test patterns

---

## Remember

- **Your research topic is**: $ARGUMENTS
- **You have freedom** to decide agent count, division of labor, and research depth
- **Check existing patterns** in similar modules before recommending new approaches
- **The implementer reads your report, then implements** - make exploration unnecessary

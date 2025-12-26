# Reliable Implementation Execution

**IMPLEMENTATION TASK**: $ARGUMENTS

---

## Philosophy

You execute implementations with world-class reliability. This means:

- **Verify before trusting** - Reports, file references, patterns may be stale
- **Understand before changing** - Trace the full picture first
- **Fix root causes** - Never patch symptoms
- **Leave it better** - Every touch improves the codebase

You have freedom to explore, investigate, and verify. Use your judgment. The guardrails below ensure quality, not restrict intelligence.

---

## The Contract

### If You Received a Research Report

The report is a guide, not gospel. Before trusting any claim:

1. **Verify file references exist** - Read each file mentioned, confirm line numbers are accurate
2. **Verify patterns are current** - Code evolves; the pattern may have changed
3. **Verify utilities exist** - Don't assume; check before using
4. **Note discrepancies** - Document what doesn't match, investigate why

If reality differs from the report, trust reality. Update your mental model before proceeding.

### If Working Without a Report

Explore to understand:
- How similar features are implemented
- What patterns exist in the target area
- What utilities are available to reuse
- What the data flow looks like

Use the explore subagent for broader searches:
```
Task(subagent_type="explore", prompt="Find all files related to [feature]. Include pages, procedures, schema, and tests.")
```

---

## Execution Approach

### Phase 1: Understand the Landscape

Before writing code:

**Map the territory** - Identify all files that will be touched and files that are related but shouldn't change.

**Trace the data flow** - Follow requests from UI through API to database and back. Document with file:line references you've personally verified.

**Identify all touch points** - What else calls this code? What else does this code call?

**Find your template** - What existing implementation is most similar? Read it completely.

### Phase 2: Build Incrementally

**One change, one verification.** After each significant change:
```bash
pnpm type-check
```
If it fails, stop. Understand why. Fix the root cause. Only proceed when clean.

**Follow existing patterns exactly.** Don't invent new approaches when proven patterns exist. Document which pattern you're following.

**Validate continuously.** Run targeted checks between phases:
```bash
pnpm type-check && pnpm lint

# Run tests for affected areas
pnpm test apps/web/app/(dashboard)/{module}  # Page changes
pnpm test --filter @erp/api                   # API changes
pnpm test path/to/specific.test.ts            # Specific test file
```

### Phase 3: Handle Issues Properly

When you encounter any issue:

**Stop and analyze.** What's the symptom? What's the complete error message? What were you doing?

**Investigate the root cause.** Trace back to the origin. Don't guess - understand WHY it's failing.

**Fix properly.** The fix must:
- Address the root cause, not the symptom
- Follow existing patterns
- Pass all validation
- Not introduce new issues

**Deep dive when needed.** For complex issues:
1. Isolate - Create minimal reproduction
2. Trace - Follow the code execution path
3. Compare - How does working code differ?
4. Understand - What's the underlying mechanism?
5. Fix - Apply the proper solution
6. Verify - Confirm the fix is complete

---

## Architecture Guardrails

These are non-negotiable constraints:

| Constraint | Limit | Why |
|------------|-------|-----|
| Page components | ≤ 400 lines | Maintainability |
| tRPC procedures | ≤ 300 lines, one per file | Granularity and discoverability |
| Domain routers | ≤ 100 lines | Composition only, minimal logic |
| Implementations | Single source of truth | No parallel versions |

### Common Technical Pitfalls

**Infinite render loops** - Always memoize objects/arrays passed to React hooks:
```typescript
const filters = useMemo(() => ({
  category: selectedCategory,
  status: selectedStatus
}), [selectedCategory, selectedStatus])
```

**Date serialization** - In tRPC schemas, use `z.string()` for dates, transform on server:
```typescript
from: z.string().transform(val => new Date(val))
```

**HTTP methods** - Query procedures use GET, mutations use POST. Test via curl before writing client code.

**SQL syntax** - Use Drizzle helpers (`eq`, `inArray`, `and`) not raw SQL strings.

---

## Debugging Workflow

When something isn't working:

### 1. Check Network Tab First
- Are requests being sent?
- What status codes? (200 = client issue, 4xx = validation, 5xx = server)
- What's in the request/response payload?

### 2. Check Console
- What's the React Query status?
- Any error messages?
- Are inputs changing every render? (indicates missing memoization)

### 3. Isolate the Layer
- Network 200 but UI stuck → Client-side issue (memoization, state)
- Network 4xx → Input validation issue
- Network 5xx → Server-side issue (procedure, database)

### 4. Test Procedures Independently
```bash
# Query procedure (GET)
curl -G http://localhost:3000/api/trpc/domain.procedure \
  --data-urlencode 'batch=1' \
  --data-urlencode 'input={"0":{"id":"uuid"}}'

# Mutation procedure (POST)  
curl -X POST http://localhost:3000/api/trpc/domain.procedure \
  -H "Content-Type: application/json" \
  -d '{"id":"uuid"}'
```

---

## Scope Expansion

When you discover issues outside your immediate task:

| Severity | Action |
|----------|--------|
| Critical/High | Fix it now, properly |
| Medium | Fix it, document as bonus |
| Low | Document for future if non-blocking |

**Key principle**: We never leave the codebase worse than we found it. If we touched it, we fix it properly.

---

## Quality Gates

These must pass. No exceptions. No skipping.

```bash
pnpm type-check    # Zero type errors (no 'any' escapes)
pnpm lint          # Zero lint errors
pnpm build         # Build succeeds

# TARGETED tests - only test what you changed:
pnpm test apps/web/app/(dashboard)/{module}   # Module page changes
pnpm test --filter @erp/api                   # API package
pnpm test --filter @erp/db                    # DB package
pnpm test path/to/file.test.ts                # Specific file

# Full suite is OPTIONAL - use when:
# - Changes are cross-cutting (shared utils, types)
# - Pre-commit validation requires it
# - You want extra confidence
pnpm test
```

If any fail:
1. Read the complete error
2. Understand the root cause
3. Fix it properly
4. Re-run the affected checks

---

## Completion

Before declaring done:

### Verify Everything Works
- All quality gates pass
- UI renders correctly (if applicable)
- Loading, error, and empty states work
- No console errors

### Verify Architecture Compliance
- All files within size limits
- Patterns followed correctly
- No parallel implementations created
- No duplicate utilities introduced

### Clean Up
- No debug console.logs
- No commented-out code
- No temporary workarounds
- Imports organized

### Document What You Did

```markdown
## Implementation Complete

### Status: [SUCCESS / PARTIAL / BLOCKED]

### Changes Made
| File | Action | Description |
|------|--------|-------------|
| `path/file.ts` | Modified | [What and why] |

### Issues Resolved
| Issue | Root Cause | Resolution |
|-------|------------|------------|

### Validation Results
- [x] type-check passed
- [x] lint passed
- [x] build passed
- [x] targeted tests passed ({scope}: N tests)

### Patterns Followed
[Which existing implementations you used as templates]
```

---

## Remember

You are maintaining a codebase for an ERP system that will be sold to businesses.

**Every shortcut creates future confusion.** Code that's unclear to you will be unclear to the next developer.

**Every proper fix strengthens the foundation.** Well-structured code enables confident future changes.

**Every verified assumption prevents cascading errors.** What you confirm today saves hours tomorrow.

Take the time to do it right. Quality is the standard.

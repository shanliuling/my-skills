# PR Templates

## Bug Fix Template

```markdown
## What is the problem?

When {condition}, the application {unexpected behavior}. This is caused by {root cause}.

## How did I fix it?

- {change 1}
- {change 2}

## How was this tested?

- Added unit test: `{test_file}`
- All existing tests pass
- Manual verification: {steps}

Fixes #{issue_number}
```

## Feature Template

```markdown
## What is this PR about?

This PR adds {feature description}.

## Implementation details

- {detail 1}
- {detail 2}

## How to use

```typescript
// Example usage
import { something } from 'package';

const result = something(options);
```

## How was this tested?

- Unit tests: {test_coverage}
- Integration tests: {description}

Closes #{issue_number}
```

## Documentation Template

```markdown
## What documentation does this update?

This PR updates {documentation type} for {feature/section}.

## Changes made

- {change 1}
- {change 2}

## Why is this change needed?

{reason}

Closes #{issue_number}
```

## MCP/Integration Template

```markdown
## What is the problem?

{Tool name} uses `{config_file}` for configuration, which has a different schema compared to {other_tool}'s `{other_config}`:

| Aspect | {Tool A} | {Tool B} |
|--------|----------|----------|
| File path | `{path_a}` | `{path_b}` |
| Key | `{key_a}` | `{key_b}` |
| Format | `{format_a}` | `{format_b}` |

## How did I fix it?

Added support for `{tool}` by:

1. Created `{class_name}` class (`{file_path}`)
   - Reads/writes `{config_file}`
   - Converts between formats
   - Supports {modes}

2. Registered in:
   - `{file_1}` - Added to registry
   - `{file_2}` - Added configuration

## How was this tested?

- Added unit tests (`{test_file}`)
- All {count} tests pass
- Type checking passes

## Usage

```bash
# {description}
{command}
```

Closes #{issue_number}
```

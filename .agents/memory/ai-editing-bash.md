---
name: AI editing via bash
description: How to use Anthropic API from bash when code_execution sandbox lacks env vars
---

## The problem
`process.env` is undefined in the code_execution sandbox. `viewEnvVars()` only returns explicitly surfaced vars. The Anthropic integration key is only available in the shell environment.

## The solution
Use `python3 -` heredoc in bash to call the Anthropic API via `urllib.request`:

```python
import os, urllib.request, json
BASE = os.environ["AI_INTEGRATIONS_ANTHROPIC_BASE_URL"]
KEY  = os.environ["AI_INTEGRATIONS_ANTHROPIC_API_KEY"]
# ...build request and POST to BASE/v1/messages
```

**Why:** The bash environment inherits the Replit integration env vars; the code_execution JS notebook does not.

**How to apply:** For any batch AI editing task, write a Python heredoc script called via bash.

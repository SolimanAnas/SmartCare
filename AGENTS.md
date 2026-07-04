## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## Emil Kowalski — Design Engineering Skills (emilkowalski/skills)

This repo has 3 skills installed from [emilkowalski/skills](https://github.com/emilkowalski/skills) at `~/.agents/skills/`.

When working on UI, animations, motion, or visual polish in any frontend code:

1. **`emil-design-eng`** — Load this when building or modifying UI components, adding animations, or making design decisions. Covers animation decision framework, easing/duration tables, gesture interactions, performance rules, and component building principles.
2. **`animation-vocabulary`** — Load this when you need to name a motion effect ("the bouncy thing when a popover opens" → Pop in).
3. **`review-animations`** — Load this after writing animation/motion code for a review pass. It flags violations of 10 non-negotiable standards.

**How to load (OpenCode):**
```typescript
task(category="visual-engineering", load_skills=["emil-design-eng"], prompt="...")
task(category="visual-engineering", load_skills=["review-animations"], prompt="Review these animations...")
```

**How to load (Claude Code):** Reference the skill by name — it was symlinked during install.
```
Load the emil-design-eng skill.
```

**How to load (any AI):** Copy the relevant rules from `~/.agents/skills/<skill-name>/SKILL.md` into your prompt, or reference the skill file path.

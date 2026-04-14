# EXERCEO — Project Instructions for Claude Code

## Scope

- Work only inside this repository.
- Do not create, modify, move, or reference files from sibling projects such as `spiro`.
- Treat this repository as the single source of truth for the Exerceo application.
- Before creating a new file, check whether an equivalent file already exists.
- Prefer editing existing files over creating duplicates.
- Never create files with names like `final`, `new`, `copy`, `temp`, `v2`, or similar variants unless explicitly requested.

## Project Overview

- Exerceo is an educational web application for elementary school support.
- The product covers school levels from CP to CM2.
- The app includes structured educational content, especially in French and Mathematics.
- The codebase has already evolved significantly; prioritize safe, targeted changes over broad rewrites.
- The default mindset for this project is maintenance, improvement, consistency, and careful extension.

## Working Philosophy

- Preserve what already works.
- Avoid unnecessary rewrites.
- Prefer small, verifiable changes.
- Follow the existing architecture and coding style unless there is a clear reason to improve it.
- When changing an established pattern, explain why.
- Do not introduce new architectural frameworks just because they are fashionable.

## Repository Safety Rules

- Do not restructure the repository unless explicitly asked.
- Do not rename files or folders unless necessary and approved.
- Do not delete files unless you are certain they are obsolete and the user requested cleanup.
- Do not create parallel implementations of the same feature.
- If a feature already exists, improve it in place whenever possible.

## Product Priorities

When trade-offs are needed, prioritize in this order:

1. Stability
2. Clarity for students and teachers
3. Pedagogical usefulness
4. Simplicity of maintenance
5. Consistency with the existing product
6. Visual polish

## Expected Change Style

For most tasks in this repository:

- inspect the current implementation first
- identify where the logic already lives
- make the smallest coherent change
- verify you did not break surrounding behavior
- summarize what changed and why

For non-trivial changes:

1. Read the relevant files first.
2. Explain the current structure briefly.
3. Propose a plan.
4. List files to modify.
5. Wait for confirmation if the task is broad or ambiguous.

## Architecture Rules

- Respect the existing project structure.
- Keep business or content logic out of presentation code when possible.
- Keep UI components focused on rendering and interaction.
- Keep data/content definitions organized and predictable.
- Reuse existing utilities, types, and patterns before introducing new ones.
- Prefer explicit code over abstract generic layers.

## Content and Pedagogy Rules

- Exerceo is not a generic content app; educational structure matters.
- Respect school-level distinctions such as CP, CE1, CE2, CM1, and CM2.
- Preserve subject and curriculum logic already present in the app.
- Do not merge pedagogically distinct concepts just to simplify code.
- Be careful when editing educational labels, wording, progression, or exercise classification.
- If a pedagogical choice is unclear, flag it instead of inventing one.

## TypeScript and Code Standards

- Use TypeScript cleanly and consistently.
- Avoid `any`.
- Prefer explicit types when they improve safety and readability.
- Reuse existing domain types before inventing new ones.
- Prefer small, readable functions.
- Prefer narrow changes over large refactors.
- Keep naming consistent with the existing codebase.
- Avoid introducing a different style in only one area of the project.

## UI Rules

- Keep the UI clear and age-appropriate.
- Avoid overly clever interactions.
- Prefer predictable layouts and readable hierarchy.
- Preserve consistency across grades, subjects, and exercise flows.
- Do not introduce visual complexity without a clear product reason.
- Favor usability over decorative effects.

## UX Rules

- The app should feel understandable and stable.
- Students must not be overloaded by unnecessary steps.
- Teachers and parents should be able to understand the structure quickly.
- Prefer straightforward interactions.
- Avoid hidden logic in the UI.
- If a task affects exercise flows, verify the user journey end-to-end.

## File and Folder Discipline

- Keep related code close to existing related code.
- Do not scatter logic across many new folders without reason.
- Do not create isolated utilities for one-time use unless clearly justified.
- If adding a new file, place it in the layer or folder that matches existing conventions.
- If unsure where something belongs, inspect nearby code first.

## Duplication Rules

- Avoid duplicate components, duplicate helpers, duplicate content definitions, and duplicate type declarations.
- If you find duplication, prefer consolidation only when safe and scoped.
- Do not refactor duplication as part of an unrelated task unless it clearly blocks the requested change.
- When duplication cannot be resolved safely, note it rather than improvising a risky cleanup.

## Git and Change Control

- Do not run destructive git commands.
- Do not commit, rebase, reset, force-push, or delete branches unless explicitly asked.
- Do not assume uncommitted changes are safe to overwrite.
- If the working tree contains unexpected modifications, stop and report them.
- Only the human user decides when to commit and push unless explicitly delegated.

## Build, Run, and Validation

- Before claiming a task is complete, run the most relevant available checks.
- Prefer the project’s existing commands and workflows.
- If commands are missing or unclear, inspect `package.json` and existing scripts before guessing.
- If you change TypeScript, ensure type-checking remains clean.
- If you change UI behavior, verify the affected screen or flow.
- If you change exercise/content structure, verify the rendering path that consumes it.

## Testing Expectations

- For bug fixes, verify the bug path directly.
- For non-trivial logic, add or update tests if the project already has a test pattern for that area.
- Follow the style of existing tests rather than inventing a new testing style.
- Do not mark work complete if critical behavior was changed but never validated.

## Educational Content Safety

- Content integrity matters as much as code correctness.
- Be cautious with:
  - grade-level labels
  - subject names
  - exercise bank structures
  - progression logic
  - wording shown to children
- If a change might affect many exercises or levels, call it out clearly before proceeding.

## Performance and Stability

- Prefer lightweight solutions.
- Do not add heavy dependencies without a clear need.
- Do not introduce runtime complexity for a simple problem.
- Keep loading, rendering, and content access predictable.
- Preserve stability over cleverness.

## Communication Rules

- Be concise and structured.
- Explain what files you inspected before major changes.
- State assumptions clearly.
- When recommending a refactor, explain the trade-off.
- If the request is ambiguous, ask the smallest useful clarifying question instead of guessing.
- If something looks risky, say so before editing.

## Completion Rules

Before saying a task is done:

- confirm the requested change is actually implemented
- check for obvious regressions in nearby code
- run relevant validation steps when available
- summarize:
  - what changed
  - which files changed
  - any follow-up risk or open point

## Avoid Rules

- Do not invent features not requested.
- Do not perform broad rewrites when a focused fix is enough.
- Do not mix Exerceo logic with Spiro logic.
- Do not add duplicate data models.
- Do not replace existing patterns casually.
- Do not hardcode values that should remain configurable or content-driven.
- Do not over-engineer.
- Do not create documentation noise unless requested.

## Preferred Working Mode

When starting work on an existing feature or bug:

1. inspect the current implementation
2. locate the relevant types, components, and data flow
3. understand the current behavior
4. propose the smallest safe change
5. implement
6. verify

## Source of Truth

If multiple approaches are possible, choose the option that best preserves:

1. project stability
2. educational coherence
3. existing architecture
4. maintainability
5. clarity of user experience
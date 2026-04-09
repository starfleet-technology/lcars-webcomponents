# How to develop, version, and release LCARS packages

**Problem**: Contributing changes to this monorepo requires specific steps to ensure CI passes,
packages are correctly versioned, and publishing to npm works reliably.

**Assumptions**:
- `pnpm` and Node.js ≥ 20 are installed
- You have write access to the repository
- For publishing: you have access to the `NPM_TOKEN` secret in GitHub Actions

---

## Overview

```
feature branch → develop → main → (automated versioning) → (manual publish)
```

All code changes flow through `develop` before landing on `main`. A push to `main` can only
happen via a merged PR, and every merge triggers the release pipeline automatically.

---

## Step 1 — Make your changes on a branch

Branch from `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feat/your-feature
```

Work normally. Build locally at any time:

```bash
pnpm build          # build everything
pnpm test           # run all tests
pnpm lint           # lint all packages
```

---

## Step 2 — Write a changeset for every user-facing change

A changeset is a small Markdown file that records what changed and how it affects the
package version. It is consumed automatically by the release pipeline on merge to `main`.

**When you need a changeset:**

| Change | Needs changeset? |
|---|---|
| Bug fix, new component, API change, config that affects published output | ✅ Yes |
| CI workflow, GitHub Actions, repo tooling, documentation | ❌ No — conventional commit only |
| Demo app changes | ❌ No — demos are ignored in changeset config |

**Create a changeset:**

```bash
pnpm changeset
```

The CLI will ask:
1. Which packages are affected (`lcars`, `lcars-react`, `lcars-vue` — select all that apply)
2. Bump type: `patch` (bug fix), `minor` (new feature, backwards compatible), `major` (breaking change)
3. A short summary of what changed

> **Linked versioning:** all three packages (`lcars`, `lcars-react`, `lcars-vue`) are linked —
> the highest bump type among all changesets in a release sets the version for all three.
> If you add a `patch` for `lcars-react` only, all three will still receive a patch bump.

Commit the generated `.changeset/*.md` file alongside your code changes.

**Example changeset for a bug fix:**

```bash
pnpm changeset
# → select: lcars-react
# → bump type: patch
# → summary: Fix button click handler not firing when component is inside a shadow root
```

---

## Step 3 — Open a PR: your branch → `develop`

Normal code review process. CI runs automatically on the PR:

- Lint → Test → Build → Validate package exports → Bundle size report

The PR must be green before merging.

---

## Step 4 — Open a PR: `develop` → `main`

Before opening:

```bash
git checkout develop
git merge origin/main     # sync any commits that landed on main since you branched
git push origin develop
```

This keeps the PR diff clean. The PR body should summarise the changesets included
(see the PR template or previous PRs for the format).

---

## Step 5 — Merge to `main`

After review approval and green CI on the PR, merge to `main`.

---

## Step 6 — Automatic versioning (no action required)

After the merge, GitHub Actions runs in this order:

1. **CI workflow** runs on `main` (post-merge validation)
2. **Release workflow** triggers only after CI completes successfully
   - If CI failed → Release job is **skipped**, nothing is published or committed
   - If CI passed → Release job runs and detects your changesets

The release job:
- Runs `pnpm changeset version` — bumps `package.json` versions, writes `CHANGELOG.md`
  entries, and deletes the consumed `.changeset/*.md` files
- Commits `"chore: version packages [skip ci]"` and pushes to `main`
- Intentionally exits with a failure to pause before publishing

> The `[skip ci]` tag on the version commit prevents CI from running again on the
> automated bump commit.

At this point packages are versioned and ready. Nothing has been published yet.

---

## Step 7 — Publish to npm (manual approval)

Publishing is always a deliberate manual action.

```bash
gh workflow run version.yml --field force_publish=true
```

Or via the GitHub Actions UI: **Actions → Release → Run workflow → check "Force publish"**.

This workflow dispatch run:
1. Builds all packages fresh from source (`pnpm build:packages`)
2. Runs `pnpm changeset publish` — publishes to npm and creates GitHub release tags

> `dist/` is gitignored. The build step is critical — without it the publish would
> ship empty packages.

---

## Changeset rules quick reference

```bash
pnpm changeset          # interactive — preferred
pnpm changeset status   # preview what versions will be bumped
pnpm changeset version  # apply bumps locally (for testing only — CI does this)
```

**Bump type guide:**

| Bump | When |
|---|---|
| `patch` | Bug fix, internal refactor, dependency update, build config fix |
| `minor` | New component, new prop/event, new export — backwards compatible |
| `major` | Removed export, renamed prop, changed default behaviour, breaking API change |

---

## Keeping `develop` in sync with `main`

The release pipeline automatically merges the version bump commit from `main` back into
`develop` after every release. No manual action is required.

If for any reason the sync step fails (e.g. an unexpected merge conflict), you will see
the error in the Release workflow run. Resolve it manually:

```bash
git checkout develop
git merge origin/main
git push origin develop
```

---

## Troubleshooting

**`pnpm install --frozen-lockfile` fails in CI**

Your local `pnpm-lock.yaml` is out of sync with `package.json`. Run `pnpm install`
locally, commit the updated lockfile, and push.

**CI passes but Release workflow is skipped**

Check the Release workflow run in GitHub Actions. If the job shows as "skipped" rather
than failed, the `if` condition was not met — most likely no changesets were found
(`.changeset/` had no `.md` files other than `README.md`). Verify with `pnpm changeset status`.

**Release workflow shows as failed after a push with changesets**

This is intentional. The `exit 1` at the "Manual Publishing Gate" step is the deliberate
pause before publishing. The version bump commit has already been pushed to `main`. The
run is marked failed only to prevent accidental auto-publish. Proceed with Step 7.

**`pnpm changeset publish` fails with 403 / auth error**

The `NPM_TOKEN` secret is missing or expired in GitHub repository settings. Contact the
repository owner to rotate it. The publish env var is `NODE_AUTH_TOKEN` (set automatically
by `actions/setup-node`) — do not change it to `NPM_TOKEN` in the workflow.

**`dist/` is missing after checkout in CI**

Expected — `dist/` is gitignored. The Release workflow runs `pnpm build:packages` before
publishing for exactly this reason. If you are debugging locally after a fresh clone,
run `pnpm build` first.

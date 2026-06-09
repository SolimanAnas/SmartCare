# Smart CPG – Post-Merge Validation & Agentic Operations Plan

## Mission

Act as an autonomous engineering assistant for the Smart CPG repository.

The recently merged Secure SDLC PR has been accepted into `main`.

Your objective is to validate, review, document, and propose remediation actions while keeping all changes review-first and human-approved.

---

# Operating Principles

1. Never push directly to main.
2. Create feature branches for all changes.
3. Create Pull Requests for every modification.
4. Explain findings before implementing fixes.
5. Prefer reversible changes.
6. Document every significant action.
7. Human approval required before:

   * force push
   * history rewrite
   * secret rotation
   * production database migration

---

# Phase 1 – Repository Health Check

## Objectives

Validate that the merged SDLC changes did not break the project.

## Tasks

* Pull latest main branch.
* Install dependencies.
* Run linting.
* Run test suite.
* Run build process.
* Launch application locally.
* Record all failures.

## Deliverables

Create:

```text
reports/repository-health.md
```

Include:

* Build status
* Test status
* Dependency status
* Runtime issues
* Recommendations

---

# Phase 2 – Security Review Validation

## Objectives

Verify that all merged security controls function correctly.

## Tasks

Review:

* CSP configuration
* Login flow
* Registration restrictions
* Password policy
* Rate limiting
* CSRF protection
* XSS mitigations
* Security headers

## Deliverables

Create:

```text
reports/security-validation.md
```

Risk ratings:

* Critical
* High
* Medium
* Low

---

# Phase 3 – F-05 Investigation

## Objectives

Investigate the historical database exposure finding.

Finding:

```text
instance/users.db
```

## Tasks

Determine:

* Is file still present?
* Was it committed historically?
* Does it contain secrets?
* Does it contain credentials?
* Does it contain production data?

## Deliverables

Create:

```text
reports/f05-investigation.md
```

Decision Matrix:

### Option A

No sensitive data.

Recommendation:
No history purge required.

### Option B

Sensitive data present.

Recommendation:

* git filter-repo
* force push
* secret rotation

Human approval required.

---

# Phase 4 – Architecture Review

## Objectives

Evaluate future database strategy.

Current:

* SQLite

Candidates:

* PostgreSQL
* Supabase
* Managed database

## Deliverables

Create:

```text
reports/database-roadmap.md
```

Include:

* Cost comparison
* Migration complexity
* Security implications
* Operational overhead

---

# Phase 5 – Documentation Quality Review

## Tasks

Review:

* upgrades.md
* requirements.md
* README.md
* deployment documentation

Identify:

* missing sections
* outdated content
* inconsistent terminology

## Deliverables

Create:

```text
reports/documentation-review.md
```

---

# Phase 6 – Technical Debt Register

## Objectives

Build a backlog of future improvements.

## Categories

* Security
* Performance
* UI/UX
* Reliability
* Maintainability
* Documentation

## Deliverables

Create:

```text
reports/technical-debt.md
```

Each item must contain:

* Description
* Risk
* Priority
* Estimated effort

---

# Phase 7 – Pull Request Governance

For every future PR:

## Automated Review

Check:

* Security impact
* Build impact
* Dependency changes
* Documentation impact
* Database impact

## Generate

```text
reports/pr-review.md
```

Template:

* Summary
* Risks
* Benefits
* Testing required
* Merge recommendation

---

# Success Criteria

Repository can:

* Build successfully
* Pass tests
* Launch locally
* Meet SDLC controls
* Produce documented findings
* Generate actionable remediation plans

No direct production modifications without human approval.

Owner: Soliman Anas
Project: Smart CPG
Mode: Agentic Review + Human Approval

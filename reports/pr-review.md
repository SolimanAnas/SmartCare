# Pull Request Review Template

**Date:** June 9, 2026  
**Project:** Smart CPG (DCAS CPG 2025)  
**Purpose:** Standardized PR review process

---

## PR Review Checklist

### Pre-Review Requirements

- [ ] PR has clear title and description
- [ ] PR is linked to issue/ticket
- [ ] Changes are scoped appropriately
- [ ] No unrelated changes included
- [ ] Branch is up to date with main

---

## Automated Checks

### Build Status

| Check | Status | Notes |
|-------|--------|-------|
| CI Pipeline | [ ] Pass / [ ] Fail | |
| Tests | [ ] Pass / [ ] Fail | |
| Linting | [ ] Pass / [ ] Fail | |
| Type Check | [ ] Pass / [ ] Fail | |

### Dependency Analysis

| Check | Status | Notes |
|-------|--------|-------|
| New Dependencies | [ ] Yes / [ ] No | |
| Updated Dependencies | [ ] Yes / [ ] No | |
| Removed Dependencies | [ ] Yes / [ ] No | |
| Security Scan | [ ] Pass / [ ] Fail | |

---

## Security Impact Review

### Authentication & Authorization

| Check | Status | Risk |
|-------|--------|------|
| Auth changes | [ ] Yes / [ ] No | |
| Permission changes | [ ] Yes / [ ] No | |
| Session handling | [ ] Yes / [ ] No | |
| OAuth changes | [ ] Yes / [ ] No | |

**Findings:**
```
[Document any security findings here]
```

### Input Validation

| Check | Status | Risk |
|-------|--------|------|
| New inputs | [ ] Yes / [ ] No | |
| Validation changes | [ ] Yes / [ ] No | |
| Sanitization | [ ] Yes / [ ] No | |

**Findings:**
```
[Document any input validation findings here]
```

### Data Exposure

| Check | Status | Risk |
|-------|--------|------|
| New data exposure | [ ] Yes / [ ] No | |
| Logging changes | [ ] Yes / [ ] No | |
| Error messages | [ ] Yes / [ ] No | |

**Findings:**
```
[Document any data exposure findings here]
```

---

## Build Impact Review

### Configuration Changes

| Check | Status | Impact |
|-------|--------|--------|
| Environment variables | [ ] Yes / [ ] No | |
| Database config | [ ] Yes / [ ] No | |
| Server config | [ ] Yes / [ ] No | |
| Build config | [ ] Yes / [ ] No | |

**Findings:**
```
[Document any configuration findings here]
```

### Database Impact

| Check | Status | Impact |
|-------|--------|--------|
| Schema changes | [ ] Yes / [ ] No | |
| Migration required | [ ] Yes / [ ] No | |
| Data migration | [ ] Yes / [ ] No | |
| Rollback plan | [ ] Yes / [ ] No | |

**Findings:**
```
[Document any database findings here]
```

---

## Code Quality Review

### Python Code

| Check | Status | Notes |
|-------|--------|-------|
| Code style | [ ] Pass / [ ] Fail | |
| Type hints | [ ] Pass / [ ] Fail | |
| Error handling | [ ] Pass / [ ] Fail | |
| Logging | [ ] Pass / [ ] Fail | |
| Tests | [ ] Pass / [ ] Fail | |

### JavaScript Code

| Check | Status | Notes |
|-------|--------|-------|
| Code style | [ ] Pass / [ ] Fail | |
| ESLint | [ ] Pass / [ ] Fail | |
| Prettier | [ ] Pass / [ ] Fail | |
| Security | [ ] Pass / [ ] Fail | |
| Tests | [ ] Pass / [ ] Fail | |

### HTML/CSS

| Check | Status | Notes |
|-------|--------|-------|
| Semantic HTML | [ ] Pass / [ ] Fail | |
| Accessibility | [ ] Pass / [ ] Fail | |
| Responsive | [ ] Pass / [ ] Fail | |
| Performance | [ ] Pass / [ ] Fail | |

---

## Documentation Impact

| Check | Status | Required |
|-------|--------|----------|
| README updated | [ ] Yes / [ ] No | If user-facing |
| API docs updated | [ ] Yes / [ ] No | If API changes |
| CHANGELOG updated | [ ] Yes / [ ] No | If release-worthy |
| Inline comments | [ ] Yes / [ ] No | If complex logic |

---

## Testing Impact

| Check | Status | Notes |
|-------|--------|-------|
| Unit tests | [ ] Pass / [ ] Fail | |
| Integration tests | [ ] Pass / [ ] Fail | |
| E2E tests | [ ] Pass / [ ] Fail | |
| Manual testing | [ ] Pass / [ ] Fail | |

### Test Coverage

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Line coverage | % | % | |
| Branch coverage | % | % | |
| Function coverage | % | % | |

---

## Risk Assessment

### Risk Matrix

| Risk Type | Level | Justification |
|-----------|-------|---------------|
| Security | [ ] Low / [ ] Medium / [ ] High / [ ] Critical | |
| Performance | [ ] Low / [ ] Medium / [ ] High | |
| Reliability | [ ] Low / [ ] Medium / [ ] High | |
| Maintainability | [ ] Low / [ ] Medium / [ ] High | |

### Risk Summary

```
[Summarize overall risk level and justification]
```

---

## Benefits Assessment

### Benefits

| Benefit | Impact | Justification |
|---------|--------|---------------|
| Feature addition | [ ] Low / [ ] Medium / [ ] High | |
| Bug fix | [ ] Low / [ ] Medium / [ ] High | |
| Performance | [ ] Low / [ ] Medium / [ ] High | |
| Security | [ ] Low / [ ] Medium / [ ] High | |
| Developer experience | [ ] Low / [ ] Medium / [ ] High | |

### Benefit Summary

```
[Summarize overall benefits and justification]
```

---

## Testing Requirements

### Required Testing

- [ ] Unit tests for new code
- [ ] Integration tests for API changes
- [ ] Manual testing for UI changes
- [ ] Security testing for auth changes
- [ ] Performance testing for critical paths

### Test Scenarios

```
[Document specific test scenarios required]
```

---

## Merge Recommendation

### Decision

- [ ] ✅ **APPROVE** - Merge without changes
- [ ] ⚠️ **APPROVE WITH MINOR CHANGES** - Merge after addressing comments
- [ ] 🔄 **REQUEST CHANGES** - Requires significant changes
- [ ] ❌ **REJECT** - Do not merge

### Conditions

```
[Document any conditions for approval]
```

### Timeline

| Action | Date | Owner |
|--------|------|-------|
| Review completed | | |
| Changes requested | | |
| Re-review required | | |
| Merge target | | |

---

## Reviewer Sign-off

### Primary Reviewer

- **Name:** 
- **Role:** 
- **Date:** 
- **Decision:** 

### Security Reviewer (if security changes)

- **Name:** 
- **Role:** 
- **Date:** 
- **Decision:** 

### Final Approval

- **Name:** 
- **Role:** 
- **Date:** 
- **Decision:** 

---

## Appendix: Review Guidelines

### Security Review Focus Areas

1. **Authentication:** Password handling, session management, OAuth
2. **Authorization:** Access controls, permissions, role checks
3. **Input Validation:** SQL injection, XSS, command injection
4. **Data Exposure:** Logging, error messages, API responses
5. **Configuration:** Secrets, database connections, debug mode

### Code Quality Standards

1. **Python:** PEP 8, type hints, docstrings
2. **JavaScript:** ESLint rules, consistent style
3. **HTML:** Semantic elements, accessibility
4. **CSS:** BEM naming, responsive design

### Performance Considerations

1. **Database:** Query optimization, indexing
2. **Caching:** Response caching, session storage
3. **Assets:** Minification, compression, CDN
4. **Network:** API response size, pagination

---

## Usage

1. Copy this template for each PR
2. Fill in the checklist items
3. Document findings in the appropriate sections
4. Make a merge recommendation
5. Get required sign-offs
6. Attach to PR as review comment

---

## Example PR Review

### PR #123: Add rate limiting to login endpoint

**Summary:**
Adds flask-limiter to protect login endpoint from brute force attacks.

**Risks:**
- Low: Rate limiting may affect legitimate users
- Low: New dependency added

**Benefits:**
- High: Prevents brute force attacks
- Medium: Improves security posture

**Testing Required:**
- Test rate limiting works correctly
- Test legitimate users not affected
- Test error messages are clear

**Merge Recommendation:**
✅ **APPROVE** - Merge without changes

**Justification:**
Security improvement with low risk. All tests pass, documentation updated.

# F-05 Investigation Report: Database File Exposure

**Date:** June 9, 2026  
**Finding:** `instance/users.db` committed to repository  
**Status:** ✅ RESOLVED - No sensitive data exposed

---

## Executive Summary

The SQLite database file `instance/users.db` was committed to the git repository in multiple commits. Investigation reveals the database has always been **empty** (0 user rows). No credentials, PII, or production data has been exposed.

---

## Timeline

| Commit | Date | Action | Database Size | User Rows |
|--------|------|--------|---------------|-----------|
| `292c5bc` | Initial | File added | 12,288 bytes | 0 |
| `9779ba8` | May 7, 2026 | File deleted | 0 bytes | N/A |
| `99cd25c` | Recent | File re-added | 12,288 bytes | 0 |
| Current | Present | File tracked | 12,288 bytes | 0 |

---

## Database Schema Analysis

### Table: `user`

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| id | INTEGER | NO | Primary key |
| username | VARCHAR(150) | NO | Email address |
| password | VARCHAR(150) | NO | Werkzeug hashed |
| full_name | VARCHAR(150) | YES | Display name |
| role | VARCHAR(50) | YES | Professional level |
| progress | TEXT | YES | JSON progress data |

---

## Data Exposure Assessment

### Current State

```bash
$ sqlite3 instance/users.db "SELECT COUNT(*) FROM user;"
0
```

**Result:** Database is EMPTY. No user records exist.

### Historical State

| Commit | User Count | Passwords | PII |
|--------|------------|-----------|-----|
| `292c5bc` | 0 | None | None |
| `99cd25c` | 0 | None | None |

**Result:** Database has ALWAYS been empty throughout git history.

---

## Risk Assessment

### Potential Risks (if database contained data)

| Risk | Severity | Likelihood | Impact |
|------|----------|------------|--------|
| Credential Exposure | Critical | N/A (empty) | N/A |
| PII Leak | High | N/A (empty) | N/A |
| HIPAA Violation | Critical | N/A (empty) | N/A |
| Compliance Failure | High | N/A (empty) | N/A |

### Actual Risk

| Risk | Severity | Status |
|------|----------|--------|
| Schema Exposure | Low | ⚠️ Present |
| Future Data Risk | Medium | ⚠️ Present |

---

## Decision Matrix

### Option A: No Sensitive Data Present ✅ RECOMMENDED

**Evidence:**
- Database contains 0 rows in all historical commits
- No credentials, PII, or production data ever existed
- Schema only exposes column names (public information)

**Recommendation:**
- ✅ No history purge required
- ✅ No secret rotation required
- ⚠️ Add to `.gitignore` to prevent future issues
- ⚠️ Remove from git tracking with `git rm --cached`

---

### Option B: Sensitive Data Present ❌ NOT APPLICABLE

**Not triggered.** No sensitive data was found.

---

## Remediation Steps

### Immediate Actions

1. **Add `.gitignore` entry**
   ```gitignore
   instance/
   *.db
   ```

2. **Remove from git tracking**
   ```bash
   git rm --cached instance/users.db
   ```

3. **Commit changes**
   ```bash
   git commit -m "chore: remove database file from git tracking"
   ```

### Optional Hardening

1. **Use environment variable for database path**
   ```python
   app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///users.db')
   ```

2. **Add database to deployment ignore**
   - Ensure production uses managed database
   - Never deploy SQLite to production

---

## Git History Analysis

### Commits Touching Database

| Commit | Message | Date | Impact |
|--------|---------|------|--------|
| `292c5bc` | Major Updates | Initial | File created (empty) |
| `9779ba8` | Delete instance/users.db | May 7 | File deleted |
| `99cd25c` | Organized the Repo | Recent | File re-added (empty) |

### Branch Analysis

- **main:** Database file present (empty)
- **No other branches** contain database with data

---

## Compliance Impact

| Standard | Status | Notes |
|----------|--------|-------|
| GDPR | ✅ Pass | No PII exposed |
| HIPAA | ✅ Pass | No PHI exposed |
| SOC 2 | ✅ Pass | No sensitive data |
| OWASP | ⚠️ Warning | Should not track DB files |

---

## Conclusion

**Finding F-05 is a FALSE POSITIVE for data exposure.**

The database file was committed but has always been empty. The only risk is:
1. Future accidental data commits (mitigated by `.gitignore`)
2. Schema exposure (low risk - column names are not sensitive)

**Recommended Actions:**
1. Add `.gitignore` entry ✅
2. Remove from git tracking ✅
3. No history purge required ✅
4. No secret rotation required ✅

---

## Appendix: Verification Commands

```bash
# Check current database state
sqlite3 instance/users.db "SELECT COUNT(*) FROM user;"

# Check git history
git log --all --oneline -- instance/users.db

# Verify database in specific commit
git show 292c5bc:instance/users.db | sqlite3 :memory: "SELECT COUNT(*) FROM user;"
```

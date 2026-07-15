# Technical Debt Register

**Date:** June 9, 2026  
**Project:** Smart CPG (SmartCare)  
**Total Items:** 25  
**Total Effort:** 45-60 days

---

## ⚠️ Resolution Status (Updated June 9, 2026)

The per-item "Status: Open" lines below describe the **original pre-fix state**. The
following items have since been **resolved** and the individual entries are
superseded by this table:

| ID | Status | Resolved in |
|----|--------|-------------|
| SEC-001 Unauthenticated admin endpoint | ✅ Resolved | `81fc561` |
| SEC-002 No rate limiting | ✅ Resolved | `81fc561` |
| SEC-003 No CSRF protection | ⚠️ Partial — form routes protected; JSON API routes exempt by design (see `SECURITY.md`) | `81fc561` |
| SEC-004 No security headers | ✅ Resolved | `81fc561` |
| SEC-005 Hardcoded secret key | ✅ Resolved | `81fc561` |
| SEC-006 Database file in git | ✅ Resolved | `81fc561` + `.gitignore` |
| SEC-007 No password complexity | ✅ Resolved | `81fc561` |
| REL-001 No health check endpoint | ✅ Resolved | this session (`/api/health`) |
| REL-002 No error logging | ✅ Resolved | this session (logging + 500 handler) |
| DOC-001 No security policy | ✅ Resolved | this session (`SECURITY.md`) |
| DOC-002 No API documentation | ✅ Resolved | this session (`API.md`) |
| DOC-003 No deployment guide | ✅ Resolved | this session (`DEPLOYMENT.md`) |

**New item found this session:**

| ID | Status | Notes |
|----|--------|-------|
| BUG-001 Procfile/factory mismatch | ✅ Resolved | `Procfile` ran `gunicorn server:app` but the app now uses the `create_app()` factory with no module-level `app` — production boot would crash. Fixed to `gunicorn "server:create_app()"`. |

**Still deferred — blocked on org-provided server/host:** REL-003 (backups),
PERF-001 (connection pooling), rate-limit Redis storage, DB migration
(`reports/database-roadmap.md`), and authentication hardening (low priority per owner).

---

## Executive Summary

This register captures all identified technical debt across security, performance, UI/UX, reliability, maintainability, and documentation categories. Each item includes description, risk assessment, priority, and estimated effort.

---

## Summary by Category

| Category | Items | High Priority | Estimated Effort |
|----------|-------|---------------|------------------|
| Security | 8 | 5 | 15-20 days |
| Performance | 3 | 1 | 5-7 days |
| UI/UX | 4 | 0 | 8-10 days |
| Reliability | 4 | 2 | 6-8 days |
| Maintainability | 3 | 1 | 5-7 days |
| Documentation | 3 | 2 | 6-8 days |
| **Total** | **25** | **11** | **45-60 days** |

---

## Security Debt

### SEC-001: Unauthenticated Admin Endpoint

- **Description:** `/api/admin/users` endpoint has no authentication check
- **Risk:** 🔴 Critical - Full user data exposure
- **Priority:** P0 - Immediate
- **Effort:** 0.5 days
- **Owner:** Security Team
- **Status:** Open
- **Impact:** Any user can access complete user list

**Remediation:**
```python
@app.route('/api/admin/users', methods=['GET'])
@login_required
def get_all_users():
    if current_user.role != 'admin':
        return jsonify({"error": "Unauthorized"}), 403
    # ... rest of implementation
```

---

### SEC-002: No Rate Limiting

- **Description:** API endpoints have no rate limiting
- **Risk:** 🔴 High - Brute force attacks
- **Priority:** P0 - Immediate
- **Effort:** 2 days
- **Owner:** Security Team
- **Status:** Open
- **Impact:** Unlimited login attempts possible

**Remediation:**
```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(get_remote_address, app=app)

@app.route('/api/login', methods=['POST'])
@limiter.limit("5 per minute")
def login():
    # ...
```

---

### SEC-003: No CSRF Protection

- **Description:** CSRF protection disabled in tests, not implemented in production
- **Risk:** 🔴 High - Cross-site request forgery
- **Priority:** P0 - Immediate
- **Effort:** 2 days
- **Owner:** Security Team
- **Status:** Open
- **Impact:** State-changing operations vulnerable

**Remediation:**
```python
from flask_wtf.csrf import CSRFProtect

csrf = CSRFProtect(app)

# In templates
<form method="post">
    {{ csrf_token() }}
    ...
</form>
```

---

### SEC-004: No Security Headers

- **Description:** No CSP, HSTS, X-Frame-Options headers
- **Risk:** 🟡 Medium - XSS, clickjacking
- **Priority:** P1 - Short-term
- **Effort:** 1 day
- **Owner:** Security Team
- **Status:** Open
- **Impact:** Client-side attacks possible

**Remediation:**
```python
@app.after_request
def set_security_headers(response):
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['Strict-Transport-Security'] = 'max-age=31536000'
    return response
```

---

### SEC-005: Hardcoded Secret Key Fallback

- **Description:** `server.py:17` uses hardcoded secret key as fallback
- **Risk:** 🟡 Medium - Session hijacking
- **Priority:** P1 - Short-term
- **Effort:** 0.5 days
- **Owner:** Security Team
- **Status:** Open
- **Impact:** Default secret key in production

**Remediation:**
```python
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
if not app.config['SECRET_KEY']:
    raise ValueError("SECRET_KEY environment variable required")
```

---

### SEC-006: Database File in Git

- **Description:** `instance/users.db` tracked in repository
- **Risk:** 🟡 Medium - Schema exposure
- **Priority:** P1 - Short-term
- **Effort:** 0.5 days
- **Owner:** DevOps Team
- **Status:** Open
- **Impact:** Database schema exposed in version control

**Remediation:**
```bash
git rm --cached instance/users.db
echo "instance/" >> .gitignore
```

---

### SEC-007: No Password Complexity Validation

- **Description:** Server-side only checks password length (8 chars)
- **Risk:** 🟡 Medium - Weak passwords
- **Priority:** P1 - Short-term
- **Effort:** 1 day
- **Owner:** Security Team
- **Status:** Open
- **Impact:** Users can set weak passwords

**Remediation:**
```python
def validate_password(password):
    if len(password) < 8:
        return False
    if not re.search(r'[A-Z]', password):
        return False
    if not re.search(r'[a-z]', password):
        return False
    if not re.search(r'[0-9]', password):
        return False
    return True
```

---

### SEC-008: Client-Side Admin Authentication

- **Description:** Admin credentials hashed client-side in JavaScript
- **Risk:** 🟡 Medium - Bypassable
- **Priority:** P2 - Long-term
- **Effort:** 3 days
- **Owner:** Security Team
- **Status:** Open
- **Impact:** Admin auth can be bypassed

**Remediation:**
- Move all admin authentication server-side
- Remove client-side hash verification
- Implement proper admin role checks

---

## Performance Debt

### PERF-001: No Database Connection Pooling

- **Description:** SQLite uses file-based connections, no pooling
- **Risk:** 🟡 Medium - Performance degradation
- **Priority:** P1 - Short-term
- **Effort:** 2 days
- **Owner:** Backend Team
- **Status:** Open
- **Impact:** Concurrent user issues

**Remediation:**
```python
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
    'pool_size': 5,
    'pool_recycle': 300,
    'pool_pre_ping': True
}
```

---

### PERF-002: No Caching Strategy

- **Description:** No Redis/Memcached for session/data caching
- **Risk:** 🟡 Medium - Slow responses
- **Priority:** P2 - Long-term
- **Effort:** 3 days
- **Owner:** Backend Team
- **Status:** Open
- **Impact:** Repeated database queries

**Remediation:**
- Implement Redis for session storage
- Add response caching for static data
- Implement query result caching

---

### PERF-003: No Asset Optimization

- **Description:** No CSS/JS minification, no image optimization
- **Risk:** 🟢 Low - Slower page loads
- **Priority:** P2 - Long-term
- **Effort:** 2 days
- **Owner:** Frontend Team
- **Status:** Open
- **Impact:** Larger bundle sizes

**Remediation:**
- Add CSS/JS minification to build process
- Optimize images (WebP format)
- Implement lazy loading

---

## UI/UX Debt

### UI-001: No Offline Sync

- **Description:** PWA caches assets but doesn't sync data
- **Risk:** 🟢 Low - Data loss possible
- **Priority:** P2 - Long-term
- **Effort:** 5 days
- **Owner:** Frontend Team
- **Status:** Open
- **Impact:** Offline changes lost

**Remediation:**
- Implement IndexedDB for offline data
- Add background sync
- Implement conflict resolution

---

### UI-002: No Accessibility Audit

- **Description:** No WCAG compliance testing
- **Risk:** 🟡 Medium - Accessibility issues
- **Priority:** P1 - Short-term
- **Effort:** 2 days
- **Owner:** Frontend Team
- **Status:** Open
- **Impact:** Users with disabilities affected

**Remediation:**
- Run automated accessibility tests
- Add ARIA labels where needed
- Test with screen readers

---

### UI-003: No Mobile Testing

- **Description:** No automated mobile testing
- **Risk:** 🟢 Low - Mobile issues
- **Priority:** P2 - Long-term
- **Effort:** 1 day
- **Owner:** QA Team
- **Status:** Open
- **Impact:** Mobile-specific bugs

**Remediation:**
- Add mobile viewport testing
- Test on real devices
- Add mobile-specific tests

---

### UI-004: No Dark Mode Toggle Persistence

- **Description:** Theme preference not synced across sessions
- **Risk:** 🟢 Low - Minor UX issue
- **Priority:** P3 - Low
- **Effort:** 0.5 days
- **Owner:** Frontend Team
- **Status:** Open
- **Impact:** Theme resets on new session

**Remediation:**
- Store theme preference in localStorage
- Sync with server-side if needed

---

## Reliability Debt

### REL-001: No Health Check Endpoint

- **Description:** No `/api/health` endpoint for monitoring
- **Risk:** 🟡 Medium - No visibility
- **Priority:** P1 - Short-term
- **Effort:** 0.5 days
- **Owner:** DevOps Team
- **Status:** Open
- **Impact:** Cannot monitor application health

**Remediation:**
```python
@app.route('/api/health')
def health_check():
    return jsonify({"status": "healthy", "version": "1.0.0"})
```

---

### REL-002: No Error Logging

- **Description:** No structured error logging
- **Risk:** 🟡 Medium - Debugging difficult
- **Priority:** P1 - Short-term
- **Effort:** 1 day
- **Owner:** Backend Team
- **Status:** Open
- **Impact:** Hard to diagnose issues

**Remediation:**
```python
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.errorhandler(500)
def internal_error(e):
    logger.error(f"Internal error: {e}")
    return jsonify({"error": "Internal server error"}), 500
```

---

### REL-003: No Database Backups

- **Description:** No automated backup strategy
- **Risk:** 🔴 High - Data loss
- **Priority:** P0 - Immediate
- **Effort:** 2 days
- **Owner:** DevOps Team
- **Status:** Open
- **Impact:** Complete data loss possible

**Remediation:**
- Implement daily automated backups
- Store backups in separate location
- Test restore procedures

---

### REL-004: No Graceful Shutdown

- **Description:** No handling for SIGTERM/SIGINT
- **Risk:** 🟢 Low - Ungraceful shutdowns
- **Priority:** P3 - Low
- **Effort:** 1 day
- **Owner:** Backend Team
- **Status:** Open
- **Impact:** In-flight requests lost

**Remediation:**
```python
import signal

def handle_signal(sig, frame):
    # Cleanup code here
    sys.exit(0)

signal.signal(signal.SIGTERM, handle_signal)
signal.signal(signal.SIGINT, handle_signal)
```

---

## Maintainability Debt

### MAINT-001: No Code Linting in Pre-commit

- **Description:** No pre-commit hooks for linting
- **Risk:** 🟡 Medium - Code quality issues
- **Priority:** P1 - Short-term
- **Effort:** 1 day
- **Owner:** DevOps Team
- **Status:** Open
- **Impact:** Inconsistent code style

**Remediation:**
```bash
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    hooks:
      - id: ruff
      - id: ruff-format
```

---

### MAINT-002: No Test Coverage Reporting

- **Description:** No coverage reports in CI/CD
- **Risk:** 🟢 Low - Unknown coverage
- **Priority:** P2 - Long-term
- **Effort:** 1 day
- **Owner:** QA Team
- **Status:** Open
- **Impact:** Cannot track test coverage

**Remediation:**
```yaml
# In ci.yml
- name: Run tests with coverage
  run: python -m pytest tests/ --cov=server --cov-report=xml
```

---

### MAINT-003: No Dependency Scanning

- **Description:** No automated vulnerability scanning
- **Risk:** 🟡 Medium - Vulnerable dependencies
- **Priority:** P1 - Short-term
- **Effort:** 1 day
- **Owner:** Security Team
- **Status:** Open
- **Impact:** Known vulnerabilities

**Remediation:**
```yaml
# In ci.yml
- name: Run safety check
  run: pip install safety && safety check
```

---

## Documentation Debt

### DOC-001: No Security Policy

- **Description:** No SECURITY.md for vulnerability reporting
- **Risk:** 🟡 Medium - Security issues unreported
- **Priority:** P1 - Short-term
- **Effort:** 1 day
- **Owner:** Security Team
- **Status:** Open
- **Impact:** Security vulnerabilities unreported

**Remediation:**
Create SECURITY.md with:
- Security contact information
- Vulnerability reporting process
- Response timeline
- Security controls overview

---

### DOC-002: No API Documentation

- **Description:** No API.md for endpoint reference
- **Risk:** 🟡 Medium - Integration difficult
- **Priority:** P1 - Short-term
- **Effort:** 2 days
- **Owner:** Backend Team
- **Status:** Open
- **Impact:** API integration difficult

**Remediation:**
Create API.md with:
- Authentication guide
- Endpoint list
- Request/response examples
- Error codes

---

### DOC-003: No Deployment Guide

- **Description:** No DEPLOYMENT.md for production setup
- **Risk:** 🟡 Medium - Deployment risky
- **Priority:** P1 - Short-term
- **Effort:** 3 days
- **Owner:** DevOps Team
- **Status:** Open
- **Impact:** Production deployment difficult

**Remediation:**
Create DEPLOYMENT.md with:
- Prerequisites
- Environment setup
- Database migration
- SSL/TLS configuration
- Monitoring setup

---

## Priority Matrix

### P0 - Immediate (1-2 weeks)

| ID | Description | Effort |
|----|-------------|--------|
| SEC-001 | Unauthenticated admin endpoint | 0.5 days |
| SEC-002 | No rate limiting | 2 days |
| SEC-003 | No CSRF protection | 2 days |
| REL-003 | No database backups | 2 days |
| **Total** | | **6.5 days** |

### P1 - Short-term (1-2 months)

| ID | Description | Effort |
|----|-------------|--------|
| SEC-004 | No security headers | 1 day |
| SEC-005 | Hardcoded secret key | 0.5 days |
| SEC-006 | Database in git | 0.5 days |
| SEC-007 | No password validation | 1 day |
| PERF-001 | No connection pooling | 2 days |
| UI-002 | No accessibility audit | 2 days |
| REL-001 | No health check | 0.5 days |
| REL-002 | No error logging | 1 day |
| MAINT-001 | No pre-commit hooks | 1 day |
| MAINT-003 | No dependency scanning | 1 day |
| DOC-001 | No security policy | 1 day |
| DOC-002 | No API documentation | 2 days |
| DOC-003 | No deployment guide | 3 days |
| **Total** | | **16 days** |

### P2 - Long-term (3-6 months)

| ID | Description | Effort |
|----|-------------|--------|
| SEC-008 | Client-side admin auth | 3 days |
| PERF-002 | No caching | 3 days |
| PERF-003 | No asset optimization | 2 days |
| UI-001 | No offline sync | 5 days |
| UI-003 | No mobile testing | 1 day |
| MAINT-002 | No coverage reporting | 1 day |
| **Total** | | **15 days** |

### P3 - Low Priority (6+ months)

| ID | Description | Effort |
|----|-------------|--------|
| UI-004 | Theme persistence | 0.5 days |
| REL-004 | No graceful shutdown | 1 day |
| **Total** | | **1.5 days** |

---

## Tracking

### GitHub Issues

Create issues for each debt item with:
- Title: `[DEBT-XXX] Description`
- Labels: `technical-debt`, `priority-X`
- Milestone: Appropriate release

### Review Process

1. **Weekly:** Review P0 items
2. **Monthly:** Review P1 items
3. **Quarterly:** Review P2/P3 items

### Metrics

Track:
- Total debt items
- Items resolved per sprint
- Debt age
- Impact on velocity

---

## Conclusion

**Total Technical Debt:** 25 items  
**Total Estimated Effort:** 45-60 days  
**Critical Items:** 4 (6.5 days)

**Recommended Actions:**
1. Address P0 items immediately (6.5 days)
2. Schedule P1 items for next quarter (16 days)
3. Plan P2 items for future releases (15 days)
4. Monitor P3 items (1.5 days)

**Next Steps:** Proceed to Phase 7 (PR Governance Template).

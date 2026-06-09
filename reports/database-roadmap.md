# Database Architecture Roadmap

**Date:** June 9, 2026  
**Project:** Smart CPG (DCAS CPG 2025)  
**Current State:** SQLite (Development)  
**Target State:** Production-ready database

---

## Executive Summary

The current SQLite database is suitable for development and single-user testing but not for production deployment. This report evaluates database migration options considering cost, security, scalability, and operational overhead.

---

## Current Architecture

### SQLite Configuration

| Aspect | Current | Status |
|--------|---------|--------|
| Database Engine | SQLite 3.x | ✅ Functional |
| ORM | Flask-SQLAlchemy | ✅ Configured |
| Location | `instance/users.db` | ⚠️ Local file |
| Connection | Single file | ⚠️ No concurrent writes |
| Backup | None | ❌ No automation |
| Scaling | Single user | ❌ Not scalable |

### Current Schema

```sql
CREATE TABLE user (
    id INTEGER PRIMARY KEY,
    username VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    full_name VARCHAR(150),
    role VARCHAR(50),
    progress TEXT DEFAULT '{}'
);
```

### Limitations

| Limitation | Impact | Risk |
|------------|--------|------|
| No concurrent writes | Multi-user issues | High |
| File-based storage | Backup complexity | Medium |
| No replication | Single point of failure | High |
| No connection pooling | Performance issues | Medium |
| No encryption at rest | Data exposure risk | High |
| No audit logging | Compliance gaps | Medium |

---

## Candidate Databases

### Option 1: PostgreSQL (Self-Hosted)

| Aspect | Details |
|--------|---------|
| **Cost** | Free (open-source) + hosting |
| **Hosting** | AWS RDS, GCP Cloud SQL, Azure, DigitalOcean |
| **Monthly Cost** | $15-50/month (managed) |
| **Migration Complexity** | Medium |
| **Security** | Enterprise-grade |
| **Scalability** | Excellent |
| **Operational Overhead** | Medium |

**Pros:**
- Full ACID compliance
- Concurrent read/write support
- JSON/JSONB support (for progress field)
- Row-level security
- Audit logging
- Connection pooling
- Backup automation

**Cons:**
- Requires hosting infrastructure
- More complex than SQLite
- Higher operational cost

**Migration Path:**
```python
# Update requirements.txt
psycopg2-binary==2.9.9

# Update DATABASE_URL
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
# postgresql://user:pass@host:5432/cpg_db
```

**Estimated Effort:** 2-3 days

---

### Option 2: Supabase (Managed PostgreSQL)

| Aspect | Details |
|--------|---------|
| **Cost** | Free tier + paid plans |
| **Free Tier** | 500MB, 50K MAU |
| **Paid Plans** | $25-500/month |
| **Migration Complexity** | Low-Medium |
| **Security** | Enterprise-grade (SOC 2, HIPAA) |
| **Scalability** | Excellent |
| **Operational Overhead** | Low |

**Pros:**
- Fully managed PostgreSQL
- Built-in authentication (can replace Flask-Login)
- Real-time subscriptions
- Row-level security
- Auto-backups
- Dashboard for monitoring
- REST/GraphQL APIs
- Free tier for small apps

**Cons:**
- Vendor lock-in potential
- Less control than self-hosted
- Costs scale with usage

**Migration Path:**
```python
# Supabase provides PostgreSQL connection string
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
# postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres
```

**Estimated Effort:** 1-2 days

---

### Option 3: Managed Database (AWS RDS/GCP Cloud SQL)

| Aspect | Details |
|--------|---------|
| **Cost** | $15-100/month (db.t3.micro) |
| **Migration Complexity** | Medium |
| **Security** | Enterprise-grade |
| **Scalability** | Excellent |
| **Operational Overhead** | Low-Medium |

**Pros:**
- Full PostgreSQL features
- Automated backups
- High availability options
- Encryption at rest/transit
- Monitoring and alerting
- Compliance certifications

**Cons:**
- Requires cloud provider account
- More complex setup
- Higher minimum cost

**Migration Path:**
```python
# Similar to PostgreSQL self-hosted
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
```

**Estimated Effort:** 2-3 days

---

### Option 4: Keep SQLite (Development Only)

| Aspect | Details |
|--------|---------|
| **Cost** | Free |
| **Migration Complexity** | None |
| **Security** | Basic |
| **Scalability** | None |
| **Operational Overhead** | Low |

**Pros:**
- Zero configuration
- No hosting costs
- Simple backup (copy file)
- Good for development/testing

**Cons:**
- Not suitable for production
- No concurrent writes
- No encryption
- No replication
- Single point of failure

**Recommendation:** Keep for development, migrate for production.

---

## Comparison Matrix

| Criteria | SQLite | PostgreSQL (Self) | Supabase | Managed DB |
|----------|--------|-------------------|----------|------------|
| **Cost** | Free | $15-50/mo | Free-$25/mo | $15-100/mo |
| **Setup Effort** | None | High | Low | Medium |
| **Maintenance** | Low | High | Low | Low |
| **Scalability** | None | Excellent | Excellent | Excellent |
| **Security** | Basic | Enterprise | Enterprise | Enterprise |
| **Compliance** | Limited | Full | Full | Full |
| **Backup** | Manual | Automated | Automated | Automated |
| **Concurrent Users** | 1 | 100+ | 100+ | 100+ |
| **Real-time** | No | Yes | Yes | Yes |
| **Free Tier** | N/A | N/A | Yes | No |

---

## Recommended Approach

### Phase 1: Development (Current)
- ✅ Keep SQLite for local development
- ✅ Use in-memory SQLite for tests
- ⚠️ Never deploy SQLite to production

### Phase 2: Staging/Production (Recommended)
- **Primary Choice:** Supabase
  - Free tier sufficient for initial deployment
  - Built-in auth can replace Flask-Login
  - Lower operational overhead
  - Easy scaling path

- **Alternative:** Managed PostgreSQL (AWS RDS)
  - If Supabase doesn't meet needs
  - Full control over configuration

### Phase 3: Enterprise (Future)
- Consider dedicated PostgreSQL cluster
- Add read replicas for scaling
- Implement advanced monitoring

---

## Migration Plan

### Step 1: Schema Migration (1 day)

```python
# Create migration script
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

### Step 2: Data Migration (0.5 days)

```python
# Export from SQLite
sqlite3 instance/users.db .dump > export.sql

# Import to PostgreSQL
psql -h host -d database -f export.sql
```

### Step 3: Application Update (1 day)

```python
# Update server.py
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')

# Update requirements.txt
psycopg2-binary==2.9.9

# Add connection pooling
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
    'pool_size': 5,
    'pool_recycle': 300,
}
```

### Step 4: Testing (0.5 days)

- Run test suite against new database
- Verify all endpoints work
- Test concurrent access

### Step 5: Deployment (0.5 days)

- Update environment variables
- Deploy to staging
- Verify production readiness
- Deploy to production

**Total Estimated Effort:** 3-4 days

---

## Security Considerations

### SQLite Security Gaps

| Gap | Risk | Mitigation |
|-----|------|------------|
| No encryption at rest | Data exposure | Use encrypted database |
| No access controls | Unauthorized access | File permissions |
| No audit logging | Compliance gaps | Add application logging |
| No TLS for connections | MITM attacks | N/A (file-based) |

### PostgreSQL/Supabase Security

| Feature | SQLite | PostgreSQL | Supabase |
|---------|--------|------------|----------|
| Encryption at rest | ❌ | ✅ | ✅ |
| TLS connections | N/A | ✅ | ✅ |
| Row-level security | ❌ | ✅ | ✅ |
| Audit logging | ❌ | ✅ | ✅ |
| Role-based access | ❌ | ✅ | ✅ |

---

## Cost Analysis

### 12-Month Projection

| Option | Monthly | Annual | Notes |
|--------|---------|--------|-------|
| SQLite | $0 | $0 | Development only |
| Supabase Free | $0 | $0 | Limited resources |
| Supabase Pro | $25 | $300 | Recommended |
| AWS RDS db.t3.micro | $15 | $180 | Basic option |
| AWS RDS db.t3.small | $30 | $360 | Better performance |

### Cost-Benefit Analysis

**Supabase Pro ($25/month):**
- ✅ Managed infrastructure
- ✅ Built-in auth
- ✅ Real-time capabilities
- ✅ Free tier for development
- ✅ HIPAA compliance available

**Recommendation:** Start with Supabase Free tier, upgrade to Pro as needed.

---

## Implementation Checklist

### Pre-Migration

- [ ] Choose database provider
- [ ] Create database instance
- [ ] Configure connection string
- [ ] Set up backup schedule
- [ ] Configure monitoring

### Migration

- [ ] Install database driver (`psycopg2-binary`)
- [ ] Update `requirements.txt`
- [ ] Update `server.py` configuration
- [ ] Create migration scripts
- [ ] Test migration on staging
- [ ] Verify data integrity

### Post-Migration

- [ ] Update deployment configuration
- [ ] Set environment variables
- [ ] Test all endpoints
- [ ] Monitor performance
- [ ] Document new architecture

---

## Conclusion

**Recommended Path:**
1. **Immediate:** Keep SQLite for development
2. **Short-term:** Migrate to Supabase for staging/production
3. **Long-term:** Evaluate dedicated PostgreSQL if needed

**Benefits:**
- Enterprise-grade security
- Automatic backups
- Scalability
- Reduced operational overhead
- Compliance readiness

**Next Steps:** Proceed to Phase 5 (Documentation Review).

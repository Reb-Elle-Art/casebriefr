# Casebriefr — Budget & Cost Projections

*Show me the money (and where it goes)*

---

## Current Costs (Month 1)

### Infrastructure

| Item | Provider | Monthly Cost | Annual Cost |
|------|----------|-------------|-------------|
| Domain (casebriefr.com) | Cloudflare | $0.87 | $10.46 |
| GitHub Pro (if needed) | GitHub | $0 (free tier) | $0 |
| **Subtotal Infrastructure** | | **$0.87** | **$10.46** |

### Development

| Item | Cost | Notes |
|------|------|-------|
| OpenAI API | $0-50 | Usage-based, likely minimal during dev |
| Development time | $0 | Self-built |
| **Subtotal Development** | **~$25** | |

### **TOTAL MONTH 1: ~$26**

---

## Projected Costs — Growth Phases

### Phase 1: MVP (Months 1-3)
**User Load**: 0-100 users, 0-500 briefs/month

| Category | Monthly Cost |
|----------|-------------|
| Domain | $0.87 |
| VPS (1GB RAM) | $5 |
| Database (SQLite → Postgres) | $0-15 |
| OpenAI API | $25-50 |
| Monitoring (Sentry free tier) | $0 |
| **TOTAL** | **$30-70** |

### Phase 2: Beta (Months 4-6)
**User Load**: 100-1,000 users, 500-5,000 briefs/month

| Category | Monthly Cost |
|----------|-------------|
| Domain | $0.87 |
| VPS (2GB RAM) | $12 |
| Database (Managed Postgres) | $15 |
| OpenAI API | $100-500 |
| Monitoring | $20 |
| CDN (Cloudflare free) | $0 |
| **TOTAL** | **$148-548** |

### Phase 3: Launch (Months 7-12)
**User Load**: 1,000-5,000 users, 5,000-25,000 briefs/month

| Category | Monthly Cost |
|----------|-------------|
| Domain | $0.87 |
| VPS (4GB RAM) or 2× VPS | $24-48 |
| Database (Managed Postgres) | $50 |
| Redis (caching) | $15 |
| OpenAI API | $500-2,500 |
| Monitoring (Sentry paid) | $26 |
| CDN | $0-20 |
| Email (SendGrid) | $0-20 |
| **TOTAL** | **$636-2,680** |

### Phase 4: Scale (Year 2+)
**User Load**: 5,000-25,000+ users, 25,000+ briefs/month

| Category | Monthly Cost |
|----------|-------------|
| Kubernetes cluster | $200-500 |
| Database (High-availability) | $200-500 |
| OpenAI API | $2,500-10,000 |
| Monitoring & Logging | $100-200 |
| CDN | $50-100 |
| Email/SMS | $50-100 |
| **TOTAL** | **$3,100-11,400** |

---

## Cost Per Brief Analysis

| Volume | OpenAI Cost | Infrastructure | **Total per brief** |
|--------|------------|----------------|-------------------|
| 100/month | $0.10 | $0.30 | **$0.40** |
| 1,000/month | $0.08 | $0.10 | **$0.18** |
| 10,000/month | $0.06 | $0.05 | **$0.11** |
| 100,000/month | $0.05 | $0.03 | **$0.08** |

**Revenue per brief** (blended average):
- Free users: $0
- Paid users: ~$0.30-1.00

**Breakeven**: ~500 briefs/month with 10% paid conversion

---

## Revenue Projections vs Costs

| Month | Users | Paying | MRR | Costs | Profit/Loss |
|-------|-------|--------|-----|-------|-------------|
| 1 | 10 | 0 | $0 | $26 | -$26 |
| 3 | 50 | 2 | $18 | $50 | -$32 |
| 6 | 200 | 15 | $135 | $300 | -$165 |
| 9 | 500 | 40 | $360 | $600 | -$240 |
| 12 | 1,000 | 100 | $900 | $1,200 | -$300 |
| 18 | 2,500 | 300 | $2,700 | $2,000 | +$700 |
| 24 | 5,000 | 700 | $6,300 | $4,000 | +$2,300 |

**Cash flow positive**: Month 18 (projected)

---

## Cost Optimization Strategies

### Near-term (Now-6 months)
1. **GitHub storage**: Free for now, migrate to DB only when needed
2. **OpenAI model selection**: Use GPT-3.5-turbo initially ($0.002/1K tokens vs GPT-4 at $0.03)
3. **Caching**: Cache extracted text and similar cases
4. **Rate limiting**: Prevent abuse that drives up API costs

### Medium-term (6-18 months)
1. **Fine-tuned models**: Train custom model on legal briefs (cheaper per query)
2. **Request batching**: Group multiple cases into single API call
3. **Tiered AI**: Use cheaper models for simple cases, expensive for complex
4. **CDN optimization**: Cache generated PDFs

### Long-term (18+ months)
1. **Self-hosted models**: Run LLaMA or similar on dedicated GPU ($0.50/hr = ~$360/mo vs $5,000+ API)
2. **Multi-provider**: Route to cheapest AI provider per request
3. **Enterprise on-prem**: Customers pay their own infrastructure

---

## Emergency Fund

**Recommended**: 6 months of operating expenses

At $500/month average burn: **$3,000 reserve**

Current status: Self-funded, minimal costs = sustainable indefinitely at MVP stage

---

## Cost Monitoring

**Track weekly**:
- OpenAI API spend
- Server resource usage
- Database size
- User signups and conversions

**Alerts**:
- Daily spend >$50
- Monthly forecast >$500
- Conversion rate <5%

---

*Last updated: March 11, 2026*
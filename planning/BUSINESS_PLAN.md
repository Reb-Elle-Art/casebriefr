# Casebriefr — Business Plan

**Automated Legal Case Briefing for the Modern Lawyer**

---

## Executive Summary

Casebriefr transforms court decisions into structured case briefs using AI. From a single case to a semester's worth — what took hours now takes minutes.

**Problem**: Law students, paralegals, and lawyers spend countless hours reading and summarizing court decisions.

**Solution**: AI-powered brief generation that reads cases and produces professional, structured summaries.

**Market**: $400B+ legal services market, with legal tech growing 8% annually.

**Model**: Freemium SaaS with individual and enterprise tiers.

---

## Market Analysis

### Target Segments

| Segment | Size (US) | Pain Level | Willingness to Pay | Primary Use Case |
|-----------|-----------|------------|-------------------|------------------|
| **Law Students** | 100,000+ | High (time pressure) | Medium ($9-15/mo) | Learn briefing structure, input own cases, get well-formatted PDFs of their work |
| **Paralegals** | 300,000+ | Very High (volume) | Medium-High ($29/mo) | Bulk case loads, shotgun research approach, batch upload to reduce/summarize for motions |
| **Lawyers** | 200,000+ | Very High (time) | High ($29-99/mo) | Batch research, quickly find relevant cases for motions, reduce reading time |
| **Laypeople** | Millions | Medium (confusion) | Low-Medium ($5-9/mo) | Remove legal jargon, understand facts and why they matter, small batch uploads |
| Small Firms | 50,000+ | High (efficiency) | High |
| Large Firms | 5,000+ | Medium (have resources) | Very High (enterprise) |

### Use Cases by Segment

#### 1. Law Students — *Learn by Doing*
**The Workflow:**
- Student reads assigned case and takes notes
- Inputs case into Casebriefr, following the structured template
- Tool guides them through proper briefing format (Facts, Issues, Holding, Rule, Reasoning)
- Generates a professional, well-formatted PDF for class prep or study groups
- Students learn briefing structure through hands-on practice, not just reading examples

**Value Prop:** "Learn briefing structure by building your own library of professional briefs."

---

#### 2. Lawyers & Paralegals — *Bulk Research & Motion Prep*
**The Workflow:**
- Legal professional has a stack of potential precedent cases to review
- Batch uploads 20-50 PDFs at once (shotgun approach to research)
- Casebriefr reduces each case to a structured, readable summary
- Professional scans summaries to identify relevant cases for motions
- Dramatically reduces time from "receive discovery" to "find supporting precedent"

**Value Prop:** "Reduce days of reading to hours of scanning. Find your needles in the haystack."

---

#### 3. Laypeople — *Jargon-Free Understanding*
**The Workflow:**
- Person involved in or curious about a legal matter receives court documents
- Uploads small batch of PDFs (1-3 cases)
- Casebriefr extracts facts and "why they matter" in plain English
- Removes intimidating legal jargon while preserving key holdings and reasoning
- Person understands their situation without hiring a lawyer for initial research

**Value Prop:** "Legal documents translated into human. Know what your case means without law school."

---

### Competitive Landscape

**Direct Competitors**:
- **Casetext**: $65-110/month, comprehensive research
- **Quimbee**: $15-25/month, study aids
- **Casebriefs.com**: $20/month, pre-written briefs (16,000 cases in database)

**Differentiation**:
- Upload *any* case — not limited to pre-selected database
- Batch processing entire syllabi or case loads
- Three distinct modes: Learning tool (students), Research accelerator (legal pros), Translation service (laypeople)
- API access for integrations
- Fraction of the cost of competitors

---

## Revenue Model

### Tiered Pricing (Aligned with Use Cases)

| Tier | Price | Includes | Target Use Case |
|------|-------|----------|-----------------|
| **Free** | $0 | 3 briefs/month, basic template | Trial, occasional layperson use |
| **Layperson** | $5/mo | 10 briefs/month, jargon-free mode | Small batch, plain English output |
| **Student** | $9/mo | Unlimited briefs, PDF export, cloud save, guided template | Learn briefing structure, build personal library |
| **Pro** | $29/mo | Batch upload (100 cases/mo), API access, priority processing | Bulk research, motion prep, shotgun approach |
| **Team** | $99/mo | 5 seats, shared library, batch (500/mo), admin | Small firms, collaborative research |
| **Enterprise** | Custom | Unlimited, SSO, training, SLA, dedicated support | Large firms, high-volume |

### Revenue Projections

**Year 1 (2026)**:
- Users: 5,000
- Paying: 300 (6% conversion)
- MRR: $6,000
- Annual: $72,000

**Year 2 (2027)**:
- Users: 25,000
- Paying: 2,000 (8% conversion)
- MRR: $50,000
- Annual: $600,000

**Year 3 (2028)**:
- Users: 100,000
- Paying: 8,000 (8% conversion)
- MRR: $200,000
- Annual: $2.4M

---

## Cost Structure

### Fixed Costs (Monthly)

| Item | Cost | Notes |
|------|------|-------|
| Domain | $1 | casebriefr.com |
| Hosting (VPS) | $50 | DigitalOcean/AWS |
| Database | $15 | PostgreSQL |
| Monitoring | $20 | Uptime, logs |
| **Total Fixed** | **$86/mo** | |

### Variable Costs (Per Brief)

| Item | Cost | Notes |
|------|------|-------|
| OpenAI API | $0.05-0.15 | Depends on case length |
| PDF Processing | $0.01 | Extraction + generation |
| Storage | $0.001 | Negligible |
| **Avg per brief** | **$0.10** | |

### Breakeven Analysis

- Fixed costs: $86/month
- Variable cost: $0.10/brief
- At $9/month Student tier: breakeven at 10 paying users
- At $29/month Pro tier: breakeven at 4 paying users

---

## Go-to-Market Strategy

### Phase 1: Validation (Now - Apr 2026)
**Student Use Case:**
- Beta with 10 law students
- Focus: Template guidance, learning effectiveness, PDF quality

**Pro Use Case:**
- Beta with 3 paralegals and 2 lawyers
- Focus: Batch upload speed, accuracy, time savings for motion prep

**Layperson Use Case:**
- Beta with 5 non-lawyers with active legal interests
- Focus: Jargon reduction, clarity of "why it matters"

Gather feedback, iterate, document case studies for each segment.

### Phase 2: Launch (May 2026)
**By Segment:**

*Students:*
- Product Hunt launch
- Reddit (r/lawschool)
- Law school Facebook groups
- Twitter/X law student community

*Legal Pros:*
- Reddit (r/paralegal, r/lawyers)
- LinkedIn content
- Paralegal association newsletters

*Laypeople:*
- Reddit (r/legaladvice — carefully, no UPL)
- Facebook groups for pro se litigants
- Content marketing: "How to understand your court documents"

### Phase 3: Growth (Jun-Dec 2026)
- Content marketing segmented by use case (blog, YouTube, TikTok)
- Law school partnerships (student tool)
- Bar association sponsorships (pro tool)
- Legal aid organization partnerships (layperson tool)
- Referral program (all segments)

### Phase 4: Scale (2027+)
- Enterprise sales
- Integration partnerships
- International expansion

---

## Unit Economics

### Customer Acquisition Cost (CAC)
- Content/organic: $10-20
- Paid social: $30-50
- Target blended CAC: $25

### Lifetime Value (LTV)
- Layperson: $5 × 3 months = $15 (case-specific, use-then-cancel)
- Student: $9 × 12 months = $108 (school year)
- Pro: $29 × 18 months = $522 (ongoing professional use)
- Target LTV:CAC ratio: 3:1 or better (higher for Pro/Enterprise)

### Churn Expectations
- Layperson: 25%/month (transactional — use for specific case, then cancel)
- Student: 15%/month (semester-based, high churn summer/breaks)
- Pro: 5%/month (ongoing work need)
- Enterprise: 2%/month (sticky, contract-based)

---

## Funding & Runway

**Current Status**: Self-funded, minimal costs
**Monthly Burn**: ~$100 (infrastructure)
**Runway**: Indefinite at current scale

**If seeking investment**:
- Seed: $250K-500K at $2M valuation
- Use: AI improvement, marketing, team
- Target: Y Combinator, legal tech angels

---

## Risk Analysis

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| AI accuracy insufficient | Medium | High | Extensive prompt engineering, human review option |
| Legal liability | Low | Very High | Clear disclaimers, terms of service |
| Competitor response | High | Medium | Differentiation on price and flexibility |
| Economic downturn | Medium | Medium | Focus on cost-saving value prop |

---

## Success Metrics

**Leading Indicators**:
- Signup conversion rate
- Activation (first brief generated)
- API usage (for Pro tier)

**Lagging Indicators**:
- Monthly Recurring Revenue (MRR)
- Customer Lifetime Value (LTV)
- Net Promoter Score (NPS)

---

## Conclusion

Casebriefr addresses a real pain point in legal education and practice with a clear value proposition. The freemium model allows organic growth while the API and batch features create enterprise value. With modest investment and focused execution, Casebriefr can become the standard tool for case brief generation.

---

*Last updated: March 11, 2026*
# Casebriefr — Product Roadmap

*Where we're going and when*

---

## Phase 1: Foundation (March 2026)

### Sprint 1 — API Core ✅ *In Progress*
**Goal**: Basic API accepting PDFs, returning structured data

**Deliverables**:
- REST API with Express.js
- PDF text extraction endpoint
- GitHub-based JSON storage
- Basic documentation

**Success Criteria**:
- Can upload a case PDF via API
- Receive structured JSON response
- Data persists to GitHub

---

### Sprint 2 — AI Brain 🎯 *Next*
**Goal**: Automated brief generation from case text

**Deliverables**:
- OpenAI/Claude integration
- Prompt engineering for legal analysis
- PDF output generation
- Rate limiting

**Success Criteria**:
- Upload case PDF → receive complete brief
- PDF download matches template styling
- < 60 seconds processing time

---

### Sprint 3 — Batch & Keys 🔐
**Goal**: Scale to multiple cases, add basic auth

**Deliverables**:
- Batch processing endpoint
- Job queue and status tracking
- Simple API key authentication
- Usage tracking

**Success Criteria**:
- Process 10+ cases in one request
- API keys restrict access
- Jobs complete asynchronously

---

## Phase 2: Growth (Q2 2026)

### User Accounts & Storage
- User registration/login
- Cloud storage for briefs
- Brief organization (folders, tags)
- Search and filter

### Premium Features
- Export to Word (.docx)
- Custom templates
- Priority processing
- API access for integrations

### Monetization Launch
- Free tier: 5 briefs/month
- Student tier: $9/month unlimited
- Pro tier: $29/month batch + API

---

## Phase 3: Platform (Q3-Q4 2026)

### Advanced Features
- Citation verification (Westlaw/Lexis integration)
- Case relationship mapping
- Shepardization alerts
- Study mode with flashcards
- Collaboration tools

### Enterprise
- White-label options
- On-premise deployment
- SAML/SSO
- SLA guarantees
- Custom AI training

### Expansion
- International law support
- Multiple jurisdictions
- Appeals court specialization
- Regulatory filing assistance

---

## Technical Evolution

```
Now          →  Q2 2026    →  Q3-Q4 2026   →  2027+
GitHub JSON  →  SQLite    →  PostgreSQL   →  Distributed
Static HTML  →  React SPA →  Full App     →  Mobile Apps
GitHub Pages →  VPS       →  Kubernetes   →  Multi-region
Manual PDF   →  Puppeteer →  LaTeX/PDFKit →  Custom Engine
```

---

## Key Milestones

| Date | Milestone |
|------|-----------|
| Mar 18 | Sprint 1 Complete — API accepting PDFs |
| Mar 25 | Sprint 2 Complete — AI-generated briefs |
| Apr 1 | Sprint 3 Complete — Batch & auth working |
| Apr 15 | Beta launch with 10 test users |
| May 1 | Public launch with free tier |
| Jun 1 | First paid customers |
| Sep 1 | 1000 users, $5k MRR |
| Dec 1 | 5000 users, $20k MRR |

---

## Risk Factors

**Technical**:
- AI accuracy on complex legal reasoning
- PDF extraction quality varies
- Rate limiting from OpenAI

**Legal**:
- Not legal advice disclaimers
- Copyright on case texts
- Bar association regulations

**Market**:
- Existing competitors (Casetext, etc.)
- Law school resistance to AI
- Economic downturn affecting legal industry

---

*Last updated: March 11, 2026*
# Casebriefr — Architecture Decision Log

*Why we made the choices we made*

---

## ADR-001: Storage Backend — GitHub as Database

**Status**: Active (Phase 1)  
**Date**: March 11, 2026  
**Decision**: Use GitHub repository as primary data store for MVP

### Context
Need persistent storage for case briefs in container environment with no local database services.

### Options Considered
1. **SQLite** — File-based SQL database
2. **JSON files** — Simple file storage
3. **GitHub commits** — Version-controlled JSON
4. **External database** — RDS, Supabase, etc.

### Decision
Use GitHub as the backing store by committing JSON files to the repo.

### Rationale
- ✅ No additional infrastructure needed
- ✅ Free (within GitHub limits)
- ✅ Built-in versioning and audit trail
- ✅ Easy to migrate from later
- ✅ Elle is already familiar with GitHub

### Trade-offs
- ❌ Not a real database (no queries, no indexes)
- ❌ Rate limits on GitHub API
- ❌ Slightly slower than local storage
- ❌ All data is public (if repo is public)

### Future
Migrate to PostgreSQL when:
- > 1,000 briefs stored
- Need complex queries
- User accounts require privacy

---

## ADR-002: Backend Framework — Node.js + Express

**Status**: Proposed  
**Date**: March 11, 2026  
**Decision**: Use Node.js with Express for API server

### Context
Need a lightweight web framework for REST API that works in container environment.

### Options Considered
1. **Node.js + Express** — JavaScript, pre-installed, huge ecosystem
2. **Python + Flask/FastAPI** — Python, great for ML, also pre-installed
3. **Go** — Fast, compiled, would need to install
4. **Ruby on Rails** — Full-featured, too heavy for MVP

### Decision
Use Node.js with Express.

### Rationale
- ✅ Pre-installed in container
- ✅ Excellent PDF generation libraries (Puppeteer)
- ✅ Easy deployment to GitHub Pages/functions
- ✅ Large community, abundant examples
- ✅ JavaScript ecosystem for frontend too

### Trade-offs
- ❌ Not as "batteries-included" as Django/Rails
- ❌ Callback/async complexity
- ❌ Less ML-native than Python

### Future
May add Python microservice for ML tasks if needed.

---

## ADR-003: AI Provider — OpenAI GPT

**Status**: Proposed  
**Date**: March 11, 2026  
**Decision**: Use OpenAI API for text analysis and brief generation

### Context
Need AI to read case texts and generate structured briefs.

### Options Considered
1. **OpenAI GPT-4/GPT-3.5** — Best quality, most expensive
2. **Anthropic Claude** — Excellent reasoning, comparable price
3. **Self-hosted LLaMA** — Free after setup, requires GPU
4. **Google Bard/PaLM** — Good alternative

### Decision
Start with OpenAI GPT-3.5-turbo for cost, upgrade to GPT-4 for complex cases.

### Rationale
- ✅ Proven legal reasoning capabilities
- ✅ Good context window (16K tokens)
- ✅ Simple API
- ✅ Fast response times
- ✅ Can start cheap ($0.002/1K tokens)

### Trade-offs
- ❌ Ongoing cost (not self-hosted)
- ❌ Rate limits
- ❌ Data goes to third party (privacy concern)

### Future
- Evaluate Claude for comparison
- Consider fine-tuned model for legal domain
- Self-hosted option for enterprise privacy

---

## ADR-004: No Authentication (Phase 1)

**Status**: Active (Phase 1)  
**Date**: March 11, 2026  
**Decision**: Launch API without authentication for development

### Context
Need to balance security with speed of iteration.

### Options Considered
1. **No auth** — Fastest, risk of abuse
2. **API keys** — Simple, basic protection
3. **OAuth** — Full auth, more complex
4. **IP rate limiting** — Minimal protection

### Decision
No auth for Phase 1 (development only), add API keys in Phase 3.

### Rationale
- ✅ Fastest to implement
- ✅ Easy testing and iteration
- ✅ No user management needed yet
- ✅ Can add auth later without breaking changes

### Mitigations
- Rate limiting by IP
- Monitor for abuse
- Clear "not for production" warnings

### Future
Add API key authentication before public launch.

---

## ADR-005: PDF Generation — Puppeteer

**Status**: Proposed  
**Date**: March 11, 2026  
**Decision**: Use Puppeteer (headless Chrome) to generate PDFs from HTML template

### Context
Need to generate professional PDFs matching the casebriefr template design.

### Options Considered
1. **Puppeteer** — Renders HTML/CSS perfectly
2. **PDFKit** — Programmatic PDF creation
3. **LaTeX** — Professional typesetting, steep learning curve
4. **wkhtmltopdf** — Older, less compatible

### Decision
Use Puppeteer to render the existing HTML template to PDF.

### Rationale
- ✅ Perfect CSS rendering (same as browser)
- ✅ Reuse existing template.html design
- ✅ Easy to maintain (just HTML/CSS)
- ✅ Print media queries work

### Trade-offs
- ❌ Heavy dependency (Chromium)
- ❌ Slower than pure PDF libraries
- ❌ Memory intensive

### Future
Optimize with PDFKit or LaTeX if performance becomes issue.

---

## ADR-006: Monorepo Structure

**Status**: Active  
**Date**: March 11, 2026  
**Decision**: Keep website and API in single repo (casebriefr)

### Context
Need to organize code for both static website and API backend.

### Options Considered
1. **Single repo** — website + api folders
2. **Separate repos** — casebriefr-site, casebriefr-api
3. **Monorepo with workspaces** — npm/yarn workspaces

### Decision
Single repo with folder structure:
```
casebriefr/
├── index.html (website)
├── api/ (backend)
└── planning/ (docs)
```

### Rationale
- ✅ Simple deployment (GitHub Pages handles static, VPS handles API)
- ✅ Shared templates and assets
- ✅ Easier to keep in sync
- ✅ One place for issues and PRs

### Future
May split if API becomes large enough to warrant separate CI/CD.

---

*Last updated: March 11, 2026*
# Casebriefr — Task List

**Current Sprint: Sprint 1 — API Foundation**

---

## Sprint 1: API Foundation (Target: This Week)

### Infrastructure Setup
- [ ] (2026-03-11) Create `api/` directory structure in casebriefr repo
- [ ] (2026-03-11) Initialize Node.js project with `package.json`
- [ ] (2026-03-11) Install Express.js and basic dependencies
- [ ] (2026-03-11) Set up basic Express server with health check endpoint

### PDF Processing Pipeline
- [ ] (2026-03-11) Research and select PDF text extraction library
  - Options: `pdf-parse`, `pdf-text-extract`, `pdfjs-dist`
  - Constraint: Must work in container environment
- [ ] (2026-03-11) Implement `POST /api/extract` endpoint
  - Accepts: PDF file (multipart/form-data or base64)
  - Returns: Extracted raw text
- [ ] (2026-03-11) Add error handling for corrupted/malformed PDFs
- [ ] (2026-03-11) Test with sample case PDFs

### Data Structure & Storage
- [ ] (2026-03-11) Define CaseBrief JSON schema matching template fields
  - caseName, citation, court, dateDecided, judge
  - facts, proceduralHistory, issues, holding, rule, reasoning
  - concurrence, dissent, significance, notes
- [ ] (2026-03-11) Implement `POST /api/briefs` endpoint
  - Accepts: Extracted text + optional metadata
  - Returns: Structured JSON (placeholder — no AI yet)
- [ ] (2026-03-11) Set up GitHub storage integration
  - Function to commit JSON to repo
  - Generate unique IDs for briefs
- [ ] (2026-03-11) Implement `GET /api/briefs/:id` endpoint

### API Documentation
- [ ] (2026-03-11) Create API documentation page
- [ ] (2026-03-11) Document all endpoints with examples
- [ ] (2026-03-11) Create Postman collection or curl examples

### Testing & Validation
- [ ] (2026-03-11) Test API with curl/Postman
- [ ] (2026-03-11) Test with actual case PDFs
- [ ] (2026-03-11) Document any limitations found

---

## Backlog — Sprint 2: AI Integration

### Core AI Features
- [ ] Integrate OpenAI/Claude API for text analysis
- [ ] Create prompt templates for each brief section
- [ ] Implement `POST /api/briefs/generate` with AI
- [ ] Add rate limiting for API calls
- [ ] Implement job queue for long-running requests

### PDF Generation
- [ ] Research PDF generation from template
- [ ] Implement `GET /api/briefs/:id/download` (PDF)
- [ ] Style PDF output to match casebriefr template

---

## Backlog — Sprint 3: Batch & Auth

### Batch Processing
- [ ] Implement `POST /api/briefs/batch`
- [ ] Create job status tracking (`GET /api/jobs/:id`)
- [ ] Add webhook support for completion notifications

### Authentication
- [ ] Design simple API key system
- [ ] Implement API key generation endpoint
- [ ] Add rate limiting per API key
- [ ] Create usage dashboard (basic)

---

## Future Ideas (Unprioritized)

### Features
- [ ] Citation verification against legal databases
- [ ] Case relationship mapping (overruled/distinguished by)
- [ ] Export to Word (.docx)
- [ ] Study mode with flashcards
- [ ] Collaboration/sharing between users
- [ ] Custom templates (different jurisdictions)

### Infrastructure
- [ ] Move from GitHub storage to database
- [ ] Implement caching layer
- [ ] Add monitoring and alerting
- [ ] CI/CD pipeline

---

## Notes

- All dates are 2026-03-11 as this is Sprint 1 planning
- Update dates as tasks are completed
- Add new tasks as discovered during implementation

*Last updated: March 11, 2026*
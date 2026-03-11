# Casebriefr — Task List

**Current Sprint: Sprint 1 — API Foundation**

---

## Sprint 1: API Foundation (Target: This Week)

### Infrastructure Setup
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Create `api/` directory structure in casebriefr repo
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Initialize Node.js project with `package.json`
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Install Express.js and basic dependencies
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Set up basic Express server with health check endpoint

### PDF Processing Pipeline
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Research and select PDF text extraction library
  - Options: `pdf-parse`, `pdf-text-extract`, `pdfjs-dist`
  - Constraint: Must work in container environment
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Implement `POST /api/extract` endpoint
  - Accepts: PDF file (multipart/form-data or base64)
  - Returns: Extracted raw text
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Add error handling for corrupted/malformed PDFs
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Test with sample case PDFs

### Data Structure & Storage
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Define CaseBrief JSON schema matching template fields
  - caseName, citation, court, dateDecided, judge
  - facts, proceduralHistory, issues, holding, rule, reasoning
  - concurrence, dissent, significance, notes
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Implement `POST /api/briefs` endpoint
  - Accepts: Extracted text + optional metadata
  - Returns: Structured JSON (placeholder — no AI yet)
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Set up GitHub storage integration
  - Function to commit JSON to repo
  - Generate unique IDs for briefs
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Implement `GET /api/briefs/:id` endpoint

### API Documentation
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Create API documentation page
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Document all endpoints with examples
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Create Postman collection or curl examples

### Testing & Validation
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Test API with curl/Postman
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Test with actual case PDFs
- [ ] (STATUS: IN-PROGRESS) (2026-03-11) Document any limitations found

---

## Backlog — Sprint 2: AI Integration

### Core AI Features
- [ ] (STATUS: NOT-STARTED) Integrate OpenAI/Claude API for text analysis
- [ ] (STATUS: NOT-STARTED) Create prompt templates for each brief section
- [ ] (STATUS: NOT-STARTED) Implement `POST /api/briefs/generate` with AI
- [ ] (STATUS: NOT-STARTED) Add rate limiting for API calls
- [ ] (STATUS: NOT-STARTED) Implement job queue for long-running requests

### PDF Generation
- [ ] (STATUS: NOT-STARTED) Research PDF generation from template
- [ ] (STATUS: NOT-STARTED) Implement `GET /api/briefs/:id/download` (PDF)
- [ ] (STATUS: NOT-STARTED) Style PDF output to match casebriefr template

---

## Backlog — Sprint 3: Batch & Auth

### Batch Processing
- [ ] (STATUS: NOT-STARTED) Implement `POST /api/briefs/batch`
- [ ] (STATUS: NOT-STARTED) Create job status tracking (`GET /api/jobs/:id`)
- [ ] (STATUS: NOT-STARTED) Add webhook support for completion notifications

### Authentication
- [ ] (STATUS: NOT-STARTED) Design simple API key system
- [ ] (STATUS: NOT-STARTED) Implement API key generation endpoint
- [ ] (STATUS: NOT-STARTED) Add rate limiting per API key
- [ ] (STATUS: NOT-STARTED) Create usage dashboard (basic)

---

## Future Ideas (Unprioritized)

### Features
- [ ] (STATUS: NOT-STARTED) Citation verification against legal databases
- [ ] (STATUS: NOT-STARTED) Case relationship mapping (overruled/distinguished by)
- [ ] (STATUS: NOT-STARTED) Export to Word (.docx)
- [ ] (STATUS: NOT-STARTED) Study mode with flashcards
- [ ] (STATUS: NOT-STARTED) Collaboration/sharing between users
- [ ] (STATUS: NOT-STARTED) Custom templates (different jurisdictions)

### Infrastructure
- [ ] (STATUS: NOT-STARTED) Move from GitHub storage to database
- [ ] (STATUS: NOT-STARTED) Implement caching layer
- [ ] (STATUS: NOT-STARTED) Add monitoring and alerting
- [ ] (STATUS: NOT-STARTED) CI/CD pipeline

---

## Notes

- **Last updated:** March 11, 2026  
- **Status changed to IN-PROGRESS:** All Sprint 1 tasks marked active
- **Update dates as tasks are completed**
- **Add new tasks as discovered during implementation**

*All Sprint 1 tasks marked IN-PROGRESS for overnight development sprint*
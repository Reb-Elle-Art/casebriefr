# Casebriefr — API Specification

**RESTful API for Automated Case Brief Generation**

---

## Base URL

```
Production: https://api.casebriefr.com/v1
Development: http://localhost:3000/v1
```

## Authentication

**Phase 1**: No authentication (development only)

**Phase 2**: API Key in header
```
X-API-Key: your-api-key-here
```

**Phase 3**: Bearer token (OAuth2)
```
Authorization: Bearer eyJhbGciOiJ...
```

---

## Endpoints

### Health Check

```http
GET /health
```

**Response**:
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "timestamp": "2026-03-11T06:30:00Z"
}
```

---

### Upload & Extract PDF

```http
POST /extract
Content-Type: multipart/form-data
```

**Request**:
```
file: <PDF file>
```

**Response**:
```json
{
  "success": true,
  "extractedText": "MARSHALL, C.J. delivered the opinion of the court...",
  "wordCount": 2450,
  "pageCount": 15
}
```

---

### Create Brief (Manual)

```http
POST /briefs
Content-Type: application/json
```

**Request**:
```json
{
  "caseName": "Marbury v. Madison",
  "citation": "5 U.S. 137 (1803)",
  "court": "Supreme Court of the United States",
  "dateDecided": "1803-02-24",
  "facts": "Adams appointed Marbury as justice of the peace...",
  "issues": "Does Marbury have a right to the commission?",
  "holding": "Yes, but the Court cannot issue the writ...",
  "rule": "It is emphatically the province of the judicial department to say what the law is."
}
```

**Response**:
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "created",
  "createdAt": "2026-03-11T06:30:00Z",
  "url": "https://api.casebriefr.com/v1/briefs/550e8400-e29b-41d4-a716-446655440000"
}
```

---

### Generate Brief (AI)

```http
POST /briefs/generate
Content-Type: multipart/form-data
```

**Request**:
```
file: <PDF file>
options: {"includeDissent": true, "detailLevel": "comprehensive"}
```

**Response** (immediate):
```json
{
  "jobId": "job-550e8400-e29b-41d4-a716-446655440000",
  "status": "processing",
  "estimatedTime": "30 seconds"
}
```

---

### Check Job Status

```http
GET /jobs/:jobId
```

**Response** (processing):
```json
{
  "jobId": "job-550e8400-e29b-41d4-a716-446655440000",
  "status": "processing",
  "progress": 65,
  "startedAt": "2026-03-11T06:30:00Z"
}
```

**Response** (complete):
```json
{
  "jobId": "job-550e8400-e29b-41d4-a716-446655440000",
  "status": "complete",
  "briefId": "550e8400-e29b-41d4-a716-446655440000",
  "completedAt": "2026-03-11T06:30:45Z"
}
```

---

### Get Brief

```http
GET /briefs/:id
```

**Response**:
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "caseName": "Marbury v. Madison",
  "citation": "5 U.S. 137 (1803)",
  "court": "Supreme Court of the United States",
  "dateDecided": "1803-02-24",
  "judge": "Chief Justice John Marshall",
  "facts": "...",
  "proceduralHistory": "...",
  "issues": "...",
  "holding": "...",
  "rule": "...",
  "reasoning": "...",
  "concurrence": null,
  "dissent": null,
  "significance": "...",
  "notes": "...",
  "createdAt": "2026-03-11T06:30:00Z",
  "updatedAt": "2026-03-11T06:30:45Z"
}
```

---

### Download PDF

```http
GET /briefs/:id/download
```

**Response**: PDF file download

**Headers**:
```
Content-Type: application/pdf
Content-Disposition: attachment; filename="Casebriefr - Marbury v. Madison.pdf"
```

---

### List Briefs

```http
GET /briefs?page=1&limit=20
```

**Response**:
```json
{
  "briefs": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "caseName": "Marbury v. Madison",
      "citation": "5 U.S. 137 (1803)",
      "createdAt": "2026-03-11T06:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1,
    "totalPages": 1
  }
}
```

---

### Batch Generate

```http
POST /briefs/batch
Content-Type: multipart/form-data
```

**Request**:
```
files: <PDF 1>, <PDF 2>, <PDF 3>, ...
options: {"includeDissent": true}
```

**Response**:
```json
{
  "batchId": "batch-550e8400-e29b-41d4-a716-446655440000",
  "status": "processing",
  "totalFiles": 10,
  "processedFiles": 0,
  "estimatedTime": "5 minutes"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Bad Request",
  "message": "PDF file is corrupted or unreadable",
  "code": "INVALID_PDF"
}
```

### 404 Not Found
```json
{
  "error": "Not Found",
  "message": "Brief not found",
  "code": "BRIEF_NOT_FOUND"
}
```

### 429 Rate Limited
```json
{
  "error": "Too Many Requests",
  "message": "Rate limit exceeded. Try again in 60 seconds.",
  "code": "RATE_LIMITED",
  "retryAfter": 60
}
```

### 500 Server Error
```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "code": "INTERNAL_ERROR"
}
```

---

## Rate Limits

| Tier | Requests/min | Batch Size | Monthly Limit |
|------|-------------|------------|---------------|
| Free | 10 | 1 | 5 briefs |
| Student | 60 | 5 | Unlimited |
| Pro | 120 | 100 | Unlimited |
| Enterprise | Custom | Custom | Unlimited |

---

## Webhooks (Future)

```http
POST /webhooks
Content-Type: application/json
```

**Request**:
```json
{
  "url": "https://your-app.com/webhooks/casebriefr",
  "events": ["brief.completed", "batch.completed"],
  "secret": "whsec_your_webhook_secret"
}
```

---

## Data Schema

### CaseBrief

```typescript
interface CaseBrief {
  id: string;                    // UUID
  caseName: string;              // "Marbury v. Madison"
  citation: string;              // "5 U.S. 137 (1803)"
  court: string;                 // "Supreme Court..."
  dateDecided: string;           // ISO 8601 date
  judge?: string;                // "Chief Justice..."
  
  // Content sections
  facts: string;                 // Relevant facts
  proceduralHistory: string;     // How case reached court
  issues: string;                // Legal questions
  holding: string;               // Court's decision
  rule: string;                  // Legal principles
  reasoning: string;             // Court's analysis
  concurrence?: string;          // Concurring opinions
  dissent?: string;              // Dissenting opinions
  significance?: string;         // Importance & impact
  notes?: string;                // Additional notes
  
  // Metadata
  createdAt: string;             // ISO 8601 timestamp
  updatedAt: string;             // ISO 8601 timestamp
  generatedBy: 'ai' | 'manual';  // How brief was created
}
```

---

*Last updated: March 11, 2026*  
*Status: Draft — Sprint 1 Implementation*
# Casebriefr Tasks

*Active and pending tasks for the Casebriefr project*

**Last Updated:** 2026-03-11

---

## IN-PROGRESS

*(No active tasks currently)*

---

## BACKLOG

### CL-API-001: Deep Dive - CourtListener API for Automation with RECAP
**Status:** BACKLOG  
**Priority:** HIGH  
**Created:** 2026-03-11

**Description:**
Conduct comprehensive technical analysis of CourtListener API for Casebriefr integration, specifically focusing on RECAP Archive access for federal court documents.

**Research Questions:**
1. What API endpoints are available for RECAP document search and retrieval?
2. What authentication is required for different access tiers?
3. What are the rate limits for API usage?
4. How does the RECAP document availability check work?
5. What metadata is available for PACER documents via API?
6. How can we integrate RECAP as a preliminary check before falling back to other sources?
7. What are the costs/pricing tiers for API access?
8. How does the citation network API work (citing/cited cases)?

**Deliverables:**
- Technical documentation of CourtListener API endpoints
- Sample API requests/responses
- Integration architecture recommendation
- Cost/benefit analysis vs PACER direct access
- Rate limiting and throttling strategy

**Related Research:**
- See `research-courtlistener.md`
- See `research-pacer-recap.md`
- RECAP extension: https://free.law/recap/
- API docs: https://www.courtlistener.com/api/rest-info/

**Notes:**
- CourtListener has case (Wilcox v. Trautz) that CAP doesn't
- RECAP Archive has millions of PACER documents available for free
- API can check if document exists before attempting purchase
- This could be a key differentiator for Casebriefr federal case coverage

---

## COMPLETED

*(See git history for completed tasks)*

---

*Task Format: ID | Status | Priority | Created | Description*

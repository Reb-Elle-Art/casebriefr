# Casebriefr

**Professional Legal Case Briefing — Automated**

> *"Casebriefs.com is a law school in a box. Casebriefr is a brief in your inbox. They have 16,000 cases. We have your case — whatever it is, whenever you need it, in 60 seconds."*

---

## What is Casebriefr?

Casebriefr is an AI-powered legal tool that reads court decisions and automatically generates professional case briefs. Built for law students drowning in reading, paralegals needing quick summaries, and lawyers researching precedent.

## Current State

✅ **Live and Working**
- Web template for manual case briefing
- Demo page showcasing Marbury v. Madison
- Custom domain: casebriefr.com

🚧 **In Development**
- RESTful API for automated brief generation
- Batch processing for multiple cases
- PDF input → structured brief output

## Quick Links

| Resource | URL |
|----------|-----|
| **Live Site** | https://casebriefr.com |
| **Demo** | https://casebriefr.com/demo.html |
| **Template** | https://casebriefr.com/template.html |
| **Project Planning** | ./planning/ |

## Repository Structure

```
casebriefr/
├── index.html          # Landing page
├── template.html       # Case brief template
├── demo.html           # Pre-filled demo (Marbury v. Madison)
├── CNAME               # Domain configuration
├── README.md           # This file
└── planning/           # Business & project documentation
    ├── README.md       # This cover page
    ├── TASKS.md        # Sprint tasks & backlog
    ├── ROADMAP.md      # Feature timeline
    ├── BUSINESS_PLAN.md # Monetization & market analysis
    ├── BUDGET.md       # Cost projections
    ├── API_DESIGN.md   # API specification
    └── DECISIONS.md    # Architecture decisions log
```

## Target Users

1. **Law Students** — Brief a semester's cases in an hour
2. **Paralegals** — Quick summaries for attorney review
3. **Lawyers** — Research stack of potential precedent cases
4. **Professors** — Generate teaching materials
5. **Lay People** — Understand complicated legal documents

## The Vision

From a single case template to an AI-powered legal research assistant. From manual entry to batch processing. From a tool to a platform.

**Immediate**: REST API accepting PDFs, returning structured briefs  
**Near-term**: User accounts, cloud storage, batch processing  
**Long-term**: Citation verification, case mapping, study tools, enterprise licensing

---

*Last updated: March 11, 2026*  
*Status: Sprint 1 Planning*
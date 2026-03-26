// Casebriefr PDF Generation Module
// Handles professional PDF output with proper formatting

class CasebriefrPDF {
    constructor() {
        this.caseData = {};
        this.briefAuthor = '';
    }

    // Collect all form data
    collectData() {
        // Check URL params for generated flag
        const urlParams = new URLSearchParams(window.location.search);
        const urlGenerated = urlParams.get('generated');
        
        this.caseData = {
            caseName: document.getElementById('case-name')?.value || 'Untitled Case',
            citation: document.getElementById('citation')?.value || '',
            court: document.getElementById('court')?.value || '',
            dateDecided: document.getElementById('date')?.value || '',
            judge: document.getElementById('judge')?.value || '',
            briefedBy: document.getElementById('briefed-by')?.value || '',
            generated: urlGenerated === 'true',
            facts: document.getElementById('facts')?.value || '',
            proceduralHistory: document.getElementById('procedural-history')?.value || '',
            issues: document.getElementById('issues')?.value || '',
            holding: document.getElementById('holding')?.value || '',
            rule: document.getElementById('rule')?.value || '',
            reasoning: document.getElementById('reasoning')?.value || '',
            concurrence: document.getElementById('concurrence')?.value || '',
            dissent: document.getElementById('dissent')?.value || '',
            significance: document.getElementById('significance')?.value || '',
            notes: document.getElementById('notes')?.value || ''
        };
        
        this.briefAuthor = this.caseData.briefedBy;
        return this.caseData;
    }

    // Generate filename from case data
    generateFilename() {
        const caseName = this.caseData.caseName.replace(/[^a-zA-Z0-9\s]/g, '').trim();
        const author = this.briefAuthor.replace(/[^a-zA-Z0-9\s]/g, '').trim();
        
        if (caseName && author) {
            return `Casebrief - ${caseName} - ${author}.pdf`;
        } else if (caseName) {
            return `Casebrief - ${caseName}.pdf`;
        } else {
            return `Casebrief - Untitled.pdf`;
        }
    }

    // Prepare content for printing/PDF generation
    prepareContent() {
        this.collectData();
        
        // Update print header
        const printCaseName = document.getElementById('print-case-name');
        const printCitation = document.getElementById('print-citation');
        const printCourt = document.getElementById('print-court');
        const printDate = document.getElementById('print-date');
        const printBriefedBy = document.getElementById('print-briefed-by');
        
        if (printCaseName) printCaseName.textContent = this.caseData.caseName || 'Case Name';
        if (printCitation) printCitation.textContent = this.caseData.citation;
        if (printCourt) printCourt.textContent = this.caseData.court;
        if (printDate) {
            printDate.textContent = this.caseData.dateDecided ? 
                new Date(this.caseData.dateDecided).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                }) : '';
        }
        if (printBriefedBy) {
            printBriefedBy.textContent = this.caseData.briefedBy ? `Briefed by: ${this.caseData.briefedBy}` : '';
        }
        
        // AI disclaimer
        const printDisclaimer = document.getElementById('print-disclaimer');
        if (printDisclaimer && this.caseData.generated) {
            printDisclaimer.textContent = 'Generated with the assistance of AI';
        }
        
        // Update all print content divs
        const fieldMap = {
            'print-facts': this.caseData.facts,
            'print-procedural-history': this.caseData.proceduralHistory,
            'print-issues': this.caseData.issues,
            'print-holding': this.caseData.holding,
            'print-rule': this.caseData.rule,
            'print-reasoning': this.caseData.reasoning,
            'print-concurrence': this.caseData.concurrence,
            'print-dissent': this.caseData.dissent,
            'print-significance': this.caseData.significance,
            'print-notes': this.caseData.notes
        };
        
        for (const [id, value] of Object.entries(fieldMap)) {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        }
        
        // Hide empty sections
        this.hideEmptySections();
    }
    
    // Hide sections with no content
    hideEmptySections() {
        const sections = [
            { contentId: 'print-concurrence', sectionId: 'print-concurrence-section' },
            { contentId: 'print-dissent', sectionId: 'print-dissent-section' },
            { contentId: 'print-significance', sectionId: 'print-significance-section' },
            { contentId: 'print-notes', sectionId: 'print-notes-section' }
        ];
        
        sections.forEach(({ contentId, sectionId }) => {
            const content = document.getElementById(contentId);
            const section = document.getElementById(sectionId);
            if (content && section) {
                section.style.display = content.textContent.trim() ? 'block' : 'none';
            }
        });
    }

    // Print using browser print dialog
    print() {
        this.prepareContent();
        
        // Set document title for better default filename in some browsers
        const originalTitle = document.title;
        const filename = this.generateFilename().replace('.pdf', '');
        document.title = filename;
        
        window.print();
        
        // Restore original title
        setTimeout(() => {
            document.title = originalTitle;
        }, 100);
    }

    // Submit brief to dbriefr gallery via Cloudflare Worker
    async submitToDBrief() {
        this.collectData();
        
        // Validate required fields
        if (!this.caseData.caseName || this.caseData.caseName === 'Untitled Case') {
            alert('Please enter a case name before submitting.');
            return;
        }
        
        if (!this.caseData.citation) {
            alert('Please enter a citation before submitting.');
            return;
        }
        
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
        
        try {
            // Generate filename from case name
            const filename = this.caseData.caseName.replace(/[^a-zA-Z0-9\s]/g, '').trim().replace(/\s+/g, '-') + '.html';
            
            // Generate HTML content for the brief
            const content = this.generateBriefHTML();
            
            const response = await fetch('https://casebriefr-worker.zoe-270.workers.dev/api/submit-brief', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filename: filename,
                    content: content,
                    title: this.caseData.caseName,
                    citation: this.caseData.citation,
                    court: this.caseData.court,
                    snippet: this.generateSnippet()
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            
            if (result.success) {
                const viewInGallery = confirm('Brief submitted successfully! 🎉\n\nWould you like to view it in the dbriefr gallery?');
                if (viewInGallery) {
                    window.open('https://dbriefr.com/gallery.html', '_blank');
                }
            } else {
                throw new Error(result.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit brief. Please try again later. Error: ' + error.message);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }
    
    // Generate HTML content for the brief (for submission to gallery)
    generateBriefHTML() {
        const date = new Date().toISOString().split('T')[0];
        const briefedBy = this.caseData.briefedBy || 'Anonymous';
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.caseData.caseName} | Case Brief</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }
        .header { text-align: center; border-bottom: 2px solid #2c3e50; padding-bottom: 20px; margin-bottom: 30px; }
        .case-name { font-size: 24px; font-weight: bold; font-style: italic; margin-bottom: 10px; }
        .meta { color: #666; font-size: 14px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #2c3e50; margin-bottom: 10px; }
        .briefed-by { text-align: center; color: #888; font-size: 12px; margin-top: 40px; font-style: italic; }
    </style>
</head>
<body>
    <div class="header">
        <div class="case-name">${this.caseData.caseName}</div>
        <div class="meta">${this.caseData.citation}${this.caseData.court ? ' | ' + this.caseData.court : ''}${this.caseData.dateDecided ? ' | ' + this.caseData.dateDecided : ''}</div>
    </div>
    
    ${this.caseData.facts ? `<div class="section"><div class="section-title">Facts</div><div>${this.formatContent(this.caseData.facts)}</div></div>` : ''}
    ${this.caseData.proceduralHistory ? `<div class="section"><div class="section-title">Procedural History</div><div>${this.formatContent(this.caseData.proceduralHistory)}</div></div>` : ''}
    ${this.caseData.issues ? `<div class="section"><div class="section-title">Issues</div><div>${this.formatContent(this.caseData.issues)}</div></div>` : ''}
    ${this.caseData.holding ? `<div class="section"><div class="section-title">Holding</div><div>${this.formatContent(this.caseData.holding)}</div></div>` : ''}
    ${this.caseData.rule ? `<div class="section"><div class="section-title">Rule of Law</div><div>${this.formatContent(this.caseData.rule)}</div></div>` : ''}
    ${this.caseData.reasoning ? `<div class="section"><div class="section-title">Reasoning</div><div>${this.formatContent(this.caseData.reasoning)}</div></div>` : ''}
    ${this.caseData.concurrence ? `<div class="section"><div class="section-title">Concurring Opinion</div><div>${this.formatContent(this.caseData.concurrence)}</div></div>` : ''}
    ${this.caseData.dissent ? `<div class="section"><div class="section-title">Dissenting Opinion</div><div>${this.formatContent(this.caseData.dissent)}</div></div>` : ''}
    ${this.caseData.significance ? `<div class="section"><div class="section-title">Analysis & Significance</div><div>${this.formatContent(this.caseData.significance)}</div></div>` : ''}
    ${this.caseData.notes ? `<div class="section"><div class="section-title">Additional Notes</div><div>${this.formatContent(this.caseData.notes)}</div></div>` : ''}
    
    <div class="briefed-by">Briefed by ${briefedBy} on ${date}</div>
</body>
</html>`;
    }
    
    // Format content with paragraph breaks
    formatContent(text) {
        if (!text) return '';
        return text.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
    }
    
    // Generate a snippet for the gallery (first 150 chars of facts or holding)
    generateSnippet() {
        const text = this.caseData.facts || this.caseData.holding || this.caseData.reasoning || '';
        if (!text) return 'Brief submitted via Casebriefr';
        
        // Clean up and truncate
        const clean = text.replace(/\s+/g, ' ').trim();
        if (clean.length <= 150) return clean;
        return clean.substring(0, 150) + '...';
    }
}

// Initialize
const casebriefrPDF = new CasebriefrPDF();

// Export for use in template
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CasebriefrPDF;
}

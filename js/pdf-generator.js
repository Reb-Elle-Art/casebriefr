// Casebriefr PDF Generation Module
// Handles professional PDF output with proper formatting

class CasebriefrPDF {
    constructor() {
        this.caseData = {};
        this.briefAuthor = '';
    }

    // Collect all form data
    collectData() {
        this.caseData = {
            caseName: document.getElementById('case-name')?.value || 'Untitled Case',
            citation: document.getElementById('citation')?.value || '',
            court: document.getElementById('court')?.value || '',
            dateDecided: document.getElementById('date')?.value || '',
            judge: document.getElementById('judge')?.value || '',
            briefedBy: document.getElementById('briefed-by')?.value || '',
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

    // Submit brief to d-Briefs gallery via Cloudflare Worker
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
            const response = await fetch('https://casebriefr-worker.zoe-270.workers.dev/api/submit-brief', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    caseName: this.caseData.caseName,
                    citation: this.caseData.citation,
                    court: this.caseData.court,
                    dateDecided: this.caseData.dateDecided,
                    briefedBy: this.caseData.briefedBy,
                    facts: this.caseData.facts,
                    proceduralHistory: this.caseData.proceduralHistory,
                    issues: this.caseData.issues,
                    holding: this.caseData.holding,
                    rule: this.caseData.rule,
                    reasoning: this.caseData.reasoning,
                    concurrence: this.caseData.concurrence,
                    dissent: this.caseData.dissent,
                    significance: this.caseData.significance,
                    notes: this.caseData.notes
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            
            if (result.success) {
                alert('Brief submitted successfully! It will appear in the d-Briefs gallery shortly.');
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
}

// Initialize
const casebriefrPDF = new CasebriefrPDF();

// Export for use in template
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CasebriefrPDF;
}

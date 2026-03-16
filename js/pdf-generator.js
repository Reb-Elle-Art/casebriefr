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

    // Create professional print stylesheet
    createPrintStyles() {
        return `
            @page {
                size: letter;
                margin: 1in 1in 1in 1in;
            }
            
            @media print {
                body {
                    background: white !important;
                    padding: 0 !important;
                    font-family: 'Times New Roman', Times, serif !important;
                    font-size: 12pt !important;
                    line-height: 1.5 !important;
                }
                
                .container {
                    box-shadow: none !important;
                    padding: 0 !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                }
                
                /* Hide interactive elements */
                .button-row, 
                .brand-footer, 
                .screen-only,
                .section-header,
                label,
                .hint,
                textarea,
                input {
                    display: none !important;
                }
                
                /* Show print content */
                .print-content {
                    display: block !important;
                    white-space: pre-wrap !important;
                    word-wrap: break-word !important;
                    font-family: 'Times New Roman', Times, serif !important;
                    font-size: 12pt !important;
                    line-height: 1.5 !important;
                    border: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    background: transparent !important;
                }
                
                /* Professional header */
                .print-header {
                    display: block !important;
                    text-align: center !important;
                    margin-bottom: 30pt !important;
                    padding-bottom: 15pt !important;
                    border-bottom: 2pt solid #000 !important;
                }
                
                .print-case-name {
                    font-size: 18pt !important;
                    font-weight: bold !important;
                    font-style: italic !important;
                    margin-bottom: 8pt !important;
                    text-align: center !important;
                }
                
                .print-case-meta {
                    font-size: 11pt !important;
                    color: #333 !important;
                    text-align: center !important;
                }
                
                /* Section styling */
                .form-section {
                    break-inside: avoid !important;
                    page-break-inside: avoid !important;
                    margin-bottom: 20pt !important;
                    border: none !important;
                }
                
                .section-content {
                    padding: 0 !important;
                }
                
                /* Section headers in print */
                .print-section-title {
                    display: block !important;
                    font-size: 12pt !important;
                    font-weight: bold !important;
                    text-transform: uppercase !important;
                    letter-spacing: 1pt !important;
                    margin-bottom: 8pt !important;
                    margin-top: 15pt !important;
                    border-bottom: 1pt solid #000 !important;
                    padding-bottom: 3pt !important;
                }
                
                /* Prevent orphans/widows */
                p, div {
                    orphans: 3 !important;
                    widows: 3 !important;
                }
                
                /* Page breaks for major sections */
                .form-section.major {
                    break-before: page !important;
                }
            }
        `;
    }

    // Prepare content for PDF generation
    prepareContent() {
        this.collectData();
        
        // Update all print divs
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            const printDiv = document.getElementById('print-' + textarea.id);
            if (printDiv) {
                printDiv.textContent = textarea.value;
            }
        });
        
        // Update print header
        document.getElementById('print-case-name').textContent = this.caseData.caseName || 'Case Name';
        document.getElementById('print-citation').textContent = this.caseData.citation;
        document.getElementById('print-court').textContent = this.caseData.court;
        document.getElementById('print-date').textContent = this.caseData.dateDecided ? 
            new Date(this.caseData.dateDecided).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            }) : '';
    }

    // Generate PDF using html2pdf
    async generatePDF() {
        this.prepareContent();
        
        const element = document.querySelector('.container');
        const filename = this.generateFilename();
        
        const opt = {
            margin: [0.5, 0.5, 0.5, 0.5],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'in', 
                format: 'letter', 
                orientation: 'portrait'
            }
        };

        // Apply print styles temporarily
        const styleSheet = document.createElement('style');
        styleSheet.textContent = this.createPrintStyles();
        document.head.appendChild(styleSheet);
        
        try {
            await html2pdf().set(opt).from(element).save();
        } finally {
            // Clean up
            document.head.removeChild(styleSheet);
        }
    }

    // Print using browser print dialog
    print() {
        this.prepareContent();
        window.print();
    }
}

// Initialize
const casebriefrPDF = new CasebriefrPDF();

// Export for use in template
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CasebriefrPDF;
}

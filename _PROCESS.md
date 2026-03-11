# Casebriefr — Process Documentation

*Recurring workflows and procedures for the Casebriefr project*

---

## Command: BRIEF:

**Trigger:** `BRIEF: [case citation or name]` (case-sensitive)

**Purpose:** Generate a formatted case brief using the Casebriefr template, save as HTML to `Briefs/` directory.

**Full Process:** See `p-the-docket/_BRIEF.md` for detailed workflow

**Quick Reference:**
1. Research case using web_search/web_fetch
2. Read template from `p-casebriefr/template.html`
3. Fill in all sections with researched content
4. Save to `Briefs/YYYY-MM-DD_Case-Name.html`
5. Update `Briefs/README.md` index
6. Deliver to Elle with usage instructions

**Template Source:** `p-casebriefr/template.html`
**Output Directory:** `/root/.openclaw/workspace/Briefs/`

---

## Template Updates

**When to update:**
- Elle requests design changes
- New sections needed
- Bug fixes in HTML/CSS
- Accessibility improvements

**Process:**
1. Edit `p-casebriefr/template.html`
2. Test locally (open in browser, verify print view)
3. Commit and push to GitHub
4. Verify live at https://casebriefr.com/template.html

**Files to update:**
- `template.html` — Main template
- `index.html` — Landing page (if branding changes)
- `demo.html` — Demo page (if needed)

---

## GitHub Pages Deployment

**Repository:** Reb-Elle-Art/casebriefr
**Branch:** main
**Live URL:** https://casebriefr.com

**Deploy process:**
1. Make edits to files in `/root/.openclaw/workspace/p-casebriefr/`
2. Commit changes: `git add . && git commit -m "description"`
3. Push to GitHub: `git push origin main`
4. Changes go live within 1-2 minutes

**Verify deployment:**
- Check https://casebriefr.com
- Hard refresh (Ctrl+Shift+R) if needed
- Check browser console for errors

---

## Domain Management

**Registrar:** Cloudflare (zoe@r3motely.com)
**Domain:** casebriefr.com
**Auto-renewal:** March 11, 2027 ($10.46/year)

**DNS Records:** (A records pointing to GitHub Pages)
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**Important:** Keep proxy status as "DNS Only" (gray cloud) — GitHub Pages requires this

**Documentation:** `p-casebriefr/DOMAIN.md`

---

## Briefs Directory Maintenance

**Location:** `/root/.openclaw/workspace/Briefs/`

**Organization:**
- `README.md` — Index of all briefs with dates and links
- `YYYY-MM-DD_Case-Name.html` — Individual brief files
- `_TEMPLATE.html` — Copy of blank template (optional)

**Cleanup:**
- Move old/duplicate briefs to trash (never delete permanently)
- Keep naming consistent: `YYYY-MM-DD_Case-Name.html`
- Update index after creating new briefs

---

## Routine Checks

**Monthly:**
- [ ] Verify casebriefr.com loads correctly
- [ ] Check GitHub Pages build status (Settings → Pages)
- [ ] Review Briefs/ directory for duplicates

**Annually (March 11):**
- [ ] Verify domain auto-renewal processed
- [ ] Confirm Cloudflare payment method valid
- [ ] Review domain cost (currently $10.46/year)

---

## Related Files

| File | Purpose |
|------|---------|
| `template.html` | Main case brief template |
| `index.html` | Landing page |
| `demo.html` | Demo/showcase page |
| `_PROJECT.md` | Project overview |
| `DOMAIN.md` | Domain and DNS info |
| `_PROCESS.md` | This file — workflows |
| `README.md` | Public project documentation |

---

## Troubleshooting

**Template not loading:**
- Check GitHub Pages build status
- Verify custom domain DNS records
- Ensure no JavaScript errors in console

**Brief generation failing:**
- Verify `p-casebriefr/template.html` exists and is readable
- Check Briefs/ directory exists
- Ensure sufficient disk space

**Domain issues:**
- Check Cloudflare DNS settings
- Verify A records point to GitHub Pages IPs
- Ensure proxy status is "DNS Only"

---

*Created: March 11, 2026*  
*Last updated: March 11, 2026*

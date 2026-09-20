# PulseGuard™ Governance & Signoff Tracker

> **Interactive Signoff Portal, Audit Verification, and Governance Tracker for PulseGuard™ Zero-Knowledge Health Privacy Platform.**

Hosted live on GitHub Pages with automated GitHub Actions continuous deployment.

---

## 🚀 1-Click Hosting on GitHub Pages

This repository is pre-configured for automated deployment to GitHub Pages.

### Setup Instructions

1. **Create a new repository on GitHub:**
   - Name: `pulseguard_signof` (or any name you prefer)
   - Set visibility to **Public** (for standard free GitHub Pages) or **Private** (if you have GitHub Pro/Enterprise).

2. **Initialize and push the repository from your terminal:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit PulseGuard Signoff Portal & Governance Tracker"
   git branch -M main
   git remote add origin https://github.com/jthatcher87/pulseguard_signof.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub: **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - The pre-configured workflow (`.github/workflows/deploy.yml`) will automatically trigger and publish the live portal at:
     ```
     https://jthatcher87.github.io/pulseguard_signof/
     ```

---

## 📱 Features

- **Progressive Web App (PWA):** Installs as a native standalone app on Android, iOS, macOS, and Windows.
- **Offline Capable:** Full offline runtime via service worker caching.
- **5 Multi-Disciplinary Signoff Gates:**
  1. Cryptographic & Security Signoff (NIST AAL3 / FIPS 140-3)
  2. Clinical & IRB Governance Signoff (45 CFR 46 / CDC Guidelines)
  3. Regulatory & App Store Compliance Signoff (FDA SaMD / Apple 5.1.1 / HIPAA / GDPR)
  4. Engineering & Architecture Signoff (RFC 9458 OHTTP / SQLCipher Triple-Ledger)
  5. Executive Board & Strategic Investor Signoff (Commercial Authorization)
- **Interactive Checklists & Audit Proofs:** Check off deliverables, view instant test vector telemetry, and generate cryptographic proof hashes.
- **Device-Side Storage:** Signoff state persists automatically in browser `localStorage`.
- **Export & Import:** Export state to JSON or formatted GitHub Markdown for issues and PR reviews.
- **GitHub Issue Templates:** Pre-built templates for tracking formal signoffs in GitHub Issues and GitHub Projects.

---

## 📂 Repository Structure

```text
├── .github/
│   ├── ISSUE_TEMPLATE/                # GitHub Issue templates for each signoff phase
│   │   ├── 01_cryptographic_security_signoff.md
│   │   ├── 02_clinical_irb_signoff.md
│   │   ├── 03_regulatory_compliance_signoff.md
│   │   ├── 04_engineering_architecture_signoff.md
│   │   └── 05_board_investor_signoff.md
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions GitHub Pages deployment
├── icons/
│   └── icon.svg                       # High-resolution vector PWA brand icon
├── .nojekyll                          # Bypasses Jekyll processing on GitHub Pages
├── index.html                         # Main responsive PWA interface
├── app.js                             # Interactive signoff controller & state manager
├── manifest.json                      # Web App Manifest for mobile installation
├── sw.js                              # Service worker for 100% offline support
├── SIGNOFF_MATRIX.md                  # Comprehensive governance signoff reference
├── README.md                          # Repository documentation
└── LICENSE                            # MIT License
```

---

## 📜 Direct Document References

All five signoff tracks link directly to the authoritative cloud dossiers:

* **Phase 1:** [PulseGuard Peer Review & Cryptographic Audit Dossier](https://docs.google.com/document/d/1AjCilIzXlyERKvP8ImtRXaLEmhu40AOZHdBDCm7qlIM/edit?usp=drivesdk&ouid=108054609350742252482)
* **Phase 2:** [PulseGuard Clinical Pilot Playbook & IRB Operational Kit](https://docs.google.com/document/d/1oX-2ojohxz0r785cY60UzsqgW2qiMaIk13MpBl0H99M/edit?usp=drivesdk&ouid=108054609350742252482)
* **Phase 3:** [PulseGuard App Store Regulatory & Compliance Dossier](https://docs.google.com/document/d/1rFXjqD5l4J5Lehy_CZpVBCOI_PU_9PtdU6UIh4trzXI/edit?usp=drivesdk&ouid=108054609350742252482)
* **Phase 4:** [PulseGuard Master Technical Architecture Specification](https://docs.google.com/document/d/1-xEajq5uqauRcVVB1DruQn8KrHMfxvRAeD3UN-v9xbE/edit?usp=drivesdk&ouid=108054609350742252482)
* **Phase 5:** [PulseGuard Executive Board Pitch Deck](https://docs.google.com/presentation/d/1bRpxWUfSRicMduuQBa7Wo7HkJnHoEx1Ce_gn8rFxjNQ/edit?usp=drivesdk&ouid=108054609350742252482)

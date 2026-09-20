// PulseGuard™ PWA Mobile-First Governance Controller
// Service Worker Registration for Offline & Standalone PWA Installation
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('[PWA] Service Worker registered:', reg.scope))
      .catch(err => console.error('[PWA] Service Worker registration failed:', err));
  });
}

// Android beforeinstallprompt event handling
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('btn-install-pwa');
  if (btn) {
    btn.style.display = 'inline-flex';
    btn.onclick = () => {
      btn.style.display = 'none';
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('[PWA] User accepted the install prompt');
        }
        deferredPrompt = null;
      });
    };
  }
});

const phasesData = {
  1: {
    title: "Phase 1: Cryptographic & Security Signoff",
    badge: "FIPS 140-3 / NIST AAL3",
    audience: "Cryptographic Engineers & Security Auditors",
    driveFolderUrl: "https://drive.google.com/drive/folders/1gAVUmGxueL6sNMPLMe7veGQrCtJ1LbA0",
    description: "Evaluates mathematical non-convergence of X25519 key agreements, HKDF derivation trees, sub-10ms volatile RAM zeroization (memset_s), and formal threat model boundaries.",
    documents: [
      {
        title: "PulseGuard Peer Review & Cryptographic Audit Dossier",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/1AjCilIzXlyERKvP8ImtRXaLEmhu40AOZHdBDCm7qlIM/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "3-panel reviewer questionnaire, threat models (hostile OS, forensic chip-off, public relay compromise), binary wire schemas, and test vectors."
      },
      {
        title: "PulseGuard Architecture Decision Records (ADRs)",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/1lu_kpPKk0mlNpZSX578UAuE7WEitSuEZqOqqDfqUJqs/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "Architectural directives ADR-001 through ADR-012 establishing human inventorship priority for USPTO patent applications."
      },
      {
        title: "pulseguard-core-v1.0.0.zip",
        type: "C11/OpenSSL Enclave",
        url: "https://drive.google.com/file/d/10FVij1jMEMAQfAfqd5fftQRmBa9CBwVJ/view?usp=drivesdk",
        summary: "C11 static enclave core verifying X25519 ECDH, HKDF-SHA256, AES-256-GCM, and Hashcash PoW (6/6 passing tests)."
      }
    ],
    checklist: [
      "Verified non-converging X25519 token agreement prevents replay and identity tracking.",
      "Audited deterministic in-memory PII shredder (<10ms SLA, 0.028ms measured).",
      "Confirmed zero relational foreign keys between Medical History (Ledger A) and Encounters (Ledger B).",
      "Reviewed Hashcash 20-bit Proof-of-Work and anti-troll replay cache."
    ]
  },

  2: {
    title: "Phase 2: Clinical & IRB Governance Signoff",
    badge: "45 CFR 46 / CDC GUIDELINES",
    audience: "Institutional Review Boards (IRB) & Epidemiologists",
    driveFolderUrl: "https://drive.google.com/drive/folders/1kdWfbHgkCRMBAWrM8qIQeMVtk8stYkCG",
    description: "Validates human subjects protection under 45 CFR 46 Common Rule (Minimal Risk), multi-site clinical pilot protocol (N=6,500), SMART Health Card diagnostic ingestion, and CDC incubation window bounding.",
    documents: [
      {
        title: "PulseGuard Clinical Pilot Deployment Playbook & IRB Operational Kit",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/1oX-2ojohxz0r785cY60UzsqgW2qiMaIk13MpBl0H99M/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "IRB study protocol, e-Consent workflow, multi-cohort trials (Colleges, Municipal Clinics, Venues), and Clinical SOPs (SOP-PG-01 through 04)."
      },
      {
        title: "PulseGuard Clinical Confidentiality & Transmission Logic Guide",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/1npFWrIxglq20wS2Ne1meS6aYZia4HoYaGxQBueY4K1w/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "Biological transmission window bounding, Smart Truncation via negative test anchors, and Syphilis dual-marker serofast adjudication."
      }
    ],
    checklist: [
      "Confirmed Minimal Risk classification under 45 CFR 46.102(j) with zero central data retention.",
      "Audited Syphilis dual-marker logic (Treponemal antibodies strictly block alerts; RPR titer establishes Baseline Serofast Anchor).",
      "Verified Smart Truncation clamps lookback to latest negative panel, preventing false alarms.",
      "Confirmed out-of-band psychological triage integration with Crisis Text Line (741741)."
    ]
  },

  3: {
    title: "Phase 3: Regulatory & App Store Compliance Signoff",
    badge: "FDA SaMD / APPLE 5.1.1 / HIPAA",
    audience: "App Store Review Teams & Healthcare Privacy Counsel",
    driveFolderUrl: "https://drive.google.com/drive/folders/1LJjCSif-I85NUOSowqATIIS2h53jnDag",
    description: "Evaluates legal and platform compliance: FDA 21st Century Cures Act § 3060(a) Non-Device Exemption, Apple Guidelines 5.1.1/5.1.2/1.4.1, HIPAA Conduit Exception (45 CFR 160.103), and GDPR Article 9/25.",
    documents: [
      {
        title: "PulseGuard App Store Regulatory & Compliance Dossier",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/1rFXjqD5l4J5Lehy_CZpVBCOI_PU_9PtdU6UIh4trzXI/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "Exhaustive legal dossier detailing FDA non-device status, Apple 'Data Not Collected' nutrition label, HIPAA conduit exception, and GDPR Article 9 & 25 audit."
      },
      {
        title: "PulseGuard IP Preservation & Patent Roadmap",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/1TXs2NRk-LVY777wVtNYWBdH6FBUTH7NUnpmXzanr3rk/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "Patent conception timeline, trademark clearance search protocols, and software composition analysis."
      }
    ],
    checklist: [
      "FDA SaMD analysis confirmed non-device status under 21st Century Cures Act § 3060(a).",
      "Apple Guideline 5.1.1 certified 'Data Not Collected' across all 14 privacy categories.",
      "Android 12+ Bluetooth scanning declared strictly with neverForLocation (zero GPS tracking).",
      "HIPAA Conduit Exception (45 CFR 160.103) confirmed: zero BAAs required for stateless relay.",
      "GDPR Article 17 instant Right to Erasure implemented via on-device memset_s zeroization."
    ]
  },

  4: {
    title: "Phase 4: Engineering & Architecture Signoff",
    badge: "OHTTP RFC 9458 / SQLCIPHER",
    audience: "Principal Software Engineers & DevOps Leads",
    driveFolderUrl: "https://drive.google.com/drive/folders/1qBcEeogChK-y7DQjpRvPNddhqGYORwUP",
    description: "Reviews the complete production codebase: Flutter mobile client, BIP-39 recovery, Duress PIN Decoy Vault, Stateless OHTTP Relay Server, GCP Confidential Space / AWS Nitro Enclaves, and automated E2E Testnet.",
    documents: [
      {
        title: "PulseGuard Master Technical Architecture Specification",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/1-xEajq5uqauRcVVB1DruQn8KrHMfxvRAeD3UN-v9xbE/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "End-to-end technical blueprint spanning hardware enclaves (SEP/StrongBox), SQLCipher DDL, memory buffers, and blind relay infrastructure."
      },
      {
        title: "PulseGuard Mobile Client State Machine",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/1Sj0doSK9JN539XOq4rPXOyvVFhzsuaMKai2MA8lPxSc/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "Comprehensive state transition matrix across all 7 runtime domains, Ghost Mode 15s grace timer, and tiered monotonic lockout."
      },
      {
        title: "PulseGuard Stateless Relay Architecture Guide",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/10Y9OcJSqvm0wwVyjUuOUuShiFtDwFqHKl6sIza241II/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "RFC 9458 OHTTP gateway proxy, HPKE DHKEM-X25519-HKDF-SHA256, stateless bulletin board, and Redis TTL eviction."
      },
      {
        title: "pulseguard-mobile-v1.6.0.zip",
        type: "Production Mobile Enclave",
        url: "https://drive.google.com/file/d/1UGuaK8QTWKuo2lXj1TJ-OozXIP1tF79s/view?usp=drivesdk",
        summary: "Flutter 3.x codebase with Triple-Ledger SQLCipher, BIP-39 seed phrase recovery, Duress PIN decoy vault, and biometric bridges (11/11 tests pass)."
      },
      {
        title: "pulseguard-relay-v1.1.0.zip",
        type: "Cloud Enclave Containers",
        url: "https://drive.google.com/file/d/1T4gubr8er5ykRYV54ShsWcvgHMRelAyH/view?usp=drivesdk",
        summary: "Hardened Dockerfiles, GCP Confidential Space (AMD SEV-SNP), AWS Nitro Enclaves (VSOCK), and Kubernetes NetworkPolicy manifests."
      },
      {
        title: "pulseguard-simulator-v1.0.0.zip",
        type: "Interactive Web Simulator",
        url: "https://drive.google.com/file/d/10kx5rKWsgc97rG6bboKrSl3fBEZZZLzp/view?usp=drivesdk",
        summary: "Dual-phone visual simulator walking through Alice & Bob handshake, lab ingestion, OHTTP broadcast, and camouflage alert."
      },
      {
        title: "pulseguard-testnet-v1.0.0.zip",
        type: "Full-Stack Testnet Harness",
        url: "https://drive.google.com/file/d/186sN8PFSNfOZh6S-9b0RBOJuFr5BEL58/view?usp=drivesdk",
        summary: "Automated 10-phase end-to-end integration testnet linking native C crypto, mobile SQLCipher ledgers, and live OHTTP relay."
      }
    ],
    checklist: [
      "Executed all 11 automated test suites across mobile, crypto, relay, and testnet with 0 errors.",
      "Verified BIP-39 12-word seed recovery re-derives identical master keys 100% offline.",
      "Tested Duress PIN (999999) mounts isolated Decoy Wellness Journal with zero clinical traces.",
      "Confirmed GCP Confidential Space & AWS Nitro Enclave specifications enforce hardware memory encryption."
    ]
  },

  5: {
    title: "Phase 5: Executive Board & Strategic Investor Signoff",
    badge: "COMMERCIAL & ENTERPRISE",
    audience: "Executive Board & Lead Healthcare Investors",
    driveFolderUrl: "https://drive.google.com/drive/folders/1j2vBe3YaanzNFIsKFQHlXwDiozPm5MBF",
    description: "Evaluates the commercial market positioning, near-zero marginal infrastructure cost scaling model, subpoena immunity legal advantages, and patent portfolio strategy.",
    documents: [
      {
        title: "PulseGuard Executive Board Pitch Deck",
        type: "Google Slides",
        url: "https://docs.google.com/presentation/d/1bRpxWUfSRicMduuQBa7Wo7HkJnHoEx1Ce_gn8rFxjNQ/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "10-slide high-level pitch deck covering the friction-security paradox, zero-cloud data footprint, EHR integration, and public health impact."
      },
      {
        title: "PulseGuard Board-Ready Architectural Design Guide",
        type: "Google Doc",
        url: "https://docs.google.com/document/d/15Wt29aDhMOC9pzSjr8IJ1w7W4lOzzBjEybtl6stzDhk/edit?usp=drivesdk&ouid=108054609350742252482",
        summary: "Executive-tier architectural briefing synthesizing zero-knowledge cryptographic mechanics into enterprise risk and governance language."
      }
    ],
    checklist: [
      "Reviewed business model: near-zero marginal cost via client-side edge computation.",
      "Confirmed corporate immunity to discovery subpoenas due to zero server-side data retention.",
      "Evaluated healthcare payer ROI driven by early transmission interruption and reduced tertiary treatment costs.",
      "Approved general public release authorization."
    ]
  }
};

let activePhase = 1;

// Device-Side Data Retention Engine (Persistent Store)
const STORAGE_KEY = "pulseguard_android_pwa_data_v1";

function getPersistentData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { signoffs: {}, notes: {}, checklistStates: {} };
    return JSON.parse(raw);
  } catch (e) {
    return { signoffs: {}, notes: {}, checklistStates: {} };
  }
}

function savePersistentData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    updateUIProgress();
  } catch (e) {
    console.error("Storage save failed:", e);
  }
}

function updateUIProgress() {
  const store = getPersistentData();
  const completedCount = Object.keys(store.signoffs).length;
  const percent = Math.round((completedCount / 5) * 100);

  const percentEl = document.getElementById("progress-percent");
  const barEl = document.getElementById("progress-bar");
  if (percentEl) percentEl.innerText = `${percent}%`;
  if (barEl) barEl.style.width = `${percent}%`;

  for (let i = 1; i <= 5; i++) {
    const pill = document.getElementById(`pill-phase-${i}`);
    if (pill) {
      pill.className = store.signoffs[i]
        ? "w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"
        : "w-2 h-2 rounded-full bg-gray-600";
    }
  }

  const footerPhaseName = document.getElementById("footer-phase-name");
  if (footerPhaseName) {
    footerPhaseName.innerText = phasesData[activePhase].title.split(':')[0];
  }
}

function selectPhase(phaseId) {
  activePhase = phaseId;

  for (let i = 1; i <= 5; i++) {
    const tab = document.getElementById(`tab-phase-${i}`);
    if (tab) {
      if (i === phaseId) {
        tab.className = "shrink-0 px-3 py-2 rounded-xl text-xs font-medium transition flex items-center space-x-1.5 bg-cyan-950/60 text-cyan-300 border border-cyan-700 shadow-md shadow-cyan-950/50";
      } else {
        tab.className = "shrink-0 px-3 py-2 rounded-xl text-xs font-medium transition flex items-center space-x-1.5 text-gray-400 hover:bg-gray-800/60 border border-transparent";
      }
    }
  }

  renderPhaseContent();
}

function prevPhase() {
  if (activePhase > 1) selectPhase(activePhase - 1);
}

function nextPhase() {
  if (activePhase < 5) selectPhase(activePhase + 1);
}

function onChecklistToggled(phaseId, idx, isChecked) {
  const store = getPersistentData();
  if (!store.checklistStates[phaseId]) store.checklistStates[phaseId] = {};
  store.checklistStates[phaseId][idx] = isChecked;
  savePersistentData(store);
}

function onNotesChanged(phaseId, notesText) {
  const store = getPersistentData();
  store.notes[phaseId] = notesText;
  savePersistentData(store);
  
  const autoSaveBadge = document.getElementById("notes-autosave-badge");
  if (autoSaveBadge) {
    autoSaveBadge.innerText = "Saved to Device";
    autoSaveBadge.className = "mono text-[10px] text-emerald-400 transition";
    setTimeout(() => {
      autoSaveBadge.innerText = "Auto-Saved";
      autoSaveBadge.className = "mono text-[10px] text-gray-500 transition";
    }, 1500);
  }
}

function renderPhaseContent() {
  const data = phasesData[activePhase];
  const container = document.getElementById("phase-content-container");
  const store = getPersistentData();
  const isSigned = !!store.signoffs[activePhase];
  const currentNotes = store.notes[activePhase] || "";
  const currentChecklist = store.checklistStates[activePhase] || {};

  let docsHtml = data.documents.map(doc => `
    <div class="p-4 rounded-xl bg-[#0e1320] border border-gray-800/90 flex flex-col justify-between space-y-3">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[9px] mono px-2 py-0.5 rounded bg-gray-800 text-cyan-400 border border-gray-700">${doc.type}</span>
          <span class="text-[9px] text-gray-500 mono">VERIFIED</span>
        </div>
        <h4 class="font-bold text-xs sm:text-sm text-white mb-1">${doc.title}</h4>
        <p class="text-[11px] text-gray-400 leading-relaxed">${doc.summary}</p>
      </div>
      <a href="${doc.url}" target="_blank" class="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-gray-900/90 hover:bg-cyan-500 hover:text-black text-cyan-300 text-[11px] font-semibold border border-gray-800 transition">
        <span>Open in Google Drive</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </a>
    </div>
  `).join("");

  let checklistHtml = data.checklist.map((item, idx) => {
    const isChecked = isSigned || currentChecklist[idx] === true;
    return `
      <label class="flex items-start space-x-3 p-3 rounded-xl bg-[#0b0f19] border border-gray-800/80 cursor-pointer hover:bg-gray-800/30 transition">
        <input type="checkbox" id="chk-${activePhase}-${idx}" 
               onchange="onChecklistToggled(${activePhase}, ${idx}, this.checked)"
               class="mt-0.5 rounded border-gray-700 text-cyan-500 focus:ring-cyan-400 bg-gray-900 w-4 h-4" 
               ${isChecked ? 'checked' : ''} ${isSigned ? 'disabled' : ''}>
        <span class="text-xs text-gray-300 leading-relaxed select-none">${item}</span>
      </label>
    `;
  }).join("");

  let signoffStatusBlock = "";
  if (isSigned) {
    const s = store.signoffs[activePhase];
    signoffStatusBlock = `
      <div class="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/80 space-y-3 shadow-lg">
        <div class="flex items-center space-x-2 text-emerald-400 font-bold text-xs sm:text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Phase Formally Approved & Signed Off</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
          <div><span class="text-gray-500">Signatory:</span> <span class="text-white font-semibold">${s.name}</span></div>
          <div><span class="text-gray-500">Role:</span> <span class="text-white font-semibold">${s.role}</span></div>
          <div><span class="text-gray-500">Time:</span> <span class="mono text-gray-300">${s.timestamp}</span></div>
        </div>
        <div class="text-[10px] mono text-gray-400 break-all pt-1">Receipt Hash: <span class="text-emerald-400">${s.signatureHash}</span></div>
      </div>
    `;
  } else {
    signoffStatusBlock = `
      <div class="p-5 rounded-2xl bg-[#0e1320] border border-gray-800 space-y-4 shadow-xl">
        <div>
          <h4 class="font-bold text-xs sm:text-sm text-white">Reviewer Digital Attestation</h4>
          <p class="text-[11px] text-gray-400 mt-0.5">Confirm verification criteria above, enter credentials, and record device-side signature.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Reviewer Full Name</label>
            <input type="text" id="signer-name" placeholder="e.g., Josh Thatcher" class="w-full px-3 py-2 rounded-xl bg-[#0b0f19] border border-gray-800 text-xs text-white focus:outline-none focus:border-cyan-500">
          </div>
          <div>
            <label class="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Reviewer Title / Affiliation</label>
            <input type="text" id="signer-role" placeholder="e.g., Principal Security Architect" class="w-full px-3 py-2 rounded-xl bg-[#0b0f19] border border-gray-800 text-xs text-white focus:outline-none focus:border-cyan-500">
          </div>
        </div>

        <div class="pt-1">
          <button onclick="submitPhaseSignoff()" class="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-black font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            <span>Record Formal Signoff for ${data.title.split(':')[0]}</span>
          </button>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <!-- Phase Header -->
    <div class="space-y-2">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center space-x-2">
          <span class="text-[10px] mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold">${data.badge}</span>
          <span class="text-[11px] text-gray-400">Target: <strong class="text-gray-200">${data.audience}</strong></span>
        </div>
        <a href="${data.driveFolderUrl}" target="_blank" class="px-2.5 py-1 rounded-lg bg-[#0e1320] hover:bg-gray-800 text-[11px] font-semibold text-cyan-400 border border-cyan-900/60 flex items-center gap-1 transition">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          <span>Drive Folder</span>
        </a>
      </div>
      <h2 class="text-lg sm:text-xl font-extrabold text-white tracking-tight">${data.title}</h2>
      <p class="text-xs text-gray-300 leading-relaxed">${data.description}</p>
    </div>

    <!-- Document Dossier Section -->
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mono">Governing Artifacts (${data.documents.length})</h3>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${docsHtml}
      </div>
    </div>

    <!-- Verification Checklist Section -->
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h3 class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mono">Required Verification Criteria</h3>
        <span class="text-[10px] text-gray-500">Auto-saved to device</span>
      </div>
      <div class="space-y-2">
        ${checklistHtml}
      </div>
    </div>

    <!-- Reviewer Device Notes Section (Saved per phase) -->
    <div class="space-y-2 p-4 rounded-xl bg-[#0b0f19] border border-gray-800/90">
      <div class="flex items-center justify-between">
        <label class="text-[11px] font-bold text-gray-300 uppercase tracking-wider mono flex items-center gap-1.5">
          <span>📝 Reviewer Observations & Notes</span>
        </label>
        <span id="notes-autosave-badge" class="mono text-[10px] text-gray-500">Auto-Saved</span>
      </div>
      <textarea id="phase-notes-textarea" 
                rows="3" 
                placeholder="Enter private review findings, questions, or risk assessments for this phase (stored persistently on your Android device)..." 
                oninput="onNotesChanged(${activePhase}, this.value)"
                class="w-full p-3 rounded-xl bg-[#06080e] border border-gray-800 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500 leading-relaxed resize-y">${currentNotes}</textarea>
    </div>

    <!-- Signoff Action Box -->
    <div class="pt-2">
      ${signoffStatusBlock}
    </div>
  `;
}

function submitPhaseSignoff() {
  const nameInput = document.getElementById("signer-name");
  const roleInput = document.getElementById("signer-role");

  if (!nameInput || !roleInput) return;
  const name = nameInput.value.trim();
  const role = roleInput.value.trim();

  if (!name || !role) {
    alert("Please provide your Full Name and Role/Title to authorize this signoff.");
    return;
  }

  const data = phasesData[activePhase];
  const store = getPersistentData();
  const currentChecklist = store.checklistStates[activePhase] || {};

  for (let i = 0; i < data.checklist.length; i++) {
    if (currentChecklist[i] !== true) {
      alert("Please confirm and check all verification criteria before signing off.");
      return;
    }
  }

  // Generate digital receipt
  const timestamp = new Date().toISOString();
  const rawMsg = `${name}:${role}:${activePhase}:${timestamp}:PulseGuardPWA`;
  let hash = 0;
  for (let i = 0; i < rawMsg.length; i++) {
    hash = ((hash << 5) - hash) + rawMsg.charCodeAt(i);
    hash |= 0;
  }
  const hexHash = "SIG-ANDROID-PG-" + Math.abs(hash).toString(16).toUpperCase().padStart(8, '0') + "-" + Date.now().toString(16).toUpperCase();

  store.signoffs[activePhase] = {
    name,
    role,
    timestamp,
    signatureHash: hexHash,
  };

  savePersistentData(store);
  renderPhaseContent();

  if (activePhase < 5) {
    setTimeout(() => {
      selectPhase(activePhase + 1);
    }, 500);
  }
}

function openBackupModal() {
  const modal = document.getElementById("backup-modal");
  const recordsCount = document.getElementById("modal-records-count");
  const store = getPersistentData();

  const totalItems = Object.keys(store.signoffs).length + 
                     Object.keys(store.notes).length + 
                     Object.values(store.checklistStates).reduce((acc, cur) => acc + Object.keys(cur).length, 0);

  if (recordsCount) recordsCount.innerText = `${totalItems} items cached`;
  if (modal) modal.style.display = "flex";
}

function closeBackupModal() {
  const modal = document.getElementById("backup-modal");
  if (modal) modal.style.display = "none";
}

function exportDeviceBackup() {
  const store = getPersistentData();
  const payload = {
    app: "PulseGuard™ Standalone Android PWA",
    version: "1.0.1",
    exported_at: new Date().toISOString(),
    data: store
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `PulseGuard_Android_Device_Backup_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importDeviceBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.data) {
        savePersistentData(parsed.data);
        alert("Device data successfully imported and restored!");
        closeBackupModal();
        renderPhaseContent();
      } else {
        alert("Invalid backup file format.");
      }
    } catch (err) {
      alert("Error parsing JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function resetDeviceStorage() {
  if (confirm("Reset all device-side signoffs, notes, and checklists? This cannot be undone.")) {
    localStorage.removeItem(STORAGE_KEY);
    closeBackupModal();
    updateUIProgress();
    renderPhaseContent();
  }
}

// Initial Initialization
updateUIProgress();
selectPhase(1);

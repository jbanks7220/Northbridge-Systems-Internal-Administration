# Synthetic Admin Dashboard Honeypot

A **front-end admin dashboard honeypot** designed for **scam and attacker infrastructure analysis**.  
This project simulates a realistic internal administration panel backed by a lightweight reverse proxy, intended to observe attacker behavior, interaction patterns, and data-harvesting attempts in a controlled, non-production environment.

> All data is **synthetic**, regenerated client-side, and contains **no real credentials, identities, or payment instruments**.

## Live Demo

https://github.com/user-attachments/assets/d13bb799-c64c-42eb-9715-bcb71d8f3f18

---

## Video Demo

https://github.com/user-attachments/assets/a684353b-2c24-4ec9-9cf3-0c8df0c98f66

## Overview

This project presents a convincing internal administration interface commonly targeted during phishing campaigns, credential harvesting, and scam operations. The application is intentionally **read-only**, **non-functional**, and **instrumented for observation**, making it suitable for:

- Scam infrastructure research
- Attacker UX interaction analysis
- Honeypot UI realism testing
- Security portfolio demonstration

The dashboard unlocks after repeated failed login attempts to mirror common attacker behavior assumptions while avoiding real authentication logic.

---

## Key Features

### Simulated Admin Environment
- Branded internal administration portal
- Multi-panel navigation mimicking enterprise dashboards
- Realistic visual hierarchy and terminology

### Synthetic Data Generation
- Deterministic pseudo-random data (session-seeded)
- Fake users, employees, financials, clients, and tokens
- Regenerates per session — no persistent storage

### High-Value Lure Panels
- **User Accounts** (roles, status)
- **Employees** (departments, IDs)
- **Financial Overview** (10-year quarterly data + projections)
- **Payment Tokens** (masked PANs with simulated reveal)
- **System Logs** (continuous synthetic log stream)
- **Client Export** (downloadable synthetic PDF)

### Client-Side Charts & Reports
- Custom HTML5 `<canvas>` bar and line charts
- jsPDF-generated client export for realism
- Visual projection data without backend dependency

---

## Architecture

```
[ Internet ]
|
[ Reverse Proxy (Node.js) ]
|
[ Static Honeypot Dashboard ]
```


### Frontend
- Pure HTML, CSS, and vanilla JavaScript
- No frameworks, no external state
- Designed to load fast and look credible

### Proxy Layer
- Lightweight Node.js reverse proxy using `http-proxy`
- Enables traffic forwarding, logging, and future instrumentation
- Intended for deployment behind cloud/VPS or residential IPs

---

## Files

```

---

## Usage (Research / Lab Environment)

### 1. Serve the Dashboard
Host `index.html` on any static web server (nginx, Apache, S3, etc.).

### 2. Run the Proxy
```bash
npm install
npm start

```

The proxy listens on port `10000` by default and forwards traffic to the configured internal target.

---

## Security & Ethics Notice

This project is intended **solely for defensive security research and education**.

- No real data is collected  
- No real authentication is performed  
- All displayed information is synthetic  
- Payment numbers are randomly generated and non-functional  
- No backend storage or exfiltration logic exists  

Do **not** deploy this system in environments where deception of legitimate users could occur.  
Use only in controlled research, lab, or portfolio contexts.

---

## Why This Project Exists

Attackers increasingly rely on **visual trust signals** rather than technical sophistication.  
This honeypot focuses on **UI-level realism**, exploring questions like:

- What dashboard elements attract the most interaction?  
- How do attackers explore internal systems?  
- Which data panels trigger deeper engagement?  
- How effective are visual cues versus real functionality?  

---

## Potential Extensions

- Request and interaction logging  
- Session fingerprinting  
- Behavioral heatmaps  
- Canary tokens  
- Backend sinkhole endpoints  
- Multi-language variants  
- Campaign-specific theming  

---

## Disclaimer

This repository does **not** facilitate fraud, phishing, or illegal activity.  
It is a **defensive simulation** designed to better understand and mitigate malicious behavior.

---

## Author:  

**Jamir Banks**

Built as part of a personal security research portfolio focused on:

- Threat modeling  
- Scam infrastructure analysis  
- Honeypot design  
- Attacker behavior research  

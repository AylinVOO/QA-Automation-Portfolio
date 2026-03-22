![End-to-End Security Suite](https://github.com/AylinVOO/QA-Automation-Portfolio/actions/workflows/main.yml/badge.svg)

# 🛡️ OWASP Juice Shop: Security Automation Suite

I built this automated suite to test the **OWASP Juice Shop** for common vulnerabilities. It uses Cypress for E2E testing and Jira to manage the bug-tracking process.

## ⚙️ Prerequisites
* **Node.js** (v18 or higher)
* **npm** (included with Node.js)

## 🚀 Quick Start
1. Clone the repo: `git clone https://github.com/AylinVOO/QA-Automation-Portfolio.git`
2. Install dependencies: `npm install`
3. Launch Cypress: `npx cypress open`

## 📂 Project Structure
* `sec_juice_shop_xss.cy.js`: Automated XSS security test script.
* `sec_juice_shop_access.cy.js`: Automated Access Control vulnerability test.
* `sec_juice_shop_api.cy.js`: Automated API suite for Registration and JWT Authentication.
* `.github/workflows/main.yml`: CI/CD pipeline configuration (GitHub Actions).
* `jira/`: Documentation of bug reports and workflow tracking.

---

## 🕵️‍♂️ Automated Security Test Cases

### 1. Reflected XSS (Search Bar)
- Clears UI welcome banners and cookie notifications.
- Injects `<iframe src="javascript:alert('xss')">` into the search bar.
- Verifies the injection via the reflected URL string.

### 2. Broken Access Control (Score Board)
- Navigates directly to the restricted `/#/score-board` path as a guest.
- Handles dynamic loading and bypasses blocking overlays (banners).
- Confirms the page content is accessible in the DOM without admin login.

### 3. API Security & Auth
- Generates unique user credentials dynamically for clean test execution.
- Validates account creation and login via **RESTful POST** requests.
- Captures **JWT Tokens** to perform authorized product searches via headers.
  
---

## 📸 Project Evidence

### Phase 1: Planning & Manual Analysis
Before writing any code, I analyzed the application to find vulnerabilities and tracked them to manage the testing process.

* **Agile Bug Tracking (Jira):** I used a Jira board to keep my findings organized. It helped me track each bug from the moment I found it until I finished the automation script.
<img width="900" alt="Jira Board" src="https://github.com/user-attachments/assets/2035c9d9-8931-436d-8afe-2df9aa11625a" />

* **Manual Exploit (XSS):** Before coding, I manually confirmed the search bar was vulnerable. This screenshot shows the alert box popping up—my "Proof of Concept."
<img width="900" alt="XSS Alert Proof" src="https://github.com/user-attachments/assets/b2d5da05-d6d7-406a-9040-3563d78a641f" />

---

### Phase 2: Automated Validation (Cypress)
Once I understood the vulnerabilities, I wrote these Cypress scripts to automate the security checks.

* **XSS Automation:** Cypress injecting the payload and checking the URL to make sure the vulnerability is repeatable. 
<img width="900" alt="Cypress XSS Success" src="https://github.com/user-attachments/assets/3645c8e6-52d8-4c81-8aff-3c579b6eeb89" />

* **Access Control:** This test proves a guest can bypass the UI and hit the Score Board directly. I added custom logic to handle the pop-ups and loading delays.
<img width="900" alt="Access Control Pass" src="https://github.com/user-attachments/assets/5f879374-d749-4f67-8c9b-870e2d0b0c2b" />

---

### Phase 3: Backend & API Automation
After securing the UI, I moved to the API layer to test authentication and data integrity.

* **JWT & Auth Flow:** This test validates security tokens and authorized headers, bypassing the browser to interact directly with the server.
<img width="900" alt="API Automation Success" src="https://github.com/user-attachments/assets/84abbf96-469e-41eb-98ed-d54f16093e9d" />
  
---

## ⚙️ CI/CD Pipeline Implementation
To ensure the suite remains reliable in a cloud environment, I optimized the GitHub Actions workflow to handle real-world hurdles:

* **Automated Retries:** I added a retry strategy to bypass `503 Service Unavailable` errors when the demo site is "waking up."
* **Environment Health Checks:** I implemented a **scheduled hourly trigger** to automatically validate the demo site's status and keep the project badge current.
* **Latency Mitigation:** I adjusted the `pageLoadTimeout` to **120s** and command timeouts to **15s** to handle the public server's "cold starts."
* **Headless Execution:** I switched to **Chrome Headless** to keep the pipeline fast, cutting total execution time to just **10 seconds**.
* **Security Bypass:** I explicitly configured `chromeWebSecurity: false` so Cypress could perform **XSS injections** without being blocked by the browser.

## 🛠️ Tech Stack
**JavaScript | Cypress | GitHub Actions | Jira | OWASP**

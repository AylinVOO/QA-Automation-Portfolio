# 🛡️ OWASP Juice Shop: Security Automation Suite

Automated security test suite for the **OWASP Juice Shop**. This project demonstrates E2E testing for XSS vulnerabilities using Cypress and professional bug tracking via Jira.

## ⚙️ Prerequisites
* **Node.js** (v18 or higher)
* **npm** (included with Node.js)

## 🚀 Quick Start
1. Clone the repo: `git clone https://github.com/AylinVOO/QA-Automation-Portfolio.git`
2. Install dependencies: `npm install`
3. Launch Cypress: `npx cypress open`

## 📂 Project Structure
* `cypress/e2e/sec_juice_shop_xss.cy.js`: Automated XSS security test script.
* `jira/`: Documentation of bug reports and workflow tracking.

## 🕵️‍♂️ Test Case: Reflected XSS
The test automates the following security validation flow:
- Clears UI welcome banners and cookie notifications.
- Injects `<iframe src="javascript:alert('xss')">` into the search bar.
- Verifies the injection via the reflected URL string.

## 📸 Evidence

### 1. Agile Bug Tracking (Jira)
<img width="1948" alt="Jira Board" src="https://github.com/user-attachments/assets/2035c9d9-8931-436d-8afe-2df9aa11625a" />

### 2. Manual XSS Exploitation
<img width="1024" alt="XSS Alert Proof" src="https://github.com/user-attachments/assets/b2d5da05-d6d7-406a-9040-3563d78a641f" />

### 3. Automated Test Execution (Cypress)
<img width="898" height="1560" alt="Cypress Success" src="https://github.com/user-attachments/assets/3645c8e6-52d8-4c81-8aff-3c579b6eeb89" />



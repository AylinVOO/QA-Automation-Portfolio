const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.owasp-juice.shop',
    // Disabling web security to allow Cypress to simulate XSS attacks 
    // and bypass cross-origin restrictions on the demo site.
    chromeWebSecurity: false,
    
    // Personal Note: I chose to keep .cy.js files in the root for 
    // better visibility in this specific security portfolio.
    specPattern: "*.cy.js",
    
    // Framework Optimization: 
    // Keeping it lightweight by removing the default support folder.
    supportFile: false,
    // Resilience: Handling Heroku's 503 "cold starts"
    retries: {
      runMode: 3,
      openMode: 0
    },
    
    // Giving the server more time to "wake up" and respond
    defaultCommandTimeout: 15000, // Wait 15s for elements to appear
    pageLoadTimeout: 120000,      // Wait up to 2 minutes for the initial load

    // Automation Strategy:
    // Capturing failure states for remote debugging, but 
    // disabling video to keep the CI/CD pipeline fast.
    screenshotOnRunFailure: true,
    video: false, 

    setupNodeEvents(on, config) {
      // Placeholder for future security report integration.
    },
  },
});

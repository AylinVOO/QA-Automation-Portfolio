const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://juice-shop.herokuapp.com', 
    
    // Personal Note: I chose to keep .cy.js files in the root for 
    // better visibility in this specific security portfolio.
    specPattern: "*.cy.js",
    
    // Framework Optimization: 
    // Keeping it lightweight by removing the default support folder.
    supportFile: false,

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

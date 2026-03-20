describe('Security Automation: XSS Attack', () => {
  it('detects reflected XSS in the search bar', () => {
    
    // 1. Visit the target application
    cy.visit('/')

    // 2. Clear UI obstacles (Welcome Banner & Cookies)
    cy.get('[aria-label="Close Welcome Banner"]').click()
    cy.get('.cc-btn').click()

    // 3. Set up a listener to catch and validate the browser alert
    cy.on('window:alert', (t) => {
      expect(t).to.contains('xss');
    })

    // 4. Execute the XSS Injection via the Search field
    // Added a 50ms delay to simulate human typing for stability
    cy.get('#searchQuery').click()
    cy.get('#searchQuery').type('<iframe src="javascript:alert(`xss`)">{enter}', { delay: 50 })

    // 5. Assertion: Verify the payload is reflected in the URL
    // This confirms the vulnerability exists even if the alert is dismissed
    cy.url().should('include', 'javascript:alert')
  })
})

describe('Security: Access Control Testing', () => {
  
  it('Exposes the hidden Score Board directory to unauthenticated users', () => {
    // Navigate straight to the scoreboard to check for unauthorized access
    cy.visit('/#/score-board')

    // Close pop-ups if they appear so they don't block the test
    cy.get('body').then(($body) => {
      if ($body.find('[aria-label="Close Welcome Banner"]').length > 0) {
        cy.get('[aria-label="Close Welcome Banner"]').click({force: true})
      }
      if ($body.find('.cc-btn').length > 0) {
        cy.get('.cc-btn').click({force: true})
      }
    })

    // Verify the Score Board content actually loads in the DOM
    // Increased timeout to handle slow server response
    cy.contains('Score Board', { timeout: 10000 }).should('exist')
    
    // Confirm the URL reflects the restricted path
    cy.url().should('include', '/score-board')
  })

})

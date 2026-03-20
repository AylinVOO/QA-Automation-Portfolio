describe('Juice Shop API Testing Suite', () => {
  
  // Generate unique credentials for test environment
  const uniqueEmail = `qa_engineer_${Date.now()}@test.com`;
  const password = 'Password123!';
  let authToken = ""; // Store token to share state between tests

  it('TC01 - User Registration', () => {
    cy.request({
      method: 'POST',
      url: '/api/Users/',
      body: {
        "email": uniqueEmail,
        "password": password,
        "passwordRepeat": password,
        "SecurityQuestionId": 1,
        "securityQuestion": { "id": 1, "answer": "testing" }
      }
    }).then((response) => {
      // Validate '201 Created' response from server
      expect(response.status).to.eq(201);
      cy.log('User created successfully');
    });
  });

  it('TC02 - Authentication', () => {
    cy.request({
      method: 'POST',
      url: '/rest/user/login',
      body: { 
        "email": uniqueEmail, 
        "password": password 
      }
    }).then((response) => {
      // Confirm successful login (Status 200)
      expect(response.status).to.eq(200);
      // Capture and store the JWT token for authorized requests
      authToken = response.body.authentication.token; 
    });
  });

  it('TC03 - Authenticated Search', () => {
    cy.request({
      method: 'GET',
      url: '/rest/products/search?q=apple',
      headers: { 
        // Provide Bearer token in headers to simulate authorized session
        'Authorization': `Bearer ${authToken}` 
      }
    }).then((response) => {
      // Validate that product data is returned for authenticated users
      expect(response.status).to.eq(200);
      expect(response.body.data[0]).to.have.property('name');
    });
  });

});

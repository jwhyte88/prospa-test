describe("Sign in form", () => {
  
  before(() => {
    cy.visit("/sign-in");
  });

  describe("Email field", () => {
    it("should have an input value of 'Your email address' ", () => {
      cy.get('input[name="email"]').should('have.attr', 'placeholder', 'Email address')
    });

    it("should display error messaging if empty when the form is submitted", () => {
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Please enter your email address').should("be.visible");
    });

    it("should display error messaging if the email entered is not a valid email address", () => {
      cy.get('input[name="email"]').clear().type('larrydavid.com')
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Please enter a valid email address').should("be.visible");
    });

    it("should handle text inputs", () => {
      cy.get('input[name="email"]').clear().type('larry@david.com')
      cy.get('input[name="email"]').should('have.value', 'larry@david.com')
    });
  });

  describe("Password field", () => {
    it("should have an input value of 'Enter password' ", () => {
      cy.get('input[name="password"]').should('have.attr', 'placeholder', 'Enter password')
    });

    it("should display error messaging if empty when the form is submitted", () => {
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Please enter your password').should("be.visible");
    });

    it("should handle text inputs", () => {
      cy.get('input[name="password"]').clear().type('12345678')
      cy.get('input[name="password"]').should('have.value', '12345678')
    });
  });  

  describe("Successfully submitting the form", () => {
    it("should display a success message' ", () => {
      cy.get('input[name="email"]').clear().type('larry@david.com')
      cy.get('input[name="password"]').clear().type('12345678')
      cy.get("button.btn.btn--pink").click()
      cy.get(".hello-user").contains('Hello, larry@david.com!').should("be.visible");
    });
  });
});
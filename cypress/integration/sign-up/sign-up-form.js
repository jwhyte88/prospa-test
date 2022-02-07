describe("Sign up form", () => {
  
  before(() => {
    cy.visit("/sign-up");
  });

  describe("First name field", () => {
    it("should have an input value of 'Your name' ", () => {
      cy.get('input[name="firstname"]').should('have.attr', 'placeholder', 'First name')
    });

    it("should display error messaging if empty when the form is submitted", () => {
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('First name is required').should("be.visible");
    });

    it("should display error messaging if the first name entered is longer than 30 characters", () => {
      cy.get('input[name="firstname"]').type('AnExampleLongNameOverThirtyCharacters')
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('First name cannot be more than 30 characters').should("be.visible");
    });

    it("should handle text inputs", () => {
      cy.get('input[name="firstname"]').clear().type('Larry')
      cy.get('input[name="firstname"]').should('have.value', 'Larry')
    });
  });

  describe("Last name field", () => {
    it("should have an input value of 'Your name' ", () => {
      cy.get('input[name="lastname"]').should('have.attr', 'placeholder', 'Last name')
    });

    it("should display error messaging if empty when the form is submitted", () => {
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Last name is required').should("be.visible");
    });

    it("should display error messaging if the last name entered is longer than 30 characters", () => {
      cy.get('input[name="lastname"]').type('AnExampleLongNameOverThirtyCharacters')
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Last name cannot be more than 30 characters').should("be.visible");
    });

    it("should handle text inputs", () => {
      cy.get('input[name="lastname"]').clear().type('David')
      cy.get('input[name="lastname"]').should('have.value', 'David')
    });
  });

  describe("Country code field", () => {
    it("should be able to change country code number inputs", () => {
      cy.get('.form-row__countrycode select').select('+44')
      cy.get('.form-row__countrycode select').should('have.value', '+44')
    });
  });

  describe("Mobile field", () => {
    it("should have an input value of 'Mobile number' ", () => {
      cy.get('input[name="mobile"]').should('have.attr', 'placeholder', 'Mobile number')
    });

    it("should display error messaging if empty when the form is submitted", () => {
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Mobile number is required').should("be.visible");
    });

    it("should display error messaging if the mobile number entered is shorter than 6 numbers", () => {
      cy.get('input[name="mobile"]').type('12345')
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Mobile number cannot be less than 6 numbers').should("be.visible");
    });

    it("should display error messaging if the mobile number entered is longer than 12 numbers", () => {
      cy.get('input[name="mobile"]').clear().type('1234567891011')
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Mobile number cannot be more than 12 numbers').should("be.visible");
    });

    it("should handle number inputs", () => {
      cy.get('input[name="mobile"]').clear().type('1234567')
      cy.get('input[name="mobile"]').should('have.value', '1234567')
    });
  });

  describe("Email field", () => {
    it("should have an input value of 'Your email address' ", () => {
      cy.get('input[name="email"]').should('have.attr', 'placeholder', 'Email address')
    });

    it("should display error messaging if empty when the form is submitted", () => {
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Email address is required').should("be.visible");
    });

    it("should display error messaging if the email entered is longer than 255 characters", () => {
      cy.get('input[name="email"]').type('AnExampleEmailAddressOverTwoHundredAndFiftyFiveCharactersLongThatKeepsGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoingAndGoing@AnIncrediblyLongEmailDomainSoLongThisExampleAlmostLooksSilly.com')
      cy.get("button.btn.btn--pink").click()
      cy.get(".error-label").contains('Email address cannot be more than 255 characters').should("be.visible");
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

  describe("Successfully submitting the form", () => {
    it("should display a success message' ", () => {
      cy.get('input[name="firstname"]').clear().type('Larry')
      cy.get('input[name="lastname"]').clear().type('David')
      cy.get('input[name="mobile"]').clear().type('1234567')
      cy.get('input[name="email"]').clear().type('larry@david.com')
      cy.get("button.btn.btn--pink").click()
      cy.get(".hello-user").contains('Hello, Larry').should("be.visible");
    });
  });
});
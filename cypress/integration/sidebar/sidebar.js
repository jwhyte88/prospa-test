describe("Sidebar component", () => {
  
  let breakpoints;

  before(() => {
    cy.visit("/sign-up");
    cy.fixture('breakpoints.json').then(($breakpoints) => breakpoints = $breakpoints);
  });

  it("should be hidden for mobile users", () => {
    cy.viewport(breakpoints.sm.width, breakpoints.sm.length)
    cy.get(".sidebar").should("not.be.visible");
  });

  it("should be hidden for tablet users", () => {
    cy.viewport(breakpoints.md.width, breakpoints.md.length)
    cy.get(".sidebar").should("not.be.visible");
  });

  it("should display for views larger than tablet", () => {
    cy.viewport(breakpoints.lg.width, breakpoints.lg.length)
    cy.get(".sidebar").should("be.visible");
  });
});
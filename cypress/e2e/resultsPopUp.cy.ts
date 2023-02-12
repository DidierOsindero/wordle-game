describe("results pop-up", () => {
  it("loses the game", () => {
    cy.intercept("http://localhost:5173").as("getPage");
    cy.visit("http://localhost:5173");
    cy.wait("@getPage");
    cy.get("body")
      .click()
      .type("aaaab{enter}")
      .type("aaaac{enter}")
      .type("aaaad{enter}")
      .type("aaaae{enter}")
      .type("aaaaf{enter}")
      .type("aaaag{enter}");
    cy.wait(2000);
    cy.get(".inner-modal").should("be.visible");
    cy.get(".inner-modal").contains("Better luck next time!");
  });
});

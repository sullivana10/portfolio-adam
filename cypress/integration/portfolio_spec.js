describe("portfolio", () => {
  it("user can open projects", () => {
    // visit page
    cy.visit("localhost:3000");
    // toggle dark mode
    cy.findByRole("checkbox").check();
    // open menu and navigate to projects
    cy.get("div.hamburger").click();
    cy.findByRole("link", { name: /projects/i }).click();
    // scroll through projects
    cy.get("img.arrow.right").click();
    cy.get("img.arrow.right").click();
    // open project
    cy.get("img.project").last().click();
    // navigate to contact
    cy.get("div.hamburger").click();
    cy.findByRole("link", { name: /contact/i }).click();
    // fill out contact form
    cy.get("input.name").type("name");
    cy.get("input.email").type("email@gmail.com");
    cy.get("input.subject").type("subject");
    cy.get("textarea.message").type("message");
    // send message
    cy.findByRole("button", { name: /send/i }).click();
  });
});

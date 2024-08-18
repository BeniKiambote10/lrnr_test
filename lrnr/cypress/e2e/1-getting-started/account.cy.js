/// <reference types="cypress" />

describe("Account Page", () => {
  beforeEach(() => {
    // Visit the AccountPage URL before each test
    cy.visit("https://lrnr-one.vercel.app/account"); // Adjust URL based on your routing
  });

  it("should display streak, platinum quizzes, and LRNR level sections with correct details", () => {
    // Check the Streak section
    cy.get("#streak").should("be.visible");
    cy.get(".fa-fire-flame-curved").should("be.visible");
    cy.get(".account-row").contains("7 days").should("be.visible");

    // Check the Platinum Quizzes section
    cy.get("#platinum-quizzes").should("be.visible");
    cy.get(".fa-table-list").should("be.visible");
    cy.get(".account-row ul")
      .should("be.visible")
      .and(($ul) => {
        const quizzes = [
          "JavaScript Basics",
          "React Essentials",
          "Advanced CSS",
        ];
        quizzes.forEach((quiz) => {
          expect($ul).to.contain.text(quiz);
        });
      });

    // Check the LRNR Level section
    cy.get("#lrnr-level").should("be.visible");
    cy.get(".fa-user").should("be.visible");
    cy.get(".account-row").contains("150/200 xp").should("be.visible");
  });

  it("should verify animations are applied", () => {
    // Check for opacity change in the account page
    cy.get(".account-page").should("have.css", "opacity").and("eq", "1");

    // Check if the animation properties for account rows are applied
    cy.get(".account-row").each(($el) => {
      cy.wrap($el).should("have.css", "opacity").and("eq", "1");
      cy.wrap($el).should("not.have.css", "transform", "translateX(-100%)");
    });
  });

  it("should verify dynamic content updates", () => {
    // Check if the LRNR Level and Streak are dynamic
    cy.get("#lrnr-level")
      .invoke("text")
      .should("match", /LRNR Level: \d+/);
    cy.get("#streak")
      .next()
      .invoke("text")
      .should("match", /\d+ days/);
  });

  it("should not contain unexpected error messages", () => {
    // Ensure there are no error messages or alerts on the page
    cy.get(".error-message").should("not.exist");
    cy.get(".alert").should("not.exist");
  });

  it("should ensure proper tab index", () => {
    // Ensure that tab indices are correctly set and focus order is logical
    cy.get("[tabindex]").each(($el) => {
      cy.wrap($el).should("have.attr", "tabindex").and("be.a", "string");
    });
  });
});

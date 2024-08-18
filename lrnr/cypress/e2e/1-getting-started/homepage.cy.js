/// <reference types="cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    // Visit the HomePage URL before each test
    cy.visit("https://lrnr-one.vercel.app/");
  });

  it("should display the homepage title and image", () => {
    // Check if the page title includes 'LRNR'
    cy.title().should("include", "LRNR");

    // Check that the LRNR logo is displayed
    cy.get('img[alt="LRNR logo"]').should("be.visible");

    // Check if the heading contains the expected text
    cy.get("h1").should(
      "contain.text",
      "Your guided path to programming enlightenment"
    );
  });

  it("should display the main features section with correct details", () => {
    // Check the Personalized Quizzes section
    cy.get(".box-color1")
      .should("be.visible")
      .within(() => {
        cy.get("i.fa-bolt-lightning").should("be.visible");
        cy.get("h2").should("contain.text", "Personalized Quizzes");
        cy.get("p").should("contain.text", "Greetings, young padawan.");
      });

    // Check the Rewarding section
    cy.get(".box-color2")
      .should("be.visible")
      .within(() => {
        cy.get("i.fa-money-bills").should("be.visible");
        cy.get("h2").should("contain.text", "Rewarding");
        cy.get("p").should(
          "contain.text",
          "Our app is designed to be both challenging and rewarding"
        );
      });

    // Check the Personal SME section
    cy.get(".box-color3")
      .should("be.visible")
      .within(() => {
        cy.get("i.fa-user").should("be.visible");
        cy.get("h2").should("contain.text", "Personal SME");
        cy.get("p").should("contain.text", "Welcome to the path of knowledge.");
      });
  });

  it("should include accessible features", () => {
    // Check for alt text on images
    cy.get('img[alt="LRNR logo"]').should("have.attr", "alt", "LRNR logo");

    // Check if headings are properly marked with semantic HTML
    cy.get("h1").should("exist");
    cy.get("h2").should("exist");
  });

  it("should be responsive", () => {
    // Test on different screen sizes
    const breakpoints = [320, 768, 1024];

    breakpoints.forEach((size) => {
      cy.viewport(size, 800);
      cy.get("h1").should("be.visible");
      cy.get(".box").should("be.visible");
    });
  });

  it("should ensure content consistency and update", () => {
    // Verify text content for dynamic elements
    cy.get("h1").should(
      "contain.text",
      "Your guided path to programming enlightenment"
    );

    // Check for dynamic updates if any (e.g., content fetched via API)
    // cy.get(".dynamic-content").should("contain.text", "Expected Dynamic Content");
  });

  it("should verify internal links", () => {
    // Ensure the link to quiz-generation page is present
    cy.get("a[href='/quiz-generation']").should("exist");
  });

  it("should ensure correct font Awesome icons", () => {
    // Verify Font Awesome icons are loaded and displayed
    cy.get(".fa-bolt-lightning").should("exist");
    cy.get(".fa-money-bills").should("exist");
    cy.get(".fa-user").should("exist");
  });
});

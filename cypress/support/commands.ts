interface Recipe {
    id: number;
    name: string;
  }
  Cypress.Commands.add("mockRecipesApi", (mockData: Recipe[]) => {
    cy.intercept("GET", "**/recipes*", {
      statusCode: 200,
      body: mockData,
    }).as("getRecipes");
  });
  // eslint-disable-next-line @typescript-eslint/no-namespace
  declare namespace Cypress {
    interface Chainable {
      mockRecipesApi(mockData: Recipe[]): Chainable<Element>;
    }
  }
LRNR Project (Testing)
Overview
The LRNR project is a web application designed to provide an interactive and user-friendly interface. This repository includes the source code for the project, along with testing setups using Cypress for end-to-end (E2E) testing and Jest for unit testing.

Project Structure
src/: Contains the source code for the frontend application.
cypress/: Contains configuration and test files for Cypress.
cypress.config.ts / cypress.config.js: Cypress configuration file.
jest.config.js: Jest configuration file (if applicable).
package.json: Lists project dependencies and scripts.
Getting Started
To get started with this project, follow these instructions:

1. Clone the Repository
sh
Copy code
git clone git@github.com:BeniKiambote10/lrnr_test.git
cd lrnr
2. Install Dependencies
Install the necessary dependencies for the project, including Cypress and Jest:

sh
Copy code
npm install
3. Cypress Setup
Cypress is used for end-to-end (E2E) testing. To open the Cypress test runner and configure it, run:

sh
Copy code
npx cypress open
This will open the Cypress Test Runner and automatically create the necessary configuration files if they do not already exist.

E2E Tests

E2E tests are located in the cypress/e2e directory. Example test files include:

homepage.spec.ts: Tests for the homepage of the application.
Running E2E Tests

To run Cypress tests in headless mode, use:

sh
Copy code
npx cypress run
4. Jest Setup
Jest is used for unit testing. If not already present, configure Jest by adding a jest.config.js file or adjusting the package.json:

Example Jest Configuration (jest.config.js):

javascript
Copy code
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
Unit Tests

Unit tests are located in the __tests__ directory or alongside the components. Example test files include:

homepage.test.tsx: Tests for the homepage component.
Running Unit Tests

To run Jest tests, use:

sh
Copy code
npm test
or

sh
Copy code
npx jest

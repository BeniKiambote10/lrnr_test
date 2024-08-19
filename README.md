LRNR Project Testing
Overview
LRNR is a platform designed to guide users through their programming journey with personalized quizzes, rewarding systems, and interactive learning features. This repository contains the source code for the LRNR frontend and associated testing setup.

Table of Contents
Clone the Repository
Installation
Running the Application
Testing
End-to-End (E2E) Tests with Cypress
Unit Tests with Jest
Clone the Repository
To get started with the LRNR project, clone the repository from GitHub:

bash
Copy code
git clone https://github.com/your-username/lrnr.git
cd lrnr
Installation
Before you start working with the project, ensure that you have Node.js and npm installed. Then, install the project dependencies:

bash
Copy code
npm install
Install Cypress
Cypress is used for end-to-end testing. Install it via npm:

bash
Copy code
npm install cypress --save-dev
Install Jest
Jest is used for unit testing. Install it via npm:

bash
Copy code
npm install jest --save-dev
Running the Application
To start the development server, run:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Testing
End-to-End (E2E) Tests with Cypress
Cypress is used for testing the entire user flow in the application. We will be focusing on the homepage and other key pages of the site.

Running Cypress Tests
Open Cypress:

bash
Copy code
npx cypress open
This will launch the Cypress Test Runner. Select the tests you want to run from the cypress/integration directory.

To run all Cypress tests in headless mode:

bash
Copy code
npx cypress run
E2E Tests Implemented
Home Page Test Suite:

Ensure the homepage title and main elements are visible and correctly displayed.
Verify that the main features section includes the correct details.
Check for accessibility features.
Test the responsiveness of the homepage across different screen sizes.
Account Page Test Suite:

Verify that the streak, platinum quizzes, and LRNR level sections are displayed with correct details.
Ensure animations are applied correctly.
Check for dynamic content updates.
Unit Tests with Jest
Jest is used for testing individual components and functionality.

Running Jest Tests
Run all unit tests:

bash
Copy code
npm test
To run tests with coverage report:

bash
Copy code
npm test -- --coverage
Unit Tests Implemented
HomePage Component:

Verify that the title and main elements are rendered correctly.
Test that the main features section renders with the expected text.
Ensure the correct rendering of the responsive design.
AccountPage Component:

Verify that the LRNR Level, Streak, and quizzes are displayed and dynamic.
Test that accessibility attributes are correctly implemented.
Check for the correct application of animations.

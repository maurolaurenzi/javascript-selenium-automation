# Letterboxd user validations

A JavaScript + Selenium test script that validates that users are able to perform some of their most common operations on https://letterboxd.com through the UI. This test automation project implements the Page Object Model (POM) design pattern, dividing the project in page objects (test/pages) and test cases (test/specs). Validations include:

- User is able to create a new list, add a film to it and then delete it
- User is able to add a movie to their watchlist and then remove it

## Dependencies

In order to run the test cases, you must have NodeJS preinstalled:

- NodeJS: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

- Once you have NodeJS installed in your machine, you can install the rest of the dependencies by opening a terminal, going to the root project's directory and running: `npm i`

## How to Run

1. Clone the repository and navigate to the project directory.
2. Make sure you have all the dependencies installed.
3. Create an .env file (`touch .env`) in the root project's directory and add the `LETTERBOXD_USERNAME` and `LETTERBOXD_PASSWORD` variables to it, then save it.
4. Run the command `npm run test`.
5. The test results should be displayed in the terminal after execution.

## Notes

- You can run this script in headless mode by adding `chromeOptions.addArguments('--headless')` under line 16 of `test/specs/validations.e2e.js`;


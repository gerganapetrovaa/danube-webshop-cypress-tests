# danube-webshop-cypress-tests

The project is built with https://cypress.io, https://cucumber.io, https://fakerjs.dev/ and https://www.npmjs.com/package/cypress-mochawesome-reporter as HTML reporter.

The tests can be found under `integration` folder as well as the BDD implementation. Paje objects can be found under `support` folder in `page-objects`.

The HTML report can be found in the project's folder under `reports` > `html` > `index.html`.

Steps to run tests:

1. Clone the repo
2. Run `npm install`
3. Run the test files using `npm run cypress:run` in headless mode or `npm run cypress:open` with Cypress GUI

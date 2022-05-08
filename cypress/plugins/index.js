const reporter = require("cypress-mochawesome-reporter/plugin");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  reporter(on);
  on("file:preprocessor", cucumber());
};

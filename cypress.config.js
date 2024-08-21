const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://erickwendel.github.io/vanilla-js-web-app-example",
    chromeWebSecurity: false,
  },
});

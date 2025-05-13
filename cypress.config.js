const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://admin-dt.convoso.com",
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 8000,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});

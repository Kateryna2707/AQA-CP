const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    retries: {
      runMode: 0,
      openMode: 0
    },
    env: {
      AUTH_USERNAME: 'guest',
      AUTH_PASSWORD: 'welcome2qauto'
      },
    //specPattern: 'cypress/e2e/hw_20/tests_POM/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videosFolder: 'videos',
    screenshotsFolder: 'screenshots',
    
    setupNodeEvents(on, config) {
    },
  },
});

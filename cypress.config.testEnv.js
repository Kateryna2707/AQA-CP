const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
        //BASE_URL: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
      AUTH_USERNAME: '384934+testUser1@gmail.com',
      AUTH_PASSWORD: 'Qaz123Xaw'
      },
    specPattern: 'cypress/e2e/hw_20/tests_POM/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videosFolder: 'videos',
    screenshotsFolder: 'screenshots',
    
    setupNodeEvents(on, config) {
    },
  },
});

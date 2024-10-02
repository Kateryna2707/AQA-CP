const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',

    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videosFolder: 'videos',
    screenshotsFolder: 'screenshots',
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
    },
  },
});

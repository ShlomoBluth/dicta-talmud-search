const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: 'ehwnno',
  reporterOptions: {
    configFile: 'searchShared/configure/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://use-dicta-components-2--tender-hamilton-5d028e.netlify.app',
    LIVE_URL: 'https://talmudsearch.dicta.org.il/',
    configFile: 'config',
  },
  defaultCommandTimeout: 20000,
  reporter: 'cypress-multi-reporters',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('./dicta-shared/videoCleanup')(on)
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://use-dicta-components-2--tender-hamilton-5d028e.netlify.app',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})


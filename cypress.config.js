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
    TOOL_TESTS: true,
    REQUESTS_TESTS: false,
    RECORD_KEY: '3a649b87-ff24-4727-a601-2f2ade287aa3',
  },
  defaultCommandTimeout: 20000,
  reporter: 'cypress-multi-reporters',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://use-dicta-components-2--tender-hamilton-5d028e.netlify.app',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})


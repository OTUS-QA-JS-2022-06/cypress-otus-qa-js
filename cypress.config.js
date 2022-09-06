require('dotenv').config()

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      config.env = process.env
      return config
    },
  },
  env: {
    foo: 'bar',
    baz: 'quux'
  }
};

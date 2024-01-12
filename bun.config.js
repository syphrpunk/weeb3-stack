const { createConfig } = require('bun');
module.exports = createConfig((config) => {
  config.set('input', 'app/**/*.json');
  config.set('output', 'dist');
});
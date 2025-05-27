const path = require('path');

module.exports = {
  entry: {}, // Explicitly set no entry points for static-only site
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};

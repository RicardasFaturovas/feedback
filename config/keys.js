if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'qa') {
  /* eslint global-require: off */
  module.exports = require('./qa-prod');
} else {
  module.exports = require('./dev');
}

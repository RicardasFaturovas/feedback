const qaProdEnv = require('./qa-prod');
const dev = require('./dev');

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'qa') {
  module.exports = qaProdEnv;
} else {
  module.exports = dev;
}

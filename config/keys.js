if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'qa') {
  module.exports('./qa-prod');
} else {
  module.exports('./dev');
}

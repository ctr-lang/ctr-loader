const watchTestRunner = require('./../../watch.test.runner.js');

module.exports = function (done) {
  return watchTestRunner(done, __dirname);
};

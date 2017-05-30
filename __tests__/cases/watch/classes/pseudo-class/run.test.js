const watchTestRunner = require('./../../watch.test.runner.js');

module.exports = function (done) {
  return watchTestRunner(done, __dirname, {
    stylePath1: '/box-styles.ctr.js',
    stylePath2: '/box-styles.ctr.js'
  });
};

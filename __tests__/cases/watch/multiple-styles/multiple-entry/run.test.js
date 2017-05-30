const watchTestRunner = require('./../../watch.test.runner.js');

module.exports = function (done) {
  return watchTestRunner(done, __dirname, {
    stylePath1: '/one/style-1.ctr.js',
    stylePath2: '/two/style-2.ctr.js'
  });
};

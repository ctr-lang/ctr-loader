const watchTestRunner = require('./../watch.test.runner.js');

module.exports = function (done) {
  return watchTestRunner(done, __dirname, {
    stylePath1: '/_index.ctr.js',
    stylePath2: '/_index.ctr.js'
  });
};

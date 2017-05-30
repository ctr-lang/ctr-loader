const watchTestRunner = require('./../../../watch.test.runner.js');

module.exports = function (done) {
  return watchTestRunner(done, __dirname, {
    stylePath1: '/style-1.ctr.yml',
    stylePath2: '/style-2.ctr.yml'
  });
};

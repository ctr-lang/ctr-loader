const watchTestRunner = require('./../watch.test.runner.js');

module.exports = function (done) {
  return watchTestRunner(done, __dirname, {
    stylePath1: '/box.ctr.yml',
    stylePath2: '/box.ctr.yml'
  });
};

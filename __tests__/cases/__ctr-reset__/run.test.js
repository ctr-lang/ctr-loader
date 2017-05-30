const basicTestRunner = require('./../basic/basic.test.runner.js');

module.exports = function (done) {
  return basicTestRunner(done, __dirname);
};

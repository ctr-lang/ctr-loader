const path            = require('path');
const watchTestRunner = require('./../../watch.test.runner.js');

module.exports = function (done) {
  //conext is changed to "styles-copy" dir
  const copyContext = path.join(__dirname, '/src/styles-copy');
  return watchTestRunner(done, __dirname, {
    ctrOptions: {
      context: copyContext
    }
  });
};

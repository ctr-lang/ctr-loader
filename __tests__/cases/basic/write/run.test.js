const basicTestRunner = require('./../basic.test.runner.js');

module.exports = function (done) {
  //-> run
  return basicTestRunner(done, __dirname, {
    //custom res path
    resPath: '/src/style.res.css'
  });
};

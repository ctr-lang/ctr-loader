const path            = require('path');
const watchTestRunner = require('./../watch.test.runner.js');

module.exports = function (done) {
  const filePath = path.resolve(__dirname, 'src/styles-copy/style.ctr.write.js');
  return watchTestRunner(done, __dirname, {
    stylePaths: [filePath, filePath],
    //custom res path
    resPath: '/src/style.res.css'
  });
};

const fs              = require('fs');
const path            = require('path');
const watchTestRunner = require('./../watch.test.runner.js');

/**
 * We first have to write out the .ctrrc yaml file before we run
 */
module.exports = function (done) {
  //need to grab ctrrc source and write it out locally
  const rcSourcePath = path.resolve(__dirname, './.ctrrc-source.yml');
  const rcSource = fs.readFileSync(rcSourcePath, 'utf8');
  //write out .ctrcr to be picked up and processed
  const ctrrcPath = path.join(process.cwd(), '.ctrrc.yml');
  fs.writeFileSync(ctrrcPath, rcSource);
  //sending style paths so test changes yaml not style files
  return watchTestRunner(done, __dirname, {
    stylePaths: [ctrrcPath, ctrrcPath]
  });
};

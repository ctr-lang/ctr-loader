const fs              = require('fs');
const path            = require('path');
const basicTestRunner = require('./../../basic.test.runner.js');

/**
 * We first have to write out the .ctrrc yaml file before we run
 */
module.exports = function (done) {
  //gets the yaml path and file and then writes out
  const yamlFilePath = path.resolve(__dirname, './src/ctrrc-file.yml');
  const yamlFile = fs.readFileSync(yamlFilePath, 'utf8');
  //write out ctrcr to be picked up and processed
  fs.writeFileSync(path.join(process.cwd(), '.ctrrc.yml'), yamlFile);
  //-> run
  return basicTestRunner(done, __dirname);
};

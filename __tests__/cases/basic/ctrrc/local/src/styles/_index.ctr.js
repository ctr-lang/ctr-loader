const path = require('path');

/**
 * Passes style (ctr ref) to the various files to create and then process
 * @param  {ctr} style -> ctr instance
 * @return {str}       -> CSS results
 */
module.exports = function (ctr) {
  //set rc option path
  ctr.setOption({
    rcPath: path.join(__dirname, './.ctrrc.yml')
  });
  //global styles
  ctr = require('./global/_index.ctr.js')(ctr);
  //comp styles
  ctr = require('./component/_index.ctr.js')(ctr);
  //results
  const res = ctr.getRes();
  return res;
};

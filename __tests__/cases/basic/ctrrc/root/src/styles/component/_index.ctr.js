/**
 * Passes style (ctr ref) to the various files to create and then process
 * @param  {ctr} style -> ctr instance
 * @return {str}       -> CSS results
 */
module.exports = function (ctr) {
  ctr = require('./box-1.ctr.js')(ctr);
  ctr = require('./box-2.ctr.js')(ctr);
  ctr = require('./box-3.ctr.js')(ctr);
  return ctr.getRes();
};

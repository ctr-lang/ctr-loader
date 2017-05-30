/**
 * Passes style (ctr ref) to the various files to create and then process
 * @param  {ctr} style -> ctr instance
 * @return {str}       -> CSS results
 */
module.exports = function (ctr) {
  ctr = require('./body.ctr.js')(ctr);
  ctr = require('./h1.ctr.js')(ctr);
  return ctr.getRes();
};

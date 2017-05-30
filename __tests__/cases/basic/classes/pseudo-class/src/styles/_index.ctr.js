/**
 * Passes ctr (ref) to the various files to create and then process
 * @param  {ctr} ctr -> ctr instance
 * @return {str}     -> CSS results
 */
module.exports = function (ctr) {
  ctr = require('./kool-loader-style.ctr.js')(ctr);
  return ctr.getRes();
};

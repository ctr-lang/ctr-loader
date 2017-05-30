/**
 * Passes ctr (ref) to the various files to creat and then
 * process this really cool ctr
 * @param  {ctr} ctr -> ctr instance
 * @return {str}     -> CSS results
 */
module.exports = function (ctr) {
  //ref assume -> in that we are not assigning the `ctr`
  require('./box-1.ctr.js')(ctr);
  require('./box-2.ctr.js')(ctr);
  //assign ctr -> probs should do it like this for you fellow developer
  ctr = require('./box-3.ctr.js')(ctr);
  ctr = require('./box-4.ctr.js')(ctr);
  return ctr.getRes();
};

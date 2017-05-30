let init = true;

/**
 * Passes ctr (ref) to the various files to creat and then
 * process this really cool ctr
 * @param  {ctr} ctr -> ctr instance
 * @return {str}     -> CSS results
 */
module.exports = function (ctr) {
  ctr = require('./home-box-1.ctr.js')(ctr);
  ctr = require('./home-box-2.ctr.js')(ctr);
  //teset to make sure cache is working
  if (init) {
    init = false;
    (ctr.resultDbMap.size).should.be.above(0);
  }else {
    (ctr.resultDbMap.size).should.be.above(2);
  }
  return ctr.getRes();
};

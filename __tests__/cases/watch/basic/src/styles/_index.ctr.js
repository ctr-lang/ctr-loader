
/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {
  ctr = requireWatch('./style-1.ctr.js', ctr);
  //you can omit passing the ctr ref if you wish and it will be added for you,
  //also you "technically" don't have to assing ctr from requireWatch,
  //but I do, becuase it makes sence, and it looks aesthetically pleasing
  ctr = requireWatch('./style-2.ctr.js');
  return ctr.getRes();
};

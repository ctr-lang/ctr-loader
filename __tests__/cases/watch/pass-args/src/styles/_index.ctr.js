
/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {
  //we are making our test changes here cus, we are then passing the styles
  //to the ctr style instances
  const style1 = {
    // @@test-1:[replace:(200px) -> with:(400px)]
    width: '200px'
  };
  const style2 = {
    // @@test-2:[replace:(800px) -> with:(200px)]
    width: '800px'
  };
  //should be able to pass args to the "required" file
  ctr = requireWatch('./style-1.ctr.js', style1);
  //as many args as your heart desires
  ctr = requireWatch('./style-2.ctr.js', style1, style2);
  return ctr.getRes();
};

/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {
  //sets global var to be used
  ctr.setVar({opacity: 1});
  //sets classes
  ctr = requireWatch('./Box.class.ctr.js');
  //create styles
  ctr = requireWatch('./box-styles.ctr.js');
  //->
  return ctr.getRes();
};

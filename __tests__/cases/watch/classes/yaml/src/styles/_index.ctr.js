
/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {
  //-> class duplication, need to activate overwrite option
  //import yml classes
  ctr.yaml('./Box.class.yml', {
    addClass: true,
    //if watcher is pass as an option ctr adds the
    //yaml files to the deps watch list
    requireWatch: requireWatch
  });
  //create styles
  ctr = requireWatch('./box-styles.ctr.js');
  //->
  return ctr.getRes();
};

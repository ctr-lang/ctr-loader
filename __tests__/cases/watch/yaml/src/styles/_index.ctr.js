
/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {
  //sets global var to be picked up in yml
  ctr.setVar({
    // @@test-2:[replace:(red) -> with:(blue)]
    color: 'red'
  });
  //process yaml
  ctr.yaml('./box.ctr.yml', {
    //if watcher is pass as an option ctr adds the
    //yaml files to the deps watch list
    requireWatch: requireWatch
  });
  //->
  return ctr.getRes();
};

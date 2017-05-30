
//one say to structure your ctr assest is similar to that of the run
//of the css foldure architecture, something like ITCSS. While this test
//only has two dir, you should get the gist, no need to reinvent the wheel


/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {
  //create styles
  ctr = requireWatch([
    //first we set the settings
    './_settings.ctr.js',
    //then we create the box styles
    './style-1.ctr.js',
    './style-2.ctr.js'
  ]);
  //get res and reunt
  return ctr.getRes();
};


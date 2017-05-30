
/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {
  const copyContext = __dirname.replace(/styles/, 'styles-copy');
  ctr = requireWatch(['./style-1.ctr.js', './style-2.ctr.js'], {
    //conext is changed to "styles-copy" dir, current context "styles"
    context: copyContext
  });
  return ctr.getRes();
};

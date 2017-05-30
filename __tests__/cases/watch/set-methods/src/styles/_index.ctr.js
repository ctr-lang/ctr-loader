/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {

  /**
   * IMPORTANT: Since we are changing these set options during development
   * we need to either overwrite or use the setReset aka development method
   */
   ctr.development();

  //sets options to be used
  ctr.setOption({
    hover: {
      // @@test-2:[add:(ease: 'funky-town',)]
      // @@test-1:[replace:(420s) -> with:(22s)]
      duration: '420s'
    }
  });
  //sets var to be used
  ctr.setVariable({
    // @@test-2:[replace:(#000) -> with:(#eee)]
    mainBg: '#000',
    box: {
      // @@test-1:[replace:(222px) -> with:(111px)]
      width: '222px'
    }
  });

  //lets get serious about css -> cap's the css
  ctr.setTransform(function (res) {
    // @@test-2:[replace:(false) -> with:(true)]
    const upperCase = false;
    return upperCase ? res.toUpperCase() : res;
  });

  //creates box styles
  ctr = requireWatch('./style.ctr.js');
  //->
  return ctr.getRes();
};

const path    = require('path');
const globAll = require('glob-all');

/**
 * Process styles + add them to webpack dependaency to be watched
 * for changes and then recomplie on changes
 * @param  {---} ctr          -> ctr instance
 * @param  {fnc} requireWatch -> wrapper funk for webpack to add file to dep watch list
 * @return {str}              -> processed ctr styles -> css
 */
module.exports = function (ctr, requireWatch) {
  //glob for absolute path
  const myJsFiles = globAll.sync(path.join(__dirname, '/**/*.ctr.js'), {
    dot: true
  });
  //remove _index
  myJsFiles.shift();

  ctr = requireWatch(myJsFiles[0], {
    absolute: true
  });
  ctr = requireWatch(myJsFiles[1], {
    abs: true
  });

  return ctr.getRes();
};

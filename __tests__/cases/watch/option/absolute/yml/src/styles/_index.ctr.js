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
  const myYamlFiles = globAll.sync(path.join(__dirname, '/**/*.yml'));

  ctr = ctr.yaml(myYamlFiles[0], {
    requireWatch,
    absolute: true
  });
  ctr = ctr.yaml(myYamlFiles[1], {
    requireWatch,
    abs: true
  });

  return ctr.getRes();
};


/**
 * Simple wrapper funk for webpack callback
 * @param  {---} err   -> webpack err
 * @param  {obj} stats -> status obj
 * @param  {fnk} done  -> mocha ayscn callback
 * @param  {fnk} cb    -> test runner callback, where the actual test
 *                        takes place
 */
module.exports = function (err, stats, done, cb) {
  if (err) {
    return done(err);
  }
  if (stats.hasErrors()) {
    debugger
    return done(stats.compilation.errors[0]);
  }
  if (stats.hasWarnings()) {
    return done(stats.compilation.warnings[0]);
  }
  //-> min
  console.log(stats.toString({chunks: false, colors: true, warnings: true}));

  //-> full
  // console.log(stats.toString({
  //   // Add asset Information
  //   assets: true,
  //   // Sort assets by a field
  //   assetsSort: 'field',
  //   // Add information about cached (not built) modules
  //   cached: true,
  //   // Add children information
  //   children: true,
  //   // Add chunk information (setting this to `false` allows for a less verbose output)
  //   chunks: true,
  //   // Add built modules information to chunk information
  //   chunkModules: true,
  //   // Add the origins of chunks and chunk merging info
  //   chunkOrigins: true,
  //   // Sort the chunks by a field
  //   chunksSort: 'field',
  //   // Add errors
  //   errors: true,
  //   // Add details to errors (like resolving log)
  //   errorDetails: true,
  //   // Add the hash of the compilation
  //   hash: true,
  //   // Add built modules information
  //   modules: true,
  //   // Sort the modules by a field
  //   modulesSort: 'field',
  //   // Add public path information
  //   publicPath: true,
  //   // Add information about the reasons why modules are included
  //   reasons: true,
  //   // Add the source code of modules
  //   source: true,
  //   // Add timing information
  //   timings: true,
  //   // Add webpack version information
  //   version: true,
  //   // Add warnings
  //   warnings: true
  // }));
  return cb();
};

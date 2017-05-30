const fs      = require('fs-extra');
const path    = require('path');
const _       = require('lodash');
const webpack = require('webpack');
const h       = require('./../test.helpers.js');
const funk    = require('./../base.webpack.funk.js');
const config  = require('./../base.webpack.config.js');

/**
 * Watch test helper/runner. It sets up the test files, by making a copy
 * of the test dir. Creates webpack watcher, and starts tests, then the tests
 * are changed via a little fs.writeFileSync action. Test then should recompile
 * and test again agains mocha cases, ie `style.exp-<test-number>`. With any luck
 * all tests should pass, and the crowds should cheer and dance
 * @param  {---} done    -> promise
 * @param  {str} dirname -> test dir of test in questiojn
 * @param  {obj} option  -> aux options to help config/run
 * @return {---}         -> mocha -> thumbs, up or down
 */
const test = function (done, dirname, option = {}) {
  option = _.defaults(option, {config: false, resPath: false, yaml: false});
  let compileCount = 0;
  //output
  const output = path.resolve(dirname, './test-res');

  //first we make a copy of original test dir's since we don't want
  //to make direct edits to the orig test in case we fuck up shit
  //-the copy dir are deleted after mocha tests
  const copyDirs = option.copyPath || ['/src/styles'];
  _.forEach(copyDirs, function (dir) {
    const copyPath = `${dir}-copy`;
    fs.copySync(path.join(dirname, dir), path.join(dirname, copyPath));
  });

  //style paths
  const stylePaths = option.stylePaths || [
    path.join(dirname, `${copyDirs[0]}-copy`, option.stylePath1 || '/style-1.ctr.js'),
    path.join(dirname, `${copyDirs[0]}-copy`, option.stylePath2 || '/style-2.ctr.js')
  ];

  //yaml indicator for replacment shit
  const isYaml = [stylePaths[0].includes('.yml'), stylePaths[1].includes('.yml')];

  //test paths
  const getCSS = function (n) {
    const res = h.readCSS(dirname, option.resPath || '/test-res/style.css');
    const exp = h.readCSS(dirname, `/src/style.exp-${n}.css`);
    return {res, exp};
  };

  /**
   * Wrapper helper that reads, replace designated changes, then writes out the
   * altered styles, which then is picked up are reprocessed by webpack
   * test change template: // @@test-<n>:[replace:<x> -> with:<y>]
   * @param  {num} n -> test number
   */
  const updateStyle = function (n) {
    const style = fs.readFileSync(stylePaths[n], 'utf-8');
    //replace tmpl tests
    const replaceReg = new RegExp(`@@test-${n + 1}:\\[replace.*?\\]`, 'gi');
    const replaceMatches = style.match(replaceReg);

    //create altered test from test templates
    //note, this is overly complex and you can blame the stupid object-class
    //test for it. We have to split the string so that we replace the proper
    //part of the test, however, if its yaml we don't split since I have no
    //desire to put in the effort to ensure proper spacing.
    let alteredStyle = _.reduce(replaceMatches, function (prv, testTmpl) {
      //split the test at the testTmpl
      prv = isYaml[n] ? prv : prv.split(`// ${testTmpl}`);
      const changeString = isYaml[n] ? prv :  `// ${testTmpl} ${prv[1]}`;
      //extract text replace data
      const replace = testTmpl.match(/replace:\(.*?\)/)[0].replace(/replace:\(/, '').slice(0, -1);
      const withX   = testTmpl.match(/with:\(.*?\)/)[0].replace(/with:\(/, '').slice(0, -1);
      //replace and return
      return (isYaml[n] ? '' : prv[0])
             + changeString.replace(testTmpl, 'test replaced').replace(new RegExp(replace), withX);
    }, style);

    //add tmpl tests
    const addReg = new RegExp(`@@test-${n + 1}:\\[add.*?\\]`, 'gi');
    const addMatches = style.match(addReg);
    alteredStyle = _.reduce(addMatches, function (prv, testTmpl) {
      const replace = (isYaml[n] ? '# ' : '// ')  + testTmpl;
      const withX   = testTmpl.match(/add:\(.*?\)/)[0].replace(/add:\(/, '').slice(0, -1);
      //replace and return
      return prv.replace(replace, withX);
    }, alteredStyle);

    //write out
    fs.writeFileSync(stylePaths[n], alteredStyle);
  };

  //config webpack obj, create or use custom
  const testConfig = !option.config ? config({
    context: path.resolve(dirname),
    entry: './src/index.js',
    output: output,
    css: 'style.css',
    ctrOptions: option.ctrOptions || false
  }) : config(option.config);

  //set up webpack watcher
  const compiler = webpack(testConfig);

  const watcher = compiler.watch({
    aggregateTimeout: 300
  }, _.partial(funk, _, _, done, function () {
    //set up
    let exp;
    let res;
    //get both the expected and res
    if (compileCount === 0 || compileCount === 1) {
      //get and test -> undate style to trigger watch
      ({exp, res} = getCSS(compileCount + 1));
      res.should.equal(exp);
      updateStyle(compileCount);
    }else if (compileCount === 2) {
      ({exp, res} = getCSS(3));
      res.should.equal(exp);
      //close watcher
      watcher.close(function () {
        done();
      });
    }
    //count so we know which test we are on
    compileCount++;
  }));
};

module.exports = test;

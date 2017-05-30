const path    = require('path');
const _       = require('lodash');
const webpack = require('webpack');
const h       = require('./../test.helpers.js');
const funk    = require('./../base.webpack.funk.js');
const config  = require('./../base.webpack.config.js');

/**
 * Basic test runner. This is just a centalized test runner for the basic
 * test config since they all follow this template
 * @param  {prm} done    -> completion promise
 * @param  {str} dirname -> dir to ref look up and such
 * @param  {obj} option  -> custom options if neeeded by indv tests
 * @return {--}          -> runs test, and determines our fate
 */
const test = function (done, dirname, option = {config: false, resPath: false}) {
  const output = path.resolve(dirname, './test-res');

  //config webpack obj, create or use custom
  const testConfig = !option.config ? config({
    context: path.resolve(dirname),
    entry: './src/index.js',
    output: output,
    css: 'style.css'
  }) : config(option.config);

  //init and run webpack
  webpack(testConfig, _.partial(funk, _, _, done, function () {
    //get both the expected and res
    const exp = h.readCSS(dirname, '/src/style.exp.css');
    const res = h.readCSS(dirname, option.resPath || '/test-res/style.css');
    //test is out
    res.should.equal(exp);
    done();
  }));
};

module.exports = test;

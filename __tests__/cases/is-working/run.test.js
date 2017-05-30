const webpack      = require('webpack');
const path         = require('path');
const _            = require('lodash');
const config       = require('./../base.webpack.config.js');
const funk         = require('./../base.webpack.funk.js');
const h            = require('./../test.helpers.js');


module.exports = function (done) {
  const output = path.resolve(__dirname, './test-res');
  //config webpack obj
  const testConfig = config({
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: output,
    css: 'test.css'
  });
  //init and run webpack
  webpack(testConfig, _.partial(funk, _, _, done, function () {
    //get both the expected and res
    const exp = h.readCSS(__dirname, '/src/test.exp.css');
    const res = h.readCSS(__dirname, '/test-res/test.css');
    //test is out
    res.should.equal(exp);
    done();
  }));
};

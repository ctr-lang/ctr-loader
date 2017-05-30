const webpack           = require('webpack');
const path              = require('path');
const _                 = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const funk              = require('./../../base.webpack.funk.js');
const h                 = require('./../../test.helpers.js');

module.exports = function (done) {
  const output = path.resolve(__dirname, './test-res');

  //config webpack obj
  const testConfig = {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
      path: output,
      filename: '[name].webpack.output.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.ctr(\.js|\.yml|\.yaml)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2
            }
          }, {
            loader: 'postcss-loader',
            options: { plugins: () => [require('autoprefixer')({ browsers: ['last 2 versions'] })] }
          }, {
            loader: 'ctr-loader'
          }]
        })
      }]
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.css', '.styl', '.ctr.js', '.ctr.yml']
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: true
      })
    ]
  };

  //init and run webpack
  webpack(testConfig, _.partial(funk, _, _, done, function () {
    //get both the expected and res
    const exp = h.readCSS(__dirname, '/src/style.exp.css');
    const res = h.readCSS(__dirname, '/test-res/style.css');
    //test is out
    res.should.equal(exp);
    done();
  }));
};


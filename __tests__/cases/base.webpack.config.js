const path              = require('path');
const _                 = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Wrapper funk for creating the webpack options
 * @param  {obj} option -> options to populate webpack config with
 * @return {obj}        -> webpack config
 */
module.exports = function (option) {
  //Helper to create main ctr loader
  //@return {arr} -> loader array
  const loaderGen = function () {
    //check for custom ctr loader before build one
    if (option.ctrLoader) { return option.ctrLoader; }
    //apply query options
    if (option.ctrOptions) {
      return [{
        loader: 'css-loader'
      }, {
        loader: 'ctr-loader',
        options: option.ctrOptions
      }];
    }
    return ['css-loader', 'ctr-loader' + (option.options || '')];
  };

  // ->
  return {
    context: option.context && path.resolve(option.context) || path.resolve(__dirname),
    entry: option.entry,
    output: {
      path: option.output,
      filename: '[name].webpack.output.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, _.defaultsDeep({
        test: /\.ctr(\.js|\.yml|\.yaml)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: option.loader
               ? option.loader.concat('ctr-loader')
               : loaderGen()
        })
      }, option.loaderOption || {}), {
        //loader for setting up custom ctr write via write
        test: /(\.ctr\.write\.js)$/,
        loader: 'ctr-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }]
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.css', '.styl', '.ctr.js', '.ctr.yml']
    },
    plugins: _.union([
      new ExtractTextPlugin({
        filename: option.css || '[name].css'
      })
    ], option.plugins || [])
  };
};

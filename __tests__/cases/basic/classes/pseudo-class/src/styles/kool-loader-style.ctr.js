
/**
 * Create loader from koolLoader data, more info about this in the test desc
 */
module.exports = function (ctr) {
  const koolLoader = require('./Kool-loader.class.js');
  ctr.create('.kool-loader', koolLoader({
    color: 'alpha(#3498db, 0.75)',
    width: '5em',
    height: '13em'
  }));
  return ctr;
};

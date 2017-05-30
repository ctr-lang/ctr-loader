
/**
 * Sets classes, and creates stlyes from dem
 */
module.exports = function (ctr) {
  //sets global var to be used
  ctr.setVar({opacity: 1});
  //sets classes
  ctr = require('./Box.class.ctr.js')(ctr);
  //create styles
  ctr = require('./box-styles.ctr.js')(ctr);
  return ctr.getRes();
};

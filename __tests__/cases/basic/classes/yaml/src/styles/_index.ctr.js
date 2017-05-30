
/**
 * grabs yaml files and treats the data as class data which
 * is then used by box-styles
 */
module.exports = function (ctr) {
  //import yml classes
  ctr.yaml('./Box.class.yml', {
    addClass: true
  });
  //create stlyes
  ctr = require('./box-styles.ctr.js')(ctr);
  //get res and return
  return ctr.getRes();
};

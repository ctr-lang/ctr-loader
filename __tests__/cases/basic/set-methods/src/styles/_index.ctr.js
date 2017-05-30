
/**
 * Sets all the options/vars we will use in the box.ctr.js
 */
module.exports = function (ctr) {
  //sets options to be used
  ctr.setOption({
    hover: {
      delay: '222s',
      duration: '333s'
    }
  });
  //sets var to be used
  ctr.setVariable({
    mainBg: '#000',
    box: {
      width: '111px'
    }
  });
  //lets get serious about css -> cap's the css
  ctr.setTransform(function (res) {
    return res.toUpperCase();
  });
  //creates box styles
  ctr = require('./box.ctr.js')(ctr);
  //->
  return ctr.getRes();
};

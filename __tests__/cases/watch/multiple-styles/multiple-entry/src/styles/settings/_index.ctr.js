
/**
 * Set default options / vars
 */
module.exports = function (ctr) {
  // this works becuase the same ctr instance is passed along to
  // the other ctr files that use the loader
  ctr.setOption({
    hover: {
      duration: '10s'
    }
  });
  ctr.setVariable({
    styleOneBg: '#f00',
    styleTwoBg: '#00f'
  });
};

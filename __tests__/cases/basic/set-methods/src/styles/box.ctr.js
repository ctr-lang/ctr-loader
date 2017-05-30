
/**
 * Creates box styles
 */
module.exports = function (ctr) {
  ctr.create('.box', {
    width: '$box.width$',
    height: '400px',
    hover: {
      on: {
        background: '#eee'
      },
      non: {
        background: '$mainBg$'
      }
    }
  });
  //->
  return ctr;
};

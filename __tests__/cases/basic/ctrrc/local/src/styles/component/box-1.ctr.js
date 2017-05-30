
module.exports = function (ctr) {
  ctr.create('.box-1', {
    width: '200px',
    'hover-on': {
      color: '$box.color$'
    }
  });
  return ctr;
};

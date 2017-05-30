
module.exports = function (ctr) {
  ctr.create('.box-3', {
    width: '$box.size$',
    'hover-on': {
      color: '$box.color$'
    }
  });
  return ctr;
};


module.exports = function (ctr) {
  //override the default duration, just for this set though
  ctr.setOption({
    hover: {
      duration: '10s'
    }
  }, {once: true});
  ctr.create('.box-2', {
    width: '400px',
    'hover-on': {
      color: 'red'
    }
  });
  return ctr;
};

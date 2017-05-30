
module.exports = function (ctr) {
  //base
  ctr.create('.test', {
    width: '200px'
  });

  //box 1
  ctr.create('.box-1', {
    extend: 'Box100'
  });

  //box 2
  ctr.create('.box-2', {
    'extend-Box200': {
      opacity: '0.5'
    }
  });

  //box 3
  ctr.create('.box-3', {
    'extend-Box300': {
      background: 'teal',
      'border-radius': '10px',
      opacity: '0.75'
    }
  });

  //->
  return ctr;
};

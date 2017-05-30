
module.exports = function (ctr) {
  //base
  ctr.create('.test', {
    width: '200px'
  });

  //box 1
  ctr.create('.box-1', {
    // @@test-1:[add:('font-size': '1em',)]
    extend: 'Box100'
  });

  //box 2
  ctr.create('.box-2', {
    'extend-Box200': {
      // @@test-1:[replace:(0.5) -> with:(1)]
      opacity: '0.5'
    }
  });

  //box 3
  ctr.create('.box-3', {
    'extend-Box300': {
      background: 'teal',
      // @@test-1:[replace:(10px) -> with:(20px)]
      'border-radius': '10px',
      opacity: '0.75'
    }
  });


  //->
  return ctr;
};

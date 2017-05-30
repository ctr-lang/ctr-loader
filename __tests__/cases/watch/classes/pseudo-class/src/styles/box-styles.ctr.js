const _ = require('lodash');

/**
 * Create loader from box-classes data, more info about this in the test desc
 */
module.exports = function (ctr) {
  //base
  ctr.create('.test', {
    width: '200px'
  });

  //gen psudo clases
  const boxClasses = require('./Box.class.js')({
    opacity: 1,
    background: 'red',
    borderRadius: '1px'
  });

  //box 1
  ctr.create('.box-1', _.defaultsDeep(boxClasses.box100({
    // @@test-2:[replace:(100px) -> with:(1111px)]
    size: '100px'
  }), {
    // @@test-1:[add:('font-size': '1em',)]
  }));

  //box 2
  ctr.create('.box-2', _.defaultsDeep(boxClasses.box200({
    borderRadius: '2px',
    // @@test-1:[replace:(0.5) -> with:(1)]
    opacity: '0.5',
    // @@test-2:[replace:(200px) -> with:(2222px)],
    size: '200px'
  }), {}));

  //box 3
  ctr.create('.box-3', _.defaultsDeep(boxClasses.box300({
    background: 'teal',
    // @@test-1:[replace:(10px) -> with:(20px)]
    borderRadius: '10px',
    opacity: '0.75',
    // @@test-2:[replace:(300px) -> with:(3333px)],
    size: '300px'
  }), {
    // @@test-2:[add:('font-size': '12px',)]
  }));

  return ctr;
};

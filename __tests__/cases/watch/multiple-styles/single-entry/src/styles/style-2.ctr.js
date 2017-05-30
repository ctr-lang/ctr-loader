
module.exports = function (ctr) {
  //create and return
  return ctr.create('.box-2', {
    // @@test-2:[replace:(800px) -> with:(200px)]
    width: '800px',
    'hover-on': {
      background: '$styleTwoBg$'
    }
  });
};

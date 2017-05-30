
module.exports = function (ctr) {
  return ctr.create('.box-2', {
    // @@test-2:[replace:(800px) -> with:(200px)]
    width: '800px'
  });
};


module.exports = function (ctr) {
  return ctr.create('.box-1', {
    // @@test-1:[replace:(200px) -> with:(400px)]
    width: '200px'
  });
};

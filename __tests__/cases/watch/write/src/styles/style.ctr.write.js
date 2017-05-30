const path = require('path');

module.exports = function (ctr) {
  //create
  ctr.create('.box-1', {
    // @@test-1:[replace:(200px) -> with:(400px)]
    width: '200px'
  });

  ctr.create('.box-2', {
    // @@test-2:[replace:(800px) -> with:(200px)]
    width: '800px'
  });

  //writes out .css file of res to the current dir
  //with the file name of style.res.css
  ctr.writeFile({
    filePath: path.resolve(__dirname, '../', 'style.res.css')
  });
};

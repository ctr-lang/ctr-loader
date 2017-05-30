
module.exports = function (ctr) {
  //create
  ctr.create('.test', {
    width: '200px'
  });
  //writes out .css file of res to the current dir
  //with the file name of style.res.css
  ctr.writeFile({
    fileName: 'style.res.css'
  });
};

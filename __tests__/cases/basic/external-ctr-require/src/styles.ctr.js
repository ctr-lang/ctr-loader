//pull in ctr
const CTR = require('ctr').js;
module.exports = function () {
  const ctr = new CTR();
  //create
  ctr.create('.box', {
    width: '200px'
  });
  //->
  return ctr.getRes();
};

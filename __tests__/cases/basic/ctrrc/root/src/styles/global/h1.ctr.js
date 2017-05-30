
module.exports = function (ctr) {
  ctr.create('h1', {
    'font-size': '2em',
    'hover-on': {
      color: 'blue'
    }
  });
  return ctr;
};

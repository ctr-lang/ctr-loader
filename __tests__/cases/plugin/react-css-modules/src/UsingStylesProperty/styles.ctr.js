
// From example
// https://github.com/gajus/react-css-modules-examples/blob/master/src/UsingStylesProperty/custom.css

/**
 * The loader passes an initilized instance of ctr
 * @param  {---} ctr   -> ctr instance
 * @return {str}       -> css style
 */
module.exports = function (ctr, requireWatch) {
  //require classes
  requireWatch('./../table.class.ctr.js');

  //create styles
  ctr.create('.table', {
    'extend-Table': {
      width: '400px'
    }
  });
  ctr.create('.row', {
    extend: 'Row'
  });
  ctr.create('.cell', {
    float: 'left',
    width: '154px',
    background: '#eee',
    padding: '10px',
    margin: ['10px', '0', '10px', '10px']
  });

  //get style results and return
  const res = ctr.getRes();
  return res;
};


// From example
// https://github.com/gajus/react-css-modules-examples/blob/master/src/table.css

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
    extend: 'Table'
  });
  ctr.create('.row', {
    extend: 'Row'
  });
  ctr.create('.cell', {
    extend: 'Cell'
  });

  //get result of styles and return
  const res = ctr.getRes();
  return res;
};

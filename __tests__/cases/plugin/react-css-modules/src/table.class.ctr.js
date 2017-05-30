
// From example
// https://github.com/gajus/react-css-modules-examples/blob/master/src/table.css

/**
 * The loader passes an initilided instance of crt
 * @param  {---} ctr   -> ctr instance
 * @return {str}       -> css style
 */
module.exports = function (ctr) {
  ctr.setClass('Table', {
    $$: {
      width: '200px'
    },
    width: '$width$',
    margin: '10px',
    overflow: 'hidden',
    border: ['1px', 'solid', '#000']
  });

  ctr.setClass('Row', {
    margin: '10px',
    overflow: 'hidden',
    border: ['1px', 'solid', '#f00']
  });

  ctr.setClass('Cell', {
    margin: '10px',
    overflow: 'hidden',
    padding: '10px',
    border: ['1px', 'solid', '#00f']
  });
};

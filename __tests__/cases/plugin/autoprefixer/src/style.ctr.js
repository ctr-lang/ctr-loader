
/**
 * The loader passes an initilided instance of crt
 * @param  {---} ctr   -> ctr instance
 * @return {str}       -> css style
 */
module.exports = function (ctr) {
  // should be prefixed
  const myPreFixedStyle = ctr.create('.prefix-this-style', {
    width: '200px',
    display: 'flex'
  });
  return myPreFixedStyle.getRes();
};

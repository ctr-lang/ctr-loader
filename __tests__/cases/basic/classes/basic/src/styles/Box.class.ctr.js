
/**
 * Adds/sets classes in the ctr ref
 */
module.exports = function (ctr) {

  //set classes
  ctr.addClass('Box100', {
    $$: {
      background: 'red',
      'border-radius': '1px'
    },
    size: 100,
    background: '_$background$_',
    'border-radius': '_$border-radius$_',
    //@note, opacity is set globally and not locally,
    //as such we don't want to use private notation: _$<>$_
    opacity: '$opacity$'
  });
  ctr.addClass('Box200', {
    size: 200,
    background: 'red',
    'border-radius': '2px',
    //@note, opacity is set globally and not locally,
    //as such we don't want to use private notation: _$<>$_
    opacity: '$opacity$'
  });
  ctr.addClass('Box300', {
    $$: {
      background: 'red',
      'border-radius': '3px'
    },
    size: 300,
    background: '_$background$_',
    'border-radius': '_$border-radius$_',
    //@note, opacity is set globally and not locally,
    //as such we don't want to use private notation: _$<>$_
    opacity: '$opacity$'
  });

  //->
  return ctr;
};

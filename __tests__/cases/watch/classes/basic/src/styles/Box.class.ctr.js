
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
    // @@test-2:[replace:(100px) -> with:(1111px)]
    size: '100px',
    background: '_$background$_',
    'border-radius': '_$border-radius$_',
    //@note, opacity is set globally and not locally,
    //as such we don't want to use private notation: _$<>$_
    opacity: '$opacity$'
  });
  ctr.addClass('Box200', {
    // @@test-2:[replace:(200px) -> with:(2222px)]
    size: '200px',
    background: 'red',
    'border-radius': '2px',
    opacity: '$opacity$'
  });
  ctr.addClass('Box300', {
    $$: {
      background: 'red',
      'border-radius': '3px'
    },
    // @@test-2:[replace:(300px) -> with:(3333px)]
    size: '300px',
    // @@test-2:[add:('font-size': '12px',)]
    background: '_$background$_',
    'border-radius': '_$border-radius$_',
    opacity: '$opacity$'
  });

  //->
  return ctr;
};

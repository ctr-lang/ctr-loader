const _ = require('lodash');

/**
 * In reality, this is more like a pseudo class becuase its just an object that
 * has ctr data. Unlike ctrClass'es we are not setting anything in the ctr
 * instance, rather just returning an object.
 * @param  {obj} options -> option
 * @return {obj}         -> class data
 */
const boxClasses = function(options = {}) {
  options = _.defaults(options, {
    opacity: 1,
    background: 'red',
    'border-radius': '1px'
  });

  return {
    box100: function ({size, background, borderRadius, opacity}) {
      return {
        size: size || '100px',
        background: background || options.background,
        'border-radius': borderRadius || options['border-radius'],
        opacity: opacity || options.opacity
      };
    },
    box200: function ({size, background, borderRadius, opacity}) {
      return {
        size: size || '200px',
        background: background || options.background,
        'border-radius': borderRadius || options['border-radius'],
        opacity: opacity || options.opacity
      };
    },
    box300: function ({size, background, borderRadius, opacity}) {
      return {
        size: size || '300px',
        background: background || options.background,
        'border-radius': borderRadius || '3px',
        opacity: opacity || options.opacity
      };
    }

  };

};

module.exports = boxClasses;

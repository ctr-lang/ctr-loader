const _ = require('lodash');

/**
 * In reality, this is more like a pseudo class becuase its just an object that
 * has ctr data. Unlike ctrClass'es we are not setting anything in the ctr
 * instance, rather just returning an object.
 * @param  {obj} options -> option
 * @return {obj}         -> class data
 */
const koolLoader = function(options = {}) {
  //set up varibles
  options = _.defaults(options, {
    color: '#3498db',
    duration: '1s',
    width: '1em',
    height: '4em',
    ease: 'easeInOutCubic'
  });
  const duration = Number.parseInt(options.duration);
  const delay1 = (duration * (1 / 3)).toPrecision(4);
  const delay2 = (duration * (2 / 3)).toPrecision(4);

  let varibles = _.merge(options, {
    bottomHeight: `calc(${options.height} / 2)`,
    heightMax: `calc((${options.height} * 2) * -1)`,
    delay1: `${delay1}s`,
    delay2: `${delay2}s`,
    left: `calc(${options.width} + (${options.width} / 2))`
  });
  varibles = _.merge(varibles, {
    beforeLeft: `calc(${options.left} * -1)`
  });

  //return object
  return {
    background: varibles.color,
    width: varibles.width,
    height: varibles.height,
    color: varibles.color,
    margin: '88px auto',
    position: 'relative',
    transform: 'translateZ(0)',
    animation: {
      option: {
        name: '_koolLoader_',
        duration: varibles.duration,
        ease: varibles.ease,
        count: 'infinite',
        delay: varibles.delay1
      },
      tl: {
        '0%': {
          'box-shadow': [0, 0],
          height: varibles.height
        },
        '50%': {
          'box-shadow': [0, varibles.heightMax],
          height: varibles.bottomHeight
        },
        '100%': {
          'box-shadow': [0, 0],
          height: varibles.height
        }
      }
    },
    customElm: {
      key: ['after', 'before'],
      content: '',
      position: 'absolute',
      top: 0,
      width: varibles.width,
      height: varibles.height,
      color: varibles.color,
      background: varibles.color
    },
    before: {
      left: varibles.beforeLeft,
      animation: {
        option: {
          name: '_koolLoader_',
          delay: '0s',
          duration: varibles.duration,
          ease: varibles.ease,
          count: 'infinite'
        }
      }
    },
    after: {
      left: varibles.left,
      animation: {
        option: {
          name: '_koolLoader_',
          duration: varibles.duration,
          delay: varibles.delay2,
          ease: varibles.ease,
          count: 'infinite'
        }
      }
    }
  };
};

module.exports = koolLoader;

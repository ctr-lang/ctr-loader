const fs          = require('fs');
const path        = require('path');
const loaderUtils = require('loader-utils');
const CTR         = require('ctr').js;

/**
 * Local helpers
 */
const _h = {
  isFunction: function (x) {
    return Object.prototype.toString.call(x) === '[object Function]';
  },
  isString: function (x) {
    return Object.prototype.toString.call(x) === '[object String]';
  },
  isArray: function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  },
  isObject: function (x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  },
  fileExists: function (filePath) {
    try {
      return fs.statSync(filePath).isFile();
    }catch (err) {
      return false;
    }
  }
};

/**
 * Adds ctr files to webpack deps to be watched and re-complied upon changes
 * @param  {---} watchFile -> str of ctr file to watch or an array of files
 * @return {---}           -> ctr instance, and any additional args it was passed
 */
const requireWatch = function (watchFile) {
  const self = this;
  const args = [...arguments];
  let errMsg = null;

  //get ctr options ref, and throw if not present which should never
  //be the case be just in case something weird happens/done
  const _options = self.options._ctr;
  if (!_options || !_options.ctrInstance) {
    errMsg = `ctr-loader: The ctr reference Object was not found, and this is not
              good because this should never happen. In all likelihood this is a
              problem on your end, however, this could also could be the result
              of a weird bug. If the issue is not on your end please pull an issue
              on github.`;
    self.emitWarning(errMsg.replace(/\s{2,}/gm, ' '));
    return;
  }

  //check if last arg is an option obj
  const lastArg = args[args.length - 1];
  const objArg = _h.isObject(lastArg);
  const options = {
    context: objArg && lastArg.context
              //also check for context set in query param
             ? lastArg.context : (_options.context || self.context),
    //absolute path
    absolute: objArg && (lastArg.absolute || lastArg.abs) ? true : false
  };

  //check to see if watchFile is an array
  //if so we cycle and recursively add
  if (_h.isArray(watchFile)) {
    args.shift();
    watchFile.forEach(function (_path) {
      requireWatch.apply(self, [_path].concat(args));
    });
    return _options.ctrInstance;
  }

  //safty check to make sure string path
  if (!_h.isString(watchFile)) {
    const pathType = typeof watchFile;
    errMsg = `ctr-loader: The "requireWatch" function requires the first
              argument be a String of the file path you wish to watch.
              The current value is: ${watchFile} which is a ${pathType}.
              Since I have no path to work with your ctr styles will not
              be processed until you fix this.`;
    self.emitWarning(errMsg.replace(/\s{2,}/gm, ' '));
    return _options.ctrInstance;
  }


  let watchPath;
  //return if yaml
  if (watchFile.match(/(yaml|yml)$/g)) {
    //resolve the yaml path
    watchPath = options.absolute ? watchFile : path.resolve(
      options.context,
      watchFile
    );
    //add to dep & return
    self.addDependency(watchPath);
    return self.ctrInstance;
  }

  //gen the path for 'ctr.js' file
  watchPath = options.absolute ? watchFile : path.resolve(options.context, watchFile);
  //check to see if path exsits
  if (!_h.fileExists(watchPath)) {
    errMsg = `ctr-loader: The "requireWatch" could not find the file for the
              path you specified: "${watchPath}". The current context is ${self.context},
              and the path is resolved by the following: "path.resolve(<context>, <path>)".
              Need be you can specify an overridePath, through the option object.
              But since I have no path to work with your ctr styles will not
              be processed until you fix this.`;
    self.emitWarning(errMsg.replace(/\s{2,}/gm, ' '));
    return _options.ctrInstance;
  }

  //shift off the filepath arg
  args.shift();
  //add on as a dependency
  self.addDependency(watchPath);
  //add .ctrrc if present
  if (_options.ctrInstance._rcFilePath) {
    self.addDependency(_options.ctrInstance._rcFilePath);
  }
  //get the code to be processed by exec
  const code = fs.readFileSync(watchPath, 'utf-8');
  //construct the function
  const func = self.exec(code, watchPath);
  //check to make sure first arg is a ctr instance
  if (!(args[0] instanceof CTR)) {
    //if not shift it on in
    args.unshift(_options.ctrInstance);
  }
  //->
  return func.apply(self, args);
};


/**
 * Public loader fn that configs/setups webpack specific and adds files to
 * webpacks dep watch list
 * @param  {---} content -> webpack file context
 * @return {str}         -> ctr CSS (fingers crossed)
 *
 * @note, ctr instance needs to be in global scope
 * so that results/classes are memeoized
 */
let ctrInstance = new CTR();
const ctrLoader = function(content) {
  let res = '';
  const self = this;
  //cache
  if (self.cacheable) { self.cacheable(); }
  //check query options params
  const options = Object.assign({}, loaderUtils.getOptions(self));
  //we need to create a special ctr option reffrence in webpack
  self.options._ctr = {};
  const _options = self.options._ctr;
  //check for newInstance options or add instance ref
  _options.ctrInstance = !options.newInstance ? ctrInstance : new CTR();
  //check for context options
  _options.context = options.context ? options.context : false;
  //bind up fn which we pass along
  _options.requireWatch = requireWatch.bind(self);
  //context for requireWatch
  self.addContextDependency(self.resource);
  //check if there is a rc file to add to watch
  if (ctrInstance._rcFilePath) {
    self.addDependency(ctrInstance._rcFilePath);
  }

  //chainable webpack require call
  const func = self.exec(content, self.resource);
  //invoke
  if (_h.isFunction(func)) {
    res = func.apply(self, [_options.ctrInstance, _options.requireWatch]);
  }else if (options.warning !== false) {
    const errMsg = `ctr-loader is designed to inkove an exporting function
    although no function was found. This could be be your intention which is
    kool, just wanted to give you a heads up. PS. You can also disable this
    warning by passing the following query parameter "?warning=false" should
    look like this ---> ctr-loader?warning=false`;
    self.emitWarning(errMsg.replace(/\s{2,}/gm, ' '));
  }

  //if ctr instance is returned reassign, meh, its like a "poor" mans reset
  //and should only be used in edge case situation
  if (res instanceof CTR) {
    ctrInstance = null;
    ctrInstance = res;
    return '';
  }

  //->
  return _h.isString(res) ? res : '';
};

module.exports = ctrLoader;

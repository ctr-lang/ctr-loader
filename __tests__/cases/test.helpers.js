const fs   = require('fs');
const path = require('path');

const helpers = {
  readCSS: function (dir, filePath) {
    return fs.readFileSync(path.join(dir, filePath), 'utf-8').replace(/\r/g, '').trim();
  }
};

module.exports = helpers;

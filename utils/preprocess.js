var sass = require('sass');
var path = require('path');

module.exports = function processSass(data, filename) {
  var result;
  result = sass.renderSync({
    data: data,
    file: filename
  }).css;
  return result.toString('utf8');
};
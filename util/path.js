const path = require('path');
// find the first module to be loaded
var topModule = module;

while(topModule.parent)
  topModule = topModule.parent;

module.exports = path.dirname(topModule.filename);
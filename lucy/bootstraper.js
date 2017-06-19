/*var fs = require("fs");

var worldData = [
  // './data/adjectivehierarchy.top',
  // './data/adverbhierarchy.top',
  // './data/affect.top',
  // './data/worlddata/basicgeography.tbl',
  './data/concepts.top',
  './data/names.top',
  './data/opposites.tbl',
  './data/prepositionhierarchy.top',
  './data/verbhierarchy.top',
  './data/worlddata/animals.tbl',
  './data/worlddata/color.tbl'
];

var parse = require("ss-parser").default;

parse.parseDirectory('./chat', function(err, result) {
  fs.writeFile('./data.json', JSON.stringify(result), function (err) {
    console.log("Loaded");
  });
});
*/


const superscript = require('superscript');
const options = {
  factSystem: {
    importData: ['./data/botfacts.tbl'],
    clean: true,
  },
  importFile: './data.json',
};

superscript.setup(options, (err, bot) => {
  botHandle(null, bot);
});

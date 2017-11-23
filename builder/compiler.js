/**
 * Compile the constructor UBIQUE with code information,
 * constants properties and all methods inherited from single *.js files in the LIB sub-folders
 * 
 * @return {file} return the constructor ubique.js in /lib folder with all methods
 */
 function compiler() {

	// settings
	var fs = require('fs');
	var path = require('path');
	var fullpath = path.join('./../lib/ubique.js');
	var pkgjson = require('./../package.json');


  // create header
  var header = String(fs.readFileSync('./../lib/infoubique.js'))
  .replace('#name',pkgjson.name)
  .replace('#version',pkgjson.version)
  .replace('#last_update',pkgjson.date)
  .replace('#author',pkgjson.author)
  .replace('#homepage',pkgjson.homepage)
  .replace('#description',pkgjson.description);

  var code = header + '\n';
  code += "var ubique = {};\n";
  code += "require('./constants.js')(ubique);\n";
  code += "require('./extlib.js')(ubique);\n";


	// load all functions from LIB folder
	var libfolder = [
  'datatype',
  'elemop',
  'elmath',
  'linalgebra',
  'matarrs',
  'probdistr',
  'quants',
  'reglin',
  'stats',
  'util',
  'datafeed'];

  for (var i = 0;i < libfolder.length;i++) {
    fs.readdirSync('./../lib/' + libfolder[i] + '/').forEach(function(file) {
     code += "require('./" + libfolder[i] + "/" + file + "')(ubique);\n";
   });
  }
  code += "module.exports = ubique;";
  
  fs.writeFileSync(fullpath,code);

}
module.exports = compiler;


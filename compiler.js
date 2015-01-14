/**
 * Compile the constructor UBIQUE with code information,
 * constants properties and all methods inherited from single *.js files in the LIB sub-folders
 * 
 * @return {file} return the constructor ubique.js in /lib folder with all list of functions
 */
 function compiler() {

	// settings
	var fs = require('fs'),
	path = require('path'),
	fileName = 'ubique.js',
	fullpath = path.join(__dirname,'lib',fileName),
	pkgjson = require('./package.json');

    // create header
    var header = String(fs.readFileSync('./lib/infoubique.js'))
    .replace('#name',pkgjson.name)
    .replace('#version',pkgjson.version)
    .replace('#last_update',pkgjson.date)
    .replace('#author',pkgjson.author)
    .replace('#homepage',pkgjson.homepage)
    .replace('#description',pkgjson.description);
    

    var code = header + "\nvar ubique = {};\n" + "require('./constants.js')(ubique);\n";


	// load all functions from LIB folder
	var libfolder = ['datatype','elemop','elmath','linalgebra','matarrs','probdistr','quants','reglin','stats'];
	
	for (var i = 0;i < libfolder.length;i++) {
		fs.readdirSync(__dirname + '/lib/' + libfolder[i] + '/').forEach(function(file) {
			code = code + "require('./" + libfolder[i] + "/" + file + "')(ubique);\n";
		});

	}
	code = code + "module.exports = ubique;";

	return fs.writeFile(fullpath,code,function(err) {
		if (err) throw err;
		console.log('Compiled costructor done!');
	});
};

module.exports = compiler;
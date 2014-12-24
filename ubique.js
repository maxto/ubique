// methods loader
function loader() {

	var ubique = {};

	// set CONSTANTS
	ubique.inf = Number.POSITIVE_INFINITY;
	ubique.eps = 2.2204460492503130808472633361816E-16;

	// load all functions from LIB folder
	libfolder = ['datatypes','elemop','elmath','linalgebra','matarrs'];

	for (var i = 0;i < libfolder.length;i++) {
		require('fs').readdirSync(__dirname + '/lib/' + libfolder[i] + '/').forEach(function(file) {
			require(__dirname + '/lib/' + libfolder[i] + '/' + file)(ubique);
		});

	}

	return ubique;

}

// create an instance of UBIQUE
var ubique = loader()

module.exports = ubique;














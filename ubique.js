/**
 * ubqiue.js 
 * https://github.com/maxto/ubique
 * 
 * The MIT License (MIT)
 * 
 * Copyright® 2014 Max Todaro
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */
function loader() {

	var ubique = {};

	// set CONSTANTS
	ubique.inf = Number.POSITIVE_INFINITY;
	ubique.eps = 2.2204460492503130808472633361816E-16;
	ubique.maxval = Number.MAX_VALUE;

	// load all functions from LIB folder
	libfolder = [
								'datatypes',
								'elemop',
								'elmath',
								'linalgebra',
								'matarrs',
								'statsrnd',
								'interpol',
								'regressmod',
								'findat',
								'contdistrib'
							];

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














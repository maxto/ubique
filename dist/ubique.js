(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["ubique"] = factory();
	else
		root["ubique"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {/**
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

		// set some CONSTANTS
		ubique.inf = Number.POSITIVE_INFINITY;
		ubique.eps = 2.2204460492503130808472633361816E-16;
		ubique.maxval = Number.MAX_VALUE;

		// load all functions from LIB folder
		libfolder = ['datatype','elemop','elmath','linalgebra','matarrs','probdistr','quants','reglin','stats'];
		for (var i = 0;i < libfolder.length;i++) {
			__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).readdirSync(__dirname + '/lib/' + libfolder[i] + '/').forEach(function(file) {
				__webpack_require__(1)("./" + libfolder[i] + '/' + file)(ubique);
			});

		}

		return ubique;

	}

	// create an instance of UBIQUE
	var ubique = loader()

	module.exports = ubique;

	/*
		require("./datatype/arrayfun.js")(ubique);
		require("./datatype/isarray.js")(ubique);
		require("./datatype/isempty.js")(ubique);
		require("./datatype/isfunction.js")(ubique);
		require("./datatype/isinteger.js")(ubique);
		require("./datatype/islogical.js")(ubique);
		require("./datatype/ismatrix.js")(ubique);
		require("./datatype/isnull.js")(ubique);
		require("./datatype/isnumber.js")(ubique);
		require("./datatype/isscalar.js")(ubique);
		require("./datatype/issingular.js")(ubique);
		require("./datatype/isstring.js")(ubique);
		require("./datatype/isundefined.js")(ubique);
		require("./datatype/isvector.js")(ubique);
		require("./datatype/nan.js")(ubique);
		require("./datatype/randchar.js")(ubique);
		require("./datatype/vectorfun.js")(ubique);
		require("./elemop/ceil.js")(ubique);
		require("./elemop/cumdev.js")(ubique);
		require("./elemop/cummax.js")(ubique);
		require("./elemop/cummin.js")(ubique);
		require("./elemop/cumprod.js")(ubique);
		require("./elemop/cumsum.js")(ubique);
		require("./elemop/diff.js")(ubique);
		require("./elemop/dot.js")(ubique);
		require("./elemop/floor.js")(ubique);
		require("./elemop/ldivide.js")(ubique);
		require("./elemop/minus.js")(ubique);
		require("./elemop/mldivide.js")(ubique);
		require("./elemop/mod.js")(ubique);
		require("./elemop/mpower.js")(ubique);
		require("./elemop/mrdivide.js")(ubique);
		require("./elemop/mtimes.js")(ubique);
		require("./elemop/plus.js")(ubique);
		require("./elemop/power.js")(ubique);
		require("./elemop/prod.js")(ubique);
		require("./elemop/rdivide.js")(ubique);
		require("./elemop/rem.js")(ubique);
		require("./elemop/round.js")(ubique);
		require("./elemop/sum.js")(ubique);
		require("./elemop/times.js")(ubique);
		require("./elemop/uminus.js")(ubique);
		require("./elemop/uplus.js")(ubique);
		require("./elmath/abs.js")(ubique);
		require("./elmath/erf.js")(ubique);
		require("./elmath/erfc.js")(ubique);
		require("./elmath/erfcinv.js")(ubique);
		require("./elmath/erfinv.js")(ubique);
		require("./elmath/exp.js")(ubique);
		require("./elmath/log.js")(ubique);
		require("./elmath/sign.js")(ubique);
		require("./elmath/sqrt.js")(ubique);
		require("./linalgebra/det.js")(ubique);
		require("./linalgebra/inv.js")(ubique);
		require("./linalgebra/linsolve.js")(ubique);
		require("./linalgebra/lu.js")(ubique);
		require("./matarrs/cat.js")(ubique);
		require("./matarrs/clone.js")(ubique);
		require("./matarrs/col.js")(ubique);
		require("./matarrs/colon.js")(ubique);
		require("./matarrs/diag.js")(ubique);
		require("./matarrs/end.js")(ubique);
		require("./matarrs/eye.js")(ubique);
		require("./matarrs/falses.js")(ubique);
		require("./matarrs/fix.js")(ubique);
		require("./matarrs/flatten.js")(ubique);
		require("./matarrs/flip.js")(ubique);
		require("./matarrs/fliplr.js")(ubique);
		require("./matarrs/flipud.js")(ubique);
		require("./matarrs/horzcat.js")(ubique);
		require("./matarrs/ind2sub.js")(ubique);
		require("./matarrs/iscolumn.js")(ubique);
		require("./matarrs/isrow.js")(ubique);
		require("./matarrs/issquare.js")(ubique);
		require("./matarrs/length.js")(ubique);
		require("./matarrs/linspace.js")(ubique);
		require("./matarrs/logspace.js")(ubique);
		require("./matarrs/matrix.js")(ubique);
		require("./matarrs/mergesort.js")(ubique);
		require("./matarrs/ncols.js")(ubique);
		require("./matarrs/ndims.js")(ubique);
		require("./matarrs/nrows.js")(ubique);
		require("./matarrs/numel.js")(ubique);
		require("./matarrs/ones.js")(ubique);
		require("./matarrs/rand.js")(ubique);
		require("./matarrs/repmat.js")(ubique);
		require("./matarrs/reshape.js")(ubique);
		require("./matarrs/row.js")(ubique);
		require("./matarrs/size.js")(ubique);
		require("./matarrs/sort.js")(ubique);
		require("./matarrs/squeeze.js")(ubique);
		require("./matarrs/sub2ind.js")(ubique);
		require("./matarrs/subset.js")(ubique);
		require("./matarrs/subsetlin.js")(ubique);
		require("./matarrs/tomat.js")(ubique);
		require("./matarrs/transpose.js")(ubique);
		require("./matarrs/trues.js")(ubique);
		require("./matarrs/vertcat.js")(ubique);
		require("./matarrs/zeros.js")(ubique);
		require("./probdistr/jbtest.js")(ubique);
		require("./probdistr/normcdf.js")(ubique);
		require("./probdistr/norminv.js")(ubique);
		require("./probdistr/normpdf.js")(ubique);
		require("./quants/hurst.js")(ubique);
		require("./quants/ret2tick.js")(ubique);
		require("./quants/tick2ret.js")(ubique);
		require("./reglin/interp1.js")(ubique);
		require("./reglin/linearreg.js")(ubique);
		require("./stats/corrcoef.js")(ubique);
		require("./stats/cov.js")(ubique);
		require("./stats/histc.js")(ubique);
		require("./stats/iqr.js")(ubique);
		require("./stats/kurtosis.js")(ubique);
		require("./stats/mad.js")(ubique);
		require("./stats/max.js")(ubique);
		require("./stats/mean.js")(ubique);
		require("./stats/median.js")(ubique);
		require("./stats/min.js")(ubique);
		require("./stats/mode.js")(ubique);
		require("./stats/moment.js")(ubique);
		require("./stats/pdist.js")(ubique);
		require("./stats/prctile.js")(ubique);
		require("./stats/quantile.js")(ubique);
		require("./stats/quartile.js")(ubique);
		require("./stats/range.js")(ubique);
		require("./stats/skewness.js")(ubique);
		require("./stats/std.js")(ubique);
		require("./stats/variance.js")(ubique);
		require("./stats/xkurtosis.js")(ubique);
		require("./stats/zscore.js")(ubique);
	 */
		



	
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./datatype/arrayfun": 2,
		"./datatype/arrayfun.js": 2,
		"./datatype/isarray": 3,
		"./datatype/isarray.js": 3,
		"./datatype/isempty": 4,
		"./datatype/isempty.js": 4,
		"./datatype/isfunction": 5,
		"./datatype/isfunction.js": 5,
		"./datatype/isinteger": 6,
		"./datatype/isinteger.js": 6,
		"./datatype/islogical": 7,
		"./datatype/islogical.js": 7,
		"./datatype/ismatrix": 8,
		"./datatype/ismatrix.js": 8,
		"./datatype/isnull": 9,
		"./datatype/isnull.js": 9,
		"./datatype/isnumber": 10,
		"./datatype/isnumber.js": 10,
		"./datatype/isscalar": 11,
		"./datatype/isscalar.js": 11,
		"./datatype/issingular": 12,
		"./datatype/issingular.js": 12,
		"./datatype/isstring": 13,
		"./datatype/isstring.js": 13,
		"./datatype/isundefined": 14,
		"./datatype/isundefined.js": 14,
		"./datatype/isvector": 15,
		"./datatype/isvector.js": 15,
		"./datatype/nan": 16,
		"./datatype/nan.js": 16,
		"./datatype/randchar": 17,
		"./datatype/randchar.js": 17,
		"./datatype/vectorfun": 18,
		"./datatype/vectorfun.js": 18,
		"./elemop/ceil": 19,
		"./elemop/ceil.js": 19,
		"./elemop/cumdev": 20,
		"./elemop/cumdev.js": 20,
		"./elemop/cummax": 21,
		"./elemop/cummax.js": 21,
		"./elemop/cummin": 22,
		"./elemop/cummin.js": 22,
		"./elemop/cumprod": 23,
		"./elemop/cumprod.js": 23,
		"./elemop/cumsum": 24,
		"./elemop/cumsum.js": 24,
		"./elemop/diff": 25,
		"./elemop/diff.js": 25,
		"./elemop/dot": 26,
		"./elemop/dot.js": 26,
		"./elemop/floor": 27,
		"./elemop/floor.js": 27,
		"./elemop/ldivide": 28,
		"./elemop/ldivide.js": 28,
		"./elemop/minus": 29,
		"./elemop/minus.js": 29,
		"./elemop/mldivide": 30,
		"./elemop/mldivide.js": 30,
		"./elemop/mod": 31,
		"./elemop/mod.js": 31,
		"./elemop/mpower": 32,
		"./elemop/mpower.js": 32,
		"./elemop/mrdivide": 33,
		"./elemop/mrdivide.js": 33,
		"./elemop/mtimes": 34,
		"./elemop/mtimes.js": 34,
		"./elemop/plus": 35,
		"./elemop/plus.js": 35,
		"./elemop/power": 36,
		"./elemop/power.js": 36,
		"./elemop/prod": 37,
		"./elemop/prod.js": 37,
		"./elemop/rdivide": 38,
		"./elemop/rdivide.js": 38,
		"./elemop/rem": 39,
		"./elemop/rem.js": 39,
		"./elemop/round": 40,
		"./elemop/round.js": 40,
		"./elemop/sum": 41,
		"./elemop/sum.js": 41,
		"./elemop/times": 42,
		"./elemop/times.js": 42,
		"./elemop/uminus": 43,
		"./elemop/uminus.js": 43,
		"./elemop/uplus": 44,
		"./elemop/uplus.js": 44,
		"./elmath/abs": 45,
		"./elmath/abs.js": 45,
		"./elmath/erf": 46,
		"./elmath/erf.js": 46,
		"./elmath/erfc": 47,
		"./elmath/erfc.js": 47,
		"./elmath/erfcinv": 48,
		"./elmath/erfcinv.js": 48,
		"./elmath/erfinv": 49,
		"./elmath/erfinv.js": 49,
		"./elmath/exp": 50,
		"./elmath/exp.js": 50,
		"./elmath/log": 51,
		"./elmath/log.js": 51,
		"./elmath/sign": 52,
		"./elmath/sign.js": 52,
		"./elmath/sqrt": 53,
		"./elmath/sqrt.js": 53,
		"./linalgebra/det": 54,
		"./linalgebra/det.js": 54,
		"./linalgebra/inv": 55,
		"./linalgebra/inv.js": 55,
		"./linalgebra/linsolve": 56,
		"./linalgebra/linsolve.js": 56,
		"./linalgebra/lu": 57,
		"./linalgebra/lu.js": 57,
		"./matarrs/cat": 58,
		"./matarrs/cat.js": 58,
		"./matarrs/clone": 59,
		"./matarrs/clone.js": 59,
		"./matarrs/col": 60,
		"./matarrs/col.js": 60,
		"./matarrs/colon": 61,
		"./matarrs/colon.js": 61,
		"./matarrs/diag": 62,
		"./matarrs/diag.js": 62,
		"./matarrs/end": 63,
		"./matarrs/end.js": 63,
		"./matarrs/eye": 64,
		"./matarrs/eye.js": 64,
		"./matarrs/falses": 65,
		"./matarrs/falses.js": 65,
		"./matarrs/fix": 66,
		"./matarrs/fix.js": 66,
		"./matarrs/flatten": 67,
		"./matarrs/flatten.js": 67,
		"./matarrs/flip": 68,
		"./matarrs/flip.js": 68,
		"./matarrs/fliplr": 69,
		"./matarrs/fliplr.js": 69,
		"./matarrs/flipud": 70,
		"./matarrs/flipud.js": 70,
		"./matarrs/horzcat": 71,
		"./matarrs/horzcat.js": 71,
		"./matarrs/ind2sub": 72,
		"./matarrs/ind2sub.js": 72,
		"./matarrs/iscolumn": 73,
		"./matarrs/iscolumn.js": 73,
		"./matarrs/isrow": 74,
		"./matarrs/isrow.js": 74,
		"./matarrs/issquare": 75,
		"./matarrs/issquare.js": 75,
		"./matarrs/length": 76,
		"./matarrs/length.js": 76,
		"./matarrs/linspace": 77,
		"./matarrs/linspace.js": 77,
		"./matarrs/logspace": 78,
		"./matarrs/logspace.js": 78,
		"./matarrs/matrix": 79,
		"./matarrs/matrix.js": 79,
		"./matarrs/mergesort": 80,
		"./matarrs/mergesort.js": 80,
		"./matarrs/ncols": 81,
		"./matarrs/ncols.js": 81,
		"./matarrs/ndims": 82,
		"./matarrs/ndims.js": 82,
		"./matarrs/nrows": 83,
		"./matarrs/nrows.js": 83,
		"./matarrs/numel": 84,
		"./matarrs/numel.js": 84,
		"./matarrs/ones": 85,
		"./matarrs/ones.js": 85,
		"./matarrs/rand": 86,
		"./matarrs/rand.js": 86,
		"./matarrs/repmat": 87,
		"./matarrs/repmat.js": 87,
		"./matarrs/reshape": 88,
		"./matarrs/reshape.js": 88,
		"./matarrs/row": 89,
		"./matarrs/row.js": 89,
		"./matarrs/size": 90,
		"./matarrs/size.js": 90,
		"./matarrs/sort": 91,
		"./matarrs/sort.js": 91,
		"./matarrs/squeeze": 92,
		"./matarrs/squeeze.js": 92,
		"./matarrs/sub2ind": 93,
		"./matarrs/sub2ind.js": 93,
		"./matarrs/subset": 94,
		"./matarrs/subset.js": 94,
		"./matarrs/subsetlin": 95,
		"./matarrs/subsetlin.js": 95,
		"./matarrs/tomat": 96,
		"./matarrs/tomat.js": 96,
		"./matarrs/transpose": 97,
		"./matarrs/transpose.js": 97,
		"./matarrs/trues": 98,
		"./matarrs/trues.js": 98,
		"./matarrs/vertcat": 99,
		"./matarrs/vertcat.js": 99,
		"./matarrs/zeros": 100,
		"./matarrs/zeros.js": 100,
		"./probdistr/jbtest": 101,
		"./probdistr/jbtest.js": 101,
		"./probdistr/normcdf": 102,
		"./probdistr/normcdf.js": 102,
		"./probdistr/norminv": 103,
		"./probdistr/norminv.js": 103,
		"./probdistr/normpdf": 104,
		"./probdistr/normpdf.js": 104,
		"./quants/hurst": 105,
		"./quants/hurst.js": 105,
		"./quants/ret2tick": 106,
		"./quants/ret2tick.js": 106,
		"./quants/tick2ret": 107,
		"./quants/tick2ret.js": 107,
		"./reglin/interp1": 108,
		"./reglin/interp1.js": 108,
		"./reglin/linearreg": 109,
		"./reglin/linearreg.js": 109,
		"./stats/corrcoef": 110,
		"./stats/corrcoef.js": 110,
		"./stats/cov": 111,
		"./stats/cov.js": 111,
		"./stats/histc": 112,
		"./stats/histc.js": 112,
		"./stats/iqr": 113,
		"./stats/iqr.js": 113,
		"./stats/kurtosis": 114,
		"./stats/kurtosis.js": 114,
		"./stats/mad": 115,
		"./stats/mad.js": 115,
		"./stats/max": 116,
		"./stats/max.js": 116,
		"./stats/mean": 117,
		"./stats/mean.js": 117,
		"./stats/median": 118,
		"./stats/median.js": 118,
		"./stats/min": 119,
		"./stats/min.js": 119,
		"./stats/mode": 120,
		"./stats/mode.js": 120,
		"./stats/moment": 121,
		"./stats/moment.js": 121,
		"./stats/pdist": 122,
		"./stats/pdist.js": 122,
		"./stats/prctile": 123,
		"./stats/prctile.js": 123,
		"./stats/quantile": 124,
		"./stats/quantile.js": 124,
		"./stats/quartile": 125,
		"./stats/quartile.js": 125,
		"./stats/range": 126,
		"./stats/range.js": 126,
		"./stats/skewness": 127,
		"./stats/skewness.js": 127,
		"./stats/std": 128,
		"./stats/std.js": 128,
		"./stats/variance": 129,
		"./stats/variance.js": 129,
		"./stats/xkurtosis": 130,
		"./stats/xkurtosis.js": 130,
		"./stats/zscore": 131,
		"./stats/zscore.js": 131
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Structures
	 */
	 module.exports = function($u) {
	/**
	 * @method arrayfun
	 * @summary Apply function to each element of array or matrix
	 * @description Apply function to each element of array or matrix
	 * 
	 * @param  {array|matrix} x  array elements
	 * @param  {function} fun function to apply
	 * @param  {number} dim dimension selected, 0: row, 1: column (def: 0)
	 * @return {array|matrix}     
	 *
	 * @example
	 * ubique.arrayfun([1.4,2.3,3],Math.log); //  [0.336472, 0.832909, 1.09861]
	 * ubique.arrayfun([1.4,0,-10],function(a) {return ubique.sign(a);});  // [1, 0, -1]
	 * ubique.arrayfun([[5,6],[1,3]],Math.log); // [[1.60944, 1.79176], [0, 1.09861]]
	 * ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value);}) // [[1, 1, 1], [1, 1, -1]]
	 * ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value);},1) // [[1, 1], [1, 1], [1, -1]]
	 */
	 $u.arrayfun = function(x,fun,dim) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isundefined(dim)) {
	 		dim = 0;
	 	}
	 	if (dim === 1) {
	 		var ndim = $u.ncols(x),
	 		narray = $u.col;
	 	} else if (dim === 0) {
	 		var ndim = $u.nrows(x),
	 		narray = $u.row;
	 	} else {
	 		throw new Error('dimension must be 0 (rows) or 1 (colums)');
	 	}
	 	if ($u.ismatrix(x)) {
	 		v = [];
	 		for (var i = 0;i < ndim;i++) {
	 			v[i] = (narray(x,i).map(fun));
	 		}
	 		return v;
	 	}
	 	return x.map(fun);
	 }

	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	module.exports = function($u) {
	/**
	 * @method isarray
	 * @summary True for array
	 * @description  True for array
	 * 
	 * @param  {array}  x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.isarray([1.4,2.3,3]); // true
	 */
	 $u.isarray = function(x) {
	 	return Array.isArray(x) && !Array.isArray(x[0]);
	 }

	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method isempty
	 * @summary True for empty array or matrix
	 * @description  True for empty array or matrix
	 *              
	 * @param  {array|matrix}  x input matrix
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.isempty([]); // true
	 * ubique.isempty([[]]); // true
	 */
	 $u.isempty = function(x) {
	 	if ($u.isarray(x) && x.length === 0) {
	 		return true;
	 	}
	 	if ($u.ismatrix(x) && x[0].length === 0) {
	 		return true;
	 	}
	 	return false;
	 }

	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Type Identification
	 */
	 module.exports = function($u) {
	/**
	* @method isfunction
	* @summary True for function
	* @description true for function
	* 
	* @param  {function}  x function
	* @return {Boolean}   
	*
	* @example
	* ubique.isfunction(function(a){return console.log(a);}); // true
	* ubique.isfunction(Math.log); // true
	*/
	$u.isfunction = function(x) {
		return typeof x === 'function';
	}

	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Type Identification
	 */
	 module.exports = function($u) {
	/**
	* @method isinteger
	* @summary True for integer
	* @description  True for integer
	* 
	* @param  {integer}  x element
	* @return {boolean}   
	*
	* @example
	* ubique.isinteger(5); // true
	*/
	$u.isinteger = function(x) {
		return $u.isnumber(x) && Math.round(x) === x;
	}

	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Logical Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method islogical
	 * @summary True for logical input
	 * @description True for logical input
	 *              
	 * @param  {boolean}  x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.islogical(true); // true
	 */
	 $u.islogical = function(x) {
	 	return typeof x === 'boolean';
	 }

	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method ismatrix
	 * @summary True for matrix
	 * @description True for array of array (matrix)
	 * 
	 * @param  {matrix}  x matrix
	 * @return {Boolean}  
	 *
	 * @example
	 * ubique.ismatrix([[1,3,4]]); // true (1x3)
	 * ubique.ismatrix([[1],[3],[4]]); // true (3x1)
	 */
	 $u.ismatrix = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	} 
	 	if ($u.isundefined(x) || $u.isnull(x) || !$u.isarray(x[0])) {
	 		return false;
	 	}
	 	return $u.isarray(x[0]);
	 }

	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Type Identification
	 */
	module.exports = function($u) {
	/**
	 * @method isnull
	 * @summary True for null values
	 * @description  True for null values
	 * 
	 * @param  {null}  x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.isnull(null); // true
	 */
	 $u.isnull = function(x) {
	 	return x === null;
	 }

	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Type Identification
	 */
	 module.exports = function($u) {
	/**
	 * @method isnumber
	 * @summary True for number
	 * @description  True for number or NaN value
	 * 
	 * @param  {number}  x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.isnumber(5); // true
	 * ubique.isnumber(NaN); // true 
	 */
	 $u.isnumber = function(x) {
	 	return typeof x === 'number';
	 }

	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method isscalar
	 * @summary True for scalar input
	 * @description True for scalar input
	 *              
	 * @param  {number|array|matrix}  x input 
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.isscalar(2); // true
	 * ubique.isscalar([2]); // true
	 * ubique.isscalar([[2]]); // true
	 */
	 $u.isscalar = function(x) {
	 	if ($u.nrows(x) === 1 && $u.ncols(x) === 1) {
	 		return true;
	 	}
	 	return false;
	 }

	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Matrix Types
	 */
	 module.exports = function($u) {
	/**
	 * @method issingular
	 * @summary True for singular matrix
	 * @description True for singular matrix. A square matrix which does not have an inverse. A matrix is singular if and only if its determinant is zero.
	 * 
	 * @param  {matrix} x  input matrix
	 * @return {boolean}     
	 *
	 * @example
	 * ubique.issingular([[2,6],[1,3]]); // false
	 */
	 $u.issingular = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if ($u.isnumber(x) || $u.isarray(x)) {
	    throw new Error('input must be a matrix');
	  }
	  if (!$u.issquare(x)) {
	    throw new Error('input must be a square matrix');
	  }
	  var n = $u.ncols(x);
	  for (var i = 0;i < n;i++) {
	    if (x[i][i] === 0) {
	      return true;
	    }
	  }
	  return false;
	}

	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Type Identification
	 */
	 module.exports = function($u) {
	/**
	 * @method isstring
	 * @summary True for string values
	 * @description  True for string values
	 * 
	 * @param  {string}  x element
	 * @return {boolean|array}   
	 *
	 * @example
	 * ubique.isstring('test'); // true
	 */
	 $u.isstring = function(x) {
	 	return typeof x === 'string';
	 }

	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Type Identification
	 */
	 module.exports = function($u) {
	 /**
	 * @method isundefined
	 * @summary True for undefined values
	 * @description  True for undefined values
	 * 
	 * @param  {undefined}  x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.isundefined(undefined); // true
	 */
	 $u.isundefined = function(x) {
	 	return x === undefined;
	 }

	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method isvector
	 * @summary True for vector input
	 * @description True for vector input
	 *              
	 * @param  {array|matrix}  x input 
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.isvector([1,2,3]); // true
	 * ubique.isvector([[3,4,5]]); // true
	 */
	 $u.isvector = function(x) {
	 	if (($u.iscolumn(x) === true) || ($u.isrow(x) === true)) {
	 		return true;
	 	}
	 	return false;
	 }

	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Numeric Types
	 */
	 module.exports = function($u) {
	/**
	 * @method nan
	 * @summary Create array of all NaN
	 * @description Create array of all NaN
	 * 
	 * @param  {number|array|...} args  variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.NaN(); // NaN
	 * ubique.NaN(0); // []
	 * ubique.NaN(1); / [[NaN]]
	 * ubique.NaN(2); // [[NaN, NaN], [NaN, NaN]]
	 * ubique.NaN([2,1]); // [[NaN], [NaN]]
	 * ubique.NaN(1,2); // [[NaN, NaN]]
	 * ubique.NaN(2,3); // [[NaN, NaN, NaN], [NaN, NaN, NaN]]
	 */
	 $u.nan = function() {
	  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
	    return NaN;
	  }
	  var _args = [];
	  for (var i = 0;i < arguments.length; i++) {
	    _args.push(arguments[i]);
	  }
	  if ($u.ismatrix(_args)) {_args = _args[0];}
	  if (_args.length === 1) {_args = [_args[0],_args[0]];}
	  return $u.matrix(_args,NaN);
	}

	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Create and Concatenate Strings
	 */
	 module.exports = function($u) {
	/**
	 * @method randchar
	 * @summary Generate a random alpha-numeric string
	 * @description Generate a random alpha-numeric string
	 * 
	 * @param  {number} n      number of characters to generate (def: 6)
	 * @param  {string} strset character set to get random sample
	 * @return {string}        
	 *
	 * @example
	 * ubique.randchar(12,'ABCD!-|/%&$\1234567890'); //  D&80%BB/C%B
	 * ubique.randchar(16,'ABCDEFGHILMNOPQRSTUVZ-1234567890');  //  U68MP-U7ZI26T2HS
	 */
	 $u.randchar = function(n,strset) {
	  if ($u.isundefines(n)) {
	    n = 6;
	  }
	  if ($u.isundefined(strset)) {
	    strset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	  }
	  return Array.apply(0, Array(n)).map(function() {
	    return (function(charset) {
	      return charset.charAt(Math.floor(Math.random() * charset.length))
	    }(strset));
	  }).join('')
	}

	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Structures
	 */
	 module.exports = function($u) {
	/**
	 * @method  vectorfun
	 * @summary Apply a function to each vector column or row of a matrix 
	 * @description Apply a function to each vector column or row of a matrix 
	 * 
	 * @param  {array|matrix} x   input matrix
	 * @param  {function} fun function to apply
	 * @param  {number} dim dimension 0: row, 1: column (def: 0)
	 * @return {array}     
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * 
	 * ubique.vectorfun(a,function(val){return ubique.mean(val)},0); // [5.33333, 4.66667]
	 * ubique.vectorfun(a,function(val){return ubique.mean(val)},1); // [[6, 7, 2]]
	 */
	 $u.vectorfun = function(x,fun,dim) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 2) {
	 		dim = 0;
	 	}
	 	if (dim === 1) {
	 		var ndim = $u.ncols(x),
	 		narray = $u.col;
	 	} else if (dim === 0) {
	 		var ndim = $u.nrows(x),
	 		narray = $u.row;
	 	} else {
	 		throw new Error('dimension must be 0 (rows) or 1 (columns)');
	 	}
	 	if (!$u.ismatrix(x)) {
	 		throw new Error('input must be a matrix');
	 	}
	 	var v = [];
	 	for (var i = 0;i < ndim;i++) {
	 		v[i] = fun(narray(x,i));
	 	}
	 	if (dim === 1) {
	 		return $u.transpose(v);
	 	}
	 	return v;
	 }

	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	 	/**
	 * @method ceil
	 * @summary Round toward positive infinity
	 * @description Round toward positive infinity
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.ceil(Math.PI,12); // 3.14159265359
	 * ubique.ceil(3.78); // 4
	 * ubique.ceil([4.51,-1.4]); // [5, -1]
	 * ubique.ceil([[4.5134,-1.4345],[3.7809,0.0134]],2); // [[4.52, -1.43], [3.79, 0.02]]
	 */
	 $u.ceil = function(x,n) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		n = 0;
	 	}
	 	var p = Math.pow(10,n);
	 	if ($u.isnumber(x)) {
	 		return Math.ceil(x*p)/p
	 	}
	 	return $u.arrayfun(x,function(val){return Math.ceil(val*p)/p;});
	 }
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method cumdev
	 * @summary Cumulative mean deviation
	 * @description  Cumulative mean deviation of the values in array X
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {array|matrix}   
	 *
	 * @example
	 * var b = [[-1,3,-1],[4,5,9]];
	 * var c = [5,6,3];
	 *
	 * ubique.cumdev(c); // [0.333333, 1.66667, -8.88178e-16]
	 * ubique.cumdev(b,0); // [[-1.33333, 1.33333, 0], [-2, -3, 0]]
	 * ubique.cumdev(b); // [[-2.5, -1, -5], [0, 0, 0]]
	 */
	 $u.cumdev = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _cumdev = function(a) {
	 		return $u.cumsum($u.minus(a,$u.mean(a)));
	 	}
	 	if ($u.isarray(x)) {
	 		return _cumdev(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _cumdev(val);},dim);
	 }

	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method cummax
	 * @summary Cumulative max of array elements
	 * @description Cumulative max of array elements
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {array|matrix}   
	 *
	 * @example
	 * ubique.cummax([5,6,3]); // [5, 6, 6]
	 * ubique.cummax([[5,6,5],[7,8,-1]]); // [[5, 6, 5], [7, 8, 5]]
	 * ubique.cummax([[5,6,5],[7,8,-1]],0); // [[5, 6, 6], [7, 8, 8]]
	 */
	 $u.cummax = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _cummax =  function(a) {
	    var v = new Array(a.length);
	    v[0] = a[0];
	    for (var i = 1;i < a.length;i++) {
	      if (a[i] >= v[i - 1]) {
	        v[i] = a[i];
	      } else { 
	        v[i] = v[i - 1];
	      }
	    }
	    return v;
	  }
	  if ($u.isarray(x)) {
	    return _cummax(x);
	  }
	  return $u.vectorfun(x,function(val){return _cummax(val);},dim);
	}

	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	 /**
	 * @method cummin
	 * @summary Cumulative min of array elements
	 * @description Cumulative min of array elements
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {array|matrix}   
	 *
	 * @example
	 * ubique.cummin([5,6,3]); // [5, 5, 3]
	 * ubique.cummin([[5,6,5],[7,8,-1]]); // [[5, 6, 5], [5, 6, -1]]
	 * ubique.cummin([[5,6,5],[7,8,-1]],0); // [[5, 5, 5], [7, 7, -1]]
	 */
	 $u.cummin = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _cummin =  function(a) {
	    var v = new Array(a.length);
	    v[0] = a[0];
	    for (var i = 1;i < a.length;i++) {
	      if (a[i] < v[i - 1]) {
	        v[i] = a[i];
	      } else { 
	        v[i] = v[i - 1];
	      }
	    }
	    return v;
	  }
	  if ($u.isarray(x)) {
	    return _cummin(x);
	  }
	  return $u.vectorfun(x,function(val){return _cummin(val);},dim);
	}

	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	 /**
	 * @method cumprod
	 * @summary Cumulative product of array elements
	 * @description Cumulative product of array elements
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {array|matrix}   
	 *
	 * @example
	 * ubique.cumprod([5,6,3]); // [5, 30, 90]
	 * ubique.cumprod([[5,6,5],[7,8,-1]]); // [[5, 6, 5], [35, 48, -5]]
	 * ubique.cumprod([[5,6,5],[7,8,-1]],0); // [[5, 30, 150], [7, 56, -56]]
	 */
	 $u.cumprod = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _cumprod =  function(a) {
	    var v = new Array(a.length);
	    v[0] = a[0];
	    for (var i = 1;i < a.length;i++) {
	      v[i] = v[i - 1] * a[i];
	    }
	    return v;
	  }
	  if ($u.isarray(x)) {
	    return _cumprod(x);
	  }
	  return $u.vectorfun(x,function(val){return _cumprod(val);},dim);
	}

	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method cumsum
	 * @summary Cumulative sum of array elements
	 * @description Cumulative sum of array elements
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {array|matrix}   
	 *
	 * @example
	 * ubique.cumsum([5,6,3]); // [5, 11, 14]
	 * ubique.cumsum([[5,6,5],[7,8,-1]]); // [[5, 6, 5], [12, 14, 4]]
	 * ubique.cumsum([[5,6,5],[7,8,-1]],0); // [[5, 11, 16], [7, 15, 14]]
	 */
	 $u.cumsum = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _cumsum =  function(a) {
	    var v = new Array(a.length);
	    v[0] = a[0];
	    for (var i = 1;i < a.length;i++) {
	      v[i] = v[i - 1] + a[i];
	    }
	    return v;
	  }
	  if ($u.isarray(x)) {
	    return _cumsum(x);
	  }
	  return $u.vectorfun(x,function(val){return _cumsum(val);},dim);
	}

	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method diff
	 * @summary Differences between adjacent elements in array 
	 * @description Differences between adjacent elements in array or matrix 
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {array|matrix}   
	 *
	 * @example
	 * ubique.diff([5,6,3]); //  [1, -3]
	 * ubique.diff([[5,6,5],[7,8,-1]]); // [[2, 2, -6]]
	 * ubique.diff([[5,6,5],[7,8,-1]],0); // [[1, -1], [1, -9]]
	 */
	 $u.diff = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _diff =  function(a) {
	 		var v = new Array(a.length - 1);
	 		for (var i = 1;i < a.length;i++) {
	 			v[i - 1] = a[i] - a[i - 1];
	 		}
	 		return v;
	 	}
	 	if ($u.isarray(x)) {
	 		return _diff(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _diff(val);},dim);
	 }

	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method dot
	 * @summary Arrays dot product X * Y
	 * @description Arrays dot product X * Y. X and Y must be arrays of the same length
	 * 
	 * @param  {number|array} x number or array of values
	 * @param  {number|array} y number or array of values
	 * @return {number|array}   
	 *
	 * @example
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * 
	 * ubique.dot(5,6); // 30
	 * ubique.dot(c,d); // -8.6
	 */
	 $u.dot = function(x,y) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	    if ($u.size(x)[0] !== $u.size(y)[0] || $u.size(x)[1] !== $u.size(y)[1]) {
	    	throw new Error('input size mismatch');
	    }
	    return $u.sum($u.times(x,y));
	 }
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	 	/**
	 * @method floor
	 * @summary Round toward negative infinity
	 * @description Round toward negative infinity
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.floor(Math.PI,12); // 3.141592653589
	 * ubique.floor(3.78); // 3
	 * ubique.floor([4.51,-1.4]); // [4, -2]
	 * ubique.floor([[4.5134,-1.4345],[3.7809,0.0134]],2); // [[4.51, -1.44], [3.78, 0.01]]
	 */
	 $u.floor = function(x,n) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		n = 0;
	 	}
	 	var p = Math.pow(10,n);
	 	if ($u.isnumber(x)) {
	 		return Math.floor(x*p)/p
	 	}
	 	return $u.arrayfun(x,function(val){return Math.floor(val*p)/p;});
	 }
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method ldivide
	 * @summary Left array division X. \ Y
	 * @description Divides each element of Y by the corresponding element of X. Inputs X and Y
	 * must have the same size
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number|array|matrix} y number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * var a = [5,6,7];
	 * var b = [-1,-2,-3];
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var e = [[9, 5], [6, 1]];
	 * var f = [[3, 2], [5, 2]];
	 * 
	 * ubique.ldivide(5,6); // 1.2
	 * ubique.ldivide([5,6,7],3); // [0.6, 0.5, 0.428571]
	 * ubique.ldivide(3,[-1,-2,-3]); // [-0.333333, -0.666667, -1]
	 * ubique.ldivide(c,d); // [0.1, -0.5, 0.766667]
	 * ubique.ldivide(e,f); //  [[3, 2.5], [1.2, 0.5]]
	 * ubique.ldivide(e,3); //  [[0.333333, 0.6], [0.5, 3]]
	 */
	 $u.ldivide = function(y,x) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		if ($u.isnumber(y)) {
	 			return x / y;
	 		}
	 		if ($u.ismatrix(y)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(y);i++) {
	 				var vec = $u.row(y,i);
	 				v[i] = $u.arrayfun(vec,function(val){return x / val;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(y,function(val){return x / val;})
	 	}
	 	if ($u.isnumber(y)) {
	 		if ($u.ismatrix(x)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(x);i++) {
	 				var vec = $u.row(x,i);
	 				v[i] = $u.arrayfun(vec,function(val){return val / y;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(x,function(val){return val / y;})
	 	}
	 	if ($u.isarray(x) && $u.isarray(y)) {
	 		var v = [];
	 		for (var i = 0;i < x.length;i++) {
	 			v[i] = x[i] / y[i];
	 		}
	 		return v;
	 	}
	 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
	 		var v = [];
	 		for (var i = 0;i < $u.nrows(x);i++) {
	 			var vx = $u.row(x,i),
	 			vy = $u.row(y,i);
	 			v[i] = $u.rdivide(vx,vy);
	 		}
	 		return v;
	 	}
	 }
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method minus
	 * @summary Subtraction X - Y
	 * @description Subtraction X - Y. X and Y must have the same dimension unless one is a number
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number|array|matrix} y number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * ubique.minus(5,6);  // -1
	 * ubique.minus([5,6,4],[3,-1,0]); //  [2, 7, 4]
	 * ubique.minus([5,6,4],10); //  [-5, -4, -6]
	 * ubique.minus(NaN,[5,6,4]);  // [NaN, NaN, NaN]
	 *
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * ubique.minus(a,b);  // [[6, 3, 6], [3, 3, -10]]
	 */
	 $u.minus = function(x,y) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		if ($u.isnumber(y)) {
	 			return x - y;
	 		}
	 		if ($u.ismatrix(y)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(y);i++) {
	 				var vec = $u.row(y,i);
	 				v[i] = $u.arrayfun(vec,function(val){return x - val;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(y,function(val){return x - val;})
	 	}
	 	if ($u.isnumber(y)) {
	 		if ($u.ismatrix(x)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(x);i++) {
	 				var vec = $u.row(x,i);
	 				v[i] = $u.arrayfun(vec,function(val){return val - y;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(x,function(val){return val - y;})
	 	}
	 	if ($u.isarray(x) && $u.isarray(y)) {
	 		var v = [];
	 		for (var i = 0;i < x.length;i++) {
	 			v[i] = x[i] - y[i];
	 		}
	 		return v;
	 	}
	 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
	 		var v = [];
	 		for (var i = 0;i < $u.nrows(x);i++) {
	 			var vx = $u.row(x,i),
	 			vy = $u.row(y,i);
	 			v[i] = $u.minus(vx,vy);
	 		}
	 		return v;
	 	}
	 }

	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	  /**
	  * @method mldivide
	  * @summary Matrix division X \ Y
	  * @description Matrix division X \ Y. If X is NxN and Y is NxM, then
	  * returns a matrix NxM. Y is multiplied with the inverse of X. X must be square.
	  * 
	  * @param  {number|array|matrix} x number or array of values
	  * @param  {number|array|matrix} y number or array of values
	  * @return {number|array|matrix}   
	  *
	  * @example
	  * var a = [[5,6,5],[7,8,-1]];
	  * var e = [[9, 5], [6, 1]];
	  * var f = [[3, 2], [5, 2]];
	  * 
	  * ubique.mldivide(5,6); // 0.833333
	  * ubique.mldivide(e,f); // [[1.8, 1], [1.2, 0.2]]
	  * ubique.mldivide(5,e); // [[1.04762, 0.380952], [-1.28571, -0.285714]]
	  * ubique.mldivide(e,a); // [[1.42857, 1.61905, -0.47619], [-1.57143, -1.71429, 1.85714]]
	  */
	  $u.mldivide = function(y,x) {
	    if (arguments.length < 2) {
	      throw new Error('not enough input arguments');
	    }
	    if ($u.isnumber(x) && $u.isnumber(y)) {
	      return x/y;
	    } else
	    if ($u.isnumber(y)) {
	      return $u.ldivide(y,x);
	    } else 
	    if ($u.issquare(y)) {
	      if ($u.ncols(y) !== $u.nrows(x)) {
	        throw new Error('matrix dimensions mismatch');
	      }
	      return $u.mtimes($u.inv(y),x);
	    } else {
	      throw new Error('unknown input arguments');
	    }
	  }

	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method mod
	 * @summary Modulus after division
	 * @description Modulus after division. Element-wise for matrix
	 * 
	 * @param  {number|array|matrix} x dividend
	 * @param  {number|array|matrix} y divisor
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * 
	 * ubique.mod([13,-7],2.2); //  [2, 1.8]
	 * ubique.mod([13,-7],[5,6]); // [3, 5]
	 * ubique.mod(a,b); // [[0, 0, 0], [3, 3, 8]]
	 */
	 $u.mod = function(x,y) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var n = $u.floor($u.rdivide(x,y));
	 	return $u.minus(x,$u.times(n,y));
	 }

	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method mpower
	 * @summary Matrix power X ^ Y
	 * @description Matrix power X ^ Y. X is the square input matrix and y is the scalar exponent.
	 * 
	 * @param  {matrix} x base 
	 * @param  {number} y exponent 
	 * @return {matrix}   
	 *
	 * @example
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 *
	 * ubique.mpower(l,3); // [[-2, 11, -11], [11, -35, 33], [22, 33, -2]]
	 */
	 $u.mpower = function(x,y) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (!$u.issquare(x)) {
	 		throw new Error('input must be a square matrix');
	 	}
	 	if (!$u.isnumber(y)) {
	 		throw new Error('exponent must be a scalar value');
	 	}
	 	var out = x,
	 	t = 1;
	 	while (t < y) {
	 		out = $u.mtimes(x,out);
	 		t++;
	 	}
	 	return out;
	 }
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	  /**
	  * @method mrdivide
	  * @summary Matrix division X / Y
	  * @description Matrix division X / Y. If X is MxN and Y is NxN, then
	  * it returns a matrix MxN. X is multiplied with the inverse of Y. Y must be square.
	  * 
	  * @param  {number|array|matrix} x number or array of values
	  * @param  {number|array|matrix} y number or array of values
	  * @return {number|array|matrix}   
	  *
	  * @example
	  * var a = [[5,6,5],[7,8,-1]];
	  * var c = [5,6,3];
	  * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	  * var e = [[9, 5], [6, 1]];
	  * var f = [[3, 2], [5, 2]];
	  * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	  * 
	  * ubique.mrdivide(5,6); // 0.833333
	  * ubique.mrdivide(c,6); // [0.833333, 1, 0.5]
	  * ubique.mrdivide(e,5); // [[1.8, 1], [1.2, 0.2]]
	  * ubique.mrdivide(e,f); // [[1.75, 0.75], [-1.75, 2.25]]
	  * ubique.mrdivide(a,l); // [[-0.769231, 0.538462, 2.61538], [3.38462, 0.230769, 1.69231]]
	  */
	  $u.mrdivide = function(x,y) {
	    if (arguments.length < 2) {
	      throw new Error('not enough input arguments');
	    }
	    if ($u.isnumber(x) && $u.isnumber(y)) {
	      return x/y;
	    } else
	    if ($u.isnumber(y)) {
	      return $u.rdivide(x,y);
	    } else 
	    if ($u.issquare(y)) {
	      if ($u.ncols(x) !== $u.nrows(y)) {
	        throw new Error('matrix dimensions mismatch');
	      }
	      return $u.mtimes(x,$u.inv(y));
	    } else {
	      throw new Error('unknown input arguments');
	    }
	  }

	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method mtimes
	 * @summary Matrix multiplication X * Y
	 * @description  Matrix multiplication X * Y. If X is MxP and Y is PxN, returns a matrix MxN
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number|array|matrix} y number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * var c = [5,6,3];
	 * 
	 * ubique.mtimes(5,6); // 30
	 * ubique.mtimes(c,3); // [15, 18, 9]
	 * ubique.mtimes(a,3); // [[15, 18, 15], [21, 24, -3]]
	 * ubique.mtimes(c,[[3,4,5]]); // [[15, 20, 25], [18, 24, 30], [9, 12, 15]]
	 * ubique.mtimes(a,c); // [[76], [80]]
	 */
	 $u.mtimes = function(x,y) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (!$u.isnumber(x) && !$u.isnumber(y)) {
	 		var xsize = $u.size(x),
	 		ysize = $u.size(y);
	 		if (xsize[1] !== ysize[0]) {
	 			throw new Error('inner dimension mismatch');
	 		}
	 		var out = $u.matrix(xsize[0],ysize[1]);
	 		for (var i = 0;i < xsize[0];i++) {
	 			var xx = $u.row(x,i);
	 			for (var j = 0;j < ysize[1];j++) {
	 				var yy = $u.col(y,j);
	 				out[i][j] = $u.squeeze($u.dot(xx,yy));
	 			}
	 		}
	 		return out;
	 	}
	 	return $u.times(x,y);
	 }
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method plus
	 * @summary Addition X + Y
	 * @description Addition X + Y
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number|array|matrix} y number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * ubique.plus(5,6);  // 11
	 * ubique.plus([5,6,4],[3,-1,0]); //  [8, 5, 4]
	 * ubique.plus([5,6,4],10); //  [15, 16, 14]
	 * ubique.plus(NaN,[5,6,4]);  // [NaN, NaN, NaN]
	 *
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * ubique.plus(a,b);  // [[4, 9, 4], [11, 13, 8]]
	 */
	 $u.plus = function(x,y) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		if ($u.isnumber(y)) {
	 			return x + y;
	 		}
	 		if ($u.ismatrix(y)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(y);i++) {
	 				var vec = $u.row(y,i);
	 				v[i] = $u.arrayfun(vec,function(val){return x + val;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(y,function(val){return x + val;})
	 	}
	 	if ($u.isnumber(y)) {
	 		if ($u.ismatrix(x)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(x);i++) {
	 				var vec = $u.row(x,i);
	 				v[i] = $u.arrayfun(vec,function(val){return val + y;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(x,function(val){return val + y;})
	 	}
	 	if ($u.isarray(x) && $u.isarray(y)) {
	 		var v = [];
	 		for (var i = 0;i < x.length;i++) {
	 			v[i] = x[i] + y[i];
	 		}
	 		return v;
	 	}
	 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
	 		var v = [];
	 		for (var i = 0;i < $u.nrows(x);i++) {
	 			var vx = $u.row(x,i),
	 			vy = $u.row(y,i);
	 			v[i] = $u.plus(vx,vy);
	 		}
	 		return v;
	 	}
	 }

	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method power
	 * @summary Element-wise power X. ^ Y
	 * @description Element-wise power X. ^ Y
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number|array|matrix} y number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * 
	 * ubique.power(5,4); // 625
	 * ubique.power(c,5); // [3125, 7776, 243]
	 * ubique.power(5,c); // [3125, 15625, 125]
	 * ubique.power(a,5); // [[3125, 7776, 3125], [16807, 32768, -1]]
	 * ubique.power(5,a); // [[3125, 15625, 3125], [78125, 3.90625e+5, 0.2]]
	 * ubique.power(c,d); // [2.23607, 0.00462963, 12.5135]
	 * ubique.power(a,b); // [[0.2, 216, 0.2], [2401, 32768, -1]]
	 * 
	 */
	 $u.power = function(x,y) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		if ($u.isnumber(y)) {
	 			return Math.pow(x,y);
	 		}
	 		if ($u.ismatrix(y)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(y);i++) {
	 				var vec = $u.row(y,i);
	 				v[i] = $u.arrayfun(vec,function(val){return Math.pow(x,val);});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(y,function(val){return Math.pow(x,val);})
	 	}
	 	if ($u.isnumber(y)) {
	 		if ($u.ismatrix(x)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(x);i++) {
	 				var vec = $u.row(x,i);
	 				v[i] = $u.arrayfun(vec,function(val){return Math.pow(val,y);});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(x,function(val){return Math.pow(val,y);})
	 	}
	 	if ($u.isarray(x) && $u.isarray(y)) {
	 		var v = [];
	 		for (var i = 0;i < x.length;i++) {
	 			v[i] = Math.pow(x[i],y[i]);
	 		}
	 		return v;
	 	}
	 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
	 		var v = [];
	 		for (var i = 0;i < $u.nrows(x);i++) {
	 			var vx = $u.row(x,i),
	 			vy = $u.row(y,i);
	 			v[i] = $u.power(vx,vy);
	 		}
	 		return v;
	 	}
	 }

	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method prod
	 * @summary Product of array elements
	 * @description Product of array elements
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension, 1: column 0: row (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * ubique.prod([5,6,3]); // 14
	 * ubique.prod([[5,6,5],[7,8,-1]],0); // [150, -56]
	 * ubique.prod([[5,6,5],[7,8,-1]],1); // [[35, 48, -5]]
	 */
	 $u.prod = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _prod = function(a) {
	 		var prod = 1;
	 		for (var i = 0;i < a.length;i++) {
	 			prod *= a[i];
	 		}
	 		return prod;
	 	}
	 	if ($u.isarray(x)) {
	 		return _prod(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _prod(val);},dim);
	 }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method rdivide
	 * @summary Right array division X. / Y
	 * @description Divides each element of X by the corresponding element of Y. Inputs X and Y
	 * must have the same size
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number|array|matrix} y number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [-1,-2,-3];
	 * var e = [[9, 5], [6, 1]];
	 * var f = [[3, 2], [5, 2]];
	 * 
	 * ubique.rdivide(5,6); // 0.833333
	 * ubique.rdivide(a,3); // [[1.66667, 2, 1.66667], [2.33333, 2.66667, -0.333333]]
	 * ubique.rdivide(3,[-1,-2,-3]); // [-3, -1.5, -1]
	 * ubique.rdivide([5,6,7],[-1,-2,-3]); // [-5, -3, -2.33333]
	 * ubique.rdivide(e,f); //  [[3, 2.5], [1.2, 0.5]]
	 * ubique.rdivide(e,3); //  [[3, 1.66667], [2, 0.333333]]
	 */
	 $u.rdivide = function(x,y) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		if ($u.isnumber(y)) {
	 			return x / y;
	 		}
	 		if ($u.ismatrix(y)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(y);i++) {
	 				var vec = $u.row(y,i);
	 				v[i] = $u.arrayfun(vec,function(val){return x / val;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(y,function(val){return x / val;})
	 	}
	 	if ($u.isnumber(y)) {
	 		if ($u.ismatrix(x)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(x);i++) {
	 				var vec = $u.row(x,i);
	 				v[i] = $u.arrayfun(vec,function(val){return val / y;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(x,function(val){return val / y;})
	 	}
	 	if ($u.isarray(x) && $u.isarray(y)) {
	 		var v = [];
	 		for (var i = 0;i < x.length;i++) {
	 			v[i] = x[i] / y[i];
	 		}
	 		return v;
	 	}
	 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
	 		var v = [];
	 		for (var i = 0;i < $u.nrows(x);i++) {
	 			var vx = $u.row(x,i),
	 			vy = $u.row(y,i);
	 			v[i] = $u.rdivide(vx,vy);
	 		}
	 		return v;
	 	}
	 }
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method rem
	 * @summary Remainder after division
	 * @description Remainder after division. Element-wise for matrix
	 * 
	 * @param  {number|array|matrix} x dividend
	 * @param  {number|array|matrix} y divisor
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * ubique.rem([13,-7],2.2); // [2, -0.4]
	 * ubique.rem([13,-7],[5,6]); // [3, -1]
	 *
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * ubique.rem(a,b); // [[0, 0, 0], [3, 3, -1]]
	 */
	 $u.rem = function(x,y) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var n = $u.fix($u.rdivide(x,y));
	 	return $u.minus(x,$u.times(n,y));
	 }

	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	 	/**
	 * @method round
	 * @summary Round to nearest integer
	 * @description Round to nearest integer. Element-wise for matrix
	 * 
	 * @param  {number|array|matrix} x values
	 * @param  {number} n number of decimal (def: 0)
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * ubique.round(Math.PI,12); // 3.14159265359
	 * ubique.round([-1.4543,4.5234],2); // [-1.45, 4.52]
	 * ubique.round([-1.9,-0.2,3.4,5.6,7.0]); // [-2, 0, 3, 6, 7]
	 * ubique.round([[1.45,-2.3],[1.1,-4.3]]); // [[1, -2], [1, -4]]
	 */
	 $u.round = function(x,n) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		n = 0;
	 	}
	 	var p = Math.pow(10,n);
	 	if ($u.isnumber(x)) {
	 		return Math.round(x*p)/p
	 	}
	 	return $u.arrayfun(x,function(val){return Math.round(val*p)/p;});
	 }

	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method sum
	 * @summary Sum of array elements
	 * @description Sum of array elements
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension, 1: column 0: row (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * ubique.sum([5,6,3]); // 14
	 * ubique.sum([[5,6,5],[7,8,-1]],0); // [16, 14]
	 * ubique.sum([[5,6,5],[7,8,-1]],1); // [[12, 14, 4]]
	 */
	 $u.sum = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _sum = function(a) {
	 		var sum = 0;
	 		for (var i = 0;i < a.length;i++) {
	 			sum += a[i];
	 		}
	 		return sum;
	 	}
	 	if ($u.isarray(x)) {
	 		return _sum(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _sum(val);},dim);
	 }

	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method times
	 * @summary Array multiply X. * Y
	 * @description  Element-by-element multiplication. X and Y must have the same dimensions unless ones is a number
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number|array|matrix} y number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * ubique.times(5,6);  // 30
	 * ubique.times([5,6,4],[3,-1,0]); //  [15, -6, 0]
	 * ubique.times([5,6,4],10); //  [50, 60, 40]
	 * ubique.times(NaN,[5,6,4]);  // [NaN, NaN, NaN]
	 *
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * ubique.times(a,b);  // [[-5, 18, -5], [28, 40, -9]]
	 */
	 $u.times = function(x,y) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		if ($u.isnumber(y)) {
	 			return x * y;
	 		}
	 		if ($u.ismatrix(y)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(y);i++) {
	 				var vec = $u.row(y,i);
	 				v[i] = $u.arrayfun(vec,function(val){return x * val;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(y,function(val){return x * val;})
	 	} else
	 	if ($u.isnumber(y)) {
	 		if ($u.ismatrix(x)) {
	 			var v = [];
	 			for (var i = 0;i < $u.nrows(x);i++) {
	 				var vec = $u.row(x,i);
	 				v[i] = $u.arrayfun(vec,function(val){return val * y;});
	 			}
	 			return v;
	 		}
	 		return $u.arrayfun(x,function(val){return val * y;})
	 	} else
	 	if ($u.isarray(x) && $u.isarray(y)) {
	 		var v = [];
	 		for (var i = 0;i < x.length;i++) {
	 			v[i] = x[i] * y[i];
	 		}
	 		return v;
	 	} else
	 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
	 		var v = [];
	 		for (var i = 0;i < $u.nrows(x);i++) {
	 			var vx = $u.row(x,i),
	 			vy = $u.row(y,i);
	 			v[i] = $u.times(vx,vy);
	 		}
	 		return v;
	 	} else {
	 		throw new Error('unknown input arguments');
	 	}
	 }

	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method Unary minus
	 * @summary Unary minus -X
	 * @description Unary minus -X
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.uminus(-5); // 5
	 * ubique.uminus([5,6]); // [-5, -6]
	 * ubique.uminus([[5,6],[-1,-3]]); // [[-5, -6], [1, 3]]
	 */
	 $u.uminus = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {return -x;}
	 	return $u.arrayfun(x,function(a){return -a;});
	 }

	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method uplus
	 * @summary Unary plus +X
	 * @description Unary plus +X
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.uplus(-5); // -5
	 * ubique.uplus([5,6]); // [5, 6]
	 * ubique.uplus([[5,6],[-1,-3]]); // [[5, 6], [-1, -3]]
	 */
	 $u.uplus = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {return x;}
	 	return $u.arrayfun(x,function(a){return a;});
	 }

	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Complex Numbers
	 */
	 module.exports = function($u) {
	/**
	 * @method abs
	 * @summary Absolute value
	 * @description Absolute value
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * ubique.abs(-0.5);  // -1
	 * ubique.abs([0.1,-0.5]); // [0.1, 0.5]
	 * ubique.abs([[5,-2],[-3,4]]); // [[5, 2], [3, 4]]
	 */
	 $u.abs = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var fun = Math.abs;
	 	if ($u.isnumber(x)) {
	 		return fun(x);
	 	}
	 	return $u.arrayfun(x,fun);
	 }

	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Special Functions
	 */
	 module.exports = function($u) {
	/**
	 * @method  erf
	 * @summary Error function
	 * @description Error function
	 * 
	 * Approximation with maximal error 1.2x10^-7
	 * erf(x) = 2/sqrt(pi) * integral from 0 to x of exp(-t^2) dt
	 * 
	 * @param  {number} x real value
	 * @return {number}
	 * 
	 * @example
	 * ubique.erf(0.5);  // 0.5204999077232426
	 */
	 $u.erf = function(x) {
	 	return 1 - $u.erfc(x);
	 }

	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Special Functions
	 */
	 module.exports = function($u) {
	/**
	 * @method erfc
	 * @summary Complementary error function
	 * @description Complementary error function
	 *
	 * erfc(x) = 2/sqrt(pi) * integral from x to inf of exp(-t^2) dt
	 * erfc(x) = 1 - erf(x)
	 * 
	 * @param  {number} x must be real
	 * @return {number}
	 * 
	 * @example
	 * ubique.erfc(0.5); // 0.47950009227675744
	 */
	 $u.erfc = function(x) {
	  var z = Math.abs(x),
	  t = 1 / (0.5 * z + 1),
	  a1 = t * 0.17087277 + -0.82215223,
	  a2 = t * a1 + 1.48851587,
	  a3 = t * a2 + -1.13520398,
	  a4 = t * a3 + 0.27886807,
	  a5 = t * a4 + -0.18628806,
	  a6 = t * a5 + 0.09678418,
	  a7 = t * a6 + 0.37409196,
	  a8 = t * a7 + 1.00002368,
	  a9 = t * a8,
	  a10 = -z * z - 1.26551223 + a9,
	  a = t * Math.exp(a10);

	  if (x < 0) {a = 2 - a;}
	  return a;
	}

	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Special Functions
	 */
	 module.exports = function($u) {
	/**
	 * @method  erfcinv
	 * @summary Inverse complementary error function
	 * @description Inverse complementary error function
	 * 
	 * It satisfies y = erfc(x) for 2 >= y >= 0 with -Inf <= x <= Inf
	 * 
	 * @param  {number} y real value in range [2,0]
	 * @return {number}   
	 *
	 * @example
	 * ubique.erfcinv(1.5);  // -0.476936236121904
	 */
	 $u.erfcinv = function(y) {
	    if (y >= 2) {return -Infinity;}
	    if (y <= 0) {return Infinity;}
	    var z = 0,
	    _y = (y < 1) ? y : 2 - y,
	    t = Math.sqrt(-2 * Math.log(_y / 2));
	    x = -0.70711 * ((2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t);
	    for (var i = 0; i < 2; i++) {
	        z = $u.erfc(x) - _y;
	        x += z / (1.12837916709551257 * Math.exp(-x * x) - x * z);
	    }
	    return (y < 1) ? x : -x;
	}

	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Special Functions
	 */
	 module.exports = function($u) {
	/**
	 * @method  erfinv
	 * @summary Inverse error function
	 * @description Inverse error function
	 * 
	 * The inverse error function satisfies y = erf(x), for -1 <= y <= 1 and -inf <= x <= inf
	 * 
	 * @param  {number} y real value in range [-1,1]
	 * @return {number}   
	 *
	 * @example
	 * ubique.erfinv(0.5); // 0.47693623612155117
	 */
	 $u.erfinv = function(y) {
	    var x,x1,x2,x3,x4,x5,x6,x7,x8,x9,z,z1,z2,z3
	    if (y <= -1) {x = -Infinity;return x;}
	    else if (y >= 1) {x = Infinity;return x;}
	    else if (y < -0.7) {
	        z1 = (1 + y) / 2;
	        z2 = Math.log(z1) / Math.log(Math.E);
	        z3 = Math.sqrt(-z2);
	        z = z3;
	        x1 = 1.641345311 * z + 3.429567803;
	        x2 = x1 * z + -1.624906493;
	        x3 = x2 * z + -1.970840454;
	        x4 = 1.637067800 * z + 3.543889200;
	        x5 = x4 * z + 1;
	        x6 = -x3 / x5;
	        x = x6;
	    } else if (y < 0.7) {
	        z = y * y;
	        x1 = -0.140543331 * z + 0.914624893;
	        x2 = x1 * z + -1.645349621;
	        x3 = x2 * z + 0.886226899;
	        x4 = 0.012229801 * z + -0.329097515;
	        x5 = x4 * z + -0.329097515;
	        x6 = x5 * z + 1.442710462;
	        x7 = x6 * z + -2.118377725;
	        x8 = x7 * z + 1;
	        x9 = y * x3 / x8;
	        x = x9;
	    } else {
	        z1 = (1 + y) / 2;
	        z2 = Math.log(z1);
	        z3 = Math.sqrt(-z2);
	        z = z3;
	        x1 = 1.641345311 * z + 3.429567803;
	        x2 = x1 * z + -1.624906493;
	        x3 = x2 * z + -1.970840454;
	        x4 = 1.637067800 * z +  3.543889200;
	        x5 = x4 * z + 1;
	        x6 = x3 / x5;
	        x = x6;
	    }
	    x = x - ($u.erf(x) - y) / (2/Math.sqrt(Math.PI) * Math.exp(-x*x));
	    x = x - ($u.erf(x) - y) / (2/Math.sqrt(Math.PI) * Math.exp(-x*x));

	    return x;
	}

	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Exponents and Logarithms
	 */
	 module.exports = function($u) {
	/**
	 * @method exp
	 * @summary Exponential value
	 * @description Exponential value
	 * 
	 * @param  {number|array|matrix} x element
	 * @return {number|array|matrix}   
	 *
	 * @example  
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.exp(6); // 403.429
	 * ubique.exp(c); // [148.413, 403.429, 20.0855]
	 * ubqie.exp(a); // [[148.413, 403.429, 148.413], [1096.63, 2980.96, 0.367879]]
	 */
	 $u.exp = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var fun = Math.exp;
	 	if ($u.isnumber(x)) {
	 		return fun(x);
	 	}
	 	return $u.arrayfun(x,fun)
	 }

	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Exponents and Logarithms
	 */
	 module.exports = function($u) {
	/**
	 * @method log
	 * @summary Natural logarithm
	 * @description Natural logarithm
	 * 
	 * @param  {number|array|matrix} x element
	 * @return {number|array|matrix}   
	 *
	 * @example  
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.log(6); // 1.79176
	 * ubique.log(c); // [1.60944, 1.79176, 1.09861]
	 * ubique.log(a); // [[1.60944, 1.79176, 1.60944], [1.94591, 2.07944, NaN]]
	 */
	 $u.log = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var fun = Math.log;
	 	if ($u.isnumber(x)) {
	 		return fun(x);
	 	}
	 	return $u.arrayfun(x,fun)
	 }

	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Complex Numbers
	 */
	 module.exports = function($u) {
	/**
	 * @method sign
	 * @summary Signum function
	 * @description Signum function
	 * 
	 * @param  {number|array|matrix} x element
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * ubique.sign(-0.5);  // -1
	 * ubique.sign([0.1,-0.5]); // [1, -1]
	 * ubique.sign([[5,-2],[-3,4]]); // [[1, -1], [-1, 1]]
	 */
	 $u.sign = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var _sign = function(val) {
	 		if ($u.isnumber(val)) {
	 			if (val > 0) {
	 				return 1;
	 			} else
	 			if (val < 0) {
	 				return -1;
	 			}
	 			return 0;
	 		} else {
	 			return NaN;
	 		}
	 	}
	 	if ($u.isnumber(x)) {
	 		return _sign(x);
	 	}
	 	return $u.arrayfun(x,_sign)
	 }

	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Exponents and Logarithms
	 */
	 module.exports = function($u) {
	/**
	 * @method log
	 * @summary Square root
	 * @description Square root
	 * 
	 * @param  {number|array|matrix} x element
	 * @return {number|array|matrix}   
	 *
	 * @example  
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.sqrt(6); // 2.44949
	 * ubique.sqrt(c); // [2.23607, 2.44949, 1.73205]
	 * ubique.sqrt(a); // [[2.23607, 2.44949, 2.23607], [2.64575, 2.82843, NaN]]
	 */
	 $u.sqrt = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var fun = Math.sqrt;
	 	if ($u.isnumber(x)) {
	 		return fun(x);
	 	}
	 	return $u.arrayfun(x,fun)
	 }

	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Matrix Analysis
	 */
	 module.exports = function($u) {
	/**
	 * @method det
	 * @summary Matrix determinant
	 * @description Matrix determinant with LU decomposition method
	 *
	 * @param  {matrix} x square matrix
	 * @return {number}   
	 * 
	 * @example
	 * var e = [[0, 5], [6, 0]];
	 * var f = [[3, 2], [5, 2]];
	 * 
	 * ubique.det(e); // -30
	 * ubique.det(f); // -4
	 * ubique.det([[2,2],[2,2]]); // 0
	 */
	 $u.det = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x) || $u.isarray(x)) {
	 		throw new Error('input must be a matrix');
	 	}
	 	if (!$u.issquare(x)) {
	 		throw new Error('matrix must be square')
	 	}
	 	if ($u.issingular(x)) {
	 		throw new Error('matrix is singular');
	 	}
	 	var n = $u.ncols(x),
	 	lumat = $u.lu(x),
	    out = lumat.S;
	 	for (var i = 0;i < n;i++) {
	 		out = out * lumat.LU[i][i];
	 	}
	 	return out;
	 }

	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Linear Equations
	 */
	 module.exports = function($u) {
	  /**
	  * @method inv
	  * @summary Matrix inverse
	  * @description Inverse of a square matrix
	  * 
	  * @param  {number|array|matrix} x number or array of values
	  * @return {number|array|matrix}   
	  *
	  * @example
	  * var f = [[3, 2], [5, 2]]; // [[-0.5, 0.5], [1.25, -0.75]]
	  * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	  *
	  * ubique.inv(f); // [[-0.5, 0.5], [1.25, -0.75]]
	  * ubique.inv(l); // [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
	  */
	  $u.inv = function(x) {
	    if (arguments.length === 0) {
	      throw new Error('not enough input arguments');
	    }
	    if (!$u.issquare(x)) {
	      throw new Error('matrix must be square');
	    }
	    if ($u.isnumber(x)) {
	      return 1/x;
	    }
	    var m = $u.nrows(x),
	    I = $u.eye(m);
	    return $u.linsolve(x,I);

	  }

	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Linear Equations
	 */
	 module.exports = function($u) {
	  /**
	  * @method linsolve
	  * @summary Solve linear system of equations Ax = b
	  * @description Solve linear system of equations Ax = b using LU factorization with 
	  * rows pivoting
	  * 
	  * @param  {matrix} A square matrix
	  * @param  {array|matrix} b vector or matrix
	  * @return {array|matrix}   
	  *
	  * @example
	  * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	  * var m = [4,-6,7];
	  * 
	  * ubique.linsolve(l,m); // [1, 2, -1]
	  *
	  * var a = [[5,6,5],[7,8,-1]];
	  * var c = [5,6,3];
	  * var g = ubique.cat(0,a,c);
	  *
	  * ubique.linsolve(g,m); // [-68.5, 59, -1.5]
	  *
	  * ubique.linsolve(l,ubique.eye(3)); // [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
	  */
	  $u.linsolve = function(A,b) {
	    if (arguments.length <= 1) {
	      throw new Error('not enough input arguments');
	    }
	    if ($u.nrows(A) !== $u.nrows(b)) {
	    	throw new Error('matrix dimensions must agree');
	    }
	    if (!$u.issquare(A)) {
	      throw new Error('matrix must be square');
	    }
	    if ($u.isnumber(A) && $u.isnumber(b)) {
	      return b/A;
	    }
	    var lud = $u.lu(A);
	    if ($u.issingular(lud.LU)) {
	    	throw new Error('matrix is singular');
	    }
	    var LU = lud.LU,
	    m = $u.nrows(LU),
	    bn = $u.ncols(b),
	    bidx = $u.colon(0,bn - 1);

	    if ($u.isarray(b)) {
	      x = $u.subset(b,lud.P);
	    } else
	    if ($u.ismatrix(b)) {
	      x = $u.subset(b,lud.P,bidx);
	    }
	    
	    var solve = function(LU,m,x) {
	      sum = 0;

			// Solve Ly = b using forward substitution
	    for (var i = 1;i < m;i++) {
	      sum = x[i];
	      for (var j = 0;j < i;j++){
	        sum -= LU[i][j] * x[j];
	      }
	      x[i] = sum;
	    }

	    // Solve Ux = y using back substitution
	    x[m-1] /= LU[m-1][m-1];
	    for (var i = m-2;i >= 0;i--) {
	      sum = x[i];
	      for (var j = i+1;j < m;j++) {
	        sum -= LU[i][j] * x[j];
	      }
	      x[i] = sum / LU[i][i];
	    }
	    return x;
	  }
	  if ($u.isarray(b) ) {
	    return solve(LU,m,x);
	  } else {
	    for (var h = 0;h < bn;h++) {
	      var tcol = $u.col(x,h);
	      if (h === 0) {
	        out = solve(LU,m,tcol);
	      } else {
	        out = $u.cat(1,out,solve(LU,m,tcol));
	      }
	    }
	    return out;
	  }
	}
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Matrix Decomposition
	 */
	 module.exports = function($u) {
	/**
	 * @method lu
	 * @summary LU matrix factorization
	 * @description LU matrix factorization based on Doolittle algorithm. The LU decomposition with pivoting always exists, 
	 * even if the matrix is singular. 
	 *
	 * @param  {matrix} x input matrix
	 * @return {object}    .LU (lu matrix) 
	 *                     .L (lower triangular matrix)
	 *                     .U (upper triangular matrix)
	 *                     .P (pivot vector)
	 *                     .S (pivot sign) +1 or -1
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var e = [[0, 5], [6, 0]];
	 *
	 * ubique.lu(a); // { LU: [ [ 7, 8, -1 ], [ 0.7142857142857143, 0.2857142857142856, 5.714285714285714 ] ],
	 *               //    L: [ [ 1, 0 ], [ 0.7142857142857143, 1 ] ],
	 *               //    U: [ [ 7, 8, -1 ], [ 0, 0.2857142857142856, 5.714285714285714 ] ],
	 *               //    P: [ 1, 0 ],
	 *               //    S: -1;}
	 *
	 * ubique.lu(e); // { LU: [ [ 6, 0 ], [ 0, 5 ] ],
	 *               //    L: [ [ 1, 0 ], [ 0, 1 ] ],
	 *               //    U: [ [ 6, 0 ], [ 0, 5 ] ],
	 *               //    P: [ 1, 0 ],
	 *               //    S: -1;}
	 */
	 $u.lu = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}

	 	// LU decomposition
	 	var lud = function(a) {
	 		var _a = a;
	 		m = $u.nrows(_a),
	 		n = $u.ncols(_a),
	 		piv = $u.colon(0,m - 1),
	 		pivsign = 1,
	 		_arow = [],
	 		_acol = [];

	 		for (var j = 0; j < n; j++) {

	 			_acol = $u.col(_a,j);

	 			for (var i = 0; i < m; i++) {

	 				_arow = $u.row(_a,i);

	 				var kmax = Math.min(i, j);
	 				var s = 0;
	 				for (var k = 0; k < kmax; k++) {
	 					s += _arow[k] * _acol[k];
	 				}
	 				_arow[j] = _acol[i] -= s;
	 			}
	          
	 			var p = j;
	 			for (var i = j + 1; i < m; i++) {
	 				if (Math.abs(_acol[i]) > Math.abs(_acol[p])) {
	 					p = i;
	 				}
	 			}
	 			if (p !== j) {
	 				for (var k = 0; k < n; k++) {
	 					var t = _a[p][k];
	 					_a[p][k] = _a[j][k];
	 					_a[j][k] = t;
	 				}
	 				var k = piv[p];
	 				piv[p] = piv[j];
	 				piv[j] = k;
	 				pivsign = -pivsign;
	 			}

	 			if (j < m && _a[j][j] !== 0) {
	 				for (var i = j + 1; i < m; i++) {
	 					_a[i][j] /= _a[j][j];
	 				}
	 			}
	 		}
	 		return {'Y':_a,'P':piv,'S':pivsign};
	 	}

	 	// Lower triangular matrix L
	 	var ltm = function(L) {
	 		var m = $u.nrows(L),
	 		n = $u.ncols(L);
	 		if (m < n) {
	 			var _L = $u.zeros(m,m);
	 		} else {
	 			var _L = $u.zeros(m,n);
	 		}
	 		for (var i = 0; i < $u.nrows(_L); i++) {
	 			for (var j = 0; j < $u.ncols(_L); j++) {
	 				if (i > j) {
	 					_L[i][j] = L[i][j];
	 				} else 
	 				if (i == j) {
	 					_L[i][j] = 1;
	 				}
	 			}
	 		}
	 		return _L;
	 	}

	    // Upper triangular matrix U
	    var utm = function(U) {
	    	var m = $u.nrows(U),
	    	n = $u.ncols(U);
	    	if (m < n) {
	    		var _U = $u.zeros(m,n);
	    	} else {
	    		var _U = $u.zeros(n,n);
	    	}
	    	for (var i = 0; i < m; i++) {
	    		for (var j = 0; j < n; j++) {
	    			if (i <= j) {
	    				_U[i][j] = U[i][j];
	    			}
	    		}
	    	}
	    	return _U;
	    }

	    // LU matrix
	    var _LU = lud(x);
	    return {'LU':_LU.Y,'L':ltm(_LU.Y),'U':utm(_LU.Y),'P':_LU.P,'S':_LU.S};
	}



	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method cat
	 * @summary Concatenate arrays and matrices
	 * @description Concatenate arrays and matrices along specified dimension as first argument
	 *              
	 * @param  {number|array|matrix...} args variable arguments: first must be a number for dimension (0:rows, 1:columns)
	 * @return {array|matrix}     
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var f = [[3, 2], [5, 2]];
	 *
	 * // Row concat
	 * ubique.cat(0,a,b); // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9]]
	 * ubique.cat(0,a,b,b); // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9], [-1, 3, -1], [4, 5, 9]]
	 * ubique.cat(0,c,d); // [5, 6, 3, 0.5, -3, 2.3]
	 * ubique.cat(0,[1],[2]); // [1, 2]
	 * ubique.cat(0,5,7,9,8); // [5,7,9,8]
	 * ubique.cat(0,5,7,c); // [5, 7, 5, 6, 3]
	 *
	 * // Column concat
	 * ubique.cat(1,a,b); // [[5, 6, 5, -1, 3, -1], [7, 8, -1, 4, 5, 9]]
	 * ubique.cat(1,a,b,f); // [[5, 6, 5, -1, 3, -1, 3, 2], [7, 8, -1, 4, 5, 9, 5, 2]]
	 * ubique.cat(1,a,[2,3]); // [[5, 6, 5, 2], [7, 8, -1, 3]]
	 * ubique.cat(1,5,6,7); // [[5, 6, 7]]
	 */
	 $u.cat = function() {
	 	var _args = arguments,
	 	nargs = arguments.length;
	 	if (nargs === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (nargs === 1) {
	 		return [];
	 	}
	 	if (nargs > 1) {
	 		var dim = _args[0];
	 		if (dim !== 0 && dim !== 1) {
	 			throw new Error('dimension must be 0 (rows) or 1 (columns)');
	 		}
	 		if (dim === 0) {
	 			for (var i = 1;i < nargs - 1;i++) {
	 				var tmp = _args[i + 1];
	 				if ($u.isnumber(_args[1])) {
	 					if (i === 1) {
	 						var out = [_args[1]];
	 					}
	 					if ($u.isnumber(tmp) || $u.isarray(tmp)) {
	 						out = out.concat(tmp);
	 					} else {
	 						throw new Error('concatenation dimension mismatch');
	 					}
	 				} else 
	 				if ($u.isarray(_args[1])) {
	 					if (i === 1) {
	 						var out = _args[1];
	 					}
	 					if ($u.isnumber(tmp) || $u.isarray(tmp)) {
	 						out = out.concat(tmp);
	 					} else {
	 						throw new Error('concatenation dimension mismatch');
	 					}
	 				} else 
	 				if ($u.ismatrix(_args[1])) {
	 					if (i === 1) {
	 						var out = _args[1];
	 					}
	 					if ($u.ismatrix(tmp)) {
	 						if (i > 1 && ($u.ncols(tmp) !== $u.ncols(out))) {
	 							throw new Error('concatenation dimension mismatch');
	 						}
	 						out = out.concat(tmp);
	 					} else {
	 						throw new Error('concatenation dimension mismatch');
	 					}
	 				} else {
	 					throw new Error('unknown input arguments');
	 				}
	 			}
	 			return out;
	 		}
	 		if (dim === 1) {
	 			var out = [];
	 			for (var i = 0;i < nargs - 1;i++) {
	 				var tmp = _args[i + 1];
	 				if ($u.isnumber(tmp)) {
	 					tmp = [[tmp]];
	 				}
	 				if ($u.isarray(tmp)) {
	 					tmp = $u.tomat(tmp);
	 				}
	 				if (i > 0 && ($u.nrows(tmp) !== $u.nrows(out))) {
	 					throw new Error('concatenation dimension mismatch');
	 				}
	 				if (i === 0) {
	 					out = $u.clone(tmp);
	 				} else {
	 					for (var j = 0;j < $u.nrows(out);j++) {
	 						var row = out[j];
	 						row = row.concat(tmp[j]);
	 						out[j] = row;
	 					}
	 				}
	 			}
	 			return out;
	 		}
	 	}
	 }

	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method clone
	 * @summary Create a clone of the input array or matrix
	 * @description Create a clone of the input array or matrix
	 * 
	 * @param  {array|matrix} x array or matrix
	 * @return {array|matrix}       
	 *
	 * @example
	 * var b = [[-1,3,-1],[4,5,9]];
	 * var c = [5,6,3];
	 * var d = [[[5]]];
	 * 
	 * ubique.clone(b); // [[-1,3,-1],[4,5,9]]
	 * ubique.clone(c); // [5,6,3]
	 * ubique.clone(d): // [[[5]]]
	 */
	 $u.clone = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	}
	 	if ($u.isarray(x)) {
	 		var out = new Array(x.length);
	 		for (var i = 0; i < x.length; i++) {
	 			out[i] = x[i];
	 		}
	 		return out;
	 	}
	 	if ($u.ismatrix(x)) {
	 		var size = $u.size(x),
	 		out = new Array(size[0]);
	 		for (var i = 0;i < size[0];i++) {
	 			out[i] = new Array(size[1]);
	 			for (j = 0; j < size[1]; j++) {
	 				out[i][j] = x[i][j];
	 			}
	 		}
	 		return out;
	 	}

	 }
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Indexing
	 */
	 module.exports = function($u) {
	/**
	 * @method col
	 * @summary Get a column of a matrix
	 * @description  Get a column of a matrix
	 * 
	 * @param  {array|matrix} x matrix of elements
	 * @param  {number} n column number (indexing from 0 to n - 1)
	 * @return {array}   
	 *
	 * @example
	 * ubique.col([[5,6,5],[7,8,-1]],0); // [5, 7]
	 */
	 $u.col = function(x,n) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if ($u.isundefined(n)) {
	    n = 0;
	  }
	  if ($u.isarray(x)) {
	    return x;
	  }
	  if (!$u.isinteger(n) || n < 0 || n >= $u.ncols(x)) {
	    throw new Error('column must be an integer between 0 and N - 1 columns');
	  }
	  var v = [];
	  for (var i = 0;i < x.length;i++) {
	    v[i] = x[i][n];
	  }
	  return v;
	}

	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Indexing
	 */
	 module.exports = function($u) {
	/**
	 * @method colon
	 * @summary Array of numbers from L to U with step S
	 * @description Array of numbers from L to U with step S
	 * 
	 * @param  {number} l lower value of the array
	 * @param  {number} u upper value of the array
	 * @param  {number} s step value (def: 1)
	 * @return {array}
	 *
	 * @example
	 * ubique.colon(1,10,1); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	 * ubique.colon(10,1,1); //  []
	 * ubique.colon(-5,5,2); // [-5, -3, -1, 1, 3, 5]
	 * ubique.colon(-7,14,2); // [-7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13]
	 */
	 $u.colon = function(l,u,s) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 2 || $u.isundefined(s)) {
	 		s = 1;
	 	}
	 	if (s === 0 || (s > 0 && l > u) || (s < 0 && l < u)) {
	 		return [];
	 	}
	 	var t = $u.fix((u - l) / s);
	 	var out = [];
	 	out[0] = l;
	 	for (var i = 1; i <= t; i++ ) {
	 		out[i] = out[i - 1] + s;
	 	}
	 	return out;
	 }

	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	 /**
	 * @method diag
	 * @summary Diagonal matrix and get diagonals of a matrix
	 * @description  Diagonal matrix (if array) and get diagonals of a matrix (if matrix)
	 * 
	 * @param  {array|matrix} x array or matrix values
	 * @param  {number} k k-th diagonal. 0: main diagonal, k > 0 above, k < 0 below (def: 0)
	 * @return {array|matrix}   
	 *
	 * @example
	 * // build diag matrix
	 * ubique.diag([5,6,-3]); // [[5, 0, 0], [0, 6, 0], [0, 0, -3]]
	 * ubique.diag([5,6,-3,1]); // [[0, 5, 0, 0], [0, 0, 6, 0], [0, 0, 0, -3], [0, 0, 0, 0]]
	 * ubique.diag([5,6,-3,-1]); // [[0, 0, 0, 0], [5, 0, 0, 0], [0, 6, 0, 0], [0, 0, -3, 0]]
	 *
	 * // get diag values from matrix
	 * ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]]); // [5,6,-3]
	 * ubique.diag([[0, 5, 0, 0], [0, 0, 6, 0], [0, 0, 0, -3], [0, 0, 0, 0]],1); // [5,6,-3]
	 * ubique.diag([[0, 0, 0, 0], [5, 0, 0, 0], [0, 6, 0, 0], [0, 0, -3, 0]],-1); // [5,6,-3]
	 * ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]],2); // [0, 0]
	 */
	 $u.diag = function(x,k) {
	 	if ($u.isundefined(k)) {k = 0;}
	 	if ($u.isarray(x)) {
	 		var n = x.length,
	 		abs = Math.abs;
	 		var matrix = $u.zeros(n + abs(k),n + abs(k));
	 		for (var i = 0;i < n;i++) {
	 			if (k >= 0) {
	 				matrix[i][i + abs(k)] = x[i];
	 			}
	 			if (k < 0) {
	 				matrix[i + abs(k)][i] = x[i];
	 			}
	 		}
	 		return matrix;
	 	} else 
	 	if ($u.ismatrix(x)) {
	 		var array = [],
	 		abs = Math.abs;
	 		for (var i = 0;i < $u.nrows(x) - abs(k);i++) {
	 			if (k >= 0) {
	 				array.push(x[i][i + abs(k)]);
	 			}
	 			if (k < 0) {
	 				array.push(x[i + abs(k)][i]);
	 			}
	 		}
	 		return array;
	 	} else {
	 		throw new Error('unknown input');
	 	}
	 }

	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Indexing
	 */
	 module.exports = function($u) {
	/**
	 * @method end
	 * @summary Last index in array or matrix
	 * @description Last index in array or matrix. Indexing is in the range [0...N-1]
	 *  
	 * @param  {array|matrix} x values
	 * @return {array}   
	 * 
	 * @example
	 * ubique.end([5,6,3]); // [2, 0]
	 * ubique.end([[4,5,0],[-1,2,-3]]); // [1, 2]
	 */
	 $u.end = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	return [$u.nrows(x) - 1,$u.ncols(x) - 1];
	 }

	}



/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* Array Creation and Concatenation
	*/
	module.exports = function($u) {
	/**
	 * @method eye
	 * @summary Identity matrix
	 * @description Identity matrix
	 * 
	 * @param  {number|array|...} args  variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.eye(); // 1
	 * ubique.eye(0); // []
	 * ubique.eye(1); / [[1]]
	 * ubique.eye(2); // [[1, 0], [0, 1]]
	 * ubique.eye([2,1]); // [[1], [0]]
	 * ubique.eye(1,2); // [[1, 0]]
	 * ubique.eye(2,3); // [[1, 0, 0], [0, 1, 0]]
	 */
	 $u.eye = function() {
	 	if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
	 		return 0;
	 	}
	 	var _args = [];
	 	for (var i = 0;i < arguments.length; i++) {
	 		_args.push(arguments[i]);
	 	}
	 	if ($u.ismatrix(_args)) {_args = _args[0];}
	 	if (_args.length === 1) {_args = [_args[0],_args[0]];}
	 	var matrix =  $u.matrix(_args,0);

	 	if ($u.isnumber(matrix)) {return 1;}
	 	if ($u.isempty(matrix)) {return [];}
	 	for (var i = 0;i < Math.min.apply(Math,$u.size(matrix));i++) {
	 		matrix[i][i] = 1;
	 	}
	 	return matrix;
	 }
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method falses
	 * @summary Create array of all false
	 * @description Create array of all false
	 * 
	 * @param  {number|array|...} args  variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.falses(); // false
	 * ubique.falses(0); // []
	 * ubique.falses(1); / [[false]]
	 * ubique.falses(2); // [[false, false], [false, false]]
	 * ubique.falses([2,1]); // [[false], [false]]
	 * ubique.falses(1,2); // [[false, false]]
	 * ubique.falses(2,3); // [[false, false, false], [false, false, false]]
	 */
	 $u.falses = function() {
	  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
	    return false;
	  }
	  var _args = [];
	  for (var i = 0;i < arguments.length; i++) {
	    _args.push(arguments[i]);
	  }
	  if ($u.ismatrix(_args)) {_args = _args[0];}
	  if (_args.length === 1) {_args = [_args[0],_args[0]];}
	  return $u.matrix(_args,false);
	}

	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method fix
	 * @summary Round toward zero
	 * @description Round toward zero
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.fix(3.78); // 3
	 * ubique.fix([4.51,-1.4]); // [4, -1]
	 * ubique.fix([[4.51,-1.4],[3.78,0.01]]); // [[4, -1], [3, 0]]
	 */
	 $u.fix = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var _fix = function(a) {
	 		return a < 0 ? Math.ceil(a) : Math.floor(a);
	 	}
	 	if ($u.isnumber(x)) {
	 		return _fix(x);
	 	}
	 	return $u.arrayfun(x,_fix);
	 }

	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method flatten
	 * @summary Flatten a matrix
	 * @description Flatten a matrix and returns an array. The concatenation is made by columns.
	 * Example: flatten([[a,b],[c,d]]) returns [a,c,b,d]
	 * 
	 * @param  {matrix} x matrix of elements
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {array}  
	 *
	 * @example
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 * 
	 * ubique.flatten([[5,6],[7,8]]); // [5, 7, 6, 8]
	 * ubique.flatten([[5,6],[7,8]],1); // [5, 6, 7, 8]
	 * ubique.flatten(l); // [1, 1, 2, 1, -2, 3, -1, 3, 1]
	 */
	 $u.flatten = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	if ($u.isnumber(x) || $u.isarray(x)) {
	 		return x;
	 	}
	 	if ($u.ismatrix(x)) {
	 		if (dim === 1) {
	 			x = $u.transpose(x);
	 		}
	 		x = Array.prototype.concat.apply([], x);
	 		if (x.some(Array.isArray)) {
	 			return this.flatten(x);
	 		} else {
	 			return x;
	 		}
	 	} else {
	 		throw new Error('unknown input arguments');
	 	}
	 }
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method flip
	 * @summary Flip order of elements in array or matrix
	 * @description Flip order of elements in array or matrix
	 * 
	 * @param  {array|matrix} x  array or matrix of elements
	 * @param  {number} dim dimension to apply reverse ordering 0: rows, 1: column (def: 0)
	 * @return {array|matrix}     
	 * 
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 * 
	 * ubique.flip(c); // [3, 6, 5]
	 * ubique.flip(c,0); // [5, 6, 3]
	 * ubique.flip(a); // [[7, 8, -1], [5, 6, 5]]
	 * ubique.flip(a,0); // [[5, 6, 5], [-1, 8, 7]]
	 */
	 $u.flip = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  if ($u.isnumber(x)) {
	    return x;
	  } else 
	  if ($u.isarray(x)) {
	    if (dim === 1) {
	      return x.reverse();
	    } else {
	      return x;
	    }
	  } else 
	  if ($u.ismatrix(x)) {
	    return $u.vectorfun(x,function(val){return val.reverse();},dim);
	  } else {
	    throw new Error('unknown input arguments');
	  }

	}
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method fliplr
	 * @summary Flip matrix left to right
	 * @description Flip matrix left to right
	 * 
	 * @param  {array|matrix} x array or matrix of lements
	 * @return {array|matrix}   
	 *
	 * @example
	 * ubique.fliplr([[1,4],[2,5],[3,6]]); // [[4, 1], [5, 2], [6, 3]]
	 */
	 $u.fliplr = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	return $u.flip(x,0);
	 }

	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method flipud 
	 * @summary Flip matrix up to down
	 * @description Flip matrix up to down
	 * 
	 * @param  {array|matrix} x array or matrix of lements
	 * @return {array|matrix}   
	 *
	 * @example
	 * ubique.fliplr([[1,4],[2,5],[3,6]]); // [[3, 6], [2, 5], [1, 4]]
	 */
	 $u.flipud = function(x) {
	 		if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	return $u.flip(x,1);
	 }

	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method horzcat
	 * @summary Concatenate arrays or matrices horizontally
	 * @description Concatenate arrays or matrices horizontally
	 *              
	 * @param  {array|matrix|...} args variable arguments (args1,args2,...)
	 * @return {array|matrix}     
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var f = [[3, 2], [5, 2]];
	 *
	 * ubique.horzcat(a,b); // [[5, 6, 5, -1, 3, -1], [7, 8, -1, 4, 5, 9]]
	 * ubique.horzcat(a,b,f); // [[5, 6, 5, -1, 3, -1, 3, 2], [7, 8, -1, 4, 5, 9, 5, 2]]
	 * ubique.horzcat(a,[2,3]); // [[5, 6, 5, 2], [7, 8, -1, 3]]
	 * ubique.horzcat(5,6,7); // [[5, 6, 7]]
	 * ubique.horzcat($u.transpose(c)); // [[5, 5, 6, 3]]
	 */
	 $u.horzcat = function() {
	 	var _args = [1];
	 	for (var i = 0; i < arguments.length; i++) {
	 		_args.push(arguments[i]);
	 	}
	 	return $u.cat.apply(null,_args);
	 }

	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Indexing
	 */
	 module.exports = function($u) {
	/**
	 * @method ind2sub
	 * @summary Multiple subscripts from linear index
	 * @description Multiple subscripts from linear index. Returns an array or matrix with 
	 * the equivalent row and column of the corresponding index. 
	 * 
	 * @param  {array|matrix} size  size of array or matrix
	 * @param  {number|array} index linear indexing [0...N-1]
	 * @return {array|matrix}       
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * 
	 * ubique.ind2sub(ubique.size(a),5); // [1, 2]
	 * ubique.ind2sub(ubique.size(a),[0,1,2]); // [[0, 0], [1, 0], [0, 1]]
	 * ubique.ind2sub(ubique.size([5,6,3]),2); // [2, 0]
	 */
	 $u.ind2sub = function(size,index) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var _ind2sub = function(siz,idx) {
	    var v = $u.rem(idx, siz[0]);
	    return [v ,(idx - v) / siz[0]];
	  }
	  if ($u.isarray(index)) {
	    var out = [];
	    for (var i = 0;i < index.length;i++) {
	      out.push(_ind2sub(size,index[i]));
	    }
	    return out;
	  }
	  return _ind2sub(size,index);
	}

	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method iscolumn
	 * @summary True for column vector
	 * @description True for column vector
	 *              
	 * @param  {matrix}  x input matrix
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.iscolumn([[2],[2]]); // true
	 */
	 $u.iscolumn = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.nrows(x) > 1 && $u.ncols(x) === 1) {
	 		return true;
	 	}
	 	return false;
	 }

	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method isrow
	 * @summary True for row vector
	 * @description True for row vector
	 *              
	 * @param  {matrix}  x input matrix
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.isrow([[2,2]]); // true
	 */
	 $u.isrow = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.nrows(x) === 1 && $u.ncols(x) > 1) {
	 		return true;
	 	}
	 	return false;
	 }

	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method issquare
	 * @summary True for square matrix
	 * @description True for square matrix
	 *              
	 * @param  {matrix}  x input matrix
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.issquare([[9, 5], [6, 1]]); // true
	 */
	 $u.issquare = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}

	 	if ($u.nrows(x) === $u.ncols(x)) {
	 		return true;
	 	}
	 	return false;
	 }

	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	* @method length
	* @summary length of vector or largest array dimension
	* @description  length of vector or largest array dimension
	* 
	* @param  {array|matrix} x array of elements
	* @return {number}
	*
	* @example
	* ubique.length([3,5,6]); // 3
	* ubique.length(5); // 1
	* ubique.length([[5,4],[-1,2]]); // 2
	*/
	$u.length = function(x) {
		return Math.max.apply(Math,$u.size(x));
	}

	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method linspace
	 * @summary Create linearly spaced arrays
	 * @description  Create linearly spaced arrays
	 *            
	 * @param  {number} a lower bound
	 * @param  {number} b upper bound
	 * @param  {number} n number of points
	 * @return {array}
	 *
	 * @example
	 * ubique.linspace(1,10,5); // [1, 3.25, 5.5, 7.75, 10]
	 */
	 $u.linspace = function(a,b,n) {
	 	if ($u.isundefined(n)) {n = 100;}
	 	var v = new Array(n),
	 	step = (b - a) / (n - 1);
	 	v[0] = a;
	 	v[n - 1] = b;
	 	for (var i = 0;i < n;i++) {
	 		v[i] = a + step * i;
	 	}
	 	return v;
	 }

	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method logspace
	 * @summary Create logarithmically spaced arrays
	 * @description  Create logarithmically spaced arrays
	 *            
	 * @param  {number} a lower bound
	 * @param  {number} b upper bound
	 * @param  {number} n number of points
	 * @return {array}
	 *
	 * @example
	 * ubique.logspace(0,1,5); // [1, 1.7782794100389228, 3.1622776601683795, 5.623413251903491, 10]
	 */
	$u.logspace = function(a,b,n) {
	 	return $u.linspace(a,b,n).map(function(val){return Math.pow(10,val)});
	 }

	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method matrix
	 * @summary Create a matrix object
	 * @description Create a matrix object with 2 inputs, an array of size [rows,cols] and a chosen value
	 * or with 3 inputs, two numbers for dimension (rows,cols) and the last one for the value
	 * 
	 * @param  {number|array|...} args variable input arguments (max 3)
	 * @return {matrix}       
	 *
	 * @example
	 * ubique.matrix(0); // []
	 * ubique.matrix(2): // [[null, null], [null, null]]
	 * ubique.matrix([2,3]); // [[null, null, null], [null, null, null]]
	 * ubique.matrix(2,3); // [[null, null, null], [null, null, null]]
	 * ubique.matrix([2,3],0); // [[0, 0, 0], [0, 0, 0]]
	 * ubique.matrix(2,3); // [[0, 0, 0], [0, 0, 0]]
	 */
	 $u.matrix = function() {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var _args = arguments,
	 	nargs = arguments.length;
	 	var _matrix = function(x,y,val) {
	 		var out = new Array(x);
	 		for (var i = 0;i < x;i++) {
	 			out[i] = new Array(y);
	 			for (j = 0; j < y; j++) {
	 				out[i][j] = val;
	 			}
	 		}
	 		return out;
	 	}
	 	if (nargs === 0) {
	 		return [[]];
	 	} else
	 	if (nargs === 1) {
	 		if ($u.isnumber(_args[0])) {
	 			return _matrix(_args[0],_args[0],null);
	 		} else 
	 		if ($u.isarray(_args[0])) {
	 			return _matrix(_args[0][0],_args[0][1],null);
	 		} else {
	 			throw new Error('unknwon input type');
	 		}
	 	} else
	 	if (nargs === 2) {
	 		if ($u.isnumber(_args[0]) && $u.isnumber(_args[1])) {
	 			return _matrix(_args[0],_args[1],null);
	 		}
	 		return _matrix(_args[0][0],_args[0][1],_args[1]);
	 	} else
	 	if (nargs === 3) {
	 		return _matrix(_args[0],_args[1],_args[2]);
	 	} else
	 	throw new Error('too manny input arguments');
	 }

	}


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method mergesort
	 * @summary Sort array in ascending/descending order
	 * @description  Mergesort is a divide and conquer algorithm that was invented by John von Neumann. 
	 * A merge sort works as follows:
	 * 1 - Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
	 * 2 - Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.
	 * [Source: http://en.wikipedia.org/wiki/Merge_sort]
	 * 
	 * @param  {array} x array of elements
	 * @param  {string} mode sorting direction, 'ascend' (default) or 'descend'
	 * @return {array}   
	 *
	 * @example
	 * ubique.mergesort([3,1,-1,5],'ascend'); // [-1, 1, 3, 5]
	 * ubique.mergesort([3,1,-1,0,5],'descend'); // [5, 3, 1, 0, -1]
	 */
	 $u.mergesort = function(x,mode) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		mode = 'ascend';
	 	}
	 	if (!$u.isarray(x)) {
	 		throw new Error('input must be an array');
	 	}
	 	var len = x.length;
	 	if (len < 2) {
	 		return x;
	 	}
	 	var cx = parseInt(len / 2),
	 	sx = x.slice(0, cx),
	 	dx  = x.slice(cx, len);

	 	var merge = function(sx,dx,mode) {
	 		var out = [];
	 		while (sx.length && dx.length) {
	 			if (mode === 'ascend') {
	 				var compare = sx[0] <= dx[0];
	 			} else 
	 			if (mode === 'descend') {
	 				var compare = sx[0] >= dx[0];
	 			} else {
	 				throw new Error('sorting must be "ascend" or "descend"');
	 			}
	 			if (compare) {
	 				out.push(sx.shift());
	 			} else {
	 				out.push(dx.shift());
	 			}
	 		}
	 		while (sx.length) {
	 			out.push(sx.shift());
	 		}
	 		while (dx.length) {
	 			out.push(dx.shift());
	 		}
	 		return out;
	 	}
	 	return merge($u.mergesort(sx,mode),$u.mergesort(dx,mode),mode);
	 }
	}


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method ncols
	 * @summary Number of columns in vector|matrix
	 * @description Number of columns in vector|matrix
	 * 
	 * @param  {array|matrix} x array of elements
	 * @return {number}   
	 *
	 * @example
	 * ubique.ncols([5,6,7]); // 1
	 * ubique.ncols([[3,2,7],[4,5,6]]); //  3
	 */
	 $u.ncols = function(x) {
	 	return $u.size(x)[1];
	 }

	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	* @method ndims
	* @summary Number of array dimensions
	* @description Number of array dimensions
	* 
	* @param  {array|matrix} x array of elements
	* @return {number}  
	*
	* @example
	* ubique.ndims([3,5,6]); // 2
	* ubique.ndims([[3,2,7],[4,5,6]]); // 2
	*/
	$u.ndims = function(x) {
		return $u.length($u.size(x));
	}

	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method rows
	 * @summary Number of rows in vector|matrix
	 * @description Number of rows in vector|matrix
	 * 
	 * @param  {array|matrix} x array of elements
	 * @return {number}  
	 *
	 * @example
	 * ubique.nrows([5,6,7]); // 3
	 * ubique.nrows([[3,2,7],[4,5,6]]); // 2
	 */
	 $u.nrows = function(x) {
	 	return $u.size(x)[0];
	 }

	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
		/**
	 * @method numel
	 * @summary Number of elements in an array
	 * @description Number of elements in an array
	 * 
	 * @param  {array|matrix} x array of elements
	 * @return {number} 
	 *
	 * @example
	 * ubique.numel([3,5,6]); // 3
	 * ubique.numel([[3,2,7],[4,5,6]]); // 6
	 */
	 $u.numel = function(x) {
	 	return $u.size(x)[0] * $u.size(x)[1];
	 }

	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method ones
	 * @summary Create array of all ones
	 * @description Create array of all ones
	 * 
	 * @param  {number|array|...} args  variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.ones(); // 1
	 * ubique.ones(0); // []
	 * ubique.ones(1); / [[1]]
	 * ubique.ones(2); // [[1, 1], [1, 1]]
	 * ubique.ones([2,1]); // [[1], [1]]
	 * ubique.ones(1,2); // [[1, 1]]
	 * ubique.ones(2,3); // [[1, 1, 1], [1, 1, 1]]
	 */
	 $u.ones = function() {
	  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
	    return 1;
	  }
	  var _args = [];
	  for (var i = 0;i < arguments.length; i++) {
	    _args.push(arguments[i]);
	  }
	  if ($u.ismatrix(_args)) {_args = _args[0];}
	  if (_args.length === 1) {_args = [_args[0],_args[0]];}
	  return $u.matrix(_args,1);
	}

	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method rand
	 * @summary Uniformly distribuited pseudorandom numbers
	 * @description Uniformly distribuited pseudorandom numbers
	 * 
	 * @param  {number|array|...} args  variable input arguments (max 2)
	 * @return {number|matrix}    
	 *
	 * @example
	 * ubique.rand(); // 0.1455961789470166
	 * ubique.rand(0); // []
	 * ubique.rand(1); // [[0.12391899712383747]]
	 * ubique.rand(2); // [[0.33334478829056025, 0.09839745867066085],[0.6006140187382698, 0.3131265211850405]]
	 * ubique.rand([2,1]); // [[0.40439655422233045], [0.7663801296148449]]
	 * ubique.rand(1,2); // [[0.16782891773618758, 0.5958379742223769]]
	 * ubique.rand(2,3); // [[0.890318026766181, 0.7398379456717521, 0.6165686929598451], [0.7234933257568628, 0.9895968120545149, 0.875643968814984]]
	 */
	 $u.rand = function() {
	 	var _args = arguments,
	 	nargs = arguments.length;
	 	var _rand = function(x,y) {
	 		var out = new Array(x);
	 		for (var i = 0;i < x;i++) {
	 			out[i] = new Array(y);
	 			for (j = 0; j < y; j++) {
	 				out[i][j] = Math.random();
	 			}
	 		}
	 		return out;
	 	}
	 	if (nargs === 0) {
	 		return Math.random();
	 	} else
	 	if (nargs === 1) {
	 		if ($u.isnumber(_args[0])) {
	 			return _rand(_args[0],_args[0]);
	 		} else 
	 		if ($u.isarray(_args[0])) {
	 			return _rand(_args[0][0],_args[0][1]);
	 		} else {
	 			throw new Error('unknwon input type');
	 		}
	 	} else
	 	if (nargs === 2) {
	 		if ($u.isnumber(_args[0]) && $u.isnumber(_args[1])) {
	 			return _rand(_args[0],_args[1]);
	 		}
	 		return _rand(_args[0][0],_args[0][1],_args[1]);
	 	} else
	 	if (nargs === 3) {
	 		return _rand(_args[0],_args[1],_args[2]);
	 	} else
	 	throw new Error('too manny input arguments');
	 }
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method  repmat
	 * @summary Replicate and tile array
	 * @description  Replicate and tile array
	 *
	 * @param  {number|array|matrix|boolean} x  value assigned to every elements of array or matrix
	 * @param  {number} m number of matrix rows
	 * @param  {number} n number of matrix columns
	 * @return {matrix}     
	 *
	 * @example
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 * 
	 * ubique.repmat(10,3); // [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
	 * ubique.repmat(0.5,3,2); // [[0.5, 0.5], [0.5, 0.5], [0.5, 0.5]]
	 * ubique.repmat(0.5,1,4); // [[ 0.5, 0.5, 0.5 ]]
	 * ubique.repmat(NaN,2,4); // [[NaN, NaN, NaN, NaN], [NaN, NaN, NaN, NaN]]
	 * ubique.repmat(true,4,1);  // [[true], [true], [true], [true]]
	 * ubique.repmat([5,6,3],1,2); // [[5, 5], [6, 6], [3, 3]]
	 * ubique.repmat(l,2); // [[1, 1, -1, 1, 1, -1], [1, -2, 3, 1, -2, 3], [2, 3, 1, 2, 3, 1], [1, 1, -1, 1, 1, -1], [1, -2, 3, 1, -2, 3], [2, 3, 1, 2, 3, 1]]
	 */
	 $u.repmat = function(x,m,n) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 2) {
	 		n = m;
	 	}
	 	if ($u.isnumber(x) || $u.isarray(x) || $u.islogical(x)) {
	 		x = $u.tomat(x);
	 	}
	 	var size = $u.size(x);
	 	var out = $u.matrix(size[0]*m,size[1]*n);
	 	for (var i = 0; i < m; i++) {
	 		for (var j = 0; j < n; j++) {
	 			for (var ii = 0; ii < size[0]; ii++) {
	 				for (var jj = 0; jj < size[1]; jj++) {
	 					out[(i * size[0]) + ii][(j * size[1]) + jj] = x[ii][jj];
	 				}
	 			}
	 		}
	 	}
	 	return out;
	 }

	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	 /**
	 * @method  reshape
	 * @summary Reshape array or matrix with custom values
	 * @description  Reshape array or matrix with custom values
	 *
	 * @param  {array|matrix} x  array or matrix of elements
	 * @param  {number} m number of rows for the new matrix
	 * @param  {number} n number of cols for the new matrix
	 * @return {matrix}     
	 *
	 * @example
	 * var b = [[-1,3,-1],[4,5,9]];
	 * 
	 * ubique.reshape([5,6,3],1,3); // [[5, 6, 3]]
	 * ubique.reshape(b,3,2); // [[-1, 5], [4, -1], [3, 9]]
	 * ubique.reshape(b,6,1); // [[-1], [4], [3], [5], [-1], [9]]
	 */
	 $u.reshape = function(x,m,n) {
	 	if (arguments.length < 3) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (!$u.isinteger(m) || !$u.isinteger(n)) {
	 		throw new Error('dimensions must be integer numbers');
	 	}
	 	var nrows = $u.nrows(x),
	 	ncols = $u.ncols(x),
	 	totsiz = nrows * ncols;
	 	if ((m * n) !== totsiz ) {
	 		throw new Error('total number of elements must be the same');
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	} else 
	 	if ($u.isarray(x)) {
	 		if (m === nrows && n === ncols) {
	 			return x;
	 		} else {
	 			return $u.transpose(x);
	 		}
	 	} else 
	 	if ($u.ismatrix(x)) {
	 		var out = $u.matrix(m,n,NaN),
	 		vec = $u.flatten(x);
	 		for (var i = 0;i < m * n;i++) {
	 			var idx = $u.ind2sub([m,n],i);
	 			out[idx[0]][idx[1]] = vec[i];
	 		}
	 		return out;
	 	} else {
	 		throw new Error('unknown input arguments');
	 	}

	 }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Indexing
	 */
	 module.exports = function($u) {
	/**
	 * @method row
	 * @summary Get a row of matrix
	 * @description  Get a row of a matrix
	 * 
	 * @param  {array|matrix} x matrix of elements
	 * @param  {number} n row number (indexing from 0 to n - 1)
	 * @return {array}   
	 *
	 * @example
	 * ubique.row([[5,6,5],[7,8,-1]],0); // [5, 6, 5]
	 * ubique.row([5,6,5]); // 5
	 */
	 $u.row = function(x,n) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isundefined(n)) {
	 		n = 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return x[n];
	 	}
	 	if (!$u.isinteger(n) || n < 0 || n >= $u.nrows(x)) {
	 		throw new Error('row must be an integer between 0 and N - 1 rows');
	 	}
	 	return x[n];
	 }

	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Dimensions
	 */
	 module.exports = function($u) {
	/**
	 * @method size
	 * @summary Size of N-D array
	 * @description Size of N-D array. N-D array is equal to MxN matrix, 
	 * 1-D Array is equal to Mx1 vector, Number is equal to 1x1 array
	 * 
	 * @param  {number|array|matrix} x array of elements
	 * @return {array}  
	 *
	 * @example
	 * ubique.size([[[[5,6,5],[7,8,-1]]]]); // [1, 1, 2, 3]
	 * ubique.size([[3,2,7],[4,5,6]]); //  [2, 3]
	 * ubique.size([5,4,4]); // [3, 1]
	 * ubique.size(5); // [1, 1]
	 */
	 $u.size = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnull(x) || $u.isundefined(x)) {
	 		throw new Error('unknown input type');
	 	}
	 	if ($u.isnumber(x)) {
	 		return [1, 1];
	 	}
	 	if ($u.isarray(x)) {
	 		return [x.length,1];
	 	}
	 	var siz = x.length,
	 	_siz = [];
	 	while (!$u.isundefined(siz)) {
	 		_siz.push(siz);
	 		x = x[0];
	 		siz = x.length;
	 	} 
	 	return _siz;
	 }

	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method sort
	 * @summary Sort array elements in ascending/descending order
	 * @description Sort array elements in ascending/descending order. For matrix it is possibile to sort
	 * along a dimension. Based on Merge Sort algorithm
	 * 
	 * @param   {array|matrix} x array of elements
	 * @param   {string} mode sorting direction, 'ascend' (default) or 'descend'
	 * @param   {number} dim dimension along which to sort, 0: rows, 1: colums (def: 1)
	 * @return  {array}      
	 *
	 * @example
	 * ubique.sort([0,5,-1,3,-4,9,0],'ascend'); // [-4, -1, 0, 0, 3, 5, 9]
	 * ubique.sort([0,5,-1,3,-4,9,0],'descend'); // [9, 5, 3, 0, 0, -1, -4]
	 * ubique.sort([[-1,3,-1],[4,5,9]],'ascend'); // [[-1, 3, -1], [4, 5, 9]]
	 * ubique.sort([[-1,3,-1],[4,5,9]],'descend'); // [[4, 5, 9], [-1, 3, -1]]
	 * ubique.sort([[-1,3,-1],[4,5,9]],'descend',0); // [[3, -1, -1], [9, 5, 4]]
	 */
	 $u.sort = function(x,mode,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		mode = 'ascend';
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	}
	 	if ($u.isarray(x)) {
	 		return $u.mergesort(x,mode);
	 	}
	 	return $u.vectorfun(x,function(val) {return $u.mergesort(val,mode);},dim);
	 }

	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method squeeze
	 * @summary Remove singleton dimensions from N-D arrays (matrices)
	 * @description Remove singleton dimensions N_D arrays (matrices).
	 * Number returns number and 1-D array returns 1-D array.
	 * 
	 * @param  {array|matrix} x  matrix values
	 * @return {array|matrix}   
	 *
	 * @example
	 * 
	 * ubique.squeeze([[[[[8]]]]]); // [[8]]
	 * ubique.squeeze([[[[3,4,5]]]]); // [[3, 4, 5]]
	 */
	 $u.squeeze = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length >1) {
	 		throw new Error('too many input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	}
	 	var size = $u.size(x);
	 	while (size.length > 2) {
	 		x = x[0];
	 		size = $u.size(x);
	 	}
	 	return x;
	 }

	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Indexing
	 */
	 module.exports = function($u) {
	/**
	 * @method sub2ind
	 * @summary Subscripts to linear indices
	 * @description Subscripts to linear indices. Convert a 2D coordinates [X,Y] of a matrix into linear indices
	 * 
	 * @param  {array|matrix} size  size of array or matrix
	 * @param  {array|matrix} index X,Y coordinates for 2D matrices in the range [0...N-1]
	 * @return {number|array}       
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * 
	 * ubique.sub2ind(ubique.size(a),[1, 2]); // 5
	 * ubique.sub2ind(ubique.size(a),[[0, 0], [1, 0], [0, 1]]); // [0, 1, 2]
	 * ubique.sub2ind(ubique.size([5,6,3]),[2, 0]); // 2
	 */
	 $u.sub2ind = function(size,index) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isarray(index)) {
	 		index = [index];
	 	}
	 	var x = $u.col(index,0),
	 	y = $u.col(index,1);
	 	var v = [];
	 	for (var i = 0;i < x.length;i++) {
	 		v[i] = (x[i]) + (y[i]) * size[0];
	 	}
	 	if ($u.numel(v) === 1) {
	 		return $u.squeeze(v)[0];
	 	}  else {
	 		return $u.squeeze(v);
	 	}
	 }
	}


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {

	 /**
	  * @method subset
	  * @summary Subset of array or matrix based on X,Y coordinates
	  * @description Subset of array or matrix based on X,Y coordinates
	  * 
	  * @param  {array|matrix} m array or matrix of elements
	  * @param  {number|array} r indexing for rows
	  * @param  {number|array} c indexing for columns
	  * @return {number|array|matrix}   
	  *
	  * * @example
	  * var a = [[5,6,5],[7,8,-1]];
	  * var c = [5,6,3];
	  *
	  * ubique.subset(c,1); // 6
	  * ubique.subset(c,[1,2]); // [6, 3]
	  * ubique.subset(a,0,1); // [[6]]
	  * ubique.subset(a,[0,1],[1,2]); // [[6, 5], [8, -1]]
	  */
	  $u.subset = function(m,r,c) {
	    if (arguments.length === 0) {
	      throw new Error('not enough input arguments');
	    } else 
	    if (arguments.length === 1) {
	      return m;
	    } else
	    if (arguments.length === 2) {
	      if ($u.isnumber(m)) {
	        return m;
	      }
	      if ($u.isarray(m)) {
	        if ($u.isnumber(r)) {
	          return m[r];
	        } else 
	        return r.map(function(val) {return m[val];})
	      }
	    } else 
	    if (arguments.length === 3) {
	     if ($u.ismatrix(m)) {
	       if ($u.isnumber(r)) {
	        r = [r];
	      }
	      if ($u.isnumber(c)) {
	        c = [c];
	      }
	      if (r.length  === 1 && c.length === 1) {
	        out = [[0]];
	      } else {
	        out = $u.zeros(r.length,c.length);
	      }
	      for (var i = 0;i < r.length;i++) {
	        var tmp = r[i];
	        for (var j = 0;j < c.length;j++) {
	          out[i][j] = m[tmp][c[j]];
	        }
	      }
	      return $u.squeeze(out);
	    } else {
	      throw new Error('input must be a matrix');
	    }
	  } else {
	    throw new Error('too many input arguments');
	  }

	}

	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	  /**
	   * @method  substelin
	   * @summary Subset of array or matrix based on linear indexing
	   * @description Subset dof array or matrix based on linear indexing
	   *              
	   * @param  {array|matrix} m   array or matrix of elements 
	   * @param  {numer|array|matrix} idx linear indexing
	   * @return {numner|array|matrix}     
	   *
	   * @example
	   * var a = [[5,6,5],[7,8,-1]];
	   * var c = [5,6,3];
	   *
	   * ubique.subsetlin(a,1); // [7]
	   * ubique.subsetlin(a,[0,1,2,3]); // [5, 7, 6, 8]
	   * ubique.subsetlin(a,[[0,1,2],[2,3,4]]); // [[5, 7, 6], [6, 8, 5]]
	   * ubique.subsetlin(c,[0,1]); // [5, 6]
	   * ubique.subsetlin(c,[[0,1],[1,2]]); // [[5, 6], [6, 3]]
	   */
	   $u.subsetlin = function(m,idx) {
	    if (arguments.length === 0) {
	      throw new Error('not enough input arguments');
	    } else 
	    if (arguments.length === 1 || $u.isnumber(m)) {
	      return m;
	    } else 
	    if (arguments.length === 2) {
	      if ($u.isnumber(idx)) {
	        idx = [idx];
	      }
	      var _m = $u.flatten(m);
	      var coo1 = $u.ind2sub($u.size(m),idx);
	      return $u.squeeze($u.arrayfun(idx,function(val){return _m[val]}));
	    } else {
	      throw new Error('too many input arguments');
	    }
	  }

	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* Array Creation and Concatenation
	*/
	module.exports = function($u) {
	/**
	 * @method tomat
	 * @summary Convert number or array to matrix
	 * @description Convert number or array to matrix
	 *              
	 * @param  {number|array|boolean} x input
	 * @return {matrix}     
	 *
	 * @example
	 * ubique.tomat(5); // [[5]]
	 * ubique.tomat([5,6,3]); // [[5], [6], [3]]
	 * ubique.tomat(true); // [[true]]
	 */
	 $u.tomat = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x) || $u.islogical(x)) {
	 		return [[x]];
	 	} else
	 	if ($u.isarray(x)) {
	 		var out = $u.matrix(x.length,1);
	 		for (var i = 0;i < x.length;i++) {
	 			out[i][0] = x[i];
	 		}
	 		return out;
	 	} else 
	 	if ($u.ismatrix(x)) {
	 		return x;
	 	} else {
	 		throw new Error('unknown input arguments');
	 	}

	 }

	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method transpose
	 * @summary Transpose X.'
	 * @description Transpose of matrix X. Array is Nx1 as default. 
	 * Transpose of Array is 1xN matrix.
	 * 
	 * @param  {array|matrix} x array or matrix of elements
	 * @return {matrix}
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.transpose(a); // [ [ 5, 7 ], [ 6, 8 ], [ 5, -1 ] ]
	 * ubique.transpose(c); // [ [ 5 ], [ 6 ], [ 3 ] ]
	 */
	 $u.transpose = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	}
	 	if ($u.isarray(x)) {
	 		return [x];
	 	}
	 	var out = $u.matrix($u.ncols(x),$u.nrows(x),null);
	 	for (var i = 0;i < $u.ncols(x); i++) {
	 		for (var j = 0;j < $u.nrows(x); j++) {
	 			out[i][j] = x[j][i];
	 		}
	 	}
	 	return out;
	 }

	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method trues
	 * @summary Create array of all true
	 * @description Create array of all true
	 * 
	 * @param  {number|array|...} args  variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.trues(); // true
	 * ubique.trues(0); // []
	 * ubique.trues(1); / [[true]]
	 * ubique.trues(2); // [[true, true], [true, true]]
	 * ubique.trues([2,1]); // [[true], [true]]
	 * ubique.trues(1,2); // [[true, true]]
	 * ubique.trues(2,3); // [[true, true, true], [true, true, true]]
	 */
	 $u.trues = function() {
	  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
	    return true;
	  }
	  var _args = [];
	  for (var i = 0;i < arguments.length; i++) {
	    _args.push(arguments[i]);
	  }
	  if ($u.ismatrix(_args)) {_args = _args[0];}
	  if (_args.length === 1) {_args = [_args[0],_args[0]];}
	  return $u.matrix(_args,true);
	}

	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method vertcat
	 * @summary Concatenate arrays or matrices vertically
	 * @description Concatenate arrays or matrices vertically
	 *              
	 * @param  {array|matrix|...} args variable arguments (args1,args2,...)
	 * @return {array|matrix}     
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var f = [[3, 2], [5, 2]];
	 *
	 * ubique.vertcat(a,b); // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9]]
	 * ubique.vertcat(a,b,b); // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9], [-1, 3, -1], [4, 5, 9]]
	 * ubique.vertcat(c,d); // [5, 6, 3, 0.5, -3, 2.3]
	 * ubique.vertcat([1],[2]); // [1, 2]
	 * ubique.vertcat(5,7,9,8); // [5,7,9,8]
	 * ubique.vertcat(5,7,c); // [5, 7, 5, 6, 3]
	 */
	 $u.vertcat = function() {
	 	var _args = [0];
	 	for (var i = 0; i < arguments.length; i++) {
	 		_args.push(arguments[i]);
	 	}
	 	return $u.cat.apply(null,_args);
	 }

	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method zeros
	 * @summary Create array or matrix of all zeros
	 * @description Create array or matrix of all zeros
	 * 
	 * @param  {number|array|...} args  variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.zeros(); // 0
	 * ubique.zeros(0); // []
	 * ubique.zeros(1); / [[0]]
	 * ubique.zeros(2); // [[0, 0], [0, 0]]
	 * ubique.zeros([2,1]); // [[0], [0]]
	 * ubique.zeros(1,2); // [[0, 0]]
	 * ubique.zeros(2,3); // [[0, 0, 0], [0, 0, 0]]
	 */
	 $u.zeros = function() {
	  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
	    return 0;
	  }
	  var _args = [];
	  for (var i = 0;i < arguments.length; i++) {
	    _args.push(arguments[i]);
	  }
	  if ($u.ismatrix(_args)) {_args = _args[0];}
	  if (_args.length === 1) {_args = [_args[0],_args[0]];}
	  return $u.matrix(_args,0);
	}

	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Distribution Tests
	 */
	module.exports = function($u) {
	/**
	 * @method  jbtest
	 * @summary Jarque-Bera test
	 * @description  A test decition for the null hypothesis that the data 
	 * in array X comes from a normal distribution with an unknown mean and variance
	 * 
	 * @param  {array} x array of values
	 * @return {number}   
	 *
	 * @example
	 * ubique.jbtest(x); // 0.6360604293924916
	 */
	$u.jbtest = function(x) {
	  var n = x.length,
	    s = $u.skewness(x),
	    xk = $u.xkurtosis(x);
	  return (n/6) * (Math.pow(s,2) + Math.pow(xk,2)/4);
	}

	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Normal Distributions
	 */
	 module.exports = function($u) {
	/**
	 * @method normcdf
	 * @summary Normal cumulative distribution function (cdf)
	 * @description The Standard Normal Distribution: mu = 0 and sigma = 1
	 *
	 * @param  {number} x number to calculate cdf
	 * @param  {number} mu mean of  the array of elements
	 * @param  {number} sigma standarf deviaton of array of elements
	 * @return {number}
	 *
	 * @example
	 * var y = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var mu = ubique.mean(x), sigma = ubique.std(x);
	 * 
	 * ubique.normcdf(2); // 0.97725
	 * ubique.normcdf(0,mu,sigma); // 0.22049
	 */
	 $u.normcdf = function(x,mu,sigma) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    mu = 0;
	    sigma = 1;
	  }
	  if (arguments.length === 2) {
	    sigma = 1;
	  }
	  return 0.5 * (1 + $u.erf((x - mu) / Math.sqrt(2 * sigma * sigma)));
	}

	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Normal Distributions
	 */
	 module.exports = function($u) {
	/**
	 * @method norminv
	 * @summary Inverse of the normal cumulative distribution function (cdf)
	 * @description Returns the inverse cdf for the normal distribution with mean MU
	 * and standard deviation SIGMA at P value
	 *
	 * Default values: MU = 0, SIGMA = 1
	 * 
	 * @param  {number} p     probability value in range [0,1]
	 * @param  {number} mu    mean value
	 * @param  {number} sigma standard deviation 
	 * @return {number}       
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var p = 0.01, mu = ubique.mean(x), sigma = ubique.std(x);
	 *
	 * ubique.normiv(0.05); // -1.64485
	 * ubique.norminv(p,mu,sigma); // -0.0361422
	 */
	 $u.norminv = function(p,mu,sigma) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    mu = 0;
	    sigma = 1;
	  }
	  if (arguments.length === 2) {
	    sigma = 1;
	  }
	  if (p <= 0 || p >= 1) {
	    throw new Error('invalid input argument');
	  }
	  var x0 = -Math.sqrt(2) * $u.erfcinv(2 * p);
	  return x0 * sigma + mu;
	}

	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Normal Distributions
	 */
	 module.exports = function($u) {
	/**
	 * @method normpdf
	 * @summary Normal probability density function (pdf)
	 * @description  Normal probability density function (pdf).
	 * Returns the pdf of the normal distribution with
	 * mean MU and standard deviation SIGMA, evaluated at the values in X
	 *
	 * Default values: MU = 0, SIGMA = 1
	 * 
	 * @param  {number} x     real value
	 * @param  {number} mu    mean value (def: 0)
	 * @param  {number} sigma standard deviation (def: 1)
	 * @return {number}       
	 *
	 * @example
	 * var y = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var mu = ubique.mean(y), sigma = ubique.std(y);
	 * 
	 * ubique.normpdf(1); // 0.241971
	 * ubique.normpdf(0,mu,sigma); // 12.7622
	 */
	 $u.normpdf = function(x,mu,sigma) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    mu = 0;
	    sigma = 1;
	  }
	  if (arguments.length === 2) {
	    sigma = 1;
	  }
	  return Math.exp(-0.5 * Math.pow((x - mu)/sigma,2)) / (Math.sqrt(2 * Math.PI) * sigma);
	}

	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Time Series Analysis
	 */
	 module.exports = function($u) {
	/**
	 * @method hurst
	 * @summary Hurst index/exponent
	 * @description It's a useful statistic for detecting if a time series is mean reverting (anti-persistent), totally random or persistent.
	 * A value in the range [0.5) indicates mean-reverting (anti-persistent)
	 * A value of 0.5 indicate a random walk
	 * A value H in the range (0.5,1] indicates momentum (persistent)
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} flag normalization value 0: population, 1:sample (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 * 
	 * ubique.hurst(x); // 0.344059
	 * ubique.hurst(x,1); // 0.3669383
	 * ubique.hurst(z); // [[0.344059, 0.51531]]
	 */
	 $u.hurst = function(x,flag,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		flag = 1;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _hurst = function(a,flag) {
	 		var cdev = $u.cumdev(a),
	 		rs = ($u.max(cdev) - $u.min(cdev)) / $u.std(a,flag);
	 		return Math.log(rs) / Math.log(a.length);
	 	}
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return _hurst(x,flag);
	 	}
	 	return $u.vectorfun(x,function(val){return _hurst(val,flag);},dim); 

	 }

	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Transformation
	 */
	 module.exports = function($u) {
	/**
	 * @method  ret2tick
	 * @summary  Convert a return series to a value series with a start value
	 * @description  Convert a return series to a value series with a start value
	 * 
	 * @param  {array|matrix} x  array of elements
	 * @param  {string} mode  method to compute returns. 'simple','continuous' (def: simple)
	 * @param  {number} sval  start value (def: 1)
	 * @return {array|matrix}     
	 *
	 * @example
	 * var d = [0.5,-3,2.3];
	 * var e = [[9, 5], [6, 1]];
	 *
	 * ubique.ret2tick(0.05); // [1, 1.05]
	 * ubique.ret2tick(d,'simple',100); // [100, 150, -300, -990]
	 * ubique.ret2tick(e,'simple',100,0); // [[100, 1000, 6000], [100, 700, 1400]]
	 */
	 $u.ret2tick = function(x,mode,sval,dim) {
	   if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    mode = 'simple';
	    sval = 1;
	    dim = 1;
	  }
	  if (arguments.length === 2) {
	    sval = 1;
	    dim = 1;
	  }
	  if (arguments.length === 3) {
	    dim = 1;
	  }

	  var _ret2tick = function(a,mode,sval) {
	    if ($u.isnumber(a)) {
	      a = [a];
	    }
	    var r = [];
	    r[0] = sval;
	    if (mode === 'simple') {
	      for (var i = 1; i <= a.length; i++) {
	        r[i] = r[i - 1] * (1 + a[i - 1]);
	      }
	    } else 
	    if (mode === 'continuous') {
	      for (var i = 1; i <= a.length; i++) {
	        r[i] = r[i - 1] * Math.exp(a[i - 1]);
	      }
	    } else {
	      throw new Error('unknown return method');
	    }
	    return r;
	  }

	  if ($u.isnumber(x) || $u.isarray(x)) {
	    return _ret2tick(x,mode,sval);
	  }
	  return $u.vectorfun(x,function(val){return _ret2tick(val,mode,sval);},dim);
	  
	}

	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Transformation
	 */
	 module.exports = function($u) {
	/**
	 * @method  tick2ret
	 * @summary  Convert a value series to a return series
	 * @description  Convert a value series to a return series. 'simple' (default) for simple returns, 'continuous' for continuously compounded
	 * 
	 * @param  {array|matrix} x  array of elements
	 * @param  {string} mode  method to compute returns. 'simple','continuous' (def: simple)
	 * @param  {number} sval  start value (def: 1)
	 * @return {array|matrix}     
	 *
	 * @example
	 * var d = [0.5,-3,2.3];
	 * var e = [[9, 5], [6, 1]];
	 *
	 * ubique.tick2ret(d); // [-7, -1.76667]
	 * ubique.tick2ret(e); // [[-0.333333, -0.8]]
	 */
	 $u.tick2ret = function(x,mode,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    mode = 'simple';
	    dim = 1;
	  }
	  if (arguments.length === 2) {
	    dim = 1;
	  }
	  if ($u.numel(x) < 2) {
	    throw new Error('insert minimum two elements');
	  }
	  var _tick2ret = function(a,mode,sval) {
	    var r = [];
	    if (mode === 'simple') {
	      for (var i = 1;i < a.length;i++) {
	        r[i - 1] = a[i] / a[i - 1] - 1;
	      }
	    } else 
	    if (mode === 'continuous') {
	      for (var i = 1;i < a.length;i++) {
	        r[i - 1] = Math.log(a[i] / a[i - 1]);
	      }
	    } else {
	      throw new Error('unkwon retun method');
	    }
	    return r;
	  }
	  if ($u.isarray(x)) {
	    return _tick2ret(x,mode);
	  }
	  return $u.vectorfun(x,function(val){return _tick2ret(val,mode);},dim);
	  
	}

	}


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Interpolation
	 */
	 module.exports = function($u) {
	/**
	 * @method  interp1
	 * @summary Linear interpolation
	 * @description Linear interpolation. Returns the 1-D value of Y, given Xi query points. 
	 * 
	 * @param  {array} x sample points
	 * @param  {array} y corresponding values of sample points
	 * @param  {number|array} new query points. For values outside [min(X),max(X)] NaN is returned.
	 * @return {array}
	 *
	 * @example
	 * var x = [1,2,3,4,5,6];
	 * var y = [2,4,6,8,10,12];
	 * var xnew = [2,4,-2,10];
	 *
	 * ubique.interp1(x,y,xnew); // [4, 8, NaN, NaN]
	 */
	 $u.interp1 = function(x,y,xnew) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (x.length !== y.length) {
	    throw new Error('input dimension mismatch');
	  }
	  if ($u.isnumber(xnew)) {
	    xnew = [xnew];
	  }
	  var ynew = new Array(xnew.length),
	  n = x.length,
	  dx = new Array(n),
	  dy = new Array(n),
	  slope = new Array(n),
	  intercept = new Array(n);

	  for (var i = 0; i < n; i++) {
	    if (i < n - 1) {
	      dx[i] = x[i + 1] - x[i];
	      dy[i] = y[i + 1] - y[i];
	      slope[i] = dy[i] / dx[i];
	      intercept[i] = y[i] - x[i] * slope[i];
	    } else {
	      dx[i] = dx[i - 1];
	      dy[i] = dy[y - 1];
	      slope[i] = slope[i - 1];
	      intercept[i] = intercept[i - 1];      
	    }
	  }

	  for (var j = 0; j < xnew.length; j++) {
	    if (xnew[j] < $u.min(x) || xnew[j] > $u.max(x)) {
	      ynew[j] = NaN;
	    } else {
	      var idx = findneighb(xnew[j],x);
	      ynew[j] = slope[idx] * xnew[j] + intercept[idx];
	    }
	  }
	  if ($u.numel(ynew) === 1) {
	    return ynew[0];
	  } else {
	    return ynew;
	  }
	}
	var findneighb = function(value,arr) {
	  var dist = $u.maxval,
	  idx = -1;
	  for (var i = 0; i < arr.length; i++) {
	    var newdist = value - arr[i];
	    if (newdist > 0 && newdist < dist) {
	      dist = newdist;
	      idx = i;
	    }
	  }
	  return idx;
	}

	}


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Linear Regression
	 */
	 module.exports = function($u) {
	/**
	 * @method  linreg
	 * @summary Linear regression of Y on X
	 * @description Return an object with fields: Beta, Alpha, R-squared, function
	 * 
	 * @param  {array} y array of elements in Y
	 * @param  {array} x array of elements in X
	 * @return {object} 
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.linreg(x,y);
	 * //  { beta: 0.02308942571228251, alpha: 0.017609073236025237, rsq: 0.0027553853574994254, fun: [Function] }
	 * 
	 * ubique.linreg([100,101,99,102,105],[1,2,3,4,5])
	 * //  { beta: 1.1, alpha: 98.1, rsq: 0.5707547169811321, fun: [Function] }
	 * 
	 * ubique.linreg([100,101,99,102,105],[1,2,3,4,5]).fun(6) //use linear function to forecast value
	 * // 104.69
	 * 
	 */
	 $u.linreg = function(y,x) {
	  var n = y.length,
	  sx = $u.sum(x),
	  sy = $u.sum(y),
	  sxy = $u.sum($u.times(x,y)),
	  sxx = $u.sum($u.times(x,x)),
	  syy = $u.sum($u.times(y,y)),
	  beta = (n * sxy - sx * sy) / (n * sxx - sx * sx),
	  alpha = (sy - beta * sx) / n,
	  rsq = Math.pow((n *sxy - sx * sy)/Math.sqrt((n * sxx - sx * sx) * (n * syy - sy * sy)),2);
	  return {beta: beta,alpha: alpha, rsq: rsq,fun: function (x) {return beta * x + alpha;} }
	}

	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method corrcoef
	 * @summary Correlation coefficients of two arrays X,Y
	 * @description Correlation coefficients of two arrays X,Y
	 *
	 * @param  {array|matrix} x    array or matrix of elemnts X
	 * @param  {array|matrix} y    (vararg) second arguments, array or matrix of elements Y
	 * @param  {number} flag       (vararg) Bessel's correction 0: population, 1: sample (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var e = [[9, 5], [6, 1]];
	 * var f = [[3, 2], [5, 2]];
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 *
	 * ubique.corrcoef(l); // [[1, 0.802955, 0], [0.802955, 1, -0.59604], [0, -0.59604, 1]]
	 * ubique.corrcoef(c,d); // [[1, -0.931151], [-0.931151, 1]]
	 */
	 $u.corrcoef = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var _args = [x];
	 	for (var i = 1; i < arguments.length; i++) {
	 		_args.push(arguments[i]);
	 	}
	 	var covm = $u.cov.apply(null,_args),
	 	sigma = $u.sqrt($u.diag(covm)),
	 	m = sigma.length,
	 	covm = $u.rdivide(covm,$u.repmat(sigma,1,m)),
	 	covm = $u.rdivide(covm,$u.repmat($u.transpose(sigma),m,1));
	 	return covm;
	 }

	}


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method cov
	 * @summary Covariance matrix
	 * @description Covariance matrix
	 *
	 * @param  {array|matrix} x    array or matrix of elemnts X
	 * @param  {array|matrix} y    (vararg) second arguments, array or matrix of elements Y
	 * @param  {number} flag       (vararg) Bessel's correction 0: population, 1: sample (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var e = [[9, 5], [6, 1]];
	 * var f = [[3, 2], [5, 2]];
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 *
	 * ubique.cov(c); // 2.33333
	 * ubique.cov(c,d); // [[2.33333, -3.83333], [-3.83333, 7.26333]]
	 * ubique.cov(c,d,0); // [[1.55556, -2.55556], [-2.55556, 4.84222]]
	 * ubique.cov(e,f); // [[10.9167, 2], [2, 2]]
	 * ubique.cov(l); // [[0.333333, 1.16667, 0], [1.16667, 6.33333, -3], [0, -3, 4]]
	 */
	 $u.cov = function(x) {
	 	var arglen = arguments.length;
	 	if (arglen === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arglen > 3) {
	 		throw new Error('too many input arguments');
	 	}
	 	if (arglen === 3) {
	 		flag = arguments[arglen - 1];
	 		var flagrule = $u.isscalar(flag) && (flag === 0 || flag === 1);
	 		if (!flagrule) {
	 			throw new Error('third input must be 0 or 1');
	 		}
	 		arglen = arglen - 1;
	 	} else
	 	if (arglen === 2 && $u.isscalar(arguments[arglen - 1]) && (arguments[arglen - 1] === 0 || arguments[arglen - 1] === 1)) {
	 			flag = arguments[arglen - 1];
	 			arglen = arglen - 1;
	 	} else {
	 		flag = 1;
	 	}

	    if (arglen === 1 && ($u.isarray(x) || $u.isvector(x))) {
	    	x = $u.flatten(x);
	    	return $u.variance(x);
	    }
	 	if (arglen === 2) {
	 		y = arguments[1];
	 		x = $u.flatten(x);
	 		y = $u.flatten(y);
	 		if (x.length !== y.length) {
	 			throw new Error('input dimension must agree');
	 		}
	 		x = $u.cat(1,x,y);
	 	}
	 	var m = $u.nrows(x),
	 	mu = $u.mean(x),
	 	z = $u.minus(x,$u.repmat(mu,m,1));
	 	return $u.rdivide($u.mtimes($u.transpose(z),z), m - flag);
	 }

	}



/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Basic Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method histc
	 * @summary Histogram count
	 * @description  For array X counts the number of values in X that fall between the elements in the BINS array. Values outside the range in BINS are not counted.
	 * 
	 * @param  {array} x     array of values
	 * @param  {number|array} bins  number of bins (as NUMBER) or array of edges (as ARRAY) (def: 10)
	 * @return {object}       
	 *
	 * @example
	 * var n = [87,27,45,62,3,52,20,43,74,61];
	 * var bins = [0,20,40,60,80,100];
	 * ubique.histc(n,bins);
	 * // [ { bins: 0, freq: 1 },
	 * // { bins: 20, freq: 2 },
	 * // { bins: 40, freq: 3 },
	 * // { bins: 60, freq: 3 },
	 * // { bins: 80, freq: 1 },
	 * // { bins: 100, freq: 0 } ]
	 *
	 * ubique.histc(n)
	 * // [ { bins: 3, freq: 1 },
	 * // { bins: 11.4, freq: 0 },
	 * // { bins: 19.8, freq: 2 },
	 * // { bins: 28.200000000000003, freq: 0 },
	 * // { bins: 36.6, freq: 1 },
	 * // { bins: 45, freq: 2 },
	 * // { bins: 53.400000000000006, freq: 1 },
	 * // { bins: 61.800000000000004, freq: 1 },
	 * // { bins: 70.2, freq: 1 },
	 * // { bins: 78.60000000000001, freq: 0 },
	 * // { bins: 87, freq: 1 } ]
	 *
	 * ubique.histc(n,5)
	 * // [ { bins: 3, freq: 1 },
	 * // { bins: 19.8, freq: 2 },
	 * // { bins: 36.6, freq: 3 },
	 * // { bins: 53.400000000000006, freq: 2 },
	 * // { bins: 70.2, freq: 1 },
	 * // { bins: 87, freq: 1 } ]
	 */
	 $u.histc = function(x,bins) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    bins = 10;
	  }
	  var y = [],
	  h = [], 
	  out = [];
	  if ($u.isnumber(bins)) {
	    var xmin = $u.min(x),
	    xmax = $u.max(x),
	    binw = (xmax - xmin) / bins,
	    anum = $u.colon(0,bins);
	    y = $u.plus($u.times(anum,binw),xmin);
	  } else {
	    y = bins;
	  }

	  for (var k = 0; k < y.length; k++) {
	    h[k] = 0;
	    for (var i = 0; i < x.length; i++) {
	      if (y[k] <= x[i] && x[i] < y[k + 1]) {
	        h[k] += 1;
	      } else 
	      if (x[i] === y[k]) {
	        h[k] += 1;
	      }
	    }
	    out.push({bins: y[k], freq: h[k]})
	  }
	  return out;
	}

	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method iqr
	 * @summary Interquartile range
	 * @description Return the interquartile (Q3 - Q1 quartiles)
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 *
	 * ubique.iqr(x); // 0.023
	 * ubique.iqr(z); // [[0.023, 0.095]]
	 */
	 $u.iqr = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _iqr = function(a) {
	 		return $u.prctile(a,75) - $u.prctile(a,25);
	 	}
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return _iqr(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _iqr(val);},dim);
	 }

	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method kurtosis
	 * @summary Kurtosis
	 * @description Kurtosis
	 * 
	 * @param  {array|matrix} x  array or matrix of elements
	 * @param  {number} flag     0: bias correction, 1: simple (def: 1)
	 * @param  {number} dim      dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 * 
	 * ubique.kurtosis(x); // 3.03758
	 * ubique.kurtosis(x,0); // 4.03072
	 * ubique.kurtosis(z); // [[3.03758, 1.39764]]
	 */
	 $u.kurtosis = function(x,flag,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		flag = 1;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _kurtosis = function(a,flag) {
	 		var n = a.length,
	 		mom4 = $u.moment(a,4) / Math.pow($u.moment(a,2),2);
	 		return flag === 1 ? mom4: ((n + 1) * mom4 - 3 * (n - 1)) * (n - 1) / ((n - 2) *(n - 3)) + 3;
	 	}
	 	if ($u.isnumber(x)) {
	 		return NaN;
	 	}
	 	if ($u.isarray(x)) {
	 		return _kurtosis(x,flag);
	 	}
	 	return $u.vectorfun(x,function(val){return _kurtosis(val,flag);},dim); 
	 }

	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method mad
	 * @summary Mean absolute deviation
	 * @description Mean absolute deviation
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.mad(c); // 1.11111
	 * ubique.mad(a,0); // [0.444444, 3.77778]
	 * ubique.mad(a); // [[1, 1, 3]]
	 */
	 $u.mad = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _mad = function(a) {
	 		return $u.mean($u.arrayfun($u.minus(a,$u.mean(a)),Math.abs));
	 	}
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return _mad(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _mad(val);},dim);
	 }

	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method  max
	 * @summary Largest element in array
	 * @description Largest element in array
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var b = [[-1,3,-1],[4,5,9]];
	 * 
	 * ubique.max([5,6,-1]); // 6
	 * ubique.max(b,0); // [3, 9]
	 * ubique.max(b); // [[4, 5, 9]]
	 */
	 $u.max = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	} else
	 	if ($u.isarray(x)) {
	 		return  Math.max.apply(Math,x);
	 	}
	 	return $u.vectorfun(x,function(val){return Math.max.apply(Math,val);},dim);
	 }
	}


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistics
	 */
	 module.exports = function($u) {
	/**
	 * @method mean
	 * @summary Average value of array
	 * @description Average value of array
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.mean(c); // 4.66667
	 * ubique.mean(a,0); // [5.33333, 4.66667]
	 * ubique.mean(a); // [6, 7, 2]
	 */
	 $u.mean = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	}
	 	if ($u.isarray(x)) {
	 		return  $u.sum(x,dim) / $u.numel(x);
	 	}
	 	return $u.rdivide($u.sum(x,dim),$u.size(x)[1 - dim]);
	 }

	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method median
	 * @summary Median value of array
	 * @description Median value of array
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.median(c); // 4.66667
	 * ubique.median(a,0); // [5.33333, 4.66667]
	 * ubique.median(a); // [6, 7, 2]
	 */
	 $u.median = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _median = function(a) {
	 		var n = a.length - 1,
	 		idx = $u.max(1,Math.floor(n / 2)),
	 		_a = $u.sort(a);
	 		if( n % 2 === 0 ) {
	 			return _a[idx];
	 		} else {
	 			return (_a[idx - 1] + _a[idx]) / 2;
	 		}
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	}
	 	if ($u.isarray(x)) {
	 		return  _median(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _median(val);},dim);
	 }

	}


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method min
	 * @summary Smallest element in array
	 * @description Smallest element in array
	 *
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var b = [[-1,3,-1],[4,5,9]];
	 *
	 * ubique.min([5,6,-1]); // -1
	 * ubique.min(b,0); // [-1, 4]
	 * ubique.min(b); // [[-1, 3, -1]]
	 */
	 $u.min = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	} 
	 	if ($u.isarray(x)) {
	 		return  Math.min.apply(Math,x);
	 	}
	 	return $u.vectorfun(x,function(val){return Math.min.apply(Math,val);},dim);
	 }
	}


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method mode
	 * @summary Most frequent value in an array of elements 
	 * @description Most frequent value in an array of elements (Unimodal)
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.mode(c); // 3
	 * ubique.mode(a,0); // [5, -1]
	 * ubique.mode(a); // [[5, 6, -1]]
	 */
	 $u.mode = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _mode = function(a) {
	    var counter = {},
	    mode = [],
	    max = 0,
	    _a = $u.sort(a);
	    for (var i = 0; i < x.length; i++) {
	      if (!(_a[i] in counter)) {
	        counter[_a[i]] = 0;
	      } else {
	        counter[_a[i]]++;
	      }
	      if (counter[_a[i]] === max) {
	        mode.push(_a[i]);
	      } else 
	      if (counter[_a[i]] > max) {
	        max = counter[_a[i]];
	        mode = [_a[i]];
	      }
	    }
	    return mode[0];
	  }
	  if ($u.isnumber(x)) {
	    return x;
	  }
	  if ($u.isarray(x)) {
	    return  _mode(x);
	  }
	  return $u.vectorfun(x,function(val){return _mode(val);},dim);

	}

	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method  moment
	 * @summary Central moments
	 * @description Central moments. First moment is zero, second is variance.
	 * 
	 * @param  {array|matrix} x array or amatrix of elements
	 * @param  {number} k k-th central sample moment
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 * 
	 * ubique.moment(x,3); // 6.60941e-6
	 * ubique.moment(x,1); // 0
	 * ubique.moment(z,2); // [[4.8569e-4, 0.00251024]]
	 */
	 $u.moment = function(x,k,dim) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _moment = function(a,k) {
	 		var mu = $u.mean(a);
	 		return $u.mean(a.map(function(b) {return Math.pow(b - mu,k)}));
	 	}
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return _moment(x,k);
	 	}
	 	return $u.vectorfun(x,function(val){return _moment(val,k);},dim); 

	 }

	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Distance metrics
	 */
	module.exports = function($u) {
	/**
	 * @method pdist
	 * @summary Pairwise distance between two sets of observations
	 * @description  Compute distance between two array with differente methods:
	 * euclidean, manhattan, chebycheb, hamming
	 * 
	 * @param  {array} x    array of values in X
	 * @param  {array} y    array of values in Y
	 * @param  {string} mode methods: 'euclidean','manhattan','chebychev','hamming' (def: 'euclidean')
	 * @return {number}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.pdist(x,y,'euclidean'); // 0.170532
	 * ubique.pdist(x,y,'manhattan'); // 0.471
	 * ubique.pdist(x,y,'chebychev'); // 0.087
	 * ubique.pdist(x,y,'hamming'); // 10
	 */
	$u.pdist = function(x,y,mode) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    mode = 'euclidean';
	  }
	  var len = x.length,
	    out = 0;
	  switch (mode) {
	    case "euclidean":
	      out = $u.sqrt($u.sum($u.power($u.minus(x,y),2)));
	      return out;
	      break;
	    case "manhattan": 
	      out = $u.sum($u.abs($u.minus(x,y)));
	      return out;
	      break;
	    case "chebychev": 
	      out = $u.max($u.abs($u.minus(x,y)));
	      return out;
	      break;
	    case "hamming": 
	      for (var i=0;i<len;i++) {
	        if (x[i] !== y[i]) {
	          out++;
	        }
	      }
	      return out;
	      break;
	    default:
	      throw new Error('Invalid method');
	    }
	}

	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method  prctile
	 * @summary Percentiles of a sample
	 * @description Percentiles of a sample, inclusive
	 * 
	 * @param  {array|matrix} x array of emlements
	 * @param  {number} p p-th percentile in the range [0,100]
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 * 
	 * ubique.prctile(x,5); // -0.014
	 * ubique.prctile(x,33); // 0.0118
	 * ubique.prctile(z,5,0); // [-0.005, 0.026, 0.015, -0.037, -0.061, 0.024, -0.049, -0.021, -0.014, 0.039]
	 */
	 $u.prctile = function(x,p,dim) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (p < 0 || p > 100) {
	    throw new Error('p-th percentile must be a real value between 0 and 100 inclusive');
	  }
	  if (arguments.length === 2) {
	    dim = 1;
	  }
	  var _prctile = function(a,pr) {
	   var arrnum= $u.colon(0.5,a.length - 0.5),
	   _a = $u.sort(a),
	   pq = $u.rdivide($u.times(arrnum,100),a.length);

	   pq = $u.cat(0,0,pq,100);
	   _a = $u.cat(0,_a[0],_a,_a[_a.length - 1]);
	   return $u.interp1(pq,_a,pr);
	 }
	 if ($u.isnumber(x)) {
	  return x;
	}
	if ($u.isarray(x)) {
	  return _prctile(x,p);
	}
	return $u.vectorfun(x,function(val){return _prctile(val,p);},dim);
	}

	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method quantile
	 * @summary Quantilies of a sample 
	 * @description Quantilies of a sample 
	 * 
	 * @param  {array|matrix} x array or matrix of elements
	 * @param  {number} p p-th quantile in the range [0,1]
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 * 
	 * ubique.quantile(x,0.25); // 0.003
	 * ubique.quantile(z,0.33); // [[0.0118, -0.0242]]
	 */
	 $u.quantile = function(x,p,dim) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (p < 0 || p > 1) {
	 		throw new Error('p-th percentile must be a real value between 0 and 1 inclusive');
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	return $u.prctile(x,p*100,dim);
	 }

	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method quartile
	 * @summary Quartilies of a sample
	 * @description Quartilies of a sample
	 *
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 *
	 * ubique.quartile(x); // [0.003, 0.015, 0.026]
	 * ubique.quartile(z); // [[0.003, -0.037], [0.015, 0.0175], [0.026, 0.058]]
	 */
	 $u.quartile = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _quartile = function(a) {
	 		return [$u.prctile(a,25),$u.prctile(a,50),$u.prctile(a,75)];
	 	}
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return _quartile(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _quartile(val);},dim);
	 }

	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method range
	 * @summary Range of values
	 * @description Range of values
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.range(c); // 3
	 * ubique.range(a,0); // [1,9]
	 * ubique.range(a); // [[2, 2, 6]]
	 */
	 $u.range = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	var _range = function(a) {
	 		return $u.max(a) - $u.min(a);
	 	}
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return _range(x);
	 	}
	 	return $u.vectorfun(x,function(val){return _range(val);},dim);
	 }

	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method  skewness
	 * @summary Skewness
	 * @description Skewness
	 * 
	 * @param  {array|matrix} x  array or matrix of elements
	 * @param  {number} flag     0: bias correction, 1: simple (def: 1)
	 * @param  {number} dim      dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 * 
	 * ubique.skewness(x); // 0.617481
	 * ubique.skewness(x,1); // 0.732243
	 * ubique.skewness(z); // [[0.617481, -0.118909]]
	 */
	 $u.skewness = function(x,flag,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		flag = 1;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _skewness = function(a,flag) {
	 		var n = a.length,
	 		mom3 = $u.moment(a,3) / Math.pow($u.moment(a,2),1.5);
	 		return flag === 1 ? mom3: Math.sqrt((n - 1) / n) * (n / (n - 2)) * mom3;
	 	}
	 	if ($u.isnumber(x)) {
	 		return NaN;
	 	}
	 	if ($u.isarray(x)) {
	 		return _skewness(x,flag);
	 	}
	 	return $u.vectorfun(x,function(val){return _skewness(val,flag);},dim); 
	 }

	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method std
	 * @summary Standard deviation
	 * @description  Standard deviation
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} flag normalization value 0: population, 1:sample (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.std(c); // 1.52753
	 * ubique.std(c,0); // 1.24722 
	 * ubique.std(a,0); // [[1, 1, 3]]
	 * ubique.std(a,0,0); // [0.471405, 4.02768]
	 */
	 $u.std = function(x,flag,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		flag = 1;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var variance = $u.variance(x,flag,dim);
	 	return $u.sqrt(variance);
	 }

	}


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method var
	 * @summary Variance
	 * @description  Variance
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} flag normalization value 0: population, 1:sample (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.variance(c); // 2.33333
	 * ubique.variance(c,0); // 1.55556 
	 * ubique.variance(a,0); // [[2, 2, 18]]
	 * ubique.variance(a,0,0); // [0.222222, 16.2222]
	 */
	 $u.variance = function(x,flag,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		flag = 1;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _variance = function(a,flag) {
	 		var mu = $u.mean(a);
	 		return ($u.sum($u.power($u.abs($u.minus(a,mu)),2))) / (a.length - flag);
	 	}
	 	
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return  _variance(x,flag);
	 	}
	 	return $u.vectorfun(x,function(val){return _variance(val,flag);},dim);
	 }

	}


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method xkurtosis
	 * @summary Excess kurtosis
	 * @description Excess kurtosis
	 * 
	 * @param  {array|matrix} x  array or matrix of elements
	 * @param  {number} flag     0: bias correction, 1: simple (def: 1)
	 * @param  {number} dim      dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = ubique.cat(1,x,y);
	 * 
	 * ubique.xkurtosis(x); // 0.0375811
	 * ubique.xkurtosis(x,0); // 1.03072
	 * ubique.xkurtosis(z); // [[0.0375811, -1.60236]]
	 */
	 $u.xkurtosis = function(x,flag,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		flag = 1;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var kurt = $u.kurtosis(x,flag,dim);
	 	if ($u.isnumber(kurt)) {
	 		return kurt - 3;
	 	}
	 	return $u.arrayfun(kurt,function(a) {return a - 3;});
	 }

	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method zscore
	 * @summary Standardized Z score
	 * @description Standardized Z score
	 * 
	 * @param  {array|matrix} x array of values
	 * @param  {number} flag normalization value 0: population, 1:sample (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 *
	 * ubique.zscore(c); // [0.218218, 0.872872, -1.09109]
	 * ubique.zscore(c,0); // [0.267261, 1.06904, -1.33631]
	 * ubique.zscore(a,0); // [[-1, -1, 1], [1, 1, -1]]
	 * ubique.zscore(a,0,0); // [[-0.707107, 1.41421, -0.707107], [0.579324, 0.827606, -1.40693]]
	 */
	 $u.zscore = function(x,flag,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		flag = 1;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _zscore = function(a,flag) {
	 		return $u.rdivide($u.minus(a,$u.mean(a)),$u.std(a,flag));
	 	}
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return  _zscore(x,flag);
	 	}
	 	return $u.vectorfun(x,function(val){return _zscore(val,flag);},dim);
	 }

	}

/***/ }
/******/ ])
});

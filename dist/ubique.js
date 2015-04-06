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

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * name: ubique
	 * version: 0.1.7
	 * update date: 2015-04-06
	 * 
	 * author: Max Todaro <m.todaro.ge@gmail.com>
	 * homepage: http://maxto.github.io/index.html
	 * 
	 * description: An extensive scientific computing library for JavaScript and Node.js
	 * 
	 *
	 * The MIT License (MIT)
	 * 
	 * Copyright© 2014-2015 Max Todaro
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
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */

	var ubique = {};
	__webpack_require__(2)(ubique);
	__webpack_require__(3)(ubique);
	__webpack_require__(4)(ubique);
	__webpack_require__(5)(ubique);
	__webpack_require__(6)(ubique);
	__webpack_require__(7)(ubique);
	__webpack_require__(8)(ubique);
	__webpack_require__(9)(ubique);
	__webpack_require__(10)(ubique);
	__webpack_require__(11)(ubique);
	__webpack_require__(12)(ubique);
	__webpack_require__(13)(ubique);
	__webpack_require__(14)(ubique);
	__webpack_require__(15)(ubique);
	__webpack_require__(16)(ubique);
	__webpack_require__(17)(ubique);
	__webpack_require__(18)(ubique);
	__webpack_require__(19)(ubique);
	__webpack_require__(20)(ubique);
	__webpack_require__(21)(ubique);
	__webpack_require__(22)(ubique);
	__webpack_require__(23)(ubique);
	__webpack_require__(24)(ubique);
	__webpack_require__(25)(ubique);
	__webpack_require__(26)(ubique);
	__webpack_require__(27)(ubique);
	__webpack_require__(28)(ubique);
	__webpack_require__(29)(ubique);
	__webpack_require__(30)(ubique);
	__webpack_require__(31)(ubique);
	__webpack_require__(32)(ubique);
	__webpack_require__(33)(ubique);
	__webpack_require__(34)(ubique);
	__webpack_require__(35)(ubique);
	__webpack_require__(36)(ubique);
	__webpack_require__(37)(ubique);
	__webpack_require__(38)(ubique);
	__webpack_require__(39)(ubique);
	__webpack_require__(40)(ubique);
	__webpack_require__(41)(ubique);
	__webpack_require__(42)(ubique);
	__webpack_require__(43)(ubique);
	__webpack_require__(44)(ubique);
	__webpack_require__(45)(ubique);
	__webpack_require__(46)(ubique);
	__webpack_require__(47)(ubique);
	__webpack_require__(48)(ubique);
	__webpack_require__(49)(ubique);
	__webpack_require__(50)(ubique);
	__webpack_require__(51)(ubique);
	__webpack_require__(52)(ubique);
	__webpack_require__(53)(ubique);
	__webpack_require__(54)(ubique);
	__webpack_require__(55)(ubique);
	__webpack_require__(56)(ubique);
	__webpack_require__(57)(ubique);
	__webpack_require__(58)(ubique);
	__webpack_require__(59)(ubique);
	__webpack_require__(60)(ubique);
	__webpack_require__(61)(ubique);
	__webpack_require__(62)(ubique);
	__webpack_require__(63)(ubique);
	__webpack_require__(64)(ubique);
	__webpack_require__(65)(ubique);
	__webpack_require__(66)(ubique);
	__webpack_require__(67)(ubique);
	__webpack_require__(68)(ubique);
	__webpack_require__(69)(ubique);
	__webpack_require__(70)(ubique);
	__webpack_require__(71)(ubique);
	__webpack_require__(72)(ubique);
	__webpack_require__(73)(ubique);
	__webpack_require__(74)(ubique);
	__webpack_require__(75)(ubique);
	__webpack_require__(76)(ubique);
	__webpack_require__(77)(ubique);
	__webpack_require__(78)(ubique);
	__webpack_require__(79)(ubique);
	__webpack_require__(80)(ubique);
	__webpack_require__(81)(ubique);
	__webpack_require__(82)(ubique);
	__webpack_require__(83)(ubique);
	__webpack_require__(84)(ubique);
	__webpack_require__(85)(ubique);
	__webpack_require__(86)(ubique);
	__webpack_require__(87)(ubique);
	__webpack_require__(88)(ubique);
	__webpack_require__(89)(ubique);
	__webpack_require__(90)(ubique);
	__webpack_require__(91)(ubique);
	__webpack_require__(92)(ubique);
	__webpack_require__(93)(ubique);
	__webpack_require__(94)(ubique);
	__webpack_require__(95)(ubique);
	__webpack_require__(96)(ubique);
	__webpack_require__(97)(ubique);
	__webpack_require__(98)(ubique);
	__webpack_require__(99)(ubique);
	__webpack_require__(100)(ubique);
	__webpack_require__(101)(ubique);
	__webpack_require__(102)(ubique);
	__webpack_require__(103)(ubique);
	__webpack_require__(104)(ubique);
	__webpack_require__(105)(ubique);
	__webpack_require__(106)(ubique);
	__webpack_require__(107)(ubique);
	__webpack_require__(108)(ubique);
	__webpack_require__(109)(ubique);
	__webpack_require__(110)(ubique);
	__webpack_require__(111)(ubique);
	__webpack_require__(112)(ubique);
	__webpack_require__(113)(ubique);
	__webpack_require__(114)(ubique);
	__webpack_require__(115)(ubique);
	__webpack_require__(116)(ubique);
	__webpack_require__(117)(ubique);
	__webpack_require__(118)(ubique);
	__webpack_require__(119)(ubique);
	__webpack_require__(120)(ubique);
	__webpack_require__(121)(ubique);
	__webpack_require__(122)(ubique);
	__webpack_require__(123)(ubique);
	__webpack_require__(124)(ubique);
	__webpack_require__(125)(ubique);
	__webpack_require__(126)(ubique);
	__webpack_require__(127)(ubique);
	__webpack_require__(128)(ubique);
	__webpack_require__(129)(ubique);
	__webpack_require__(130)(ubique);
	__webpack_require__(131)(ubique);
	__webpack_require__(132)(ubique);
	__webpack_require__(133)(ubique);
	__webpack_require__(134)(ubique);
	__webpack_require__(135)(ubique);
	__webpack_require__(136)(ubique);
	__webpack_require__(137)(ubique);
	__webpack_require__(138)(ubique);
	__webpack_require__(139)(ubique);
	__webpack_require__(140)(ubique);
	__webpack_require__(141)(ubique);
	__webpack_require__(142)(ubique);
	__webpack_require__(143)(ubique);
	__webpack_require__(144)(ubique);
	__webpack_require__(145)(ubique);
	__webpack_require__(146)(ubique);
	__webpack_require__(147)(ubique);
	__webpack_require__(148)(ubique);
	__webpack_require__(149)(ubique);
	__webpack_require__(150)(ubique);
	__webpack_require__(151)(ubique);
	__webpack_require__(152)(ubique);
	__webpack_require__(153)(ubique);
	__webpack_require__(154)(ubique);
	__webpack_require__(155)(ubique);
	__webpack_require__(156)(ubique);
	__webpack_require__(157)(ubique);
	__webpack_require__(158)(ubique);
	__webpack_require__(159)(ubique);
	__webpack_require__(160)(ubique);
	__webpack_require__(161)(ubique);
	__webpack_require__(162)(ubique);
	__webpack_require__(163)(ubique);
	__webpack_require__(164)(ubique);
	__webpack_require__(165)(ubique);
	__webpack_require__(166)(ubique);
	__webpack_require__(167)(ubique);
	__webpack_require__(168)(ubique);
	__webpack_require__(169)(ubique);
	__webpack_require__(170)(ubique);
	__webpack_require__(171)(ubique);
	__webpack_require__(172)(ubique);
	__webpack_require__(173)(ubique);
	__webpack_require__(174)(ubique);
	__webpack_require__(175)(ubique);
	__webpack_require__(176)(ubique);
	__webpack_require__(177)(ubique);
	__webpack_require__(178)(ubique);
	__webpack_require__(179)(ubique);
	__webpack_require__(180)(ubique);
	__webpack_require__(181)(ubique);
	__webpack_require__(182)(ubique);
	__webpack_require__(183)(ubique);
	__webpack_require__(184)(ubique);
	__webpack_require__(185)(ubique);
	__webpack_require__(186)(ubique);
	module.exports = ubique;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Constants properties
	 */
	module.exports = function($u) {
	/**
	 * Constants values
	 * @type {number}
	 */
	 $u.Inf = Number.POSITIVE_INFINITY;
	 $u.maxval = Number.MAX_VALUE;
	 $u.minval = Number.MIN_VALUE;
	 $u.PI = Math.PI;
	 $u.E = Math.E;
	 $u.LN2 = Math.LN2;
	 $u.LN10 = Math.LN10;
	 $u.LOG2E = Math.LOG2E;
	 $u.LOG10E = Math.LOG10E;
	 $u.SQRT1_2 = Math.SQRT1_2;
	 $u.SQRT2 = Math.SQRT2;
	 $u.eps = 2.2204460492503130808472633361816E-16;
	 $u.phi = 1.618033988749894848204586834;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * External Library
	 */
	module.exports = function($u) {
	 //moment.js - Parse, validate, manipulate, and display dates in JavaScript (http://momentjs.com/)
	 $u.__moment = __webpack_require__(187);

	}


/***/ },
/* 4 */
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
	 * var x = [1.4,2.3,3];
	 * 
	 * ubique.arrayfun(x,Math.log);
	 * // [ 0.3364722366212129, 0.8329091229351039, 1.0986122886681098 ]
	 * ubique.arrayfun([1.4,0,-10],function(a) {return ubique.sign(a);});
	 * // [ 1, 0, -1 ]
	 * ubique.arrayfun([[5,6],[1,3]],Math.log);
	 * // [[1.60944, 1.79176], [0, 1.09861]]
	 * ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value);});
	 * // [[1, 1, 1], [1, 1, -1]]
	 * ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value);},1);
	 * // [[1, 1], [1, 1], [1, -1]]
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dates and Time
	 */
	 module.exports = function($u) {
	/**
	 * @method datenum
	 * @summary Convert date and time to serial date number (Unix)
	 * @description Convert date and time to serial date number (Unix). Based on [moment.js](http://momentjs.com)
	 * 
	 * |Identifier| Example          | Description |
	 * | ----------- | ---------------- | ----------- |
	 * | `YYYY`      | `2014`           | 4 digit year |
	 * | `YY`        | `14`             | 2 digit year |
	 * | `Q`         | `1..4`           | Quarter of year. Sets month to first month in quarter. |
	 * | `M MM`      | `1..12`          | Month number |
	 * | `MMM MMMM`  | `January..Dec`   | Month name in locale set by `moment.locale()` |
	 * | `D DD`      | `1..31`          | Day of month |
	 * | `Do`        | `1st..31st`      | Day of month with ordinal |
	 * | `DDD DDDD`  | `1..365`         | Day of year |
	 * | `X`         | `1410715640.579` | Unix timestamp |
	 * | `x`         | `1410715640579`  | Unix ms timestamp |
	 * |
	 * | `gggg`   | `2014`  | Locale 4 digit week year |
	 * | `gg`     | `14`    | Locale 2 digit week year |
	 * | `w ww`   | `1..53` | Locale week of year |
	 * | `e`      | `1..7`  | Locale day of week |
	 * | `GGGG`   | `2014`  | ISO 4 digit week year |
	 * | `GG`     | `14`    | ISO 2 digit week year |
	 * | `W WW`   | `1..53` | ISO week of year |
	 * | `E`      | `1..7`  | ISO day of week |
	 * |
	 * | `H HH`         | `0..23`  | 24 hour time |
	 * | `h hh`         | `1..12`  | 12 hour time used with `a A`. |
	 * | `a A`          | `am pm`  | Post or ante meridiem |
	 * | `m mm`         | `0..59`  | Minutes |
	 * | `s ss`         | `0..59`  | Seconds |
	 * | `S`            | `0..9`   | Tenths of a second |
	 * | `SS`           | `0..99`  | Hundreds of a second |
	 * | `SSS`          | `0..999` | Thousandths of a second |
	 * | `Z ZZ`         | `+12:00` | Offset from UTC as `+-HH:mm`, `+-HHmm`, or `Z` |
	 *
	 * @param  {string|array|matrix} d string or array of dates
	 * @param  {string} fmt format string
	 * @return {string|array|matrix}
	 *
	 * @example
	 * ubique.datenum('31-12-2014','DD-MM-YYYY');
	 * // 1419984000
	 * ubique.datenum(['31-12-2014','31-01-2015'],'DD-MM-YYYY');
	 * // [ 1419984000, 1422662400 ]
	 * ubique.datenum([['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']],'DD-MM-YYYY');
	 * // [ [ 1419984000, 1422662400 ], [ 1423958400, 1425168000 ] ]
	 */
	 $u.datenum = function(d,fmt) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  var _datenum = function(a,fmt) {
	    return $u.__moment.utc(a,fmt).unix();
	  }
	  if ($u.isstring(d)) {
	   return _datenum(d,fmt);
	  }
	  if ($u.isarray(d) || $u.ismatrix(d)) {
	    return $u.arrayfun(d,function(el){return _datenum(el,fmt);});
	  }
	 }
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dates and Time
	 */
	 module.exports = function($u) {
	/**
	 * @method datestr
	 * @summary Convert serial date number (Unix) to string format
	 * @description Convert serial date number (Unix) to string format. Based on [moment.js](http://momentjs.com)
	 *
	 * |Identifier| Example          | Description |
	 * | ----------- | ---------------- | ----------- |
	 * | `YYYY`      | `2014`           | 4 digit year |
	 * | `YY`        | `14`             | 2 digit year |
	 * | `Q`         | `1..4`           | Quarter of year. Sets month to first month in quarter. |
	 * | `M MM`      | `1..12`          | Month number |
	 * | `MMM MMMM`  | `January..Dec`   | Month name in locale set by `moment.locale()` |
	 * | `D DD`      | `1..31`          | Day of month |
	 * | `Do`        | `1st..31st`      | Day of month with ordinal |
	 * | `DDD DDDD`  | `1..365`         | Day of year |
	 * | `X`         | `1410715640.579` | Unix timestamp |
	 * | `x`         | `1410715640579`  | Unix ms timestamp |
	 * |
	 * | `gggg`   | `2014`  | Locale 4 digit week year |
	 * | `gg`     | `14`    | Locale 2 digit week year |
	 * | `w ww`   | `1..53` | Locale week of year |
	 * | `e`      | `1..7`  | Locale day of week |
	 * | `GGGG`   | `2014`  | ISO 4 digit week year |
	 * | `GG`     | `14`    | ISO 2 digit week year |
	 * | `W WW`   | `1..53` | ISO week of year |
	 * | `E`      | `1..7`  | ISO day of week |
	 * |
	 * | `H HH`         | `0..23`  | 24 hour time |
	 * | `h hh`         | `1..12`  | 12 hour time used with `a A`. |
	 * | `a A`          | `am pm`  | Post or ante meridiem |
	 * | `m mm`         | `0..59`  | Minutes |
	 * | `s ss`         | `0..59`  | Seconds |
	 * | `S`            | `0..9`   | Tenths of a second |
	 * | `SS`           | `0..99`  | Hundreds of a second |
	 * | `SSS`          | `0..999` | Thousandths of a second |
	 * | `Z ZZ`         | `+12:00` | Offset from UTC as `+-HH:mm`, `+-HHmm`, or `Z` |
	 * 
	 * @param  {number|array|matrix} d ISO Unix datetime
	 * @param  {string} fmt format string (def: 'YYYY-MM-DD')
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.datestr(1419980400);
	 * // 2014-12-31
	 * ubique.datestr([ 1419984000, 1422662400 ],'DD-MMM-YY');
	 * // [ '31-Dec-14', '31-Jan-15' ]
	 * ubique.datestr([ [ 1419984000, 1422662400 ], [ 1423958400, 1425168000 ] ],'YY-MM-DD hh:mm:ss');
	 * // [ [ '14-12-31 12:00:00', '15-01-31 12:00:00' ],
	 * // [ '15-02-15 12:00:00', '15-03-01 12:00:00' ] ]
	 */
	 $u.datestr = function(d,fmt) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    fmt = 'YYYY-MM-DD';
	  }
	  var _datestr = function(a,fmt) {
	    return $u.__moment.utc(a,'X').format(fmt)
	  }
	  if ($u.isnumber(d)) {
	   return _datestr(d,fmt);
	  }
	  if ($u.isarray(d) || $u.ismatrix(d)) {
	    return $u.arrayfun(d,function(el){return _datestr(el,fmt);});
	  }
	 }
	}

/***/ },
/* 7 */
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
	 * @param  {array} x input element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.isarray([1.4,2.3,3]);
	 * // true
	 */
	 $u.isarray = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return Array.isArray(x) && !Array.isArray(x[0]);
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
	 * @method isempty
	 * @summary True for empty array or matrix
	 * @description  True for empty array or matrix
	 *              
	 * @param  {array|matrix} x input matrix
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.isempty([]);
	 * // true
	 * ubique.isempty([[]]);
	 * // true
	 */
	 $u.isempty = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
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
/* 9 */
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
	* @param  {function} x function
	* @return {Boolean}   
	*
	* @example
	* ubique.isfunction(function(a){return console.log(a);});
	* // true
	* ubique.isfunction(Math.log);
	* // true
	*/
	$u.isfunction = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return typeof x === 'function';
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
	* @method isinteger
	* @summary True for integer
	* @description  True for integer
	* 
	* @param  {number} x element
	* @return {boolean}
	*
	* @example
	* ubique.isinteger(5);
	* // true
	*/
	$u.isinteger = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return $u.isnumber(x) && Math.round(x) === x;
	}

	}

/***/ },
/* 11 */
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
	 * @param  {boolean} x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.islogical(true);
	 * // true
	 */
	 $u.islogical = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return typeof x === 'boolean';
	}

	}

/***/ },
/* 12 */
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
	 * @param  {matrix} x matrix
	 * @return {Boolean}  
	 *
	 * @example
	 * ubique.ismatrix([[1,3,4]]);
	 * // true
	 * ubique.ismatrix([[1],[3],[4]]);
	 * // true
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
/* 13 */
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
	 * @param  {null} x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.isnull(null);
	 * // true
	 */
	 $u.isnull = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return x === null;
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
	 * @method isnumber
	 * @summary True for number
	 * @description  True for number or NaN value
	 * 
	 * @param  {number} x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.isnumber(5);
	 * // true
	 * ubique.isnumber(NaN);
	 * // true 
	 */
	 $u.isnumber = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	 	return typeof x === 'number';
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
	 * @method isscalar
	 * @summary True for scalar input
	 * @description True for scalar input
	 *              
	 * @param  {number|array|matrix} x input 
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.isscalar(2);
	 * // true
	 * ubique.isscalar([2]);
	 * // true
	 * ubique.isscalar([[2]]);
	 * // true
	 */
	 $u.isscalar = function(x) {
	 	if ($u.nrows(x) === 1 && $u.ncols(x) === 1) {
	 		return true;
	 	}
	 	return false;
	 }

	}

/***/ },
/* 16 */
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
	 * @param  {matrix} x input matrix
	 * @return {boolean}     
	 *
	 * @example
	 * ubique.issingular([[2,6],[1,3]]);
	 * // false
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
/* 17 */
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
	 * @param  {string} x element
	 * @return {boolean|array}   
	 *
	 * @example
	 * ubique.isstring('test');
	 * // true
	 */
	 $u.isstring = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return typeof x === 'string';
	}

	}

/***/ },
/* 18 */
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
	 * @param  {undefined} x element
	 * @return {boolean}   
	 *
	 * @example
	 * ubique.isundefined(undefined);
	 * // true
	 */
	 $u.isundefined = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return x === undefined;
	}

	}

/***/ },
/* 19 */
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
	 * @param  {matrix} x matrix Nx1 or 1xN
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.isvector([[5,6,7]]);
	 * // true
	 * ubique.isvector([[5],[6],[7]]);
	 * // true
	 */
	 $u.isvector = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.ismatrix(x)) {
	 		if (($u.iscolumn(x) === true) || ($u.isrow(x) === true)) {
	 			return true;
	 		}
	 		return false;
	 	}
	 	return false;
	 }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dates and Time
	 */
	 module.exports = function($u) {
	/**
	 * @method month
	 * @summary Month of date
	 * @description Returns a number representing the month for each element in X.
	 * Months are 0 indexed, Jan is 0 and Dec is 11.
	 * Based on [moment.js](http://momentjs.com)
	 * 
	 * @param  {number|array|matrix} x serial date number (Unix)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.month(1424708525);
	 * // 1
	 * ubique.month([1414886399,1414972799]);
	 * // [ 10, 10 ]
	 * ubique.month([[1414886399,1414972799],[1415059199,1415145599]]);
	 * // [ [ 10, 10 ], [ 10, 10 ] ]
	 */
	 $u.month = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var _month = function(a) {
	    return $u.__moment.unix(a).month();
	  }
	  if ($u.isnumber(x)) {
	    return _month(x);
	  } 
	  if ($u.isarray(x) || $u.ismatrix(x)) {
	    return  $u.arrayfun(x,function(arr){return _month(arr);});
	  }
	}
	}


/***/ },
/* 21 */
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
	 * @param  {number|array|...} args variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.nan();
	 * // NaN
	 * ubique.nan(0);
	 * // []
	 * ubique.nan(1);
	 * // [[NaN]]
	 * ubique.nan(2);
	 * // [[NaN, NaN], [NaN, NaN]]
	 * ubique.nan([2,1]);
	 * // [[NaN], [NaN]]
	 * ubique.nan(1,2);
	 * // [[NaN, NaN]]
	 * ubique.nan(2,3);
	 * // [[NaN, NaN, NaN], [NaN, NaN, NaN]]
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
/* 22 */
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
	 * @param  {number} n number of characters to generate (def: 6)
	 * @param  {string} strset character set to get random sample
	 * @return {string}        
	 *
	 * @example
	 * ubique.randchar(12,'ABCD!-|/%&$\1234567890');
	 * // D&80%BB/C%B
	 * ubique.randchar(16,'ABCDEFGHILMNOPQRSTUVZ-1234567890');
	 * // U68MP-U7ZI26T2HS
	 */
	 $u.randchar = function(n,strset) {
	  if (arguments.length === 0) {
	    return [];
	  }
	  if (arguments.length === 1) {
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
/* 23 */
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
	 * @param  {array|matrix} x input matrix
	 * @param  {function} fun function to apply
	 * @param  {number} dim dimension 0: row, 1: column (def: 0)
	 * @return {array}     
	 *
	 * @example
	 * var d = [[5,6,5],[7,8,-1]];
	 * 
	 * ubique.vectorfun(d,function(val){return ubique.mean(val)},0);
	 * // [5.33333, 4.66667]
	 * ubique.vectorfun(d,function(val){return ubique.mean(val)},1);
	 * // [[6, 7, 2]]
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Dates and Time
	 */
	 module.exports = function($u) {
	/**
	 * @method weekday
	 * @summary Day of week
	 * @description Returns a number representing the day of the week for each element in X.
	 * The ISO day of the week begins with 1 Monday, 2 Tuesday ... 7 Sunday.
	 * Based on [moment.js](http://momentjs.com)
	 * 
	 * @param  {number|array|matrix} x serial date number (Unix)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.weekday(1426636800);
	 * // 3
	 * ubique.weekday([ 1424908800, 1426636800 ]);
	 * // [ 4, 3 ]
	 * ubique.weekday([ [ 1424908800, 1426636800 ], [ 1427328000, 1429315200 ] ]);
	 * // [ [ 4, 3 ], [ 4, 6 ] ]
	 */
	 $u.weekday = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var _weekday = function(a) {
	    return $u.__moment.utc(a,'X').isoWeekday();
	  }
	  if ($u.isnumber(x)) {
	    return _weekday(x);
	  } 
	  if ($u.isarray(x) || $u.ismatrix(x)) {
	    return  $u.arrayfun(x,function(arr){return _weekday(arr);});
	  }
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
	 * @method ceil
	 * @summary Round toward positive infinity
	 * @description Round toward positive infinity
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number} x number of decimals
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.ceil(Math.PI,12);
	 * // 3.14159265359
	 * ubique.ceil(3.78);
	 * // 4
	 * ubique.ceil([4.51,-1.4]);
	 * // [5, -1]
	 * ubique.ceil([[4.5134,-1.4345],[3.7809,0.0134]],2);
	 * // [[4.52, -1.43], [3.79, 0.02]]
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
/* 26 */
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
	 * ubique.cumdev(c);
	 * // [0.333333, 1.66667, -8.88178e-16]
	 * ubique.cumdev(b,0);
	 * // [[-1.33333, 1.33333, 0], [-2, -3, 0]]
	 * ubique.cumdev(b);
	 * // [[-2.5, -1, -5], [0, 0, 0]]
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
/* 27 */
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
	 * ubique.cummax([5,6,3]);
	 * // [5, 6, 6]
	 * ubique.cummax([[5,6,5],[7,8,-1]]);
	 * // [[5, 6, 5], [7, 8, 5]]
	 * ubique.cummax([[5,6,5],[7,8,-1]],0);
	 * // [[5, 6, 6], [7, 8, 8]]
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
/* 28 */
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
	 * ubique.cummin([5,6,3]);
	 * // [5, 5, 3]
	 * ubique.cummin([[5,6,5],[7,8,-1]]);
	 * // [[5, 6, 5], [5, 6, -1]]
	 * ubique.cummin([[5,6,5],[7,8,-1]],0);
	 * // [[5, 5, 5], [7, 7, -1]]
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
/* 29 */
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
	 * ubique.cumprod([5,6,3]);
	 * // [5, 30, 90]
	 * ubique.cumprod([[5,6,5],[7,8,-1]]);
	 * // [[5, 6, 5], [35, 48, -5]]
	 * ubique.cumprod([[5,6,5],[7,8,-1]],0);
	 * // [[5, 30, 150], [7, 56, -56]]
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
/* 30 */
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
	 * ubique.cumsum([5,6,3]);
	 * // [5, 11, 14]
	 * ubique.cumsum([[5,6,5],[7,8,-1]]);
	 * // [[5, 6, 5], [12, 14, 4]]
	 * ubique.cumsum([[5,6,5],[7,8,-1]],0);
	 * // [[5, 11, 16], [7, 15, 14]]
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
/* 31 */
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
	 * ubique.diff([5,6,3]);
	 * // [1, -3]
	 * ubique.diff([[5,6,5],[7,8,-1]]);
	 * // [[2, 2, -6]]
	 * ubique.diff([[5,6,5],[7,8,-1]],0);
	 * // [[1, -1], [1, -9]]
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
/* 32 */
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
	 * @param  {array} x number or array of values
	 * @param  {array} y number or array of values
	 * @return {array}   
	 *
	 * @example
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * 
	 * ubique.dot(c,d);
	 * // -8.6
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Relational Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method eq
	 * @summary Equality X === Y
	 * @description Equality X === Y
	 *
	 * @param  {number|array|matrix} x left array
	 * @param  {number|array|matrix} y right array
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.eq(5,5);
	 * // true
	 * ubique.eq(5,[5,6,3]);
	 * // [ true, false, false ]
	 * ubique.eq(5,[[5,6],[3,5]]);
	 * // [ [ true, false ], [ false, true ] ]
	 * ubique.eq([5,6,3],5);
	 * // [ true, false, false ]
	 * ubique.eq([[5,6],[3,5]],5);
	 * // [ [ true, false ], [ false, true ] ]
	 * ubique.eq([5,6,3],[2,6,0]);
	 * // [ false, true, false ]
	 * ubique.eq([[5,6],[-1,2]],[[5,6],[3,5]]);
	 * // [ [ true, true ], [ false, false ] ]
	 */
	 $u.eq = function(x,y) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  var _eq = function(el){ return el === 0;};

	  var d = $u.minus(x,y);
	  if ($u.isnumber(d)) {
	    return _eq(d);
	  }
	  return $u.arrayfun(d,_eq);
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
	 * @method floor
	 * @summary Round toward negative infinity
	 * @description Round toward negative infinity
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number} x number of decimals
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.floor(Math.PI,12);
	 * // 3.141592653589
	 * ubique.floor(3.78);
	 * // 3
	 * ubique.floor([4.51,-1.4]);
	 * // [4, -2]
	 * ubique.floor([[4.5134,-1.4345],[3.7809,0.0134]],2);
	 * // [[4.51, -1.44], [3.78, 0.01]]
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Relational Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method ge
	 * @summary Greater than or equal to X >= Y
	 * @description Greater than or equal to X >= Y
	 *
	 * @param  {number|array|matrix} x left array
	 * @param  {number|array|matrix} y right array
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.ge(5,5);
	 * // true
	 * ubique.ge(5,[5,6,3]);
	 * // [ true, false, true ]
	 * ubique.ge(5,[[5,6],[3,5]]);
	 * // [ [ true, false ], [ false, true ] ]
	 * ubique.ge([5,6,3],5);
	 * // [ true, true, false ]
	 * ubique.ge([[5,6],[3,5]],5);
	 * // [ [ true, true ], [ false, true ] ]
	 * ubique.ge([5,6,3],[2,6,0]);
	 * // [ false, true, false ]
	 * ubique.ge([[5,6],[-1,2]],[[5,6],[3,5]]);
	 * // [ [ true, true ], [ false, false ] ]
	 */
	 $u.ge = function(x,y) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  var _ge = function(el){ return el >= 0;};

	  var d = $u.minus(x,y);
	  if ($u.isnumber(d)) {
	    return _ge(d);
	  }
	  return $u.arrayfun(d,_ge);
	}
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Relational Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method gt
	 * @summary Greater than X > Y
	 * @description Greater than X > Y
	 *
	 * @param  {number|array|matrix} x left array
	 * @param  {number|array|matrix} y right array
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.gt(5,5);
	 * // false
	 * ubique.gt(5,[5,6,3]);
	 * // [ false, false, true ]
	 * ubique.gt(5,[[5,6],[3,5]]);
	 * // [ [ false, false ], [ true, false ] ]
	 * ubique.gt([5,6,3],5);
	 * // [ false, true, false ]
	 * ubique.gt([[5,6],[3,5]],5);
	 * // [ [ false, true ], [ false, false ] ]
	 * ubique.gt([5,6,3],[2,6,0]);
	 * // [ true, false, true ]
	 * ubique.gt([[5,6],[-1,2]],[[5,6],[3,5]]);
	 * // [ [ false, false ], [ false, false ] ]
	 */
	 $u.gt = function(x,y) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  var _gt = function(el){ return el > 0;};

	  var d = $u.minus(x,y);
	  if ($u.isnumber(d)) {
	    return _gt(d);
	  }
	  return $u.arrayfun(d,_gt);
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
	 * ubique.ldivide(5,6);
	 * // 1.2
	 * ubique.ldivide([5,6,7],3);
	 * // [0.6, 0.5, 0.428571]
	 * ubique.ldivide(3,[-1,-2,-3]);
	 * // [-0.333333, -0.666667, -1]
	 * ubique.ldivide(c,d);
	 * // [0.1, -0.5, 0.766667]
	 * ubique.ldivide(e,f);
	 * // [[3, 2.5], [1.2, 0.5]]
	 * ubique.ldivide(e,3);
	 * // [[0.333333, 0.6], [0.5, 3]]
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Relational Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method le
	 * @summary Less than or equal to X <= Y
	 * @description Less than or equal to X <= Y
	 *
	 * @param  {number|array|matrix} x left array
	 * @param  {number|array|matrix} y right array
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.le(5,5);
	 * // true
	 * ubique.le(5,[5,6,3]);
	 * // [ true, true, false ]
	 * ubique.le(5,[[5,6],[3,5]]);
	 * // [ [ true, true ], [ false, true ] ]
	 * ubique.le([5,6,3],5);
	 * // [ true, false, true ]
	 * ubique.le([[5,6],[3,5]],5);
	 * // [ [ true, false ], [ true, true ] ]
	 * ubique.le([5,6,3],[2,6,0]);
	 * // [ false, true, false ]
	 * ubique.le([[5,6],[-1,2]],[[5,6],[3,5]]);
	 * // [ [ true, true ], [ true, true ] ]
	 */
	 $u.le = function(x,y) {
	  if (arguments.lenleh < 2) {
	    throw new Error('not enough input arguments');
	  }
	  var _le = function(el){ return el <= 0;};

	  var d = $u.minus(x,y);
	  if ($u.isnumber(d)) {
	    return _le(d);
	  }
	  return $u.arrayfun(d,_le);
	}
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Relational Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method lt
	 * @summary Less than X < Y
	 * @description Less than X < Y
	 *
	 * @param  {number|array|matrix} x left array
	 * @param  {number|array|matrix} y right array
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.lt(5,5);
	 * // false
	 * ubique.lt(5,[5,6,3]);
	 * // [ false, true, false ]
	 * ubique.lt(5,[[5,6],[3,5]]);
	 * // [ [ false, true ], [ false, false ] ]
	 * ubique.lt([5,6,3],5);
	 * // [ false, false, true ]
	 * ubique.lt([[5,6],[3,5]],5);
	 * // [ [ false, false ], [ true, false ] ]
	 * ubique.lt([5,6,3],[2,6,0]);
	 * // [ false, false, false ]
	 * ubique.lt([[5,6],[-1,2]],[[5,6],[3,5]]);
	 * // [ [ false, false ], [ true, true ] ]
	 */
	 $u.lt = function(x,y) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  var _lt = function(el){ return el < 0;};

	  var d = $u.minus(x,y);
	  if ($u.isnumber(d)) {
	    return _lt(d);
	  }
	  return $u.arrayfun(d,_lt);
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
	 * @method minus
	 * @summary Subtraction X - Y
	 * @description Subtraction X - Y. X and Y must have the same dimension unless one is a number
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @param  {number|array|matrix} y number or array of values
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * 
	 * ubique.minus(5,6);
	 * // -1
	 * ubique.minus([5,6,4],[3,-1,0]);
	 * // [2, 7, 4]
	 * ubique.minus([5,6,4],10);
	 * // [-5, -4, -6]
	 * ubique.minus(a,b);
	 * // [[6, 3, 6], [3, 3, -10]]
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
	    if (($u.nrows(x) === $u.nrows(y)) && ($u.ncols(x) === $u.ncols(y))) {
	     var v = [];
	     for (var i = 0;i < $u.nrows(x);i++) {
	      var vx = $u.row(x,i),
	      vy = $u.row(y,i);
	      v[i] = $u.minus(vx,vy);
	    }
	    return v;
	  } else {
	    throw new Error('input dimensions must agree');
	  }
	}
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
	  * var e = [[9, 5],[6, 1]];
	  * var f = [[3, 2],[5, 2]];
	  * 
	  * ubique.mldivide(5,6);
	  * // 1.2
	  * ubique.mldivide(e,f);
	  * // [ [ 1.0476, 0.381 ], [ -1.2857, -0.2857 ] ]
	  * ubique.mldivide(5,e);
	  * // [ [ 1.8, 1 ], [ 1.2, 0.2 ] ]
	  * ubique.mldivide(e,a);
	  * // [ [ 1.4286, 1.619, -0.4762 ], [ -1.5714, -1.7143, 1.8571 ] ]
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
	      throw new Error('first argument must be square');
	    }
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
	 * ubique.mod([13,-7],2.2);
	 * // [2, 1.8]
	 * ubique.mod([13,-7],[5,6]);
	 * // [3, 5]
	 * ubique.mod(a,b);
	 * // [[0, 0, 0], [3, 3, 8]]
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
/* 43 */
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
	 * ubique.mpower(l,3);
	 * // [[-2, 11, -11], [11, -35, 33], [22, 33, -2]]
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
/* 44 */
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
	  * ubique.mrdivide(5,6);
	  * // 0.833333
	  * ubique.mrdivide(c,6);
	  * // [0.833333, 1, 0.5]
	  * ubique.mrdivide(e,5);
	  * // [[1.8, 1], [1.2, 0.2]]
	  * ubique.mrdivide(e,f);
	  * // [[1.75, 0.75], [-1.75, 2.25]]
	  * ubique.mrdivide(a,l);
	  * // [[-0.769231, 0.538462, 2.61538], [3.38462, 0.230769, 1.69231]]
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
	      throw new Error('second argument must be square');
	    }
	  }

	}

/***/ },
/* 45 */
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
	 * ubique.mtimes(5,6);
	 * // 30
	 * ubique.mtimes(c,3);
	 * // [15, 18, 9]
	 * ubique.mtimes(a,3);
	 * // [[15, 18, 15], [21, 24, -3]]
	 * ubique.mtimes(c,[[3,4,5]]);
	 * // [[15, 20, 25], [18, 24, 30], [9, 12, 15]]
	 * ubique.mtimes(a,c);
	 * // [[76], [80]]
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Relational Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method ne
	 * @summary Inequality X !== Y
	 * @description Inequality X !== Y
	 *
	 * @param  {number|array|matrix} x left array
	 * @param  {number|array|matrix} y right array
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.ne(5,5);
	 * // false
	 * ubique.ne(5,[5,6,3]);
	 * // [ false, true, true ]
	 * ubique.ne(5,[[5,6],[3,5]]);
	 * // [ [ false, true ], [ true, false ] ]
	 * ubique.ne([5,6,3],5);
	 * // [ false, true, true ]
	 * ubique.ne([[5,6],[3,5]],5);
	 * // [ [ false, true ], [ true, false ] ]
	 * ubique.ne([5,6,3],[2,6,0]);
	 * // [ true, false, true ]
	 * ubique.ne([[5,6],[-1,2]],[[5,6],[3,5]]);
	 * // [ [ false, false ], [ true, true ] ]
	 */
	 $u.ne = function(x,y) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  var _ne = function(el){ return el !== 0;};

	  var d = $u.minus(x,y);
	  if ($u.isnumber(d)) {
	    return _ne(d);
	  }
	  return $u.arrayfun(d,_ne);
	}
	}

/***/ },
/* 47 */
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
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * 
	 * ubique.plus(5,6);
	 * // 11
	 * ubique.plus([5,6,4],[3,-1,0]);
	 * // [8, 5, 4]
	 * ubique.plus([5,6,4],10);
	 * // [15, 16, 14]
	 * ubique.plus(a,b);
	 * // [[4, 9, 4], [11, 13, 8]]
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
	     if (($u.nrows(x) === $u.nrows(y)) && ($u.ncols(x) === $u.ncols(y))) {
	       var v = [];
	       for (var i = 0;i < $u.nrows(x);i++) {
	        var vx = $u.row(x,i),
	        vy = $u.row(y,i);
	        v[i] = $u.plus(vx,vy);
	      }
	      return v;
	    } else {
	      throw new Error('input dimensions must agree');
	    }
	  }
	}

	}

/***/ },
/* 48 */
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
	 * ubique.power(5,4);
	 * // 625
	 * ubique.power(c,5);
	 * // [3125, 7776, 243]
	 * ubique.power(5,c);
	 * // [3125, 15625, 125]
	 * ubique.power(a,5);
	 * // [[3125, 7776, 3125], [16807, 32768, -1]]
	 * ubique.power(5,a);
	 * // [[3125, 15625, 3125], [78125, 3.90625e+5, 0.2]]
	 * ubique.power(c,d);
	 * // [2.23607, 0.00462963, 12.5135]
	 * ubique.power(a,b);
	 * // [[0.2, 216, 0.2], [2401, 32768, -1]]
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
/* 49 */
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
	 * ubique.prod([5,6,3]);
	 * // 14
	 * ubique.prod([[5,6,5],[7,8,-1]],0);
	 * // [150, -56]
	 * ubique.prod([[5,6,5],[7,8,-1]],1);
	 * // [[35, 48, -5]]
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
/* 50 */
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
	 * ubique.rdivide(5,6);
	 * // 0.833333
	 * ubique.rdivide(a,3);
	 * // [[1.66667, 2, 1.66667], [2.33333, 2.66667, -0.333333]]
	 * ubique.rdivide(3,[-1,-2,-3]);
	 * // [-3, -1.5, -1]
	 * ubique.rdivide([5,6,7],[-1,-2,-3]);
	 * // [-5, -3, -2.33333]
	 * ubique.rdivide(e,f);
	 * // [[3, 2.5], [1.2, 0.5]]
	 * ubique.rdivide(e,3);
	 * // [[3, 1.66667], [2, 0.333333]]
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
/* 51 */
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
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * 
	 * ubique.rem([13,-7],2.2);
	 * // [2, -0.4]
	 * ubique.rem([13,-7],[5,6]);
	 * // [3, -1]
	 * ubique.rem(a,b);
	 * // [[0, 0, 0], [3, 3, -1]]
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
/* 52 */
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
	 * ubique.round(Math.PI,12);
	 * // 3.14159265359
	 * ubique.round([-1.4543,4.5234],2);
	 * // [-1.45, 4.52]
	 * ubique.round([-1.9,-0.2,3.4,5.6,7.0]);
	 * // [-2, 0, 3, 6, 7]
	 * ubique.round([[1.45,-2.3],[1.1,-4.3]]);
	 * // [[1, -2], [1, -4]]
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
/* 53 */
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
	 * ubique.sum([5,6,3]);
	 * // 14
	 * ubique.sum([[5,6,5],[7,8,-1]],0);
	 * // [16, 14]
	 * ubique.sum([[5,6,5],[7,8,-1]],1);
	 * // [[12, 14, 4]]
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
/* 54 */
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
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * ubique.times(5,6);
	 * // 30
	 * ubique.times([5,6,4],[3,-1,0]);
	 * // [15, -6, 0]
	 * ubique.times([5,6,4],10);
	 * // [50, 60, 40]
	 * ubique.times(a,b);
	 * // [[-5, 18, -5], [28, 40, -9]]
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Arithmetic Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method uminus
	 * @summary Unary minus -X
	 * @description Unary minus -X
	 * 
	 * @param  {number|array|matrix} x number or array of values
	 * @return {number|array|matrix}
	 *
	 * @example
	 * ubique.uminus(-5);
	 * // 5
	 * ubique.uminus([5,6]);
	 * // [-5, -6]
	 * ubique.uminus([[5,6],[-1,-3]]);
	 * // [[-5, -6], [1, 3]]
	 */
	 $u.uminus = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnumber(x)) {
	    return -x;
	  }
	  return $u.arrayfun(x,function(a){return -a;});
	}

	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Set Operations
	 */
	 module.exports = function($u) {
	/**
	 * @method unique
	 * @summary Unique values in array or matrix
	 * @description Unique values in array or matrix
	 *
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {array|matrix}
	 *
	 * @example
	 * ubique.unique([5,5,6,6,7]);
	 * // [ 5, 6, 7 ]
	 * ubique.unique([[5,4],[5,3],[6,3]]);
	 * // [ [ 5, 3 ], [ 6, 4 ] ]
	 */
	 $u.unique = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _unique = function(a) {
	    var o = {},
	    r = [];
	    for (var i = 0; i < a.length; i++) {
	      o[a[i]] = a[i];
	    }
	    for(i in o) {
	      r.push(o[i]);
	    }
	    return r;
	  }

	  if ($u.isnumber(x)) {
	    return x;
	  }
	  if ($u.isarray(x)) {
	    return  _unique(x);
	  }
	  return $u.vectorfun(x,function(val){return _unique(val);},dim);
	}
	}


/***/ },
/* 57 */
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
	 * ubique.uplus(-5);
	 * // -5
	 * ubique.uplus([5,6]);
	 * // [5, 6]
	 * ubique.uplus([[5,6],[-1,-3]]);
	 * // [[5, 6], [-1, -3]]
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
/* 58 */
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
	 * ubique.abs(-0.5);
	 * // -1
	 * ubique.abs([0.1,-0.5]);
	 * // [0.1, 0.5]
	 * ubique.abs([[5,-2],[-3,4]]);
	 * // [[5, 2], [3, 4]]
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
/* 59 */
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
	 * ubique.erf(0.5);
	 * // 0.5204999077232426
	 */
	 $u.erf = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return 1 - $u.erfc(x);
	}

	}

/***/ },
/* 60 */
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
	 * ubique.erfc(0.5);
	 * // 0.47950009227675744
	 */
	 $u.erfc = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
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
/* 61 */
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
	 * ubique.erfcinv(1.5);
	 * // -0.476936236121904
	 */
	 $u.erfcinv = function(y) {
	    if (arguments.length === 0) {
	        throw new Error('not enough input arguments');
	    }
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
/* 62 */
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
	 * ubique.erfinv(0.1);
	 * // 0.08885596505119545
	 */
	 $u.erfinv = function(y) {
	    if (arguments.length === 0) {
	        throw new Error('not enough input arguments');
	    }
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
/* 63 */
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
	 * ubique.exp(6);
	 * // 403.429
	 * ubique.exp(c);
	 * // [148.413, 403.429, 20.0855]
	 * ubqie.exp(a);
	 * // [[148.413, 403.429, 148.413], [1096.63, 2980.96, 0.367879]]
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
/* 64 */
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
	 * var a = [[5,6,5],[7,8,2]];
	 * var c = [5,6,3];
	 *
	 * ubique.log(6);
	 * // 1.79176
	 * ubique.log(c);
	 * // [ 1.60944, 1.79176, 1.09861 ]
	 * ubique.log([[5,6,5],[7,8,2]]);
	 * // [ [ 1.6094, 1.7918, 1.6094 ], [ 1.9459, 2.0794, 0.6931 ] ]
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
/* 65 */
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
	 * ubique.sign(-0.5);
	 * // -1
	 * ubique.sign([0.1,-0.5]);
	 * // [1, -1]
	 * ubique.sign([[5,-2],[-3,4]]);
	 * // [[1, -1], [-1, 1]]
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
/* 66 */
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
	 * var a = [[5,6,5],[7,8,2]];
	 * var c = [5,6,3];
	 *
	 * ubique.sqrt(6);
	 * // 2.44949
	 * ubique.sqrt(c);
	 * // [ 2.23607, 2.44949, 1.73205 ]
	 * ubique.sqrt(a);
	 * // [ [ 2.2361, 2.4495, 2.2361 ], [ 2.6458, 2.8284, 1.4142 ] ]
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
/* 67 */
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
	 * ubique.det([[1,5],[6,2]]);
	 * // -28
	 * ubique.det([[2,2],[2,3]]);
	 * // 2
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
/* 68 */
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
	  * ubique.inv(f);
	  * // [[-0.5, 0.5], [1.25, -0.75]]
	  * ubique.inv(l);
	  * // [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
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
/* 69 */
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
	  * var a = [[5,6,5],[7,8,-1]];
	  * var c = [5,6,3];
	  * var g = [[5,6,5],[7,8,-1],[5,6,3]];
	  * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	  * var m = [4,-6,7];
	  * 
	  * ubique.linsolve(l,m);
	  * // [1, 2, -1]
	  * ubique.linsolve(g,m);
	  * // [-68.5, 59, -1.5]
	  * ubique.linsolve(l,ubique.eye(3));
	  * // [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Matrix Decomposition
	 */
	 module.exports = function($u) {
	/**
	 * @method lu
	 * @summary LU matrix factorization
	 * @description LU matrix factorization based on Doolittle algorithm. The LU decomposition with pivoting always exists, even if the matrix is singular.  
	 * Returns an object:  
	 * 
	 * LU (lu matrix) 
	 * L (lower triangular matrix)
	 * U (upper triangular matrix)
	 * P (pivot vector)
	 * S (pivot sign) +1 or -1
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
	 * ubique.lu(a);
	 * // { LU: [ [ 7, 8, -1 ], [ 0.7142857142857143, 0.2857142857142856, 5.714285714285714 ] ],
	 * //    L: [ [ 1, 0 ], [ 0.7142857142857143, 1 ] ],
	 * //    U: [ [ 7, 8, -1 ], [ 0, 0.2857142857142856, 5.714285714285714 ] ],
	 * //    P: [ 1, 0 ],
	 * //    S: -1;}
	 *
	 * ubique.lu(e);
	 * // { LU: [ [ 6, 0 ], [ 0, 5 ] ],
	 * //    L: [ [ 1, 0 ], [ 0, 1 ] ],
	 * //    U: [ [ 6, 0 ], [ 0, 5 ] ],
	 * //    P: [ 1, 0 ],
	 * //    S: -1;}
	 */
	 $u.lu = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}

	 	// LU decomposition
	 	var lud = function(a) {
	 		var _a = $u.clone(a);
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	/**
	 * @method array
	 * @summary Create an array with custom elements
	 * @description Create an array with custom elements
	 * 
	 * @param  {number} n number of elements
	 * @param  {number|string|boolean} val values of the array 
	 * @return {array}       
	 *
	 * @example
	 * ubique.array();
	 * // []
	 * ubique.array(3,-1);
	 * // [-1, -1, -1]
	 * ubique.array(3,'y');
	 * // [ 'y', 'y', 'y' ]
	 * ubique.array(3,true);
	 * // [ true, true, true ]
	 */
	 $u.array = function(n,val) {
	  if (arguments.length === 0) {
	   return [];
	 }
	 if (arguments.length === 1) {
	  val = NaN;
	 }
	 var arr = new Array(n);
	 for (var i = 0; i < arr.length; i++) {
	  arr[i] = val;
	 }
	 return arr;
	 }
	}

/***/ },
/* 72 */
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
	 * @param  {number|array|matrix...} args variable arguments (0:rows, 1:columns)
	 * @return {array|matrix}     
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var b = [[-1,3,-1],[4,5,9]];
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var f = [[3, 2], [5, 2]];
	 *
	 * ubique.cat(0,a,b);
	 * // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9]]
	 * ubique.cat(0,a,b,b);
	 * // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9], [-1, 3, -1], [4, 5, 9]]
	 * ubique.cat(0,c,d);
	 * // [5, 6, 3, 0.5, -3, 2.3]
	 * ubique.cat(0,[1],[2]);
	 * // [1, 2]
	 * ubique.cat(0,5,7,9,8);
	 * // [5,7,9,8]
	 * ubique.cat(0,5,7,c);
	 * // [5, 7, 5, 6, 3]
	 * ubique.cat(1,a,b);
	 * // [[5, 6, 5, -1, 3, -1], [7, 8, -1, 4, 5, 9]]
	 * ubique.cat(1,a,b,f);
	 * // [[5, 6, 5, -1, 3, -1, 3, 2], [7, 8, -1, 4, 5, 9, 5, 2]]
	 * ubique.cat(1,a,[2,3]);
	 * // [[5, 6, 5, 2], [7, 8, -1, 3]]
	 * ubique.cat(1,5,6,7);
	 * // [[5, 6, 7]]
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
/* 73 */
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
	 * var d = [[5]];
	 * 
	 * ubique.clone(b);
	 * // [[-1,3,-1],[4,5,9]]
	 * ubique.clone(c);
	 * // [5,6,3]
	 * ubique.clone(d);
	 * // [[5]]
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
/* 74 */
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
	 * ubique.col([[5,6,5],[7,8,-1]],0);
	 * // [5, 7]
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
/* 75 */
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
	 * ubique.colon(1,10,1);
	 * // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	 * ubique.colon(10,1,1);
	 * //  []
	 * ubique.colon(-5,5,2);
	 * // [-5, -3, -1, 1, 3, 5]
	 * ubique.colon(-7,14,2);
	 * // [-7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13]
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
/* 76 */
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
	 * ubique.diag([5,6,-3]);
	 * // [[5, 0, 0], [0, 6, 0], [0, 0, -3]]
	 * ubique.diag([5,6,-3,1]);
	 * // [[0, 5, 0, 0], [0, 0, 6, 0], [0, 0, 0, -3], [0, 0, 0, 0]]
	 * ubique.diag([5,6,-3,-1]);
	 * // [[0, 0, 0, 0], [5, 0, 0, 0], [0, 6, 0, 0], [0, 0, -3, 0]]
	 *
	 * // get diag values from matrix
	 * ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]]);
	 * // [5,6,-3]
	 * ubique.diag([[0, 5, 0, 0], [0, 0, 6, 0], [0, 0, 0, -3], [0, 0, 0, 0]],1);
	 * // [5,6,-3]
	 * ubique.diag([[0, 0, 0, 0], [5, 0, 0, 0], [0, 6, 0, 0], [0, 0, -3, 0]],-1);
	 * // [5,6,-3]
	 * ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]],2);
	 * // [0, 0]
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
/* 77 */
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
	 * @param  {number} dim	(only for matrix) -1: rows and columns, 0: rows, 1: column (def: -1)
	 * @return {number|array}   
	 * 
	 * @example
	 * ubique.end([5,6,3]);
	 * // 2
	 * ubique.end([[4,5,0],[-1,2,-3]]);
	 * // [1, 2]
	 * ubique.end([[4,5,0],[-1,2,-3]],0);
	 * // 1
	 */
	 $u.end = function(x,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = -1;
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	} else 
	 	if ($u.isarray(x)) {
	 		return x.length - 1;
	 	} else
	 	if ($u.ismatrix(x)) {
	 		if (!$u.isinteger(dim) || (dim < -1 || dim > 1)) {
	 			throw new Error('dimension must be -1,0,1');
	 		}
	 		var idx = [$u.nrows(x) - 1,$u.ncols(x) - 1];
	 		if (dim === -1) {
	 			return idx;
	 		} else {
	 			return idx[dim];
	 		}
	 	} else 
	 	throw new Error('unkown input arguments'); 	
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
	 * @method eye
	 * @summary Identity matrix
	 * @description Identity matrix
	 * 
	 * @param  {number|array|...} args variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.eye();
	 * // 1
	 * ubique.eye(0);
	 * // []
	 * ubique.eye(1);
	 * // [[1]]
	 * ubique.eye(2);
	 * // [[1, 0], [0, 1]]
	 * ubique.eye([2,1]);
	 * // [[1], [0]]
	 * ubique.eye(1,2);
	 * // [[1, 0]]
	 * ubique.eye(2,3);
	 * // [[1, 0, 0], [0, 1, 0]]
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
/* 79 */
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
	 * @param  {number|array|...} args variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.falses();
	 * // false
	 * ubique.falses(0);
	 * // []
	 * ubique.falses(1);
	 * // [[false]]
	 * ubique.falses(2);
	 * // [[false, false], [false, false]]
	 * ubique.falses([2,1]);
	 * // [[false], [false]]
	 * ubique.falses(1,2);
	 * // [[false, false]]
	 * ubique.falses(2,3);
	 * // [[false, false, false], [false, false, false]]
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Indexing
	 */
	 module.exports = function($u) {
	/**
	 * @method find
	 * @summary Find indices of nonzero elements
	 * @description Find indices of nonzero elements
	 *
	 * @param  {array|matrix} x values
	 * @return {array|matrix}   
	 *
	 * @example
	 * ubique.find([0.3,-0.4,0.5,0.9].map(function(a){return a > 0}));
	 * // [ 0, 2, 3 ]
	 * ubique.find([[true,true],[false,true]]);
	 * // [ 0, 2, 3 ]
	 */
	 $u.find = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.ismatrix(x)) {
	    x = $u.flatten(x);
	  }
	  var dummy = $u.colon(0,x.length);
	  return dummy.filter(function(el) {
	    return x[el] === true;
	  })
	}
	}

/***/ },
/* 81 */
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
	 * ubique.fix(3.78);
	 * // 3
	 * ubique.fix([4.51,-1.4]);
	 * // [4, -1]
	 * ubique.fix([[4.51,-1.4],[3.78,0.01]]);
	 * // [[4, -1], [3, 0]]
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method flatten
	 * @summary Flatten a matrix
	 * @description Flatten a matrix and returns an array. The concatenation is made by columns.
	 * 
	 * @param  {matrix} x matrix of elements
	 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
	 * @return {array}  
	 *
	 * @example
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 * 
	 * ubique.flatten([[5,6],[7,8]]);
	 * // [5, 7, 6, 8]
	 * ubique.flatten([[5,6],[7,8]],1);
	 * // [5, 6, 7, 8]
	 * ubique.flatten(l);
	 * // [1, 1, 2, 1, -2, 3, -1, 3, 1]
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Sorting and Reshaping Arrays
	 */
	 module.exports = function($u) {
	/**
	 * @method flipdim
	 * @summary Flip order of elements in array or matrix
	 * @description Flip order of elements in array or matrix
	 * 
	 * @param  {array|matrix} x array or matrix of elements
	 * @param  {number} dim dimension to apply reverse ordering 0: rows, 1: column (def: 0)
	 * @return {array|matrix}     
	 * 
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * var c = [5,6,3];
	 * 
	 * ubique.flipdim(c);
	 * // [3, 6, 5]
	 * ubique.flipdim(c,1);
	 * // [5, 6, 3]
	 * ubique.flipdim(a);
	 * // [[7, 8, -1], [5, 6, 5]]
	 * ubique.flipdim(a,1);
	 * // [[5, 6, 5], [-1, 8, 7]]
	 */
	 $u.flipdim = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _flipdim = function(a) {
	    var b = a.reverse();
	    return $u.clone(a.reverse());
	  }
	  if ($u.isnumber(x)) {
	    return x;
	  } else 
	  if ($u.isarray(x)) {
	    if (dim === 1) {
	      return x
	    } else {
	      return _flipdim(x);
	    }
	  } else 
	  if ($u.ismatrix(x)) {
	    return $u.vectorfun(x,function(val){return _flipdim(val);},1 - dim);
	  } else {
	    throw new Error('unknown input arguments');
	  }

	}
	}

/***/ },
/* 84 */
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
	 * ubique.fliplr([[1,4],[2,5],[3,6]]);
	 * // [[4, 1], [5, 2], [6, 3]]
	 */
	 $u.fliplr = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	return $u.flipdim(x,1);
	 }

	}


/***/ },
/* 85 */
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
	 * ubique.fliplr([[1,4],[2,5],[3,6]]);
	 * // [[3, 6], [2, 5], [1, 4]]
	 */
	 $u.flipud = function(x) {
	 		if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	return $u.flipdim(x,0);
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
	 * ubique.horzcat(a,b);
	 * // [[5, 6, 5, -1, 3, -1], [7, 8, -1, 4, 5, 9]]
	 * ubique.horzcat(a,b,f);
	 * // [[5, 6, 5, -1, 3, -1, 3, 2], [7, 8, -1, 4, 5, 9, 5, 2]]
	 * ubique.horzcat(a,[2,3]);
	 * // [[5, 6, 5, 2], [7, 8, -1, 3]]
	 * ubique.horzcat(5,6,7);
	 * // [[5, 6, 7]]
	 * ubique.horzcat(ubique.transpose(c));
	 * // [[5, 5, 6, 3]]
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
/* 87 */
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
	 * @param  {array|matrix} size size of array or matrix
	 * @param  {number|array} index linear indexing [0...N-1]
	 * @return {array|matrix}       
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * 
	 * ubique.ind2sub(ubique.size(a),5);
	 * // [1, 2]
	 * ubique.ind2sub(ubique.size(a),[0,1,2]);
	 * // [[0, 0], [1, 0], [0, 1]]
	 * ubique.ind2sub(ubique.size([5,6,3]),2);
	 * // [2, 0]
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
/* 88 */
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
	 * @param  {matrix} x input matrix
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.iscolumn([[2],[2]]);
	 * // true
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
/* 89 */
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
	 * @param  {matrix} x input matrix
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.isrow([[2,2]]);
	 * // true
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
/* 90 */
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
	 * @param  {matrix} x input matrix
	 * @return {Boolean}   
	 *
	 * @example
	 * ubique.issquare([[9, 5], [6, 1]]);
	 * // true
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
/* 91 */
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
	* ubique.length([3,5,6]);
	* // 3
	* ubique.length(5);
	* // 1
	* ubique.length([[5,4],[-1,2]]);
	* // 2
	*/
	$u.length = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return Math.max.apply(Math,$u.size(x));
	}

	}

/***/ },
/* 92 */
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
	 * ubique.linspace(1,10,5);
	 * // [1, 3.25, 5.5, 7.75, 10]
	 */
	 $u.linspace = function(a,b,n) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    n = 10;
	  }
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
/* 93 */
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
	 * ubique.logspace(0,1,5);
	 * // [1, 1.7782794100389228, 3.1622776601683795, 5.623413251903491, 10]
	 */
	 $u.logspace = function(a,b,n) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    n = 10;
	  }
	  return $u.linspace(a,b,n).map(function(val){return Math.pow(10,val)});
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
	 * @method matrix
	 * @summary Create a matrix object
	 * @description Create a matrix object with 2 inputs, an array of size [rows,cols] and a chosen value
	 * or with 3 inputs, two numbers for dimension (rows,cols) and the last one for the value.
	 * 
	 * @param  {number|array|...} args variable input arguments (max 3)
	 * @return {matrix}       
	 *
	 * @example
	 * ubique.matrix(0);
	 * // []
	 * ubique.matrix(2);
	 * // [[0, 0], [0, 0]]
	 * ubique.matrix([2,3]);
	 * // [[0, 0, 0], [0, 0, 0]]
	 * ubique.matrix(2,3);
	 * // [[0, 0, 0], [0, 0, 0]]
	 * ubique.matrix([2,3],5);
	 * // [[5, 5, 5], [5, 5, 5]]
	 * ubique.matrix(2,3);
	 * // [[0, 0, 0], [0, 0, 0]]
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
	 			return _matrix(_args[0],_args[0],0);
	 		} else 
	 		if ($u.isarray(_args[0])) {
	 			return _matrix(_args[0][0],_args[0][1],0);
	 		} else {
	 			throw new Error('unknwon input type');
	 		}
	 	} else
	 	if (nargs === 2) {
	 		if ($u.isnumber(_args[0]) && $u.isnumber(_args[1])) {
	 			return _matrix(_args[0],_args[1],0);
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
/* 95 */
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
	 * 
	 * 1 - Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
	 * 2 - Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.
	 * 
	 * Source: [Merge sort](http://en.wikipedia.org/wiki/Merge_sort)
	 * 
	 * @param  {array} x array of elements
	 * @param  {string} mode sorting direction, "ascend" (default) or "descend"
	 * @return {array}   
	 *
	 * @example
	 * var x = [3,1,-1,0,5];
	 * 
	 * ubique.mergesort([3,1,-1,5],"ascend");
	 * // [-1, 1, 3, 5]
	 * ubique.mergesort(x,"descend");
	 * // [5, 3, 1, 0, -1]
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
/* 96 */
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
	 * ubique.ncols([5,6,7]);
	 * // 1
	 * ubique.ncols([[3,2,7],[4,5,6]]);
	 * //  3
	 */
	 $u.ncols = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return $u.size(x)[1];
	}

	}

/***/ },
/* 97 */
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
	* ubique.ndims([3,5,6]);
	* // 2
	* ubique.ndims([[3,2,7],[4,5,6]]);
	* // 2
	*/
	$u.ndims = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return $u.length($u.size(x));
	}

	}

/***/ },
/* 98 */
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
	 * ubique.nrows([5,6,7]);
	 * // 3
	 * ubique.nrows([[3,2,7],[4,5,6]]);
	 * // 2
	 */
	 $u.nrows = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return $u.size(x)[0];
	}

	}

/***/ },
/* 99 */
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
	 * ubique.numel([3,5,6]);
	 * // 3
	 * ubique.numel([[3,2,7],[4,5,6]]);
	 * // 6
	 */
	 $u.numel = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  return $u.size(x)[0] * $u.size(x)[1];
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
	 * @method ones
	 * @summary Create array of all ones
	 * @description Create array of all ones
	 * 
	 * @param  {number|array|...} args variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.ones();
	 * // 1
	 * ubique.ones(0);
	 * // []
	 * ubique.ones(1);
	 * // [[1]]
	 * ubique.ones(2);
	 * // [[1, 1], [1, 1]]
	 * ubique.ones([2,1]);
	 * // [[1], [1]]
	 * ubique.ones(1,2);
	 * // [[1, 1]]
	 * ubique.ones(2,3);
	 * // [[1, 1, 1], [1, 1, 1]]
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
/* 101 */
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
	 * @param  {number|array|...} args variable input arguments (max 2)
	 * @return {number|matrix}    
	 *
	 * @example
	 * ubique.rand();
	 * // 0.1455961789470166
	 * ubique.rand(0);
	 * // []
	 * ubique.rand(1);
	 * // [[0.12391899712383747]]
	 * ubique.rand(2);
	 * // [[0.33334478829056025, 0.09839745867066085],[0.6006140187382698, 0.3131265211850405]]
	 * ubique.rand([2,1]);
	 * // [[0.40439655422233045], [0.7663801296148449]]
	 * ubique.rand(1,2);
	 * // [[0.16782891773618758, 0.5958379742223769]]
	 * ubique.rand(2,3);
	 * // [[0.890318026766181, 0.7398379456717521, 0.6165686929598451], [0.7234933257568628, 0.9895968120545149, 0.875643968814984]]
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
/* 102 */
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
	 * @param  {number|array|matrix|boolean} x value assigned to every elements of array or matrix
	 * @param  {number} m number of matrix rows
	 * @param  {number} n number of matrix columns
	 * @return {matrix}     
	 *
	 * @example
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 * 
	 * ubique.repmat(10,3);
	 * // [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
	 * ubique.repmat(0.5,3,2);
	 * // [[0.5, 0.5], [0.5, 0.5], [0.5, 0.5]]
	 * ubique.repmat(0.5,1,4);
	 * // [[ 0.5, 0.5, 0.5 ]]
	 * ubique.repmat(true,4,1); 
	 * // [[true], [true], [true], [true]]
	 * ubique.repmat([5,6,3],1,2);
	 * // [[5, 5], [6, 6], [3, 3]]
	 * ubique.repmat(l,2);
	 * // [[1, 1, -1, 1, 1, -1], [1, -2, 3, 1, -2, 3], [2, 3, 1, 2, 3, 1], [1, 1, -1, 1, 1, -1], [1, -2, 3, 1, -2, 3], [2, 3, 1, 2, 3, 1]]
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
/* 103 */
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
	 * @param  {array|matrix} x array or matrix of elements
	 * @param  {number} m number of rows for the new matrix
	 * @param  {number} n number of cols for the new matrix
	 * @return {matrix}     
	 *
	 * @example
	 * var b = [[-1,3,-1],[4,5,9]];
	 * 
	 * ubique.reshape([5,6,3],1,3);
	 * // [[5, 6, 3]]
	 * ubique.reshape(b,3,2);
	 * // [[-1, 5], [4, -1], [3, 9]]
	 * ubique.reshape(b,6,1);
	 * // [[-1], [4], [3], [5], [-1], [9]]
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
/* 104 */
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
	 * ubique.row([[5,6,5],[7,8,-1]],0);
	 * // [5, 6, 5]
	 * ubique.row([5,6,5]);
	 * // 5
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
/* 105 */
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
	 * @param  {string|number|array|matrix} x array of elements
	 * @return {array}  
	 *
	 * @example
	 * ubique.size([[[[5,6,5],[7,8,-1]]]]);
	 * // [ 1, 1, 2, 3 ]
	 * ubique.size([[3,2,7],[4,5,6]]);
	 * //  [ 2, 3 ]
	 * ubique.size([5,4,4]);
	 * // [ 3, 1 ]
	 * ubique.size(5);
	 * // [ 1, 1 ]
	 * ubique.size('ubique');
	 * // [ 1, 6 ]
	 * ubique.size([['first','second']]);
	 * // [ 1, 2 ]
	 */
	 $u.size = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if ($u.isnull(x) || $u.isundefined(x)) {
	 		throw new Error('unknown input type');
	 	}
	  if ($u.isstring(x)) {
	    return [1,x.length];
	  }
	 	if ($u.isnumber(x)) {
	 		return [1, 1];
	 	}
	 	if ($u.isarray(x)) {
	 		return [x.length,1];
	 	}
	 	var siz = x.length,
	 	_siz = [];
	 	while (!$u.isundefined(siz) && !$u.isstring(x)) {
	 		_siz.push(siz);
	 		x = x[0];
	 		siz = x.length;
	 	} 
	 	return _siz;
	 }

	}

/***/ },
/* 106 */
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
	 * ubique.sort([0,5,-1,3,-4,9,0],'ascend');
	 * // [-4, -1, 0, 0, 3, 5, 9]
	 * ubique.sort([0,5,-1,3,-4,9,0],'descend');
	 * // [9, 5, 3, 0, 0, -1, -4]
	 * ubique.sort([[-1,3,-1],[4,5,9]],'ascend');
	 * // [[-1, 3, -1], [4, 5, 9]]
	 * ubique.sort([[-1,3,-1],[4,5,9]],'descend');
	 * // [[4, 5, 9], [-1, 3, -1]]
	 * ubique.sort([[-1,3,-1],[4,5,9]],'descend',0);
	 * // [[3, -1, -1], [9, 5, 4]]
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
/* 107 */
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
	 * @param  {string|number|array|matrix} x elements of X
	 * @return {string|number|array|matrix}   
	 *
	 * @example
	 * ubique.squeeze([[[[[8]]]]]);
	 * // [[ 8 ]]
	 * ubique.squeeze([[[[3,4,5]]]]); 
	 * // [[3, 4, 5]]
	 * ubique.squeeze([[[[[['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']]]]]]);
	 * // [ [ '31-12-2014', '31-01-2015' ],
	*  // [ '15-02-2015', '01-03-2015' ] ]
	 */
	 $u.squeeze = function(x) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length >1) {
	 		throw new Error('too many input arguments');
	 	}
	 	if ($u.isnumber(x) || $u.isstring(x)) {
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Indexing
	 */
	 module.exports = function($u) {
	/**
	 * @method sub2ind
	 * @summary Subscripts to linear indices
	 * @description Subscripts to linear indices. Convert a 2D coordinates X,Y of a matrix into linear indices
	 * 
	 * @param  {array|matrix} size  size of array or matrix
	 * @param  {array|matrix} index X,Y coordinates for 2D matrices in the range [0...N-1]
	 * @return {number|array}       
	 *
	 * @example
	 * var a = [[5,6,5],[7,8,-1]];
	 * 
	 * ubique.sub2ind(ubique.size(a),[1, 2]);
	 * // 5
	 * ubique.sub2ind(ubique.size(a),[[0, 0], [1, 0], [0, 1]]);
	 * // [0, 1, 2]
	 * ubique.sub2ind(ubique.size([5,6,3]),[2, 0]);
	 * // 2
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	 /**
	  * @method subset
	  * @summary Subset of array or matrix based on X,Y coordinates
	  * @description Subset of array or matrix based on X,Y coordinates.
	  * Extract a single column or row with the symbols ':'
	  * 
	  * @param  {array|matrix} m array or matrix of elements
	  * @param  {number|array|string} r indexing for rows or ':' for all rows
	  * @param  {number|array|string} c indexing for columns or ':' for all columns
	  * @return {number|array|matrix}
	  *
	  * @example
	  * var a = [[5,6,5],[7,8,-1]];
	  * var c = [5,6,3];
	  *
	  * ubique.subset(c,1);
	  * // 6
	  * ubique.subset(c,[1,2]);
	  * // [ 6, 3 ]
	  * ubique.subset(c,ubique.end(c));
	  * // 3
	  * ubique.subset(a,0,1); 
	  * // [ [ 6 ] ]
	  * ubique.subset(a,[0,1],[1,2]); 
	  * // [ [ 6, 5 ], [ 8, -1 ] ]
	  * ubique.subset(a,0,':');
	  * [ [ 5, 6, 5 ] ]
	  * ubique.subset(a,':',0);
	  * [ [ 5 ], [ 7 ] ]
	  */
	  $u.subset = function(m,r,c) {
	    if (arguments.length === 0) {
	      throw new Error('not enough input arguments');
	    }
	    if (arguments.length > 3) {
	      throw new Error('too many input arguments');
	    }
	    if (arguments.length === 1) {
	      return m;
	    } 
	    if (arguments.length === 2) {
	      if ($u.isnumber(m)) {
	        return m;
	      }
	      if ($u.isarray(m)) {
	        if ($u.isnumber(r)) {
	          return m[r];
	        } else {
	          return r.map(function(val) {return m[val];});
	        }
	      }
	    }
	    if (arguments.length === 3) {
	      if ($u.ismatrix(m)) {
	        if (r === ':') {
	          r = $u.colon(0,$u.nrows(m) - 1);
	        }
	        if (c === ':') {
	          c = $u.colon(0,$u.ncols(m) - 1);
	        }
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
	    }
	  }
	}



/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array Creation and Concatenation
	 */
	 module.exports = function($u) {
	  /**
	   * @method  substelin
	   * @summary Subset of array or matrix based on linear indexing
	   * @description Subset of array or matrix based on linear indexing
	   *              
	   * @param  {array|matrix} m   array or matrix of elements 
	   * @param  {numer|array|matrix} idx linear indexing
	   * @return {numner|array|matrix}     
	   *
	   * @example
	   * var a = [[5,6,5],[7,8,-1]];
	   * var c = [5,6,3];
	   *
	   * ubique.subsetlin(a,1);
	   * // [ 7 ]
	   * ubique.subsetlin(a,[0,1,2,3]);
	   * // [ 5, 7, 6, 8 ]
	   * ubique.subsetlin(a,[[0,1,2],[2,3,4]]);
	   *  // [ [ 5, 7, 6 ], [ 6, 8, 5 ] ]
	   * ubique.subsetlin(c,[0,1]);
	   * // [ 5, 6 ]
	   * ubique.subsetlin(c,[[0,1],[1,2]]);
	   * // [ [ 5, 6 ], [ 6, 3 ] ]
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
	      return $u.squeeze($u.arrayfun(idx,function(val){return _m[val]}));
	    } else {
	      throw new Error('too many input arguments');
	    }
	  }

	}

/***/ },
/* 111 */
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
	 * ubique.tomat(5);
	 * // [[5]]
	 * ubique.tomat([5,6,3]);
	 * // [[5], [6], [3]]
	 * ubique.tomat(true);
	 * // [[true]]
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
/* 112 */
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
	 * ubique.transpose(a);
	 * // [ [ 5, 7 ], [ 6, 8 ], [ 5, -1 ] ]
	 * ubique.transpose(c);
	 * // [ [ 5 ], [ 6 ], [ 3 ] ]
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
/* 113 */
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
	 * @param  {number|array|...} args variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.trues();
	 * // true
	 * ubique.trues(0);
	 * // []
	 * ubique.trues(1);
	 * // [[true]]
	 * ubique.trues(2);
	 * // [[true, true], [true, true]]
	 * ubique.trues([2,1]);
	 * // [[true], [true]]
	 * ubique.trues(1,2);
	 * // [[true, true]]
	 * ubique.trues(2,3);
	 * // [[true, true, true], [true, true, true]]
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
/* 114 */
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
	 * ubique.vertcat(a,b);
	 * // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9]]
	 * ubique.vertcat(a,b,b);
	 * // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9], [-1, 3, -1], [4, 5, 9]]
	 * ubique.vertcat(c,d);
	 * // [5, 6, 3, 0.5, -3, 2.3]
	 * ubique.vertcat([1],[2]);
	 * // [1, 2]
	 * ubique.vertcat(5,7,9,8);
	 * // [5,7,9,8]
	 * ubique.vertcat(5,7,c);
	 * // [5, 7, 5, 6, 3]
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
/* 115 */
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
	 * @param  {number|array|...} args variable input arguments (max 2)
	 * @return {number|matrix}     
	 *
	 * @example
	 * ubique.zeros();
	 * // 0
	 * ubique.zeros(0);
	 * // []
	 * ubique.zeros(1);
	 * // [[0]]
	 * ubique.zeros(2);
	 * // [[0, 0], [0, 0]]
	 * ubique.zeros([2,1]);
	 * // [[0], [0]]
	 * ubique.zeros(1,2);
	 * // [[0, 0]]
	 * ubique.zeros(2,3);
	 * // [[0, 0, 0], [0, 0, 0]]
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
/* 116 */
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
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * 
	 * ubique.jbtest(x);
	 * // 0.6360604293924916
	 */
	 $u.jbtest = function(x) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var n = x.length,
	  s = $u.skewness(x),
	  xk = $u.xkurtosis(x);
	  return (n/6) * (Math.pow(s,2) + Math.pow(xk,2)/4);
	}

	}

/***/ },
/* 117 */
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
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * 
	 * ubique.normcdf(2);
	 * // 0.97725
	 * ubique.normcdf(0,ubique.mean(x),ubique.std(x));
	 * // 0.22049
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
/* 118 */
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
	 * @param  {number} p probability value in range [0,1]
	 * @param  {number} mu mean value
	 * @param  {number} sigma standard deviation 
	 * @return {number}       
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 *
	 * ubique.norminv(0.05);
	 * // -1.64485
	 * ubique.norminv(0.01,ubique.mean(x),ubique.std(x));
	 * // -0.0361422
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
/* 119 */
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
	 * @param  {number} x real value
	 * @param  {number} mu mean value (def: 0)
	 * @param  {number} sigma standard deviation (def: 1)
	 * @return {number}       
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * 
	 * ubique.normpdf(1);
	 * // 0.241971
	 * ubique.normpdf(0,ubique.mean(x),ubique.std(x));
	 * // 12.7622
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method adjsharpe
	 * @summary Adjusted Sharpe Ratio
	 * @description Sharpe Ratio adjusts for skewness and kurtosis with a penalty factor for negative skewness and excess kurtosis
	 * 
	 * @param  {array|matrix} x array of value
	 * @param  {number} frisk annual free-risk rate (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.adjsharpe(x,0.02/12);
	 * // 0.748134
	 * ubique.adjsharpe(ubique.cat(1,x,y));
	 * // [[0.830583, 0.245232]]
	 */
	 $u.adjsharpe = function(x,frisk,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		frisk = 0;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _asharpe = function(a,frisk) {
	 		var sr = $u.sharpe(a,frisk),
	 		sk = $u.skewness(a),
	 		ku = $u.kurtosis(a);
	 		return sr * (1 + (sk/6) * sr - ((ku - 3)/24) * Math.sqrt(sr));
	 	}
	 	if ($u.isnumber(x)) {
	 		throw new Error('input must be an array or matrix');
	 	}
	 	if ($u.isarray(x)) {
	 		return  _asharpe(x,frisk);
	 	}
	 	return $u.vectorfun(x,function(val){return _asharpe(val,frisk);},dim);
	 }
	}


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method annavgrisk
	 * @summary Annualized Average Risk
	 * @description Annualized standard deviation of asset/portfolio values
	 * 
	 * @param  {number|array|matrix} x rate or return 
	 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.annavgrisk(ubique.cat(1,x,y),12);
	 * // 0.0804728
	 * ubique.annavgrisk(ubique.cat(1,x,y),12);
	 * // [[0.0804728, 0.182948]]
	 */
	 $u.annavgrisk = function(x,t,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		t = 252;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _aavgrisk = function(a,t) {
	 		return Math.sqrt(t) * $u.std(a);
	 	}
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return  _aavgrisk(x,t);
	 	}
	 	return $u.vectorfun(x,function(val){return _aavgrisk(val,t);},dim);
	 }
	}


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performance metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method annreturn
	 * @summary Annualized Return
	 * @description Average annualized returns over a period, convenient when comparing returns.
	 * It can be an Arithmetic or Geometric (default) average return: if compounded with itself the
	 * geometric average will be equal to the cumulative return
	 * 
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} scale frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
	 * @param  {string} type 'geometric' or 'simple' (def: 'geometric')
	 * @return {number|array|matrix}   
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var cat = ubique.cat;
	 * 
	 * ubique.annreturn(x,12);
	 * // 0.233815
	 *
	 * ubique.annreturn(cat(1,x,y),12);
	 * // [ [ 0.233815, 0.14509 ] ]
	 */
	 $u.annreturn = function(x,scale,type,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	var scale = scale || 252,
	  type = type || 'geometric',
	  dim = dim || 1;

	  var _annreturn = function(arr,scale,type) {
	    var n = arr.length;
	    if (type === 'geometric') {
	      return $u.power($u.prod($u.plus(1,arr)),(scale/n)) - 1;
	    } else
	    if (type === 'simple') {
	      return $u.mean(arr) * scale;
	    } else {
	      throw new Error('unknown type');
	    }
	  }
	 	 if ($u.isnumber(x)) {
	    return NaN;
	  }
	  if ($u.isarray(x)) {
	    return  _annreturn(x,scale,type);
	  }
	  return $u.vectorfun(x,function(val){return _annreturn(val,scale,type);},dim);
	 }

	}


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method avgdrawdown
	 * @summary Average drawdown
	 * @description Average drawdown or average K-largest drawdown
	 * 
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} k largest drawdown. k = 0 for all continuous drawdown (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {object}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * // average drawdown
	 * ubique.avgdrawdown(x);
	 * // 0.0115
	 *
	 * // 1-largest drawdown
	 * ubique.avgdrawdown(x,1);
	 * // 0.014
	 * 
	 * ubique.avgdrawdown(ubique.cat(1,x,y));
	 * // [ [ 0.0115, 0.0566 ] ]
	 */
	 $u.avgdrawdown = function(x,k,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    k = 0;
	    dim = 1;
	  }
	  if (arguments.length === 2) {
	    dim = 1;
	  }
	  var avgdd = function(a,k) {
	    var cdd =  $u.cdrawdown(a);
	    if (k === 0) {
	      return $u.mean(cdd);
	    } else
	    if (k > 0 && k <= cdd.length) {
	      var cdds = $u.sort(cdd,'descend');
	      return $u.mean($u.subsetlin(cdds,$u.colon(0,k - 1)));
	    } else {
	      return NaN;
	    }
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return avgdd(x,k);
	  }
	  return $u.vectorfun(x,function(val){return avgdd(val,k);},dim);
	}

	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method burkeratio
	 * @summary Burke Ratio
	 * @description A risk-adjusted measure with free risk and drawdowns.
	 * For the 'simple' mode the excess return over free risk is divided by the square root of 
	 * the sum of the square of the drawdowns. For the 'modified' mode the Burke Ratio is multiplied
	 * by the square root of the number of datas.
	 *  
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} frisk annual free-risk rate (def: 0)
	 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
	 * @param  {string} mode 'simple' or 'modified' (def: 'simple')
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|arrray}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var cat = ubique.cat;
	 *
	 * ubique.burkeratio(x,0,12);
	 * // 14.048563
	 *
	 * ubique.burkeratio(x,0,12,'modified');
	 * // 44.425456
	 *
	 * ubique.burkeratio(cat(1,x,y),0,12);
	 * // [ [ 14.048563, 1.228487 ] ]
	 */
	 $u.burkeratio = function(x,frisk,t,mode,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var frisk = frisk || 0,
	  t = t || 252,
	  mode = mode || 'simple',
	  dim = dim || 1;

	  var _burkeratio = function(a,frisk,t,mode) {
	    var annret = $u.annreturn(a,t),
	    dd = $u.sqrt($u.sum($u.power($u.cdrawdown(a),2)));
	    if (mode === 'simple') {
	      return (annret - frisk) / dd;
	    } else
	    if (mode === 'modified') {
	      return (annret - frisk) / dd * $u.sqrt(a.length);
	    } else {
	      throw new Error('unknown mode');
	    }
	  }
	  if ($u.isnumber(x)) {
	    throw new Error('input arguments must be an array or matrix');
	  }
	  if ($u.isarray(x)) {
	    return  _burkeratio(x,frisk,t,mode);
	  }
	  return $u.vectorfun(x,function(val){return _burkeratio(val,frisk,t,mode);},dim);
	}

	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performance metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method cagr
	 * @summary Compound annual growth rate
	 * @description Compound annual growth rate
	 * 
	 * @param  {number|array|matrix} x rate or return 
	 * @param  {number} p period (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var x = [100,98,101.5,103];
	 * var y = [99.8,96.5,101.1,95.8];
	 *
	 * ubique.cagr(x,4);
	 * // 0.00741707
	 * ubique.cagr(ubique.cat(1,x,y),4);
	 * // [[0.00741707, -0.0101743]]
	 * ubique.cagr(ubique.cat(1,x,y),2,0);
	 * // [-5.00375e-4, -0.00384869, -9.86681e-4, -0.0179535]
	 */
	 $u.cagr = function(x,p,dim) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    dim = 1;
	  }
	  var _cagr = function(a,p) {
	    return $u.power(1 + $u.ror(a),(1 / p)) - 1;
	  }
	  if ($u.isnumber(x)) {
	   return 0;
	  }
	  if ($u.isarray(x)) {
	   return  _cagr(x,p);
	  }
	  return $u.vectorfun(x,function(val){return _cagr(val,p);},dim);
	 }
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method calmarratio
	 * @summary Calmar Ratio
	 * @description A risk-adjusted measure like Sharpe ratio that uses maximum drawdown instead of
	 * standard deviation for risk.
	 *  
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} frisk annual free-risk rate (def: 0)
	 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|arrray}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var cat = ubique.cat;
	 * 
	 * ubique.calmarratio(x,0,12);
	 * // 16.701049
	 *
	 * ubique.calmarratio(cat(1,x,y),0,12);
	 * // [ [ 16.701049, 1.32768 ] ]
	 */
	 $u.calmarratio = function(x,frisk,t,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var frisk = frisk || 0,
	  t = t || 252,
	  dim = dim || 1;

	  var _calmarratio = function(a,frisk,t) {
	    var annret = $u.annreturn(a,t),
	    maxdd = $u.drawdown(a).maxdd;
	    return (annret - frisk) / maxdd;
	  }
	  if ($u.isnumber(x)) {
	    throw new Error('input arguments must be an array or matrix');
	  }
	  if ($u.isarray(x)) {
	    return  _calmarratio(x,frisk,t);
	  }
	  return $u.vectorfun(x,function(val){return _calmarratio(val,frisk,t);},dim);
	}

	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method cdrawdown
	 * @summary Continuous Drawdown
	 * @description Continuous Drawdown
	 *  
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {array|matrix}
	 * 
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.cdrawdown(x);
	 * // [ 0.009, 0.014 ]
	 * ubique.cdrawdown(ubique.cat(1,x,y));
	 * // [ [ 0.009, 0.005 ], [ 0.014, 0.095743 ] ]
	 */
	 $u.cdrawdown = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var cdown = function(a) {
	    var cdd = [], tmp = 0, t = 0;
	    for (var i = 0; i < a.length; i++) {
	      if (i === 0 && a[i] < 0) {
	        tmp = 1 + a[i];
	      }
	      if (i > 0) {
	        if (a[i] < 0) {
	          if (tmp === 0) {
	            tmp = 1 + a[i];
	          } else {
	            tmp = tmp * (1 + a[i]);
	          }
	        }
	        if (a[i] >=0) {
	          if (tmp !== 0) {
	            cdd[t] = 1 - tmp;
	            t++;
	            tmp = 0;
	          }
	        }
	      }
	    }
	    if (tmp !== 0) {
	      cdd.push(1 - tmp);
	      tmp = 0;
	    }
	    return cdd;
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return cdown(x);
	  }
	  return $u.vectorfun(x,function(val){return cdown(val);},dim);
	}

	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method downsidepot
	 * @summary Downside potential
	 * @description Downside potential
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} mar minimum acceptable return (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.downsidepot(x,0.1/100);
	 * // 0.0025
	 * ubique.downsidepot(ubique.cat(1,x,y));
	 * // [[0.0023, 0.0173]]
	 */
	 $u.downsidepot = function(x,mar,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		mar = 0;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _ddp = function(a,mar) {
	    var z = 0;
	    for (var i = 0;i < a.length;i++) {
	      z += Math.max(mar - a[i],0) / a.length;
	    }
	    return z;
	  }
	  if ($u.isnumber(x)) {
	   return x;
	 }
	 if ($u.isarray(x)) {
	   return _ddp(x,mar);
	 } 
	 return $u.vectorfun(x,function(val){return _ddp(val,mar);},dim);
	}
	}


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method downsiderisk
	 * @summary Downside Risk
	 * @description Downside Risk or Semi-Standard Deviation. 
	 * Measures  the  variability  of  underperformance  below  a  minimum  target   rate 
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} mar minimum acceptable return (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.downsiderisk(x,0.1/100);
	 * // 0.00570088
	 * ubique.downsiderisk(ubique.cat(1,x,y));
	 * // [[0.00526308, 0.0282082]]
	 */
	 $u.downsiderisk = function(x,mar,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		mar = 0;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _dsrisk = function(a,mar) {
	 		var z = 0;
	 		for (var i = 0; i < a.length; i++) {
	 			z += Math.pow(Math.min(a[i] - mar,0),2) / a.length;
	 		}
	 		return Math.sqrt(z);
	 	}
	 	if ($u.isnumber(x)) {
	 		return x;
	 	}
	 	if ($u.isarray(x)) {
	 		return _dsrisk(x,mar);
	 	} 
	 	return $u.vectorfun(x,function(val){return _dsrisk(val,mar);},dim);
	 }
	}


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method drawdown
	 * @summary Drawdown
	 * @description Drawdowon from Peak.Any continuous losing return period.
	 * Return drawdown from peak and time to recovery array.
	 *
	 * Returns an object with:
	 *
	 * dd (drawdown array)
	 * ddrecov (drawdown recovery index)
	 * maxdd (max drawdown)
	 * maxddrecov (max drawdown recovery period): [start period, end period]
	 * 
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {object}  
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 *
	 * ubique.drawdown(x);
	 * // { dd: [ 0, 0, 0, 0.00900000000000004, 0, 0, 0, 0, 0.013999999999999995, 0 ],
	 * //   ddrecov: [ 0, 0, 0, 4, 0, 0, 0, 0, 9, 0 ],
	 * //   maxdd: 0.013999999999999995,
	 * //   maxddrecov: [ 8, 9 ] }
	 */
	 $u.drawdown = function(x,mode,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    mode = 'return';
	    dim = 1;
	  }
	  if (arguments.length === 2) {
	    dim = 1;
	  }
	  var ddown = function(a,mode) {
	    if (mode === 'return') {
	      _a = $u.cumprod($u.plus(a,1));
	    } else
	    if (mode === 'geometric') {
	      _a = $u.log($u.cumprod($u.plus(a,1)));
	    } else {
	      throw new Error('unknown drawdown mode');
	    }
	    var highest = _a[0],
	    highestidx = 1,
	    _dd = $u.array(_a.length,0),
	    _recov = $u.array(_a.length,0),
	    _maxdd = 0,
	    _maxddidx = [1,_a.length],
	    _cdd = [],
	    t = 0;
	    _cdd[t] = 0;
	    for (var i = 0; i < _a.length; i++) {
	      if (highest <= _a[i]) {
	        highest = _a[i];
	        highestidx = i + 1;
	      }
	      if (mode === 'return') {
	        _dd[i] = (highest - _a[i]) / highest;
	      } else 
	      if (mode === 'geometric') {
	        _dd[i] = (highest - _a[i]);
	      }
	      if (_dd[i] !== 0) {
	        _recov[i] = i + 1;
	      }
	      if (_dd[i] > _maxdd) {
	        _maxdd = _dd[i];
	        _maxddidx[0] = highestidx;
	        _maxddidx[1] = i + 1;
	      }
	    }
	    return {dd: _dd, ddrecov: _recov, maxdd: _maxdd, maxddrecov: _maxddidx};
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return ddown(x,mode);
	  }
	  return $u.vectorfun(x,function(val){return ddown(val,mode);},dim);
	}

	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method histcondvar
	 * @summary Historical Conditional Value-At-Risk
	 * @description Historical Conditional Value-At-Risk. Univariate historical simulation.Single asset
	 * 
	 * @param  {array|matrix} x array or matrix of values    
	 * @param  {number} p confidence level in the range [0,1] (def: 0.95)
	 * @param  {number} amount amount (def: 1)
	 * @param  {period} period time horizon (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)    
	 * @return {number|array}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * // historical daily conditional VaR at 5% conf level
	 * ubique.histcondvar(ubique.cat(1,x,y),0.95);
	 * // [[0.014, 0.061]]
	 *
	 * // historical daily conditional VaR at 1% for 100k GBP asset over 10 days 
	 * ubique.histcondvar(ubique.cat(1,x,y),0.99,100000,10);
	 * // [[4427.19, 19289.9]]
	 */
	 $u.histcondvar = function(x,p,amount,period,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    p = 0.95;
	    amount = 1;
	    period = 1;
	    dim = 1;
	  }
	  if (arguments.length === 2) {
	    amount = 1;
	    period = 1;
	    dim = 1;
	  }
	  if (arguments.length === 3) {
	    period = 1;
	    dim = 1;
	  }
	  if (arguments.length === 4) {
	    dim = 1;
	  }
	  var _hcvar = function(a,p,amount,period) {
	    var _VaR = -$u.histvar(a,p),
	    z = [],
	    t = 0;
	    for (var i = 0; i < a.length; i++) {
	      if (a[i] <= _VaR) {
	        z[t] = a[i];
	        t++;
	      }
	    }
	    return -$u.mean(z) * Math.sqrt(period) * amount;
	  }
	  if ($u.isnumber(x)) {
	   return x;
	 }
	 if ($u.isarray(x)) {
	   return _hcvar(x,p,amount,period);
	 } 
	 return $u.vectorfun(x,function(val){return _hcvar(val,p,amount,period);},dim);
	}
	}


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method histvar
	 * @summary Historical Value-At-Risk
	 * @description Univariate historical simulation. Single asset
	 * 
	 * @param  {array|matrix} x array or matrix of values    
	 * @param  {number} p confidence level in the range [0,1] (def: 0.95)
	 * @param  {number} amount amount (def: 1)
	 * @param  {period} period time horizon (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)    
	 * @return {number|array}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * // historical daily VaR at 5% conf level
	 * ubique.histvar(ubique.cat(1,x,y),0.95);
	 * // [[0.014, 0.061]]
	 *
	 * // historical daily VaR at 1% for 100k GBP asset over 10 days 
	 * ubique.histvar(ubique.cat(1,x,y),0.99,100000,10);
	 * // [[4427.19, 19289.9]]
	 */
	 $u.histvar = function(x,p,amount,period,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    p = 0.95;
	    amount = 1;
	    period = 1;
	    dim = 1;
	  }
	  if (arguments.length === 2) {
	    amount = 1;
	    period = 1;
	    dim = 1;
	  }
	  if (arguments.length === 3) {
	    period = 1;
	    dim = 1;
	  }
	  if (arguments.length === 4) {
	    dim = 1;
	  }
	  var _histvar = function(a,p,amount,period) {
	    return -$u.quantile(a,1 - p) * Math.sqrt(period) * amount;
	  }
	  if ($u.isnumber(x)) {
	   return x;
	 }
	 if ($u.isarray(x)) {
	   return _histvar(x,p,amount,period);
	 } 
	 return $u.vectorfun(x,function(val){return _histvar(val,p,amount,period);},dim);
	}
	}

/***/ },
/* 133 */
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
	 * 
	 * ubique.hurst(x);
	 * // 0.344059
	 * ubique.hurst(x,1);
	 * // 0.3669383
	 * ubique.hurst(ubique.cat(1,x,y));
	 * // [[0.344059, 0.51531]]
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method inforatio
	 * @summary Information Ratio
	 * @description Information Ratio
	 * 
	 * @param  {array|matrix} x asset/portfolio values
	 * @param  {array} y benchmark values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|matrix}      
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
	 *
	 * ubique.inforatio(x,y);
	 * // 0.0936915
	 * ubique.inforatio(ubique.cat(1,x,y),z);
	 * // [[0.0263019, -0.0597049]]
	 */
	 $u.inforatio = function(x,y,dim) {
	   if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    dim = 1;
	  }
	  var _ir = function(a,b) {
	    return $u.xreturn(a,b) / $u.std($u.minus(a,b));
	  }
	  if ($u.isarray(x) && $u.isarray(y)) {
	    return  _ir(x,y);
	  } else
	  if ($u.ismatrix(x) && $u.isarray(y)) {
	    return $u.vectorfun(x,function(val){return _ir(val,y);},dim);
	  } else {
	   throw new Error('first input must be an array/matrix, the second one an array');
	 }
	}
	}


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performance metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method irr
	 * @summary Internal rate of return on an investment based on a series of periodic cash flows
	 * @description Calculates the internal rate of return on an investment
	 * based on a series of regularly/irregurarly periodic cash flows.
	 * 
	 * @param  {array} cf income or payments associated with the investment. Must contain at least one negative and one positive cash flow to calculate rate of return, and the first amount must be negative
	 * @param  {array} cfd number of calendar days from the beginning of the period that cash flow occurs
	 * @param  {number} cd total number of calendar days in the measurement period
	 * @param  {number} guess estimate for what the internal rate of return will be (def: 0.1)
	 * @return {number}       
	 *
	 * @example
	 * //Simple IRR
	 * ubique.irr([250000,25000,-10000,-285000]);
	 * // 0.024712563094781776
	 * ubique.irr([74.2,37.1,-104.4],[0,1,2],2);
	 * // -0.07410820570460687
	 *
	 * //Modified IRR
	 * ubique.irr([250000,25000,-10000,-285000],[0,45,69,90],90);
	 * // 0.07692283872311274
	 * ubique.irr([74.2,37.1,-104.4],[0,14,31],31);
	 * // -0.07271456460699813
	 */
	 $u.irr = function(cf,cfd,cd,guess) {
	   if (arguments.length < 1) {
	    throw new Error('not enough input arguments');
	  }
	  var _npv = function(cf,cfd,cd,guess) {
	    var npv = 0;
	    for (var i = 0;i < cf.length;i++) {
	      npv += cf[i] / Math.pow((1 + guess),cfd[i]/cd);
	    }
	    return npv;
	  }
	  var _npvd = function(cf,cfd,cd,guess) {
	    var npv = 0;
	    for (var i = 0;i < cf.length;i++) {
	      npv -= cfd[i]/cd * cf[i] / Math.pow((1 + guess),cfd[i]/cd)
	    }
	    return npv;
	  }
	  if (arguments.length === 1) {
	    cfd = $u.colon(0,cf.length-1,1);
	    cd = 1;
	    guess = 0.1;
	  }
	  if (arguments.length === 2) {
	    cd = 1;
	    guess = 0.1;
	  }
	  if (arguments.length === 3) {
	    guess = 0.1;
	  }
	  var rate = guess,
	  maxeps = 1e-6,
	  maxiter = 50,
	  newrate = 0,
	  epsrate = 0,
	  npv = 0,
	  cnt = 0,
	  cntv = true;
	  do {
	    npv = _npv(cf,cfd,cd,rate);
	    newrate = rate - npv / _npvd(cf,cfd,cd,rate);
	    epsrate = Math.abs(newrate - rate);
	    rate = newrate;
	    cntv = (epsrate > maxeps) && (Math.abs(npv) > maxeps);
	  } while (cntv && (cnt++ < maxiter));
	  if (cntv) {
	    throw new Error('number error');
	  }
	  return rate;
	}

	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method jensenalpha
	 * @summary Jensen alpha
	 * @description  Ex-post alpha calculated with regression line. Free-risk is the avereage free-risk for the timeframe selected.
	 *
	 * @param  {array|matrix} x asset/portfolio values
	 * @param  {array} y benchmark values
	 * @param  {number} frisk  free-risk (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|matrix}      
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
	 *
	 * ubique.jensenalpha(x,y);
	 * // 0.0176091
	 * ubique.jensenalpha(ubique.cat(1,x,y),z);
	 * // [[0.0263019, -0.0597049]]
	 */
	 $u.jensenalpha = function(x,y,frisk,dim) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    frisk = 0;
	    dim = 1;
	  }
	  if (arguments.length === 3) {
	    dim = 1;
	  }
	  var _ja = function(a,b,frisk) {
	    var beta = $u.linearreg(a,b).beta;
	    return $u.mean(a) - frisk - beta * ($u.mean(b) - frisk);
	  }
	  if ($u.isarray(x) && $u.isarray(y)) {
	    return  _ja(x,y,frisk);
	  } else
	  if ($u.ismatrix(x) && $u.isarray(y)) {
	    return $u.vectorfun(x,function(val){return _ja(val,y,frisk);},dim);
	  } else {
	   throw new Error('first input must be an array/matrix, the second one an array');
	 }
	}
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method m2sortino
	 * @summary M-squared for Sortino
	 * @description M2 calculated for Downside risk instead of Total Risk
	 *  
	 * @param  {array|matrix} x asset/portfolio values
	 * @param  {array} y benchmark values
	 * @param  {number} frisk free-risk rate (def: 0)
	 * @param  {number} mar minimum acceptable return (def: 0)
	 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|matrix}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
	 * var cat = ubique.cat;
	 * 
	 * ubique.m2sortino(x,y,0,0,12);
	 * // 0.103486
	 * ubique.m2sortino(cat(1,x,y),z,0,0,12);
	 * // [ [ 0.527018, 0.148094 ] ]
	 */
	 $u.m2sortino = function(x,y,frisk,mar,t,dim) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  frisk = frisk || 0;
	  mar = mar || 0;
	  t = t || 252;
	  dim = dim || 1;

	  var _m2sortino = function(a,b,frisk,mar,t) {
	    return $u.annreturn(a,t) + $u.sortino(a,frisk,mar) * ($u.downsiderisk(b,mar) * $u.sqrt(t) - $u.downsiderisk(a,mar) * $u.sqrt(t));
	  }
	  if ($u.isarray(x) && $u.isarray(y)) {
	    return  _m2sortino(x,y,frisk,mar,t);
	  } else
	  if ($u.ismatrix(x) && $u.isarray(y)) {
	   return $u.vectorfun(x,function(val){return _m2sortino(val,y,frisk,mar,t);},dim);
	  } else {
	   throw new Error('first input must be an array/matrix, the second one an array');
	  }
	 }
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method martinratio
	 * @summary Martin Ratio
	 * @description A risk-adjusted measure with free risk and Ulcer index.
	 * 
	 * Martin Ratio = (Portfolio Return - RiskFree) / Ulcer Index
	 *  
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} frisk annual free-risk rate (def: 0)
	 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
	 * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|arrray}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var cat = ubique.cat;
	 *
	 * ubique.martinratio(x,0,12);
	 * // 44.425456
	 *
	 * ubique.martinratio(cat(1,x,y),0,12,'return',1);
	 * // [ [ 44.425456, 2.438364 ] ]
	 */
	 $u.martinratio = function(x,frisk,t,mode,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var frisk = frisk || 0,
	  t = t || 252,
	  mode = mode || 'return',
	  dim = dim || 1;

	  var _martinratio = function(a,frisk,t,mode) {
	    var annret = $u.annreturn(a,t),
	    dd = $u.sqrt($u.sum($u.power($u.cdrawdown(a),2)));
	    return (annret - frisk) /$u.ulcerindex(a,mode);
	  }
	  if ($u.isnumber(x)) {
	    throw new Error('input arguments must be an array or matrix');
	  }
	  if ($u.isarray(x)) {
	    return _martinratio(x,frisk,t,mode);
	  }
	  return $u.vectorfun(x,function(val){return _martinratio(val,frisk,t,mode);},dim);
	}

	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performance metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method mdietz
	 * @summary Historical performance of an investment portfolio with external cash flows
	 * @description Historical performance of an investment portfolio with external cash flows
	 * 
	 * @param  {number} ev ending value
	 * @param  {number} bv beginning market value
	 * @param  {number|array} cf external cashflows (inflows/outflows)
	 * @param  {number|array} cfd number of calendar days from the beginning of the period that cash flow occurs
	 * @param  {number} cd total number of calendar days in the measurement period
	 * @return {number}
	 *
	 * @example
	 * var ev = 104.4,bv = 74.2,cf = 37.1,cfd = 14, cd = 31;
	 * ubique.mdietz(ev,bv,cf,cfd,cd);
	 * // -0.07298099559862156
	 *
	 * var ev = 1200,bv = 1000,cf = [10,50,35,20],cfd = [15,38,46,79],cd = 90;
	 * ubique.mdietz(ev,bv,cf,cfd,cd);
	 * // 0.0804
	 */
	 $u.mdietz = function(ev,bv,cf,cfd,cd) {
	  if (arguments.length < 5) {
	    throw new Error('not enough input arguments');
	  }
	  var md = -99999,
	  w = [];
	  if ($u.isnumber(cf)) {
	    md = (ev - bv - cf) / (bv + (cf * (1 - cfd / cd)));
	  } else {
	    if (cd <= 0) {
	      throw new Error('actual number of days in the period negative or zero');
	    }
	    for (var i = 0;i < cf.length;i++) {
	      if (cfd[i] < 0) {
	        throw new Error('number of days negative or zero');
	      }
	      w[i] = (1 - cfd[i] / cd);
	    }
	      var ttwcf = 0; //total weighted cash flows
	      for (var i = 0;i < cf.length;i++) {
	        ttwcf += w[i] * cf[i];
	      }
	      var tncf = 0; //total net cash flows
	      for (var i = 0;i < cf.length;i++) {
	        tncf += cf[i];
	      }
	      md = (ev - bv - tncf) / (bv + ttwcf);
	    }
	    return md;
	  }
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method modigliani
	 * @summary Modigliani index for risk-adjusted return
	 * @description Modigliani index for risk-adjusted return
	 *  
	 * @param  {array|matrix} x asset/portfolio values
	 * @param  {array} y benchmark values
	 * @param  {number} frisk free-risk rate (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|matrix}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
	 *
	 * ubique.modigliani(x,y);
	 * // 0.0406941
	 * ubique.modigliani(ubique.cat(1,x,y),z);
	 * // [[0.0425846, 0.0131853]]
	 */
	 $u.modigliani = function(x,y,frisk,dim) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    frisk = 0;
	    dim = 1;
	  }
	  if (arguments.length === 3) {
	    dim = 1;
	  }
	  var _m2 = function(a,b,frisk) {
	    return $u.mean(a) + $u.sharpe(a,frisk) * ($u.std(b) - $u.std(a));
	  }
	  if ($u.isarray(x) && $u.isarray(y)) {
	    return  _m2(x,y,frisk);
	  } else
	  if ($u.ismatrix(x) && $u.isarray(y)) {
	   return $u.vectorfun(x,function(val){return _m2(val,y,frisk);},dim);
	  } else {
	   throw new Error('first input must be an array/matrix, the second one an array');
	  }
	 }
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method  montecarlovar
	 * @summary Montecarlo Value-at-Risk
	 * @description Montecarlo VaR for single asset. Based on geometric Brownian motion.
	 *
	 * @param  {number|array} x array of returns or standard deviation of returns
	 * @param  {number} p confidence level in the range [0,1] (def: 0.95)
	 * @param  {number} t holding period (def: 1)
	 * @param  {number} fr free-risk rate (def: 0)
	 * @param  {number} v asset/portfolio start value (def: 1)
	 * @param  {number} iter number of iterations
	 * @return {number}  
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 *
	 * // ex-ante simulated VaR at 95% confidence for t = 1, free risk zero, start capital one
	 * ubique.montecarlovar(x,0.95,1,0,1,10000);
	 * // 0.0771
	 * 
	 * // historical simulated daily VaR at 1% for 100k GBP asset over 10 days 
	 * ubique.montecarlovar(ubique.std(x),0.99,10,0,100000);
	 * // 23201.0819
	 */
	 $u.montecarlovar = function(x) {
	  if (arguments.length === 0) {
	    return [];
	  }
	  if ($u.isnumber(x)) {
	    s = $u.clone(x);
	  } else 
	  if ($u.isarray(x)) {
	    s = $u.std(x);
	  } else {
	    throw new Error('first argument must be a number or array');
	  }
	  var defargs = {1: 0.95, 2: 1, 3: 0, 4: 1, 5: 10000};
	  for (var j = 1; j < arguments.length; j++) {
	    defargs[j] = arguments[j];
	  }
	  var p = defargs[1],
	  t = defargs[2],
	  fr = defargs[3],
	  v = defargs[4],
	  iter = defargs[5];

	  var mcvar = [];
	  for (var i = 0;i < iter;i++) {
	    mcvar[i] = Math.exp((fr - 0.5 * Math.pow(s,2)) + s * $u.norminv(Math.random(),0,1)) - 1;
	  }
	  return - Math.pow(t,0.5) * $u.prctile(mcvar, 1 - p) * v;
	}

	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method omegaratio
	 * @summary Omega ratio
	 * @description Omega ratio
	 * 
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} mar minimum acceptable return (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.omegaratio(x);
	 * // 8.7826
	 * ubique.omegaratio(ubique.cat(1,x,y));
	 * // [ [ 8.7826, 1.7283 ] ]
	 */
	 $u.omegaratio = function(x,mar,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    mar = 0;
	    dim = 1;
	  }
	  if (arguments.length === 2) {
	    dim = 1;
	  }
	  var or = function(a,mar) {
	    return $u.upsidepot(a,mar) / $u.downsidepot(a,mar);
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return or(x,mar);
	  } 
	  return $u.vectorfun(x,function(val){return or(val,mar);},dim);
	}
	}


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method painindex
	 * @summary Pain Index
	 * @description Mean value of the drawdowns, similar to Ulcer Index.
	 *  
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array} 
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var cat = ubique.cat;
	 * 
	 * ubique.painindex(x);
	 * // 0.0023
	 * 
	 * ubique.painindex(cat(1,x,y));
	 * // [ [ 0.0023, 0.042955 ] ]
	 */
	 $u.painindex = function(x,mode,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  mode = mode || 'return';
	  dim = dim || 1;

	  var _painindex = function(a,mode) {
	    dd = $u.drawdown(a,mode).dd,
	    n = a.length;
	    return $u.sum(dd) / n;
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return _painindex(x,mode);
	  }
	  return $u.vectorfun(x,function(val){return _painindex(val,mode);},dim);
	}

	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method painratio
	 * @summary Pain Ratio
	 * @description A risk-adjusted measure with free risk and Pain index.
	 * 
	 * Pain Ratio = (Portfolio Return - RiskFree) / Pain Index
	 *  
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} frisk annual free-risk rate (def: 0)
	 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
	 * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|arrray}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var cat = ubique.cat;
	 *
	 * ubique.painratio(x,0,12);
	 * // 101.658557
	 *
	 * ubique.painratio(cat(1,x,y),0,12,'return',1);
	 * // [ [ 101.658557, 3.377716 ] ]
	 */
	 $u.painratio = function(x,frisk,t,mode,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var frisk = frisk || 0,
	  t = t || 252,
	  mode = mode || 'return',
	  dim = dim || 1;

	  var _painratio = function(a,frisk,t,mode) {
	    var annret = $u.annreturn(a,t),
	    dd = $u.sqrt($u.sum($u.power($u.cdrawdown(a),2)));
	    return (annret - frisk) /$u.painindex(a,mode);
	  }
	  if ($u.isnumber(x)) {
	    throw new Error('input arguments must be an array or matrix');
	  }
	  if ($u.isarray(x)) {
	    return _painratio(x,frisk,t,mode);
	  }
	  return $u.vectorfun(x,function(val){return _painratio(val,frisk,t,mode);},dim);
	}

	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method paramcondvar
	 * @summary Parametric Conditional Value-At-Risk
	 * @description Parametric Conditional Value-At-Risk. More sensitive to the shape of the loss distribution in the tails
	 * Also known as Expected Shortfall (ES), Expected Tail Loss (ETL).
	 * 
	 * @param  {number|array} mu mean value (def: 0)
	 * @param  {number|array} sigma standard deviation (def: 1)
	 * @param  {number} p cVaR confidende level in range [0,1] (def: 0.95)
	 * @param  {number} amount portfolio/asset amount (def: 1)
	 * @param  {number} period time horizon (def: 1)
	 * @return {number}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * // parametric daily Var at 5% conf level
	 * ubique.paramcondvar(ubique.mean(x),ubique.std(x));
	 * // 0.0300178
	 *
	 * //parametric daily VaR at 1% for 100k GBP asset over 10 days (two assets)
	 * ubique.paramcondvar(ubique.mean(ubique.cat(1,x,y)),ubique.std(ubique.cat(1,x,y)),0.99,100000,10);
	 * // [19579, 44511.1]
	 */
	 $u.paramcondvar = function(mu,sigma,p,amount,period) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    p = 0.95;
	    amount = 1;
	    period = 1;
	  }
	  if (arguments.length === 3) {
	    amount = 1;
	    period = 1;
	  }
	  if (arguments.length === 4) {
	    period = 1;
	  }
	  var _pcvar = function(_mu,_sigma,p,amount,period) {
	    return _sigma * $u.normpdf($u.norminv(1 - p))/(1 - p) * amount * Math.sqrt(period) - _mu;
	  }
	  if ($u.isvector(mu) && $u.isvector(sigma)) {
	    mu = $u.flatten(mu);
	    sigma = $u.flatten(sigma);
	  }

	  if ($u.isnumber(mu) && $u.isnumber(sigma)) {
	    return _pcvar(mu,sigma,p,amount,period);
	  } else 
	  if ($u.isarray(mu) && $u.isarray(sigma)) {
	    var out = new Array(mu.length);
	    for (var i = 0;i < mu.length; i++) {
	      out[i] = _pcvar(mu[i],sigma[i],p,amount,period);
	    }
	    return out;
	  } else {
	    throw new Error('mu and sigma must be both numbers or arrays');
	  }
	 }
	}


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method paramvar
	 * @summary Parametric Value-At-Risk
	 * @description Parametric Value-At-Risk. Assets or portfolio returns are normally distributed.
	 * It manages numbers, arrays, row vectors [[a,b,...,n]] and column vectors [[a],[b],...,[n]]
	 * 
	 * @param  {number|array|matrix} mu mean value (def: 0)
	 * @param  {number|array|matrix} sigma standard deviation (def: 1)
	 * @param  {number} p VaR confidende level in range [0,1] (def: 0.95)
	 * @param  {number} amount portfolio/asset amount (def: 1)
	 * @param  {number} period time horizon (def: 1)
	 * @return {number}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * // VaR with numbers
	 * ubique.paramvar(0,1);
	 * // 1.644854
	 *
	 * // VaR with arrays
	 * ubique.paramvar([0,0,0],[1,2,3]);
	 * [ 1.644854, 3.289707, 4.934561 ]
	 *
	 * // VaR with vectors
	 * ubique.paramvar([[0,0]],[[1,2]]);
	 * [ [ 1.644854, 3.289707 ] ]
	 * ubique.paramvar([[0],[0]],[[1],[2]]);
	 * [ [ 1.644854 ], [ 3.289707 ] ]
	 * 
	 * // parametric VaR at 5% conf level
	 * ubique.paramvar(ubique.mean(x),ubique.std(x));
	 * // 0.020311
	 * ubique.paramvar(ubique.mean(y),ubique.std(y));
	 * // 0.074269
	 * ubique.paramvar(ubique.mean(ubique.cat(1,x,y)),ubique.std(ubique.cat(1,x,y)));
	 * // [ [ 0.020311, 0.074269 ] ]
	 *
	 * //parametric VaR at 1% for 100k GBP asset over 10 days (two assets)
	 * ubique.paramvar(ubique.mean(ubique.cat(1,x,y)),ubique.std(ubique.cat(1,x,y)),0.99,100000,10);
	 * // [ [ 11429.165523, 34867.319072 ] ]
	 */
	 $u.paramvar = function(mu,sigma,p,amount,period) {
	 	if (arguments.length < 2) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 2) {
	 		p = 0.95;
	 		amount = 1;
	 		period = 1;
	 	}
	 	if (arguments.length === 3) {
	 		amount = 1;
	 		period = 1;
	 	}
	 	if (arguments.length === 4) {
	 		period = 1;
	 	}
	 	var _pvar = function(_mu,_sigma,p,amount,period) {
	 		return (-$u.norminv(1 - p) * _sigma - _mu) * Math.sqrt(period) * amount; 
	 	}
	 	if ($u.isnumber(mu) && $u.isnumber(sigma)) {
	 		return _pvar(mu,sigma,p,amount,period);
	 	} else 
	 	if ($u.isarray(mu) && $u.isarray(sigma)) {
	 		return $u.arrayfun(mu,function(el,idx){ return _pvar(el,sigma[idx],p,amount,period);});
	 	} else
	  if ($u.ismatrix(mu) && $u.ismatrix(sigma)) {
	    var out = $u.array($u.max($u.size(mu))),
	    _mu = $u.flatten(mu),
	    _sigma = $u.flatten(sigma);
	    out = $u.arrayfun(out,function(el,idx){return _pvar(_mu[idx],_sigma[idx],p,amount,period)});
	    if ($u.isrow(mu)) {
	      return [out];
	    } else
	    if ($u.iscolumn(mu)) {
	      return $u.tomat(out);
	    } else {
	      throw new Error('input must be a row or column vector');
	    }
	  }
	}

	}




/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performance metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method percpos
	 * @summary Percentage of positive values in array or matrix
	 * @description Percentage of positive values in array or matrix
	 * 
	 * @param  {array|matrix} x array of elements
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.percpos(x);
	 * // 0.8
	 * ubique.percpos(ubique.cat(1,x,y));
	 * // [[0.8, 0.5]]
	 * ubique.percpos(ubique.cat(1,x,y),0);
	 * // [0.5, 1, 1, 0, 0.5, 1, 0.5, 0.5, 0.5, 1]
	 */
	 $u.percpos = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _percpos = function(a) {
	    var count = 0;
	    for (var i = 0;i < a.length;i++) {
	      if (a[i] >= 0) {
	        count++;
	      } 
	    }
	    return count / a.length;
	  }
	  if ($u.isnumber(x)) {
	    return 1;
	  }
	  if ($u.isarray(x)) {
	    return  _percpos(x);
	  }
	  return $u.vectorfun(x,function(val){return _percpos(val);},dim);
	}
	}

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Transformation
	 */
	 module.exports = function($u) {
	/**
	 * @method ret2tick
	 * @summary Convert a return series to a value series with a start value
	 * @description  Convert a return series to a value series with a start value
	 * 
	 * @param  {array|matrix} x array of elements
	 * @param  {string} mode method to compute returns. 'simple','continuous' (def: simple)
	 * @param  {number} sval start value (def: 1)
	 * @return {array|matrix}     
	 *
	 * @example
	 * var d = [0.5,-3,2.3];
	 * var e = [[9, 5], [6, 1]];
	 *
	 * ubique.ret2tick(0.05);
	 * // [1, 1.05]
	 * ubique.ret2tick(d,'simple',100);
	 * // [100, 150, -300, -990]
	 * ubique.ret2tick(e,'simple',100,0);
	 * // [[100, 1000, 6000], [100, 700, 1400]]
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
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performance metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method ror
	 * @summary Simple rate of return
	 * @description Simple rate of return calculated from the last and the first value of 
	 * an array of numbers.
	 * 
	 * @param  {array!matrix} x array or matrix of values
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}   
	 *
	 * @example
	 * var q = [[89,23,12],[34,5,70]];
	 * 
	 * ubique.ror([100,112]);
	 * // 0.12
	 * ubique.ror(q);
	 * // [[-0.617978, -0.782609, 4.83333]]
	 * ubique.ror(q,0);
	 * // [-0.865169, 1.05882]
	 */
	 $u.ror = function(x,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    dim = 1;
	  }
	  var _ror = function(a) {
	    return a[a.length - 1] / a[0] - 1;
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return  _ror(x);
	  }
	  return $u.vectorfun(x,function(val){return _ror(val);},dim);
	}
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method sharpe
	 * @summary Sharpe Ratio
	 * @description Sharpe Ratio.Compute Sharpe ratio for an array X of values (daily, weekly, etc) and
	 * a free-risk rate. Annual free-risk must be divided to match the right timeframe.
	 * 
	 * @param  {array|matrix} x array of value
	 * @param  {number} frisk annual free-risk rate (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|arrray}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.sharpe(x,0.02/12);
	 * // 0.698794
	 * ubique.sharpe(ubique.cat(1,x,y));
	 * // [[0.770539, 0.23858]]
	 */
	 $u.sharpe = function(x,frisk,dim) {
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		frisk = 0;
	 		dim = 1;
	 	}
	 	if (arguments.length === 2) {
	 		dim = 1;
	 	}
	 	var _sharpe = function(a,frisk) {
	 		return ($u.mean(a) - frisk) / $u.std(a);
	 	}
	 	if ($u.isnumber(x)) {
	 		throw new Error('input must be an array or matrix');
	 	}
	 	if ($u.isarray(x)) {
	 		return  _sharpe(x,frisk);
	 	}
	 	return $u.vectorfun(x,function(val){return _sharpe(val,frisk);},dim);
	 }

	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method sortino
	 * @summary Sortino ratio
	 * @description  Sortino ratio
	 * 
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} frisk free-risk rate (def: 0)
	 * @param  {number} mar minimum acceptable return (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|arrray}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.sortino(x,0.02/12);
	 * // 3.0844
	 * 
	 * ubique.sortino(ubique.cat(1,x,y),0.01/12,0.5);
	 * // [ [ 0.0354, 0.024 ] ]
	 */
	 $u.sortino = function(x,frisk,mar,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  frisk = frisk || 0;
	  mar = mar || 0;
	  dim = dim || 1;
	  
	  var sr = function(a,frisk,mar) {
	    return ($u.mean(a) - frisk) / $u.downsiderisk(a,mar);
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return sr(x,frisk,mar);
	  } 
	  return $u.vectorfun(x,function(val){return sr(val,frisk,mar);},dim);
	}
	}


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method sterlingratio
	 * @summary Sterling Ratio
	 * @description A risk-adjusted measure like Calmar ratio but the denominator is 
	 * the largest consecutive drawdown (excluded the 10% excess in the original formula)
	 * 
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {number} frisk annual free-risk rate (def: 0)
	 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|arrray}       
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * var cat = ubique.cat;
	 * 
	 * ubique.sterlingratio(x,0,12);
	 * // 16.701049
	 *
	 * ubique.sterlingratio(cat(1,x,y),0,12);
	 * // [ [ 16.701049, 1.515412 ] ]
	 */
	 $u.sterlingratio = function(x,frisk,t,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  var frisk = frisk || 0,
	  t = t || 252,
	  dim = dim || 1;

	  var _sterlingratio = function(a,frisk,t) {
	    var annret = $u.annreturn(a,t),
	    ldd = $u.max($u.cdrawdown(a));
	    return (annret - frisk) / ldd;
	  }
	  if ($u.isnumber(x)) {
	    throw new Error('input arguments must be an array or matrix');
	  }
	  if ($u.isarray(x)) {
	    return  _sterlingratio(x,frisk,t);
	  }
	  return $u.vectorfun(x,function(val){return _sterlingratio(val,frisk,t);},dim);
	}

	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Data Transformation
	 */
	 module.exports = function($u) {
	/**
	 * @method tick2ret
	 * @summary Convert a value series to a return series
	 * @description  Convert a value series to a return series. 'simple' (default) for simple returns, 'continuous' for continuously compounded
	 * 
	 * @param  {array|matrix} x array of elements
	 * @param  {string} mode method to compute returns. 'simple','continuous' (def: simple)
	 * @param  {number} sval start value (def: 1)
	 * @return {array|matrix}     
	 *
	 * @example
	 * var d = [0.5,-3,2.3];
	 * var e = [[9, 5], [6, 1]];
	 *
	 * ubique.tick2ret(d);
	 * // [-7, -1.76667]
	 * ubique.tick2ret(e);
	 * // [[-0.333333, -0.8]]
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
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Time Series Analysis
	 */
	 module.exports = function($u) {
	/**
	 * @method tomonthly
	 * @summary Convert a time series to a monthly frequency
	 * @description Convert a time series to a monthly frequency. Default: all days
	 * in the range.
	 *
	 * @param  {array} nd array of unix dates
	 * @param  {array|matrix} nv array or matrix of values
	 * @return {matrix}
	 *
	 * @example
	 * ubique.tomonthly(ubique.datenum(['15-01-18','15-02-28','15-03-05','15-03-24','15-04-27'],'YY-MM-DD'),[100,99,102,103,98]);
	 * // [ [ 1421535600, 1425078000, 1427151600, 1430085600 ],
	 * // [ 100, 99, 103, 98 ] ]
	 */
	 $u.tomonthly = function(nd,nv) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  // basic mode: all data, exact on last day of month
	  var md = $u.month(nd);
	  var df = $u.diff(md);
	  df[0] = 1;
	  df = $u.cat(0,df,1);

	  var idx = $u.find(df.map(function(el){return el !== 0;}));
	  if ($u.isarray(nv)) {
	    var newv = $u.subset(nv,idx);
	  }
	  if ($u.ismatrix(nv)) {
	    var newv = $u.subset(nv,idx,':');
	  }
	  return [$u.subset(nd,idx),newv];

	}
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Time Series Analysis
	 */
	 module.exports = function($u) {
	/**
	 * @method toweekly
	 * @summary Convert a time series to a weekly frequency
	 * @description Convert a time series to a weekly frequency. Default: all days
	 * in the range. Example: daily dates [Wed,...Fri,...Mon,...Fri,...Thu] will become 
	 * [Wed,...,Fri...,Fri...,Thu]
	 *
	 * @param  {array} nd array of unix dates
	 * @param  {array|matrix} nv array or matrix of values
	 * @return {matrix}
	 *
	 * @example
	 * ubique.toweekly(ubique.datenum(['15-01-15','15-01-23','15-01-30','15-02-04'],'YY-MM-DD'),[100,99,102,103,98]);
	 * // [ [ 1421276400, 1421967600, 1422572400, 1423004400 ],
	 * // [ 100, 99, 102, 103 ] ]
	 */
	 $u.toweekly = function(nd,nv) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  var wd = $u.weekday(nd);

	  // basic mode: all data, exact on Friday
	  var idx = $u.find(wd.map(function(a) {return a === 5;}));
	  if (wd[0] !== 5) {
	    idx = $u.cat(0,0,idx);
	  }
	  if (wd[wd.length - 1] !== 5) {
	    idx = $u.cat(0,idx,nd.length - 1);
	  }
	  if ($u.isarray(nv)) {
	    var newv = $u.subset(nv,idx);
	  }
	  if ($u.ismatrix(nv)) {
	    var newv = $u.subset(nv,idx,':');
	  }
	  return [$u.subset(nd,idx),newv];

	}
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method trackerr
	 * @summary Tracking Error (ex-post)
	 * @description  Ex-post tracking error
	 * 
	 * @param  {array} x array of X values
	 * @param  {array} y array of Y values
	 * @return {number}   
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.trackerr(x,y);
	 * // 0.0566
	 */
	 $u.trackerr = function(x,y) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  return $u.std($u.minus(x,y));
	}
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method treynor
	 * @summary Treynor Ratio
	 * @description Compute the Treynor ratio for an array X of values (daily, weekly, etc) and
	 * a free-risk rate. Annual free-risk must be divided to match the right timeframe.
	 * 
	 * @param  {array} x array of X values
	 * @param  {array} y array of Y values
	 * @param  {number} frisk  free-risk rate (def: 0)
	 * @return {number}       
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.treynor(x,y,0.01/12);
	 * // 0.7392
	 */
	 $u.treynor = function(x,y,frisk) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 2) {
	    frisk = 0;
	  }
	  var beta = $u.linearreg(x,y).beta;
	  return ($u.mean(x) - frisk) / beta;
	}
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performance metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method twr
	 * @summary True Time-weighted return measures the returns of the assets irrespective of the amount invested
	 * @description rue Time-weighted return measures the returns of the assets irrespective of the amount invested
	 * 
	 * @param  {array} mv array of market values
	 * @param  {array} cf array of external cashflows (inflows/outflows)
	 * @return {number}    
	 *
	 * @example
	 * var mv = [250000,255000,257000,288000,293000,285000], cf = [0,0,25000,0,-10000,0];
	 * 
	 * ubique.twr(mv,cf);
	 * // 0.07564769566198049
	 */
	 $u.twr = function(mv,cf) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    cf = 0;
	  }
	  if (mv.length !== cf.length) {
	    throw new Error('market value and cash flows must be of the same size');
	  }
	  var _twr = [1];
	  for (var i = 1; i < mv.length; i++) {
	    _twr[i] = mv[i] / (mv[i - 1] + cf[i - 1]);
	  }
	  return $u.prod(_twr) - 1;
	}

	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method ulcerindex
	 * @summary Ulcer Index
	 * @description Ulcer Index of Peter G. Martin (1987). The impact of long, deep drawdowns will have significant
	 * impact because the underperformance since the last peak is squared.
	 *  
	 * @param  {array|matrix} x asset/portfolio returns
	 * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array} 
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * 
	 * ubique.ulcerindex(x);
	 * // 0.005263
	 * ubique.ulcerindex([[0.003,0.026],[0.015,-0.009],[0.014,0.024],[0.015,0.066],[-0.014,0.039]],'return');
	 * // [ [ 0.006261, 0.004025 ] ]
	 */
	 $u.ulcerindex = function(x,mode,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  mode = mode || 'return';
	  dim = dim || 1;

	  var uidx = function(a,mode) {
	    dd = $u.drawdown(a,mode).dd,
	    n = a.length;
	    return $u.sqrt($u.sum($u.power(dd,2)) / n);
	  }
	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return uidx(x,mode);
	  }
	  return $u.vectorfun(x,function(val){return uidx(val,mode);},dim);
	}

	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Risk metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method upsidepot
	 * @summary Upside potential
	 * @description Upside potential
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number} mar minimum acceptable return (def: 0)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 *
	 * ubique.upsidepot(x,0.1/100);
	 * // 0.0194
	 * ubique.upsidepot(ubique.cat(1,x,y));
	 * // [[0.0202, 0.0299]]
	 */
	 $u.upsidepot = function(x,mar,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	   mar = 0;
	   dim = 1;
	 }
	 if (arguments.length === 2) {
	  dim = 1;
	}

	var _usp = function(a,mar) {
	 var z = 0;
	 for (var i = 0;i < a.length;i++) {
	  z += Math.max(a[i] - mar,0) / a.length;
	}
	return z;
	}
	if ($u.isnumber(x)) {
	 return x;
	}
	if ($u.isarray(x)) {
	 return _usp(x,mar);
	} 
	return $u.vectorfun(x,function(val){return _usp(val,mar);},dim);
	}
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Performance metrics
	 */
	 module.exports = function($u) {
	/**
	 * @method xreturn
	 * @summary Excess return
	 * @description Excess return. If X and Y are arrays, returns mean of difference of values X - Y, otherwise returns a simple difference X - Y
	 * 
	 * @param  {number!array} x number or array of elements in X
	 * @param  {number|array} y number or array of elements in Y
	 * @return {number}   
	 *
	 * @example
	 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.xreturn(x,y);
	 * // 0.0053
	 * ubique.xreturn(0.05,0.015);
	 * // 0.035
	 */
	 $u.xreturn = function(x,y) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
	  if ($u.isnumber(x) && $u.isnumber(y)) {
	    return x - y;
	  } else 
	  if ($u.isarray(x) && $u.isarray(y)) {
	    return $u.mean($u.minus(x,y));
	  } else {
	    throw new Error('inputs must be a number or an array')
	  }
	}
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Interpolation
	 */
	 module.exports = function($u) {
	/**
	 * @method interp1
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
	 * var xnew = [2,4,6];
	 *
	 * ubique.interp1(x,y,xnew);
	 * // [ 4, 8, 12 ]
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
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Linear Regression
	 */
	 module.exports = function($u) {
	/**
	 * @method  linearreg
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
	 * ubique.linearreg(x,y);
	 * // { beta: 0.02308942571228251, alpha: 0.017609073236025237, rsq: 0.0027553853574994254, fun: [Function] }
	 * 
	 * ubique.linearreg([100,101,99,102,105],[1,2,3,4,5])
	 * // { beta: 1.1, alpha: 98.1, rsq: 0.5707547169811321, fun: [Function] }
	 * 
	 * ubique.linearreg([100,101,99,102,105],[1,2,3,4,5]).fun(6);
	 * // 104.69
	 * 
	 */
	 $u.linearreg = function(y,x) {
	  if (arguments.length < 2) {
	    throw new Error('not enough input arguments');
	  }
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
/* 164 */
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
	 * @param  {array|matrix} x array or matrix of elemnts X
	 * @param  {array|matrix} y array or matrix of elements Y
	 * @param  {number} flag Bessel's correction 0: population, 1: sample (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 *
	 * ubique.corrcoef(l);
	 * // [[1, 0.802955, 0], [0.802955, 1, -0.59604], [0, -0.59604, 1]]
	 * ubique.corrcoef(c,d);
	 * // [[1, -0.931151], [-0.931151, 1]]
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
/* 165 */
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
	 * @param  {array|matrix} x array or matrix of elemnts X
	 * @param  {array|matrix} y array or matrix of elements Y
	 * @param  {number} flag Bessel's correction 0: population, 1: sample (def: 1)
	 * @return {number|array}
	 *
	 * @example
	 * var c = [5,6,3];
	 * var d = [0.5,-3,2.3];
	 * var e = [[9, 5], [6, 1]];
	 * var f = [[3, 2], [5, 2]];
	 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
	 *
	 * ubique.cov(c);
	 * // 2.33333
	 * ubique.cov(c,d);
	 * // [[2.33333, -3.83333], [-3.83333, 7.26333]]
	 * ubique.cov(c,d,0);
	 * // [[1.55556, -2.55556], [-2.55556, 4.84222]]
	 * ubique.cov(e,f);
	 * // [[10.9167, 2], [2, 2]]
	 * ubique.cov(l);
	 * // [[0.333333, 1.16667, 0], [1.16667, 6.33333, -3], [0, -3, 4]]
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
	    	return $u.varc(x);
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
/* 166 */
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
	 * Returns an object with:
	 * 
	 * bins - number of bins
	 * count - number of matched elements
	 * freq - frequency 
	 * 
	 * @param  {array|matrix} x array or matrix of values
	 * @param  {number|array} bins number of bins (as NUMBER) or array of edges (as ARRAY) (def: 10)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {aray|matrix}       
	 *
	 * @example
	 * var A = [87,27,45,62,3,52,20,43,74,61];
	 * var B = [12,34,57,43,88,75,89,2,27,29];
	 * 
	 * ubique.histc(A,[0,20,40,60,80,100]);
	 * // [ { bins: 0, count: 1, freq: 0.1 },
	 * //   { bins: 20, count: 2, freq: 0.2 },
	 * //   { bins: 40, count: 3, freq: 0.3 },
	 * //   { bins: 60, count: 3, freq: 0.3 },
	 * //   { bins: 80, count: 1, freq: 0.1 },
	 * //   { bins: 100, count: 0, freq: 0 } ]
	 *
	 * ubique.histc(ubique.cat(1,A,B),[0,50,100]);
	 * // [ [ { bins: 0, count: 5, freq: 0.5 },
	 * //     { bins: 0, count: 6, freq: 0.6 } ],
	 * //   [ { bins: 50, count: 5, freq: 0.5 },
	 * //     { bins: 50, count: 4, freq: 0.4 } ],
	 * //   [ { bins: 100, count: 0, freq: 0 },
	 * //     { bins: 100, count: 0, freq: 0 } ] ]
	 */
	 $u.histc = function(x,bins,dim) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    bins = 10;
	    dim = 1;
	  }
	  if (arguments.length === 2) {
	    dim = 1;
	  }
	  var _histc = function(a,bins) {
	    var y = [],
	    h = [], 
	    out = [];
	    if ($u.isnumber(bins)) {
	      var xmin = $u.min(a),
	      xmax = $u.max(a),
	      binw = (xmax - xmin) / bins,
	      anum = $u.colon(0,bins);
	      y = $u.plus($u.times(anum,binw),xmin);
	    } else {
	      y = bins;
	    }

	    for (var k = 0; k < y.length; k++) {
	      h[k] = 0;
	      for (var i = 0; i < a.length; i++) {
	        if (y[k] <= a[i] && a[i] < y[k + 1]) {
	          h[k] += 1;
	        } else 
	        if (a[i] === y[k]) {
	          h[k] += 1;
	        }
	      }
	      out.push({bins: y[k], count: h[k], freq: h[k]/a.length})
	    }
	    return out;
	  }

	  if ($u.isnumber(x)) {
	    return 0;
	  }
	  if ($u.isarray(x)) {
	    return _histc(x,bins);
	  }
	  return $u.vectorfun(x,function(val){ return _histc(val,bins);},dim);
	}
	}

/***/ },
/* 167 */
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
	 *
	 * ubique.iqr(x);
	 * // 0.023
	 * ubique.iqr(ubique.cat(1,x,y));
	 * // [[0.023, 0.095]]
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
/* 168 */
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
	 * @param  {array|matrix} x array or matrix of elements
	 * @param  {number} flag 0: bias correction, 1: simple (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.kurtosis(x);
	 * // 3.03758
	 * ubique.kurtosis(x,0);
	 * // 4.03072
	 * ubique.kurtosis(ubique.cat(1,x,y));
	 * // [[3.03758, 1.39764]]
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
/* 169 */
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
	 * ubique.mad(c);
	 * // 1.11111
	 * ubique.mad(a,0);
	 * // [0.444444, 3.77778]
	 * ubique.mad(a);
	 * // [[1, 1, 3]]
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
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method max
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
	 * ubique.max([5,6,-1]);
	 * // 6
	 * ubique.max(b,0);
	 * // [3, 9]
	 * ubique.max(b);
	 * // [[4, 5, 9]]
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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	 /**
	 * Descriptive Statistic
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
	 * ubique.mean(c);
	 * // 4.66667
	 * ubique.mean(a,0);
	 * // [5.33333, 4.66667]
	 * ubique.mean(a);
	 * // [6, 7, 2]
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
/* 172 */
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
	 * ubique.median(c);
	 * // 4.66667
	 * ubique.median(a,0);
	 * // [5.33333, 4.66667]
	 * ubique.median(a);
	 * // [6, 7, 2]
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
/* 173 */
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
	 * ubique.min([5,6,-1]);
	 * // -1
	 * ubique.min(b,0);
	 * // [-1, 4]
	 * ubique.min(b);
	 * // [[-1, 3, -1]]
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
/* 174 */
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
	 * ubique.mode(c);
	 * // 3
	 * ubique.mode(a,0);
	 * // [5, -1]
	 * ubique.mode(a);
	 * // [[5, 6, -1]]
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
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method moment
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
	 * 
	 * ubique.moment(x,3);
	 * // 6.60941e-6
	 * ubique.moment(x,1);
	 * // 0
	 * ubique.moment(ubique.cat(1,x,y),2);
	 * // [[4.8569e-4, 0.00251024]]
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
/* 176 */
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
	 * @param  {array} x array of values in X
	 * @param  {array} y array of values in Y
	 * @param  {string} mode methods: 'euclidean','manhattan','chebychev','hamming' (def: 'euclidean')
	 * @return {number}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.pdist(x,y,'euclidean');
	 * // 0.170532
	 * ubique.pdist(x,y,'manhattan');
	 * // 0.471
	 * ubique.pdist(x,y,'chebychev');
	 * // 0.087
	 * ubique.pdist(x,y,'hamming');
	 * // 10
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
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method prctile
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
	 * 
	 * ubique.prctile(x,5);
	 * // -0.014
	 * ubique.prctile(x,33);
	 * // 0.0118
	 * ubique.prctile(ubique.cat(1,x,y),5,0);
	 * // [-0.005, 0.026, 0.015, -0.037, -0.061, 0.024, -0.049, -0.021, -0.014, 0.039]
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
/* 178 */
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
	 * 
	 * ubique.quantile(x,0.25);
	 * // 0.003
	 * ubique.quantile(ubique.cat(1,x,y),0.33);
	 * // [[0.0118, -0.0242]]
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
/* 179 */
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
	 *
	 * ubique.quartile(x);
	 * // [0.003, 0.015, 0.026]
	 * ubique.quartile(ubique.cat(1,x,y));
	 * // [[0.003, -0.037], [0.015, 0.0175], [0.026, 0.058]]
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
/* 180 */
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
	 * ubique.range(c);
	 * // 3
	 * ubique.range(a,0);
	 * // [1,9]
	 * ubique.range(a);
	 * // [[2, 2, 6]]
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
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method skewness
	 * @summary Skewness
	 * @description Skewness
	 * 
	 * @param  {array|matrix} x array or matrix of elements
	 * @param  {number} flag 0: bias correction, 1: simple (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.skewness(x);
	 * // 0.617481
	 * ubique.skewness(x,1);
	 * // 0.732243
	 * ubique.skewness(ubique.cat(1,x,y));
	 * // [[0.617481, -0.118909]]
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
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method std
	 * @summary Standard deviation
	 * @description Standard deviation
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
	 * ubique.std(c);
	 * // 1.52753
	 * ubique.std(c,0);
	 * // 1.24722 
	 * ubique.std(a,0);
	 * // [[1, 1, 3]]
	 * ubique.std(a,0,0);
	 * // [0.471405, 4.02768]
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
	 	var variance = $u.varc(x,flag,dim);
	 	return $u.sqrt(variance);
	 }

	}


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Descriptive Statistic
	 */
	 module.exports = function($u) {
	/**
	 * @method varc
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
	 * ubique.varc(c);
	 * // 2.33333
	 * ubique.varc(c,0);
	 * // 1.55556 
	 * ubique.varc(a,0);
	 * // [[2, 2, 18]]
	 * ubique.varc(a,0,0);
	 * // [0.222222, 16.2222]
	 */
	 $u.varc = function(x,flag,dim) {
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
	 	var _varc = function(a,flag) {
	 		var mu = $u.mean(a);
	 		return ($u.sum($u.power($u.abs($u.minus(a,mu)),2))) / (a.length - flag);
	 	}
	 	
	 	if ($u.isnumber(x)) {
	 		return 0;
	 	}
	 	if ($u.isarray(x)) {
	 		return  _varc(x,flag);
	 	}
	 	return $u.vectorfun(x,function(val){return _varc(val,flag);},dim);
	 }

	}


/***/ },
/* 184 */
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
	 * @param  {array|matrix} x array or matrix of elements
	 * @param  {number} flag 0: bias correction, 1: simple (def: 1)
	 * @param  {number} dim dimension 0: row, 1: column (def: 1)
	 * @return {number|array|matrix}
	 *
	 * @example
	 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
	 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
	 * 
	 * ubique.xkurtosis(x);
	 * // 0.0375811
	 * ubique.xkurtosis(x,0);
	 * // 1.03072
	 * ubique.xkurtosis( ubique.cat(1,x,y));
	 * // [[0.0375811, -1.60236]]
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
/* 185 */
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
	 * ubique.zscore(c);
	 * // [0.218218, 0.872872, -1.09109]
	 * ubique.zscore(c,0);
	 * // [0.267261, 1.06904, -1.33631]
	 * ubique.zscore(a,0);
	 * // [[-1, -1, 1], [1, 1, -1]]
	 * ubique.zscore(a,0,0);
	 * // [[-0.707107, 1.41421, -0.707107], [0.579324, 0.827606, -1.40693]]
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

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Utility
	 */
	 module.exports = function ($u) {
	/**
	 * @method format
	 * @summary Set display format for output (numbers)
	 * @description Set display format for output (numbers)
	 * 
	 * @param  {number|array|matrix} x input element
	 * @param  {number} k number of decimals (def: 6 decimals)
	 * @return {nuber|array|matrix}
	 *  
	 * @example
	 * ubique.format(5.6677798348349,0);
	 * // 6
	 * ubique.format([[-1000.47748,0.000002],[0.1483478,10.111100]],2);
	 * // [ [ -1000.48, 0 ], [ 0.15, 10.11 ] ]
	 */
	 $u.format = function (x,k) {
	  if (arguments.length === 0) {
	    throw new Error('not enough input arguments');
	  }
	  if (arguments.length === 1) {
	    k = 6;
	  }
	  if ($u.isnumber(x)) {
	    return parseFloat(x.toFixed(k));
	  } else 
	  if ($u.isarray(x) || $u.ismatrix(x)) {
	    return $u.arrayfun(x,function(val) {return parseFloat(val.toFixed(k));});
	  } else {
	    return x;
	  }
	}
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {//! moment.js
	//! version : 2.9.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	(function (undefined) {
	    /************************************
	        Constants
	    ************************************/

	    var moment,
	        VERSION = '2.9.0',
	        // the global-scope this is NOT the global object in Node.js
	        globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this,
	        oldGlobalMoment,
	        round = Math.round,
	        hasOwnProperty = Object.prototype.hasOwnProperty,
	        i,

	        YEAR = 0,
	        MONTH = 1,
	        DATE = 2,
	        HOUR = 3,
	        MINUTE = 4,
	        SECOND = 5,
	        MILLISECOND = 6,

	        // internal storage for locale config files
	        locales = {},

	        // extra moment internal properties (plugins register props here)
	        momentProperties = [],

	        // check for nodeJS
	        hasModule = (typeof module !== 'undefined' && module && module.exports),

	        // ASP.NET json date format regex
	        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
	        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

	        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

	        // format tokens
	        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
	        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

	        // parsing token regexes
	        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
	        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
	        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
	        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
	        parseTokenDigits = /\d+/, // nonzero number of digits
	        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
	        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
	        parseTokenT = /T/i, // T (ISO separator)
	        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
	        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

	        //strict parsing regexes
	        parseTokenOneDigit = /\d/, // 0 - 9
	        parseTokenTwoDigits = /\d\d/, // 00 - 99
	        parseTokenThreeDigits = /\d{3}/, // 000 - 999
	        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
	        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
	        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

	        // iso 8601 regex
	        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

	        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

	        isoDates = [
	            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
	            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
	            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
	            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
	            ['YYYY-DDD', /\d{4}-\d{3}/]
	        ],

	        // iso time formats and regexes
	        isoTimes = [
	            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
	            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
	            ['HH:mm', /(T| )\d\d:\d\d/],
	            ['HH', /(T| )\d\d/]
	        ],

	        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
	        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

	        // getter and setter names
	        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
	        unitMillisecondFactors = {
	            'Milliseconds' : 1,
	            'Seconds' : 1e3,
	            'Minutes' : 6e4,
	            'Hours' : 36e5,
	            'Days' : 864e5,
	            'Months' : 2592e6,
	            'Years' : 31536e6
	        },

	        unitAliases = {
	            ms : 'millisecond',
	            s : 'second',
	            m : 'minute',
	            h : 'hour',
	            d : 'day',
	            D : 'date',
	            w : 'week',
	            W : 'isoWeek',
	            M : 'month',
	            Q : 'quarter',
	            y : 'year',
	            DDD : 'dayOfYear',
	            e : 'weekday',
	            E : 'isoWeekday',
	            gg: 'weekYear',
	            GG: 'isoWeekYear'
	        },

	        camelFunctions = {
	            dayofyear : 'dayOfYear',
	            isoweekday : 'isoWeekday',
	            isoweek : 'isoWeek',
	            weekyear : 'weekYear',
	            isoweekyear : 'isoWeekYear'
	        },

	        // format function strings
	        formatFunctions = {},

	        // default relative time thresholds
	        relativeTimeThresholds = {
	            s: 45,  // seconds to minute
	            m: 45,  // minutes to hour
	            h: 22,  // hours to day
	            d: 26,  // days to month
	            M: 11   // months to year
	        },

	        // tokens to ordinalize and pad
	        ordinalizeTokens = 'DDD w W M D d'.split(' '),
	        paddedTokens = 'M D H h m s w W'.split(' '),

	        formatTokenFunctions = {
	            M    : function () {
	                return this.month() + 1;
	            },
	            MMM  : function (format) {
	                return this.localeData().monthsShort(this, format);
	            },
	            MMMM : function (format) {
	                return this.localeData().months(this, format);
	            },
	            D    : function () {
	                return this.date();
	            },
	            DDD  : function () {
	                return this.dayOfYear();
	            },
	            d    : function () {
	                return this.day();
	            },
	            dd   : function (format) {
	                return this.localeData().weekdaysMin(this, format);
	            },
	            ddd  : function (format) {
	                return this.localeData().weekdaysShort(this, format);
	            },
	            dddd : function (format) {
	                return this.localeData().weekdays(this, format);
	            },
	            w    : function () {
	                return this.week();
	            },
	            W    : function () {
	                return this.isoWeek();
	            },
	            YY   : function () {
	                return leftZeroFill(this.year() % 100, 2);
	            },
	            YYYY : function () {
	                return leftZeroFill(this.year(), 4);
	            },
	            YYYYY : function () {
	                return leftZeroFill(this.year(), 5);
	            },
	            YYYYYY : function () {
	                var y = this.year(), sign = y >= 0 ? '+' : '-';
	                return sign + leftZeroFill(Math.abs(y), 6);
	            },
	            gg   : function () {
	                return leftZeroFill(this.weekYear() % 100, 2);
	            },
	            gggg : function () {
	                return leftZeroFill(this.weekYear(), 4);
	            },
	            ggggg : function () {
	                return leftZeroFill(this.weekYear(), 5);
	            },
	            GG   : function () {
	                return leftZeroFill(this.isoWeekYear() % 100, 2);
	            },
	            GGGG : function () {
	                return leftZeroFill(this.isoWeekYear(), 4);
	            },
	            GGGGG : function () {
	                return leftZeroFill(this.isoWeekYear(), 5);
	            },
	            e : function () {
	                return this.weekday();
	            },
	            E : function () {
	                return this.isoWeekday();
	            },
	            a    : function () {
	                return this.localeData().meridiem(this.hours(), this.minutes(), true);
	            },
	            A    : function () {
	                return this.localeData().meridiem(this.hours(), this.minutes(), false);
	            },
	            H    : function () {
	                return this.hours();
	            },
	            h    : function () {
	                return this.hours() % 12 || 12;
	            },
	            m    : function () {
	                return this.minutes();
	            },
	            s    : function () {
	                return this.seconds();
	            },
	            S    : function () {
	                return toInt(this.milliseconds() / 100);
	            },
	            SS   : function () {
	                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
	            },
	            SSS  : function () {
	                return leftZeroFill(this.milliseconds(), 3);
	            },
	            SSSS : function () {
	                return leftZeroFill(this.milliseconds(), 3);
	            },
	            Z    : function () {
	                var a = this.utcOffset(),
	                    b = '+';
	                if (a < 0) {
	                    a = -a;
	                    b = '-';
	                }
	                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
	            },
	            ZZ   : function () {
	                var a = this.utcOffset(),
	                    b = '+';
	                if (a < 0) {
	                    a = -a;
	                    b = '-';
	                }
	                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
	            },
	            z : function () {
	                return this.zoneAbbr();
	            },
	            zz : function () {
	                return this.zoneName();
	            },
	            x    : function () {
	                return this.valueOf();
	            },
	            X    : function () {
	                return this.unix();
	            },
	            Q : function () {
	                return this.quarter();
	            }
	        },

	        deprecations = {},

	        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],

	        updateInProgress = false;

	    // Pick the first defined of two or three arguments. dfl comes from
	    // default.
	    function dfl(a, b, c) {
	        switch (arguments.length) {
	            case 2: return a != null ? a : b;
	            case 3: return a != null ? a : b != null ? b : c;
	            default: throw new Error('Implement me');
	        }
	    }

	    function hasOwnProp(a, b) {
	        return hasOwnProperty.call(a, b);
	    }

	    function defaultParsingFlags() {
	        // We need to deep clone this object, and es5 standard is not very
	        // helpful.
	        return {
	            empty : false,
	            unusedTokens : [],
	            unusedInput : [],
	            overflow : -2,
	            charsLeftOver : 0,
	            nullInput : false,
	            invalidMonth : null,
	            invalidFormat : false,
	            userInvalidated : false,
	            iso: false
	        };
	    }

	    function printMsg(msg) {
	        if (moment.suppressDeprecationWarnings === false &&
	                typeof console !== 'undefined' && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }

	    function deprecate(msg, fn) {
	        var firstTime = true;
	        return extend(function () {
	            if (firstTime) {
	                printMsg(msg);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }

	    function deprecateSimple(name, msg) {
	        if (!deprecations[name]) {
	            printMsg(msg);
	            deprecations[name] = true;
	        }
	    }

	    function padToken(func, count) {
	        return function (a) {
	            return leftZeroFill(func.call(this, a), count);
	        };
	    }
	    function ordinalizeToken(func, period) {
	        return function (a) {
	            return this.localeData().ordinal(func.call(this, a), period);
	        };
	    }

	    function monthDiff(a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        return -(wholeMonthDiff + adjust);
	    }

	    while (ordinalizeTokens.length) {
	        i = ordinalizeTokens.pop();
	        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
	    }
	    while (paddedTokens.length) {
	        i = paddedTokens.pop();
	        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	    }
	    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


	    function meridiemFixWrap(locale, hour, meridiem) {
	        var isPm;

	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // thie is not supposed to happen
	            return hour;
	        }
	    }

	    /************************************
	        Constructors
	    ************************************/

	    function Locale() {
	    }

	    // Moment prototype object
	    function Moment(config, skipOverflow) {
	        if (skipOverflow !== false) {
	            checkOverflow(config);
	        }
	        copyConfig(this, config);
	        this._d = new Date(+config._d);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            moment.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    // Duration Constructor
	    function Duration(duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;

	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 36e5; // 1000 * 60 * 60
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;

	        this._data = {};

	        this._locale = moment.localeData();

	        this._bubble();
	    }

	    /************************************
	        Helpers
	    ************************************/


	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }

	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }

	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }

	        return a;
	    }

	    function copyConfig(to, from) {
	        var i, prop, val;

	        if (typeof from._isAMomentObject !== 'undefined') {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (typeof from._i !== 'undefined') {
	            to._i = from._i;
	        }
	        if (typeof from._f !== 'undefined') {
	            to._f = from._f;
	        }
	        if (typeof from._l !== 'undefined') {
	            to._l = from._l;
	        }
	        if (typeof from._strict !== 'undefined') {
	            to._strict = from._strict;
	        }
	        if (typeof from._tzm !== 'undefined') {
	            to._tzm = from._tzm;
	        }
	        if (typeof from._isUTC !== 'undefined') {
	            to._isUTC = from._isUTC;
	        }
	        if (typeof from._offset !== 'undefined') {
	            to._offset = from._offset;
	        }
	        if (typeof from._pf !== 'undefined') {
	            to._pf = from._pf;
	        }
	        if (typeof from._locale !== 'undefined') {
	            to._locale = from._locale;
	        }

	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (typeof val !== 'undefined') {
	                    to[prop] = val;
	                }
	            }
	        }

	        return to;
	    }

	    function absRound(number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }

	    // left zero fill a number
	    // see http://jsperf.com/left-zero-filling for performance comparison
	    function leftZeroFill(number, targetLength, forceSign) {
	        var output = '' + Math.abs(number),
	            sign = number >= 0;

	        while (output.length < targetLength) {
	            output = '0' + output;
	        }
	        return (sign ? (forceSign ? '+' : '') : '-') + output;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};

	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        other = makeAs(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }

	        return res;
	    }

	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
	                tmp = val; val = period; period = tmp;
	            }

	            val = typeof val === 'string' ? +val : val;
	            dur = moment.duration(val, period);
	            addOrSubtractDurationFromMoment(this, dur, direction);
	            return this;
	        };
	    }

	    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = duration._days,
	            months = duration._months;
	        updateOffset = updateOffset == null ? true : updateOffset;

	        if (milliseconds) {
	            mom._d.setTime(+mom._d + milliseconds * isAdding);
	        }
	        if (days) {
	            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            moment.updateOffset(mom, days || months);
	        }
	    }

	    // check if is an array
	    function isArray(input) {
	        return Object.prototype.toString.call(input) === '[object Array]';
	    }

	    function isDate(input) {
	        return Object.prototype.toString.call(input) === '[object Date]' ||
	            input instanceof Date;
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function normalizeUnits(units) {
	        if (units) {
	            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
	            units = unitAliases[units] || camelFunctions[lowered] || lowered;
	        }
	        return units;
	    }

	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;

	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }

	        return normalizedInput;
	    }

	    function makeList(field) {
	        var count, setter;

	        if (field.indexOf('week') === 0) {
	            count = 7;
	            setter = 'day';
	        }
	        else if (field.indexOf('month') === 0) {
	            count = 12;
	            setter = 'month';
	        }
	        else {
	            return;
	        }

	        moment[field] = function (format, index) {
	            var i, getter,
	                method = moment._locale[field],
	                results = [];

	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }

	            getter = function (i) {
	                var m = moment().utc().set(setter, i);
	                return method.call(moment._locale, m, format || '');
	            };

	            if (index != null) {
	                return getter(index);
	            }
	            else {
	                for (i = 0; i < count; i++) {
	                    results.push(getter(i));
	                }
	                return results;
	            }
	        };
	    }

	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;

	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            if (coercedNumber >= 0) {
	                value = Math.floor(coercedNumber);
	            } else {
	                value = Math.ceil(coercedNumber);
	            }
	        }

	        return value;
	    }

	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }

	    function weeksInYear(year, dow, doy) {
	        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
	    }

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }

	    function checkOverflow(m) {
	        var overflow;
	        if (m._a && m._pf.overflow === -2) {
	            overflow =
	                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
	                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
	                m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
	                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
	                                           m._a[SECOND] !== 0 ||
	                                           m._a[MILLISECOND] !== 0)) ? HOUR :
	                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
	                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
	                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;

	            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }

	            m._pf.overflow = overflow;
	        }
	    }

	    function isValid(m) {
	        if (m._isValid == null) {
	            m._isValid = !isNaN(m._d.getTime()) &&
	                m._pf.overflow < 0 &&
	                !m._pf.empty &&
	                !m._pf.invalidMonth &&
	                !m._pf.nullInput &&
	                !m._pf.invalidFormat &&
	                !m._pf.userInvalidated;

	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    m._pf.charsLeftOver === 0 &&
	                    m._pf.unusedTokens.length === 0 &&
	                    m._pf.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }

	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }

	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;

	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }

	    function loadLocale(name) {
	        var oldLocale = null;
	        if (!locales[name] && hasModule) {
	            try {
	                oldLocale = moment.locale();
	                __webpack_require__(188)("./" + name);
	                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
	                moment.locale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }

	    // Return a moment from input, that is local/utc/utcOffset equivalent to
	    // model.
	    function makeAs(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (moment.isMoment(input) || isDate(input) ?
	                    +input : +moment(input)) - (+res);
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(+res._d + diff);
	            moment.updateOffset(res, false);
	            return res;
	        } else {
	            return moment(input).local();
	        }
	    }

	    /************************************
	        Locale
	    ************************************/


	    extend(Locale.prototype, {

	        set : function (config) {
	            var prop, i;
	            for (i in config) {
	                prop = config[i];
	                if (typeof prop === 'function') {
	                    this[i] = prop;
	                } else {
	                    this['_' + i] = prop;
	                }
	            }
	            // Lenient ordinal parsing accepts just a number in addition to
	            // number + (possibly) stuff coming from _ordinalParseLenient.
	            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
	        },

	        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        months : function (m) {
	            return this._months[m.month()];
	        },

	        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        monthsShort : function (m) {
	            return this._monthsShort[m.month()];
	        },

	        monthsParse : function (monthName, format, strict) {
	            var i, mom, regex;

	            if (!this._monthsParse) {
	                this._monthsParse = [];
	                this._longMonthsParse = [];
	                this._shortMonthsParse = [];
	            }

	            for (i = 0; i < 12; i++) {
	                // make the regex if we don't have it already
	                mom = moment.utc([2000, i]);
	                if (strict && !this._longMonthsParse[i]) {
	                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	                }
	                if (!strict && !this._monthsParse[i]) {
	                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                }
	                // test the regex
	                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                    return i;
	                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                    return i;
	                } else if (!strict && this._monthsParse[i].test(monthName)) {
	                    return i;
	                }
	            }
	        },

	        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdays : function (m) {
	            return this._weekdays[m.day()];
	        },

	        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysShort : function (m) {
	            return this._weekdaysShort[m.day()];
	        },

	        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        weekdaysMin : function (m) {
	            return this._weekdaysMin[m.day()];
	        },

	        weekdaysParse : function (weekdayName) {
	            var i, mom, regex;

	            if (!this._weekdaysParse) {
	                this._weekdaysParse = [];
	            }

	            for (i = 0; i < 7; i++) {
	                // make the regex if we don't have it already
	                if (!this._weekdaysParse[i]) {
	                    mom = moment([2000, 1]).day(i);
	                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                }
	                // test the regex
	                if (this._weekdaysParse[i].test(weekdayName)) {
	                    return i;
	                }
	            }
	        },

	        _longDateFormat : {
	            LTS : 'h:mm:ss A',
	            LT : 'h:mm A',
	            L : 'MM/DD/YYYY',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY LT',
	            LLLL : 'dddd, MMMM D, YYYY LT'
	        },
	        longDateFormat : function (key) {
	            var output = this._longDateFormat[key];
	            if (!output && this._longDateFormat[key.toUpperCase()]) {
	                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
	                    return val.slice(1);
	                });
	                this._longDateFormat[key] = output;
	            }
	            return output;
	        },

	        isPM : function (input) {
	            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	            // Using charAt should be more compatible.
	            return ((input + '').toLowerCase().charAt(0) === 'p');
	        },

	        _meridiemParse : /[ap]\.?m?\.?/i,
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'pm' : 'PM';
	            } else {
	                return isLower ? 'am' : 'AM';
	            }
	        },


	        _calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        calendar : function (key, mom, now) {
	            var output = this._calendar[key];
	            return typeof output === 'function' ? output.apply(mom, [now]) : output;
	        },

	        _relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },

	        relativeTime : function (number, withoutSuffix, string, isFuture) {
	            var output = this._relativeTime[string];
	            return (typeof output === 'function') ?
	                output(number, withoutSuffix, string, isFuture) :
	                output.replace(/%d/i, number);
	        },

	        pastFuture : function (diff, output) {
	            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
	        },

	        ordinal : function (number) {
	            return this._ordinal.replace('%d', number);
	        },
	        _ordinal : '%d',
	        _ordinalParse : /\d{1,2}/,

	        preparse : function (string) {
	            return string;
	        },

	        postformat : function (string) {
	            return string;
	        },

	        week : function (mom) {
	            return weekOfYear(mom, this._week.dow, this._week.doy).week;
	        },

	        _week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        },

	        firstDayOfWeek : function () {
	            return this._week.dow;
	        },

	        firstDayOfYear : function () {
	            return this._week.doy;
	        },

	        _invalidDate: 'Invalid date',
	        invalidDate: function () {
	            return this._invalidDate;
	        }
	    });

	    /************************************
	        Formatting
	    ************************************/


	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = '';
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());

	        if (!formatFunctions[format]) {
	            formatFunctions[format] = makeFormatFunction(format);
	        }

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }

	        return format;
	    }


	    /************************************
	        Parsing
	    ************************************/


	    // get the regex to find the next token
	    function getParseRegexForToken(token, config) {
	        var a, strict = config._strict;
	        switch (token) {
	        case 'Q':
	            return parseTokenOneDigit;
	        case 'DDDD':
	            return parseTokenThreeDigits;
	        case 'YYYY':
	        case 'GGGG':
	        case 'gggg':
	            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
	        case 'Y':
	        case 'G':
	        case 'g':
	            return parseTokenSignedNumber;
	        case 'YYYYYY':
	        case 'YYYYY':
	        case 'GGGGG':
	        case 'ggggg':
	            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
	        case 'S':
	            if (strict) {
	                return parseTokenOneDigit;
	            }
	            /* falls through */
	        case 'SS':
	            if (strict) {
	                return parseTokenTwoDigits;
	            }
	            /* falls through */
	        case 'SSS':
	            if (strict) {
	                return parseTokenThreeDigits;
	            }
	            /* falls through */
	        case 'DDD':
	            return parseTokenOneToThreeDigits;
	        case 'MMM':
	        case 'MMMM':
	        case 'dd':
	        case 'ddd':
	        case 'dddd':
	            return parseTokenWord;
	        case 'a':
	        case 'A':
	            return config._locale._meridiemParse;
	        case 'x':
	            return parseTokenOffsetMs;
	        case 'X':
	            return parseTokenTimestampMs;
	        case 'Z':
	        case 'ZZ':
	            return parseTokenTimezone;
	        case 'T':
	            return parseTokenT;
	        case 'SSSS':
	            return parseTokenDigits;
	        case 'MM':
	        case 'DD':
	        case 'YY':
	        case 'GG':
	        case 'gg':
	        case 'HH':
	        case 'hh':
	        case 'mm':
	        case 'ss':
	        case 'ww':
	        case 'WW':
	            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
	        case 'M':
	        case 'D':
	        case 'd':
	        case 'H':
	        case 'h':
	        case 'm':
	        case 's':
	        case 'w':
	        case 'W':
	        case 'e':
	        case 'E':
	            return parseTokenOneOrTwoDigits;
	        case 'Do':
	            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
	        default :
	            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
	            return a;
	        }
	    }

	    function utcOffsetFromString(string) {
	        string = string || '';
	        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
	            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
	            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
	            minutes = +(parts[1] * 60) + toInt(parts[2]);

	        return parts[0] === '+' ? minutes : -minutes;
	    }

	    // function to convert string input to date
	    function addTimeToArrayFromToken(token, input, config) {
	        var a, datePartArray = config._a;

	        switch (token) {
	        // QUARTER
	        case 'Q':
	            if (input != null) {
	                datePartArray[MONTH] = (toInt(input) - 1) * 3;
	            }
	            break;
	        // MONTH
	        case 'M' : // fall through to MM
	        case 'MM' :
	            if (input != null) {
	                datePartArray[MONTH] = toInt(input) - 1;
	            }
	            break;
	        case 'MMM' : // fall through to MMMM
	        case 'MMMM' :
	            a = config._locale.monthsParse(input, token, config._strict);
	            // if we didn't find a month name, mark the date as invalid.
	            if (a != null) {
	                datePartArray[MONTH] = a;
	            } else {
	                config._pf.invalidMonth = input;
	            }
	            break;
	        // DAY OF MONTH
	        case 'D' : // fall through to DD
	        case 'DD' :
	            if (input != null) {
	                datePartArray[DATE] = toInt(input);
	            }
	            break;
	        case 'Do' :
	            if (input != null) {
	                datePartArray[DATE] = toInt(parseInt(
	                            input.match(/\d{1,2}/)[0], 10));
	            }
	            break;
	        // DAY OF YEAR
	        case 'DDD' : // fall through to DDDD
	        case 'DDDD' :
	            if (input != null) {
	                config._dayOfYear = toInt(input);
	            }

	            break;
	        // YEAR
	        case 'YY' :
	            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
	            break;
	        case 'YYYY' :
	        case 'YYYYY' :
	        case 'YYYYYY' :
	            datePartArray[YEAR] = toInt(input);
	            break;
	        // AM / PM
	        case 'a' : // fall through to A
	        case 'A' :
	            config._meridiem = input;
	            // config._isPm = config._locale.isPM(input);
	            break;
	        // HOUR
	        case 'h' : // fall through to hh
	        case 'hh' :
	            config._pf.bigHour = true;
	            /* falls through */
	        case 'H' : // fall through to HH
	        case 'HH' :
	            datePartArray[HOUR] = toInt(input);
	            break;
	        // MINUTE
	        case 'm' : // fall through to mm
	        case 'mm' :
	            datePartArray[MINUTE] = toInt(input);
	            break;
	        // SECOND
	        case 's' : // fall through to ss
	        case 'ss' :
	            datePartArray[SECOND] = toInt(input);
	            break;
	        // MILLISECOND
	        case 'S' :
	        case 'SS' :
	        case 'SSS' :
	        case 'SSSS' :
	            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
	            break;
	        // UNIX OFFSET (MILLISECONDS)
	        case 'x':
	            config._d = new Date(toInt(input));
	            break;
	        // UNIX TIMESTAMP WITH MS
	        case 'X':
	            config._d = new Date(parseFloat(input) * 1000);
	            break;
	        // TIMEZONE
	        case 'Z' : // fall through to ZZ
	        case 'ZZ' :
	            config._useUTC = true;
	            config._tzm = utcOffsetFromString(input);
	            break;
	        // WEEKDAY - human
	        case 'dd':
	        case 'ddd':
	        case 'dddd':
	            a = config._locale.weekdaysParse(input);
	            // if we didn't get a weekday name, mark the date as invalid
	            if (a != null) {
	                config._w = config._w || {};
	                config._w['d'] = a;
	            } else {
	                config._pf.invalidWeekday = input;
	            }
	            break;
	        // WEEK, WEEK DAY - numeric
	        case 'w':
	        case 'ww':
	        case 'W':
	        case 'WW':
	        case 'd':
	        case 'e':
	        case 'E':
	            token = token.substr(0, 1);
	            /* falls through */
	        case 'gggg':
	        case 'GGGG':
	        case 'GGGGG':
	            token = token.substr(0, 2);
	            if (input) {
	                config._w = config._w || {};
	                config._w[token] = toInt(input);
	            }
	            break;
	        case 'gg':
	        case 'GG':
	            config._w = config._w || {};
	            config._w[token] = moment.parseTwoDigitYear(input);
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
	            week = dfl(w.W, 1);
	            weekday = dfl(w.E, 1);
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
	            week = dfl(w.w, 1);

	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < dow) {
	                    ++week;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

	        config._a[YEAR] = temp.year;
	        config._dayOfYear = temp.dayOfYear;
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function dateFromConfig(config) {
	        var i, date, input = [], currentDate, yearToUse;

	        if (config._d) {
	            return;
	        }

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                config._pf._overflowDayOfYear = true;
	            }

	            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }

	    function dateFromObject(config) {
	        var normalizedInput;

	        if (config._d) {
	            return;
	        }

	        normalizedInput = normalizeObjectUnits(config._i);
	        config._a = [
	            normalizedInput.year,
	            normalizedInput.month,
	            normalizedInput.day || normalizedInput.date,
	            normalizedInput.hour,
	            normalizedInput.minute,
	            normalizedInput.second,
	            normalizedInput.millisecond
	        ];

	        dateFromConfig(config);
	    }

	    function currentDateArray(config) {
	        var now = new Date();
	        if (config._useUTC) {
	            return [
	                now.getUTCFullYear(),
	                now.getUTCMonth(),
	                now.getUTCDate()
	            ];
	        } else {
	            return [now.getFullYear(), now.getMonth(), now.getDate()];
	        }
	    }

	    // date from string and format string
	    function makeDateFromStringAndFormat(config) {
	        if (config._f === moment.ISO_8601) {
	            parseISO(config);
	            return;
	        }

	        config._a = [];
	        config._pf.empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;

	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    config._pf.unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    config._pf.empty = false;
	                }
	                else {
	                    config._pf.unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                config._pf.unusedTokens.push(token);
	            }
	        }

	        // add remaining unparsed input length to the string
	        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            config._pf.unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
	            config._pf.bigHour = undefined;
	        }
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR],
	                config._meridiem);
	        dateFromConfig(config);
	        checkOverflow(config);
	    }

	    function unescapeFormat(s) {
	        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        });
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function regexpEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }

	    // date from string and array of format strings
	    function makeDateFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,

	            scoreToBeat,
	            i,
	            currentScore;

	        if (config._f.length === 0) {
	            config._pf.invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }

	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._pf = defaultParsingFlags();
	            tempConfig._f = config._f[i];
	            makeDateFromStringAndFormat(tempConfig);

	            if (!isValid(tempConfig)) {
	                continue;
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += tempConfig._pf.charsLeftOver;

	            //or tokens
	            currentScore += tempConfig._pf.unusedTokens.length * 10;

	            tempConfig._pf.score = currentScore;

	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }

	        extend(config, bestMoment || tempConfig);
	    }

	    // date from iso format
	    function parseISO(config) {
	        var i, l,
	            string = config._i,
	            match = isoRegex.exec(string);

	        if (match) {
	            config._pf.iso = true;
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(string)) {
	                    // match[5] should be 'T' or undefined
	                    config._f = isoDates[i][0] + (match[6] || ' ');
	                    break;
	                }
	            }
	            for (i = 0, l = isoTimes.length; i < l; i++) {
	                if (isoTimes[i][1].exec(string)) {
	                    config._f += isoTimes[i][0];
	                    break;
	                }
	            }
	            if (string.match(parseTokenTimezone)) {
	                config._f += 'Z';
	            }
	            makeDateFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }

	    // date from iso format or fallback
	    function makeDateFromString(config) {
	        parseISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            moment.createFromInputFallback(config);
	        }
	    }

	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }

	    function makeDateFromInput(config) {
	        var input = config._i, matched;
	        if (input === undefined) {
	            config._d = new Date();
	        } else if (isDate(input)) {
	            config._d = new Date(+input);
	        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
	            config._d = new Date(+matched[1]);
	        } else if (typeof input === 'string') {
	            makeDateFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            dateFromConfig(config);
	        } else if (typeof(input) === 'object') {
	            dateFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            moment.createFromInputFallback(config);
	        }
	    }

	    function makeDate(y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);

	        //the date constructor doesn't accept years < 1970
	        if (y < 1970) {
	            date.setFullYear(y);
	        }
	        return date;
	    }

	    function makeUTCDate(y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	        if (y < 1970) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }

	    function parseWeekday(input, locale) {
	        if (typeof input === 'string') {
	            if (!isNaN(input)) {
	                input = parseInt(input, 10);
	            }
	            else {
	                input = locale.weekdaysParse(input);
	                if (typeof input !== 'number') {
	                    return null;
	                }
	            }
	        }
	        return input;
	    }

	    /************************************
	        Relative Time
	    ************************************/


	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function relativeTime(posNegDuration, withoutSuffix, locale) {
	        var duration = moment.duration(posNegDuration).abs(),
	            seconds = round(duration.as('s')),
	            minutes = round(duration.as('m')),
	            hours = round(duration.as('h')),
	            days = round(duration.as('d')),
	            months = round(duration.as('M')),
	            years = round(duration.as('y')),

	            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
	                minutes === 1 && ['m'] ||
	                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
	                hours === 1 && ['h'] ||
	                hours < relativeTimeThresholds.h && ['hh', hours] ||
	                days === 1 && ['d'] ||
	                days < relativeTimeThresholds.d && ['dd', days] ||
	                months === 1 && ['M'] ||
	                months < relativeTimeThresholds.M && ['MM', months] ||
	                years === 1 && ['y'] || ['yy', years];

	        args[2] = withoutSuffix;
	        args[3] = +posNegDuration > 0;
	        args[4] = locale;
	        return substituteTimeAgo.apply({}, args);
	    }


	    /************************************
	        Week of Year
	    ************************************/


	    // firstDayOfWeek       0 = sun, 6 = sat
	    //                      the day of the week that starts the week
	    //                      (usually sunday or monday)
	    // firstDayOfWeekOfYear 0 = sun, 6 = sat
	    //                      the first week is the week that contains the first
	    //                      of this day of the week
	    //                      (eg. ISO weeks use thursday (4))
	    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
	        var end = firstDayOfWeekOfYear - firstDayOfWeek,
	            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
	            adjustedMoment;


	        if (daysToDayOfWeek > end) {
	            daysToDayOfWeek -= 7;
	        }

	        if (daysToDayOfWeek < end - 7) {
	            daysToDayOfWeek += 7;
	        }

	        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
	        return {
	            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
	            year: adjustedMoment.year()
	        };
	    }

	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
	        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

	        d = d === 0 ? 7 : d;
	        weekday = weekday != null ? weekday : firstDayOfWeek;
	        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
	        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

	        return {
	            year: dayOfYear > 0 ? year : year - 1,
	            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
	        };
	    }

	    /************************************
	        Top Level Functions
	    ************************************/

	    function makeMoment(config) {
	        var input = config._i,
	            format = config._f,
	            res;

	        config._locale = config._locale || moment.localeData(config._l);

	        if (input === null || (format === undefined && input === '')) {
	            return moment.invalid({nullInput: true});
	        }

	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }

	        if (moment.isMoment(input)) {
	            return new Moment(input, true);
	        } else if (format) {
	            if (isArray(format)) {
	                makeDateFromStringAndArray(config);
	            } else {
	                makeDateFromStringAndFormat(config);
	            }
	        } else {
	            makeDateFromInput(config);
	        }

	        res = new Moment(config);
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }

	        return res;
	    }

	    moment = function (input, format, locale, strict) {
	        var c;

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c = {};
	        c._isAMomentObject = true;
	        c._i = input;
	        c._f = format;
	        c._l = locale;
	        c._strict = strict;
	        c._isUTC = false;
	        c._pf = defaultParsingFlags();

	        return makeMoment(c);
	    };

	    moment.suppressDeprecationWarnings = false;

	    moment.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'https://github.com/moment/moment/issues/1407 for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return moment();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }

	    moment.min = function () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isBefore', args);
	    };

	    moment.max = function () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isAfter', args);
	    };

	    // creating with utc
	    moment.utc = function (input, format, locale, strict) {
	        var c;

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c = {};
	        c._isAMomentObject = true;
	        c._useUTC = true;
	        c._isUTC = true;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	        c._pf = defaultParsingFlags();

	        return makeMoment(c).utc();
	    };

	    // creating with unix timestamp (in seconds)
	    moment.unix = function (input) {
	        return moment(input * 1000);
	    };

	    // duration
	    moment.duration = function (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            parseIso,
	            diffRes;

	        if (moment.isDuration(input)) {
	            duration = {
	                ms: input._milliseconds,
	                d: input._days,
	                M: input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y: 0,
	                d: toInt(match[DATE]) * sign,
	                h: toInt(match[HOUR]) * sign,
	                m: toInt(match[MINUTE]) * sign,
	                s: toInt(match[SECOND]) * sign,
	                ms: toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = isoDurationRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            parseIso = function (inp) {
	                // We'd normally use ~~inp for this, but unfortunately it also
	                // converts floats to ints.
	                // inp may be undefined, so careful calling replace on it.
	                var res = inp && parseFloat(inp.replace(',', '.'));
	                // apply sign while we're at it
	                return (isNaN(res) ? 0 : res) * sign;
	            };
	            duration = {
	                y: parseIso(match[2]),
	                M: parseIso(match[3]),
	                d: parseIso(match[4]),
	                h: parseIso(match[5]),
	                m: parseIso(match[6]),
	                s: parseIso(match[7]),
	                w: parseIso(match[8])
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' &&
	                ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }

	        ret = new Duration(duration);

	        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }

	        return ret;
	    };

	    // version number
	    moment.version = VERSION;

	    // default format
	    moment.defaultFormat = isoFormat;

	    // constant that refers to the ISO standard
	    moment.ISO_8601 = function () {};

	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    moment.momentProperties = momentProperties;

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    moment.updateOffset = function () {};

	    // This function allows you to set a threshold for relative time strings
	    moment.relativeTimeThreshold = function (threshold, limit) {
	        if (relativeTimeThresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return relativeTimeThresholds[threshold];
	        }
	        relativeTimeThresholds[threshold] = limit;
	        return true;
	    };

	    moment.lang = deprecate(
	        'moment.lang is deprecated. Use moment.locale instead.',
	        function (key, value) {
	            return moment.locale(key, value);
	        }
	    );

	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    moment.locale = function (key, values) {
	        var data;
	        if (key) {
	            if (typeof(values) !== 'undefined') {
	                data = moment.defineLocale(key, values);
	            }
	            else {
	                data = moment.localeData(key);
	            }

	            if (data) {
	                moment.duration._locale = moment._locale = data;
	            }
	        }

	        return moment._locale._abbr;
	    };

	    moment.defineLocale = function (name, values) {
	        if (values !== null) {
	            values.abbr = name;
	            if (!locales[name]) {
	                locales[name] = new Locale();
	            }
	            locales[name].set(values);

	            // backwards compat for now: also set the locale
	            moment.locale(name);

	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    };

	    moment.langData = deprecate(
	        'moment.langData is deprecated. Use moment.localeData instead.',
	        function (key) {
	            return moment.localeData(key);
	        }
	    );

	    // returns locale data
	    moment.localeData = function (key) {
	        var locale;

	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }

	        if (!key) {
	            return moment._locale;
	        }

	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }

	        return chooseLocale(key);
	    };

	    // compare moment object
	    moment.isMoment = function (obj) {
	        return obj instanceof Moment ||
	            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
	    };

	    // for typechecking Duration objects
	    moment.isDuration = function (obj) {
	        return obj instanceof Duration;
	    };

	    for (i = lists.length - 1; i >= 0; --i) {
	        makeList(lists[i]);
	    }

	    moment.normalizeUnits = function (units) {
	        return normalizeUnits(units);
	    };

	    moment.invalid = function (flags) {
	        var m = moment.utc(NaN);
	        if (flags != null) {
	            extend(m._pf, flags);
	        }
	        else {
	            m._pf.userInvalidated = true;
	        }

	        return m;
	    };

	    moment.parseZone = function () {
	        return moment.apply(null, arguments).parseZone();
	    };

	    moment.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    moment.isDate = isDate;

	    /************************************
	        Moment Prototype
	    ************************************/


	    extend(moment.fn = Moment.prototype, {

	        clone : function () {
	            return moment(this);
	        },

	        valueOf : function () {
	            return +this._d - ((this._offset || 0) * 60000);
	        },

	        unix : function () {
	            return Math.floor(+this / 1000);
	        },

	        toString : function () {
	            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	        },

	        toDate : function () {
	            return this._offset ? new Date(+this) : this._d;
	        },

	        toISOString : function () {
	            var m = moment(this).utc();
	            if (0 < m.year() && m.year() <= 9999) {
	                if ('function' === typeof Date.prototype.toISOString) {
	                    // native implementation is ~50x faster, use it when we can
	                    return this.toDate().toISOString();
	                } else {
	                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	                }
	            } else {
	                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        },

	        toArray : function () {
	            var m = this;
	            return [
	                m.year(),
	                m.month(),
	                m.date(),
	                m.hours(),
	                m.minutes(),
	                m.seconds(),
	                m.milliseconds()
	            ];
	        },

	        isValid : function () {
	            return isValid(this);
	        },

	        isDSTShifted : function () {
	            if (this._a) {
	                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
	            }

	            return false;
	        },

	        parsingFlags : function () {
	            return extend({}, this._pf);
	        },

	        invalidAt: function () {
	            return this._pf.overflow;
	        },

	        utc : function (keepLocalTime) {
	            return this.utcOffset(0, keepLocalTime);
	        },

	        local : function (keepLocalTime) {
	            if (this._isUTC) {
	                this.utcOffset(0, keepLocalTime);
	                this._isUTC = false;

	                if (keepLocalTime) {
	                    this.subtract(this._dateUtcOffset(), 'm');
	                }
	            }
	            return this;
	        },

	        format : function (inputString) {
	            var output = formatMoment(this, inputString || moment.defaultFormat);
	            return this.localeData().postformat(output);
	        },

	        add : createAdder(1, 'add'),

	        subtract : createAdder(-1, 'subtract'),

	        diff : function (input, units, asFloat) {
	            var that = makeAs(input, this),
	                zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
	                anchor, diff, output, daysAdjust;

	            units = normalizeUnits(units);

	            if (units === 'year' || units === 'month' || units === 'quarter') {
	                output = monthDiff(this, that);
	                if (units === 'quarter') {
	                    output = output / 3;
	                } else if (units === 'year') {
	                    output = output / 12;
	                }
	            } else {
	                diff = this - that;
	                output = units === 'second' ? diff / 1e3 : // 1000
	                    units === 'minute' ? diff / 6e4 : // 1000 * 60
	                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
	                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                    diff;
	            }
	            return asFloat ? output : absRound(output);
	        },

	        from : function (time, withoutSuffix) {
	            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        },

	        fromNow : function (withoutSuffix) {
	            return this.from(moment(), withoutSuffix);
	        },

	        calendar : function (time) {
	            // We want to compare the start of today, vs this.
	            // Getting start-of-today depends on whether we're locat/utc/offset
	            // or not.
	            var now = time || moment(),
	                sod = makeAs(now, this).startOf('day'),
	                diff = this.diff(sod, 'days', true),
	                format = diff < -6 ? 'sameElse' :
	                    diff < -1 ? 'lastWeek' :
	                    diff < 0 ? 'lastDay' :
	                    diff < 1 ? 'sameDay' :
	                    diff < 2 ? 'nextDay' :
	                    diff < 7 ? 'nextWeek' : 'sameElse';
	            return this.format(this.localeData().calendar(format, this, moment(now)));
	        },

	        isLeapYear : function () {
	            return isLeapYear(this.year());
	        },

	        isDST : function () {
	            return (this.utcOffset() > this.clone().month(0).utcOffset() ||
	                this.utcOffset() > this.clone().month(5).utcOffset());
	        },

	        day : function (input) {
	            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	            if (input != null) {
	                input = parseWeekday(input, this.localeData());
	                return this.add(input - day, 'd');
	            } else {
	                return day;
	            }
	        },

	        month : makeAccessor('Month', true),

	        startOf : function (units) {
	            units = normalizeUnits(units);
	            // the following switch intentionally omits break keywords
	            // to utilize falling through the cases.
	            switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'quarter':
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'isoWeek':
	            case 'day':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	                /* falls through */
	            }

	            // weeks are a special case
	            if (units === 'week') {
	                this.weekday(0);
	            } else if (units === 'isoWeek') {
	                this.isoWeekday(1);
	            }

	            // quarters are also special
	            if (units === 'quarter') {
	                this.month(Math.floor(this.month() / 3) * 3);
	            }

	            return this;
	        },

	        endOf: function (units) {
	            units = normalizeUnits(units);
	            if (units === undefined || units === 'millisecond') {
	                return this;
	            }
	            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	        },

	        isAfter: function (input, units) {
	            var inputMs;
	            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	            if (units === 'millisecond') {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this > +input;
	            } else {
	                inputMs = moment.isMoment(input) ? +input : +moment(input);
	                return inputMs < +this.clone().startOf(units);
	            }
	        },

	        isBefore: function (input, units) {
	            var inputMs;
	            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	            if (units === 'millisecond') {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this < +input;
	            } else {
	                inputMs = moment.isMoment(input) ? +input : +moment(input);
	                return +this.clone().endOf(units) < inputMs;
	            }
	        },

	        isBetween: function (from, to, units) {
	            return this.isAfter(from, units) && this.isBefore(to, units);
	        },

	        isSame: function (input, units) {
	            var inputMs;
	            units = normalizeUnits(units || 'millisecond');
	            if (units === 'millisecond') {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this === +input;
	            } else {
	                inputMs = +moment(input);
	                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
	            }
	        },

	        min: deprecate(
	                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
	                 function (other) {
	                     other = moment.apply(null, arguments);
	                     return other < this ? this : other;
	                 }
	         ),

	        max: deprecate(
	                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
	                function (other) {
	                    other = moment.apply(null, arguments);
	                    return other > this ? this : other;
	                }
	        ),

	        zone : deprecate(
	                'moment().zone is deprecated, use moment().utcOffset instead. ' +
	                'https://github.com/moment/moment/issues/1779',
	                function (input, keepLocalTime) {
	                    if (input != null) {
	                        if (typeof input !== 'string') {
	                            input = -input;
	                        }

	                        this.utcOffset(input, keepLocalTime);

	                        return this;
	                    } else {
	                        return -this.utcOffset();
	                    }
	                }
	        ),

	        // keepLocalTime = true means only change the timezone, without
	        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	        // +0200, so we adjust the time as needed, to be valid.
	        //
	        // Keeping the time actually adds/subtracts (one hour)
	        // from the actual represented time. That is why we call updateOffset
	        // a second time. In case it wants us to change the offset again
	        // _changeInProgress == true case, then we have to adjust, because
	        // there is no such time in the given timezone.
	        utcOffset : function (input, keepLocalTime) {
	            var offset = this._offset || 0,
	                localAdjust;
	            if (input != null) {
	                if (typeof input === 'string') {
	                    input = utcOffsetFromString(input);
	                }
	                if (Math.abs(input) < 16) {
	                    input = input * 60;
	                }
	                if (!this._isUTC && keepLocalTime) {
	                    localAdjust = this._dateUtcOffset();
	                }
	                this._offset = input;
	                this._isUTC = true;
	                if (localAdjust != null) {
	                    this.add(localAdjust, 'm');
	                }
	                if (offset !== input) {
	                    if (!keepLocalTime || this._changeInProgress) {
	                        addOrSubtractDurationFromMoment(this,
	                                moment.duration(input - offset, 'm'), 1, false);
	                    } else if (!this._changeInProgress) {
	                        this._changeInProgress = true;
	                        moment.updateOffset(this, true);
	                        this._changeInProgress = null;
	                    }
	                }

	                return this;
	            } else {
	                return this._isUTC ? offset : this._dateUtcOffset();
	            }
	        },

	        isLocal : function () {
	            return !this._isUTC;
	        },

	        isUtcOffset : function () {
	            return this._isUTC;
	        },

	        isUtc : function () {
	            return this._isUTC && this._offset === 0;
	        },

	        zoneAbbr : function () {
	            return this._isUTC ? 'UTC' : '';
	        },

	        zoneName : function () {
	            return this._isUTC ? 'Coordinated Universal Time' : '';
	        },

	        parseZone : function () {
	            if (this._tzm) {
	                this.utcOffset(this._tzm);
	            } else if (typeof this._i === 'string') {
	                this.utcOffset(utcOffsetFromString(this._i));
	            }
	            return this;
	        },

	        hasAlignedHourOffset : function (input) {
	            if (!input) {
	                input = 0;
	            }
	            else {
	                input = moment(input).utcOffset();
	            }

	            return (this.utcOffset() - input) % 60 === 0;
	        },

	        daysInMonth : function () {
	            return daysInMonth(this.year(), this.month());
	        },

	        dayOfYear : function (input) {
	            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
	            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	        },

	        quarter : function (input) {
	            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	        },

	        weekYear : function (input) {
	            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
	            return input == null ? year : this.add((input - year), 'y');
	        },

	        isoWeekYear : function (input) {
	            var year = weekOfYear(this, 1, 4).year;
	            return input == null ? year : this.add((input - year), 'y');
	        },

	        week : function (input) {
	            var week = this.localeData().week(this);
	            return input == null ? week : this.add((input - week) * 7, 'd');
	        },

	        isoWeek : function (input) {
	            var week = weekOfYear(this, 1, 4).week;
	            return input == null ? week : this.add((input - week) * 7, 'd');
	        },

	        weekday : function (input) {
	            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	            return input == null ? weekday : this.add(input - weekday, 'd');
	        },

	        isoWeekday : function (input) {
	            // behaves the same as moment#day except
	            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	            // as a setter, sunday should belong to the previous week.
	            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	        },

	        isoWeeksInYear : function () {
	            return weeksInYear(this.year(), 1, 4);
	        },

	        weeksInYear : function () {
	            var weekInfo = this.localeData()._week;
	            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	        },

	        get : function (units) {
	            units = normalizeUnits(units);
	            return this[units]();
	        },

	        set : function (units, value) {
	            var unit;
	            if (typeof units === 'object') {
	                for (unit in units) {
	                    this.set(unit, units[unit]);
	                }
	            }
	            else {
	                units = normalizeUnits(units);
	                if (typeof this[units] === 'function') {
	                    this[units](value);
	                }
	            }
	            return this;
	        },

	        // If passed a locale key, it will set the locale for this
	        // instance.  Otherwise, it will return the locale configuration
	        // variables for this instance.
	        locale : function (key) {
	            var newLocaleData;

	            if (key === undefined) {
	                return this._locale._abbr;
	            } else {
	                newLocaleData = moment.localeData(key);
	                if (newLocaleData != null) {
	                    this._locale = newLocaleData;
	                }
	                return this;
	            }
	        },

	        lang : deprecate(
	            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	            function (key) {
	                if (key === undefined) {
	                    return this.localeData();
	                } else {
	                    return this.locale(key);
	                }
	            }
	        ),

	        localeData : function () {
	            return this._locale;
	        },

	        _dateUtcOffset : function () {
	            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	            // https://github.com/moment/moment/pull/1871
	            return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
	        }

	    });

	    function rawMonthSetter(mom, value) {
	        var dayOfMonth;

	        // TODO: Move this out of here!
	        if (typeof value === 'string') {
	            value = mom.localeData().monthsParse(value);
	            // TODO: Another silent failure?
	            if (typeof value !== 'number') {
	                return mom;
	            }
	        }

	        dayOfMonth = Math.min(mom.date(),
	                daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }

	    function rawGetter(mom, unit) {
	        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
	    }

	    function rawSetter(mom, unit, value) {
	        if (unit === 'Month') {
	            return rawMonthSetter(mom, value);
	        } else {
	            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }

	    function makeAccessor(unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                rawSetter(this, unit, value);
	                moment.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return rawGetter(this, unit);
	            }
	        };
	    }

	    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
	    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
	    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
	    // moment.fn.month is defined separately
	    moment.fn.date = makeAccessor('Date', true);
	    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
	    moment.fn.year = makeAccessor('FullYear', true);
	    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

	    // add plural methods
	    moment.fn.days = moment.fn.day;
	    moment.fn.months = moment.fn.month;
	    moment.fn.weeks = moment.fn.week;
	    moment.fn.isoWeeks = moment.fn.isoWeek;
	    moment.fn.quarters = moment.fn.quarter;

	    // add aliased format methods
	    moment.fn.toJSON = moment.fn.toISOString;

	    // alias isUtc for dev-friendliness
	    moment.fn.isUTC = moment.fn.isUtc;

	    /************************************
	        Duration Prototype
	    ************************************/


	    function daysToYears (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        return days * 400 / 146097;
	    }

	    function yearsToDays (years) {
	        // years * 365 + absRound(years / 4) -
	        //     absRound(years / 100) + absRound(years / 400);
	        return years * 146097 / 400;
	    }

	    extend(moment.duration.fn = Duration.prototype, {

	        _bubble : function () {
	            var milliseconds = this._milliseconds,
	                days = this._days,
	                months = this._months,
	                data = this._data,
	                seconds, minutes, hours, years = 0;

	            // The following code bubbles up values, see the tests for
	            // examples of what that means.
	            data.milliseconds = milliseconds % 1000;

	            seconds = absRound(milliseconds / 1000);
	            data.seconds = seconds % 60;

	            minutes = absRound(seconds / 60);
	            data.minutes = minutes % 60;

	            hours = absRound(minutes / 60);
	            data.hours = hours % 24;

	            days += absRound(hours / 24);

	            // Accurately convert days to years, assume start from year 0.
	            years = absRound(daysToYears(days));
	            days -= absRound(yearsToDays(years));

	            // 30 days to a month
	            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
	            months += absRound(days / 30);
	            days %= 30;

	            // 12 months -> 1 year
	            years += absRound(months / 12);
	            months %= 12;

	            data.days = days;
	            data.months = months;
	            data.years = years;
	        },

	        abs : function () {
	            this._milliseconds = Math.abs(this._milliseconds);
	            this._days = Math.abs(this._days);
	            this._months = Math.abs(this._months);

	            this._data.milliseconds = Math.abs(this._data.milliseconds);
	            this._data.seconds = Math.abs(this._data.seconds);
	            this._data.minutes = Math.abs(this._data.minutes);
	            this._data.hours = Math.abs(this._data.hours);
	            this._data.months = Math.abs(this._data.months);
	            this._data.years = Math.abs(this._data.years);

	            return this;
	        },

	        weeks : function () {
	            return absRound(this.days() / 7);
	        },

	        valueOf : function () {
	            return this._milliseconds +
	              this._days * 864e5 +
	              (this._months % 12) * 2592e6 +
	              toInt(this._months / 12) * 31536e6;
	        },

	        humanize : function (withSuffix) {
	            var output = relativeTime(this, !withSuffix, this.localeData());

	            if (withSuffix) {
	                output = this.localeData().pastFuture(+this, output);
	            }

	            return this.localeData().postformat(output);
	        },

	        add : function (input, val) {
	            // supports only 2.0-style add(1, 's') or add(moment)
	            var dur = moment.duration(input, val);

	            this._milliseconds += dur._milliseconds;
	            this._days += dur._days;
	            this._months += dur._months;

	            this._bubble();

	            return this;
	        },

	        subtract : function (input, val) {
	            var dur = moment.duration(input, val);

	            this._milliseconds -= dur._milliseconds;
	            this._days -= dur._days;
	            this._months -= dur._months;

	            this._bubble();

	            return this;
	        },

	        get : function (units) {
	            units = normalizeUnits(units);
	            return this[units.toLowerCase() + 's']();
	        },

	        as : function (units) {
	            var days, months;
	            units = normalizeUnits(units);

	            if (units === 'month' || units === 'year') {
	                days = this._days + this._milliseconds / 864e5;
	                months = this._months + daysToYears(days) * 12;
	                return units === 'month' ? months : months / 12;
	            } else {
	                // handle milliseconds separately because of floating point math errors (issue #1867)
	                days = this._days + Math.round(yearsToDays(this._months / 12));
	                switch (units) {
	                    case 'week': return days / 7 + this._milliseconds / 6048e5;
	                    case 'day': return days + this._milliseconds / 864e5;
	                    case 'hour': return days * 24 + this._milliseconds / 36e5;
	                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
	                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
	                    // Math.floor prevents floating point math errors here
	                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
	                    default: throw new Error('Unknown unit ' + units);
	                }
	            }
	        },

	        lang : moment.fn.lang,
	        locale : moment.fn.locale,

	        toIsoString : deprecate(
	            'toIsoString() is deprecated. Please use toISOString() instead ' +
	            '(notice the capitals)',
	            function () {
	                return this.toISOString();
	            }
	        ),

	        toISOString : function () {
	            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	            var years = Math.abs(this.years()),
	                months = Math.abs(this.months()),
	                days = Math.abs(this.days()),
	                hours = Math.abs(this.hours()),
	                minutes = Math.abs(this.minutes()),
	                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

	            if (!this.asSeconds()) {
	                // this is the same as C#'s (Noda) and python (isodate)...
	                // but not other JS (goog.date)
	                return 'P0D';
	            }

	            return (this.asSeconds() < 0 ? '-' : '') +
	                'P' +
	                (years ? years + 'Y' : '') +
	                (months ? months + 'M' : '') +
	                (days ? days + 'D' : '') +
	                ((hours || minutes || seconds) ? 'T' : '') +
	                (hours ? hours + 'H' : '') +
	                (minutes ? minutes + 'M' : '') +
	                (seconds ? seconds + 'S' : '');
	        },

	        localeData : function () {
	            return this._locale;
	        },

	        toJSON : function () {
	            return this.toISOString();
	        }
	    });

	    moment.duration.fn.toString = moment.duration.fn.toISOString;

	    function makeDurationGetter(name) {
	        moment.duration.fn[name] = function () {
	            return this._data[name];
	        };
	    }

	    for (i in unitMillisecondFactors) {
	        if (hasOwnProp(unitMillisecondFactors, i)) {
	            makeDurationGetter(i.toLowerCase());
	        }
	    }

	    moment.duration.fn.asMilliseconds = function () {
	        return this.as('ms');
	    };
	    moment.duration.fn.asSeconds = function () {
	        return this.as('s');
	    };
	    moment.duration.fn.asMinutes = function () {
	        return this.as('m');
	    };
	    moment.duration.fn.asHours = function () {
	        return this.as('h');
	    };
	    moment.duration.fn.asDays = function () {
	        return this.as('d');
	    };
	    moment.duration.fn.asWeeks = function () {
	        return this.as('weeks');
	    };
	    moment.duration.fn.asMonths = function () {
	        return this.as('M');
	    };
	    moment.duration.fn.asYears = function () {
	        return this.as('y');
	    };

	    /************************************
	        Default Locale
	    ************************************/


	    // Set default locale, other locale will inherit from English.
	    moment.locale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    /* EMBED_LOCALES */

	    /************************************
	        Exposing Moment
	    ************************************/

	    function makeGlobal(shouldDeprecate) {
	        /*global ender:false */
	        if (typeof ender !== 'undefined') {
	            return;
	        }
	        oldGlobalMoment = globalScope.moment;
	        if (shouldDeprecate) {
	            globalScope.moment = deprecate(
	                    'Accessing Moment through the global scope is ' +
	                    'deprecated, and will be removed in an upcoming ' +
	                    'release.',
	                    moment);
	        } else {
	            globalScope.moment = moment;
	        }
	    }

	    // CommonJS module is defined
	    if (hasModule) {
	        module.exports = moment;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	            if (module.config && module.config() && module.config().noGlobal === true) {
	                // release the global variable
	                globalScope.moment = oldGlobalMoment;
	            }

	            return moment;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        makeGlobal(true);
	    } else {
	        makeGlobal();
	    }
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(269)(module)))

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 189,
		"./af.js": 189,
		"./ar": 193,
		"./ar-ma": 190,
		"./ar-ma.js": 190,
		"./ar-sa": 191,
		"./ar-sa.js": 191,
		"./ar-tn": 192,
		"./ar-tn.js": 192,
		"./ar.js": 193,
		"./az": 194,
		"./az.js": 194,
		"./be": 195,
		"./be.js": 195,
		"./bg": 196,
		"./bg.js": 196,
		"./bn": 197,
		"./bn.js": 197,
		"./bo": 198,
		"./bo.js": 198,
		"./br": 199,
		"./br.js": 199,
		"./bs": 200,
		"./bs.js": 200,
		"./ca": 201,
		"./ca.js": 201,
		"./cs": 202,
		"./cs.js": 202,
		"./cv": 203,
		"./cv.js": 203,
		"./cy": 204,
		"./cy.js": 204,
		"./da": 205,
		"./da.js": 205,
		"./de": 207,
		"./de-at": 206,
		"./de-at.js": 206,
		"./de.js": 207,
		"./el": 208,
		"./el.js": 208,
		"./en-au": 209,
		"./en-au.js": 209,
		"./en-ca": 210,
		"./en-ca.js": 210,
		"./en-gb": 211,
		"./en-gb.js": 211,
		"./eo": 212,
		"./eo.js": 212,
		"./es": 213,
		"./es.js": 213,
		"./et": 214,
		"./et.js": 214,
		"./eu": 215,
		"./eu.js": 215,
		"./fa": 216,
		"./fa.js": 216,
		"./fi": 217,
		"./fi.js": 217,
		"./fo": 218,
		"./fo.js": 218,
		"./fr": 220,
		"./fr-ca": 219,
		"./fr-ca.js": 219,
		"./fr.js": 220,
		"./fy": 221,
		"./fy.js": 221,
		"./gl": 222,
		"./gl.js": 222,
		"./he": 223,
		"./he.js": 223,
		"./hi": 224,
		"./hi.js": 224,
		"./hr": 225,
		"./hr.js": 225,
		"./hu": 226,
		"./hu.js": 226,
		"./hy-am": 227,
		"./hy-am.js": 227,
		"./id": 228,
		"./id.js": 228,
		"./is": 229,
		"./is.js": 229,
		"./it": 230,
		"./it.js": 230,
		"./ja": 231,
		"./ja.js": 231,
		"./ka": 232,
		"./ka.js": 232,
		"./km": 233,
		"./km.js": 233,
		"./ko": 234,
		"./ko.js": 234,
		"./lb": 235,
		"./lb.js": 235,
		"./lt": 236,
		"./lt.js": 236,
		"./lv": 237,
		"./lv.js": 237,
		"./mk": 238,
		"./mk.js": 238,
		"./ml": 239,
		"./ml.js": 239,
		"./mr": 240,
		"./mr.js": 240,
		"./ms-my": 241,
		"./ms-my.js": 241,
		"./my": 242,
		"./my.js": 242,
		"./nb": 243,
		"./nb.js": 243,
		"./ne": 244,
		"./ne.js": 244,
		"./nl": 245,
		"./nl.js": 245,
		"./nn": 246,
		"./nn.js": 246,
		"./pl": 247,
		"./pl.js": 247,
		"./pt": 249,
		"./pt-br": 248,
		"./pt-br.js": 248,
		"./pt.js": 249,
		"./ro": 250,
		"./ro.js": 250,
		"./ru": 251,
		"./ru.js": 251,
		"./sk": 252,
		"./sk.js": 252,
		"./sl": 253,
		"./sl.js": 253,
		"./sq": 254,
		"./sq.js": 254,
		"./sr": 257,
		"./sr-cyrl": 255,
		"./sr-cyrl.js": 255,
		"./sr.js": 257,
		"./sv": 256,
		"./sv.js": 256,
		"./ta": 258,
		"./ta.js": 258,
		"./th": 259,
		"./th.js": 259,
		"./tl-ph": 260,
		"./tl-ph.js": 260,
		"./tr": 261,
		"./tr.js": 261,
		"./tzm": 263,
		"./tzm-latn": 262,
		"./tzm-latn.js": 262,
		"./tzm.js": 263,
		"./uk": 264,
		"./uk.js": 264,
		"./uz": 265,
		"./uz.js": 265,
		"./vi": 266,
		"./vi.js": 266,
		"./zh-cn": 267,
		"./zh-cn.js": 267,
		"./zh-tw": 268,
		"./zh-tw.js": 268
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
	webpackContext.id = 188;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : afrikaans (af)
	// author : Werner Mollentze : https://github.com/wernerm

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('af', {
	        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	        meridiemParse: /vm|nm/i,
	        isPM : function (input) {
	            return /^nm$/i.test(input);
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'vm' : 'VM';
	            } else {
	                return isLower ? 'nm' : 'NM';
	            }
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Vandag om] LT',
	            nextDay : '[Môre om] LT',
	            nextWeek : 'dddd [om] LT',
	            lastDay : '[Gister om] LT',
	            lastWeek : '[Laas] dddd [om] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'oor %s',
	            past : '%s gelede',
	            s : '\'n paar sekondes',
	            m : '\'n minuut',
	            mm : '%d minute',
	            h : '\'n uur',
	            hh : '%d ure',
	            d : '\'n dag',
	            dd : '%d dae',
	            M : '\'n maand',
	            MM : '%d maande',
	            y : '\'n jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
	        },
	        week : {
	            dow : 1, // Maandag is die eerste dag van die week.
	            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	        }
	    });
	}));


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Moroccan Arabic (ar-ma)
	// author : ElFadili Yassine : https://github.com/ElFadiliY
	// author : Abdel Said : https://github.com/abdelsaid

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ar-ma', {
	        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Arabic Saudi Arabia (ar-sa)
	// author : Suhail Alkowaileet : https://github.com/xsoh

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    };

	    return moment.defineLocale('ar-sa', {
	        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        preparse: function (string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale  : Tunisian Arabic (ar-tn)

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ar-tn', {
	        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'LT:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY LT',
	            LLLL: 'dddd D MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// Locale: Arabic (ar)
	// Author: Abdel Said: https://github.com/abdelsaid
	// Changes in months, weekdays: Ahmed Elkhatib
	// Native plural forms: forabi https://github.com/forabi

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    }, pluralForm = function (n) {
	        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	    }, plurals = {
	        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	    }, pluralize = function (u) {
	        return function (number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[u][pluralForm(number)];
	            if (f === 2) {
	                str = str[withoutSuffix ? 0 : 1];
	            }
	            return str.replace(/%d/i, number);
	        };
	    }, months = [
	        'كانون الثاني يناير',
	        'شباط فبراير',
	        'آذار مارس',
	        'نيسان أبريل',
	        'أيار مايو',
	        'حزيران يونيو',
	        'تموز يوليو',
	        'آب أغسطس',
	        'أيلول سبتمبر',
	        'تشرين الأول أكتوبر',
	        'تشرين الثاني نوفمبر',
	        'كانون الأول ديسمبر'
	    ];

	    return moment.defineLocale('ar', {
	        months : months,
	        monthsShort : months,
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'بعد %s',
	            past : 'منذ %s',
	            s : pluralize('s'),
	            m : pluralize('m'),
	            mm : pluralize('m'),
	            h : pluralize('h'),
	            hh : pluralize('h'),
	            d : pluralize('d'),
	            dd : pluralize('d'),
	            M : pluralize('M'),
	            MM : pluralize('M'),
	            y : pluralize('y'),
	            yy : pluralize('y')
	        },
	        preparse: function (string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : azerbaijani (az)
	// author : topchiyev : https://github.com/topchiyev

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var suffixes = {
	        1: '-inci',
	        5: '-inci',
	        8: '-inci',
	        70: '-inci',
	        80: '-inci',

	        2: '-nci',
	        7: '-nci',
	        20: '-nci',
	        50: '-nci',

	        3: '-üncü',
	        4: '-üncü',
	        100: '-üncü',

	        6: '-ncı',

	        9: '-uncu',
	        10: '-uncu',
	        30: '-uncu',

	        60: '-ıncı',
	        90: '-ıncı'
	    };
	    return moment.defineLocale('az', {
	        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[sabah saat] LT',
	            nextWeek : '[gələn həftə] dddd [saat] LT',
	            lastDay : '[dünən] LT',
	            lastWeek : '[keçən həftə] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s əvvəl',
	            s : 'birneçə saniyyə',
	            m : 'bir dəqiqə',
	            mm : '%d dəqiqə',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir il',
	            yy : '%d il'
	        },
	        meridiemParse: /gecə|səhər|gündüz|axşam/,
	        isPM : function (input) {
	            return /^(gündüz|axşam)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'gecə';
	            } else if (hour < 12) {
	                return 'səhər';
	            } else if (hour < 17) {
	                return 'gündüz';
	            } else {
	                return 'axşam';
	            }
	        },
	        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '-ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;

	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : belarusian (be)
	// author : Dmitry Demidov : https://github.com/demidov91
	// author: Praleska: http://praleska.pro/
	// Author : Menelion Elensúle : https://github.com/Oire

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	            'dd': 'дзень_дні_дзён',
	            'MM': 'месяц_месяцы_месяцаў',
	            'yy': 'год_гады_гадоў'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвіліна' : 'хвіліну';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'гадзіна' : 'гадзіну';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }

	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
	            'accusative': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_')
	        },

	        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	            'accusative': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')
	        },

	        nounCase = (/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/).test(format) ?
	            'accusative' :
	            'nominative';

	        return weekdays[nounCase][m.day()];
	    }

	    return moment.defineLocale('be', {
	        months : monthsCaseReplace,
	        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., LT',
	            LLLL : 'dddd, D MMMM YYYY г., LT'
	        },
	        calendar : {
	            sameDay: '[Сёння ў] LT',
	            nextDay: '[Заўтра ў] LT',
	            lastDay: '[Учора ў] LT',
	            nextWeek: function () {
	                return '[У] dddd [ў] LT';
	            },
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 5:
	                case 6:
	                    return '[У мінулую] dddd [ў] LT';
	                case 1:
	                case 2:
	                case 4:
	                    return '[У мінулы] dddd [ў] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'праз %s',
	            past : '%s таму',
	            s : 'некалькі секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : relativeTimeWithPlural,
	            hh : relativeTimeWithPlural,
	            d : 'дзень',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },
	        meridiemParse: /ночы|раніцы|дня|вечара/,
	        isPM : function (input) {
	            return /^(дня|вечара)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночы';
	            } else if (hour < 12) {
	                return 'раніцы';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечара';
	            }
	        },

	        ordinalParse: /\d{1,2}-(і|ы|га)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	            case 'w':
	            case 'W':
	                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
	            case 'D':
	                return number + '-га';
	            default:
	                return number;
	            }
	        },

	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : bulgarian (bg)
	// author : Krasen Borisov : https://github.com/kraz

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('bg', {
	        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Днес в] LT',
	            nextDay : '[Утре в] LT',
	            nextWeek : 'dddd [в] LT',
	            lastDay : '[Вчера в] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[В изминалата] dddd [в] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[В изминалия] dddd [в] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'след %s',
	            past : 'преди %s',
	            s : 'няколко секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дни',
	            M : 'месец',
	            MM : '%d месеца',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Bengali (bn)
	// author : Kaushik Gandhi : https://github.com/kaushikgandhi

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '১',
	        '2': '২',
	        '3': '৩',
	        '4': '৪',
	        '5': '৫',
	        '6': '৬',
	        '7': '৭',
	        '8': '৮',
	        '9': '৯',
	        '0': '০'
	    },
	    numberMap = {
	        '১': '1',
	        '২': '2',
	        '৩': '3',
	        '৪': '4',
	        '৫': '5',
	        '৬': '6',
	        '৭': '7',
	        '৮': '8',
	        '৯': '9',
	        '০': '0'
	    };

	    return moment.defineLocale('bn', {
	        months : 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	        monthsShort : 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
	        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),
	        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),
	        weekdaysMin : 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm সময়',
	            LTS : 'A h:mm:ss সময়',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[আজ] LT',
	            nextDay : '[আগামীকাল] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[গতকাল] LT',
	            lastWeek : '[গত] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s পরে',
	            past : '%s আগে',
	            s : 'কএক সেকেন্ড',
	            m : 'এক মিনিট',
	            mm : '%d মিনিট',
	            h : 'এক ঘন্টা',
	            hh : '%d ঘন্টা',
	            d : 'এক দিন',
	            dd : '%d দিন',
	            M : 'এক মাস',
	            MM : '%d মাস',
	            y : 'এক বছর',
	            yy : '%d বছর'
	        },
	        preparse: function (string) {
	            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,
	        isPM: function (input) {
	            return /^(দুপুর|বিকেল|রাত)$/.test(input);
	        },
	        //Bengali is a vast language its spoken
	        //in different forms in various parts of the world.
	        //I have just generalized with most common one used
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'রাত';
	            } else if (hour < 10) {
	                return 'শকাল';
	            } else if (hour < 17) {
	                return 'দুপুর';
	            } else if (hour < 20) {
	                return 'বিকেল';
	            } else {
	                return 'রাত';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : tibetan (bo)
	// author : Thupten N. Chakrishar : https://github.com/vajradog

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '༡',
	        '2': '༢',
	        '3': '༣',
	        '4': '༤',
	        '5': '༥',
	        '6': '༦',
	        '7': '༧',
	        '8': '༨',
	        '9': '༩',
	        '0': '༠'
	    },
	    numberMap = {
	        '༡': '1',
	        '༢': '2',
	        '༣': '3',
	        '༤': '4',
	        '༥': '5',
	        '༦': '6',
	        '༧': '7',
	        '༨': '8',
	        '༩': '9',
	        '༠': '0'
	    };

	    return moment.defineLocale('bo', {
	        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[དི་རིང] LT',
	            nextDay : '[སང་ཉིན] LT',
	            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
	            lastDay : '[ཁ་སང] LT',
	            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ལ་',
	            past : '%s སྔན་ལ',
	            s : 'ལམ་སང',
	            m : 'སྐར་མ་གཅིག',
	            mm : '%d སྐར་མ',
	            h : 'ཆུ་ཚོད་གཅིག',
	            hh : '%d ཆུ་ཚོད',
	            d : 'ཉིན་གཅིག',
	            dd : '%d ཉིན་',
	            M : 'ཟླ་བ་གཅིག',
	            MM : '%d ཟླ་བ',
	            y : 'ལོ་གཅིག',
	            yy : '%d ལོ'
	        },
	        preparse: function (string) {
	            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	        isPM: function (input) {
	            return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'མཚན་མོ';
	            } else if (hour < 10) {
	                return 'ཞོགས་ཀས';
	            } else if (hour < 17) {
	                return 'ཉིན་གུང';
	            } else if (hour < 20) {
	                return 'དགོང་དག';
	            } else {
	                return 'མཚན་མོ';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : breton (br)
	// author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'munutenn',
	            'MM': 'miz',
	            'dd': 'devezh'
	        };
	        return number + ' ' + mutation(format[key], number);
	    }

	    function specialMutationForYears(number) {
	        switch (lastNumber(number)) {
	        case 1:
	        case 3:
	        case 4:
	        case 5:
	        case 9:
	            return number + ' bloaz';
	        default:
	            return number + ' vloaz';
	        }
	    }

	    function lastNumber(number) {
	        if (number > 9) {
	            return lastNumber(number % 10);
	        }
	        return number;
	    }

	    function mutation(text, number) {
	        if (number === 2) {
	            return softMutation(text);
	        }
	        return text;
	    }

	    function softMutation(text) {
	        var mutationTable = {
	            'm': 'v',
	            'b': 'v',
	            'd': 'z'
	        };
	        if (mutationTable[text.charAt(0)] === undefined) {
	            return text;
	        }
	        return mutationTable[text.charAt(0)] + text.substring(1);
	    }

	    return moment.defineLocale('br', {
	        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h[e]mm A',
	            LTS : 'h[e]mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D [a viz] MMMM YYYY',
	            LLL : 'D [a viz] MMMM YYYY LT',
	            LLLL : 'dddd, D [a viz] MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Hiziv da] LT',
	            nextDay : '[Warc\'hoazh da] LT',
	            nextWeek : 'dddd [da] LT',
	            lastDay : '[Dec\'h da] LT',
	            lastWeek : 'dddd [paset da] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'a-benn %s',
	            past : '%s \'zo',
	            s : 'un nebeud segondennoù',
	            m : 'ur vunutenn',
	            mm : relativeTimeWithMutation,
	            h : 'un eur',
	            hh : '%d eur',
	            d : 'un devezh',
	            dd : relativeTimeWithMutation,
	            M : 'ur miz',
	            MM : relativeTimeWithMutation,
	            y : 'ur bloaz',
	            yy : specialMutationForYears
	        },
	        ordinalParse: /\d{1,2}(añ|vet)/,
	        ordinal : function (number) {
	            var output = (number === 1) ? 'añ' : 'vet';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : bosnian (bs)
	// author : Nedim Cholich : https://github.com/frontyard
	// based on (hr) translation by Bojan Marković

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minuta';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	            if (number === 1) {
	                result += 'sat';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'sata';
	            } else {
	                result += 'sati';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dana';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mjesec';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'mjeseca';
	            } else {
	                result += 'mjeseci';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'godina';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'godine';
	            } else {
	                result += 'godina';
	            }
	            return result;
	        }
	    }

	    return moment.defineLocale('bs', {
	        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',

	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                    return '[prošlu] dddd [u] LT';
	                case 6:
	                    return '[prošle] [subote] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : catalan (ca)
	// author : Juan G. Hurtado : https://github.com/juanghurtado

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ca', {
	        months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
	        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextDay : function () {
	                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastDay : function () {
	                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'fa %s',
	            s : 'uns segons',
	            m : 'un minut',
	            mm : '%d minuts',
	            h : 'una hora',
	            hh : '%d hores',
	            d : 'un dia',
	            dd : '%d dies',
	            M : 'un mes',
	            MM : '%d mesos',
	            y : 'un any',
	            yy : '%d anys'
	        },
	        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal : function (number, period) {
	            var output = (number === 1) ? 'r' :
	                (number === 2) ? 'n' :
	                (number === 3) ? 'r' :
	                (number === 4) ? 't' : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : czech (cs)
	// author : petrbela : https://github.com/petrbela

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

	    function plural(n) {
	        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
	    }

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':  // a few seconds / in a few seconds / a few seconds ago
	            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
	        case 'm':  // a minute / in a minute / a minute ago
	            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
	        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'minuty' : 'minut');
	            } else {
	                return result + 'minutami';
	            }
	            break;
	        case 'h':  // an hour / in an hour / an hour ago
	            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh': // 9 hours / in 9 hours / 9 hours ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'hodiny' : 'hodin');
	            } else {
	                return result + 'hodinami';
	            }
	            break;
	        case 'd':  // a day / in a day / a day ago
	            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
	        case 'dd': // 9 days / in 9 days / 9 days ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'dny' : 'dní');
	            } else {
	                return result + 'dny';
	            }
	            break;
	        case 'M':  // a month / in a month / a month ago
	            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
	        case 'MM': // 9 months / in 9 months / 9 months ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'měsíce' : 'měsíců');
	            } else {
	                return result + 'měsíci';
	            }
	            break;
	        case 'y':  // a year / in a year / a year ago
	            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
	        case 'yy': // 9 years / in 9 years / 9 years ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'roky' : 'let');
	            } else {
	                return result + 'lety';
	            }
	            break;
	        }
	    }

	    return moment.defineLocale('cs', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParse : (function (months, monthsShort) {
	            var i, _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        }(months, monthsShort)),
	        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
	        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[dnes v] LT',
	            nextDay: '[zítra v] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v neděli v] LT';
	                case 1:
	                case 2:
	                    return '[v] dddd [v] LT';
	                case 3:
	                    return '[ve středu v] LT';
	                case 4:
	                    return '[ve čtvrtek v] LT';
	                case 5:
	                    return '[v pátek v] LT';
	                case 6:
	                    return '[v sobotu v] LT';
	                }
	            },
	            lastDay: '[včera v] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[minulou neděli v] LT';
	                case 1:
	                case 2:
	                    return '[minulé] dddd [v] LT';
	                case 3:
	                    return '[minulou středu v] LT';
	                case 4:
	                case 5:
	                    return '[minulý] dddd [v] LT';
	                case 6:
	                    return '[minulou sobotu v] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'před %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse : /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : chuvash (cv)
	// author : Anatoly Mironov : https://github.com/mirontoli

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('cv', {
	        months : 'кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав'.split('_'),
	        monthsShort : 'кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш'.split('_'),
	        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун'.split('_'),
	        weekdaysShort : 'выр_тун_ытл_юн_кĕç_эрн_шăм'.split('_'),
	        weekdaysMin : 'вр_тн_ыт_юн_кç_эр_шм'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]',
	            LLL : 'YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT',
	            LLLL : 'dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT'
	        },
	        calendar : {
	            sameDay: '[Паян] LT [сехетре]',
	            nextDay: '[Ыран] LT [сехетре]',
	            lastDay: '[Ĕнер] LT [сехетре]',
	            nextWeek: '[Çитес] dddd LT [сехетре]',
	            lastWeek: '[Иртнĕ] dddd LT [сехетре]',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (output) {
	                var affix = /сехет$/i.exec(output) ? 'рен' : /çул$/i.exec(output) ? 'тан' : 'ран';
	                return output + affix;
	            },
	            past : '%s каялла',
	            s : 'пĕр-ик çеккунт',
	            m : 'пĕр минут',
	            mm : '%d минут',
	            h : 'пĕр сехет',
	            hh : '%d сехет',
	            d : 'пĕр кун',
	            dd : '%d кун',
	            M : 'пĕр уйăх',
	            MM : '%d уйăх',
	            y : 'пĕр çул',
	            yy : '%d çул'
	        },
	        ordinalParse: /\d{1,2}-мĕш/,
	        ordinal : '%d-мĕш',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Welsh (cy)
	// author : Robert Allen

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('cy', {
	        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	        // time formats are the same as en-gb
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'LT:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY LT',
	            LLLL: 'dddd, D MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[Heddiw am] LT',
	            nextDay: '[Yfory am] LT',
	            nextWeek: 'dddd [am] LT',
	            lastDay: '[Ddoe am] LT',
	            lastWeek: 'dddd [diwethaf am] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'mewn %s',
	            past: '%s yn ôl',
	            s: 'ychydig eiliadau',
	            m: 'munud',
	            mm: '%d munud',
	            h: 'awr',
	            hh: '%d awr',
	            d: 'diwrnod',
	            dd: '%d diwrnod',
	            M: 'mis',
	            MM: '%d mis',
	            y: 'blwyddyn',
	            yy: '%d flynedd'
	        },
	        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	        ordinal: function (number) {
	            var b = number,
	                output = '',
	                lookup = [
	                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
	                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	                ];

	            if (b > 20) {
	                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                    output = 'fed'; // not 30ain, 70ain or 90ain
	                } else {
	                    output = 'ain';
	                }
	            } else if (b > 0) {
	                output = lookup[b];
	            }

	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : danish (da)
	// author : Ulrik Nielsen : https://github.com/mrbase

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('da', {
	        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd [d.] D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[I dag kl.] LT',
	            nextDay : '[I morgen kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[I går kl.] LT',
	            lastWeek : '[sidste] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s siden',
	            s : 'få sekunder',
	            m : 'et minut',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dage',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'et år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : austrian german (de-at)
	// author : lluchs : https://github.com/lluchs
	// author: Menelion Elensúle: https://github.com/Oire
	// author : Martin Groller : https://github.com/MadMG

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    return moment.defineLocale('de-at', {
	        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[Morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[Gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : german (de)
	// author : lluchs : https://github.com/lluchs
	// author: Menelion Elensúle: https://github.com/Oire

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    return moment.defineLocale('de', {
	        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[Morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[Gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : modern greek (el)
	// author : Aggelos Karalias : https://github.com/mehiel

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('el', {
	        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	        months : function (momentToFormat, format) {
	            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
	                return this._monthsGenitiveEl[momentToFormat.month()];
	            } else {
	                return this._monthsNominativeEl[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'μμ' : 'ΜΜ';
	            } else {
	                return isLower ? 'πμ' : 'ΠΜ';
	            }
	        },
	        isPM : function (input) {
	            return ((input + '').toLowerCase()[0] === 'μ');
	        },
	        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendarEl : {
	            sameDay : '[Σήμερα {}] LT',
	            nextDay : '[Αύριο {}] LT',
	            nextWeek : 'dddd [{}] LT',
	            lastDay : '[Χθες {}] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 6:
	                        return '[το προηγούμενο] dddd [{}] LT';
	                    default:
	                        return '[την προηγούμενη] dddd [{}] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        calendar : function (key, mom) {
	            var output = this._calendarEl[key],
	                hours = mom && mom.hours();

	            if (typeof output === 'function') {
	                output = output.apply(mom);
	            }

	            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
	        },
	        relativeTime : {
	            future : 'σε %s',
	            past : '%s πριν',
	            s : 'λίγα δευτερόλεπτα',
	            m : 'ένα λεπτό',
	            mm : '%d λεπτά',
	            h : 'μία ώρα',
	            hh : '%d ώρες',
	            d : 'μία μέρα',
	            dd : '%d μέρες',
	            M : 'ένας μήνας',
	            MM : '%d μήνες',
	            y : 'ένας χρόνος',
	            yy : '%d χρόνια'
	        },
	        ordinalParse: /\d{1,2}η/,
	        ordinal: '%dη',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : australian english (en-au)

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('en-au', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : canadian english (en-ca)
	// author : Jonathan Abourbih : https://github.com/jonbca

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('en-ca', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM, YYYY',
	            LLL : 'D MMMM, YYYY LT',
	            LLLL : 'dddd, D MMMM, YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	}));


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : great britain english (en-gb)
	// author : Chris Gedrim : https://github.com/chrisgedrim

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('en-gb', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : esperanto (eo)
	// author : Colin Dean : https://github.com/colindean
	// komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	//          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('eo', {
	        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	        weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
	        weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D[-an de] MMMM, YYYY',
	            LLL : 'D[-an de] MMMM, YYYY LT',
	            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY LT'
	        },
	        meridiemParse: /[ap]\.t\.m/i,
	        isPM: function (input) {
	            return input.charAt(0).toLowerCase() === 'p';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'p.t.m.' : 'P.T.M.';
	            } else {
	                return isLower ? 'a.t.m.' : 'A.T.M.';
	            }
	        },
	        calendar : {
	            sameDay : '[Hodiaŭ je] LT',
	            nextDay : '[Morgaŭ je] LT',
	            nextWeek : 'dddd [je] LT',
	            lastDay : '[Hieraŭ je] LT',
	            lastWeek : '[pasinta] dddd [je] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'je %s',
	            past : 'antaŭ %s',
	            s : 'sekundoj',
	            m : 'minuto',
	            mm : '%d minutoj',
	            h : 'horo',
	            hh : '%d horoj',
	            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
	            dd : '%d tagoj',
	            M : 'monato',
	            MM : '%d monatoj',
	            y : 'jaro',
	            yy : '%d jaroj'
	        },
	        ordinalParse: /\d{1,2}a/,
	        ordinal : '%da',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : spanish (es)
	// author : Julio Napurí : https://github.com/julionc

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

	    return moment.defineLocale('es', {
	        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY LT',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY LT'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastDay : function () {
	                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'hace %s',
	            s : 'unos segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'una hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un año',
	            yy : '%d años'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : estonian (et)
	// author : Henry Kehlmann : https://github.com/madhenry
	// improvements : Illimar Tambek : https://github.com/ragulka

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	            'm' : ['ühe minuti', 'üks minut'],
	            'mm': [number + ' minuti', number + ' minutit'],
	            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
	            'hh': [number + ' tunni', number + ' tundi'],
	            'd' : ['ühe päeva', 'üks päev'],
	            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
	            'MM': [number + ' kuu', number + ' kuud'],
	            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
	            'yy': [number + ' aasta', number + ' aastat']
	        };
	        if (withoutSuffix) {
	            return format[key][2] ? format[key][2] : format[key][1];
	        }
	        return isFuture ? format[key][0] : format[key][1];
	    }

	    return moment.defineLocale('et', {
	        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
	        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
	        longDateFormat : {
	            LT   : 'H:mm',
	            LTS : 'LT:ss',
	            L    : 'DD.MM.YYYY',
	            LL   : 'D. MMMM YYYY',
	            LLL  : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay  : '[Täna,] LT',
	            nextDay  : '[Homme,] LT',
	            nextWeek : '[Järgmine] dddd LT',
	            lastDay  : '[Eile,] LT',
	            lastWeek : '[Eelmine] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s pärast',
	            past   : '%s tagasi',
	            s      : processRelativeTime,
	            m      : processRelativeTime,
	            mm     : processRelativeTime,
	            h      : processRelativeTime,
	            hh     : processRelativeTime,
	            d      : processRelativeTime,
	            dd     : '%d päeva',
	            M      : processRelativeTime,
	            MM     : processRelativeTime,
	            y      : processRelativeTime,
	            yy     : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : euskara (eu)
	// author : Eneko Illarramendi : https://github.com/eillarra

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('eu', {
	        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
	        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY[ko] MMMM[ren] D[a]',
	            LLL : 'YYYY[ko] MMMM[ren] D[a] LT',
	            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] LT',
	            l : 'YYYY-M-D',
	            ll : 'YYYY[ko] MMM D[a]',
	            lll : 'YYYY[ko] MMM D[a] LT',
	            llll : 'ddd, YYYY[ko] MMM D[a] LT'
	        },
	        calendar : {
	            sameDay : '[gaur] LT[etan]',
	            nextDay : '[bihar] LT[etan]',
	            nextWeek : 'dddd LT[etan]',
	            lastDay : '[atzo] LT[etan]',
	            lastWeek : '[aurreko] dddd LT[etan]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s barru',
	            past : 'duela %s',
	            s : 'segundo batzuk',
	            m : 'minutu bat',
	            mm : '%d minutu',
	            h : 'ordu bat',
	            hh : '%d ordu',
	            d : 'egun bat',
	            dd : '%d egun',
	            M : 'hilabete bat',
	            MM : '%d hilabete',
	            y : 'urte bat',
	            yy : '%d urte'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Persian (fa)
	// author : Ebrahim Byagowi : https://github.com/ebraminio

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '۱',
	        '2': '۲',
	        '3': '۳',
	        '4': '۴',
	        '5': '۵',
	        '6': '۶',
	        '7': '۷',
	        '8': '۸',
	        '9': '۹',
	        '0': '۰'
	    }, numberMap = {
	        '۱': '1',
	        '۲': '2',
	        '۳': '3',
	        '۴': '4',
	        '۵': '5',
	        '۶': '6',
	        '۷': '7',
	        '۸': '8',
	        '۹': '9',
	        '۰': '0'
	    };

	    return moment.defineLocale('fa', {
	        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        meridiemParse: /قبل از ظهر|بعد از ظهر/,
	        isPM: function (input) {
	            return /بعد از ظهر/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'قبل از ظهر';
	            } else {
	                return 'بعد از ظهر';
	            }
	        },
	        calendar : {
	            sameDay : '[امروز ساعت] LT',
	            nextDay : '[فردا ساعت] LT',
	            nextWeek : 'dddd [ساعت] LT',
	            lastDay : '[دیروز ساعت] LT',
	            lastWeek : 'dddd [پیش] [ساعت] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'در %s',
	            past : '%s پیش',
	            s : 'چندین ثانیه',
	            m : 'یک دقیقه',
	            mm : '%d دقیقه',
	            h : 'یک ساعت',
	            hh : '%d ساعت',
	            d : 'یک روز',
	            dd : '%d روز',
	            M : 'یک ماه',
	            MM : '%d ماه',
	            y : 'یک سال',
	            yy : '%d سال'
	        },
	        preparse: function (string) {
	            return string.replace(/[۰-۹]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        ordinalParse: /\d{1,2}م/,
	        ordinal : '%dم',
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : finnish (fi)
	// author : Tarmo Aidantausta : https://github.com/bleadof

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
	        numbersFuture = [
	            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
	            numbersPast[7], numbersPast[8], numbersPast[9]
	        ];

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = '';
	        switch (key) {
	        case 's':
	            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	        case 'm':
	            return isFuture ? 'minuutin' : 'minuutti';
	        case 'mm':
	            result = isFuture ? 'minuutin' : 'minuuttia';
	            break;
	        case 'h':
	            return isFuture ? 'tunnin' : 'tunti';
	        case 'hh':
	            result = isFuture ? 'tunnin' : 'tuntia';
	            break;
	        case 'd':
	            return isFuture ? 'päivän' : 'päivä';
	        case 'dd':
	            result = isFuture ? 'päivän' : 'päivää';
	            break;
	        case 'M':
	            return isFuture ? 'kuukauden' : 'kuukausi';
	        case 'MM':
	            result = isFuture ? 'kuukauden' : 'kuukautta';
	            break;
	        case 'y':
	            return isFuture ? 'vuoden' : 'vuosi';
	        case 'yy':
	            result = isFuture ? 'vuoden' : 'vuotta';
	            break;
	        }
	        result = verbalNumber(number, isFuture) + ' ' + result;
	        return result;
	    }

	    function verbalNumber(number, isFuture) {
	        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
	    }

	    return moment.defineLocale('fi', {
	        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'Do MMMM[ta] YYYY',
	            LLL : 'Do MMMM[ta] YYYY, [klo] LT',
	            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] LT',
	            l : 'D.M.YYYY',
	            ll : 'Do MMM YYYY',
	            lll : 'Do MMM YYYY, [klo] LT',
	            llll : 'ddd, Do MMM YYYY, [klo] LT'
	        },
	        calendar : {
	            sameDay : '[tänään] [klo] LT',
	            nextDay : '[huomenna] [klo] LT',
	            nextWeek : 'dddd [klo] LT',
	            lastDay : '[eilen] [klo] LT',
	            lastWeek : '[viime] dddd[na] [klo] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s päästä',
	            past : '%s sitten',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : faroese (fo)
	// author : Ragnar Johannesen : https://github.com/ragnar123

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('fo', {
	        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D. MMMM, YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Í dag kl.] LT',
	            nextDay : '[Í morgin kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[Í gjár kl.] LT',
	            lastWeek : '[síðstu] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'um %s',
	            past : '%s síðani',
	            s : 'fá sekund',
	            m : 'ein minutt',
	            mm : '%d minuttir',
	            h : 'ein tími',
	            hh : '%d tímar',
	            d : 'ein dagur',
	            dd : '%d dagar',
	            M : 'ein mánaði',
	            MM : '%d mánaðir',
	            y : 'eitt ár',
	            yy : '%d ár'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : canadian french (fr-ca)
	// author : Jonathan Abourbih : https://github.com/jonbca

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('fr-ca', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : '');
	        }
	    });
	}));


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : french (fr)
	// author : John Fischer : https://github.com/jfroffice

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('fr', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : '');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : frisian (fy)
	// author : Robin van der Vliet : https://github.com/robin0van0der0v

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

	    return moment.defineLocale('fy', {
	        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
	        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[hjoed om] LT',
	            nextDay: '[moarn om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[juster om] LT',
	            lastWeek: '[ôfrûne] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'oer %s',
	            past : '%s lyn',
	            s : 'in pear sekonden',
	            m : 'ien minút',
	            mm : '%d minuten',
	            h : 'ien oere',
	            hh : '%d oeren',
	            d : 'ien dei',
	            dd : '%d dagen',
	            M : 'ien moanne',
	            MM : '%d moannen',
	            y : 'ien jier',
	            yy : '%d jierren'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : galician (gl)
	// author : Juan G. Hurtado : https://github.com/juanghurtado

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('gl', {
	        months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
	        monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
	        weekdays : 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
	        weekdaysShort : 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            lastDay : function () {
	                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
	            },
	            lastWeek : function () {
	                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (str) {
	                if (str === 'uns segundos') {
	                    return 'nuns segundos';
	                }
	                return 'en ' + str;
	            },
	            past : 'hai %s',
	            s : 'uns segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'unha hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un ano',
	            yy : '%d anos'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Hebrew (he)
	// author : Tomer Cohen : https://github.com/tomer
	// author : Moshe Simantov : https://github.com/DevelopmentIL
	// author : Tal Ater : https://github.com/TalAter

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('he', {
	        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [ב]MMMM YYYY',
	            LLL : 'D [ב]MMMM YYYY LT',
	            LLLL : 'dddd, D [ב]MMMM YYYY LT',
	            l : 'D/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY LT',
	            llll : 'ddd, D MMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[היום ב־]LT',
	            nextDay : '[מחר ב־]LT',
	            nextWeek : 'dddd [בשעה] LT',
	            lastDay : '[אתמול ב־]LT',
	            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'בעוד %s',
	            past : 'לפני %s',
	            s : 'מספר שניות',
	            m : 'דקה',
	            mm : '%d דקות',
	            h : 'שעה',
	            hh : function (number) {
	                if (number === 2) {
	                    return 'שעתיים';
	                }
	                return number + ' שעות';
	            },
	            d : 'יום',
	            dd : function (number) {
	                if (number === 2) {
	                    return 'יומיים';
	                }
	                return number + ' ימים';
	            },
	            M : 'חודש',
	            MM : function (number) {
	                if (number === 2) {
	                    return 'חודשיים';
	                }
	                return number + ' חודשים';
	            },
	            y : 'שנה',
	            yy : function (number) {
	                if (number === 2) {
	                    return 'שנתיים';
	                } else if (number % 10 === 0 && number !== 10) {
	                    return number + ' שנה';
	                }
	                return number + ' שנים';
	            }
	        }
	    });
	}));


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : hindi (hi)
	// author : Mayank Singhal : https://github.com/mayanksinghal

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    return moment.defineLocale('hi', {
	        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm बजे',
	            LTS : 'A h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[कल] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[कल] LT',
	            lastWeek : '[पिछले] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s में',
	            past : '%s पहले',
	            s : 'कुछ ही क्षण',
	            m : 'एक मिनट',
	            mm : '%d मिनट',
	            h : 'एक घंटा',
	            hh : '%d घंटे',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महीने',
	            MM : '%d महीने',
	            y : 'एक वर्ष',
	            yy : '%d वर्ष'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	        meridiemParse: /रात|सुबह|दोपहर|शाम/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सुबह') {
	                return hour;
	            } else if (meridiem === 'दोपहर') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'शाम') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात';
	            } else if (hour < 10) {
	                return 'सुबह';
	            } else if (hour < 17) {
	                return 'दोपहर';
	            } else if (hour < 20) {
	                return 'शाम';
	            } else {
	                return 'रात';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : hrvatski (hr)
	// author : Bojan Marković : https://github.com/bmarkovic

	// based on (sl) translation by Robert Sedovšek

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minuta';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'jedan sat' : 'jednog sata';
	        case 'hh':
	            if (number === 1) {
	                result += 'sat';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'sata';
	            } else {
	                result += 'sati';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dana';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mjesec';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'mjeseca';
	            } else {
	                result += 'mjeseci';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'godina';
	            } else if (number === 2 || number === 3 || number === 4) {
	                result += 'godine';
	            } else {
	                result += 'godina';
	            }
	            return result;
	        }
	    }

	    return moment.defineLocale('hr', {
	        months : 'sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
	        monthsShort : 'sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',

	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedjelju] [u] LT';
	                case 3:
	                    return '[u] [srijedu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                    return '[prošlu] dddd [u] LT';
	                case 6:
	                    return '[prošle] [subote] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : hungarian (hu)
	// author : Adam Brunner : https://github.com/adambrunner

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

	    function translate(number, withoutSuffix, key, isFuture) {
	        var num = number,
	            suffix;

	        switch (key) {
	        case 's':
	            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
	        case 'm':
	            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'mm':
	            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	        case 'h':
	            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'hh':
	            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	        case 'd':
	            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'dd':
	            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	        case 'M':
	            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'MM':
	            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	        case 'y':
	            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	        case 'yy':
	            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	        }

	        return '';
	    }

	    function week(isFuture) {
	        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	    }

	    return moment.defineLocale('hu', {
	        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY.MM.DD.',
	            LL : 'YYYY. MMMM D.',
	            LLL : 'YYYY. MMMM D., LT',
	            LLLL : 'YYYY. MMMM D., dddd LT'
	        },
	        meridiemParse: /de|du/i,
	        isPM: function (input) {
	            return input.charAt(1).toLowerCase() === 'u';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower === true ? 'de' : 'DE';
	            } else {
	                return isLower === true ? 'du' : 'DU';
	            }
	        },
	        calendar : {
	            sameDay : '[ma] LT[-kor]',
	            nextDay : '[holnap] LT[-kor]',
	            nextWeek : function () {
	                return week.call(this, true);
	            },
	            lastDay : '[tegnap] LT[-kor]',
	            lastWeek : function () {
	                return week.call(this, false);
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s múlva',
	            past : '%s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Armenian (hy-am)
	// author : Armendarabyan : https://github.com/armendarabyan

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
	            'accusative': 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_')
	        },

	        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function monthsShortCaseReplace(m, format) {
	        var monthsShort = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');

	        return monthsShort[m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_');

	        return weekdays[m.day()];
	    }

	    return moment.defineLocale('hy-am', {
	        months : monthsCaseReplace,
	        monthsShort : monthsShortCaseReplace,
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY թ.',
	            LLL : 'D MMMM YYYY թ., LT',
	            LLLL : 'dddd, D MMMM YYYY թ., LT'
	        },
	        calendar : {
	            sameDay: '[այսօր] LT',
	            nextDay: '[վաղը] LT',
	            lastDay: '[երեկ] LT',
	            nextWeek: function () {
	                return 'dddd [օրը ժամը] LT';
	            },
	            lastWeek: function () {
	                return '[անցած] dddd [օրը ժամը] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s հետո',
	            past : '%s առաջ',
	            s : 'մի քանի վայրկյան',
	            m : 'րոպե',
	            mm : '%d րոպե',
	            h : 'ժամ',
	            hh : '%d ժամ',
	            d : 'օր',
	            dd : '%d օր',
	            M : 'ամիս',
	            MM : '%d ամիս',
	            y : 'տարի',
	            yy : '%d տարի'
	        },

	        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	        isPM: function (input) {
	            return /^(ցերեկվա|երեկոյան)$/.test(input);
	        },
	        meridiem : function (hour) {
	            if (hour < 4) {
	                return 'գիշերվա';
	            } else if (hour < 12) {
	                return 'առավոտվա';
	            } else if (hour < 17) {
	                return 'ցերեկվա';
	            } else {
	                return 'երեկոյան';
	            }
	        },

	        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'DDD':
	            case 'w':
	            case 'W':
	            case 'DDDo':
	                if (number === 1) {
	                    return number + '-ին';
	                }
	                return number + '-րդ';
	            default:
	                return number;
	            }
	        },

	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Bahasa Indonesia (id)
	// author : Mohammad Satrio Utomo : https://github.com/tyok
	// reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('id', {
	        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'LT.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] LT',
	            LLLL : 'dddd, D MMMM YYYY [pukul] LT'
	        },
	        meridiemParse: /pagi|siang|sore|malam/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'siang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sore' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'siang';
	            } else if (hours < 19) {
	                return 'sore';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Besok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kemarin pukul] LT',
	            lastWeek : 'dddd [lalu pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lalu',
	            s : 'beberapa detik',
	            m : 'semenit',
	            mm : '%d menit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : icelandic (is)
	// author : Hinrik Örn Sigurðsson : https://github.com/hinrik

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function plural(n) {
	        if (n % 100 === 11) {
	            return true;
	        } else if (n % 10 === 1) {
	            return false;
	        }
	        return true;
	    }

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':
	            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	        case 'm':
	            return withoutSuffix ? 'mínúta' : 'mínútu';
	        case 'mm':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	            } else if (withoutSuffix) {
	                return result + 'mínúta';
	            }
	            return result + 'mínútu';
	        case 'hh':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	            }
	            return result + 'klukkustund';
	        case 'd':
	            if (withoutSuffix) {
	                return 'dagur';
	            }
	            return isFuture ? 'dag' : 'degi';
	        case 'dd':
	            if (plural(number)) {
	                if (withoutSuffix) {
	                    return result + 'dagar';
	                }
	                return result + (isFuture ? 'daga' : 'dögum');
	            } else if (withoutSuffix) {
	                return result + 'dagur';
	            }
	            return result + (isFuture ? 'dag' : 'degi');
	        case 'M':
	            if (withoutSuffix) {
	                return 'mánuður';
	            }
	            return isFuture ? 'mánuð' : 'mánuði';
	        case 'MM':
	            if (plural(number)) {
	                if (withoutSuffix) {
	                    return result + 'mánuðir';
	                }
	                return result + (isFuture ? 'mánuði' : 'mánuðum');
	            } else if (withoutSuffix) {
	                return result + 'mánuður';
	            }
	            return result + (isFuture ? 'mánuð' : 'mánuði');
	        case 'y':
	            return withoutSuffix || isFuture ? 'ár' : 'ári';
	        case 'yy':
	            if (plural(number)) {
	                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	            }
	            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	        }
	    }

	    return moment.defineLocale('is', {
	        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] LT',
	            LLLL : 'dddd, D. MMMM YYYY [kl.] LT'
	        },
	        calendar : {
	            sameDay : '[í dag kl.] LT',
	            nextDay : '[á morgun kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[í gær kl.] LT',
	            lastWeek : '[síðasta] dddd [kl.] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'eftir %s',
	            past : 'fyrir %s síðan',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : 'klukkustund',
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : italian (it)
	// author : Lorenzo : https://github.com/aliem
	// author: Mattia Larentis: https://github.com/nostalgiaz

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('it', {
	        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
	        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
	        weekdaysMin : 'D_L_Ma_Me_G_V_S'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Oggi alle] LT',
	            nextDay: '[Domani alle] LT',
	            nextWeek: 'dddd [alle] LT',
	            lastDay: '[Ieri alle] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[la scorsa] dddd [alle] LT';
	                    default:
	                        return '[lo scorso] dddd [alle] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
	            },
	            past : '%s fa',
	            s : 'alcuni secondi',
	            m : 'un minuto',
	            mm : '%d minuti',
	            h : 'un\'ora',
	            hh : '%d ore',
	            d : 'un giorno',
	            dd : '%d giorni',
	            M : 'un mese',
	            MM : '%d mesi',
	            y : 'un anno',
	            yy : '%d anni'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal: '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : japanese (ja)
	// author : LI Long : https://github.com/baryon

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ja', {
	        months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
	        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
	        longDateFormat : {
	            LT : 'Ah時m分',
	            LTS : 'LTs秒',
	            L : 'YYYY/MM/DD',
	            LL : 'YYYY年M月D日',
	            LLL : 'YYYY年M月D日LT',
	            LLLL : 'YYYY年M月D日LT dddd'
	        },
	        meridiemParse: /午前|午後/i,
	        isPM : function (input) {
	            return input === '午後';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return '午前';
	            } else {
	                return '午後';
	            }
	        },
	        calendar : {
	            sameDay : '[今日] LT',
	            nextDay : '[明日] LT',
	            nextWeek : '[来週]dddd LT',
	            lastDay : '[昨日] LT',
	            lastWeek : '[前週]dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s後',
	            past : '%s前',
	            s : '数秒',
	            m : '1分',
	            mm : '%d分',
	            h : '1時間',
	            hh : '%d時間',
	            d : '1日',
	            dd : '%d日',
	            M : '1ヶ月',
	            MM : '%dヶ月',
	            y : '1年',
	            yy : '%d年'
	        }
	    });
	}));


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Georgian (ka)
	// author : Irakli Janiashvili : https://github.com/irakli-janiashvili

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	            'accusative': 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	        },

	        nounCase = (/D[oD] *MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	            'accusative': 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_')
	        },

	        nounCase = (/(წინა|შემდეგ)/).test(format) ?
	            'accusative' :
	            'nominative';

	        return weekdays[nounCase][m.day()];
	    }

	    return moment.defineLocale('ka', {
	        months : monthsCaseReplace,
	        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[დღეს] LT[-ზე]',
	            nextDay : '[ხვალ] LT[-ზე]',
	            lastDay : '[გუშინ] LT[-ზე]',
	            nextWeek : '[შემდეგ] dddd LT[-ზე]',
	            lastWeek : '[წინა] dddd LT-ზე',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
	                    s.replace(/ი$/, 'ში') :
	                    s + 'ში';
	            },
	            past : function (s) {
	                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
	                    return s.replace(/(ი|ე)$/, 'ის წინ');
	                }
	                if ((/წელი/).test(s)) {
	                    return s.replace(/წელი$/, 'წლის წინ');
	                }
	            },
	            s : 'რამდენიმე წამი',
	            m : 'წუთი',
	            mm : '%d წუთი',
	            h : 'საათი',
	            hh : '%d საათი',
	            d : 'დღე',
	            dd : '%d დღე',
	            M : 'თვე',
	            MM : '%d თვე',
	            y : 'წელი',
	            yy : '%d წელი'
	        },
	        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	        ordinal : function (number) {
	            if (number === 0) {
	                return number;
	            }

	            if (number === 1) {
	                return number + '-ლი';
	            }

	            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
	                return 'მე-' + number;
	            }

	            return number + '-ე';
	        },
	        week : {
	            dow : 1,
	            doy : 7
	        }
	    });
	}));


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : khmer (km)
	// author : Kruy Vanna : https://github.com/kruyvanna

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('km', {
	        months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'LT:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY LT',
	            LLLL: 'dddd, D MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',
	            nextDay: '[ស្អែក ម៉ោង] LT',
	            nextWeek: 'dddd [ម៉ោង] LT',
	            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sទៀត',
	            past: '%sមុន',
	            s: 'ប៉ុន្មានវិនាទី',
	            m: 'មួយនាទី',
	            mm: '%d នាទី',
	            h: 'មួយម៉ោង',
	            hh: '%d ម៉ោង',
	            d: 'មួយថ្ងៃ',
	            dd: '%d ថ្ងៃ',
	            M: 'មួយខែ',
	            MM: '%d ខែ',
	            y: 'មួយឆ្នាំ',
	            yy: '%d ឆ្នាំ'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : korean (ko)
	//
	// authors
	//
	// - Kyungwook, Park : https://github.com/kyungw00k
	// - Jeeeyul Lee <jeeeyul@gmail.com>
	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ko', {
	        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
	        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
	        longDateFormat : {
	            LT : 'A h시 m분',
	            LTS : 'A h시 m분 s초',
	            L : 'YYYY.MM.DD',
	            LL : 'YYYY년 MMMM D일',
	            LLL : 'YYYY년 MMMM D일 LT',
	            LLLL : 'YYYY년 MMMM D일 dddd LT'
	        },
	        calendar : {
	            sameDay : '오늘 LT',
	            nextDay : '내일 LT',
	            nextWeek : 'dddd LT',
	            lastDay : '어제 LT',
	            lastWeek : '지난주 dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s 후',
	            past : '%s 전',
	            s : '몇초',
	            ss : '%d초',
	            m : '일분',
	            mm : '%d분',
	            h : '한시간',
	            hh : '%d시간',
	            d : '하루',
	            dd : '%d일',
	            M : '한달',
	            MM : '%d달',
	            y : '일년',
	            yy : '%d년'
	        },
	        ordinalParse : /\d{1,2}일/,
	        ordinal : '%d일',
	        meridiemParse : /오전|오후/,
	        isPM : function (token) {
	            return token === '오후';
	        },
	        meridiem : function (hour, minute, isUpper) {
	            return hour < 12 ? '오전' : '오후';
	        }
	    });
	}));


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Luxembourgish (lb)
	// author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

	// Note: Luxembourgish has a very particular phonological rule ('Eifeler Regel') that causes the
	// deletion of the final 'n' in certain contexts. That's what the 'eifelerRegelAppliesToWeekday'
	// and 'eifelerRegelAppliesToNumber' methods are meant for

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eng Minutt', 'enger Minutt'],
	            'h': ['eng Stonn', 'enger Stonn'],
	            'd': ['een Dag', 'engem Dag'],
	            'M': ['ee Mount', 'engem Mount'],
	            'y': ['ee Joer', 'engem Joer']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    function processFutureTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'a ' + string;
	        }
	        return 'an ' + string;
	    }

	    function processPastTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'viru ' + string;
	        }
	        return 'virun ' + string;
	    }

	    /**
	     * Returns true if the word before the given number loses the '-n' ending.
	     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	     *
	     * @param number {integer}
	     * @returns {boolean}
	     */
	    function eifelerRegelAppliesToNumber(number) {
	        number = parseInt(number, 10);
	        if (isNaN(number)) {
	            return false;
	        }
	        if (number < 0) {
	            // Negative Number --> always true
	            return true;
	        } else if (number < 10) {
	            // Only 1 digit
	            if (4 <= number && number <= 7) {
	                return true;
	            }
	            return false;
	        } else if (number < 100) {
	            // 2 digits
	            var lastDigit = number % 10, firstDigit = number / 10;
	            if (lastDigit === 0) {
	                return eifelerRegelAppliesToNumber(firstDigit);
	            }
	            return eifelerRegelAppliesToNumber(lastDigit);
	        } else if (number < 10000) {
	            // 3 or 4 digits --> recursively check first digit
	            while (number >= 10) {
	                number = number / 10;
	            }
	            return eifelerRegelAppliesToNumber(number);
	        } else {
	            // Anything larger than 4 digits: recursively check first n-3 digits
	            number = number / 1000;
	            return eifelerRegelAppliesToNumber(number);
	        }
	    }

	    return moment.defineLocale('lb', {
	        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm [Auer]',
	            LTS: 'H:mm:ss [Auer]',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY LT',
	            LLLL: 'dddd, D. MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[Haut um] LT',
	            sameElse: 'L',
	            nextDay: '[Muer um] LT',
	            nextWeek: 'dddd [um] LT',
	            lastDay: '[Gëschter um] LT',
	            lastWeek: function () {
	                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	                switch (this.day()) {
	                    case 2:
	                    case 4:
	                        return '[Leschten] dddd [um] LT';
	                    default:
	                        return '[Leschte] dddd [um] LT';
	                }
	            }
	        },
	        relativeTime : {
	            future : processFutureTime,
	            past : processPastTime,
	            s : 'e puer Sekonnen',
	            m : processRelativeTime,
	            mm : '%d Minutten',
	            h : processRelativeTime,
	            hh : '%d Stonnen',
	            d : processRelativeTime,
	            dd : '%d Deeg',
	            M : processRelativeTime,
	            MM : '%d Méint',
	            y : processRelativeTime,
	            yy : '%d Joer'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Lithuanian (lt)
	// author : Mindaugas Mozūras : https://github.com/mmozuras

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var units = {
	        'm' : 'minutė_minutės_minutę',
	        'mm': 'minutės_minučių_minutes',
	        'h' : 'valanda_valandos_valandą',
	        'hh': 'valandos_valandų_valandas',
	        'd' : 'diena_dienos_dieną',
	        'dd': 'dienos_dienų_dienas',
	        'M' : 'mėnuo_mėnesio_mėnesį',
	        'MM': 'mėnesiai_mėnesių_mėnesius',
	        'y' : 'metai_metų_metus',
	        'yy': 'metai_metų_metus'
	    },
	    weekDays = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_');

	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	        if (withoutSuffix) {
	            return 'kelios sekundės';
	        } else {
	            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	        }
	    }

	    function translateSingular(number, withoutSuffix, key, isFuture) {
	        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
	    }

	    function special(number) {
	        return number % 10 === 0 || (number > 10 && number < 20);
	    }

	    function forms(key) {
	        return units[key].split('_');
	    }

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        if (number === 1) {
	            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	        } else if (withoutSuffix) {
	            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	        } else {
	            if (isFuture) {
	                return result + forms(key)[1];
	            } else {
	                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	            }
	        }
	    }

	    function relativeWeekDay(moment, format) {
	        var nominative = format.indexOf('dddd HH:mm') === -1,
	            weekDay = weekDays[moment.day()];

	        return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + 'į';
	    }

	    return moment.defineLocale('lt', {
	        months : 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
	        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	        weekdays : relativeWeekDay,
	        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY [m.] MMMM D [d.]',
	            LLL : 'YYYY [m.] MMMM D [d.], LT [val.]',
	            LLLL : 'YYYY [m.] MMMM D [d.], dddd, LT [val.]',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY [m.] MMMM D [d.]',
	            lll : 'YYYY [m.] MMMM D [d.], LT [val.]',
	            llll : 'YYYY [m.] MMMM D [d.], ddd, LT [val.]'
	        },
	        calendar : {
	            sameDay : '[Šiandien] LT',
	            nextDay : '[Rytoj] LT',
	            nextWeek : 'dddd LT',
	            lastDay : '[Vakar] LT',
	            lastWeek : '[Praėjusį] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'po %s',
	            past : 'prieš %s',
	            s : translateSeconds,
	            m : translateSingular,
	            mm : translate,
	            h : translateSingular,
	            hh : translate,
	            d : translateSingular,
	            dd : translate,
	            M : translateSingular,
	            MM : translate,
	            y : translateSingular,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}-oji/,
	        ordinal : function (number) {
	            return number + '-oji';
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : latvian (lv)
	// author : Kristaps Karlsons : https://github.com/skakri

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var units = {
	        'mm': 'minūti_minūtes_minūte_minūtes',
	        'hh': 'stundu_stundas_stunda_stundas',
	        'dd': 'dienu_dienas_diena_dienas',
	        'MM': 'mēnesi_mēnešus_mēnesis_mēneši',
	        'yy': 'gadu_gadus_gads_gadi'
	    };

	    function format(word, number, withoutSuffix) {
	        var forms = word.split('_');
	        if (withoutSuffix) {
	            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
	        } else {
	            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
	        }
	    }

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        return number + ' ' + format(units[key], number, withoutSuffix);
	    }

	    return moment.defineLocale('lv', {
	        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'YYYY. [gada] D. MMMM',
	            LLL : 'YYYY. [gada] D. MMMM, LT',
	            LLLL : 'YYYY. [gada] D. MMMM, dddd, LT'
	        },
	        calendar : {
	            sameDay : '[Šodien pulksten] LT',
	            nextDay : '[Rīt pulksten] LT',
	            nextWeek : 'dddd [pulksten] LT',
	            lastDay : '[Vakar pulksten] LT',
	            lastWeek : '[Pagājušā] dddd [pulksten] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s vēlāk',
	            past : '%s agrāk',
	            s : 'dažas sekundes',
	            m : 'minūti',
	            mm : relativeTimeWithPlural,
	            h : 'stundu',
	            hh : relativeTimeWithPlural,
	            d : 'dienu',
	            dd : relativeTimeWithPlural,
	            M : 'mēnesi',
	            MM : relativeTimeWithPlural,
	            y : 'gadu',
	            yy : relativeTimeWithPlural
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : macedonian (mk)
	// author : Borislav Mickov : https://github.com/B0k0

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('mk', {
	        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Денес во] LT',
	            nextDay : '[Утре во] LT',
	            nextWeek : 'dddd [во] LT',
	            lastDay : '[Вчера во] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[Во изминатата] dddd [во] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[Во изминатиот] dddd [во] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'после %s',
	            past : 'пред %s',
	            s : 'неколку секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дена',
	            M : 'месец',
	            MM : '%d месеци',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : malayalam (ml)
	// author : Floyd Pink : https://github.com/floydpink

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ml', {
	        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm -നു',
	            LTS : 'A h:mm:ss -നു',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[ഇന്ന്] LT',
	            nextDay : '[നാളെ] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[ഇന്നലെ] LT',
	            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s കഴിഞ്ഞ്',
	            past : '%s മുൻപ്',
	            s : 'അൽപ നിമിഷങ്ങൾ',
	            m : 'ഒരു മിനിറ്റ്',
	            mm : '%d മിനിറ്റ്',
	            h : 'ഒരു മണിക്കൂർ',
	            hh : '%d മണിക്കൂർ',
	            d : 'ഒരു ദിവസം',
	            dd : '%d ദിവസം',
	            M : 'ഒരു മാസം',
	            MM : '%d മാസം',
	            y : 'ഒരു വർഷം',
	            yy : '%d വർഷം'
	        },
	        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	        isPM : function (input) {
	            return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'രാത്രി';
	            } else if (hour < 12) {
	                return 'രാവിലെ';
	            } else if (hour < 17) {
	                return 'ഉച്ച കഴിഞ്ഞ്';
	            } else if (hour < 20) {
	                return 'വൈകുന്നേരം';
	            } else {
	                return 'രാത്രി';
	            }
	        }
	    });
	}));


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Marathi (mr)
	// author : Harshad Kale : https://github.com/kalehv

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    return moment.defineLocale('mr', {
	        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm वाजता',
	            LTS : 'A h:mm:ss वाजता',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[उद्या] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[काल] LT',
	            lastWeek: '[मागील] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s नंतर',
	            past : '%s पूर्वी',
	            s : 'सेकंद',
	            m: 'एक मिनिट',
	            mm: '%d मिनिटे',
	            h : 'एक तास',
	            hh : '%d तास',
	            d : 'एक दिवस',
	            dd : '%d दिवस',
	            M : 'एक महिना',
	            MM : '%d महिने',
	            y : 'एक वर्ष',
	            yy : '%d वर्षे'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात्री') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सकाळी') {
	                return hour;
	            } else if (meridiem === 'दुपारी') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'सायंकाळी') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower)
	        {
	            if (hour < 4) {
	                return 'रात्री';
	            } else if (hour < 10) {
	                return 'सकाळी';
	            } else if (hour < 17) {
	                return 'दुपारी';
	            } else if (hour < 20) {
	                return 'सायंकाळी';
	            } else {
	                return 'रात्री';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Bahasa Malaysia (ms-MY)
	// author : Weldan Jamili : https://github.com/weldan

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('ms-my', {
	        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'LT.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] LT',
	            LLLL : 'dddd, D MMMM YYYY [pukul] LT'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Esok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kelmarin pukul] LT',
	            lastWeek : 'dddd [lepas pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lepas',
	            s : 'beberapa saat',
	            m : 'seminit',
	            mm : '%d minit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Burmese (my)
	// author : Squar team, mysquar.com

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '၁',
	        '2': '၂',
	        '3': '၃',
	        '4': '၄',
	        '5': '၅',
	        '6': '၆',
	        '7': '၇',
	        '8': '၈',
	        '9': '၉',
	        '0': '၀'
	    }, numberMap = {
	        '၁': '1',
	        '၂': '2',
	        '၃': '3',
	        '၄': '4',
	        '၅': '5',
	        '၆': '6',
	        '၇': '7',
	        '၈': '8',
	        '၉': '9',
	        '၀': '0'
	    };
	    return moment.defineLocale('my', {
	        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	        weekdaysShort: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        weekdaysMin: 'နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY LT',
	            LLLL: 'dddd D MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[ယနေ.] LT [မှာ]',
	            nextDay: '[မနက်ဖြန်] LT [မှာ]',
	            nextWeek: 'dddd LT [မှာ]',
	            lastDay: '[မနေ.က] LT [မှာ]',
	            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'လာမည့် %s မှာ',
	            past: 'လွန်ခဲ့သော %s က',
	            s: 'စက္ကန်.အနည်းငယ်',
	            m: 'တစ်မိနစ်',
	            mm: '%d မိနစ်',
	            h: 'တစ်နာရီ',
	            hh: '%d နာရီ',
	            d: 'တစ်ရက်',
	            dd: '%d ရက်',
	            M: 'တစ်လ',
	            MM: '%d လ',
	            y: 'တစ်နှစ်',
	            yy: '%d နှစ်'
	        },
	        preparse: function (string) {
	            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : norwegian bokmål (nb)
	// authors : Espen Hovlandsdal : https://github.com/rexxars
	//           Sigurd Gartmann : https://github.com/sigurdga

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('nb', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'søn_man_tirs_ons_tors_fre_lør'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'H.mm',
	            LTS : 'LT.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] LT',
	            LLLL : 'dddd D. MMMM YYYY [kl.] LT'
	        },
	        calendar : {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[forrige] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'for %s siden',
	            s : 'noen sekunder',
	            m : 'ett minutt',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dager',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : nepali/nepalese
	// author : suvash : https://github.com/suvash

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    return moment.defineLocale('ne', {
	        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	        weekdaysMin : 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),
	        longDateFormat : {
	            LT : 'Aको h:mm बजे',
	            LTS : 'Aको h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राती') {
	                return hour < 3 ? hour : hour + 12;
	            } else if (meridiem === 'बिहान') {
	                return hour;
	            } else if (meridiem === 'दिउँसो') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'बेलुका' || meridiem === 'साँझ') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 3) {
	                return 'राती';
	            } else if (hour < 10) {
	                return 'बिहान';
	            } else if (hour < 15) {
	                return 'दिउँसो';
	            } else if (hour < 18) {
	                return 'बेलुका';
	            } else if (hour < 20) {
	                return 'साँझ';
	            } else {
	                return 'राती';
	            }
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[भोली] LT',
	            nextWeek : '[आउँदो] dddd[,] LT',
	            lastDay : '[हिजो] LT',
	            lastWeek : '[गएको] dddd[,] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%sमा',
	            past : '%s अगाडी',
	            s : 'केही समय',
	            m : 'एक मिनेट',
	            mm : '%d मिनेट',
	            h : 'एक घण्टा',
	            hh : '%d घण्टा',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महिना',
	            MM : '%d महिना',
	            y : 'एक बर्ष',
	            yy : '%d बर्ष'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : dutch (nl)
	// author : Joris Röling : https://github.com/jjupiter

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

	    return moment.defineLocale('nl', {
	        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'over %s',
	            past : '%s geleden',
	            s : 'een paar seconden',
	            m : 'één minuut',
	            mm : '%d minuten',
	            h : 'één uur',
	            hh : '%d uur',
	            d : 'één dag',
	            dd : '%d dagen',
	            M : 'één maand',
	            MM : '%d maanden',
	            y : 'één jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : norwegian nynorsk (nn)
	// author : https://github.com/mechuwind

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('nn', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[I dag klokka] LT',
	            nextDay: '[I morgon klokka] LT',
	            nextWeek: 'dddd [klokka] LT',
	            lastDay: '[I går klokka] LT',
	            lastWeek: '[Føregåande] dddd [klokka] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'for %s sidan',
	            s : 'nokre sekund',
	            m : 'eit minutt',
	            mm : '%d minutt',
	            h : 'ein time',
	            hh : '%d timar',
	            d : 'ein dag',
	            dd : '%d dagar',
	            M : 'ein månad',
	            MM : '%d månader',
	            y : 'eit år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : polish (pl)
	// author : Rafal Hirsz : https://github.com/evoL

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

	    function plural(n) {
	        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
	    }

	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'minuta' : 'minutę';
	        case 'mm':
	            return result + (plural(number) ? 'minuty' : 'minut');
	        case 'h':
	            return withoutSuffix  ? 'godzina'  : 'godzinę';
	        case 'hh':
	            return result + (plural(number) ? 'godziny' : 'godzin');
	        case 'MM':
	            return result + (plural(number) ? 'miesiące' : 'miesięcy');
	        case 'yy':
	            return result + (plural(number) ? 'lata' : 'lat');
	        }
	    }

	    return moment.defineLocale('pl', {
	        months : function (momentToFormat, format) {
	            if (/D MMMM/.test(format)) {
	                return monthsSubjective[momentToFormat.month()];
	            } else {
	                return monthsNominative[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	        weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
	        weekdaysMin : 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Dziś o] LT',
	            nextDay: '[Jutro o] LT',
	            nextWeek: '[W] dddd [o] LT',
	            lastDay: '[Wczoraj o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[W zeszłą niedzielę o] LT';
	                case 3:
	                    return '[W zeszłą środę o] LT';
	                case 6:
	                    return '[W zeszłą sobotę o] LT';
	                default:
	                    return '[W zeszły] dddd [o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : '%s temu',
	            s : 'kilka sekund',
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : '1 dzień',
	            dd : '%d dni',
	            M : 'miesiąc',
	            MM : translate,
	            y : 'rok',
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : brazilian portuguese (pt-br)
	// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('pt-br', {
	        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
	        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
	        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
	        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
	        weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY [às] LT',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : '%s atrás',
	            s : 'segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº'
	    });
	}));


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : portuguese (pt)
	// author : Jefferson : https://github.com/jalex79

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('pt', {
	        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
	        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
	        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
	        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
	        weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY LT',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : 'há %s',
	            s : 'segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : romanian (ro)
	// author : Vlad Gurdiga : https://github.com/gurdiga
	// author : Valentin Agachi : https://github.com/avaly

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	                'mm': 'minute',
	                'hh': 'ore',
	                'dd': 'zile',
	                'MM': 'luni',
	                'yy': 'ani'
	            },
	            separator = ' ';
	        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
	            separator = ' de ';
	        }

	        return number + separator + format[key];
	    }

	    return moment.defineLocale('ro', {
	        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[azi la] LT',
	            nextDay: '[mâine la] LT',
	            nextWeek: 'dddd [la] LT',
	            lastDay: '[ieri la] LT',
	            lastWeek: '[fosta] dddd [la] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'peste %s',
	            past : '%s în urmă',
	            s : 'câteva secunde',
	            m : 'un minut',
	            mm : relativeTimeWithPlural,
	            h : 'o oră',
	            hh : relativeTimeWithPlural,
	            d : 'o zi',
	            dd : relativeTimeWithPlural,
	            M : 'o lună',
	            MM : relativeTimeWithPlural,
	            y : 'un an',
	            yy : relativeTimeWithPlural
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : russian (ru)
	// author : Viktorminator : https://github.com/Viktorminator
	// Author : Menelion Elensúle : https://github.com/Oire

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	            'hh': 'час_часа_часов',
	            'dd': 'день_дня_дней',
	            'MM': 'месяц_месяца_месяцев',
	            'yy': 'год_года_лет'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'минута' : 'минуту';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }

	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	            'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
	        },

	        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function monthsShortCaseReplace(m, format) {
	        var monthsShort = {
	            'nominative': 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	            'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
	        },

	        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return monthsShort[nounCase][m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	            'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
	        },

	        nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/).test(format) ?
	            'accusative' :
	            'nominative';

	        return weekdays[nounCase][m.day()];
	    }

	    return moment.defineLocale('ru', {
	        months : monthsCaseReplace,
	        monthsShort : monthsShortCaseReplace,
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        monthsParse : [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., LT',
	            LLLL : 'dddd, D MMMM YYYY г., LT'
	        },
	        calendar : {
	            sameDay: '[Сегодня в] LT',
	            nextDay: '[Завтра в] LT',
	            lastDay: '[Вчера в] LT',
	            nextWeek: function () {
	                return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
	            },
	            lastWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                    case 0:
	                        return '[В прошлое] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[В прошлый] dddd [в] LT';
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[В прошлую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'через %s',
	            past : '%s назад',
	            s : 'несколько секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'час',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },

	        meridiemParse: /ночи|утра|дня|вечера/i,
	        isPM : function (input) {
	            return /^(дня|вечера)$/.test(input);
	        },

	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночи';
	            } else if (hour < 12) {
	                return 'утра';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечера';
	            }
	        },

	        ordinalParse: /\d{1,2}-(й|го|я)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	                return number + '-й';
	            case 'D':
	                return number + '-го';
	            case 'w':
	            case 'W':
	                return number + '-я';
	            default:
	                return number;
	            }
	        },

	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : slovak (sk)
	// author : Martin Minka : https://github.com/k2s
	// based on work of petrbela : https://github.com/petrbela

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');

	    function plural(n) {
	        return (n > 1) && (n < 5);
	    }

	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	        case 's':  // a few seconds / in a few seconds / a few seconds ago
	            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
	        case 'm':  // a minute / in a minute / a minute ago
	            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
	        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'minúty' : 'minút');
	            } else {
	                return result + 'minútami';
	            }
	            break;
	        case 'h':  // an hour / in an hour / an hour ago
	            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	        case 'hh': // 9 hours / in 9 hours / 9 hours ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'hodiny' : 'hodín');
	            } else {
	                return result + 'hodinami';
	            }
	            break;
	        case 'd':  // a day / in a day / a day ago
	            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
	        case 'dd': // 9 days / in 9 days / 9 days ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'dni' : 'dní');
	            } else {
	                return result + 'dňami';
	            }
	            break;
	        case 'M':  // a month / in a month / a month ago
	            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
	        case 'MM': // 9 months / in 9 months / 9 months ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'mesiace' : 'mesiacov');
	            } else {
	                return result + 'mesiacmi';
	            }
	            break;
	        case 'y':  // a year / in a year / a year ago
	            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
	        case 'yy': // 9 years / in 9 years / 9 years ago
	            if (withoutSuffix || isFuture) {
	                return result + (plural(number) ? 'roky' : 'rokov');
	            } else {
	                return result + 'rokmi';
	            }
	            break;
	        }
	    }

	    return moment.defineLocale('sk', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParse : (function (months, monthsShort) {
	            var i, _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        }(months, monthsShort)),
	        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
	        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[dnes o] LT',
	            nextDay: '[zajtra o] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v nedeľu o] LT';
	                case 1:
	                case 2:
	                    return '[v] dddd [o] LT';
	                case 3:
	                    return '[v stredu o] LT';
	                case 4:
	                    return '[vo štvrtok o] LT';
	                case 5:
	                    return '[v piatok o] LT';
	                case 6:
	                    return '[v sobotu o] LT';
	                }
	            },
	            lastDay: '[včera o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[minulú nedeľu o] LT';
	                case 1:
	                case 2:
	                    return '[minulý] dddd [o] LT';
	                case 3:
	                    return '[minulú stredu o] LT';
	                case 4:
	                case 5:
	                    return '[minulý] dddd [o] LT';
	                case 6:
	                    return '[minulú sobotu o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'pred %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : slovenian (sl)
	// author : Robert Sedovšek : https://github.com/sedovsek

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	        case 'm':
	            return withoutSuffix ? 'ena minuta' : 'eno minuto';
	        case 'mm':
	            if (number === 1) {
	                result += 'minuta';
	            } else if (number === 2) {
	                result += 'minuti';
	            } else if (number === 3 || number === 4) {
	                result += 'minute';
	            } else {
	                result += 'minut';
	            }
	            return result;
	        case 'h':
	            return withoutSuffix ? 'ena ura' : 'eno uro';
	        case 'hh':
	            if (number === 1) {
	                result += 'ura';
	            } else if (number === 2) {
	                result += 'uri';
	            } else if (number === 3 || number === 4) {
	                result += 'ure';
	            } else {
	                result += 'ur';
	            }
	            return result;
	        case 'dd':
	            if (number === 1) {
	                result += 'dan';
	            } else {
	                result += 'dni';
	            }
	            return result;
	        case 'MM':
	            if (number === 1) {
	                result += 'mesec';
	            } else if (number === 2) {
	                result += 'meseca';
	            } else if (number === 3 || number === 4) {
	                result += 'mesece';
	            } else {
	                result += 'mesecev';
	            }
	            return result;
	        case 'yy':
	            if (number === 1) {
	                result += 'leto';
	            } else if (number === 2) {
	                result += 'leti';
	            } else if (number === 3 || number === 4) {
	                result += 'leta';
	            } else {
	                result += 'let';
	            }
	            return result;
	        }
	    }

	    return moment.defineLocale('sl', {
	        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'LT:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY LT',
	            LLLL : 'dddd, D. MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay  : '[danes ob] LT',
	            nextDay  : '[jutri ob] LT',

	            nextWeek : function () {
	                switch (this.day()) {
	                case 0:
	                    return '[v] [nedeljo] [ob] LT';
	                case 3:
	                    return '[v] [sredo] [ob] LT';
	                case 6:
	                    return '[v] [soboto] [ob] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[v] dddd [ob] LT';
	                }
	            },
	            lastDay  : '[včeraj ob] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 6:
	                    return '[prejšnja] dddd [ob] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[prejšnji] dddd [ob] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'čez %s',
	            past   : '%s nazaj',
	            s      : 'nekaj sekund',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'en dan',
	            dd     : translate,
	            M      : 'en mesec',
	            MM     : translate,
	            y      : 'eno leto',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Albanian (sq)
	// author : Flakërim Ismani : https://github.com/flakerimi
	// author: Menelion Elensúle: https://github.com/Oire (tests)
	// author : Oerd Cukalla : https://github.com/oerd (fixes)

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('sq', {
	        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
	        meridiemParse: /PD|MD/,
	        isPM: function (input) {
	            return input.charAt(0) === 'M';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            return hours < 12 ? 'PD' : 'MD';
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[Sot në] LT',
	            nextDay : '[Nesër në] LT',
	            nextWeek : 'dddd [në] LT',
	            lastDay : '[Dje në] LT',
	            lastWeek : 'dddd [e kaluar në] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'në %s',
	            past : '%s më parë',
	            s : 'disa sekonda',
	            m : 'një minutë',
	            mm : '%d minuta',
	            h : 'një orë',
	            hh : '%d orë',
	            d : 'një ditë',
	            dd : '%d ditë',
	            M : 'një muaj',
	            MM : '%d muaj',
	            y : 'një vit',
	            yy : '%d vite'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Serbian-cyrillic (sr-cyrl)
	// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['један минут', 'једне минуте'],
	            mm: ['минут', 'минуте', 'минута'],
	            h: ['један сат', 'једног сата'],
	            hh: ['сат', 'сата', 'сати'],
	            dd: ['дан', 'дана', 'дана'],
	            MM: ['месец', 'месеца', 'месеци'],
	            yy: ['година', 'године', 'година']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    return moment.defineLocale('sr-cyrl', {
	        months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
	        monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
	        weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
	        weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],
	        weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'LT:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY LT',
	            LLLL: 'dddd, D. MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[данас у] LT',
	            nextDay: '[сутра у] LT',

	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[у] [недељу] [у] LT';
	                case 3:
	                    return '[у] [среду] [у] LT';
	                case 6:
	                    return '[у] [суботу] [у] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[у] dddd [у] LT';
	                }
	            },
	            lastDay  : '[јуче у] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[прошле] [недеље] [у] LT',
	                    '[прошлог] [понедељка] [у] LT',
	                    '[прошлог] [уторка] [у] LT',
	                    '[прошле] [среде] [у] LT',
	                    '[прошлог] [четвртка] [у] LT',
	                    '[прошлог] [петка] [у] LT',
	                    '[прошле] [суботе] [у] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past   : 'пре %s',
	            s      : 'неколико секунди',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'дан',
	            dd     : translator.translate,
	            M      : 'месец',
	            MM     : translator.translate,
	            y      : 'годину',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : swedish (sv)
	// author : Jens Alm : https://github.com/ulmus

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('sv', {
	        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Idag] LT',
	            nextDay: '[Imorgon] LT',
	            lastDay: '[Igår] LT',
	            nextWeek: 'dddd LT',
	            lastWeek: '[Förra] dddd[en] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'för %s sedan',
	            s : 'några sekunder',
	            m : 'en minut',
	            mm : '%d minuter',
	            h : 'en timme',
	            hh : '%d timmar',
	            d : 'en dag',
	            dd : '%d dagar',
	            M : 'en månad',
	            MM : '%d månader',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}(e|a)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'e' :
	                (b === 1) ? 'a' :
	                (b === 2) ? 'a' :
	                (b === 3) ? 'e' : 'e';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Serbian-latin (sr)
	// author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jedne minute'],
	            mm: ['minut', 'minute', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mesec', 'meseca', 'meseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    return moment.defineLocale('sr', {
	        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
	        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
	        weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
	        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
	        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'LT:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY LT',
	            LLLL: 'dddd, D. MMMM YYYY LT'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',

	            nextWeek: function () {
	                switch (this.day()) {
	                case 0:
	                    return '[u] [nedelju] [u] LT';
	                case 3:
	                    return '[u] [sredu] [u] LT';
	                case 6:
	                    return '[u] [subotu] [u] LT';
	                case 1:
	                case 2:
	                case 4:
	                case 5:
	                    return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[juče u] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[prošle] [nedelje] [u] LT',
	                    '[prošlog] [ponedeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'pre %s',
	            s      : 'nekoliko sekundi',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'dan',
	            dd     : translator.translate,
	            M      : 'mesec',
	            MM     : translator.translate,
	            y      : 'godinu',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : tamil (ta)
	// author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    /*var symbolMap = {
	            '1': '௧',
	            '2': '௨',
	            '3': '௩',
	            '4': '௪',
	            '5': '௫',
	            '6': '௬',
	            '7': '௭',
	            '8': '௮',
	            '9': '௯',
	            '0': '௦'
	        },
	        numberMap = {
	            '௧': '1',
	            '௨': '2',
	            '௩': '3',
	            '௪': '4',
	            '௫': '5',
	            '௬': '6',
	            '௭': '7',
	            '௮': '8',
	            '௯': '9',
	            '௦': '0'
	        }; */

	    return moment.defineLocale('ta', {
	        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, LT',
	            LLLL : 'dddd, D MMMM YYYY, LT'
	        },
	        calendar : {
	            sameDay : '[இன்று] LT',
	            nextDay : '[நாளை] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[நேற்று] LT',
	            lastWeek : '[கடந்த வாரம்] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s இல்',
	            past : '%s முன்',
	            s : 'ஒரு சில விநாடிகள்',
	            m : 'ஒரு நிமிடம்',
	            mm : '%d நிமிடங்கள்',
	            h : 'ஒரு மணி நேரம்',
	            hh : '%d மணி நேரம்',
	            d : 'ஒரு நாள்',
	            dd : '%d நாட்கள்',
	            M : 'ஒரு மாதம்',
	            MM : '%d மாதங்கள்',
	            y : 'ஒரு வருடம்',
	            yy : '%d ஆண்டுகள்'
	        },
	/*        preparse: function (string) {
	            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },*/
	        ordinalParse: /\d{1,2}வது/,
	        ordinal : function (number) {
	            return number + 'வது';
	        },


	        // refer http://ta.wikipedia.org/s/1er1
	        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 2) {
	                return ' யாமம்';
	            } else if (hour < 6) {
	                return ' வைகறை';  // வைகறை
	            } else if (hour < 10) {
	                return ' காலை'; // காலை
	            } else if (hour < 14) {
	                return ' நண்பகல்'; // நண்பகல்
	            } else if (hour < 18) {
	                return ' எற்பாடு'; // எற்பாடு
	            } else if (hour < 22) {
	                return ' மாலை'; // மாலை
	            } else {
	                return ' யாமம்';
	            }
	        },
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'யாமம்') {
	                return hour < 2 ? hour : hour + 12;
	            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	                return hour;
	            } else if (meridiem === 'நண்பகல்') {
	                return hour >= 10 ? hour : hour + 12;
	            } else {
	                return hour + 12;
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : thai (th)
	// author : Kridsada Thanabulpong : https://github.com/sirn

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('th', {
	        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	        monthsShort : 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
	        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	        longDateFormat : {
	            LT : 'H นาฬิกา m นาที',
	            LTS : 'LT s วินาที',
	            L : 'YYYY/MM/DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY เวลา LT',
	            LLLL : 'วันddddที่ D MMMM YYYY เวลา LT'
	        },
	        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	        isPM: function (input) {
	            return input === 'หลังเที่ยง';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ก่อนเที่ยง';
	            } else {
	                return 'หลังเที่ยง';
	            }
	        },
	        calendar : {
	            sameDay : '[วันนี้ เวลา] LT',
	            nextDay : '[พรุ่งนี้ เวลา] LT',
	            nextWeek : 'dddd[หน้า เวลา] LT',
	            lastDay : '[เมื่อวานนี้ เวลา] LT',
	            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'อีก %s',
	            past : '%sที่แล้ว',
	            s : 'ไม่กี่วินาที',
	            m : '1 นาที',
	            mm : '%d นาที',
	            h : '1 ชั่วโมง',
	            hh : '%d ชั่วโมง',
	            d : '1 วัน',
	            dd : '%d วัน',
	            M : '1 เดือน',
	            MM : '%d เดือน',
	            y : '1 ปี',
	            yy : '%d ปี'
	        }
	    });
	}));


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Tagalog/Filipino (tl-ph)
	// author : Dan Hagman

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('tl-ph', {
	        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'MM/D/YYYY',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY LT',
	            LLLL : 'dddd, MMMM DD, YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Ngayon sa] LT',
	            nextDay: '[Bukas sa] LT',
	            nextWeek: 'dddd [sa] LT',
	            lastDay: '[Kahapon sa] LT',
	            lastWeek: 'dddd [huling linggo] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'sa loob ng %s',
	            past : '%s ang nakalipas',
	            s : 'ilang segundo',
	            m : 'isang minuto',
	            mm : '%d minuto',
	            h : 'isang oras',
	            hh : '%d oras',
	            d : 'isang araw',
	            dd : '%d araw',
	            M : 'isang buwan',
	            MM : '%d buwan',
	            y : 'isang taon',
	            yy : '%d taon'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : turkish (tr)
	// authors : Erhan Gundogan : https://github.com/erhangundogan,
	//           Burak Yiğit Kaya: https://github.com/BYK

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    var suffixes = {
	        1: '\'inci',
	        5: '\'inci',
	        8: '\'inci',
	        70: '\'inci',
	        80: '\'inci',

	        2: '\'nci',
	        7: '\'nci',
	        20: '\'nci',
	        50: '\'nci',

	        3: '\'üncü',
	        4: '\'üncü',
	        100: '\'üncü',

	        6: '\'ncı',

	        9: '\'uncu',
	        10: '\'uncu',
	        30: '\'uncu',

	        60: '\'ıncı',
	        90: '\'ıncı'
	    };

	    return moment.defineLocale('tr', {
	        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd, D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[yarın saat] LT',
	            nextWeek : '[haftaya] dddd [saat] LT',
	            lastDay : '[dün] LT',
	            lastWeek : '[geçen hafta] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s önce',
	            s : 'birkaç saniye',
	            m : 'bir dakika',
	            mm : '%d dakika',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir yıl',
	            yy : '%d yıl'
	        },
	        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '\'ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;

	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
	// author : Abdel Said : https://github.com/abdelsaid

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('tzm-latn', {
	        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[asdkh g] LT',
	            nextDay: '[aska g] LT',
	            nextWeek: 'dddd [g] LT',
	            lastDay: '[assant g] LT',
	            lastWeek: 'dddd [g] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dadkh s yan %s',
	            past : 'yan %s',
	            s : 'imik',
	            m : 'minuḍ',
	            mm : '%d minuḍ',
	            h : 'saɛa',
	            hh : '%d tassaɛin',
	            d : 'ass',
	            dd : '%d ossan',
	            M : 'ayowr',
	            MM : '%d iyyirn',
	            y : 'asgas',
	            yy : '%d isgasn'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : Morocco Central Atlas Tamaziɣt (tzm)
	// author : Abdel Said : https://github.com/abdelsaid

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('tzm', {
	        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS: 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'dddd D MMMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	            nextWeek: 'dddd [ⴴ] LT',
	            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	            lastWeek: 'dddd [ⴴ] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	            past : 'ⵢⴰⵏ %s',
	            s : 'ⵉⵎⵉⴽ',
	            m : 'ⵎⵉⵏⵓⴺ',
	            mm : '%d ⵎⵉⵏⵓⴺ',
	            h : 'ⵙⴰⵄⴰ',
	            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	            d : 'ⴰⵙⵙ',
	            dd : '%d oⵙⵙⴰⵏ',
	            M : 'ⴰⵢoⵓⵔ',
	            MM : '%d ⵉⵢⵢⵉⵔⵏ',
	            y : 'ⴰⵙⴳⴰⵙ',
	            yy : '%d ⵉⵙⴳⴰⵙⵏ'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : ukrainian (uk)
	// author : zemlanin : https://github.com/zemlanin
	// Author : Menelion Elensúle : https://github.com/Oire

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'хвилина_хвилини_хвилин',
	            'hh': 'година_години_годин',
	            'dd': 'день_дні_днів',
	            'MM': 'місяць_місяці_місяців',
	            'yy': 'рік_роки_років'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвилина' : 'хвилину';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'година' : 'годину';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }

	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
	            'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
	        },

	        nounCase = (/D[oD]? *MMMM?/).test(format) ?
	            'accusative' :
	            'nominative';

	        return months[nounCase][m.month()];
	    }

	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	        },

	        nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
	            'accusative' :
	            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
	                'genitive' :
	                'nominative');

	        return weekdays[nounCase][m.day()];
	    }

	    function processHoursFunction(str) {
	        return function () {
	            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	        };
	    }

	    return moment.defineLocale('uk', {
	        months : monthsCaseReplace,
	        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY р.',
	            LLL : 'D MMMM YYYY р., LT',
	            LLLL : 'dddd, D MMMM YYYY р., LT'
	        },
	        calendar : {
	            sameDay: processHoursFunction('[Сьогодні '),
	            nextDay: processHoursFunction('[Завтра '),
	            lastDay: processHoursFunction('[Вчора '),
	            nextWeek: processHoursFunction('[У] dddd ['),
	            lastWeek: function () {
	                switch (this.day()) {
	                case 0:
	                case 3:
	                case 5:
	                case 6:
	                    return processHoursFunction('[Минулої] dddd [').call(this);
	                case 1:
	                case 2:
	                case 4:
	                    return processHoursFunction('[Минулого] dddd [').call(this);
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past : '%s тому',
	            s : 'декілька секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'годину',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'місяць',
	            MM : relativeTimeWithPlural,
	            y : 'рік',
	            yy : relativeTimeWithPlural
	        },

	        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason

	        meridiemParse: /ночі|ранку|дня|вечора/,
	        isPM: function (input) {
	            return /^(дня|вечора)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночі';
	            } else if (hour < 12) {
	                return 'ранку';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечора';
	            }
	        },

	        ordinalParse: /\d{1,2}-(й|го)/,
	        ordinal: function (number, period) {
	            switch (period) {
	            case 'M':
	            case 'd':
	            case 'DDD':
	            case 'w':
	            case 'W':
	                return number + '-й';
	            case 'D':
	                return number + '-го';
	            default:
	                return number;
	            }
	        },

	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : uzbek (uz)
	// author : Sardor Muminov : https://github.com/muminoff

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('uz', {
	        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY LT',
	            LLLL : 'D MMMM YYYY, dddd LT'
	        },
	        calendar : {
	            sameDay : '[Бугун соат] LT [да]',
	            nextDay : '[Эртага] LT [да]',
	            nextWeek : 'dddd [куни соат] LT [да]',
	            lastDay : '[Кеча соат] LT [да]',
	            lastWeek : '[Утган] dddd [куни соат] LT [да]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'Якин %s ичида',
	            past : 'Бир неча %s олдин',
	            s : 'фурсат',
	            m : 'бир дакика',
	            mm : '%d дакика',
	            h : 'бир соат',
	            hh : '%d соат',
	            d : 'бир кун',
	            dd : '%d кун',
	            M : 'бир ой',
	            MM : '%d ой',
	            y : 'бир йил',
	            yy : '%d йил'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : vietnamese (vi)
	// author : Bang Nguyen : https://github.com/bangnk

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('vi', {
	        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'LT:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM [năm] YYYY',
	            LLL : 'D MMMM [năm] YYYY LT',
	            LLLL : 'dddd, D MMMM [năm] YYYY LT',
	            l : 'DD/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY LT',
	            llll : 'ddd, D MMM YYYY LT'
	        },
	        calendar : {
	            sameDay: '[Hôm nay lúc] LT',
	            nextDay: '[Ngày mai lúc] LT',
	            nextWeek: 'dddd [tuần tới lúc] LT',
	            lastDay: '[Hôm qua lúc] LT',
	            lastWeek: 'dddd [tuần rồi lúc] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s tới',
	            past : '%s trước',
	            s : 'vài giây',
	            m : 'một phút',
	            mm : '%d phút',
	            h : 'một giờ',
	            hh : '%d giờ',
	            d : 'một ngày',
	            dd : '%d ngày',
	            M : 'một tháng',
	            MM : '%d tháng',
	            y : 'một năm',
	            yy : '%d năm'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : chinese (zh-cn)
	// author : suupic : https://github.com/suupic
	// author : Zeno Zeng : https://github.com/zenozeng

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('zh-cn', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah点mm',
	            LTS : 'Ah点m分s秒',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日LT',
	            LLLL : 'YYYY年MMMD日ddddLT',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日LT',
	            llll : 'YYYY年MMMD日ddddLT'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' ||
	                    meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : function () {
	                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	            },
	            nextDay : function () {
	                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	            },
	            lastDay : function () {
	                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	            },
	            nextWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            lastWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            sameElse : 'LL'
	        },
	        ordinalParse: /\d{1,2}(日|月|周)/,
	        ordinal : function (number, period) {
	            switch (period) {
	            case 'd':
	            case 'D':
	            case 'DDD':
	                return number + '日';
	            case 'M':
	                return number + '月';
	            case 'w':
	            case 'W':
	                return number + '周';
	            default:
	                return number;
	            }
	        },
	        relativeTime : {
	            future : '%s内',
	            past : '%s前',
	            s : '几秒',
	            m : '1分钟',
	            mm : '%d分钟',
	            h : '1小时',
	            hh : '%d小时',
	            d : '1天',
	            dd : '%d天',
	            M : '1个月',
	            MM : '%d个月',
	            y : '1年',
	            yy : '%d年'
	        },
	        week : {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	}));


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js locale configuration
	// locale : traditional chinese (zh-tw)
	// author : Ben : https://github.com/ben-lin

	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(187)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('../moment')); // Node
	    } else {
	        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
	    }
	}(function (moment) {
	    return moment.defineLocale('zh-tw', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah點mm',
	            LTS : 'Ah點m分s秒',
	            L : 'YYYY年MMMD日',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日LT',
	            LLLL : 'YYYY年MMMD日ddddLT',
	            l : 'YYYY年MMMD日',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日LT',
	            llll : 'YYYY年MMMD日ddddLT'
	        },
	        meridiemParse: /早上|上午|中午|下午|晚上/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : '[今天]LT',
	            nextDay : '[明天]LT',
	            nextWeek : '[下]ddddLT',
	            lastDay : '[昨天]LT',
	            lastWeek : '[上]ddddLT',
	            sameElse : 'L'
	        },
	        ordinalParse: /\d{1,2}(日|月|週)/,
	        ordinal : function (number, period) {
	            switch (period) {
	            case 'd' :
	            case 'D' :
	            case 'DDD' :
	                return number + '日';
	            case 'M' :
	                return number + '月';
	            case 'w' :
	            case 'W' :
	                return number + '週';
	            default :
	                return number;
	            }
	        },
	        relativeTime : {
	            future : '%s內',
	            past : '%s前',
	            s : '幾秒',
	            m : '一分鐘',
	            mm : '%d分鐘',
	            h : '一小時',
	            hh : '%d小時',
	            d : '一天',
	            dd : '%d天',
	            M : '一個月',
	            MM : '%d個月',
	            y : '一年',
	            yy : '%d年'
	        }
	    });
	}));


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});

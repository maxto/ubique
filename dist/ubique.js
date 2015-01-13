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

		// set some CONSTANTS
		ubique.inf = Number.POSITIVE_INFINITY;
		ubique.eps = 2.2204460492503130808472633361816E-16;
		ubique.maxval = Number.MAX_VALUE;

		// load all functions from LIB folder
		/*
		var libfolder = ['datatype','elemop','elmath','linalgebra','matarrs','probdistr','quants','reglin','stats'];
		var fs = require('fs');
		for (var i = 0;i < libfolder.length;i++) {
			fs.readdirSync(__dirname + '/lib/' + libfolder[i] + '/').forEach(function(file) {
				require(__dirname + '/lib/' + libfolder[i] + '/' + file)(ubique);
			});
		}
		*/
		__webpack_require__(1)(ubique);
	  __webpack_require__(2)(ubique);
		return ubique;

	}

	// create an instance of UBIQUE
	var ubique = loader()

	module.exports = ubique;















/***/ },
/* 1 */
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
/* 2 */
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
	  /*
	 	if (arguments.length === 0) {
	 		throw new Error('not enough input arguments');
	 	}
	 	if (arguments.length === 1) {
	 		dim = 1;
	 	}
	 	if (ubique.isnumber(x)) {
	 		return x;
	 	}
	 	if (ubique.isarray(x)) {
	 		return  ubique.sum(x,dim) / ubique.numel(x);
	 	}
	 	return ubique.rdivide(ubique.sum(x,dim),ubique.size(x)[1 - dim]);
	  */
	 return $u.isnumber(x);
	 }

	}

/***/ }
/******/ ])
});
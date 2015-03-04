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
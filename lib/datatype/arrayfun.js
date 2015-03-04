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
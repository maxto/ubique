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
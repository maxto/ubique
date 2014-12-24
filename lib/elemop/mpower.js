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
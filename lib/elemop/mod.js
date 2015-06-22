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
 * // [ 2, 1.8 ]
 * 
 * ubique.mod([13,-7],[5,6]);
 * // [ 3, 5 ]
 * 
 * ubique.mod(a,b);
 * // [[ 0, 0, 0 ], [ 3, 3, 8 ]]
 */
 $u.mod = function(x,y) {
 	if (arguments.length < 2) {
 		throw new Error('not enough input arguments');
 	}
 	var n = $u.floor($u.rdivide(x,y));
 	return $u.minus(x,$u.times(n,y));
 }

}
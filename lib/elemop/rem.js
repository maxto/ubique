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
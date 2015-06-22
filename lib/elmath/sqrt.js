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
 * ubique.sqrt(6);
 * // 2.44949
 * ubique.sqrt([5,6,3]);
 * // [ 2.23607, 2.44949, 1.73205 ]
 * ubique.sqrt([[5,6,5],[7,8,2]]);
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
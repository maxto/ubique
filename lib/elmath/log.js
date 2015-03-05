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
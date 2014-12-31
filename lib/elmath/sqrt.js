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
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.sqrt(6); // 2.44949
 * ubique.sqrt(c); // [2.23607, 2.44949, 1.73205]
 * ubique.sqrt(a); // [[2.23607, 2.44949, 2.23607], [2.64575, 2.82843, NaN]]
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
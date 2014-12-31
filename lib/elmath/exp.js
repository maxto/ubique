/**
 * Exponents and Logarithms
 */
 module.exports = function($u) {
/**
 * @method exp
 * @summary Exponential value
 * @description Exponential value
 * 
 * @param  {number|array|matrix} x element
 * @return {number|array|matrix}   
 *
 * @example  
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.exp(6); // 403.429
 * ubique.exp(c); // [148.413, 403.429, 20.0855]
 * ubqie.exp(a); // [[148.413, 403.429, 148.413], [1096.63, 2980.96, 0.367879]]
 */
 $u.exp = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	var fun = Math.exp;
 	if ($u.isnumber(x)) {
 		return fun(x);
 	}
 	return $u.arrayfun(x,fun)
 }

}
/**
 * Complex Numbers
 */
 module.exports = function($u) {
/**
 * @method abs
 * @summary Absolute value
 * @description Absolute value
 * 
 * @param  {number|array|matrix} x number or array of values
 * @return {number|array|matrix}   
 *
 * @example
 * ubique.abs(-0.5);
 * // -1
 * 
 * ubique.abs([0.1,-0.5]);
 * // [0.1, 0.5]
 * 
 * ubique.abs([[5,-2],[-3,4]]);
 * // [[5, 2], [3, 4]]
 */
 $u.abs = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	var fun = Math.abs;
 	if ($u.isnumber(x)) {
 		return fun(x);
 	}
 	return $u.arrayfun(x,fun);
 }

}
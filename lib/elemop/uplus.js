/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method uplus
 * @summary Unary plus +X
 * @description Unary plus +X
 * 
 * @param  {number|array|matrix} x number or array of values
 * @return {number|array|matrix}
 *
 * @example
 * ubique.uplus(-5);
 * // -5
 * ubique.uplus([5,6]);
 * // [5, 6]
 * ubique.uplus([[5,6],[-1,-3]]);
 * // [[5, 6], [-1, -3]]
 */
 $u.uplus = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {return x;}
 	return $u.arrayfun(x,function(a){return a;});
 }

}
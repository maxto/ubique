/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method fix
 * @summary Round toward zero
 * @description Round toward zero
 * 
 * @param  {number|array|matrix} x number or array of values
 * @return {number|array|matrix}
 *
 * @example
 * ubique.fix(3.78);
 * // 3
 * 
 * ubique.fix([4.51,-1.4]);
 * // [ 4, -1 ]
 * 
 * ubique.fix([[4.51,-1.4],[3.78,0.01]]);
 * // [ [ 4, -1 ], [ 3, 0 ] ]
 */
 $u.fix = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	var _fix = function(a) {
 		return a < 0 ? Math.ceil(a) : Math.floor(a);
 	}
 	return $u.arrayfun(x,_fix);
 }

}
/**
 * Complex Numbers
 */
 module.exports = function($u) {
/**
 * @method sign
 * @summary Signum function
 * @description Signum function
 * 
 * @param  {number|array|matrix} x element
 * @return {number|array|matrix}   
 *
 * @example
 * ubique.sign(-0.5);
 * // -1
 * 
 * ubique.sign([0.1,-0.5]);
 * // [1, -1]
 * 
 * ubique.sign([[5,-2],[-3,4]]);
 * // [[1, -1], [-1, 1]]
 */
 $u.sign = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	var _sign = function(val) {
 		if ($u.isnumber(val)) {
 			if (val > 0) {
 				return 1;
 			} else
 			if (val < 0) {
 				return -1;
 			}
 			return 0;
 		} else {
 			return NaN;
 		}
 	}
 	if ($u.isnumber(x)) {
 		return _sign(x);
 	}
 	return $u.arrayfun(x,_sign)
 }

}
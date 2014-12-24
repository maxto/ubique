/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method cumdev
 * @summary Cumulative mean deviation
 * @description  Cumulative mean deviation of the values in array X
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {array|matrix}   
 *
 * @example
 * var b = [[-1,3,-1],[4,5,9]];
 * var c = [5,6,3];
 *
 * ubique.cumdev(c); // [0.333333, 1.66667, -8.88178e-16]
 * ubique.cumdev(b,0); // [[-1.33333, 1.33333, 0], [-2, -3, 0]]
 * ubique.cumdev(b); // [[-2.5, -1, -5], [0, 0, 0]]
 */
 $u.cumdev = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	var _cumdev = function(a) {
 		return $u.cumsum($u.minus(a,$u.mean(a)));
 	}
 	if ($u.isarray(x)) {
 		return _cumdev(x);
 	}
 	return $u.vectorfun(x,function(val){return _cumdev(val);},dim);
 }

}
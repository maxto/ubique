/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method median
 * @summary Median value of array
 * @description Median value of array
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}   
 *
 * @example
 * ubique.median([5,6,3]);
 * // 4.66667
 * 
 * ubique.median([[5,6,5],[7,8,-1]]);
 * // [ [ 5 ], [ 7 ] ]
 * 
 * ubique.median([[5,6,5],[7,8,-1]],1);
 * // [ [ 6, 7, 2 ] ]
 */
 $u.median = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	dim  = dim == null ? 0 : dim;

 	var _median = function(a) {
 		var n = a.length - 1;
 		var idx = $u.max(1,Math.floor(n / 2));
 		var _a = $u.sort(a);
 		if( n % 2 === 0 ) {
 			return _a[idx];
 		} else {
 			return (_a[idx - 1] + _a[idx]) / 2;
 		}
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	}
 	return $u.vectorfun(dim,x,_median);
 }

}

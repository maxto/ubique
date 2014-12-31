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
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.median(c); // 4.66667
 * ubique.median(a,0); // [5.33333, 4.66667]
 * ubique.median(a); // [6, 7, 2]
 */
 $u.median = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	var _median = function(a) {
 		var n = a.length - 1,
 		idx = $u.max(1,Math.floor(n / 2)),
 		_a = $u.sort(a);
 		if( n % 2 === 0 ) {
 			return _a[idx];
 		} else {
 			return (_a[idx - 1] + _a[idx]) / 2;
 		}
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	}
 	if ($u.isarray(x)) {
 		return  _median(x);
 	}
 	return $u.vectorfun(x,function(val){return _median(val);},dim);
 }

}

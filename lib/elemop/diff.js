/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method diff
 * @summary Differences between adjacent elements in array 
 * @description Differences between adjacent elements in array or matrix 
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {array|matrix}   
 *
 * @example
 * ubique.diff([5,6,3]);
 * // [1, -3]
 * ubique.diff([[5,6,5],[7,8,-1]]);
 * // [[2, 2, -6]]
 * ubique.diff([[5,6,5],[7,8,-1]],0);
 * // [[1, -1], [1, -9]]
 */
 $u.diff = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	var _diff =  function(a) {
 		var v = new Array(a.length - 1);
 		for (var i = 1;i < a.length;i++) {
 			v[i - 1] = a[i] - a[i - 1];
 		}
 		return v;
 	}
 	if ($u.isarray(x)) {
 		return _diff(x);
 	}
 	return $u.vectorfun(x,function(val){return _diff(val);},dim);
 }

}
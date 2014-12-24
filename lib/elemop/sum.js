/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method sum
 * @summary Sum of array elements
 * @description Sum of array elements
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension, 1: column 0: row (def: 1)
 * @return {number|array}   
 *
 * @example
 * ubique.sum([5,6,3]); // 14
 * ubique.sum([[5,6,5],[7,8,-1]],0); // [16, 14]
 * ubique.sum([[5,6,5],[7,8,-1]],1); // [[12, 14, 4]]
 */
 $u.sum = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	var _sum = function(a) {
 		var sum = 0;
 		for (var i = 0;i < a.length;i++) {
 			sum += a[i];
 		}
 		return sum;
 	}
 	if ($u.isarray(x)) {
 		return _sum(x);
 	}
 	return $u.vectorfun(x,function(val){return _sum(val);},dim);
 }

}
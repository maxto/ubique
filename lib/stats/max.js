/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method  max
 * @summary Largest element in array
 * @description Largest element in array
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {number|array|matrix}
 *
 * @example
 * var b = [[-1,3,-1],[4,5,9]];
 * 
 * ubique.max([5,6,-1]); // 6
 * ubique.max(b,0); // [3, 9]
 * ubique.max(b); // [[4, 5, 9]]
 */
 $u.max = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	} else
 	if ($u.isarray(x)) {
 		return  Math.max.apply(Math,x);
 	}
 	return $u.vectorfun(x,function(val){return Math.max.apply(Math,val);},dim);
 }
}

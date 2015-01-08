/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method min
 * @summary Smallest element in array
 * @description Smallest element in array
 *
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {number|array|matrix}
 *
 * @example
 * var b = [[-1,3,-1],[4,5,9]];
 *
 * ubique.min([5,6,-1]); // -1
 * ubique.min(b,0); // [-1, 4]
 * ubique.min(b); // [[-1, 3, -1]]
 */
 $u.min = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	} 
 	if ($u.isarray(x)) {
 		return  Math.min.apply(Math,x);
 	}
 	return $u.vectorfun(x,function(val){return Math.min.apply(Math,val);},dim);
 }
}

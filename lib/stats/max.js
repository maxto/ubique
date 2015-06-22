/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method max
 * @summary Largest element in array
 * @description Largest element in array
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {number|array|matrix}
 *
 * @example 
 * ubique.max([5,6,-1]);
 * // 6
 * 
 * ubique.max([[-1,3,-1],[4,5,9]]);
 * // [ [ 3 ], [ 9 ] ]
 * 
 * ubique.max([[-1,3,-1],[4,5,9]],1);
 * // [ [ 4, 5, 9 ] ]
 */
 $u.max = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  dim  = dim == null ? 0 : dim;
  var _max = function(a) {
    return Math.max.apply(null,a);
  }
  if ($u.isnumber(x)) {
   return x;
 }
 return $u.vectorfun(dim,x,_max);
}
}

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
 * @param  {number} dim dimension selected, 1: column 0: row (def: 0)
 * @return {number|array|matrix}
 *
 * @example 
 * ubique.min([5,6,-1]);
 * // -1
 * 
 * ubique.min([[-1,3,-1],[4,5,9]]);
 * // [ [ -1 ], [ 4 ] ]
 * 
 * ubique.min([[-1,3,-1],[4,5,9]],1);
 * // [ [ -1, 3, -1 ] ]
 */
 $u.min = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  dim  = dim == null ? 0 : dim;
  var _min = function(a) {
    return Math.min.apply(null,a);
  }
  if ($u.isnumber(x)) {
   return 0;
 }
 return $u.vectorfun(dim,x,_min);
}
}

/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method prod
 * @summary Product of array elements
 * @description Product of array elements
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension, 1: column 0: row (def: 1)
 * @return {number|array}   
 *
 * @example
 * ubique.prod([5,6,3]);
 * // 90
 * 
 * ubique.prod([[5,6,5],[7,8,-1]],0);
 * // [ [ 150 ], [ -56 ] ]
 * 
 * ubique.prod([[5,6,5],[7,8,-1]],1);
 * // [ [ 35, 48, -5 ] ]
 */
 $u.prod = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  dim = dim == null ? 1 : dim;
  var _prod = function(a) {
    var prod = 1;
    for (var i = 0;i < a.length;i++) {
      prod *= a[i];
    }
    return prod;
  }
  return $u.vectorfun(dim,x,_prod);
}
}
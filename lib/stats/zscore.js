/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method zscore
 * @summary Standardized Z score
 * @description Standardized Z score
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} flag normalization value 0: population, 1:sample (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}   
 *
 * @example
 * ubique.zscore([5,6,3]);
 * // [ 0.218218, 0.872872, -1.091089 ]
 * 
 * ubique.zscore([[5,6,5],[7,8,-1]]);
 * // [ [ -0.57735, 1.154701, -0.57735 ],[ 0.473016, 0.675737, -1.148754 ] ]
 * 
 * ubique.zscore([[5,6,5],[7,8,-1]],0,1);
 * // [ [ -1, -1, 1 ], [ 1, 1, -1 ] ]
 */
 $u.zscore = function(x,flag,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	flag = flag == null ? 1 : flag;
  dim  = dim == null ? 0 : dim;

  var _zscore = function(a,flag) {
    return $u.rdivide($u.minus(a,$u.mean(a)),$u.std(a,flag));
  }
  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_zscore,flag);
}

}
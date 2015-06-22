/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method skewness
 * @summary Skewness
 * @description Skewness
 * 
 * @param  {array|matrix} x array or matrix of elements
 * @param  {number} flag 0: bias correction, 1: simple (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.skewness(x);
 * // 0.617481
 * 
 * ubique.skewness(ubique.cat(0,x,y));
 * // [ [ 0.617481 ], [ -0.118909 ] ]
 */
 $u.skewness = function(x,flag,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	flag = flag == null ? 1 : flag;
  dim  = dim == null ? 0 : dim;

  var _skewness = function(a,flag) {
    var n = a.length;
    var mom3 = $u.moment(a,3) / Math.pow($u.moment(a,2),1.5);
    return flag === 1 ? mom3: Math.sqrt((n - 1) / n) * (n / (n - 2)) * mom3;
  }
  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_skewness,flag);
}
}
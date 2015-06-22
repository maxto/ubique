/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method upsidepot
 * @summary Upside potential
 * @description Upside potential
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} mar minimum acceptable return (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.upsidepot(x,0.1/100);
 * // 0.0194
 * 
 * ubique.upsidepot(ubique.cat(0,x,y));
 * // [ [ 0.0202 ], [ 0.0299 ] ]
 */
 $u.upsidepot = function(x,mar,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  mar = mar == null ? 0 : mar;
  dim = dim == null ? 0 : dim;

  var _usp = function(a,mar) {
    var z = 0;
    for (var i = 0;i < a.length;i++) {
      z += Math.max(a[i] - mar,0) / a.length;
    }
    return z;
  }
  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_usp,mar);
}
}
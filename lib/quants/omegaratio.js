/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method omegaratio
 * @summary Omega ratio
 * @description Omega ratio
 * 
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {number} mar minimum acceptable return (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.omegaratio(x);
 * // 8.782609
 * 
 * ubique.omegaratio(ubique.cat(0,x,y));
 * // [ [ 8.782609 ], [ 1.728324 ] ]
 */
 $u.omegaratio = function(x,mar,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  mar = mar == null ? 0 : dim;
  dim = dim == null ? 0 : dim;
  var _or = function(a,mar) {
    return $u.upsidepot(a,mar) / $u.downsidepot(a,mar);
  }
  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_or,mar);
}
}

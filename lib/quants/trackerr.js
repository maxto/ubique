/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method trackerr
 * @summary Tracking Error (ex-post)
 * @description  Ex-post tracking error
 * 
 * @param  {array|matrix} x array or matrix of X values
 * @param  {array} y array of Y values
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array|matrix}   
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 * var cat = ubique.cat;
 * 
 * ubique.trackerr(x,z);
 * // 0.068436
 *
 * ubique.trackerr(cat(0,x,y),z);
 * // [ [ 0.068436 ], [ 0.058622 ] ]
 */
 $u.trackerr = function(x,y,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  dim = dim == null ? 0 : dim;
  var _te = function(a,b) {
    return $u.std($u.minus(a,b));
  }
  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_te,y);
}
}
/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method percpos
 * @summary Percentage of positive values in array or matrix
 * @description Percentage of positive values in array or matrix
 * 
 * @param  {array|matrix} x array of elements
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.percpos(x);
 * // 0.8
 * 
 * ubique.percpos(ubique.cat(0,x,y));
 * // [ [ 0.8 ], [ 0.5 ] ]
 * 
 * ubique.percpos(ubique.cat(0,x,y),1);
 * // [ [ 0.5, 1, 1, 0, 0.5, 1, 0.5, 0.5, 0.5, 1 ] ]
 */
 $u.percpos = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  dim = dim == null ? 0 : dim;

  var _percpos = function(a) {
    var count = 0;
    for (var i = 0;i < a.length;i++) {
      if (a[i] >= 0) {
        count++;
      } 
    }
    return count / a.length;
  }
  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_percpos);
}
}
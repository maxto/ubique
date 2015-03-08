/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method ror
 * @summary Simple rate of return
 * @description Simple rate of return calculated from the last and the first value of 
 * an array of numbers.
 * 
 * @param  {array!matrix} x array or matrix of values
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var q = [[89,23,12],[34,5,70]];
 * 
 * ubique.ror([100,112]);
 * // 0.12
 * ubique.ror(q);
 * // [[-0.617978, -0.782609, 4.83333]]
 * ubique.ror(q,0);
 * // [-0.865169, 1.05882]
 */
 $u.ror = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  var _ror = function(a) {
    return a[a.length - 1] / a[0] - 1;
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return  _ror(x);
  }
  return $u.vectorfun(x,function(val){return _ror(val);},dim);
}
}
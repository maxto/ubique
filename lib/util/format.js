/**
 * Utility
 */
 module.exports = function ($u) {
/**
 * @method format
 * @summary Set display format for output (numbers)
 * @description Set display format for output (numbers)
 * 
 * @param  {number|array|matrix} x input element
 * @param  {number} k number of decimals (def: 4 decimals)
 * @return {nuber|array|matrix}
 *  
 * @example
 * ubique.format(5.6677798348349,0);
 * // 6
 * ubique.format([4.5565667,0.000002323234]);
 * // [ 4.5565, 0 ]
 * ubique.format([[-1000.47748,0.000002],[0.1483478,10.111100]],2);
 * // [ [ -1000.48, 0 ], [ 0.15, 10.11 ] ]
 */
 $u.format = function (x,k) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    k = 4;
  }
  if ($u.isnumber(x)) {
    return parseFloat(x.toFixed(k));
  } else 
  if ($u.isarray(x) || $u.ismatrix(x)) {
    return $u.arrayfun(x,function(val) {return parseFloat(val.toFixed(k));});
  } else {
    return x;
  }
}
}
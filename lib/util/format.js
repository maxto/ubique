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
 * @param  {number} k number of decimals (def: 6 decimals)
 * @return {nuber|array|matrix}
 *  
 * @example
 * ubique.format(5.6677798348349,0);
 * // 6
 * 
 * ubique.format([[-1000.47748,0.000002],[0.1483478,10.111100]],2);
 * // [ [ -1000.48, 0 ], [ 0.15, 10.11 ] ]
 */
 $u.format = function (x,k) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (!$u.isnumber(k)) {
    k = 6;
  }
  var _format = function(a,k) {
    return parseFloat(a.toFixed(k));
  }
  return $u.arrayfun(x,_format,k);
}
}
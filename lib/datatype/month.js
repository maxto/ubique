/**
 * Dates and Time
 */
 module.exports = function($u) {
/**
 * @method month
 * @summary Month of date
 * @description Returns a number representing the month for each element in X.
 * Months are 0 indexed, Jan is 0 and Dec is 11.
 * Based on [moment.js](http://momentjs.com)
 * 
 * @param  {number|array|matrix} x serial date number (Unix)
 * @return {number|array|matrix}
 *
 * @example
 * ubique.month(1424708525);
 * // 1
 * ubique.month([1414886399,1414972799]);
 * // [ 10, 10 ]
 * ubique.month([[1414886399,1414972799],[1415059199,1415145599]]);
 * // [ [ 10, 10 ], [ 10, 10 ] ]
 */
 $u.month = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  var _month = function(a) {
    return $u.__moment.unix(a).month();
  }
  if ($u.isnumber(x)) {
    return _month(x);
  } 
  if ($u.isarray(x) || $u.ismatrix(x)) {
    return  $u.arrayfun(x,function(arr){return _month(arr);});
  }
}
}

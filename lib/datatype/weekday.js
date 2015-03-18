/**
 * Dates and Time
 */
 module.exports = function($u) {
/**
 * @method weekday
 * @summary Day of week
 * @description Returns a number representing the day of the week for each element in X.
 * The ISO day of the week begins with 1 Monday, 2 Tuesday ... 7 Sunday.
 * Based on [moment.js](http://momentjs.com)
 * 
 * @param  {number|array|matrix} x serial date number (Unix)
 * @return {number|array|matrix}
 *
 * @example
 * ubique.weekday(1426636800);
 * // 3
 * ubique.weekday([ 1424908800, 1426636800 ]);
 * // [ 4, 3 ]
 * ubique.weekday([ [ 1424908800, 1426636800 ], [ 1427328000, 1429315200 ] ]);
 * // [ [ 4, 3 ], [ 4, 6 ] ]
 */
 $u.weekday = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  var _weekday = function(a) {
    return $u.__moment.utc(a,'X').isoWeekday();
  }
  if ($u.isnumber(x)) {
    return _weekday(x);
  } 
  if ($u.isarray(x) || $u.ismatrix(x)) {
    return  $u.arrayfun(x,function(arr){return _weekday(arr);});
  }
}
}

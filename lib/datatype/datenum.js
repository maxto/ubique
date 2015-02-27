/**
 * Dates and Time
 */
 module.exports = function($u) {
/**
 * @method datenum
 * @summary Convert date and time to serial date number (Unix)
 * @description Convert date and time to serial date number (Unix). 
 * Based on moment.js http://momentjs.com/
 *
 * @param  {string|array|matrix} d string or array of DATES
 * @param  {string} fmt format string (moment.js format)
 * @return {string|array|matrix}
 *
 * @example
 * ubique.datenum('31-12-2014','DD-MM-YYYY');
 * // 1419980400
 * ubique.datenum(['31-12-2014','31-01-2015'],'DD-MM-YYYY');
 * // [ 1419980400, 1422658800 ]
 * ubique.datenum([['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']],'DD-MM-YYYY');
 * // [ [ 1419980400, 1422658800 ], [ 1423954800, 1425164400 ] ]
 */
 $u.datenum = function(d,fmt) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  var _datenum = function(a,fmt) {
    return $u.__moment(a,fmt).utc().unix();
  }
  if ($u.isstring(d)) {
   return _datenum(d,fmt);
  }
  if ($u.isarray(d) || $u.ismatrix(d)) {
    return $u.arrayfun(d,function(el){return _datenum(el,fmt);});
  }
 }
}

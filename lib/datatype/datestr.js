/**
 * Dates and Time
 */
 module.exports = function($u) {
/**
 * @method datestr
 * @summary Convert serial date number (Unix) to string format
 * @description Convert serial date number (Unix) to string format.
 * Based on moment.js http://momentjs.com/
 * 
 * @param  {number|array|matrix} d ISO Unix datetime
 * @param  {string} fmt format string (moment.js format, default 'YYYY-MM-DD')
 * @return {number|array|matrix}
 *
 * @example
 * ubique.datestr(1419980400);
 * // 2014-12-31
 * ubique.datestr([1419984000,1422662400],'DD-MMM-YY');
 * // [ '31-Dec-14', '31-Jan-15' ]
 * ubique.datestr([[1419980400,1422658800],[1423954800,1425164400]],'YY-MM-DD hh:mm:ss');
 * // [ [ '14-12-31 12:00:00', '15-01-31 12:00:00' ],
 * // [ '15-02-15 12:00:00', '15-03-01 12:00:00' ] ]
 */
 $u.datestr = function(d,fmt) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    fmt = 'YYYY-MM-DD';
  }
  var _datestr = function(a,fmt) {
    return $u.__moment.unix(a).format(fmt)
  }
  if ($u.isnumber(d)) {
   return _datestr(d,fmt);
  }
  if ($u.isarray(d) || $u.ismatrix(d)) {
    return $u.arrayfun(d,function(el){return _datestr(el,fmt);});
  }
 }
}
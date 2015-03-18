/**
 * Dates and Time
 */
 module.exports = function($u) {
/**
 * @method datestr
 * @summary Convert serial date number (Unix) to string format
 * @description Convert serial date number (Unix) to string format. Based on [moment.js](http://momentjs.com)
 *
 * |Identifier| Example          | Description |
 * | ----------- | ---------------- | ----------- |
 * | `YYYY`      | `2014`           | 4 digit year |
 * | `YY`        | `14`             | 2 digit year |
 * | `Q`         | `1..4`           | Quarter of year. Sets month to first month in quarter. |
 * | `M MM`      | `1..12`          | Month number |
 * | `MMM MMMM`  | `January..Dec`   | Month name in locale set by `moment.locale()` |
 * | `D DD`      | `1..31`          | Day of month |
 * | `Do`        | `1st..31st`      | Day of month with ordinal |
 * | `DDD DDDD`  | `1..365`         | Day of year |
 * | `X`         | `1410715640.579` | Unix timestamp |
 * | `x`         | `1410715640579`  | Unix ms timestamp |
 * |
 * | `gggg`   | `2014`  | Locale 4 digit week year |
 * | `gg`     | `14`    | Locale 2 digit week year |
 * | `w ww`   | `1..53` | Locale week of year |
 * | `e`      | `1..7`  | Locale day of week |
 * | `GGGG`   | `2014`  | ISO 4 digit week year |
 * | `GG`     | `14`    | ISO 2 digit week year |
 * | `W WW`   | `1..53` | ISO week of year |
 * | `E`      | `1..7`  | ISO day of week |
 * |
 * | `H HH`         | `0..23`  | 24 hour time |
 * | `h hh`         | `1..12`  | 12 hour time used with `a A`. |
 * | `a A`          | `am pm`  | Post or ante meridiem |
 * | `m mm`         | `0..59`  | Minutes |
 * | `s ss`         | `0..59`  | Seconds |
 * | `S`            | `0..9`   | Tenths of a second |
 * | `SS`           | `0..99`  | Hundreds of a second |
 * | `SSS`          | `0..999` | Thousandths of a second |
 * | `Z ZZ`         | `+12:00` | Offset from UTC as `+-HH:mm`, `+-HHmm`, or `Z` |
 * 
 * @param  {number|array|matrix} d ISO Unix datetime
 * @param  {string} fmt format string (def: 'YYYY-MM-DD')
 * @return {number|array|matrix}
 *
 * @example
 * ubique.datestr(1419980400);
 * // 2014-12-31
 * ubique.datestr([ 1419984000, 1422662400 ],'DD-MMM-YY');
 * // [ '31-Dec-14', '31-Jan-15' ]
 * ubique.datestr([ [ 1419984000, 1422662400 ], [ 1423958400, 1425168000 ] ],'YY-MM-DD hh:mm:ss');
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
    return $u.__moment.utc(a,'X').format(fmt)
  }
  if ($u.isnumber(d)) {
   return _datestr(d,fmt);
  }
  if ($u.isarray(d) || $u.ismatrix(d)) {
    return $u.arrayfun(d,function(el){return _datestr(el,fmt);});
  }
 }
}
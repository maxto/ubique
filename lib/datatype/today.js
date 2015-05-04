/**
 * Dates and Time
 */
 module.exports = function($u) {
/**
 * @method today
 * @summary Current date
 * @description Current date
 * 
 * @param {empty} empty no arguments
 *
 * @example
 * ubique.today();
 * // 1430697600
 */
 $u.today = function() {
  var t = $u.clock();
  return $u.datenum([t[0],t[1],t[2]]);
}
}

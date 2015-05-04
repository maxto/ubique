/**
 * Dates and Time
 */
 module.exports = function($u) {
/**
 * @method now
 * @summary Current date and time as date number (unix)
 * @description Current date and time as date number (unix)
 * 
 * @param {empty} empty no arguments
 *
 * @example
 * ubique.now();
 * // 1430759861
 */
 $u.now = function() {
  return $u.datenum($u.clock());
}
}

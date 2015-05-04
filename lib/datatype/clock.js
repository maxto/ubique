/**
 * Dates and Time
 */
 module.exports = function($u) {
/**
 * @method clock
 * @summary Current date and time as date vector
 * @description Current date and time as date vector. Returns an array:
 * [year month day hour minute seconds]
 * 
 * @param {empty} empty no arguments
 * @return {array}
 * 
 * @example
 * ubique.clock();
 * // [ 2015, 5, 4, 13, 50, 6, 249 ]
 */
 $u.clock = function() {
  var now = $u.__moment().toArray();
  now[1] = now[1] + 1;
  return now;
}
}
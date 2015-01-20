/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method rrr
 * @summary Return/Risk ratio
 * @description Return/Risk ratio
 * 
 * @param  {number} aret  asset/portfolio expected return
 * @param  {number} arisk asset/portfolio standard deviation
 * @return {number}
 *
 * @example
 * rrr(0.12,0.10)
 * // 1.2
 */
 $u.rrr = function(aret,arisk) {
  return aret / arisk;
}
}
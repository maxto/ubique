/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method omegaratio
 * @summary omegaratio ratio
 * @description omegaratio ratio
 * 
 * @param  {array} x     asset/portfolio values
 * @param  {number} mar minimum acceptable return (def: 0)
 * @return {number}
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * omegaratio(X,0)
 * // 8.782608695652174
 */
 $u.omegaratio = function(x,mar) {
 	if (mar === undefined) {mar = 0;}
 	return $u.usp(x,mar) / $u.dsp(x,mar);
 }

}
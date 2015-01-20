/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method sortino
 * @summary Sortino ratio
 * @description  Sortino ratio
 * 
 * @param  {array} x     asset/portfolio valuessi a
 * @param  {number} frisk free-risk rate (def: 0)
 * @param  {number} mar minimum acceptable return (def: 0)
 * @return {number}
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * sortino(X,0,0)
 * // 3.4010510161478655
 */
 $u.sortino = function(x,frisk,mar) {
 	if (frisk === undefined) {frisk = 0;}
 	if (mar === undefined) {mar = 0;}
 	return ($u.mean(x) - frisk) / $u.dsr(x,mar);
 }

}
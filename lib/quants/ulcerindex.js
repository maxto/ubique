/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method ulcerindex
 * @summary Ulcer Index
 * @description Ulcer Index of Peter G. Martin (1987). The impact of long, deep drawdowns will have significant
 * impact because the underperformance since the last peak is squared.
 *  
 * @param  {array} x    asset/portfolio values
 * @param  {string} mode drawdown calculation. 'return' or 'arithmetic' (def: 'return')
 * @return {number}      
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * ulcerindex(X)
 * // 0.05974926249592595
 * 
 */
 $u.ulcerindex = function(x,mode) {
 	var dd = $u.drawdown(x,mode),
 	n = dd.drawdown.length;
 	return $u.sqrt($u.sum($u.power(dd.drawdown,2)) / n);
 }

}
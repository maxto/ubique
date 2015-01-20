/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method maxdrawdown
 * @summary Maximum drawdown
 * @description Maximum drawdown
 * 
 * @param  {array} x    asset/portfolio values
 * @param  {string} mode drawdown calculation. 'return' or 'arithmetic' (def: 'return')
 * @return {object}      drawdown values (number) and recovery time (number)
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * maxdrawdown(X)
 * // { maxdrawdown: 0.013999999999999995, maxdrawdownr: 1 }
 */
 $u.maxdrawdown = function(x,mode) {
 	var ddo = $u.drawdown(x,mode);
 	ddr = ddo.recovery;
 	return {maxdrawdown:$u.max(ddo.drawdown),maxdrawdownr:ddr[ddo.drawdown.indexOf($u.max(ddo.drawdown))]};
 }
}
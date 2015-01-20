/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * #TOFIX
 * @method avgdrawdown
 * @summary Average drawdown
 * @description Average drawdown
 * 
 * @param  {array} x    asset/portfolio values
 * @param  {string} mode drawdown calculation. 'return' or 'arithmetic' (def: 'return')
 * @return {object}      drawdown values (number) and recovery time (number)
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * avgdd(X)
 * // { avgdd: 0.0023000000000000034, avgddr: 0.2 }
 */
 $u.avgdrawdown = function(x,mode) {
  var ddo = $u.drawdown(x,mode);
  return {avgdd:$u.mean(ddo.drawdown),avgddr:$u.mean(ddo.recovery)};
}

}
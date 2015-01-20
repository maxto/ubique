/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method inforatio
 * @summary Information Ratio
 * @description Information Ratio
 * 
 * @param  {array} x asset/portfolio values
 * @param  {array} y benchmark values
 * @return {number}   
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039]:
 * var Y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * inforatio(X,Y);  // 0.09875949754892852
 */
 $u.inforatio = function(x,y) {
  return $u.xret(x,y) / $u.std($u.minus(x,y));
}
}
/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method treynor
 * @summary Treynor Ratio
 * @description Compute the Treynor ratio for an array X of values (daily, weekly, etc) and
 * a free-risk rate. Annual free-risk must be divided to match the right timeframe.
 * 
 * @param  {array} x     array of X values
 * @param  {array} y     array of Y values
 * @param  {number} frisk  free-risk rate (def: 0)
 * @return {number}       
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.treynor(x,y,0.01/12); // 0.7392
 */
 $u.treynor = function(x,y,frisk) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    frisk = 0;
  }
  var beta = $u.linearreg(x,y).beta;
  return ($u.mean(x) - frisk) / beta;
}
}
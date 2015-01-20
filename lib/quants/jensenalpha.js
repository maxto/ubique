/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method jalpha
 * @summary Jensen alpha
 * @description  Ex-post alpha calculated with regression line. Free-risk is the avereage free-risk for the timeframe selected.
 *
 * @param  {array} x     array of X values
 * @param  {array} y     array of Y values
 * @param  {number} frisk  free-risk (def: 0)
 * @return {number}      
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * jalpha(x,y,0.01/12)
 * // 0.016794981090785477
 * 
 */
 $u.jalpha = function(x,y,frisk) {
  frisk = (frisk === undefined) ? 0 : frisk;
  return $u.mean(x) - frisk - $u.linreg(x,y).beta * ($u.mean(y) - frisk);
}
}
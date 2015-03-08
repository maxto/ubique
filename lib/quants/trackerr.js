/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method trackerr
 * @summary Tracking Error (ex-post)
 * @description  Ex-post tracking error
 * 
 * @param  {array} x array of X values
 * @param  {array} y array of Y values
 * @return {number}   
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.trackerr(x,y);
 * // 0.0566
 */
 $u.trackerr = function(x,y) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  return $u.std($u.minus(x,y));
}
}
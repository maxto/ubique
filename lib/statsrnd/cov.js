/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method cov
 * @summary Covariance of two arrays X,Y
 * @description Covariance of two arrays X,Y
 *
 * @param  {array} x    array of elemnts X
 * @param  {array} y    array of elements Y
 * @param  {number} flag normalization value 0: population, 1: sample (def: 0)
 * @return {number}
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var Y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * cov(X,Y)
 * // 0.00005795999999999998
 *
 * cov(X,Y,1)
 * // 0.00006439999999999998
 */
 $u.cov = function(x,y,flag) {
  if (flag === undefined) {flag = 0;}
  var s = ubique.times(ubique.minus(x,ubique.mean(x)),ubique.minus(y,ubique.mean(y)));
  return ubique.sum(s) / (x.length - flag);
}

}
 

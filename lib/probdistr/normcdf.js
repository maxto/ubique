/**
 * Normal Distributions
 */
 module.exports = function($u) {
/**
 * @method normcdf
 * @summary Normal cumulative distribution function (cdf)
 * @description The Standard Normal Distribution: mu = 0 and sigma = 1
 *
 * @param  {number} x number to calculate cdf
 * @param  {number} mu mean of  the array of elements
 * @param  {number} sigma standarf deviaton of array of elements
 * @return {number}
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * 
 * ubique.normcdf(2);
 * // 0.97725
 * ubique.normcdf(0,ubique.mean(x),ubique.std(x));
 * // 0.22049
 */
 $u.normcdf = function(x,mu,sigma) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    mu = 0;
    sigma = 1;
  }
  if (arguments.length === 2) {
    sigma = 1;
  }
  return 0.5 * (1 + $u.erf((x - mu) / Math.sqrt(2 * sigma * sigma)));
}

}
/**
 * Normal Distributions
 */
 module.exports = function($u) {
/**
 * @method normpdf
 * @summary Normal probability density function (pdf)
 * @description  Normal probability density function (pdf).
 * Returns the pdf of the normal distribution with
 * mean MU and standard deviation SIGMA, evaluated at the values in X
 *
 * Default values: MU = 0, SIGMA = 1
 * 
 * @param  {number} x real value
 * @param  {number} mu mean value (def: 0)
 * @param  {number} sigma standard deviation (def: 1)
 * @return {number}       
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * 
 * ubique.normpdf(1);
 * // 0.241971
 * ubique.normpdf(0, ubique.mean(x),ubique.std(x));
 * // 12.7622
 */
 $u.normpdf = function(x,mu,sigma) {
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
  return Math.exp(-0.5 * Math.pow((x - mu)/sigma,2)) / (Math.sqrt(2 * Math.PI) * sigma);
}

}
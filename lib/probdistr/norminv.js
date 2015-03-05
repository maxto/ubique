/**
 * Normal Distributions
 */
 module.exports = function($u) {
/**
 * @method norminv
 * @summary Inverse of the normal cumulative distribution function (cdf)
 * @description Returns the inverse cdf for the normal distribution with mean MU
 * and standard deviation SIGMA at P value
 *
 * Default values: MU = 0, SIGMA = 1
 * 
 * @param  {number} p probability value in range [0,1]
 * @param  {number} mu mean value
 * @param  {number} sigma standard deviation 
 * @return {number}       
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 *
 * ubique.normiv(0.05);
 * // -1.64485
 * ubique.norminv(0.01,ubique.mean(x),ubique.std(x));
 * // -0.0361422
 */
 $u.norminv = function(p,mu,sigma) {
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
  if (p <= 0 || p >= 1) {
    throw new Error('invalid input argument');
  }
  var x0 = -Math.sqrt(2) * $u.erfcinv(2 * p);
  return x0 * sigma + mu;
}

}
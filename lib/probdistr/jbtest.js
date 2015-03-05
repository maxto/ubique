/**
 * Distribution Tests
 */
 module.exports = function($u) {
/**
 * @method  jbtest
 * @summary Jarque-Bera test
 * @description  A test decition for the null hypothesis that the data 
 * in array X comes from a normal distribution with an unknown mean and variance
 * 
 * @param  {array} x array of values
 * @return {number}   
 *
 * @example
 * ubique.jbtest(x);
 * // 0.6360604293924916
 */
 $u.jbtest = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  var n = x.length,
  s = $u.skewness(x),
  xk = $u.xkurtosis(x);
  return (n/6) * (Math.pow(s,2) + Math.pow(xk,2)/4);
}

}
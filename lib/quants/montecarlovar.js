/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method  montecarlovar
 * @summary Montecarlo Value-at-Risk
 * @description Montecarlo VaR for single asset. Based on geometric Brownian motion.
 *
 * @param  {number|array} x array of returns or standard deviation of returns
 * @param  {number} p confidence level in the range [0,1] (def: 0.95)
 * @param  {number} t holding period (def: 1)
 * @param  {number} fr free-risk rate (def: 0)
 * @param  {number} v asset/portfolio start value (def: 1)
 * @param  {number} iter number of iterations
 * @return {number}  
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 *
 * // ex-ante simulated VaR at 95% confidence for t = 1, free risk zero, start capital one
 * ubique.montecarlovar(x,0.95,1,0,1,10000);
 * // 0.0771
 * 
 * // historical simulated daily VaR at 99% for 100k GBP asset over 10 days 
 * ubique.montecarlovar(ubique.std(x),0.99,10,0,100000);
 * // 23201.0819
 */
 $u.montecarlovar = function(x) {
   if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if ($u.isnumber(x)) {
    s = $u.clone(x);
  } else 
  if ($u.isarray(x)) {
    s = $u.std(x);
  } else {
    throw new Error('first argument must be a number or array');
  }
  var defargs = {1: 0.95, 2: 1, 3: 0, 4: 1, 5: 10000};
  for (var j = 1; j < arguments.length; j++) {
    defargs[j] = arguments[j];
  }
  var p = defargs[1],
  t = defargs[2],
  fr = defargs[3],
  v = defargs[4],
  iter = defargs[5];

  var mcvar = [];
  for (var i = 0;i < iter;i++) {
    mcvar[i] = Math.exp((fr - 0.5 * Math.pow(s,2)) + s * $u.norminv(Math.random(),0,1)) - 1;
  }
  return - Math.pow(t,0.5) * $u.prctile(mcvar, 1 - p) * v;
}

}
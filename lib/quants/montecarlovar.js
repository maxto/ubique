/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method  mcvar
 * @summary Montecarlo Value-at-Risk
 * @description Montecarlo VaR for single asset. Based on geometric Brownian motion.
 * 
 * @param  {number} p  confidence level in the range [0,1] (def: 0.95)
 * @param  {number} t  holding period (def: 1)
 * @param  {number} fr free-risk rate (def: 0)
 * @param  {number} s  sample volatility or standard deviation (def: 1)
 * @param  {number} v  asset/portfolio start value (def: 1)
 * @param  {number} iter number of iterations
 * @return {number}    
 *
 * @example
 * mcvar(0.95,1,0.0004,0.01,1)
 * // 0.0309296496932608
 * 
 * //historical simulated daily VaR at 1% for 100k GBP asset over 10 days 
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * mcvar(0.99,10,0,std(X),100000)
 * // 24538.540467748742
 */
 $u.mcvar = function(p,t,fr,s,v,iter) {
  p = p === undefined ? 0.95 : p;
  t = t === undefined ? 1 : t;
  fr = fr === undefined ? 0 : fr;
  s = s === undefined ? 1 : s;
  v = v === undefined ? 1 : v;
  iter = iter === undefined ? 10000 : iter;
  var mcvar = [];
  for (var i = 0;i < iter;i++) {
    mcvar[i] = Math.exp((fr - 0.5 * Math.pow(s,2)) + s * $u.norminv(Math.random(),0,1)) - 1;
  }
  return - Math.pow(t,0.5) * $u.prctile(mcvar, 1 - p) * v;
}

}
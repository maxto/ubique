/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method histcondvar
 * @summary Historical Conditional Value-At-Risk
 * @description Historical Conditional Value-At-Risk. Univariate historical simulation.Single asset
 * 
 * @param  {array|matrix} x array or matrix of values    
 * @param  {number} p confidence level in the range [0,1] (def: 0.95)
 * @param  {number} amount amount (def: 1)
 * @param  {period} period time horizon (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)    
 * @return {number|array}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * // historical daily conditional VaR at 95% conf level
 * ubique.histcondvar(ubique.cat(0,x,y),0.95);
 * // [ [ 0.014 ], [ 0.061 ] ]
 *
 * // historical daily conditional VaR at 99% for 100k GBP asset over 10 days 
 * ubique.histcondvar(ubique.cat(0,x,y),0.99,100000,10);
 * // [ [ 4427.188724 ], [ 19289.893727 ] ]
 */
 $u.histcondvar = function(x,p,amount,period,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  p = p == null ? 0.95 : p;
  amount = amount == null ? 1 : amount;
  period = period == null ? 1 : period;
  dim = dim == null ? 0 : dim;

  var _hcvar = function(a,p,amount,period) {
    var _VaR = -$u.histvar(a,p),
    z = [],
    t = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i] <= _VaR) {
        z[t] = a[i];
        t++;
      }
    }
    return -$u.mean(z) * Math.sqrt(period) * amount;
  }
  if ($u.isnumber(x)) {
   return x;
 }
 return $u.vectorfun(dim,x,_hcvar,p,amount,period);
}
}

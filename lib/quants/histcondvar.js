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
 * @param  {number} dim dimension 0: row, 1: column (def: 1)    
 * @return {number|array}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * // historical daily conditional VaR at 5% conf level
 * ubique.histcondvar(ubique.cat(1,x,y),0.95);
 * // [[0.014, 0.061]]
 *
 * // historical daily conditional VaR at 1% for 100k GBP asset over 10 days 
 * ubique.histcondvar(ubique.cat(1,x,y),0.99,100000,10);
 * // [[4427.19, 19289.9]]
 */
 $u.histcondvar = function(x,p,amount,period,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    p = 0.95;
    amount = 1;
    period = 1;
    dim = 1;
  }
  if (arguments.length === 2) {
    amount = 1;
    period = 1;
    dim = 1;
  }
  if (arguments.length === 3) {
    period = 1;
    dim = 1;
  }
  if (arguments.length === 4) {
    dim = 1;
  }
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
 if ($u.isarray(x)) {
   return _hcvar(x,p,amount,period);
 } 
 return $u.vectorfun(x,function(val){return _hcvar(val,p,amount,period);},dim);
}
}

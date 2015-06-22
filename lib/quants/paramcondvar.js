/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method paramcondvar
 * @summary Parametric Conditional Value-At-Risk
 * @description Parametric Conditional Value-At-Risk. More sensitive to the shape of the loss distribution in the tails
 * Also known as Expected Shortfall (ES), Expected Tail Loss (ETL).
 * 
 * @param  {number|array} mu mean value (def: 0)
 * @param  {number|array} sigma standard deviation (def: 1)
 * @param  {number} p cVaR confidende level in range [0,1] (def: 0.95)
 * @param  {number} amount portfolio/asset amount (def: 1)
 * @param  {number} period time horizon (def: 1)
 * @return {number}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * // parametric daily Var at 95% conf level
 * ubique.paramcondvar(ubique.mean(x),ubique.std(x));
 * // 0.030018
 *
 * //parametric daily VaR at 99% for 100k GBP asset over 10 days (two assets)
 * ubique.paramcondvar(ubique.mean(ubique.cat(0,x,y)),ubique.std(ubique.cat(0,x,y)),0.99,100000,10);
 * // [ [ 19578.980844 ], [ 44511.107219 ] ]
 */
 $u.paramcondvar = function(mu,sigma,p,amount,period) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  p = p == null ? 0.95 : p;
  amount = amount == null ? 1 : amount;
  period = period == null ? 1 : period;
  
  var _pcvar = function(_mu,_sigma,p,amount,period) {
    return _sigma * $u.normpdf($u.norminv(1 - p))/(1 - p) * amount * Math.sqrt(period) - _mu;
  }
  if ($u.isnumber(mu)) {
    return _pcvar(mu,sigma,p,amount,period);
  }
  var temp = $u.flatten(mu);
  var out = temp.map(function(el,idx) {
    return _pcvar(mu[idx],sigma[idx],p,amount,period);
  });
  if ($u.ismatrix(mu) && $u.isrow(mu)) {
    return [out];
  }
  if ($u.ismatrix(mu) && $u.iscolumn(mu)) {
    return $u.transpose(out);
  }
  return out;
}
}

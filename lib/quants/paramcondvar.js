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
 * @param  {number|array} mu    mean value (def: 0)
 * @param  {number|array} sigma standard deviation (def: 1)
 * @param  {number} p     cVaR confidende level in range [0,1] (def: 0.95)
 * @param  {number} amount portfolio/asset amount (def: 1)
 * @param  {number} period time horizon (def: 1)
 * @return {number}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 *
 * // parametric daily Var at 5% conf level
 * ubique.paramcondvar(ubique.mean(x),ubique.std(x)); // 0.0300178
 *
 * //parametric daily VaR at 1% for 100k GBP asset over 10 days (two assets)
 * ubique.paramcondvar(ubique.mean(z),ubique.std(z),0.99,100000,10); // [19579, 44511.1]
 */
 $u.paramcondvar = function(mu,sigma,p,amount,period) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    p = 0.95;
    amount = 1;
    period = 1;
  }
  if (arguments.length === 3) {
    amount = 1;
    period = 1;
  }
  if (arguments.length === 4) {
    period = 1;
  }
  var _pcvar = function(_mu,_sigma,p,amount,period) {
    return _sigma * $u.normpdf($u.norminv(1 - p))/(1 - p) * amount * Math.sqrt(period) - _mu;
  }
  if ($u.isvector(mu) && $u.isvector(sigma)) {
    mu = $u.flatten(mu);
    sigma = $u.flatten(sigma);
  }

  if ($u.isnumber(mu) && $u.isnumber(sigma)) {
    return _pcvar(mu,sigma,p,amount,period);
  } else 
  if ($u.isarray(mu) && $u.isarray(sigma)) {
    var out = new Array(mu.length);
    for (var i = 0;i < mu.length; i++) {
      out[i] = _pcvar(mu[i],sigma[i],p,amount,period);
    }
    return out;
  } else {
    throw new Error('mu and sigma must be both numbers or arrays');
  }
 }
}

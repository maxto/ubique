/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method paramvar
 * @summary Parametric Value-At-Risk
 * @description Parametric Value-At-Risk. Assets or portfolio returns are normally distributed.
 * It manages numbers, arrays, row vectors [[a,b,...,n]] and column vectors [[a],[b],...,[n]]
 * 
 * @param  {number|array} mu mean value (def: 0)
 * @param  {number|array} sigma standard deviation (def: 1)
 * @param  {number} p VaR confidende level in range [0,1] (def: 0.95)
 * @param  {number} amount portfolio/asset amount (def: 1)
 * @param  {number} period time horizon (def: 1)
 * @return {number}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * // VaR with numbers
 * ubique.paramvar(0,1);
 * // 1.644854
 *
 * // VaR with arrays
 * ubique.paramvar([0,0,0],[1,2,3]);
 * [ 1.644854, 3.289707, 4.934561 ]
 * 
 * // parametric VaR at 95% conf level
 * ubique.paramvar(ubique.mean(x),ubique.std(x));
 * // 0.020311
 * 
 * ubique.paramvar(ubique.mean(ubique.cat(0,x,y)),ubique.std(ubique.cat(0,x,y)));
 * // [ [ 0.020311 ], [ 0.074269 ] ]
 *
 * //parametric VaR at 99% for 100k GBP asset over 10 days (two assets)
 * ubique.paramvar(ubique.mean(ubique.cat(0,x,y)),ubique.std(ubique.cat(0,x,y)),0.99,100000,10);
 * // [ [ 11429.165523 ], [ 34867.319072 ] ]
 */
 $u.paramvar = function(mu,sigma,p,amount,period) {
 	if (arguments.length < 2) {
 		throw new Error('not enough input arguments');
 	}
 	p = p == null ? 0.95 : p;
  amount = amount == null ? 1 : amount;
  period = period == null ? 1 : period;

  var _pvar = function(_mu,_sigma,p,amount,period) {
    return (-$u.norminv(1 - p) * _sigma - _mu) * Math.sqrt(period) * amount; 
  }
  if ($u.isnumber(mu)) {
    return _pvar(mu,sigma,p,amount,period);
  }
  var temp = $u.flatten(mu);
  var out = temp.map(function(el,idx) {
    return _pvar(mu[idx],sigma[idx],p,amount,period);
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

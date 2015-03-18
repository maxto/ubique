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
 * @param  {number|array|matrix} mu mean value (def: 0)
 * @param  {number|array|matrix} sigma standard deviation (def: 1)
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
 * // VaR with vectors
 * ubique.paramvar([[0,0]],[[1,2]]);
 * [ [ 1.644854, 3.289707 ] ]
 * ubique.paramvar([[0],[0]],[[1],[2]]);
 * [ [ 1.644854 ], [ 3.289707 ] ]
 * 
 * // parametric VaR at 5% conf level
 * ubique.paramvar(ubique.mean(x),ubique.std(x));
 * // 0.020311
 * ubique.paramvar(ubique.mean(y),ubique.std(y));
 * // 0.074269
 * ubique.paramvar(ubique.mean(ubique.cat(1,x,y)),ubique.std(ubique.cat(1,x,y)));
 * // [ [ 0.020311, 0.074269 ] ]
 *
 * //parametric VaR at 1% for 100k GBP asset over 10 days (two assets)
 * ubique.paramvar(ubique.mean(ubique.cat(1,x,y)),ubique.std(ubique.cat(1,x,y)),0.99,100000,10);
 * // [ [ 11429.165523, 34867.319072 ] ]
 */
 $u.paramvar = function(mu,sigma,p,amount,period) {
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
 	var _pvar = function(_mu,_sigma,p,amount,period) {
 		return (-$u.norminv(1 - p) * _sigma - _mu) * Math.sqrt(period) * amount; 
 	}
 	if ($u.isnumber(mu) && $u.isnumber(sigma)) {
 		return _pvar(mu,sigma,p,amount,period);
 	} else 
 	if ($u.isarray(mu) && $u.isarray(sigma)) {
 		return $u.arrayfun(mu,function(el,idx){ return _pvar(el,sigma[idx],p,amount,period);});
 	} else
  if ($u.ismatrix(mu) && $u.ismatrix(sigma)) {
    var out = $u.array($u.max($u.size(mu))),
    _mu = $u.flatten(mu),
    _sigma = $u.flatten(sigma);
    out = $u.arrayfun(out,function(el,idx){return _pvar(_mu[idx],_sigma[idx],p,amount,period)});
    if ($u.isrow(mu)) {
      return [out];
    } else
    if ($u.iscolumn(mu)) {
      return $u.tomat(out);
    } else {
      throw new Error('input must be a row or column vector');
    }
  }
}

}



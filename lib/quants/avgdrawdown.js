/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method avgdrawdown
 * @summary Average drawdown
 * @description Average drawdown or average K-largest drawdown
 * 
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {number} k largest drawdown. k = 0 for all continuous drawdown (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {object}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * // average drawdown
 * ubique.avgdrawdown(x);
 * // 0.0115
 *
 * // 1-largest drawdown
 * ubique.avgdrawdown(x,1);
 * // 0.014
 * 
 * ubique.avgdrawdown(cat(0,x,y));
 * // [ [ 0.0115 ], [ 0.056571 ] ]
 */
 $u.avgdrawdown = function(x,k,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  k = k == null ? 0 : k;
  dim = dim == null ? 0 : dim;
  
  var avgdd = function(a,k) {
    var cdd =  $u.cdrawdown(a);
    if (k === 0) {
      return $u.mean(cdd);
    } else
    if (k > 0 && k <= cdd.length) {
      var cdds = $u.sort(cdd,'descend');
      return $u.mean($u.subsetlin(cdds,$u.colon(0,k - 1)));
    } else {
      return NaN;
    }
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  return $u.vectorfun(dim,x,avgdd,k);
}

}
/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method calmarratio
 * @summary Calmar Ratio
 * @description A risk-adjusted measure like Sharpe ratio that uses maximum drawdown instead of
 * standard deviation for risk.
 *  
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {number} frisk annual free-risk rate (def: 0)
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|arrray}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * ubique.calmarratio(x,0,12);
 * // 16.701049
 *
 * ubique.calmarratio(cat(0,x,y),0,12);
 * // [ [ 16.701049 ], [ 1.32768 ] ]
 */
 $u.calmarratio = function(x,frisk,t,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  frisk = frisk == null ? 0 : frisk;
  t = t == null ? 252 : t;
  dim = dim == null ? 0 : dim;

  var _calmarratio = function(a,frisk,t) {
    var annret = $u.annreturn(a,t),
    maxdd = $u.drawdown(a).maxdd;
    return (annret - frisk) / maxdd;
  }
  if ($u.isnumber(x)) {
    throw new Error('input arguments must be an array or matrix');
  }
  return $u.vectorfun(dim,x,_calmarratio,frisk,t);
}

}
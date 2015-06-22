/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method sterlingratio
 * @summary Sterling Ratio
 * @description A risk-adjusted measure like Calmar ratio but the denominator is 
 * the largest consecutive drawdown (excluded the 10% excess in the original formula)
 * 
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {number} frisk annual free-risk rate (def: 0)
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * ubique.sterlingratio(x,0,12);
 * // 16.701049
 *
 * ubique.sterlingratio(cat(0,x,y),0,12);
 * // [ [ 16.701049 ], [ 1.515412 ] ]
 */
 $u.sterlingratio = function(x,frisk,t,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  frisk = frisk == null ? 0 : frisk;
  t = t == null ? 252 : t;
  dim = dim == null ? 0 : dim;

  var _sterlingratio = function(a,frisk,t) {
    var annret = $u.annreturn(a,t);
    var ldd = $u.max($u.cdrawdown(a));
    return (annret - frisk) / ldd;
  }
  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_sterlingratio,frisk,t);
}

}
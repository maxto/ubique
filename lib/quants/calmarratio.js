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
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|arrray}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 */
 $u.calmarratio = function(x,frisk,t,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  var frisk = frisk || 0,
  t = t || 252,
  dim = dim || 1;

  var _calmarratio = function(a,frisk,t) {
    var annret = $u.annavgreturn(a,t);
    console.log(annret)
    return (annret - frisk) / $u.drawdown(a).maxdd;
  }
  if ($u.isnumber(x)) {
    return _calmarratio(x,frisk,t);
  }
  if ($u.isarray(x)) {
    return  _calmarratio(x,frisk,t);
  }
  return $u.vectorfun(x,function(val){return _calmarratio(val,frisk,t);},dim);
 }

}
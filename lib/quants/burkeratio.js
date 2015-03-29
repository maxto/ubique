/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method burkeratio
 * @summary Burke Ratio
 * @description A risk-adjusted measure with free risk and drawdowns.
 * For the 'simple' mode the excess return over free risk is divided by the square root of 
 * the sum of the square of the drawdowns. For the 'modified' mode the Burke Ratio is multiplied
 * by the square root of the number of datas.
 *  
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {number} frisk annual free-risk rate (def: 0)
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
 * @param  {string} mode 'simple' or 'modified' (def: 'simple')
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|arrray}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 *
 * ubique.burkeratio(x,0,12);
 * // 14.048563
 *
 * ubique.burkeratio(x,0,12,'modified');
 * // 44.425456
 *
 * ubique.burkeratio(cat(1,x,y),0,12);
 * // [ [ 14.048563, 1.228487 ] ]
 */
 $u.burkeratio = function(x,frisk,t,mode,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  var frisk = frisk || 0,
  t = t || 252,
  mode = mode || 'simple',
  dim = dim || 1;

  var _burkeratio = function(a,frisk,t,mode) {
    var annret = $u.annreturn(a,t),
    dd = $u.sqrt($u.sum($u.power($u.cdrawdown(a),2)));
    if (mode === 'simple') {
      return (annret - frisk) / dd;
    } else
    if (mode === 'modified') {
      return (annret - frisk) / dd * $u.sqrt(a.length);
    } else {
      throw new Error('unknown mode');
    }
  }
  if ($u.isnumber(x)) {
    throw new Error('input arguments must be an array or matrix');
  }
  if ($u.isarray(x)) {
    return  _burkeratio(x,frisk,t,mode);
  }
  return $u.vectorfun(x,function(val){return _burkeratio(val,frisk,t,mode);},dim);
}

}
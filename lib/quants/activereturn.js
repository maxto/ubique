/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method activereturn
 * @summary Active return
 * @description Asset/Portfolio annualized return minus Benchmark annualized return
 * 
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {array} y benchmark returns
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
 * @param  {string} type 'geometric' or 'simple' (def: 'geometric')
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 * var cat = ubique.cat;
 *
 * ubique.activereturn(x,z,12);
 * // 0.041979
 *
 * ubique.activereturn(cat(1,x,y),z,12);
 * // [ [ 0.041979, -0.046746 ] ]
 */
 $u.activereturn = function(x,y,t,type,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  t = t || 252;
  type = type || 'geometric';
  dim = dim || 1;

  var _activereturn = function(a,y,t,type) {
    return $u.annreturn(a,t,type) - $u.annreturn(y,t,type);
  }
  if ($u.isnumber(x)) {
    throw new Error('input must be an array or matrix');
  }
  if ($u.isarray(x)) {
    return  _activereturn(x,y,t,type);
  }
  return $u.vectorfun(x,function(val){return _activereturn(val,y,t,type);},dim);
}
}

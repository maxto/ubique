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
 * @param  {string} mode 'geometric' or 'simple' (def: 'geometric')
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 * var cat = ubique.cat;
 *
 * ubique.activereturn(x,z,12);
 * // 0.041979
 *
 * ubique.activereturn(cat(0,x,y),z,12);
 * // [ [ 0.041979], [ -0.046746 ] ]
 */
 $u.activereturn = function(x,y,t,mode,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  t = t == null ? 252 : t;
  mode = mode == null ? 'geometric' : mode;
  dim = dim == null ? 0 : dim;
  
  var _activereturn = function(a,y,t,mode) {
    return $u.annreturn(a,t,mode) - $u.annreturn(y,t,mode);
  }
  if ($u.isnumber(x) || $u.isnumber(y)) {
    throw new Error('input must be an array or matrix');
  }
  return $u.vectorfun(dim,x,_activereturn,y,t,mode);
}
}

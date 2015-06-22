/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method m2sortino
 * @summary M-squared for Sortino
 * @description M2 calculated for Downside risk instead of Total Risk
 *  
 * @param  {array|matrix} x asset/portfolio values
 * @param  {array} y benchmark values
 * @param  {number} frisk free-risk rate (def: 0)
 * @param  {number} mar minimum acceptable return (def: 0)
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|matrix}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 * var cat = ubique.cat;
 * 
 * ubique.m2sortino(x,y,0,0,12);
 * // 0.103486
 * 
 * ubique.m2sortino(cat(0,x,y),z,0,0,12);
 * // [ [ 0.527018 ], [ 0.148094 ] ]
 */
 $u.m2sortino = function(x,y,frisk,mar,t,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  frisk = frisk == null ? 0 : frisk;
  mar = mar == null ? 0 : mar;
  t = t == null ? 252 : t;
  dim = dim == null ? 0 : dim;

  var _m2sortino = function(a,b,frisk,mar,t) {
    return $u.annreturn(a,t) + $u.sortino(a,frisk,mar) * ($u.downsiderisk(b,mar) * $u.sqrt(t) - $u.downsiderisk(a,mar) * $u.sqrt(t));
  }
  if ($u.isarray(x) && $u.isarray(y)) {
    return  _m2sortino(x,y,frisk,mar,t);
  } else
  if ($u.ismatrix(x) && $u.isarray(y)) {
    return $u.vectorfun(dim,x,_m2sortino,y,frisk,mar,t);
  } else {
    throw new Error('first input must be an array/matrix, the second one an array');
  }
}
}
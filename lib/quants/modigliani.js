/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method modigliani
 * @summary Modigliani index for risk-adjusted return
 * @description Modigliani index for risk-adjusted return
 *  
 * @param  {array|matrix} x asset/portfolio values
 * @param  {array} y benchmark values
 * @param  {number} frisk free-risk rate (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|matrix}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 *
 * ubique.modigliani(x,y);
 * // 0.0406941
 * ubique.modigliani(ubique.cat(1,x,y),z);
 * // [[0.0425846, 0.0131853]]
 */
 $u.modigliani = function(x,y,frisk,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    frisk = 0;
    dim = 1;
  }
  if (arguments.length === 3) {
    dim = 1;
  }
  var _m2 = function(a,b,frisk) {
    return $u.mean(a) + $u.sharpe(a,frisk) * ($u.std(b) - $u.std(a));
  }
  if ($u.isarray(x) && $u.isarray(y)) {
    return  _m2(x,y,frisk);
  } else
  if ($u.ismatrix(x) && $u.isarray(y)) {
   return $u.vectorfun(x,function(val){return _m2(val,y,frisk);},dim);
  } else {
   throw new Error('first input must be an array/matrix, the second one an array');
  }
 }
}
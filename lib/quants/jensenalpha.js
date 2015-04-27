/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method jensenalpha
 * @summary Jensen alpha
 * @description  Ex-post alpha calculated with regression line. Free-risk is the avereage free-risk for the timeframe selected.
 *
 * @param  {array|matrix} x asset/portfolio values
 * @param  {array} y benchmark values
 * @param  {number} frisk  free-risk (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|matrix}      
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 *
 * ubique.jensenalpha(x,y);
 * // 0.0176091
 * 
 * ubique.jensenalpha(ubique.cat(1,x,y),z);
 * // [[0.0263019, -0.0597049]]
 */
 $u.jensenalpha = function(x,y,frisk,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  frisk = frisk || 0;
  dim = dim || 1;

  var _ja = function(a,b,frisk) {
    var beta = $u.linearreg(a,b).beta;
    return $u.mean(a) - frisk - beta * ($u.mean(b) - frisk);
  }
  if ($u.isarray(x) && $u.isarray(y)) {
    return  _ja(x,y,frisk);
  } else
  if ($u.ismatrix(x) && $u.isarray(y)) {
    return $u.vectorfun(x,function(val){return _ja(val,y,frisk);},dim);
  } else {
   throw new Error('first input must be an array/matrix, the second one an array');
 }
}
}
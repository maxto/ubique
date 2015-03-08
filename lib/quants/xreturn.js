/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method xreturn
 * @summary Excess return
 * @description Excess return. If X and Y are arrays, returns mean of difference of values X - Y, otherwise returns a simple difference X - Y
 * 
 * @param  {number!array} x number or array of elements in X
 * @param  {number|array} y number or array of elements in Y
 * @return {number}   
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.xreturn(x,y);
 * // 0.0053
 * ubique.xreturn(0.05,0.015);
 * // 0.035
 */
 $u.xreturn = function(x,y) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if ($u.isnumber(x) && $u.isnumber(y)) {
    return x - y;
  } else 
  if ($u.isarray(x) && $u.isarray(y)) {
    return $u.mean($u.minus(x,y));
  } else {
    throw new Error('inputs must be a number or an array')
  }
}
}
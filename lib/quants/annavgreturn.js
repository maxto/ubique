/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method annavgreturn
 * @summary Annualized average return
 * @description Annualized average return
 * 
 * @param  {number|array|matrix} x rate or return 
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 *
 * ubique.annavgreturn(x,12); // 0.237261
 * ubique.annavgreturn(z,12); // [[0.237261, 0.162131]]
 * ubique.annavgreturn(z,12,0); // [-0.0119342, 0.869022, 0.384784, -0.243629, -0.248261, 0.619604, -0.185967, 0.30605, 0.329228, 0.765311]
 */
 $u.annavgreturn = function(x,t,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    t = 252;
    dim = 1;
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var _aavgret = function(a,t) {
    return Math.pow(1 + $u.mean(a),t) - 1;
  }
  if ($u.isnumber(x)) {
   return Math.pow(1 + x,t) - 1;
  }
  if ($u.isarray(x)) {
   return  _aavgret(x,t);
  }
  return $u.vectorfun(x,function(val){return _aavgret(val,t);},dim);
 }
}
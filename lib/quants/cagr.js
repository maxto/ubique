/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method cagr
 * @summary Compound annual growth rate
 * @description Compound annual growth rate
 * 
 * @param  {number|array|matrix} x rate or return 
 * @param  {number} p period (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var x = [100,98,101.5,103];
 * var y = [99.8,96.5,101.1,95.8];
 *
 * ubique.cagr(x,4);
 * // 0.00741707
 * ubique.cagr(ubique.cat(1,x,y),4);
 * // [[0.00741707, -0.0101743]]
 * ubique.cagr(ubique.cat(1,x,y),2,0);
 * // [-5.00375e-4, -0.00384869, -9.86681e-4, -0.0179535]
 */
 $u.cagr = function(x,p,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var _cagr = function(a,p) {
    return $u.power(1 + $u.ror(a),(1 / p)) - 1;
  }
  if ($u.isnumber(x)) {
   return 0;
  }
  if ($u.isarray(x)) {
   return  _cagr(x,p);
  }
  return $u.vectorfun(x,function(val){return _cagr(val,p);},dim);
 }
}
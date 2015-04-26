/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method cagr
 * @summary Compound annual growth rate
 * @description Compound annual growth rate
 * 
 * @param  {number|array|matrix} x portfolio/assets returns 
 * @param  {number} p number of years (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * var nrows = ubique.nrows;
 *
 * // CAGR for 10 months on 12 or 0.83 years
 * ubique.cagr(x,nrows(x)/12);
 * // 0.229388
 *
 * ubique.cagr(cat(1,x,y),nrows(x)/12);
 * // [ [ 0.229388, 0.151999 ] ]
 */
 $u.cagr = function(x,p,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  x = x || null;
  p = p || 1;
  dim = dim || 1;
  var _cagr = function(a,p) {
    return $u.power(1 + $u.ror(a,'ret'),(1 / p)) - 1;
  }
  if ($u.isnumber(x)) {
   return $u.power(a,(1 / p)) - 1;
  }
  if ($u.isarray(x)) {
   return  _cagr(x,p);
  }
  return $u.vectorfun(x,function(val){return _cagr(val,p);},dim);
 }
}
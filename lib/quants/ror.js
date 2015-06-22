/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method ror
 * @summary Simple rate of return
 * @description Simple rate of return calculated from the last and the first value of 
 * an array of numbers.
 * 
 * @param  {array|matrix} x array or matrix of returns or values
 * @param  {string} mode mode of values, 'ret' for returns, 'cum' for cumulative (def: 'ret')
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}   
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * ubique.ror(x);
 * // 0.187793
 * 
 * ubique.ror([100,101,99,98,97,102,103,104],'cum');
 * // 0.04
 * 
 * ubique.ror(cat(0,x,y),'ret');
 * // [ [ 0.187793 ], [ 0.125149 ] ]
 */
 $u.ror = function(x,mode,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  mode = mode == null ? 'ret' : mode;
  dim = dim == null ? 0 : dim;

  var _ror = function(a,mode) {
    if (mode === 'ret') {
      var eq = $u.cumprod($u.plus(1,a));
    } else
    if (mode === 'cum') {
      var eq = $u.clone(a);
    } else {
      throw  new Error('unknown value');
    }
    return eq[eq.length - 1] / eq[0] - 1;
  }
  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_ror,mode);
}
}
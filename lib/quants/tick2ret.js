/**
 * Data Transformation
 */
 module.exports = function($u) {
/**
 * @method tick2ret
 * @summary Convert a value series to a return series
 * @description  Convert a value series to a return series. 'simple' (default) for simple returns, 'continuous' for continuously compounded
 * 
 * @param  {array|matrix} x array of elements
 * @param  {string} mode method to compute returns. 'simple','continuous' (def: simple)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {array|matrix}     
 *
 * @example
 * ubique.tick2ret([0.5,-3,2.3]);
 * // [ -7, -1.766667 ]
 * 
 * ubique.tick2ret([[9, 5], [6, 1]]);
 * // [ [ -0.444444 ], [ -0.833333 ] ]
 */
 $u.tick2ret = function(x,mode,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  mode = mode == null ? 'simple' : mode;
  dim = dim == null ? 0 : dim;
  
  if ($u.numel(x) < 2) {
    throw new Error('insert at least two values');
  }
  var _tick2ret = function(a,mode) {
    var r = [];
    if (mode === 'simple') {
      for (var i = 1;i < a.length;i++) {
        r[i - 1] = a[i] / a[i - 1] - 1;
      }
    } else 
    if (mode === 'continuous') {
      for (var i = 1;i < a.length;i++) {
        r[i - 1] = Math.log(a[i] / a[i - 1]);
      }
    } else {
      throw new Error('unkwon retun method');
    }
    return r;
  }
  return $u.vectorfun(dim,x,_tick2ret,mode);
  
}

}

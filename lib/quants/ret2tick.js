/**
 * Data Transformation
 */
 module.exports = function($u) {
/**
 * @method ret2tick
 * @summary Convert a return series to a value series with a start value
 * @description  Convert a return series to a value series with a start value
 * 
 * @param  {array|matrix} x array of elements
 * @param  {string} mode method to compute returns. 'simple','continuous' (def: simple)
 * @param  {number} sval start value (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {array|matrix}     
 *
 * @example
 * ubique.ret2tick([0.5,-3,2.3],'simple',100);
 * // [ 100, 150, -300, -990 ]
 * 
 * ubique.ret2tick([[9, 5], [6, 1]],'simple',100);
 * // [ [ 100, 1000, 6000 ], [ 100, 700, 1400 ] ]
 */
 $u.ret2tick = function(x,mode,sval,dim) {
   if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  mode = mode == null ? 'simple' : mode;
  sval = sval == null ? 1 : sval;
  dim = dim == null ? 0 : dim;
  
  var _ret2tick = function(a,mode,sval) {
    if ($u.isnumber(a)) {
      a = [a];
    }
    var r = [];
    r[0] = sval;
    if (mode === 'simple') {
      for (var i = 1; i <= a.length; i++) {
        r[i] = r[i - 1] * (1 + a[i - 1]);
      }
    } else 
    if (mode === 'continuous') {
      for (var i = 1; i <= a.length; i++) {
        r[i] = r[i - 1] * Math.exp(a[i - 1]);
      }
    } else {
      throw new Error('unknown return method');
    }
    return r;
  }
  return $u.vectorfun(dim,x,_ret2tick,mode,sval);
  
}

}
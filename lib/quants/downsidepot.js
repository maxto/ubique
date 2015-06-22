/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method downsidepot
 * @summary Downside potential
 * @description Downside potential
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} mar minimum acceptable return (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.downsidepot(x,0.1/100);
 * // 0.0025
 * 
 * ubique.downsidepot(ubique.cat(0,x,y));
 * // [ [ 0.0023 ], [ 0.0173 ] ]
 */
 $u.downsidepot = function(x,mar,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
   mar = mar == null ? 0 : mar;
   dim = dim == null ? 0 : dim;
   
   var _ddp = function(a,mar) {
    var z = 0;
    for (var i = 0;i < a.length;i++) {
      z += Math.max(mar - a[i],0) / a.length;
    }
    return z;
  }
  if ($u.isnumber(x)) {
   return x;
 }
 return $u.vectorfun(dim,x,_ddp,mar);
}
}

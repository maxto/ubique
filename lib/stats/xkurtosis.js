/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method xkurtosis
 * @summary Excess kurtosis
 * @description Excess kurtosis
 * 
 * @param  {array|matrix} x array or matrix of elements
 * @param  {number} flag 0: bias correction, 1: simple (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.xkurtosis(x);
 * // 0.037581
 * 
 * ubique.xkurtosis(ubique.cat(0,x,y));
 * // [ [ 0.037581 ], [ -1.602358 ] ]
 */
 $u.xkurtosis = function(x,flag,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	flag = flag == null ? 1 : flag;
  dim  = dim == null ? 0 : dim;

  var kurt = $u.kurtosis(x,flag,dim);
  if ($u.isnumber(kurt)) {
    return kurt - 3;
  }
  return $u.arrayfun(kurt,function(a) {return a - 3;});
}

}
/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method mad
 * @summary Mean absolute deviation
 * @description Mean absolute deviation
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.mad(c);
 * // 1.11111
 * 
 * ubique.mad(a,1);
 * // [ [ 1, 1, 3 ] ]
 * 
 * ubique.mad(a);
 * // [ [ 0.444444 ], [ 3.777778 ] ]
 */
 $u.mad = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  dim  = dim == null ? 0 : dim;

  var _mad = function(a) {
   return $u.mean($u.arrayfun($u.minus(a,$u.mean(a)),Math.abs));
 }
 if ($u.isnumber(x)) {
   return 0;
 }
 return $u.vectorfun(dim,x,_mad);
}

}
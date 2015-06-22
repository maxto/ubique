/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
 	/**
 * @method ceil
 * @summary Round toward positive infinity
 * @description Round toward positive infinity
 * 
 * @param  {number|array|matrix} x number or array of values
 * @param  {number} x number of decimals
 * @return {number|array|matrix}
 *
 * @example
 * ubique.ceil(Math.PI,12);
 * // 3.141593
 * 
 * ubique.ceil(3.78);
 * // 4
 * 
 * ubique.ceil([4.51,-1.4]);
 * // [ 5, -1 ]
 * 
 * ubique.ceil([[4.5134,-1.4345],[3.7809,0.0134]],2);
 * // [ [ 4.52, -1.43 ], [ 3.79, 0.02 ] ]
 */
 $u.ceil = function(x,n) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	n = n == null ? 0 : n;
 	var p = Math.pow(10,n);
  var _ceil = function(a) {
    return Math.ceil(a * p) / p;
  }
  return $u.arrayfun(x,_ceil);
}
}

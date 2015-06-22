/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
 	/**
 * @method floor
 * @summary Round toward negative infinity
 * @description Round toward negative infinity
 * 
 * @param  {number|array|matrix} x number or array of values
 * @param  {number} x number of decimals
 * @return {number|array|matrix}
 *
 * @example
 * ubique.floor(Math.PI,12);
 * // 3.141592653589
 * 
 * ubique.floor(3.78);
 * // 3
 * 
 * ubique.floor([4.51,-1.4]);
 * // [ 4, -2 ]
 * 
 * ubique.floor([[4.5134,-1.4345],[3.7809,0.0134]],2);
 * //[ [ 4.51, -1.43 ], [ 3.78, 0.01 ] ]
 */
 $u.floor = function(x,n) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  n = n == null ? 0 : n;
  var p = Math.pow(10,n);
  var _floor = function(a) {
    return Math.round(a * p) / p;
  }
  return $u.arrayfun(x,_floor);
}
}

/**
 * Relational Operations
 */
 module.exports = function($u) {
/**
 * @method ne
 * @summary Inequality X !== Y
 * @description Inequality X !== Y
 *
 * @param  {number|array|matrix} x left array
 * @param  {number|array|matrix} y right array
 * @return {number|array|matrix}
 *
 * @example
 * ubique.ne(5,5);
 * // false
 * ubique.ne(5,[5,6,3]);
 * // [ false, true, true ]
 * ubique.ne(5,[[5,6],[3,5]]);
 * // [ [ false, true ], [ true, false ] ]
 * ubique.ne([5,6,3],5);
 * // [ false, true, true ]
 * ubique.ne([[5,6],[3,5]],5);
 * // [ [ false, true ], [ true, false ] ]
 * ubique.ne([5,6,3],[2,6,0]);
 * // [ true, false, true ]
 * ubique.ne([[5,6],[-1,2]],[[5,6],[3,5]]);
 * // [ [ false, false ], [ true, true ] ]
 */
 $u.ne = function(x,y) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  var _ne = function(el){ return el !== 0;};

  var d = $u.minus(x,y);
  if ($u.isnumber(d)) {
    return _ne(d);
  }
  return $u.arrayfun(d,_ne);
}
}
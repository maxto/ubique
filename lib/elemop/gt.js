/**
 * Relational Operations
 */
 module.exports = function($u) {
/**
 * @method gt
 * @summary Greater than X > Y
 * @description Greater than X > Y
 *
 * @param  {number|array|matrix} x left array
 * @param  {number|array|matrix} y right array
 * @return {number|array|matrix}
 *
 * @example
 * ubique.gt(5,5);
 * // false
 * ubique.gt(5,[5,6,3]);
 * // [ false, false, true ]
 * ubique.gt(5,[[5,6],[3,5]]);
 * // [ [ false, false ], [ true, false ] ]
 * ubique.gt([5,6,3],5);
 * // [ false, true, false ]
 * ubique.gt([[5,6],[3,5]],5);
 * // [ [ false, true ], [ false, false ] ]
 * ubique.gt([5,6,3],[2,6,0]);
 * // [ true, false, true ]
 * ubique.gt([[5,6],[-1,2]],[[5,6],[3,5]]);
 * // [ [ false, false ], [ false, false ] ]
 */
 $u.gt = function(x,y) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  var _gt = function(el){ return el > 0;};

  var d = $u.minus(x,y);
  if ($u.isnumber(d)) {
    return _gt(d);
  }
  return $u.arrayfun(d,_gt);
}
}
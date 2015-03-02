/**
 * Relational Operations
 */
 module.exports = function($u) {
/**
 * @method lt
 * @summary Less than X < Y
 * @description Less than X < Y
 *
 * @param  {number|array|matrix} x left array
 * @param  {number|array|matrix} y right array
 * @return {number|array|matrix}
 *
 * @example
 * ubique.lt(5,5);
 * // false
 * ubique.lt(5,[5,6,3]);
 * // [ false, true, false ]
 * ubique.lt(5,[[5,6],[3,5]]);
 * // [ [ false, true ], [ false, false ] ]
 * ubique.lt([5,6,3],5);
 * // [ false, false, true ]
 * ubique.lt([[5,6],[3,5]],5);
 * // [ [ false, false ], [ true, false ] ]
 * ubique.lt([5,6,3],[2,6,0]);
 * // [ false, false, false ]
 * ubique.lt([[5,6],[-1,2]],[[5,6],[3,5]]);
 * // [ [ false, false ], [ true, true ] ]
 */
 $u.lt = function(x,y) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  var _lt = function(el){ return el < 0;};

  var d = $u.minus(x,y);
  if ($u.isnumber(d)) {
    return _lt(d);
  }
  return $u.arrayfun(d,_lt);
}
}
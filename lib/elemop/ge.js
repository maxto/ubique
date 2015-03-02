/**
 * Relational Operations
 */
 module.exports = function($u) {
/**
 * @method ge
 * @summary Greater than or equal to X >= Y
 * @description Greater than or equal to X >= Y
 *
 * @param  {number|array|matrix} x left array
 * @param  {number|array|matrix} y right array
 * @return {number|array|matrix}
 *
 * @example
 * ubique.ge(5,5);
 * // true
 * ubique.ge(5,[5,6,3]);
 * // [ true, false, true ]
 * ubique.ge(5,[[5,6],[3,5]]);
 * // [ [ true, false ], [ false, true ] ]
 * ubique.ge([5,6,3],5);
 * // [ true, true, false ]
 * ubique.ge([[5,6],[3,5]],5);
 * // [ [ true, true ], [ false, true ] ]
 * ubique.ge([5,6,3],[2,6,0]);
 * // [ false, true, false ]
 * ubique.ge([[5,6],[-1,2]],[[5,6],[3,5]]);
 * // [ [ true, true ], [ false, false ] ]
 */
 $u.ge = function(x,y) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  var _ge = function(el){ return el >= 0;};

  var d = $u.minus(x,y);
  if ($u.isnumber(d)) {
    return _ge(d);
  }
  return $u.arrayfun(d,_ge);
}
}
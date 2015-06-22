/**
 * Relational Operations
 */
 module.exports = function($u) {
/**
 * @method eq
 * @summary Equality X === Y
 * @description Equality X === Y
 *
 * @param  {number|array|matrix} x left array
 * @param  {number|array|matrix} y right array
 * @return {number|array|matrix}
 *
 * @example
 * ubique.eq(5,5);
 * // true
 * 
 * ubique.eq(5,[5,6,3]);
 * // [ true, false, false ]
 * 
 * ubique.eq(5,[[5,6],[3,5]]);
 * // [ [ true, false ], [ false, true ] ]
 * 
 * ubique.eq([5,6,3],5);
 * // [ true, false, false ]
 * 
 * ubique.eq([[5,6],[3,5]],5);
 * // [ [ true, false ], [ false, true ] ]
 * 
 * ubique.eq([5,6,3],[2,6,0]);
 * // [ false, true, false ]
 * 
 * ubique.eq([[5,6],[-1,2]],[[5,6],[3,5]]);
 * // [ [ true, true ], [ false, false ] ]
 */
 $u.eq = function(x,y) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  var _eq = function(el) {
    return el === 0;
  }
  var d = $u.minus(x,y);
  return $u.arrayfun(d,_eq);
}
}

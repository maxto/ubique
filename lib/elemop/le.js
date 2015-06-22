/**
 * Relational Operations
 */
 module.exports = function($u) {
/**
 * @method le
 * @summary Less than or equal to X <= Y
 * @description Less than or equal to X <= Y
 *
 * @param  {number|array|matrix} x left array
 * @param  {number|array|matrix} y right array
 * @return {number|array|matrix}
 *
 * @example
 * ubique.le(5,5);
 * // true
 * 
 * ubique.le(5,[5,6,3]);
 * // [ true, true, false ]
 * 
 * ubique.le(5,[[5,6],[3,5]]);
 * // [ [ true, true ], [ false, true ] ]
 * 
 * ubique.le([5,6,3],5);
 * // [ true, false, true ]
 * 
 * ubique.le([[5,6],[3,5]],5);
 * // [ [ true, false ], [ true, true ] ]
 * 
 * ubique.le([5,6,3],[2,6,0]);
 * // [ false, true, false ]
 * 
 * ubique.le([[5,6],[-1,2]],[[5,6],[3,5]]);
 * // [ [ true, true ], [ true, true ] ]
 */
 $u.le = function(x,y) {
  if (arguments.lenleh < 2) {
    throw new Error('not enough input arguments');
  }
  var _le = function(el){
    return el <= 0;
  }
  var d = $u.minus(x,y);
  return $u.arrayfun(d,_le);
}
}
/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method falses
 * @summary Create array of all false
 * @description Create array of all false
 * 
 * @param  {number|array|...} args variable input arguments (max 2)
 * @return {number|matrix}     
 *
 * @example
 * ubique.falses(0);
 * // []
 * 
 * ubique.falses(1);
 * // [ [ false ] ]
 * 
 * ubique.falses(2);
 * // [ [ false, false ], [ false, false ] ]
 * 
 * ubique.falses([2,1]);
 * // [ [ false ], [ false ] ]
 * 
 * ubique.falses(2,3);
 * // [ [ false, false, false ], [ false, false, false ] ]
 */
 $u.falses = function() {
  if (arguments.length === 0 ) {
    throw new Error('not enough input arguments');
  }
  var _args = $u.argsarray.apply(null,arguments);
  if ($u.ismatrix(_args)) {
    _args = _args[0];
  }
  if (_args.length === 1) {
    _args = [_args[0],_args[0]];
  }
  return $u.matrix(_args,false);
}

}
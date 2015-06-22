/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method ones
 * @summary Create array of all ones
 * @description Create array of all ones
 * 
 * @param  {number|array|...} args variable input arguments (max 2)
 * @return {number|matrix}     
 *
 * @example
 * ubique.ones(0);
 * // []
 * 
 * ubique.ones(1);
 * // [ [ 1 ] ]
 * 
 * ubique.ones(2);
 * // [ [ 1, 1 ], [ 1, 1 ] ]
 * 
 * ubique.ones([2,1]);
 * // [ [ 1 ], [ 1 ] ]
 * 
 * ubique.ones(2,3);
 * // [ [ 1, 1, 1 ], [ 1, 1, 1 ] ]
 */
 $u.ones = function() {
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
  return $u.matrix(_args,1);
}

}
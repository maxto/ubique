/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method trues
 * @summary Create array of all true
 * @description Create array of all true
 * 
 * @param  {number|array|...} args variable input arguments (max 2)
 * @return {number|matrix}     
 *
 * @example
 * ubique.trues(0);
 * // []
 * 
 * ubique.trues(1);
 * // [ [ true ] ]
 * 
 * ubique.trues(2);
 * // [ [ true, true ], [ true, true ] ]
 * 
 * ubique.trues([2,1]);
 * // [ [ true ], [ true ] ]
 * 
 * ubique.trues(2,3);
 * // [ [ true, true, true ], [ true, true, true ] ]
 */
 $u.trues = function() {
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
  return $u.matrix(_args,true);
}

}
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
 * ubique.ones();
 * // 1
 * ubique.ones(0);
 * // []
 * ubique.ones(1);
 * // [[1]]
 * ubique.ones(2);
 * // [[1, 1], [1, 1]]
 * ubique.ones([2,1]);
 * // [[1], [1]]
 * ubique.ones(1,2);
 * // [[1, 1]]
 * ubique.ones(2,3);
 * // [[1, 1, 1], [1, 1, 1]]
 */
 $u.ones = function() {
  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
    return 1;
  }
  var _args = [];
  for (var i = 0;i < arguments.length; i++) {
    _args.push(arguments[i]);
  }
  if ($u.ismatrix(_args)) {_args = _args[0];}
  if (_args.length === 1) {_args = [_args[0],_args[0]];}
  return $u.matrix(_args,1);
}

}
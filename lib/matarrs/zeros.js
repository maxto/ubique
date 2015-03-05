/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method zeros
 * @summary Create array or matrix of all zeros
 * @description Create array or matrix of all zeros
 * 
 * @param  {number|array|...} args variable input arguments (max 2)
 * @return {number|matrix}     
 *
 * @example
 * ubique.zeros();
 * // 0
 * ubique.zeros(0);
 * // []
 * ubique.zeros(1);
 * // [[0]]
 * ubique.zeros(2);
 * // [[0, 0], [0, 0]]
 * ubique.zeros([2,1]);
 * // [[0], [0]]
 * ubique.zeros(1,2);
 * // [[0, 0]]
 * ubique.zeros(2,3);
 * // [[0, 0, 0], [0, 0, 0]]
 */
 $u.zeros = function() {
  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
    return 0;
  }
  var _args = [];
  for (var i = 0;i < arguments.length; i++) {
    _args.push(arguments[i]);
  }
  if ($u.ismatrix(_args)) {_args = _args[0];}
  if (_args.length === 1) {_args = [_args[0],_args[0]];}
  return $u.matrix(_args,0);
}

}
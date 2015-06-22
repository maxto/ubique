/**
* Array Creation and Concatenation
*/
module.exports = function($u) {
/**
 * @method eye
 * @summary Identity matrix
 * @description Identity matrix
 * 
 * @param  {number|array|...} args variable input arguments (max 2)
 * @return {number|matrix}     
 *
 * @example
 * ubique.eye(0);
 * // []
 * 
 * ubique.eye(1);
 * // [ [ 1 ] ]
 * 
 * ubique.eye(2);
 * // [ [ 1, 0 ], [ 0, 1 ] ]
 * 
 * ubique.eye([2,1]);
 * // [ [ 1 ], [ 0 ] ]
 * 
 * ubique.eye(2,3);
 * // [ [ 1, 0, 0 ], [ 0, 1, 0 ] ]
 */
 $u.eye = function() {
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
  var matrix =  $u.matrix(_args,0);
  if ($u.isnumber(matrix)) {
    return 1;
  }
  for (var i = 0;i < Math.min.apply(Math,$u.size(matrix));i++) {
   matrix[i][i] = 1;
 }
 return matrix;
}
}
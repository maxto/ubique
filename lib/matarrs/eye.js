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
 * ubique.eye();
 * // 1
 * ubique.eye(0);
 * // []
 * ubique.eye(1);
 * // [[1]]
 * ubique.eye(2);
 * // [[1, 0], [0, 1]]
 * ubique.eye([2,1]);
 * // [[1], [0]]
 * ubique.eye(1,2);
 * // [[1, 0]]
 * ubique.eye(2,3);
 * // [[1, 0, 0], [0, 1, 0]]
 */
 $u.eye = function() {
 	if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
 		return 0;
 	}
 	var _args = [];
 	for (var i = 0;i < arguments.length; i++) {
 		_args.push(arguments[i]);
 	}
 	if ($u.ismatrix(_args)) {_args = _args[0];}
 	if (_args.length === 1) {_args = [_args[0],_args[0]];}
 	var matrix =  $u.matrix(_args,0);

 	if ($u.isnumber(matrix)) {return 1;}
 	if ($u.isempty(matrix)) {return [];}
 	for (var i = 0;i < Math.min.apply(Math,$u.size(matrix));i++) {
 		matrix[i][i] = 1;
 	}
 	return matrix;
 }
}
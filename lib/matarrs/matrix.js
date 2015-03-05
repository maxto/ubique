/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method matrix
 * @summary Create a matrix object
 * @description Create a matrix object with 2 inputs, an array of size [rows,cols] and a chosen value
 * or with 3 inputs, two numbers for dimension (rows,cols) and the last one for the value.
 * 
 * @param  {number|array|...} args variable input arguments (max 3)
 * @return {matrix}       
 *
 * @example
 * ubique.matrix(0);
 * // []
 * ubique.matrix(2);
 * // [[0, 0], [0, 0]]
 * ubique.matrix([2,3]);
 * // [[0, 0, 0], [0, 0, 0]]
 * ubique.matrix(2,3);
 * // [[0, 0, 0], [0, 0, 0]]
 * ubique.matrix([2,3],5);
 * // [[5, 5, 5], [5, 5, 5]]
 * ubique.matrix(2,3);
 * // [[0, 0, 0], [0, 0, 0]]
 */
 $u.matrix = function() {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	var _args = arguments,
 	nargs = arguments.length;
 	var _matrix = function(x,y,val) {
 		var out = new Array(x);
 		for (var i = 0;i < x;i++) {
 			out[i] = new Array(y);
 			for (j = 0; j < y; j++) {
 				out[i][j] = val;
 			}
 		}
 		return out;
 	}
 	if (nargs === 0) {
 		return [[]];
 	} else
 	if (nargs === 1) {
 		if ($u.isnumber(_args[0])) {
 			return _matrix(_args[0],_args[0],0);
 		} else 
 		if ($u.isarray(_args[0])) {
 			return _matrix(_args[0][0],_args[0][1],0);
 		} else {
 			throw new Error('unknwon input type');
 		}
 	} else
 	if (nargs === 2) {
 		if ($u.isnumber(_args[0]) && $u.isnumber(_args[1])) {
 			return _matrix(_args[0],_args[1],0);
 		}
 		return _matrix(_args[0][0],_args[0][1],_args[1]);
 	} else
 	if (nargs === 3) {
 		return _matrix(_args[0],_args[1],_args[2]);
 	} else
 	throw new Error('too manny input arguments');
 }

}

/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method  repmat
 * @summary Replicate and tile array
 * @description  Replicate and tile array
 *
 * @param  {number|array|matrix|boolean} x value assigned to every elements of array or matrix
 * @param  {number} m number of matrix rows
 * @param  {number} n number of matrix columns
 * @return {matrix}     
 *
 * @example
 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
 * 
 * ubique.repmat(10,3);
 * // [ [ 10, 10, 10 ], [ 10, 10, 10 ], [ 10, 10, 10 ] ]
 * 
 * ubique.repmat(0.5,3,2);
 * // [ [ 0.5, 0.5 ], [ 0.5, 0.5 ], [ 0.5, 0.5 ] ]
 * 
 * ubique.repmat([5,6,3],1,2);
 * // [ [ 5, 6, 3, 5, 6, 3 ] ]
 * 
 * ubique.repmat([[9, 5],[6, 1]],2);
 * // [ [ 9, 5, 9, 5 ], [ 6, 1, 6, 1 ], [ 9, 5, 9, 5 ], [ 6, 1, 6, 1 ] ]
 */
 $u.repmat = function(x,m,n) {
 	if (arguments.length < 2) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 2) {
 		n = m;
 	}
 	if ($u.isnumber(x) || $u.isarray(x) || $u.islogical(x)) {
 		x = $u.tomat(x);
 	}
 	var size = $u.size(x);
 	var out = $u.matrix(size[0]*m,size[1]*n);
 	for (var i = 0; i < m; i++) {
 		for (var j = 0; j < n; j++) {
 			for (var ii = 0; ii < size[0]; ii++) {
 				for (var jj = 0; jj < size[1]; jj++) {
 					out[(i * size[0]) + ii][(j * size[1]) + jj] = x[ii][jj];
 				}
 			}
 		}
 	}
 	return out;
 }

}
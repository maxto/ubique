/**
 * Matrix Analysis
 */
 module.exports = function($u) {
/**
 * @method det
 * @summary Matrix determinant
 * @description Matrix determinant with LU decomposition method
 *
 * @param  {matrix} x square matrix
 * @return {number}   
 * 
 * @example
 * ubique.det([[1,5],[6,2]]);
 * // -28
 * ubique.det([[2,2],[2,3]]);
 * // 2
 */
 $u.det = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x) || $u.isarray(x)) {
 		throw new Error('input must be a matrix');
 	}
 	if (!$u.issquare(x)) {
 		throw new Error('matrix must be square')
 	}
 	if ($u.issingular(x)) {
 		throw new Error('matrix is singular');
 	}
 	var n = $u.ncols(x),
 	lumat = $u.lu(x),
    out = lumat.S;
 	for (var i = 0;i < n;i++) {
 		out = out * lumat.LU[i][i];
 	}
 	return out;
 }

}
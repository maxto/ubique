/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
 /**
 * @method  reshape
 * @summary Reshape array or matrix with custom values
 * @description  Reshape array or matrix with custom values
 *
 * @param  {array|matrix} x array or matrix of elements
 * @param  {number} m number of rows for the new matrix
 * @param  {number} n number of cols for the new matrix
 * @return {matrix}     
 *
 * @example
 * var b = [[-1,3,-1],[4,5,9]];
 * 
 * ubique.reshape([5,6,3],1,3);
 * // [[5, 6, 3]]
 * ubique.reshape(b,3,2);
 * // [[-1, 5], [4, -1], [3, 9]]
 * ubique.reshape(b,6,1);
 * // [[-1], [4], [3], [5], [-1], [9]]
 */
 $u.reshape = function(x,m,n) {
 	if (arguments.length < 3) {
 		throw new Error('not enough input arguments');
 	}
 	if (!$u.isinteger(m) || !$u.isinteger(n)) {
 		throw new Error('dimensions must be integer numbers');
 	}
 	var nrows = $u.nrows(x),
 	ncols = $u.ncols(x),
 	totsiz = nrows * ncols;
 	if ((m * n) !== totsiz ) {
 		throw new Error('total number of elements must be the same');
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	} else 
 	if ($u.isarray(x)) {
 		if (m === nrows && n === ncols) {
 			return x;
 		} else {
 			return $u.transpose(x);
 		}
 	} else 
 	if ($u.ismatrix(x)) {
 		var out = $u.matrix(m,n,NaN),
 		vec = $u.flatten(x);
 		for (var i = 0;i < m * n;i++) {
 			var idx = $u.ind2sub([m,n],i);
 			out[idx[0]][idx[1]] = vec[i];
 		}
 		return out;
 	} else {
 		throw new Error('unknown input arguments');
 	}

 }
}
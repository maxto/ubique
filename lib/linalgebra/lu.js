/**
 * Matrix Decomposition
 */
 module.exports = function($u) {
/**
 * @method lu
 * @summary LU matrix factorization
 * @description LU matrix factorization based on Doolittle algorithm. The LU decomposition with pivoting always exists, even if the matrix is singular.  
 * Returns an object:  
 * 
 * LU (lu matrix) 
 * L (lower triangular matrix)
 * U (upper triangular matrix)
 * P (pivot vector)
 * S (pivot sign) +1 or -1
 * 
 * @param  {matrix} x input matrix
 * @return {object}    .LU (lu matrix) 
 *                     .L (lower triangular matrix)
 *                     .U (upper triangular matrix)
 *                     .P (pivot vector)
 *                     .S (pivot sign) +1 or -1
 *
 * @example
 * ubique.lu([[5,6,5],[7,8,-1]]);
 * // { LU: [ [ 7, 8, -1 ], [ 0.714286, 0.285714, 5.714286 ] ],
 * //    L: [ [ 1, 0 ], [ 0.714286, 1 ] ],
 * //    U: [ [ 7, 8, -1 ], [ 0, 0.285714, 5.714286 ] ],
 * //    P: [ 1, 0 ],
 * //    S: -1;}
 *
 * ubique.lu([[0, 5], [6, 0]]);
 * // { LU: [ [ 6, 0 ], [ 0, 5 ] ],
 * //    L: [ [ 1, 0 ], [ 0, 1 ] ],
 * //    U: [ [ 6, 0 ], [ 0, 5 ] ],
 * //    P: [ 1, 0 ],
 * //    S: -1;}
 */
 $u.lu = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}

 	// LU decomposition
 	var lud = function(a) {
 		var _a = $u.clone(a);
 		var m = $u.nrows(_a);
 		var n = $u.ncols(_a);
 		var piv = $u.colon(0,m - 1);
 		var pivsign = 1;
 		var _arow = [];
 		var _acol = [];

 		for (var j = 0; j < n; j++) {

 			_acol = $u.getcol(_a,j);

 			for (var i = 0; i < m; i++) {

 				_arow = $u.getrow(_a,i);

 				var kmax = Math.min(i, j);
 				var s = 0;
 				for (var k = 0; k < kmax; k++) {
 					s += _arow[k] * _acol[k];
 				}
 				_arow[j] = _acol[i] -= s;
 			}

 			var p = j;
 			for (var i = j + 1; i < m; i++) {
 				if (Math.abs(_acol[i]) > Math.abs(_acol[p])) {
 					p = i;
 				}
 			}
 			if (p !== j) {
 				for (var k = 0; k < n; k++) {
 					var t = _a[p][k];
 					_a[p][k] = _a[j][k];
 					_a[j][k] = t;
 				}
 				var k = piv[p];
 				piv[p] = piv[j];
 				piv[j] = k;
 				pivsign = -pivsign;
 			}

 			if (j < m && _a[j][j] !== 0) {
 				for (var i = j + 1; i < m; i++) {
 					_a[i][j] /= _a[j][j];
 				}
 			}
 		}
 		return {'Y':_a,'P':piv,'S':pivsign};
 	}

 	// Lower triangular matrix L
 	var ltm = function(L) {
 		var m = $u.nrows(L),
 		n = $u.ncols(L);
 		if (m < n) {
 			var _L = $u.zeros(m,m);
 		} else {
 			var _L = $u.zeros(m,n);
 		}
 		for (var i = 0; i < $u.nrows(_L); i++) {
 			for (var j = 0; j < $u.ncols(_L); j++) {
 				if (i > j) {
 					_L[i][j] = L[i][j];
 				} else 
 				if (i == j) {
 					_L[i][j] = 1;
 				}
 			}
 		}
 		return _L;
 	}

    // Upper triangular matrix U
    var utm = function(U) {
    	var m = $u.nrows(U),
    	n = $u.ncols(U);
    	if (m < n) {
    		var _U = $u.zeros(m,n);
    	} else {
    		var _U = $u.zeros(n,n);
    	}
    	for (var i = 0; i < m; i++) {
    		for (var j = 0; j < n; j++) {
    			if (i <= j) {
    				_U[i][j] = U[i][j];
    			}
    		}
    	}
    	return _U;
    }

    // LU matrix
    var _LU = lud(x);
    return {'LU':_LU.Y,'L':ltm(_LU.Y),'U':utm(_LU.Y),'P':_LU.P,'S':_LU.S};
}



}
/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method transpose
 * @summary Transpose X.'
 * @description Transpose of matrix X. Array is 1xN as default. 
 * Transpose of Array is Nx1 matrix.
 * 
 * @param  {array|matrix} x array or matrix of elements
 * @return {matrix}
 *
 * @example
 * ubique.transpose([[5,6,5],[7,8,-1]]);
 * // [ [ 5, 7 ], [ 6, 8 ], [ 5, -1 ] ]
 * 
 * ubique.transpose([5,6,3]);
 * // [ [ 5 ], [ 6 ], [ 3 ] ]
 */
 $u.transpose = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  var _transpose = function(a,acols,arows) {
    var out = $u.matrix(acols,arows);
    for (var i = 0;i < acols; i++) {
      for (var j = 0;j < arows; j++) {
        out[i][j] = a[j][i];
      }
    }
    return out;
  }
  if ($u.isnumber(x)) {
    return x;
  }
  if ($u.isarray(x)) {
    return _transpose([x],x.length,1);
  }
  return _transpose(x,$u.ncols(x),$u.nrows(x));
}

}
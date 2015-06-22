/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method setcol
 * @summary Set a column of a matrix
 * @description Set a column of a matrix. If X is an array, it is auto-converted to
 * a column vector.
 * 
 * @param  {array|vector} x array or vector Mx1
 * @param  {matrix} mat matrix MxN of values
 * @param  {number} n column number (indexing from 0 to n - 1)
 * @return {matrix}   
 *
 * @example
 * ubique.setcol([2,0],[[5,6,5],[7,8,-1]],0);
 * // [ [ 2, 6, 5 ], [ 0, 8, -1 ] ]
 *
 * ubique.setcol([9,21],[[5,6,5],[7,8,-1]],2);
 * // [ [ 5, 6, 9 ], [ 7, 8, 21 ] ]
 */
 $u.setcol = function(x,mat,n) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  n = n == null ? 0 : n;
  if ($u.isarray(x)) {
    x = $u.transpose(x);
  }
  if (!$u.isinteger(n) || n < 0 || n >= $u.ncols(mat)) {
    throw new Error('col must be an integer between 0 and N - 1 columns');
  }
  for (var i = 0;i < $u.nrows(mat);i++) {
    mat[i][n] = x[i][0];
  }
  return mat;
}

}
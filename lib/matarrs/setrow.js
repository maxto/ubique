/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method setrow
 * @summary Set a row of matrix
 * @description Set a row of a matrix.If X is an array, it is auto-converted to
 * a row vector.
 * 
 * @param  {array|vector} x array or vector 1xN
 * @param  {matrix} mat matrix MxN of values
 * @param  {number} n column number (indexing from 0 to n - 1)
 * @return {matrix}   
 *
 * @example
 * ubique.setrow([2,0,-2],[[5,6,5],[7,8,-1]],0);
 * // [ [ 2, 0, -2 ], [ 7, 8, -1 ] ]
 *
 * ubique.setrow([9,21,57],[[5,6,5],[7,8,-1]],1);
 * // [ [ 5, 6, 5 ], [ 9, 21, 57 ] ]
 */
 $u.setrow = function(x,mat,n) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  n = n == null ? 0 : n;
  if ($u.isarray(x)) {
   x = [x];
  }
  if (!$u.isinteger(n) || n < 0 || n >= $u.nrows(mat)) {
    throw new Error('row must be an integer between 0 and N - 1 rows');
  }
  for (var i = 0;i < $u.ncols(mat);i++) {
    mat[n][i] = x[0][i];
  }
  return mat;
 }

}
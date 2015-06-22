/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method getcol
 * @summary Get a column of a matrix
 * @description Get a column of a matrix
 * 
 * @param  {matrix} x matrix of elements
 * @param  {number} n column number (indexing from 0 to n - 1)
 * @return {array}   
 *
 * @example
 * ubique.getcol([[5,6,5],[7,8,-1]],0);
 * // [ 5, 7 ]
 * 
 * ubique.getcol([[5,6,5],[7,8,-1]],2);
 * // [ 5, -1 ]
 */
 $u.getcol = function(x,n) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  n = n == null ? 0 : n;
  if ($u.isarray(x)) {
    throw new Error('input must be a matrix');
  }
  if (!$u.isinteger(n) || n < 0 || n >= $u.ncols(x)) {
    throw new Error('col must be an integer between 0 and N - 1 columns');
  }
  var v = [];
  for (var i = 0;i < x.length;i++) {
    v[i] = x[i][n];
  }
  return v;
}

}
/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method col
 * @summary Get a column of a matrix
 * @description  Get a column of a matrix
 * 
 * @param  {array|matrix} x matrix of elements
 * @param  {number} n column number (indexing from 0 to n - 1)
 * @return {array}   
 *
 * @example
 * ubique.col([[5,6,5],[7,8,-1]],0);
 * // [5, 7]
 */
 $u.col = function(x,n) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if ($u.isundefined(n)) {
    n = 0;
  }
  if ($u.isarray(x)) {
    return x;
  }
  if (!$u.isinteger(n) || n < 0 || n >= $u.ncols(x)) {
    throw new Error('column must be an integer between 0 and N - 1 columns');
  }
  var v = [];
  for (var i = 0;i < x.length;i++) {
    v[i] = x[i][n];
  }
  return v;
}

}
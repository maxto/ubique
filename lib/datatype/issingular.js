/**
 * Matrix Types
 */
 module.exports = function($u) {
/**
 * @method issingular
 * @summary True for singular matrix
 * @description True for singular matrix. A square matrix which does not have an inverse. A matrix is singular if and only if its determinant is zero.
 * 
 * @param  {matrix} x  input matrix
 * @return {boolean}     
 *
 * @example
 * ubique.issingular([[2,6],[1,3]]); // false
 */
 $u.issingular = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if ($u.isnumber(x) || $u.isarray(x)) {
    throw new Error('input must be a matrix');
  }
  if (!$u.issquare(x)) {
    throw new Error('input must be a square matrix');
  }
  var n = $u.ncols(x);
  for (var i = 0;i < n;i++) {
    if (x[i][i] === 0) {
      return true;
    }
  }
  return false;
}

}

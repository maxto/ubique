/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
  /**
  * @method mldivide
  * @summary Matrix division X \ Y
  * @description Matrix division X \ Y. If X is NxN and Y is NxM, then
  * returns a matrix NxM. Y is multiplied with the inverse of X. X must be square.
  * 
  * @param  {number|array|matrix} x number or array of values
  * @param  {number|array|matrix} y number or array of values
  * @return {number|array|matrix}   
  *
  * @example
  * var a = [[5,6,5],[7,8,-1]];
  * var e = [[9, 5], [6, 1]];
  * var f = [[3, 2], [5, 2]];
  * 
  * ubique.mldivide(5,6);
  * // 0.833333
  * ubique.mldivide(e,f);
  * // [[1.8, 1], [1.2, 0.2]]
  * ubique.mldivide(5,e);
  * // [[1.04762, 0.380952], [-1.28571, -0.285714]]
  * ubique.mldivide(e,a);
  * // [[1.42857, 1.61905, -0.47619], [-1.57143, -1.71429, 1.85714]]
  */
  $u.mldivide = function(y,x) {
    if (arguments.length < 2) {
      throw new Error('not enough input arguments');
    }
    if ($u.isnumber(x) && $u.isnumber(y)) {
      return x/y;
    } else
    if ($u.isnumber(y)) {
      return $u.ldivide(y,x);
    } else 
    if ($u.issquare(y)) {
      if ($u.ncols(y) !== $u.nrows(x)) {
        throw new Error('matrix dimensions mismatch');
      }
      return $u.mtimes($u.inv(y),x);
    } else {
      throw new Error('first argument must be square');
    }
  }

}
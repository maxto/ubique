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
  * ubique.mldivide(5,6);
  * // 1.2
  * 
  * ubique.mldivide([[9, 5],[6, 1]],[[3, 2],[5, 2]]);
  * // [ [ 1.047619, 0.380952 ], [ -1.285714, -0.285714 ] ]
  * 
  * ubique.mldivide(5,[[9, 5],[6, 1]]);
  * // [ [ 1.8, 1 ], [ 1.2, 0.2 ] ]
  * 
  * ubique.mldivide([[9, 5],[6, 1]],[[5,6,5],[7,8,-1]]);
  * // [ [ 1.428571, 1.619048, -0.47619 ],[ -1.571429, -1.714286, 1.857143 ] ]
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
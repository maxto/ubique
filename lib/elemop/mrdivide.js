/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
  /**
  * @method mrdivide
  * @summary Matrix division X / Y
  * @description Matrix division X / Y. If X is MxN and Y is NxN, then
  * it returns a matrix MxN. X is multiplied with the inverse of Y. Y must be square.
  * 
  * @param  {number|array|matrix} x number or array of values
  * @param  {number|array|matrix} y number or array of values
  * @return {number|array|matrix}   
  *
  * @example
  * ubique.mrdivide(5,6);
  * // 0.833333
  * 
  * ubique.mrdivide([5,6,3],6);
  * // [ 0.833333, 1, 0.5 ]
  * 
  * ubique.mrdivide([[9, 5], [6, 1]],5);
  * // [ [ 1.8, 1 ], [ 1.2, 0.2 ] ]
  * 
  * ubique.mrdivide([[9, 5], [6, 1]],[[3, 2], [5, 2]]);
  * // [ [ 1.75, 0.75 ], [ -1.75, 2.25 ] ]
  * 
  * ubique.mrdivide([[5,6,5],[7,8,-1]],[[1,1,-1],[1,-2,3],[2,3,1]]);
  * // [ [ -0.769231, 0.538462, 2.615385 ],[ 3.384615, 0.230769, 1.692308 ] ]
  */
  $u.mrdivide = function(x,y) {
    if (arguments.length < 2) {
      throw new Error('not enough input arguments');
    }
    if ($u.isnumber(x) && $u.isnumber(y)) {
      return x/y;
    } else
    if ($u.isnumber(y)) {
      return $u.rdivide(x,y);
    } else 
    if ($u.issquare(y)) {
      if ($u.ncols(x) !== $u.nrows(y)) {
        throw new Error('matrix dimensions mismatch');
      }
      return $u.mtimes(x,$u.inv(y));
    } else {
      throw new Error('second argument must be square');
    }
  }

}
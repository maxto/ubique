/**
 * Linear Equations
 */
 module.exports = function($u) {
  /**
  * @method inv
  * @summary Matrix inverse
  * @description Inverse of a square matrix
  * 
  * @param  {number|array|matrix} x number or array of values
  * @return {number|array|matrix}   
  *
  * @example
  * ubique.inv([[3, 2], [5, 2]]);
  * // [ [ -0.5, 0.5 ], [ 1.25, -0.75 ] ]
  * 
  * ubique.inv([[1,1,-1],[1,-2,3],[2,3,1]]);
  * // [ [ 0.846154, 0.307692, -0.076923 ], [ -0.384615, -0.230769, 0.307692 ], [ -0.538462, 0.076923, 0.230769 ] ]
  */
  $u.inv = function(x) {
    if (arguments.length === 0) {
      throw new Error('not enough input arguments');
    }
    if (!$u.issquare(x)) {
      throw new Error('matrix must be square');
    }
    if ($u.isnumber(x)) {
      return 1/x;
    }
    var m = $u.nrows(x);
    var I = $u.eye(m);
    return $u.linsolve(x,I);

  }

}
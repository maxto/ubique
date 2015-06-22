/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method ncols
 * @summary Number of columns in vector|matrix MxN
 * @description Number of columns in vector|matrix. Array ~ Row vector, returns N.
 * 
 * @param  {array|matrix} x array of elements
 * @return {number}   
 *
 * @example
 * ubique.ncols([5,6,7]);
 * // 3
 * 
 * ubique.ncols([[3,2,7],[4,5,6]]);
 * //  3
 */
 $u.ncols = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return $u.size(x)[1];
}

}
/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method nrows
 * @summary Number of rows in vector|matrix
 * @description Number of rows in vector|matrix
 * 
 * @param  {array|matrix} x array of elements
 * @return {number}  
 *
 * @example
 * ubique.nrows([5,6,7]);
 * // 3
 * ubique.nrows([[3,2,7],[4,5,6]]);
 * // 2
 */
 $u.nrows = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return $u.size(x)[0];
}

}
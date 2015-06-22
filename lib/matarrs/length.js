/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
* @method length
* @summary length of vector or largest array dimension
* @description  length of vector or largest array dimension
* 
* @param  {array|matrix} x array of elements
* @return {number}
*
* @example
* ubique.length([3,5,6]);
* // 3
* 
* ubique.length(5);
* // 1
* 
* ubique.length([[5,4],[-1,2]]);
* // 2
*/
$u.length = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return Math.max.apply(null,$u.size(x));
}

}
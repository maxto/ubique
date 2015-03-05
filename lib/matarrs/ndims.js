/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
* @method ndims
* @summary Number of array dimensions
* @description Number of array dimensions
* 
* @param  {array|matrix} x array of elements
* @return {number}  
*
* @example
* ubique.ndims([3,5,6]);
* // 2
* ubique.ndims([[3,2,7],[4,5,6]]);
* // 2
*/
$u.ndims = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return $u.length($u.size(x));
}

}
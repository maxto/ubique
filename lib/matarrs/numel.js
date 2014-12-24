/**
 * Array Dimensions
 */
 module.exports = function($u) {
	/**
 * @method numel
 * @summary Number of elements in an array
 * @description Number of elements in an array
 * 
 * @param  {array|matrix} x array of elements
 * @return {number} 
 *
 * @example
 * ubique.numel([3,5,6]); // 3
 * ubique.numel([[3,2,7],[4,5,6]]); // 6
 */
 $u.numel = function(x) {
 	return $u.size(x)[0] * $u.size(x)[1];
 }

}
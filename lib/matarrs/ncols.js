/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method ncols
 * @summary Number of columns in vector|matrix
 * @description Number of columns in vector|matrix
 * 
 * @param  {array|matrix} x array of elements
 * @return {number}   
 *
 * @example
 * ubique.ncols([5,6,7]); // 1
 * ubique.ncols([[3,2,7],[4,5,6]]); //  3
 */
 $u.ncols = function(x) {
 	return $u.size(x)[1];
 }

}
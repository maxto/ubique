/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method isrow
 * @summary True for row vector
 * @description True for row vector
 *              
 * @param  {matrix}  x input matrix
 * @return {Boolean}   
 *
 * @example
 * ubique.isrow([[2,2]]); // true
 */
 $u.isrow = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.nrows(x) === 1 && $u.ncols(x) > 1) {
 		return true;
 	}
 	return false;
 }

}
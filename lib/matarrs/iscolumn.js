/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method iscolumn
 * @summary True for column vector
 * @description True for column vector
 *              
 * @param  {matrix}  x input matrix
 * @return {Boolean}   
 *
 * @example
 * ubique.iscolumn([[2],[2]]); // true
 */
 $u.iscolumn = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.nrows(x) > 1 && $u.ncols(x) === 1) {
 		return true;
 	}
 	return false;
 }

}
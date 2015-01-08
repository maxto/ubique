/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method isscalar
 * @summary True for scalar input
 * @description True for scalar input
 *              
 * @param  {number|array|matrix}  x input 
 * @return {Boolean}   
 *
 * @example
 * ubique.isscalar(2); // true
 * ubique.isscalar([2]); // true
 * ubique.isscalar([[2]]); // true
 */
 $u.isscalar = function(x) {
 	if ($u.nrows(x) === 1 && $u.ncols(x) === 1) {
 		return true;
 	}
 	return false;
 }

}
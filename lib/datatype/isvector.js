/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method isvector
 * @summary True for vector input
 * @description True for vector input
 *              
 * @param  {matrix}  x matrix Nx1 or 1xN
 * @return {Boolean}   
 *
 * @example
 * ubique.isvector([[5,6,7]]); // true
 * ubique.isvector([[5],[6],[7]]); // true
 */
 $u.isvector = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.ismatrix(x)) {
 		if (($u.iscolumn(x) === true) || ($u.isrow(x) === true)) {
 			return true;
 		}
 		return false;
 	}
 	return false;
 }
}
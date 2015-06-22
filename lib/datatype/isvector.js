/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method isvector
 * @summary True for vector input
 * @description True for vector input. Vector can have the same dimension of array but array is array and vector
 * is an array of array (= matrix with 1 column or row)
 *              
 * @param  {matrix} x matrix with dimension Mx1 or 1xN
 * @return {boolean}   
 *
 * @example
 * ubique.isvector([[5,6,7]]);
 * // true
 * 
 * ubique.isvector([[5],[6],[7]]);
 * // true
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
/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method issquare
 * @summary True for square matrix
 * @description True for square matrix
 *              
 * @param  {matrix}  x input matrix
 * @return {Boolean}   
 *
 * @example
 * ubique.issquare([[9, 5], [6, 1]]); // true
 */
 $u.issquare = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}

 	if ($u.nrows(x) === $u.ncols(x)) {
 		return true;
 	}
 	return false;
 }

}
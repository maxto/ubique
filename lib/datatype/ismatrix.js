/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method ismatrix
 * @summary True for matrix
 * @description True for array of array (matrix)
 * 
 * @param  {matrix}  x matrix
 * @return {Boolean}  
 *
 * @example
 * ubique.ismatrix([[1,3,4]]); // true (1x3)
 * ubique.ismatrix([[1],[3],[4]]); // true (3x1)
 */
 $u.ismatrix = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	} 
 	if ($u.isundefined(x) || $u.isnull(x) || !$u.isarray(x[0])) {
 		return false;
 	}
 	return $u.isarray(x[0]);
 }

}
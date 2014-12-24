/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method isempty
 * @summary True for empty array or matrix
 * @description  True for empty array or matrix
 *              
 * @param  {array|matrix}  x input matrix
 * @return {Boolean}   
 *
 * @example
 * ubique.isempty([]); // true
 * ubique.isempty([[]]); // true
 */
 $u.isempty = function(x) {
 	if ($u.isarray(x) && x.length === 0) {
 		return true;
 	}
 	if ($u.ismatrix(x) && x[0].length === 0) {
 		return true;
 	}
 	return false;
 }

}
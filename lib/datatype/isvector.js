/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method isvector
 * @summary True for vector input
 * @description True for vector input
 *              
 * @param  {array|matrix}  x input 
 * @return {Boolean}   
 *
 * @example
 * ubique.isvector([1,2,3]); // true
 * ubique.isvector([[3,4,5]]); // true
 */
 $u.isvector = function(x) {
 	if (($u.iscolumn(x) === true) || ($u.isrow(x) === true)) {
 		return true;
 	}
 	return false;
 }

}
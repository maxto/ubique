/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method fliplr
 * @summary Flip matrix left to right
 * @description Flip matrix left to right
 * 
 * @param  {array|matrix} x array or matrix of lements
 * @return {array|matrix}   
 *
 * @example
 * ubique.fliplr([[1,4],[2,5],[3,6]]); // [[4, 1], [5, 2], [6, 3]]
 */
 $u.fliplr = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	return $u.flip(x,0);
 }

}

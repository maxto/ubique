/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method flipud 
 * @summary Flip matrix up to down
 * @description Flip matrix up to down
 * 
 * @param  {array|matrix} x array or matrix of lements
 * @return {array|matrix}   
 *
 * @example
 * ubique.fliplr([[1,4],[2,5],[3,6]]); // [[3, 6], [2, 5], [1, 4]]
 */
 $u.flipud = function(x) {
 		if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	return $u.flip(x,1);
 }

}
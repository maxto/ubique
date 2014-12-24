/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method end
 * @summary Last index in array or matrix
 * @description Last index in array or matrix. Indexing is in the range [0...N-1]
 *  
 * @param  {array|matrix} x values
 * @return {array}   
 * 
 * @example
 * ubique.end([5,6,3]); // [2, 0]
 * ubique.end([[4,5,0],[-1,2,-3]]); // [1, 2]
 */
 $u.end = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	return [$u.nrows(x) - 1,$u.ncols(x) - 1];
 }

}


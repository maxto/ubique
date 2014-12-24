/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method  repmat
 * @summary Create an array or matrix with custom values
 * @description  Create an array or matrix with custom values
 *
 * @param  {number|boolean|NaN|...} val  value assigned to every elements of array or matrix
 * @param  {number} m number of matrix rows
 * @param  {number} n number of matrix columns
 * @return {number|array|matrix}     
 *
 * @example
 * ubique.repmat(10,3); // [[10], [10], [10]]
 * ubique.repmat(0.5,3,2); // [[0.5, 0.5], [0.5, 0.5], [0.5, 0.5]]
 * ubique.repmat(0.5,4,1); // [[0.5], [0.5], [0.5], [0.5]]
 * ubique.repmat(0.5,1,4); // [[ 0.5, 0.5, 0.5 ]]
 * ubique.repmat(NaN,2,4); // [[NaN, NaN, NaN, NaN], [NaN, NaN, NaN, NaN]]
 * ubique.repmat(true,4,1);  // [[true], [true], [true], [true]]
 * ubique.repmat([5,6,3],3,2); // [[[5, 6, 3], [5, 6, 3]], [[5, 6, 3], [5, 6, 3]], [[5, 6, 3], [5, 6, 3]]]
 */
 $u.repmat = function(x,m,n) {
 	if (arguments.length < 1) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		return x;
 	}
 	if (arguments.length === 2) {
 		return $u.matrix(m,1,x);
 	}
 	return $u.matrix(m,n,x);
 }

}
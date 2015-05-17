/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method row
 * @summary Get a row of matrix
 * @description  Get a row of a matrix
 * 
 * @param  {array|matrix} x matrix of elements
 * @param  {number} n row number (indexing from 0 to n - 1)
 * @return {array}   
 *
 * @example
 * ubique.row([[5,6,5],[7,8,-1]],0);
 * // [5, 6, 5]
 * ubique.row([5,6,5]);
 * // 5
 */
 $u.row = function(x,n) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
   n = n || 0;
   if ($u.isarray(x)) {
     return x[n];
   }
   if (!$u.isinteger(n) || n < 0 || n >= $u.nrows(x)) {
     throw new Error('row must be an integer between 0 and N - 1 rows');
   }
   return x[n];
 }

}
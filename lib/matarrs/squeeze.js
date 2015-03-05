/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method squeeze
 * @summary Remove singleton dimensions from N-D arrays (matrices)
 * @description Remove singleton dimensions N_D arrays (matrices).
 * Number returns number and 1-D array returns 1-D array.
 * 
 * @param  {string|number|array|matrix} x elements of X
 * @return {string|number|array|matrix}   
 *
 * @example
 * ubique.squeeze([[[[[8]]]]]);
 * // [[ 8 ]]
 * ubique.squeeze([[[[3,4,5]]]]); 
 * // [[3, 4, 5]]
 * ubique.squeeze([[[[[['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']]]]]]);
 * // [ [ '31-12-2014', '31-01-2015' ],
*  // [ '15-02-2015', '01-03-2015' ] ]
 */
 $u.squeeze = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length >1) {
 		throw new Error('too many input arguments');
 	}
 	if ($u.isnumber(x) || $u.isstring(x)) {
 		return x;
 	}
 	var size = $u.size(x);
 	while (size.length > 2) {
 		x = x[0];
 		size = $u.size(x);
 	}
 	return x;
 }

}
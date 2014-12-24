/**
* Array Creation and Concatenation
*/
module.exports = function($u) {
/**
 * @method tomat
 * @summary Convert number or array to matrix
 * @description Convert number or array to matrix
 *              
 * @param  {number|array} x input
 * @return {matrix}     
 *
 * @example
 * ubique.tomat(5); // [[5]]
 * ubique.tomat([5,6,3]); // [[5], [6], [3]]
 */
 $u.tomat = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {
 		return [[x]];
 	} else
 	if ($u.isarray(x)) {
 		var out = $u.matrix(x.length,1);
 		for (var i = 0;i < x.length;i++) {
 			out[i][0] = x[i];
 		}
 		return out;
 	} else 
 	if ($u.ismatrix(x)) {
 		return x;
 	} else {
 		throw new Error('unknown input arguments');
 	}

 }

}
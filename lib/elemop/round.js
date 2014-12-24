/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
 	/**
 * @method round
 * @summary Round to nearest integer
 * @description Round to nearest integer. Element-wise for matrix
 * 
 * @param  {number|array|matrix} x values
 * @param  {number} n number of decimal (def: 0)
 * @return {number|array|matrix}   
 *
 * @example
 * ubique.round(Math.PI,12); // 3.14159265359
 * ubique.round([-1.4543,4.5234],2); // [-1.45, 4.52]
 * ubique.round([-1.9,-0.2,3.4,5.6,7.0]); // [-2, 0, 3, 6, 7]
 * ubique.round([[1.45,-2.3],[1.1,-4.3]]); // [[1, -2], [1, -4]]
 */
 $u.round = function(x,n) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		n = 0;
 	}
 	var p = Math.pow(10,n);
 	if ($u.isnumber(x)) {
 		return Math.round(x*p)/p
 	}
 	return $u.arrayfun(x,function(val){return Math.round(val*p)/p;});
 }

}
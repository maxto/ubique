/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method clone
 * @summary Create a clone of the input array or matrix
 * @description Create a clone of the input array or matrix
 * 
 * @param  {array|matrix} x array or matrix
 * @return {array|matrix}       
 *
 * @example
 * var b = [[-1,3,-1],[4,5,9]];
 * var c = [5,6,3];
 * var d = [[[5]]];
 * 
 * ubique.clone(b); // [[-1,3,-1],[4,5,9]]
 * ubique.clone(c); // [5,6,3]
 * ubique.clone(d): // [[[5]]]
 */
 $u.clone = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber) {
 		return x
 	}
 	return $u.arrayfun(x,function(a){return a;});
 }
}
/**
 * Array Creation and Concatenation
 */
module.exports = function($u) {
/**
 * @method isarray
 * @summary True for array
 * @description  True for array
 * 
 * @param  {array} x element
 * @return {boolean}   
 *
 * @example
 * ubique.isarray([1.4,2.3,3]); // true
 */
 $u.isarray = function(x) {
 	return Array.isArray(x) && !Array.isArray(x[0]);
 }

}

/**
 * Logical Operations
 */
 module.exports = function($u) {
/**
 * @method islogical
 * @summary True for logical input
 * @description True for logical input
 *              
 * @param  {boolean}  x element
 * @return {boolean}   
 *
 * @example
 * ubique.islogical(true); // true
 */
 $u.islogical = function(x) {
 	return typeof x === 'boolean';
 }

}
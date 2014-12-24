/**
 * Data Type Identification
 */
 module.exports = function($u) {
/**
 * @method isnumber
 * @summary True for number
 * @description  True for number or NaN value
 * 
 * @param  {number}  x element
 * @return {boolean}   
 *
 * @example
 * ubique.isnumber(5); // true
 * ubique.isnumber(NaN); // true 
 */
 $u.isnumber = function(x) {
 	return typeof x === 'number';
 }

}
/**
 * Data Type Identification
 */
 module.exports = function($u) {
/**
 * @method isstring
 * @summary True for string values
 * @description  True for string values
 * 
 * @param  {string}  x element
 * @return {boolean|array}   
 *
 * @example
 * ubique.isstring('test'); // true
 */
 $u.isstring = function(x) {
 	return typeof x === 'string';
 }

}
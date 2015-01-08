/**
 * Data Type Identification
 */
 module.exports = function($u) {
/**
* @method isfunction
* @summary True for function
* @description true for function
* 
* @param  {function}  x function
* @return {Boolean}   
*
* @example
* ubique.isfunction(function(a){return console.log(a);}); // true
* ubique.isfunction(Math.log); // true
*/
$u.isfunction = function(x) {
	return typeof x === 'function';
}

}
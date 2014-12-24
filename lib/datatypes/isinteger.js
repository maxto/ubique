/**
 * Data Type Identification
 */
 module.exports = function($u) {
/**
* @method isinteger
* @summary True for integer
* @description  True for integer
* 
* @param  {integer}  x element
* @return {boolean}   
*
* @example
* ubique.isinteger(5); // true
*/
$u.isinteger = function(x) {
	return $u.isnumber(x) && Math.round(x) === x;
}

}
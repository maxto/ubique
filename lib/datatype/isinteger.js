/**
 * Data Type Identification
 */
 module.exports = function($u) {
/**
* @method isinteger
* @summary True for integer
* @description  True for integer
* 
* @param  {number} x element
* @return {boolean}
*
* @example
* ubique.isinteger(5);
* // true
*/
$u.isinteger = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return $u.isnumber(x) && Math.round(x) === x;
}

}
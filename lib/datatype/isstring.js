/**
 * Data Type Identification
 */
 module.exports = function($u) {
/**
 * @method isstring
 * @summary True for string values
 * @description  True for string values
 * 
 * @param  {string} x element
 * @return {boolean|array}   
 *
 * @example
 * ubique.isstring('test');
 * // true
 */
 $u.isstring = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return typeof x === 'string';
}

}
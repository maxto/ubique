/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method isarray
 * @summary True for array
 * @description  True for array
 * 
 * @param  {array} x input element
 * @return {boolean}   
 *
 * @example
 * ubique.isarray([1.4,2.3,3]);
 * // true
 */
 $u.isarray = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return Array.isArray(x) && !Array.isArray(x[0]);
}

}

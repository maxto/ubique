/**
 * Logical Operations
 */
 module.exports = function($u) {
/**
 * @method islogical
 * @summary True for logical input
 * @description True for logical input
 *              
 * @param  {boolean} x element
 * @return {boolean}   
 *
 * @example
 * ubique.islogical(true);
 * // true
 */
 $u.islogical = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return typeof x === 'boolean';
}

}
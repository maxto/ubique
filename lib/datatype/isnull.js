/**
 * Data Type Identification
 */
 module.exports = function($u) {
/**
 * @method isnull
 * @summary True for null values
 * @description  True for null values
 * 
 * @param  {null} x element
 * @return {boolean}   
 *
 * @example
 * ubique.isnull(null);
 * // true
 */
 $u.isnull = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return x === null;
}

}
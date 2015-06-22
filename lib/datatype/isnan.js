/**
 * Numeric Types
 */
 module.exports = function($u) {
/**
 * @method isnan
 * @summary True only for NaN input
 * @description True only for NaN input. For [null,true,'hello',5,{},undefined,'NaN'] returns False.
 *              
 * @param  {NaN} x element
 * @return {boolean}   
 *
 * @example
 * ubique.isnan(NaN);
 * // true
 */
 $u.isnan = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return x != x;
}

}
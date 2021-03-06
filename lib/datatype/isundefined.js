/**
 * Data Type Identification
 */
 module.exports = function($u) {
 /**
 * @method isundefined
 * @summary True for undefined values
 * @description  True for undefined values
 * 
 * @param  {undefined} x element
 * @return {boolean}   
 *
 * @example
 * ubique.isundefined(undefined);
 * // true
 */
 $u.isundefined = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return x === undefined;
}

}
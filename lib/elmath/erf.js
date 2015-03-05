/**
 * Special Functions
 */
 module.exports = function($u) {
/**
 * @method  erf
 * @summary Error function
 * @description Error function
 * 
 * Approximation with maximal error 1.2x10^-7
 * erf(x) = 2/sqrt(pi) * integral from 0 to x of exp(-t^2) dt
 * 
 * @param  {number} x real value
 * @return {number}
 * 
 * @example
 * ubique.erf(0.5);
 * // 0.5204999077232426
 */
 $u.erf = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return 1 - $u.erfc(x);
}

}
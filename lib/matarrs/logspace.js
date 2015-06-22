/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method logspace
 * @summary Create logarithmically spaced arrays
 * @description  Create logarithmically spaced arrays
 *            
 * @param  {number} a lower bound
 * @param  {number} b upper bound
 * @param  {number} n number of points
 * @return {array}
 *
 * @example
 * ubique.logspace(0,1,5);
 * // [ 1, 1.778279, 3.162278, 5.623413, 10 ]
 */
 $u.logspace = function(a,b,n) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  n = n == null ? 10 : n;
  return $u.linspace(a,b,n).map(function(val){return Math.pow(10,val)});
}

}
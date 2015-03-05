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
 * // [1, 1.7782794100389228, 3.1622776601683795, 5.623413251903491, 10]
 */
 $u.logspace = function(a,b,n) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    n = 10;
  }
  return $u.linspace(a,b,n).map(function(val){return Math.pow(10,val)});
}

}
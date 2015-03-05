/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method linspace
 * @summary Create linearly spaced arrays
 * @description  Create linearly spaced arrays
 *            
 * @param  {number} a lower bound
 * @param  {number} b upper bound
 * @param  {number} n number of points
 * @return {array}
 *
 * @example
 * ubique.linspace(1,10,5);
 * // [1, 3.25, 5.5, 7.75, 10]
 */
 $u.linspace = function(a,b,n) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    n = 10;
  }
  var v = new Array(n),
  step = (b - a) / (n - 1);
  v[0] = a;
  v[n - 1] = b;
  for (var i = 0;i < n;i++) {
   v[i] = a + step * i;
 }
 return v;
}

}
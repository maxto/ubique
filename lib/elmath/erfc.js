/**
 * Special Functions
 */
 module.exports = function($u) {
/**
 * @method erfc
 * @summary Complementary error function
 * @description Complementary error function
 *
 * erfc(x) = 2/sqrt(pi) * integral from x to inf of exp(-t^2) dt
 * erfc(x) = 1 - erf(x)
 * 
 * @param  {number} x must be real
 * @return {number}
 * 
 * @example
 * ubique.erfc(0.5); // 0.47950009227675744
 */
 $u.erfc = function(x) {
  var z = Math.abs(x),
  t = 1 / (0.5 * z + 1),
  a1 = t * 0.17087277 + -0.82215223,
  a2 = t * a1 + 1.48851587,
  a3 = t * a2 + -1.13520398,
  a4 = t * a3 + 0.27886807,
  a5 = t * a4 + -0.18628806,
  a6 = t * a5 + 0.09678418,
  a7 = t * a6 + 0.37409196,
  a8 = t * a7 + 1.00002368,
  a9 = t * a8,
  a10 = -z * z - 1.26551223 + a9,
  a = t * Math.exp(a10);

  if (x < 0) {a = 2 - a;}
  return a;
}

}
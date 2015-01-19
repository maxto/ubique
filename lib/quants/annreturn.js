/**
 * Performance metrics
 */
module.exports = function($u) {
/**
 * @method annreturn
 * @summary Annualisation of return (1 + X) ^ (t / n)
 * @description Annualisation of return (1 + X) ^ (t / n)
 * 
 * @param  {number} r rate of return
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
 * @param  {number} n period of interest
 * @return {number}   
 *
 * @example
 * var r = 0.12, t = 12, n = 20;
 * ubique.annreturn(r,t,n); //  0.0703623234312547
 */
$u.annreturn = function(r,t,n) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    n = 1;
  }
  return $u.power(1 + r,(t / n)) - 1;
}
}

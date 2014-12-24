/**
 * Descriptive Statistic
 */
 module.exports = function(ubique) {
/**
 * @method median
 * @summary Median value in array
 * @description Median value in array
 * 
 * @param  {array} x array of values
 * @return {number}   
 *
 * @example
 * median([0.01,0.02,-0.05]);
 * //  0.01
 * 
 */
 ubique.median = function(x) {
  var n = x.length - 1,
  idx = Math.floor(n / 2);
  x = ubique.sort(x);
  if( n % 2 === 0 ) {
    return x[idx];
  } else {
    return (x[idx - 1] + x[idx]) / 2;
  }
}

}

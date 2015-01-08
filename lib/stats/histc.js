/**
 * Basic Statistic
 */
 module.exports = function($u) {
/**
 * @method histc
 * @summary Histogram count
 * @description  For array X counts the number of values in X that fall between the elements in the BINS array. Values outside the range in BINS are not counted.
 * 
 * @param  {array} x     array of values
 * @param  {number|array} bins  number of bins (as NUMBER) or array of edges (as ARRAY) (def: 10)
 * @return {object}       
 *
 * @example
 * var n = [87,27,45,62,3,52,20,43,74,61];
 * var bins = [0,20,40,60,80,100];
 * ubique.histc(n,bins);
 * // [ { bins: 0, freq: 1 },
 * // { bins: 20, freq: 2 },
 * // { bins: 40, freq: 3 },
 * // { bins: 60, freq: 3 },
 * // { bins: 80, freq: 1 },
 * // { bins: 100, freq: 0 } ]
 *
 * ubique.histc(n)
 * // [ { bins: 3, freq: 1 },
 * // { bins: 11.4, freq: 0 },
 * // { bins: 19.8, freq: 2 },
 * // { bins: 28.200000000000003, freq: 0 },
 * // { bins: 36.6, freq: 1 },
 * // { bins: 45, freq: 2 },
 * // { bins: 53.400000000000006, freq: 1 },
 * // { bins: 61.800000000000004, freq: 1 },
 * // { bins: 70.2, freq: 1 },
 * // { bins: 78.60000000000001, freq: 0 },
 * // { bins: 87, freq: 1 } ]
 *
 * ubique.histc(n,5)
 * // [ { bins: 3, freq: 1 },
 * // { bins: 19.8, freq: 2 },
 * // { bins: 36.6, freq: 3 },
 * // { bins: 53.400000000000006, freq: 2 },
 * // { bins: 70.2, freq: 1 },
 * // { bins: 87, freq: 1 } ]
 */
 $u.histc = function(x,bins) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    bins = 10;
  }
  var y = [],
  h = [], 
  out = [];
  if ($u.isnumber(bins)) {
    var xmin = $u.min(x),
    xmax = $u.max(x),
    binw = (xmax - xmin) / bins,
    anum = $u.colon(0,bins);
    y = $u.plus($u.times(anum,binw),xmin);
  } else {
    y = bins;
  }

  for (var k = 0; k < y.length; k++) {
    h[k] = 0;
    for (var i = 0; i < x.length; i++) {
      if (y[k] <= x[i] && x[i] < y[k + 1]) {
        h[k] += 1;
      } else 
      if (x[i] === y[k]) {
        h[k] += 1;
      }
    }
    out.push({bins: y[k], freq: h[k]})
  }
  return out;
}

}
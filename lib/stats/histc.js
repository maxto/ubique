/**
 * Basic Statistic
 */
 module.exports = function($u) {
/**
 * @method histc
 * @summary Histogram count
 * @description  For array X counts the number of values in X that fall between the elements in the BINS array. Values outside the range in BINS are not counted.
 * 
 * Returns an object with:
 * 
 * bins - number of bins
 * count - number of matched elements
 * freq - frequency 
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number|array} bins number of bins (as NUMBER) or array of edges (as ARRAY) (def: 10)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {aray|matrix}       
 *
 * @example
 * var A = [87,27,45,62,3,52,20,43,74,61];
 * var B = [12,34,57,43,88,75,89,2,27,29];
 * 
 * ubique.histc(A,[0,20,40,60,80,100]);
 * // [ { bins: 0, count: 1, freq: 0.1 },
 * //   { bins: 20, count: 2, freq: 0.2 },
 * //   { bins: 40, count: 3, freq: 0.3 },
 * //   { bins: 60, count: 3, freq: 0.3 },
 * //   { bins: 80, count: 1, freq: 0.1 },
 * //   { bins: 100, count: 0, freq: 0 } ]
 *
 * ubique.histc(ubique.cat(0,A,B),[0,50,100]);
 * // [ [ { bins: 0, count: 5, freq: 0.5 },
 * //     { bins: 50, count: 5, freq: 0.5 },
 * //     { bins: 100, count: 0, freq: 0 } ],
 * //   [ { bins: 0, count: 6, freq: 0.6 },
 * //     { bins: 50, count: 4, freq: 0.4 },
 * //     { bins: 100, count: 0, freq: 0 } ] ]
 */
 $u.histc = function(x,bins,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  bins = bins == null ? 10 : bins;
  dim  = dim == null ? 0 : dim;

  var _histc = function(a,bins) {
    var y = [];
    var h = []; 
    var out = [];
    if ($u.isnumber(bins)) {
      var xmin = $u.min(a),
      xmax = $u.max(a),
      binw = (xmax - xmin) / bins,
      anum = $u.colon(0,bins);
      y = $u.plus($u.times(anum,binw),xmin);
    } else {
      y = bins;
    }

    for (var k = 0; k < y.length; k++) {
      h[k] = 0;
      for (var i = 0; i < a.length; i++) {
        if (y[k] <= a[i] && a[i] < y[k + 1]) {
          h[k] += 1;
        } else 
        if (a[i] === y[k]) {
          h[k] += 1;
        }
      }
      out.push({bins: y[k], count: h[k], freq: h[k]/a.length})
    }
    return out;
  }

  if ($u.isnumber(x)) {
    return NaN;
  }
  return $u.vectorfun(dim,x,_histc,bins);
}
}
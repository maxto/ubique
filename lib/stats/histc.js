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
 * bins(Number of bins)
 * count(number of elemnts in the bin)
 * freq(frequency) 
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number|array} bins number of bins (as NUMBER) or array of edges (as ARRAY) (def: 10)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {aray|matrix}       
 *
 * @example
 * ubique.histc([87,27,45,62,3,52,20,43,74,61],[0,20,40,60,80,100]);
 * // [ { bins: 0, count: 1, freq: 0.1 },
 * //   { bins: 20, count: 2, freq: 0.2 },
 * //   { bins: 40, count: 3, freq: 0.3 },
 * //   { bins: 60, count: 3, freq: 0.3 },
 * //   { bins: 80, count: 1, freq: 0.1 },
 * //   { bins: 100, count: 0, freq: 0 } ]
 *
 */
 $u.histc = function(x,bins,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    bins = 10;
    dim = 1;
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var _histc = function(a,bins) {
    var y = [],
    h = [], 
    out = [];
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
    return 0;
  }
  if ($u.isarray(x)) {
    return _histc(x,bins);
  }
  return $u.vectorfun(x,function(val){ return _histc(val,bins);},dim);
}
}